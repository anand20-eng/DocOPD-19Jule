import React, { useState, useCallback } from 'react';
import {
	Text, FlatList, View, TouchableOpacity, ScrollView, Image, BackHandler, Alert
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { routes } from '../../Navigation/routes'
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-native-paper';
import { deletePatient, deletePatientById, getAllPatient, updatePatient } from '../../Adapter/Redux/Auth/action/addPatientAction';
import { passPatientAction } from '../../Adapter/Redux/Auth/action/passPatientAction';
import { SegmentComponent } from '../../Component'
import { ButtonComponent } from '../../Component';
import { activePaShow } from './util';
import { useFocusEffect } from '@react-navigation/native';
import { withTheme } from '../../Theme';
const Home = ({ navigation, theme }) => {

	const role = useSelector((state) => state.docAndRe) || {};
	const patientUsers = useSelector((state) => state.paRe.patientUs) || [];
	const dispatch = useDispatch();
	const [activePa, setActivePa] = useState([]);
	const [activePa1, setActivePa1] = useState([])

	const hardwareBackPressCustom = useCallback(() => {
		return true;
	}, []);
	useFocusEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', hardwareBackPressCustom)
		return () => {
			BackHandler.removeEventListener('hardwareBackPress', hardwareBackPressCustom)
		};
	}, [role]);

	const gotoAddPatient = () => {
		navigation.navigate(routes.SearchPatientScreen.name)
	}

	const paDelete = (item) => {
		dispatch(deletePatient(item));
	}
	const passPatient = (item) => {
		const patientPassData = patientUsers.find((element) => element.id == item)
		setActivePa([...activePa, patientPassData])
		setActivePa1([patientPassData])
		dispatch(deletePatient(item));
		dispatch(passPatientAction(patientPassData));
	}

	const queue = () => {
		setActivePa([])
	}

	const activePatientShow = () => {
		activePaShow(setActivePa, activePa, activePa1)
	}


	return (

		<>
			{activePa.length > 0 ? activePa.map((item) => { /// TODO: do map remove 
				return (
					<>
						<View style={styles.container1}>
							<View>
								<Image style={styles.profileImg}
									source={{ uri: item.profile }} />
							</View>
							<Text> {item.firstName} {item.lastName}</Text>
							<Text>{item.email}</Text><Text>{item.contact}</Text>
							<Text>{item.gender}</Text><Text>{item.weight}</Text>
						</View>
						<View style={styles.tabView1}>
							<SegmentComponent activePatient={activePa} queue={queue}
							/>
						</View>
					</>
				);
			}
			)

				: (<><ScrollView
					nestedScrollEnabled={true} style={styles.container}>

					<FlatList
						style={{ height: '100%', marginTop: 10 }}
						data={patientUsers}
						keyExtractor={(data) => data.id}
						numColumns={1}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<View style={styles.innerContainer}>
								<Card style={styles.Card}>
									<>
										<View style={{ flexDirection: 'row' }}>
											<View style={{ marginTop: 2 }}>
												<Image style={styles.profileImg}
													source={{ uri: item.profile }} />
											</View>
											<View style={{
												marginHorizontal: 290,
												position: 'absolute',
												top: 10
											}}>
												<Text>
													<TouchableOpacity onPress={() => {
														paDelete(item.id);
													}}>
														<AntDesign name="delete" size={18} color="black" />
													</TouchableOpacity>
												</Text>
											</View>
										</View>
										<Text style={styles.itemHeading}> {item.firstName} {item.lastName} </Text>
										<Text style={styles.itemText}> {item.contact} </Text>
										<Text style={styles.itemText}> {item.gender} </Text>

									</>
									<View style={{ marginStart: 275 }}>
										<TouchableOpacity
											onPress={() => passPatient(item.id)}
										>
											<Text>PASS</Text>
										</TouchableOpacity>
									</View>


								</Card>
							</View>

						)} />

				</ScrollView>
					<View style={{ backgroundColor: '#FFFFFF' }}>
						<TouchableOpacity
							style={styles.floatingButton}
							onPress={gotoAddPatient}>
							<AntDesign name="pluscircle" size={50} color="#0c89fb" />
						</TouchableOpacity>
					</View>

					<View style={styles.tabView1}>
						<SegmentComponent activePatientShow={() => activePatientShow()}
							againActivePa={activePa1}
						/>
					</View>

				</>



				)}

		</>


	)


};

// export default withTheme(Home);
export default Home;


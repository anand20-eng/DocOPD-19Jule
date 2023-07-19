import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { routes } from '../../Navigation/routes'
import { SegmentComponent } from '../../Component';
import { styles } from './styles'
import { useEffect } from 'react';
import { withTheme } from '../../Theme';
const ActivePa = ({navigation, theme}) => {
	const route = useRoute()
	 const arr = route.params.activePatient
	const queue = () => {
	navigation.navigate(routes.HomeScreen.name)
	}

	return (
		<>
			<View style={styles.container}>
				{arr.map((item) => {
					return (

						<>
							<View>
							<Image style={styles.profileImg}
											source={{ uri: item.profile }} />
							</View>
							<Text> {item.firstName} {item.lastName}</Text>
							<Text>{item.email}</Text><Text>{item.contact}</Text>
							<Text>{item.gender}</Text><Text>{item.weight}</Text></>

					);
				})}

			</View>
			<View style={styles.tabView1}>
				<SegmentComponent  activePatient={route.params.activePatient}/>
			</View>
		</>
	)

};

// export default withTheme(ActivePa);
export default ActivePa;


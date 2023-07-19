import React, { useState } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-number-input';
import { useDispatch } from 'react-redux';
import { routes } from '../../Navigation/routes'
import { ButtonComponent } from '../../Component';
import { styles } from './styles';
import { addPatientSuccess, getPatientByContact } from '../../Adapter/Redux/Auth/action/addPatientAction';
import { withTheme } from '../../Theme';
const SearchPatient = ({ navigation, theme }) => {
	const phoneInput = React.useRef(null);
	const dispatch = useDispatch();
	const [contact, setContact] = useState('');
	const [focused10, setFocused10] = useState(false);
	const [searchedPatient, setSearchedPatient] = useState()

	const searchPatientByContact = () => {
		getPatientByContact(contact).then(response => {
			delete response.data.id;
			if (response.data) {
				dispatch(addPatientSuccess(response.data));
				navigation.navigate(routes.HomeScreen.name)
			} else {
				navigation.navigate(routes.AddPatientScreen.name)
			}
		}).catch(error => {
			navigation.navigate(routes.AddPatientScreen.name)
		})
	}
	const gotoAddPatient = () => {
		navigation.navigate(routes.AddPatientScreen.name)
	}

	return (
		<>

			<View style={styles.container}>
				<View
					style={[styles.input1, { borderBottomColor: focused10 === 'input10' ? '#0c89fb' : '#aaa', }]}
					onFocus={() => setFocused10('input10')}
					onBlur={() => setFocused10(null)}
				>
					<PhoneInput
						ref={phoneInput}
						defaultValue={contact}
						containerStyle={styles.phoneContainer}
						textContainerStyle={styles.textInput}
						onChangeFormattedText={(contact) => setContact(contact)}
						defaultCode="IN"
						layout='first'
						withShadow
						autoFocus
					/>
				</View>

				<View style={{ marginTop: 50 }}>
					<ButtonComponent onPress={searchPatientByContact}
						title='Search MobileNO' />
				</View>
			</View>
			<View style={{ backgroundColor: '#FFFFFF' }}>
				<TouchableOpacity
					style={styles.floatingButton}
					onPress={gotoAddPatient}>
					<AntDesign name="pluscircle" size={50} color="#0c89fb" />
				</TouchableOpacity>
			</View>
		</>
	)

}

// export default withTheme(SearchPatient);
export default SearchPatient;


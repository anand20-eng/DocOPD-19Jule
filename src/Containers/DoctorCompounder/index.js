import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native'
import { ButtonComponent } from '../../Component';
import FloatingLabelInput from '../../Component/Input';
import PhoneInput from 'react-native-phone-number-input'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { DropdownComp } from '../../Component'
import { roleData } from './role'
import { styles } from './styles'
import { routes } from '../../Navigation/routes'
import { validation } from './validation';
import { useDispatch } from 'react-redux';
import { withTheme } from '../../Theme';
const DoctorCompounder = ({ navigation, theme }) => {
	const dispatch = useDispatch();
	const [user, setUser] = useState({
		contact: '',
		password: ''
	})
	const onRoleOpen = useCallback(() => {
		setRoleOpen(true);
	}, []);

	const phoneInput = React.useRef(null);
	const [roleOpen, setRoleOpen] = useState(false);
	const [roleValue, setRoleValue] = useState('');

	const [role, setRole] = useState(roleData);
	const [focused8, setFocused8] = useState(false);
	const [focused10, setFocused10] = useState(false);

	const handleChange = (key, value) => {
		let userData = user;
		userData = {
			...userData,
			[key]: value
		}
		setUser(userData);
	}
	const loginDoctor_Compounder = () => {
		user.role = roleValue
		var newContact = user.contact.split('+91').join("")
		user.contact = newContact
	   validation({ user, navigation, dispatch })
	}
	const goToAddDoctorCompounder = () => {
		navigation.navigate(routes.AddDoctorCompounderScreen.name);
	}
	return (
		<ScrollView style={styles.container}>

			<View
				style={[styles.input1, { borderBottomColor: focused10 === 'input10' ? '#0c89fb' : '#aaa', }]}
				onFocus={() => setFocused10('input10')}
				onBlur={() => setFocused10(null)}
			>
				<PhoneInput
					ref={phoneInput}
					defaultValue={user.contact}
					containerStyle={styles.phoneContainer}
					textContainerStyle={styles.textInput}
					onChangeFormattedText={value => {
						handleChange('contact', value);
					}}
					defaultCode="IN"
					layout='first'
					withShadow
					autoFocus
				/>
			</View>

			<View
				style={[styles.input1, { borderBottomColor: focused8 === 'input8' ? '#0c89fb' : '#aaa' }]}
				onFocus={() => setFocused8('input8')}
				onBlur={() => setFocused8(null)}
			>
				<MaterialCommunityIcons name="form-textbox-password" size={20} color={focused8 ? '#0c89fb' : '#aaa'}
					style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
				<FloatingLabelInput
					label='Password'
					value={user.password}
					updateData={(value) => handleChange('password', value)}
					hide={true} />
			</View>
			
			<View style={{ marginBottom: 10 }}>
				<DropdownComp
					Open={roleOpen}
					Value={roleValue}
					allItems={role}
					setOpen={setRoleOpen}
					setItemValue={setRoleValue}
					setItemsAll={setRole}
					placeholderName='Select Role'
					onItemsOpen={onRoleOpen}
					title='Role'
				/>
			</View>
			<View style={{ marginTop: 50 }}>
				<ButtonComponent primaryButton onPress={loginDoctor_Compounder}
					title='Login' />
			</View>
			<View style={{ marginTop: 20 }}>
				<ButtonComponent onPress={goToAddDoctorCompounder}
					title='Register' />
			</View>


		</ScrollView>
	)

}

export default withTheme(DoctorCompounder);
// export default DoctorCompounder;
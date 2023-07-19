import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ButtonComponent, TextComponent } from '../../Component';
import FloatingLabelInput from '../../Component/Input';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { routes } from '../../Navigation/routes'
import { styles } from './styles'
import { validation } from './validation';
import { deleteOrganization } from '../../Adapter/Redux/Auth/action/loginOrganization';
import { withTheme } from '../../Theme';
const Organization = ({ navigation, theme }) => {
	console.log('Organization Theme line 14 =>', theme)
	const [organization, setOrganization] = useState({
		userName: '',
		password: ''
	})
	const [data, setData] = useState('');
	const role = useSelector((state) => state.docAndRe) || [];
	useEffect(() => {
		if (role.compounder == 'compounder') {
			navigation.navigate(routes.HomeScreen.name)
		}
		if (role.doctor == 'doctor') {
			navigation.navigate(routes.MedicineDiscrepaniesScreen.name)
		}
		if (!role.doctor && !role.compounder) {
			navigation.navigate(routes.OrganizationScreen.name);
		}
	}, [])

	const [focused1, setFocused1] = useState(false);
	const [focused8, setFocused8] = useState(false);

	const handleChange = (key, value) => {
		let organizationInfo = organization;
		organizationInfo = {
			...organizationInfo,
			[key]: value
		}
		setOrganization(organizationInfo);
	}

	const AddOrganization = () => {
		validation(organization, navigation);
	}

	return (
		<KeyboardAwareScrollView style={styles.container}>
			<View style={{ marginTop: 120 }}>
				<TextComponent customStyle={{ fontSize: 20, color: 'black' }}
					title='Login to Organization' />
			</View>

			<View
				style={[styles.input1, { marginTop: 70 }, { borderBottomColor: focused8 === 'input8' ? '#0c89fb' : '#aaa' }]}
				onFocus={() => setFocused8('input8')}
				onBlur={() => setFocused8(null)}
			>
				<AntDesign name="user" size={20} color={focused8 ? '#0c89fb' : '#aaa'}
					style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
				<FloatingLabelInput
					label='UserName'
					value={organization.userName}
					updateData={(value) => handleChange('userName', value)} />

			</View>
			<View
				style={[styles.input1, { borderBottomColor: focused1 === 'input1' ? '#0c89fb' : '#aaa' }]}
				onFocus={() => setFocused1('input1')}
				onBlur={() => setFocused1(null)}
			>
				<MaterialCommunityIcons name="form-textbox-password" size={20} color={focused1 ? '#0c89fb' : '#aaa'}
					style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
				<FloatingLabelInput
					label='Password'
					value={organization.password}
					updateData={(value) => handleChange('password', value)}
					hide={true} />

			</View>
			
			<View style={{ marginTop: 50 }}>
				<ButtonComponent onPress={AddOrganization}
					title='Organization' />
			</View>


		</KeyboardAwareScrollView>
	)

}

 export default withTheme(Organization); 	
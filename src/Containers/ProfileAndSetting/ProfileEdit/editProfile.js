import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Alert } from 'react-native'
import PhoneInput from 'react-native-phone-number-input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
	AntDesign, MaterialCommunityIcons, Fontisto,
	SimpleLineIcons, Entypo
} from '@expo/vector-icons';
import { styles } from '../../AddDoctorCompounder/styles'
import { validationEditProfile } from './validation'
import { genderData } from '../../AddPatient/gender'
import { ButtonComponent, DropdownComp, FloatingLabelInput } from '../../../Component';
import { roleData } from '../../DoctorCompounder/role';
import { useSelector } from 'react-redux';
import { getAllCompounder } from '../../../Adapter/Redux/Auth/action/compounderAction';
import { withTheme } from '../../../Theme';
const EditProfile = ({theme}) => {
	const userCompounder = useSelector((state) => state.compAndDoc) || {};
	const [upDate, setUpdateId] = useState()
	const [user, setUser] = useState({
		name: '',
		email: '',  
		contact: '',
		password: userCompounder.contact,
		address: '',
		orgnisation_id: '',
		qualification: '',
		doctor_type: '',
		status: '1',
	})

	useEffect(() => {
		getAllCompounder().then(response => {
			const matchFiled = response.data.find(item => item.password == userCompounder.password)
			setUpdateId(matchFiled)
			setUser(matchFiled);
		}).catch(error => {
			console.log(error => {
				console.log('data is not match');
			})
		})
	}, [])
	const onRoleOpen = useCallback(() => {
		setRoleOpen(true);
	}, []);

	const onGenderOpen = useCallback(() => {
		setGenderOpen(true);
	}, []);

	const phoneInput = React.useRef(null);

	const [roleOpen, setRoleOpen] = useState(false);
	const [roleValue, setRoleValue] = useState('');
	const [role, setRole] = useState(roleData);

	const [genderOpen, setGenderOpen] = useState(false);
	const [genderValue, setGenderValue] = useState('');
	const [gender, setGender] = useState(genderData);

	const [focused1, setFocused1] = useState(false);
	const [focused2, setFocused2] = useState(false);
	const [focused3, setFocused3] = useState(false);
	const [focused4, setFocused4] = useState(false);
	const [focused5, setFocused5] = useState(false);
	const [focused6, setFocused6] = useState(false);
	const [focused7, setFocused7] = useState(false);
	const [focused8, setFocused8] = useState(false);

	const handleChange = (key, value) => {
		let userData = user;
		userData = {
			...userData,
			[key]: value
		}
		setUser(userData);
	}
	const editCompounder = () => {
		user.role = roleValue
		user.gender = genderValue
		const newContact = user.contact.split('+91').join("")
		user.contact = newContact
		validationEditProfile(user, upDate.id)
	}
	return (
		<KeyboardAwareScrollView style={styles.container}>

			<View style={{ marginBottom: 4 }}>
				<DropdownComp
					Open={roleOpen}
					Value={roleValue}
					allItems={role}
					setOpen={setRoleOpen}
					setItemValue={setRoleValue}
					setItemsAll={setRole}
					placeholderName='Select Role'
					onItemsOpen={onRoleOpen}
					title='Role' />
			</View>
			<View
				style={[styles.input1, { borderBottomColor: focused1 === 'input1' ? '#0c89fb' : '#aaa' }]}
				onFocus={() => setFocused1('input1')}
				onBlur={() => setFocused1(null)}
			>
				<AntDesign name="user" size={20} color={focused1 ? '#0c89fb' : '#aaa'}
					style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
				<FloatingLabelInput
					label='Name'
					value={user.name}
					updateData={(value) => handleChange('name', value)} />

			</View>
			<View
				style={[styles.input1, { borderBottomColor: focused2 === 'input2' ? '#0c89fb' : '#aaa', }]}
				onFocus={() => setFocused2('input2')}
				onBlur={() => setFocused2(null)}
			>
				<Fontisto name="email" size={20} color={focused2 ? '#0c89fb' : '#aaa'} style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
				<FloatingLabelInput
					label='Email'
					value={user.email}
					updateData={(value) => handleChange('email', value)} />

			</View>


			<View
				style={[styles.input1, { borderBottomColor: focused4 === 'input4' ? '#0c89fb' : '#aaa', }]}
				onFocus={() => setFocused4('input4')}
				onBlur={() => setFocused4(null)}
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
					autoFocus />

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
					Open={genderOpen}
					Value={genderValue}
					allItems={gender}
					setOpen={setGenderOpen}
					setItemValue={setGenderValue}
					setItemsAll={setGender}
					placeholderName='Select Gender'
					onItemsOpen={onGenderOpen}
					title='Gender'
				/>
			</View>
			<View
				style={[styles.input1, { borderBottomColor: focused3 === 'input3' ? '#0c89fb' : '#aaa', }]}
				onFocus={() => setFocused3('input3')}
				onBlur={() => setFocused3(null)}
			>
				<Entypo name="address" size={20} color={focused2 ? '#0c89fb' : '#aaa'}
					style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
				<FloatingLabelInput
					label='Address'
					value={user.address}
					updateData={(value) => handleChange('address', value)} />

			</View>
			{
				roleValue == 'doctor' ?
					<><Text style={{ marginHorizontal: 20, marginTop: 10 }}>
						<View
							style={[styles.input1, { borderBottomColor: focused5 === 'input5' ? '#0c89fb' : '#aaa', }]}
							onFocus={() => setFocused5('input5')}
							onBlur={() => setFocused5(null)}
						>
							<SimpleLineIcons name="organization" size={20}
								color={focused5 ? '#0c89fb' : '#aaa'}
								style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
							<FloatingLabelInput
								label='Orgnisation_id'
								value={user.orgnisation_id}
								updateData={(value) => handleChange('orgnisation_id', value)} />

						</View>
					</Text>
						<Text style={{ marginHorizontal: 20, marginTop: 10 }}>
							<View
								style={[styles.input1, { borderBottomColor: focused6 === 'input6' ? '#0c89fb' : '#aaa', }]}
								onFocus={() => setFocused6('input6')}
								onBlur={() => setFocused6(null)}
							>
								<MaterialCommunityIcons name="cast-education" size={20}
									color={focused6 ? '#0c89fb' : '#aaa'}
									style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
								<FloatingLabelInput
									label='qualification'
									value={user.qualification}
									updateData={(value) => handleChange('qualification', value)} />

							</View></Text>
						<Text style={{ marginHorizontal: 20, marginTop: 10 }}>
							<View
								style={[styles.input1, { borderBottomColor: focused7 === 'input7' ? '#0c89fb' : '#aaa', }]}
								onFocus={() => setFocused7('input7')}
								onBlur={() => setFocused7(null)}
							>
								<MaterialCommunityIcons name="doctor" size={20}
									color={focused7 ? '#0c89fb' : '#aaa'}
									style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
								<FloatingLabelInput
									label='Doctor_type'
									value={user.doctor_type}
									updateData={(value) => handleChange('doctor_type', value)} />

							</View></Text>
					</> : null
			}

			<View style={{ marginTop: 20 }}>
				<ButtonComponent onPress={editCompounder}
					title='Update' />
			</View>
		</KeyboardAwareScrollView>

	)
}

// export default withTheme(EditProfile)
export default EditProfile;


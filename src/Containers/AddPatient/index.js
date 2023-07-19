import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { AntDesign, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { ButtonComponent } from '../../Component';
import PhoneInput from 'react-native-phone-number-input';
import ImagePickerComp from '../../Component/ImagePicker'
import FloatingLabelInput from '../../Component/Input';
import { DateComp, DropdownComp } from '../../Component'
import { validation } from './validation'
import { genderData, roleData } from './gender'
import { styles } from './styles'
import { withTheme } from '../../Theme';
const AddPatient = ({ navigation, theme}) => {
	const dispatch = useDispatch();
	const [patient, setPatient] = useState({
		firstName: '',
		lastName: '',
		email: '',
		contact: '',
		weight: '',
	    profile: '',
		status: '1'
	})
	const onGenderOpen = useCallback(() => {
		setGenderOpen(true);
	}, []);
	
	const phoneInput = React.useRef(null);
	const [genderOpen, setGenderOpen] = useState(false);
	const [genderValue, setGenderValue] = useState('');
	const [gender, setGender] = useState(genderData);

	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [selectedDate, setSelectedDate] = useState('');
	const [focused1, setFocused1] = useState(false);
	const [focused8, setFocused8] = useState(false);
	const [focused9, setFocused9] = useState(false);
	const [focused10, setFocused10] = useState(false);
	const [focused11, setFocused11] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};
	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};
	const handleConfirm = (date) => {
		const dt = new Date(date);
		const x = dt.toISOString().split('T');
		const x1 = x[0].split('-');
		setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0])
		hideDatePicker();
	};

	const handleChange = (key, value) => {
		let patientInfo = patient;
		patientInfo = {
			...patientInfo,
			[key]: value
		}
		setPatient(patientInfo);76
	}
	const onUploadProfile = (result) => {
		if (!result.canceled) {
			handleChange("profile", result.assets[0].uri)
		}
	}
	const addPatient = () => {
		patient.gender = genderValue;
		patient. date_Of_birth = selectedDate
		validation({ dispatch, patient, navigation });
	}

	return (
		<ScrollView style={styles.container}>
			<View style={{ marginTop: 20 }}>
				<ImagePickerComp style={{ align: 'center' }} onUpload={onUploadProfile} />
			</View>
			<View
				style={[styles.input1, { borderBottomColor: focused8 === 'input8' ? '#0c89fb' : '#aaa' }]}
				onFocus={() => setFocused8('input8')}
				onBlur={() => setFocused8(null)}
			>
				<AntDesign name="user" size={20} color={focused8 ? '#0c89fb' : '#aaa'}
					style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
				<FloatingLabelInput
					label='First Name'
					value={patient.firstName}
					updateData={(value) => handleChange('firstName', value)} />

			</View>
			<View
				style={[styles.input1, { borderBottomColor: focused9 === 'input9' ? '#0c89fb' : '#aaa' }]}
				onFocus={() => setFocused9('input9')}
				onBlur={() => setFocused9(null)}
			>
				<AntDesign name="user" size={20} color={focused9 ? '#0c89fb' : '#aaa'} style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
				<FloatingLabelInput
					label='Last Name'
					value={patient.lastName}
					updateData={(value) => handleChange('lastName', value)} />

			</View>
			<View
				style={[styles.input1, { borderBottomColor: focused1 === 'input1' ? '#0c89fb' : '#aaa', }]}
				onFocus={() => setFocused1('input1')}
				onBlur={() => setFocused1(null)}
			>
				<Fontisto name="email" size={20} color={focused1 ? '#0c89fb' : '#aaa'} style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
				<FloatingLabelInput
					label='Email'
					value={patient.email}
					updateData={(value) => handleChange('email', value)} />

			</View>
			<View
				style={[styles.input1, { borderBottomColor: focused10 === 'input10' ? '#0c89fb' : '#aaa', }]}
				onFocus={() => setFocused10('input10')}
				onBlur={() => setFocused10(null)}
			>
				<PhoneInput
					ref={phoneInput}
					defaultValue={patient.contact}
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
				style={[styles.input1, { borderBottomColor: focused11 === 'input11' ? '#0c89fb' : '#aaa', }]}
				onFocus={() => setFocused11('input11')}
				onBlur={() => setFocused11(null)}
			>
				<FontAwesome5 name="weight" size={20} color={focused11 ? '#0c89fb' : '#aaa'} style={{ paddingStart: 4, paddingEnd: 6, paddingTop: 20 }} />
				<FloatingLabelInput
					label='weight'
					value={patient.weight}
					updateData={(value) => handleChange('weight', value)}
					title="numeric"
				/>

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

			<View style={styles.input1}>
				<Text onPress={showDatePicker}>
					<Fontisto name="date" size={24} color="black" /></Text>
				<TextInput style={{ marginHorizontal: 10 }} placeholder='Select Date'
					value={selectedDate} />
			</View>

			<View>
				<DateComp isDatePickerVisible={isDatePickerVisible}
					handleConfirm={handleConfirm}
					hideDatePicker={hideDatePicker} />
			</View>


			<View style={{ marginTop: 30 }}>
				<ButtonComponent
					title='Add Patient' onPress={() => addPatient()} />
			</View>

		</ScrollView>
	)

};

// export default withTheme(AddPatient);
export default AddPatient;


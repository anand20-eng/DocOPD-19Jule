import React, { useState, useCallback } from 'react'
import { View, Text, Alert, Button, BackHandler, TextInput } from 'react-native'
import Checkbox from 'expo-checkbox';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { initial } from './medicine';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Table, Row, Rows } from 'react-native-table-component';
import { DropdownComp, ButtonComponent } from '../../Component';
import { deletePassPatientAction } from '../../Adapter/Redux/Auth/action/passPatientAction';
import {
	capsData, onCapsOpen, onUnitOpen, unitData,
	onDoseTimeOpen, doseTimeData, onAfterBeforeOpen, afterBeforeData,
	medicineData, onMedicineOpen
} from './dropDownName';
import FloatingLabelInput from '../../Component/Input';
import { styles } from './styles'
import { useFocusEffect } from '@react-navigation/native';
import { allMedicineData } from './medcineList'
import MedicineSearchDropDown from '../../Component/SearcheableDropDown/medicineSearch'
import { withTheme } from '../../Theme';
const MedicineDiscrepanies = () => {
	const role = useSelector((state) => state.docAndRe) || {};
	const passPatient = useSelector((state) => state.currentPatient) || []
	const dispatch = useDispatch();

	const hardwareBackPressCustom = useCallback(() => {
		return true;
	}, []);

	useFocusEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', hardwareBackPressCustom)
		return () => {
			BackHandler.removeEventListener('hardwareBackPress', hardwareBackPressCustom)
		};
	}, [role]);

	const [medicine, setMedicine] = useState(initial);
	const [searchMedicine, setSearchMedicine] = useState('');


	const [focused1, setFocused1] = useState(false);
	const [focused2, setFocused2] = useState(false);
	const [focused3, setFocused3] = useState(false);
	const [focused4, setFocused4] = useState(false);
	const [focused5, setFocused5] = useState(false);
	const [focused6, setFocused6] = useState(false);
	const [focused7, setFocused7] = useState(false);
	const [focused8, setFocused8] = useState(false);
	const [focused9, setFocused9] = useState(false);


	const [capsOpen, setCapsOpen] = useState(false);
	const [capsValue, setCapsValue] = useState('');
	const [caps, setCaps] = useState(capsData);

	const [medicineOpen, setMedicineOpen] = useState(false);
	const [medicineValue, setMedicineValue] = useState('');
	const [medicineUser, setMedicineUser] = useState(medicineData);

	const [unitOpen, setUnitOpen] = useState(false);
	const [unitValue, setUnitValue] = useState('');
	const [unit, setUnit] = useState(unitData);

	const [doseTimeOpen, setDoseTimeOpen] = useState(false);
	const [doseTimeValue, setDoseTimeValue] = useState('');
	const [doseTime, setDoseTime] = useState(doseTimeData);

	const [afterBeforeOpen, setAfterBeforeOpen] = useState(false);
	const [afterBeforeValue, setAfterBeforeValue] = useState('');
	const [afterBefore, setAfterBefore] = useState(afterBeforeData);

	const [isChecked, setChecked] = useState(false);

	const tableData = ['Types', ' Medicine Names',
		' Unit', 'Dose Time', 'AfterBefore', "Total Quantity"];
	const [rowsData, setRowsData] = useState([]);
	const [arr1, setArray] = useState([]);
	const handleChange = (key, value) => {
		let medicineInfo = medicine;
		medicineInfo = {
			...medicineInfo,
			[key]: value
		}
		setMedicine(medicineInfo);
	}

	const searchUser = async (text) => {
		const url = `http://10.0.2.2:3000/users?${text}`;
		console.warn(url);
		let result = await fetch(url);
		result = await result.json();
		if (result) {
			setData(result)
		}

	}

	const addMedicine = () => {
		if (medicineValue && capsValue && afterBeforeValue && doseTimeValue && unitValue) {
			setRowsData([...rowsData, [capsValue, medicineValue, afterBeforeValue, medicine.totalQu,
				unitValue, doseTimeValue]])
			setArray([...arr1, { cap1: capsValue, cap2: medicineValue, cap3: afterBeforeValue }])
		}
	}

	const refreshPage = () => {
		setMedicine(initial)
		setMedicineValue('');
		setCapsValue('');
		setAfterBeforeValue('');
		setDoseTimeValue('');
		setUnitValue('');
		setRowsData([]);
		setArray([]);
		dispatch(deletePassPatientAction());
	}

	const print = async () => {
		await Print.printAsync({
			html: createDynamicTable()
		});
	};
	const printToFile = async () => {
		const { uri } = await Print.printToFileAsync({ html });
		await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
	};

	const createDynamicTable = () => {
		var table = '';
		for (let i in arr1) {
			const item = arr1[i]
			table = table + ` <tr>
				 <td> ${i}</td>
				 <td> ${item.cap1}</td>
				 <td> ${item.cap2}</td>
				 <td> ${item.cap3}</td>

			</tr>
			 `
		}
		const html =
			`	<!DOCTYPE html>
			<html>
			<head>
			 <style>
			 table {
				border-collapse: collapse;
				width: 100%;
			}
				
		 td, th {
				 border: 1px solid #dddddd;
				 text-align: left;
				 padding: 10px;
			}
			</style>
			</head>
			<body>			
		
			<table> 
			<h1 style="color:red">DocOPD </h1><h2> Medical Prescription</h2>
	<tr> 
	<td style="width:30"> Patient's Name </td>
	 <td>${passPatient.firstName} ${passPatient.lastName}</td>
	 <td>Date</td> 
	<td width="20%"> ${passPatient.patientDate} </td>
	</tr>

	<tr>
	<td>S/o|D/o|W/o:</td> <td colspan="3"></td>
	</tr>

	<tr> 
	<td >Date of Brith: </td> <td> </td> <td> Age:</td>  <td> </td> 	
	</tr>
	
	<tr>
	 <td> Occupation </td>   <td> </td> <td> Sex:  </td> <td> ${passPatient.gender}</td> 
	</tr>

	<tr>
	 <td> Health Card No: </td>   <td> </td>
	  <td> Patient ID No: </td> <td>${passPatient.id}</td> 
	</tr>

	<tr>
	 <td> Patient Address: </td> <td colspan="3"></td> 
	 </tr>
	<tr> <td colspan="4">Cell No: ${passPatient.contact} </td> </tr>

	<tr> 
	<td  style="vertical-align: top;" height= "60" colspan="4"> Diagonsed With: </td>
	 </tr>
	<tr>
	 <td> Blood Pressure:</td><td> </td><td>Weight:</td><td>${passPatient.weight}</td>
	 </tr>
	<tr> <td colspan="4"> Allergies: </td></tr>
	<tr> <td colspan="4"> Disabilities if any: </td></tr>
	</table>
	<table>
	<tr>
	<td width="5%"> </td> <td> Drugs</td> <td> Unit(Tablet/Syrup) </td>  <td> Dosage (Per Day) </td>
	</tr>
			 ${table} 	
			</table>
			<table> 

			<tr><td  style="vertical-align: top;" height= "50" colspan="4">   Diet To Follow: </td></tr>
			<tr><td  style="vertical -align: top;" height= "60" colspan="4"> Brief History of Patient: </td></tr>
			<tr><td  colspan="4"> Follow of Physician: </td></tr>

 			</table>
			</body>
			</html>
			<table>`
		return html;
	}

	return (

		<KeyboardAwareScrollView
			style={styles.container}
		>
			<TextInput style={{ borderColor: 'skyblue', borderWidth: 1, margin: 15, fontSize: 20 }}
				placeholder={"search"}
				onChangeText={(text) => searchUser(text)}
			/>

			<View
				style={[styles.input1, { marginTop: 10 },
				{ borderBottomColor: focused1 === 'input1' ? '#0c89fb' : '#aaa' }]}
				onFocus={() => setFocused1('input1')}
				onBlur={() => setFocused1(null)}
			>
				<FloatingLabelInput
					label='Provisional Diagnosis'
					value={medicine.provisionalDiagnosis}
					updateData={(value) => handleChange('provisionalDiagnosis', value)} />
			</View>
			<View
				style={[styles.input1, { marginTop: 10 },
				{ borderBottomColor: focused2 === 'input2' ? '#0c89fb' : '#aaa' }]}
				onFocus={() => setFocused2('input2')}
				onBlur={() => setFocused2(null)}
			>
				<FloatingLabelInput
					label='GivenTreatment'
					value={medicine.givenTreatment}
					updateData={(value) => handleChange('givenTreatment', value)} />

			</View>
			<View>
				<Text style={{
					color: 'black', marginTop: 10, marginHorizontal: 20,
				}}> Rx</Text>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ width: 95 }}>
					<DropdownComp
						Open={capsOpen}
						Value={capsValue}
						allItems={caps}
						setOpen={setCapsOpen}
						setItemValue={setCapsValue}
						setItemsAll={setCaps}
						placeholderName='Caps'
						onItemsOpen={onCapsOpen}
						title='Caps'
					/>
				</View>
				<View style={{ width: 95 }}>
					<DropdownComp
						Open={unitOpen}
						Value={unitValue}
						allItems={unit}
						setOpen={setUnitOpen}
						setItemValue={setUnitValue}
						setItemsAll={setUnit}
						placeholderName='Unit'
						onItemsOpen={onUnitOpen}
						title='Unit'
					/>
				</View>
				<View style={{ marginTop: 10 }}>
					<MedicineSearchDropDown />
				</View>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ width: 95 }}>
					<DropdownComp
						Open={doseTimeOpen}
						Value={doseTimeValue}
						allItems={doseTime}
						setOpen={setDoseTimeOpen}
						setItemValue={setDoseTimeValue}
						setItemsAll={setDoseTime}
						placeholderName='DoseTime'
						onItemsOpen={onDoseTimeOpen}
						title='Dose'
					/>
				</View>
				<View style={{ width: 130, }}>
					<DropdownComp
						Open={afterBeforeOpen}
						Value={afterBeforeValue}
						allItems={afterBefore}
						setOpen={setAfterBeforeOpen}
						setItemValue={setAfterBeforeValue}
						setItemsAll={setAfterBefore}
						placeholderName='After/Before'
						onItemsOpen={onAfterBeforeOpen}
						title='After/Before'
					/>
				</View>
				<View
					style={[{ borderBottomWidth: 1, width: 100, marginStart: 30 },
					{ borderBottomColor: focused3 === 'input3' ? '#0c89fb' : '#aaa' }]}
					onFocus={() => setFocused3('input3')}
					onBlur={() => setFocused3(null)}
				>
					<Text style={{ marginTop: 40 }}>
						<FloatingLabelInput
							label='TotalQuantity'
							value={medicine.totalQu}
							updateData={(value) => handleChange('totalQu', value)} />
					</Text>
				</View>

			</View>
			<View style={{ width: 300, marginTop: 20 }}>
				<ButtonComponent title='Add Medicine Discrepancies'
					onPress={addMedicine}
				/>
			</View>

			{
				rowsData.length > 0 ? <View style={{ flex: 1, padding: 1, paddingTop: 1, backgroundColor: '#fff', marginTop: 20 }}>
					<KeyboardAwareScrollView
						horizontal={true}
					>
						<Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
							<Row data={tableData} style={{ height: 40, backgroundColor: '#f1f8ff' }}
								textStyle={{ margin: 6 }} />
							<Rows data={rowsData} style={{ height: 40, backgroundColor: '#f1f8ff' }}
								textStyle={{ margin: 6 }} />

						</Table>
					</KeyboardAwareScrollView>

				</View> : null
			}

			<View style={{ marginTop: 10, flexDirection: 'row' }}>
				<View
					style={[{ width: 150, marginHorizontal: 10, borderBottomWidth: 1, },
					{ borderBottomColor: focused4 === 'input4' ? '#0c89fb' : '#aaa' }]}
					onFocus={() => setFocused4('input4')}
					onBlur={() => setFocused4(null)}
				>
					<FloatingLabelInput
						label='Advice Patient'
						value={medicine.advise}
						updateData={(value) => handleChange('advise', value)} />

				</View>
				<View
					style={[{ borderBottomWidth: 1, width: 150, marginStart: 10 },
					{ borderBottomColor: focused5 === 'input5' ? '#0c89fb' : '#aaa' }]}
					onFocus={() => setFocused5('input5')}
					onBlur={() => setFocused5(null)}
				>
					<FloatingLabelInput
						label='Next Visit'
						value={medicine.nextVisit}
						updateData={(value) => handleChange('nextVisit', value)} />

				</View>
			</View>
			<View style={{ marginTop: 10, flexDirection: 'row' }}>
				<View
					style={[{ width: 150, marginHorizontal: 10, borderBottomWidth: 1, },
					{ borderBottomColor: focused6 === 'input6' ? '#0c89fb' : '#aaa' }]}
					onFocus={() => setFocused6('input6')}
					onBlur={() => setFocused6(null)}
				>
					<FloatingLabelInput
						label='Previous Bill'
						value={medicine.previousBill}
						updateData={(value) => handleChange('previousBill', value)} />

				</View>
				<View
					style={[{ width: 150, marginHorizontal: 10, borderBottomWidth: 1, },
					{ borderBottomColor: focused7 === 'input7' ? '#0c89fb' : '#aaa' }]}
					onFocus={() => setFocused7('input7')}
					onBlur={() => setFocused7(null)}
				>
					<FloatingLabelInput
						label='Current Bill'
						value={medicine.currentBill}
						updateData={(value) => handleChange('currentBill', value)} />

				</View>
			</View>
			<View style={{ marginTop: 10, flexDirection: 'row' }}>
				<View
					style={[{ width: 150, marginHorizontal: 10, borderBottomWidth: 1, },
					{ borderBottomColor: focused8 === 'input8' ? '#0c89fb' : '#aaa' }]}
					onFocus={() => setFocused8('input8')}
					onBlur={() => setFocused8(null)}
				>
					<FloatingLabelInput
						label='Paid bill'
						value={medicine.paidBill}
						updateData={(value) => handleChange('paidBill', value)} />

				</View>
				<View
					style={[{ width: 150, marginHorizontal: 10, borderBottomWidth: 1, },
					{ borderBottomColor: focused9 === 'input9' ? '#0c89fb' : '#aaa' }]}
					onFocus={() => setFocused9('input9')}
					onBlur={() => setFocused9(null)}
				>
					<FloatingLabelInput
						label='Balance Bill'
						value={medicine.balanceBill}
						updateData={(value) => handleChange('balanceBill', value)} />

				</View>
			</View>
			<View style={{ flexDirection: 'row', marginTop: 10 }}>
				<Text style={{ color: 'black', margin: 13, marginHorizontal: 10 }}> SMS Type</Text>

				<View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 150 }}>
					<Checkbox style={{ margin: 7, height: 17, width: 17, marginHorizontal: 10 }} value={isChecked} onValueChange={setChecked} />
					<Text>Slip</Text>
				</View>

			</View>
			<View style={{ flexDirection: 'row', marginTop: 1 }}>
				<View style={{ width: 170 }}>
					<ButtonComponent title='Clear' onPress={refreshPage} />
				</View>
				<View style={{ width: 170 }}>
					<ButtonComponent title='Save' onPress={() => {
						print();
						printToFile();
					}} />
				</View>


			</View>

		</KeyboardAwareScrollView >


	);

}
// export default withTheme(MedicineDiscrepanies);
export default MedicineDiscrepanies;


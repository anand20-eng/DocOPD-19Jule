import { Alert } from 'react-native';
import { addPatient, addPatientSuccess } from '../../Adapter/Redux/Auth/action/addPatientAction'
import { routes } from '../../Navigation/routes';
export const validation = (props) => {
    const { dispatch, navigation, patient } = props

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (patient.firstName.length < 2) {
        Alert.alert("firstName is required");
    }
    else if (patient.lastName.length < 2) {
        Alert.alert("lastName is required");
    }
    else if (regex.test(patient.email) === false) {
        Alert.alert(" please enter valid email");
    }
    else if (patient.contact.length < 13) {
        Alert.alert("Contact must be 10 length");
    }
    else if (patient.contact.length > 13) {
        Alert.alert("Contact must be 10 length");
    }
    else if (patient.weight.length == 0) {
        Alert.alert("Weight is required");
    }
    else {
        addPatient(patient).then(response => {
        Alert.alert(response.data)
        }).catch(error => {
            console.log('error => ', error.response);
        })
        dispatch(addPatientSuccess(patient));
        navigation.navigate(routes.HomeScreen.name)
        

    }

}




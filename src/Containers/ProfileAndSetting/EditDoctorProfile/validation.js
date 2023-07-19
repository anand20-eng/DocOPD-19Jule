import { Alert } from "react-native";
import { routes } from '../../../Navigation/routes'
import { updateDoctor } from "../../../Adapter/Redux/Auth/action/doctorAction";
export const validationDoctorProfile = (user, update) => {
     console.log('user =>', user)
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (user.name.length < 2) {
        Alert.alert("userName is required");
    }
    else if (regex.test(user.email) === false) {
        Alert.alert(" please enter valid email");
    }
    else if (user.contact.length < 10) {
        Alert.alert("Contact must be 10 length");
    }
    else if (user.contact.length > 10) {
        Alert.alert("Contact must be 10 length");
    }
    else if (user.password.length <= 8) {
        Alert.alert("password should be above 8 character");
    } 
    else if (user.role.length == 0) {
        Alert.alert("select your role");
    }
    else if (update) {
        user.id = update
        updateDoctor(user).then(response => {
            Alert.alert('Upate Doctor successfully');
        }).catch(error => {
            Alert.alert("Doctor does not updated");
        })
    }
    else {
        Alert.alert("Doctor does not updated");

    }
} 
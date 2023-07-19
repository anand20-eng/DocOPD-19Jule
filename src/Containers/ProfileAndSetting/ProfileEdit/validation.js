import { Alert } from "react-native";
import { routes } from '../../../Navigation/routes'
import { updateCompounder } from "../../../Adapter/Redux/Auth/action/compounderAction";
export const validationEditProfile = (user, upDate) => {

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
    else if (user.role.length == 0) {
        Alert.alert("select your role");
    }
    else if (upDate) {
        delete user.orgnisation_id
        delete user.qualification
        delete user.doctor_type
        delete user.role
        user.id = upDate
        updateCompounder(user).then(response => {
            Alert.alert('updateCompounder Successfully ...!');
        }).catch(error => {
            Alert.alert(' does not updateCompounder ')
        })
    }
    else {
        Alert.alert(' does not updateCompounder ')
    }


}
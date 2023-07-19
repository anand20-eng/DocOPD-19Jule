import { Alert } from "react-native";
import { routes } from '../../Navigation/routes'
import { addCompounder, comp_profile_action } from "../../Adapter/Redux/Auth/action/compounderAction";
import { addDoctor, doctorProfileAction } from "../../Adapter/Redux/Auth/action/doctorAction";
export const validation = (props) => {
    const { user, navigation, profile, dispatch } = props

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
    else if (user.role.length == 0) {
        Alert.alert("select your role");
    }
     if (user.role == 'compounder') {
        delete user.role
        delete user.orgnisation_id
        delete user.qualification
        delete user.doctor_type
        user.profile = profile
        dispatch(comp_profile_action(user.profile))
        addCompounder(user).then(response => {
            Alert.alert(response.data)
            navigation.navigate(routes.DoctorCompounderScreen.name)
        }).catch(error => {
            console.log('addCompounder error.response',error.response)
        })

    }
    else if (user.role == 'doctor') {
        delete user.gender
        addDoctor(user).then(response => {
            navigation.navigate(routes.DoctorCompounderScreen.name)
            Alert.alert(response.data)
        }).catch(error => {
            console.log(' catch error does not add doctor')
        })

    }


}
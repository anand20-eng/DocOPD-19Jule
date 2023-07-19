import { Alert } from "react-native";
import { routes } from '../../Navigation/routes'
import { compLoginAction, compounderLogin } from "../../Adapter/Redux/Auth/action/compounderAction";
import { doctorLogin, doctorLoginAction } from "../../Adapter/Redux/Auth/action/doctorAction";
export const validation = (props) => {
    const { dispatch, navigation, user } = props;

    if (user.contact.length < 10) {
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
    else if (user.role == 'compounder') {
        // compounderLogin(user.contact, user.password).then(response => {
        //     Alert.alert(response.data);
        //     dispatch(compLoginAction(user))
            navigation.navigate(routes.DrawerMenuScreen.name)
        // }).catch(error => {
        //     Alert.alert('user and password incorrect');

        // })
    }
    else if (user.role == 'doctor') {
        // doctorLogin(user.contact, user.password).then(response => {
        //     console.log('response =>', response)
        //     Alert.alert(response.data);
        //     dispatch(doctorLoginAction(user))
            navigation.navigate(routes.DoctorDrawerScreen.name)
        // }).catch(error => {
        //     console.log('error =>', error)
        // })

    }


}
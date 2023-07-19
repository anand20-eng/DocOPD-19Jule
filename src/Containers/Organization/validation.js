import { Alert } from "react-native";
import { routes } from '../../Navigation/routes'
export const validation = (organization, navigation) => {

    if (organization.userName.length == 0) {
        Alert.alert("userName is required");
    }
    else if (organization.password.length <= 8) {
        Alert.alert("password should be above 8 character");
    } 
    else {
        navigation.navigate(routes.DoctorCompounderScreen.name)
    }

}
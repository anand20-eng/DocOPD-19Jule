
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";


export const signInAuth =async (email,password) => {
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            Alert.alert('Successful sign')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorMessage)
        })
}

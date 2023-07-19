import { SIGNUP_SUCCESS, SIGNUP_FAILED } from "../constant";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../../../Firebase/utils'

import { Alert } from "react-native";

export const signUpSuccess = (email) => ({ type: SIGNUP_SUCCESS, email })

export const signUpFailed = (message) => ({
    type: SIGNUP_FAILED, payload: message
})


export const addData = (user) => {
    addDoc(collection(db, "delivery_boy"),
        user
    )
}

export const signUpAction = (user) => {
    return dispatch => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const userInfo = userCredential.user;
                signUpSuccess(userInfo.email)
                Alert.alert('SignUp Successful');
                delete user.password
                delete user.confirmPassword
                addData(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(signUpFailed(errorMessage))
                Alert.alert(errorMessage);

            })

    }

}


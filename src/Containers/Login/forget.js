import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { FloatingLabelInput, ButtonComponent } from '../../Component';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { withTheme } from '../../Theme';

const ForgetPassword = ({theme}) => {
    const [email, setEmail] = useState('');
    const auth = getAuth();
    const resetPassword = () => {
        if (email != null) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    Alert.alert('Password reset email sent');
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message
                    Alert.alert(errorMessage);

                })
        } else {
            Alert.alert('Please enter a valid email')
        }
    }


    return (
        <>
            <View>
                <FloatingLabelInput title="Email" value={email}
                    updateData={(value) => setEmail(value)} />

                <ButtonComponent primaryButton title="ResetPassword"
                    onPress={resetPassword} />
            </View>
        </>

    )
}

export default withTheme(ForgetPassword);

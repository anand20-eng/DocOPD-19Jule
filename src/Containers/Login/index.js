import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { FloatingLabelInput, TextComponent, ButtonComponent } from '../../Component'
import { routes } from '../../Navigation/routes';
import { styles } from './styles';
import { signInAuth } from './service';
import { withTheme } from '../../Theme';

const SignIn = ({ navigation, theme }) => {
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const login =  () => {
        if (!user.email && !user.password) {
            Alert.alert('please enter field')
        } else {
            signInAuth(user.email, user.password)
        }
    }
    const handleChange = (key, value) => {
        userInfo = user 
        userInfo = {
            ...userInfo,
            [key]: value
        }
        setUser(userInfo);
    }


    const goToSingUp = () => {
        navigation.navigate(routes.SignUpScreen.name)
    }
    const goToForgetPasswordScreen = () => {
        navigation.navigate(routes.ForgetPasswordScreen.name);
    }

    return (
        <>
            <View style={{backgroundColor:theme.secondaryColor, flex:1}}>
                <FloatingLabelInput title="Email" value={user.email}
                    updateData={(value) => handleChange('email', value)} />

                <FloatingLabelInput title="Password" value={user.password}
                    updateData={(value) => handleChange('password', value)} />

                <Text onPress={goToForgetPasswordScreen}
                 style={styles.forgetText}>Forget Password</Text>

                <ButtonComponent primaryButton title="Sign In" onPress={login} />
                <TextComponent customStyle={{color:theme.primaryButton}} title="OR" />

                <ButtonComponent title="Signup" onPress={goToSingUp} />

                
            </View>
        </>
    )
}

export default withTheme(SignIn);

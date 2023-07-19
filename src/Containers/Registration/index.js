import React, { useState } from 'react';
import { ScrollView, Alert, View } from 'react-native';
import { FloatingLabelInput, TextComponent } from '../../Component'
import { ButtonComponent } from '../../Component'
import { styles } from './styles';
import { routes } from '../../Navigation/routes'
import ImagePickerComp from '../../Component/ImagePicker'
import { signUpAction } from '../../Adapter/Redux/Auth/action/signUpAction';
 import { useDispatch } from 'react-redux';
import { withTheme } from '../../Theme';
const SignUp = ({ navigation, theme }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    bikeInfo: {
      brand: '',
      name: '',
      number: '',
      color: '',
    },
    profile: {
      url: ""
    },
    drivingLicense: {
      url: ""
    },

    idProof: {
      url: ""
    },
  })

  const handleChange = (key, value) => {
    let userInfo = user;
    userInfo = {
      ...userInfo,
      [key]: value
    }
    setUser(userInfo);
  }

  const onUploadProfile = (result) => {
    if (!result.canceled) {
      handleChange("profile", {url: result.assets[0].uri})
    }
  }
  const onUploadDrivingLicense = (result) => {
    if (!result.canceled) {
      handleChange("drivingLicense", {url : result.assets[0].uri})
    }
  }

  const onUploadIdProof = (result) => {
    if (!result.canceled) {
      handleChange("idProof", {url:result.assets[0].uri})
    }
  }

  const registration = () => {
    dispatch(signUpAction(user));
  }

  const checkTextInput = () => {
    if (!user.firstName && !user.lastName && !user.email &&
      !user.contact && !user.password && !user.confirmPassword
      && !user.bikeInfo.brand && !user.bikeInfo.name && !user.bikeInfo.number
      && !user.bikeInfo.color) {
      Alert.alert("plzz fill all the fields")
    } else {
      // registration();
      goToHome();
    }

  }
  const goToHome = () => {
    navigation.navigate(routes.HomeScreen.name)
  }
  const goToSingIn = () => {
    navigation.navigate(routes.SignInScreen.name)
  }

  const handleBikeInfo = (key, value) => {
    let bikeInfo = user.bikeInfo;
    bikeInfo = {
      ...bikeInfo,
      [key]:value
    }
    handleChange('bikeInfo', bikeInfo)
  }

  return (
    <>
      <ScrollView>
        <TextComponent title="Profile" />

        <ImagePickerComp onUpload={onUploadProfile}
          align={{ textAlign: "center" }}
        />

        <FloatingLabelInput title="Name" value={user.firstName}
          updateData={(value) => handleChange('firstName', value)} />

        <FloatingLabelInput title="LastName" value={user.lastName}
          updateData={(value) => handleChange('lastName', value)} />

        <FloatingLabelInput title="Email" value={user.email}
          updateData={(value) => handleChange('email', value)} />

        <FloatingLabelInput title="Contact" value={user.contact}
          updateData={(value) => handleChange('contact', value)} />

        <FloatingLabelInput title="Password" value={user.password}
          updateData={(value) => handleChange('password', value)} />

        <FloatingLabelInput title="Confirm password" value={user.confirmPassword}
          updateData={(value) => handleChange('confirmPassword', value)} />

        <TextComponent title="Driver Info" />

        <FloatingLabelInput title="Bike Brand" value={user.bikeInfo.brand}
          updateData={(value) => handleBikeInfo('brand', value)} />

        <FloatingLabelInput title="Bike Name" value={user.bikeInfo.name}
          updateData={(value) => handleBikeInfo('name', value)} />

        <FloatingLabelInput title="bike Number" value={user.bikeInfo.number}
          updateData={(value) => handleBikeInfo('number', value)} />

        <FloatingLabelInput title="Bike Color" value={user.bikeInfo.color}
          updateData={(value) => handleBikeInfo('color', value)} />

        <View style={styles.onRow}>
          <TextComponent title='Driving License' align={{ marginHorizontal: 45 }} />
          <TextComponent title='Id Proof' align={{ marginHorizontal: 55 }} />
        </View>
        <View style={styles.onRow}>
          <ImagePickerComp onUpload={onUploadDrivingLicense}
            align={{ marginHorizontal: 60 }} />

          <ImagePickerComp onUpload={onUploadIdProof}
            align={{ marginHorizontal: 60 }} />
        </View>


        <ButtonComponent
          secondaryButton onPress={checkTextInput} title="SignUp" />

        <TextComponent title='SignIn' onPress={goToSingIn} />
      </ScrollView>


    </>
  )
}


// export default withTheme(SignUp);
export default SignUp;


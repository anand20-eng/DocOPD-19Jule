import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './routes';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Organization' screenOptions={{ headerTitleAlign: 'left' }}>

        <Stack.Screen {...routes.OrganizationScreen} />
  
        <Stack.Screen {...routes.AddDoctorCompounderScreen} />
        <Stack.Screen {...routes.SearchPatientScreen} />
        <Stack.Screen {...routes.AddPatientScreen} />
        <Stack.Screen {...routes.SignInScreen} />
        <Stack.Screen {...routes.SignUpScreen} />

        <Stack.Screen {...routes.ForgetPasswordScreen} />
        <Stack.Screen {...routes.DrawerMainScreen} />
        <Stack.Screen {...routes.DrawerMenuScreen} options={{headerShown:false}} />
        <Stack.Screen {...routes.DoctorDrawerScreen} options={{headerShown:false}} />

        <Stack.Screen options={{
          headerLeft: () => <></>,
        }}  
          {...routes.DoctorCompounderScreen} />


      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default AppNavigator;
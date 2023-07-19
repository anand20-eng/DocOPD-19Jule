import React from 'react';
import {  createDrawerNavigator } from '@react-navigation/drawer';
import { routes } from '../../../Navigation/routes';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonComponent } from '../../../Component';
import { ThemeContextProvider } from '../../../../src/Theme'
import { doctorLogout } from '../../../Adapter/Redux/Auth/action/doctorAction';
import EditDoctorProfile from '../EditDoctorProfile/editDoctorProfile';
import DoctorProfile from './profileDoctor/profile'
import DoctorSetting  from  '../DoctorProfile/Setting/doctorSetting'
const Drawer = createDrawerNavigator();             

const DoctorDrawer = ({ navigation }) => {
    const role = useSelector((state) => state.compAndDoc) || {};
    const dispatch = useDispatch();

    const LogOutDoctor = () => {
        if (role.role) {
          dispatch(doctorLogout(role.role));
          navigation.navigate(routes.DoctorCompounderScreen.name);
        }
      }
    return (


        <Drawer.Navigator initialRouteName="Medicine"
            screenOptions={{
                headerRight: () => (
                    <ButtonComponent title="Logout" onPress={LogOutDoctor} />
                ),
            }}>
            <Drawer.Screen {...routes.MedicineDiscrepaniesScreen} />
            <Drawer.Screen name='Profile' component={DoctorProfile} />
            <Drawer.Screen name='EditProfile' component={EditDoctorProfile} />
            <Drawer.Screen name='Setting' component={DoctorSetting} />
        </Drawer.Navigator>



    ) 
}



export default DoctorDrawer;
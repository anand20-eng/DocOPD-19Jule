import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './compounderProfile/profile';
import Setting from './Setting/setting'
import { routes } from '../../../Navigation/routes';
import { useDispatch, useSelector } from 'react-redux';
import { compounderLogout } from '../../../Adapter/Redux/Auth/action/compounderAction';
import { ButtonComponent } from '../../../Component';
import EditProfile from '../ProfileEdit/editProfile'
const Drawer = createDrawerNavigator();

const DrawerMenu = ({ navigation }) => {
    const role = useSelector((state) => state.compAndDoc) || {};
    const dispatch = useDispatch();

    const logOutCompounder = () => {
        if (role.role) {
            dispatch(compounderLogout(role.role));
            navigation.navigate(routes.DoctorCompounderScreen.name);

        }
    }

    return (
        <Drawer.Navigator initialRouteName="Home"
            screenOptions={{
                headerRight: () => (
                    <ButtonComponent title="Logout" onPress={logOutCompounder} />
                ),
            }}>
            <Drawer.Screen {...routes.HomeScreen} />
            <Drawer.Screen name='Profile' component={Profile} />
            <Drawer.Screen name='EditProfile' component={EditProfile} />
            <Drawer.Screen name='Setting' component={Setting} />

        </Drawer.Navigator>

    )
}



export default DrawerMenu;
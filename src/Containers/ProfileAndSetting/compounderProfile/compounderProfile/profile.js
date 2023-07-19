import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { getAllCompounder } from '../../../../Adapter/Redux/Auth/action/compounderAction';
import { withTheme } from '../../../../Theme';
const Profile = ({theme}) => {
    const userCompounder = useSelector((state) => state.compAndDoc) || {};
    const [user, setUser] = useState({
		name: '',
		email: '',
		contact: '',
		password: '',
		address: '',
		status: '1',
	})
    useEffect(() => {
		getAllCompounder().then(response => {
			const matchFiled = response.data.find(item => item.password == userCompounder.password)
			setUser(matchFiled);
		}).catch(error => {
			console.log(error => {
				console.log('data is not match');
			})
		})
	}, [])
    return (
        <View style={styles.container}>
           
            <Text>Name:{user.name} </Text>
            <Text>Email:{user.email} </Text>
            <Text>contact:{user.contact} </Text>
            <Text>Address:{user.address} </Text>
            <Text>Gender:{user.gender} </Text>
            <Text>Status:{user.status}</Text>

        </View>
    )
}



// export default withTheme(Profile);
export default Profile;

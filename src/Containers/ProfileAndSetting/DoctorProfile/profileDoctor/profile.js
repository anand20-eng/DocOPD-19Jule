import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { getAllDoctor } from '../../../../Adapter/Redux/Auth/action/doctorAction';
import { withTheme } from '../../../../Theme';
const DoctorProfile = ({theme}) => {
     const userDoctor = useSelector((state) => state.compAndDoc) || {};
     const [user, setUser] = useState({
		name: '',
		email: '',
		contact: '',
		password: '',
		address: '',
		orgnisation_id:'',
		qualification: '',
		doctor_type: '',
		status: '1',
	})
    useEffect(() => {
		getAllDoctor().then(response => {
			const matchFiled = response.data.find(item => item.password == userDoctor .password)
			setUser(matchFiled);
		}).catch(error => {
			console.log(error => {
				console.log('data is not match');
			})
		})
	}, [])
    
    return (
        <>
            <View style={styles.container}>
            {/* <View>
               <Image style={styles.profileImg}
                   source={{ uri: getDoctor.profile }} />
           </View> */}
           <Text>Name:{user.name} </Text>
           <Text>Email:{user.email} </Text>
           <Text>Contact:{user.contact} </Text>
           <Text>Address:{user.address} </Text>
           <Text>Gender:{user.gender} </Text>
           <Text>Doctor_Type:{user.doctor_type} </Text>
           <Text>Qualification{user.qualification} </Text>
           <Text>Status:{user.status}</Text>

       </View>
     
        </>
      
    )
}
    


// export default withTheme(DoctorProfile);
export default DoctorProfile;


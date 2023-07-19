import React, { useState, useEffect } from 'react';
import { Text, View, Image, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { styles } from './styles'
import { withTheme } from '../../Theme';
const ImagePickerComp = ({ onUpload, theme }) => {
	const [image, setImage] = useState('');
	const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
	useEffect(() => {
		(async () => {
			const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
			setHasGalleryPermission(galleryStatus.status === 'granted');
		})();
	}, []);

	const onPress = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri)
		}
		onUpload(result);

	}

	if (hasGalleryPermission === false) {
		return <Text> NO access to Internal storage </Text>
	}
	const deleteImage = () => {
		setImage('')
	}
	return (

		<>

			<View>
              

				{image ? <><Image onProgress={onPress} style={styles.profileImg} 
				source={{ uri: image }} />
				<AntDesign
					style={styles.deleteIcon}
				  onPress={deleteImage}
				   name="delete"
				    size={24} 
					color="black" /></>
					: <AntDesign style={styles.antDesign}
						onPress={onPress}
						name="camera" size={50} color="black" />}
			</View>
		</>
	)

}
// export default withTheme(ImagePickerComp);
export default ImagePickerComp;


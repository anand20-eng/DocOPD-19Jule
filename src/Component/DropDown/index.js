import React from 'react';
import { Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker'
import { styles } from './styles';
import { withTheme } from '../../Theme';
const DropdownComp = ({
	Open,
	Value,
	allItems,
	setOpen,
	setItemValue,
	setItemAll,
	placeholderName,
	onItemsOpen,
	title,
	theme
}) => {

	const { control } = useForm();
	return (
		<View>
			<Text style={styles.label(theme)}>{title}</Text>
			<Controller
				name="gender"
				defaultValue=""
				control={control}
				render={({ field: { onChange, value } }) => (
					<View style={styles.dropdownGender}>
						<DropDownPicker
							style={styles.dropdown(theme)}
							open={Open}
							value={Value}
							items={allItems}
							setOpen={setOpen}
							setValue={setItemValue}
							setItems={setItemAll}
							placeholder={placeholderName}
							placeholderStyle={styles.placeholderStyles(theme)}
							onOpen={onItemsOpen}
							onChangeValue={onChange}
							zIndex={3000}
							zIndexInverse={1000} />
					</View>
				)} />
		</View>
	)


}
export default withTheme(DropdownComp);
// export default DropdownComp


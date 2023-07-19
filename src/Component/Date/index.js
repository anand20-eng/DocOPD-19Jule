
import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { withTheme } from "../../Theme";
const DateComp = ({ isDatePickerVisible, hideDatePicker, handleConfirm, theme}) => {

	return (
		<>
			<View>
				<DateTimePickerModal
					isVisible={isDatePickerVisible}
					mode="date"
					onConfirm={handleConfirm}
					onCancel={hideDatePicker} />
			</View>


		</>

	);
};

// export default  withTheme(DateComp);
export default  DateComp



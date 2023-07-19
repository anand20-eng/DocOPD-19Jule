import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

	dropdownGender: {
		width: "90%",
		marginBottom: 15,
		marginTop: 10,
		borderRadius: 10,
		marginHorizontal: 20,
		minHeight: 30,
	},
	dropdown: theme => ({
		// borderColor: theme.borderColor,
		height: 1,
		borderRadius: 10,
		minHeight: 47,

	}),
	placeholderStyles: theme => ({
		// color: theme.greyColor
		// color: greyColor

	}),
	label: theme => ({
		marginBottom: 2,
		marginStart: 20,
		marginTop: 20,
		// color: theme.greyColor

	})

})
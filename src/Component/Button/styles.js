
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    primaryButton: theme => ({
        backgroundColor: theme.primaryColor,
        padding: 10,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: "white",
        marginHorizontal: 20,
        borderRadius: 10,
    }),
    secondaryButton: theme => ({
        backgroundColor: theme.secondaryColor,
        padding: 10,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: "white",
        borderWidth: 0.6,
        borderColor: theme.primaryColor,
        borderRadius: 7,
        marginHorizontal: 20,
    }),
    primaryText: theme => ({
        fontSize: 18,
        color: theme.secondaryColor,
        fontWeight: "bold",
    }),
    secondaryText: theme => ({
        fontSize: 18,
        color: theme.primaryColor,
        // color: '#0c89fb',
        fontWeight: "bold",
        borderColor: "gray",

    }),
    removeFiled: {
        textAlign: 'center',
        marginHorizontal: 30

    },
    headLine: {
        textAlign: 'center'
    },
})








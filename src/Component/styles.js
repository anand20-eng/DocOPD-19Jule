
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    container: theme => ({
    }),
    labelStyle: {
        marginHorizontal: 5,
        color: "gray"
    },
    textInput1: {
        flex: 1,
        flexDirection: 'row',
        height: 20,
        width: 250,
        fontSize: 15,
        textAlign: 'left',
        color: 'black',
        marginHorizontal: 10,
        borderBottomWidth: 0.4,
        borderBottomColor: '#aaa',
        backgroundColor: "#CAD5E2",
    },
    focusedTextInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#0c89fb'
    },
    selectionColor: {
        selectionColor: '#0c89fb'
    },
})
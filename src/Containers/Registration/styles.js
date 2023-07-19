import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headLing: {
        textAlign: '',

    },
    onRow: {
        flexDirection: 'row'
    },
    textInputStyle: { height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 12, padding: 8, color: 'white' },
    buttonStyle: { height: 40, width: 160, backgroundColor: 'white', borderRadius: 8, marginTop: 10 }
});
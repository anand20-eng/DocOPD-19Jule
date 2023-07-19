import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container : {
        marginHorizontal:50,
        marginTop: 50,
        backgroundColor: '#FFFFFF',
        
    },
    profileImg: {
		padding: 10,
		height: 65,
		width: 65,
		borderRadius: 40,
		marginHorizontal:10,
        marginTop:20
	  },
   
      tabView1: {
        marginTop:200,
    	flex:1,
        flexDirection: 'row',
        width: '100%',
        height: 60,        
        backgroundColor: '#fff',
        alignItems: 'stretch',
        alignContent:'stretch',
        justifyContent: 'space-between',
        position:'absolute',
        bottom: 0,
        paddingBottom:5,
        paddingRight:10,
        paddingLeft:10,  
    },
})
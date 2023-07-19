
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

	container: {
		backgroundColor: '#FFFFFF'
	},

	container1: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent:'center',

      },
	innerContainer: {
		borderColor: '#7B7B7B',
		padding: 2,
		marginTop: 2

	},
	itemHeading: {
		fontWeight: 'bold',
		color: '#0c89fb',
		marginLeft: 10,
		textTransform: 'uppercase',
		paddingBottom: 5,
		fontSize: 16,
		paddingTop: 10,
	},
	headingView: {
		flexDirection: 'row',
	},
	itemText: {
		fontWeight: '300',
		color: '#a4c7d6',
		marginLeft: 10,
	},


	Card: {
		height: 180 ,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
		shadowRadius: 8,
		elevation: 8,
		justifyContent: 'space-between',
		paddingLeft: 5,
		paddingRight: 14,
		marginTop: 6,
		marginBottom: 6,
		marginLeft: 10,
		marginRight: 10,
		
	},
	profileImg: {
		padding: 10,
		height: 65,
		width: 65,
		borderRadius: 40,
		marginHorizontal:10
	  },
	floatingButton: {
		position: 'relative',
		marginBottom: 100,
		marginLeft: 290,
		backgroundColor: '#fff'
	},
	deleteButton: {
		marginHorizontal: 40
	},
	tabView1: {
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
	tabView: {
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
	
	

});

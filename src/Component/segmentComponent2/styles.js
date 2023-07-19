import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },  
  tabStyle: {
   borderColor: '#cacaca',
   borderWidth:2,
   
  },
  activeTabStyle: {
    backgroundColor: '#d7e3fc',
    borderColor:'#0c89fb',
   
  },
  tabTextStyle:{
    color: 'black',
    fontSize: 17,
  },
  activeTabTextStyle:{
    color :'#0c89fb',
    fontSize: 17,
  }
 

});




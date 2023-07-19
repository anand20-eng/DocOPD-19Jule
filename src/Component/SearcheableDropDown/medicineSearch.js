import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { allMedicineData } from '../../Containers/MedicineDiscrepanies/medcineList';
import { withTheme } from '../../Theme';

const MedicineSearchDropDown = () => {
  const [serverData, setServerData] = useState([]);
  const [searchMedicine, setSearchMedicine] = useState('');
   useEffect(() => {
    fetch('https://aboutreact.herokuapp.com/demosearchables.php')
      .then((response) => {
        response.json()
        console.log('response =>', response)
      }).then((responseJson) => {
        console.log(' useEffect response', responseJson.results)
        setServerData(responseJson.results);
      })
      .catch((error) => {
        console.error(error.response);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
     
        <SearchableDropdown
          onTextChange={(text) => setSearchMedicine(text)}
          onItemSelect={(item) => alert(JSON.stringify(item))}
          containerStyle={{ padding: 5 }}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
            borderRadius:10,
            height:48,
            marginStart:10,
            marginTop:5 
          }}
          inputSize={100} 

          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius:10,
            height:48,

          }}
          itemTextStyle={{
            color: '#222',
          }}
          itemsContainerStyle={{
            maxHeight: '60%',
          }}
          items={allMedicineData}
          defaultIndex={2}
          placeholder="search medicine"
          resetValue={false}
          underlineColorAndroid="transparent"
        />

      </View>
    </SafeAreaView>
  );
};

export default withTheme(MedicineSearchDropDown);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    marginTop:10,
    borderRadius:20
  },

  headingText: {
    padding: 8,
  },
});

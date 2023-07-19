import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withTheme } from '../../Theme'

const SearchMedicine = ({ data, input, medicineSearch }) => {
    return (
        <View>
            <Text> SearchFilter </Text>
            <FlatList data={data} renderItem={({ item }) => {
                //   if(input === '') {	
                //     return(
                //         <View style={{marginVertical:12}}> 
                //             <Text style={{fontSize:14, fontWeight:'bold'}}>{item.name}</Text>
                //         </View>
                //     )
                //        }
                // {console.log('SearchMedicine item line 9=>', item)}
                if (item.name.toLowerCase().includes(input.toLowerCase())) {
                    return (
                        <View style={{ marginVertical: 12 }}>
                            {/* <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text> */}
                              {console.log('item.name =>', item.name)}
                              {/* medicineSearch(item.name); */}
                        </View>
                    )
                }

            }} />
        </View>
    )
}

export default withTheme(SearchMedicine)

const styles = StyleSheet.create({})
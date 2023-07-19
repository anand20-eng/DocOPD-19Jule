import React,{useState} from 'react';
import { Switch, Text, View } from 'react-native';
import { withTheme } from '../../../../Theme'
import { styles } from './styles';

const Setting = ({ theme }) => {
    const [darkMode, setDarkMode] = useState(false)
   
    return (
    
        <View>
            <Text>Setting</Text>
            <Switch value={darkMode}
                onValueChange={(value) => { setDarkMode(value)} } />
        </View>
    )
}


// export default withTheme(Setting);
export default Setting;




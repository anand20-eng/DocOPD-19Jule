

import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { withTheme } from '../../../../Theme'

const DoctorSetting = ({ theme, setTheme, themeID }) => {
    const [darkMode, setDarkMode] = useState(false)

    return (

        <View>
            <Text> Theme Preference</Text>
            <Text> {themeID}</Text>
            <Switch value={darkMode}
                onValueChange={(value) => {
                setDarkMode(value) }}
                 />
        </View>
    )
}
//setTheme(value ? 'DARK' : 'LIGHT')



// export default withTheme(DoctorSetting);
export default DoctorSetting;


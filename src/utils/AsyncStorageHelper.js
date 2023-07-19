import AsyncStorage from '@react-native-async-storage/async-storage';

export const THEME_ID = 'THEME_ID';

export const getPreference = async(key) => await AsyncStorage.getItem(key);
export const setPreference = async(key, value) =>  AsyncStorage.setItem(key, value);



import { combineReducers } from 'redux';
import { signUpReducer } from './Adapter/Redux/Reducer/signUpReducer';
import { paRe } from './Adapter/Redux/Reducer/patients';
import { Add_comp, Add_Doc } from './Adapter/Redux/Reducer/Add_comp'
import { compAndDoc } from './Adapter/Redux/Reducer/compAndDoc_Login'
import { currentPatient } from './Adapter/Redux/Reducer/passPatientReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
}
const reducers = combineReducers({
    paRe, signUpReducer,Add_comp,Add_Doc,
    compAndDoc, currentPatient
});

const initialState = {};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, initialState,
    applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };


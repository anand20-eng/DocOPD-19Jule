import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './src/Navigation/AppNavigator';
import { store, persistor } from './src/store';
import { ThemeContextProvider } from './src/Theme';
import './src/apiConfig'

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeContextProvider>
          <AppNavigator />
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  );
}

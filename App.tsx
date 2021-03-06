/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { carousels } from './data/carousal';
import { products } from './data/products'
import Dashboard from './screens/Dashboard/Dashboard'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/routes'


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log(`>> APp: ${carousels.length}`)
  //<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> /
  return (<Provider store={store}>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  </Provider>)

};

export default App;

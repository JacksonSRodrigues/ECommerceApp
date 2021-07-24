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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { carousels } from './data/carousal';
import { products } from './data/products'

import Carousel from './components/Carousel/Carosel';
import ProductGrid from './components/ProductGrid/ProductGrid'
import DiscountCard from './components/DiscountCard/DiscountCard';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log(`>> APp: ${carousels.length}`)

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ width: '100%', height: 250 }}>
        <Carousel items={carousels} />
      </View>
      <DiscountCard discountProducts={products} />
    </SafeAreaView>
  );
};

export default App;

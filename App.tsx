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

import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';

const App = () => {
  // REMARK: to be able to spot the buggy behaviour
  //  you would need to switch system language to Turkish and reload the device

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;

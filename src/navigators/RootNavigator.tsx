import React, {ReactElement} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import CameraScreen from '../screens/CameraScreen';
import EditorScreen from '../screens/EditorSсreen';
import ImagePreviewScreen from '../screens/ImagePreviewScreen';

const RootStack = createStackNavigator();

export default function RootNavigator(): ReactElement {
  return (
    <RootStack.Navigator initialRouteName="Main">
      <RootStack.Screen name={'Main'} component={MainScreen} />
      <RootStack.Screen name={'Camera'} component={CameraScreen} />
      <RootStack.Screen name={'Editor'} component={EditorScreen} />
      <RootStack.Screen name={'Preview'} component={ImagePreviewScreen} />
    </RootStack.Navigator>
  );
}

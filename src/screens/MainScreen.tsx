import React, {ReactElement} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {CameraMode} from '../constants';

export default function MainScreen({navigation}: any): ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button
          title="PHOTO"
          onPress={() =>
            navigation.navigate('Camera', {cameraMode: CameraMode.PHOTO})
          }
        />
        <Button
          title="AVATAR"
          onPress={() =>
            navigation.navigate('Camera', {cameraMode: CameraMode.AVATAR})
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
  },
});

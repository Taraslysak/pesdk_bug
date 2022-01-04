import React, {ReactElement, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default function CameraScreen({navigation, route}: any): ReactElement {
  // camera ref
  const {cameraMode} = route.params;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_camera, setCamera] = useState<RNCamera>();
  const handleRef = (ref: RNCamera): any => {
    setCamera(ref);
  };
  const handleTakePicture = async (camera: RNCamera) => {
    const options = {quality: 0.5, base64: true};
    const {base64} = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    navigation.navigate('Editor', {cameraMode, base64});
  };
  return (
    <View style={styles.container}>
      <RNCamera
        pictureSize="640x480"
        playSoundOnCapture={false}
        captureAudio={false}
        ref={handleRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={'auto'}
        useNativeZoom={true}
        androidCameraPermissionOptions={{
          title: 'Camera permission',
          message: 'Please, give camera permission',
          buttonPositive: 'OK',
          buttonNegative: 'CANCEL',
        }}>
        {({camera, status}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => handleTakePicture(camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
}

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  camera: {flex: 1, justifyContent: 'flex-end'},
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

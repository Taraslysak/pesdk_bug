import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ImagePreviewScreen({route}: any): ReactElement {
  const {image} = route.params;

  return (
    <View style={styles.container}>
      {image.includes('base64') ? (
        <Image
          style={styles.image}
          source={{uri: image}}
          resizeMode="contain"
        />
      ) : (
        <Text>{image}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {flex: 1},
});

import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ImagePreviewScreen({route}: any): ReactElement {
  const {image} = route.params;

  // REMARK: If the system language is set to Turkish, PESDK export result will be path to file, which is not satisfying behaviour
  // and the path will be shown as string. If everything goes well, 'image' prop will be a base64 string, and the image will be displayed

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

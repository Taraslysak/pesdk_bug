import React, {ReactElement} from 'react';
import {Alert} from 'react-native';
import {
  Configuration,
  ImageExportType,
  PhotoEditorModal,
  Tool,
} from 'react-native-photoeditorsdk';
import {CameraMode} from '../constants';

interface PhotoEditorResult {
  /** The edited image. */
  image: string;
  /** An indicator whether the input image was modified at all. */
  hasChanges: boolean;
  /** All modifications applied to the input image if `export.serialization.enabled` of the `Configuration` was set to `true`. */
  serialization?: string | object;
}

const configuration: {[K in CameraMode]: Configuration} = {
  [CameraMode.PHOTO]: {
    tools: [Tool.TRANSFORM, Tool.BRUSH],
    export: {
      image: {
        exportType: ImageExportType.DATA_URL,
        quality: 1,
      },
    },
  },
  [CameraMode.AVATAR]: {
    forceCrop: true,
    tools: [Tool.BRUSH],
    transform: {
      items: [{width: 1, height: 1, name: 'Square'}],
    },
    export: {
      image: {
        exportType: ImageExportType.DATA_URL,
        quality: 0.5,
      },
    },
  },
};

export default function EditorScreen({route, navigation}: any): ReactElement {
  const {cameraMode, base64} = route.params;

  const handleOnExport = (args: PhotoEditorResult) => {
    navigation.navigate('Preview', {image: args.image});
  };
  const handleOnCancel = () => {
    navigation.goBack();
  };
  const handleOnError = () => {
    Alert.alert('Image editing error');
    navigation.goBack();
  };
  return (
    <PhotoEditorModal
      configuration={configuration[cameraMode as CameraMode]}
      visible={true}
      onExport={handleOnExport}
      onCancel={handleOnCancel}
      onError={handleOnError}
      image={{uri: `data:image/png;base64,${base64}`}}
    />
  );
}

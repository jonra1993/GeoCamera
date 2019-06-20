import React, { PureComponent } from 'react';
import {StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ButtonHelp from "../../components/buttons/ButtonHelp"
import {addPhoto} from "../../actions/index";
import {updateLocation} from "../../actions/index";
import RNFS from 'react-native-fs';
import {connect} from "react-redux";
import Geolocation from "react-native-geolocation-service";

let hasLocationPermission = async () => {
  if (Platform.OS === "ios" ||
      (Platform.OS === "android" && Platform.Version < 23)) {
    return true;
  }

  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );
  if (hasPermission) {return true;}
  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );
  if (status === PermissionsAndroid.RESULTS.GRANTED) {return true;}
  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show("Location permission denied by user.", ToastAndroid.LONG);
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show("Location permission revoked by user.", ToastAndroid.LONG);
  }
  return false;
};

class CameraScreen extends PureComponent {
  render() {
    this.props.updateLocation();
    console.log(this.props.photos)
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          //flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <ButtonHelp onPress={this.takePicture.bind(this)} style={styles.capture}></ButtonHelp>
        </View>
      </View>
    );
  }

  
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options).then(data => {
        console.log(data);
        console.log(data.uri);
        const timestamp = Date.now();
        let path = RNFS.PicturesDirectoryPath + "/GeoCam"+timestamp;
        console.log(path)
        // write the file
        RNFS.moveFile(data.uri, path)
          .then((success) => {
            console.log('FILE MOVED!');
          })
          .catch((err) => {
            console.log(err.message);
        });
        /*
        this.props.addPhoto({
          "uri": data.uri,
          "location": this.props.location
        })*/
        this.props.addPhoto({
          "uri": "file:///" + path,
          "location": this.props.location
        })
        this.props.navigation.navigate("MapScreen")

      });
    }
  };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
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


const mapStateToProps = state => {
  return {
    photos: state.photos,
    location: state.location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPhoto: async(photo) => {
      dispatch(addPhoto(photo));    
    },
    updateLocation: async() => {
      if (!hasLocationPermission) {return;}
      Geolocation.getCurrentPosition(
        (position) => {
            let location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            dispatch(updateLocation(location));
        },
        (error) => {
            // See error code charts below.
            //console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 0 }
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);

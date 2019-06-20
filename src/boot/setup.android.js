import React, {Component} from "react";
import AppContainer from "../index";
import {StyleProvider} from "native-base";
import getTheme from "../theme/components";
import material from "../theme/variables/platform";
import allReducers from "../reducers/index";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {PermissionsAndroid} from "react-native";

const store = createStore(allReducers);
console.disableYellowBox = true

async function requestWritePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "GeoCam",
        message:
          "It needs to get access to WRITE_EXTERNAL_STORAGE",
        buttonNegative: "Cancelar",
        buttonPositive: "OK",
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //console.log('You can use the camera');
    } else {
      //console.log('Camera permission denied');
    }
  } catch (err) {
    console.error(err);
  }
}

async function requestReadPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "GeoCam",
        message:
          "It needs to get access to READ_EXTERNAL_STORAGE",
        buttonNegative: "Cancelar",
        buttonPositive: "OK",
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //console.log('You can use the camera');
    } else {
      //console.log('Camera permission denied');
    }
  } catch (err) {
    console.error(err);
  }
}

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "GeoCam",
        message:
          "It needs to get access to location",
        buttonNegative: "Cancelar",
        buttonPositive: "OK",
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //console.log('You can use the camera');
    } else {
      //console.log('Camera permission denied');
    }
  } catch (err) {
    console.error(err);
  }
}

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "GeoCam",
        message:
          "It needs to get access to camera",
        buttonNegative: "Cancelar",
        buttonPositive: "OK",
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //console.log('You can use the camera');
    } else {
      //console.log('Camera permission denied');
    }
  } catch (err) {
    console.error(err);
  }
}

export default class Setup extends Component{
  componentDidMount(){
    requestLocationPermission();
    requestCameraPermission();
    requestReadPermission();
    requestWritePermission();
  }

  render(){
    return (
      <Provider store= {store}>
        <StyleProvider style={getTheme(material)}>
          <AppContainer/>
        </StyleProvider>
      </Provider>
    );
  }
}

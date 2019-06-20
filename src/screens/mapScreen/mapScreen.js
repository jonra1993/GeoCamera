import React, { Component } from "react";
import {
  Alert,
  View,
  Dimensions,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
  Image
} from "react-native";
import { Container, Header, Title, Button, Left, Right, Body, Icon} from "native-base";
import ButtonHelp from "../../components/buttons/buttonGetLocation";

import MapView, {PROVIDER_GOOGLE, Marker}  from "react-native-maps";
import Style from "./style";
//Redux components
import {updateLocation} from "../../actions/index";
import {connect} from "react-redux";
import Geolocation from "react-native-geolocation-service";
import RNFS from 'react-native-fs';
import { logicalExpression } from "@babel/types";

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


class MapScreen extends Component {

  componentDidMount() {
    //this.props.updateLocation();
  }

  render() {
    const { width, height } = Dimensions.get("window");
    const ratio = width / height;
    const zoom = 0.01;

    const coordinates = {
      latitude: this.props.location.latitude,
      longitude: this.props.location.longitude,
      latitudeDelta: zoom,
      longitudeDelta: zoom * ratio,
    };
    const coordinate = {
      latitude: this.props.location.latitude,
      longitude: this.props.location.longitude
    };
    
    let list =this.props.photos.photos
    let marks = list.map(li => {
      return(
      <Marker
        coordinate={li.location}
        title="Photo"
        description={"Latitude: "+ li.location.latitude+" longitude: "+li.location.longitude}
        //onLoad={() => this.forceUpdate()}
      >
        <Image source={{uri:li.uri}} style={{ width: 50, height: 50 }} />
      </Marker>)
    });
    return (
      <Container>
        <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
          <Body>
            <Title>GeoCamera</Title>
          </Body>
          <Right />
        </Header>
        <View style={Style.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={Style.map}
            initialRegion={coordinates}
            showsCompass
          >
          {marks}
          </MapView>
          <ButtonHelp onPress = {()=>this.props.updateLocation()}  />
        </View>
      </Container>
    );
  }
}


const mapStateToProps = state => {
  return {
    photos: state.photos,
    location: state.location,
  };
};


const mapDispatchToProps = dispatch => {
  return {
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
export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);

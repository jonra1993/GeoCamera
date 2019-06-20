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
import { Container, Header, Title, Button, Left, Right, Body, Icon, Toast} from "native-base";
import ButtonHelp from "../../components/buttons/buttonGetLocation";
import ButtonGetLocation from "../../components/buttons/ButtonHelp";

import MapView, {PROVIDER_GOOGLE, Marker}  from "react-native-maps";
import Style from "./style";
//Redux components
import {updateLocation} from "../../actions/index";
import {connect} from "react-redux";
import Geolocation from "react-native-geolocation-service";

const GOOGLE_MAPS_APIKEY = "AIzaSyB_yjKhG9m8y1DtBDdCok4FgfvNDX3e3I4";

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


class NeedhelpScreen extends Component {

  state = { status: "none" };

  componentDidMount() {
    this.props.updateLocation();
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
    
    this.props.realTimeUpdate();
    
    const list = [{
                  latlng: {
                    latitude: -0.2939184,
                    longitude: -78.5472728
                  },
                  title: "Centro médico del día",
                  description: "¿Desea Contactarse?",
                  icon: require("../../assets/medicineIcon.png")
                },
                {
                  latlng: {
                    latitude: -0.2891766,
                    longitude: -78.5493664
                  },
                  title: "Servicio mecánico del sur",
                  description: "¿Desea Contactarse?",
                  icon: require("../../assets/mechanicalIcon.png"),
                }];
    return (
      <Container>
        <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
          <Body>
            <Title>AIG Mujer</Title>
          </Body>
          <Right />
        </Header>
        <View style={Style.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={Style.map}
            region={coordinates}
            showsCompass
          >
            <Marker coordinate={coordinate} pinColor="green"/>
            {list.map(marker => (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                onPress={() => this.markerClick()}
                onLoad={() => this.forceUpdate()}
                onCalloutPress={()=>marker.makecall("0979191234")}
              >
                <Image source={marker.icon} style={{ width: 50, height: 50 }} />
              </Marker>
            ))}
          </MapView>
          <ButtonGetLocation onPress = {()=>this.props.updateLocation()}  />
          <ButtonHelp  />
        </View>
      </Container>
    );
  }
}


const mapStateToProps = state => {
  return {
    tabs: state.tabs,
    location: state.location,
    puntolocal: state.puntos
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
    },
    realTimeUpdate: async() => {
      if (!hasLocationPermission) {return;}
      watchId = Geolocation.watchPosition(
        (position) => {
          let location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          dispatch(updateLocation(location));
          //console.log(position);
        },
        (error) => {
          //console.log(error);
          //console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, distanceFilter: 10, interval: 5000, fastestInterval: 2000 }
      );
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NeedhelpScreen);

import React, {Component} from "react";
import { Root } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";

import MapScreen from "./screens/mapScreen/mapScreen";
import LoginScreen from "./screens/loginScreen/loginScreen";
import CameraScreen from "./screens/cameraScreen/cameraScreen";


const AppNavigator = createStackNavigator(
	{
		LoginScreen: { screen: LoginScreen },
		MapScreen: {screen: MapScreen},
		CameraScreen: {screen: CameraScreen}
	},
	{
		initialRouteName: "LoginScreen",
		headerMode: "none"
	}
);

const AppCont = createAppContainer(AppNavigator);

export default class AppContainer extends Component {
	render(){
		return (
			<Root>
				<AppCont />
			</Root>
		);
	}
}


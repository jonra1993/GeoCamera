import React, {Component} from "react";
import AppContainer from "../index";
import {StyleProvider} from "native-base";
import getTheme from "../theme/components";
import material from "../theme/variables/platform";
import allReducers from "../reducers/index";
import {createStore} from "redux";
import {Provider} from "react-redux";


const store = createStore(allReducers);
console.disableYellowBox = true


export default class Setup extends Component{

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

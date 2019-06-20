import React, { Component} from "react";
import { TouchableOpacity, Image } from "react-native";

class ButtonHelp extends Component {
  render(){
    const { onPress} = this.props;
    //console.log(count);
    return (
      <TouchableOpacity
        style={{
            borderWidth:1,
            borderColor:"rgba(0,0,0,0.2)",
            alignItems:"center",
            justifyContent:"center",
            position: "absolute",
            bottom: 5,
            width:80,
            height:80,
            backgroundColor:"rgba(1,1,1,0)",
            borderRadius:100,
          }}
          onPress={() => onPress()}
      >
        <Image style={{width: 80, height: 80}}
          source={require("../../assets/helpButton.png")}
        />
      </TouchableOpacity>
    );
  }
}


export default ButtonHelp;

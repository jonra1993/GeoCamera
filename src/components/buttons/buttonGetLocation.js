import React, { Component} from "react";
import { TouchableOpacity} from "react-native";
import { Icon} from "native-base";

//Redux components
//import { tab1Click, tab2Click, increment, decrement } from "../../actions/index";

class ButtonGetLocation extends Component {
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
          //bottom: 10,
          top: 10,
          right: 10,
          width:55,
          height:55,
          backgroundColor:"rgba(1,1,1,0)",
          borderRadius:100,
        }}
        onPress={() => onPress()}
      >
        <Icon name="target-two" type="Foundation" style={{fontSize: 50, color: "black"}} />
      </TouchableOpacity>
    );
  }
}


export default ButtonGetLocation;

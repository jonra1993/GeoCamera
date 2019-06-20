import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    map: {
      marginTop: 1.5,
      ...StyleSheet.absoluteFillObject,
    },
    buttonContainer:{
      width: 100,
      height: 100,
      position: "absolute",
      bottom: 10,
      right: 10,
    },
    plainView: {
      width: 60,
    },
  });

export default Styles;

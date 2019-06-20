/* eslint-disable no-console */
let tabs = {
  tab1: true,
  tab2: false
};

export default function(state = tabs, action){
  switch (action.type) {
    case "Tab1Click":
      return {
        tab1 : true,
        tab2 : false,
      };
      //console.log("tab1Click");
    case "Tab2Click":
        return {
          tab1 : false,
          tab2 : true,
        };
    default:
        return state;
  }
}

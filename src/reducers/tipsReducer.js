/* eslint-disable no-console */
let tipsDefault = [];
  export default function(state = tipsDefault, action){
    switch (action.type) {
      case "Update1":
        return action.tips;
      default:
          return state;
    }
  }
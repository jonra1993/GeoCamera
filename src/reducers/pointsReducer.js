/* eslint-disable no-console */
let puntosDefault = [];
  export default function(state = puntosDefault, action){
    switch (action.type) {
      case "Update3":
        return action.puntos;
      default:
          return state;
    }
  }
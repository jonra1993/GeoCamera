//-----------------------------
// Constants
//-----------------------------
const GET_CURRENT_LOCATION = "GET_CURRENT_LOCATION"


//-----------------------------
// Actions
//-----------------------------

/*
export function getCurrentLocation(){
  return{
    navigator.getCurrentLocation.getCurrentPosition{

    }
  }
}
*/



export function increment(){
  return {
    type: "Increment"
  };
}
export function decrement(){
  return {
    type: "Decrement"
  };
}
export const tab1Click = ()=>{
  return {
    type: "Tab1Click"
  };
};
export const tab2Click = ()=>{
  return {
    type: "Tab2Click"
  };
};
export const updateLocation = (location)=>{
  return {
    type: "Update",
    location
  };
};

export const updateTips = (tips)=>{
  return {
    type: "Update1",
    tips
  };
};

export const updatePoints = (puntos)=>{
  return {
    type: "Update3",
    puntos
  };
};
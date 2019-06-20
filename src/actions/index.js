//-----------------------------
// Constants
//-----------------------------
const GET_CURRENT_LOCATION = "GET_CURRENT_LOCATION"


//-----------------------------
// Actions
//-----------------------------

export const addPhoto = (photo)=>{
  return {
    type: "Add",
    photo
  };
}

export const updateLocation = (location)=>{
  return {
    type: "Update",
    location
  };
};
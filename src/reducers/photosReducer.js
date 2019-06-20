const initialState = {
  photos: []
  }

export default function(state = initialState, action){
  switch (action.type) {
      case "Add":
          return {
            photos: [
              ...state.photos,
              action.photo
            ]
          }
      default:
          return state;
  }
}  
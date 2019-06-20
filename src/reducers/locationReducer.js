/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-console */
let initLocation = {
    latitude: -0.207161,
    longitude: -78.492736
};
export default function(state = initLocation, action){
    switch (action.type) {
        case "Update":
            return (action.location);
        case "RealTimeUpdate":
                return (action.location);
        default:
            return state;
    }
}

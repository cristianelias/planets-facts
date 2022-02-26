// Data
import initialState from "./planetsInitialState";

const planets = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_CURRENT_PLANET":
      return Object.assign({}, state, {
        planet: state.planets.find(
          ({ name }) => name.toUpperCase() === payload.toUpperCase()
        ),
      });

    case "CHANGE_CURRENT_ASPECT":
      return Object.assign({}, state, {
        aspect: payload,
      });

    default:
      return state;
  }
};

export default planets;

// Dependencies
import { combineReducers } from "redux";

// Reducers
import planets from "./planetsReducer/planetsReducer";

const rootReducer = combineReducers({
  planets,
});

export default rootReducer;

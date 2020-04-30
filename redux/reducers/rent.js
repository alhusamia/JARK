import { RENT } from "../actions/types";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RENT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

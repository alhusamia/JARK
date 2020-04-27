import { SET_PROFILE } from "../actions/types";

export default (profile = [], { type, payload }) => {
  switch (type) {
    case SET_PROFILE:
      return payload;
    default:
      return profile;
  }
};

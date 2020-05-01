import { GET_OWNER_PROFILE } from "../actions/types";

export default (profile = [], { type, payload }) => {
  switch (type) {
    case GET_OWNER_PROFILE:
      return payload;
    default:
      return profile;
  }
};

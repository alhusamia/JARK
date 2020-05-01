import instance from "./instance";
import { GET_OWNER_PROFILE } from "./types";

export const getOwnerProfile = (ProfileID) => async (dispatch) => {
  try {
    const res = await instance.get(`profile/${ProfileID}/`);
    const profile = res.data;
    console.log(profile);
    dispatch({
      type: GET_OWNER_PROFILE,
      payload: profile,
    });
  } catch (err) {
    console.error("Error while fetching Profile", err);
  }
};

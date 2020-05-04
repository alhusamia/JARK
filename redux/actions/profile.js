import instance from "./instance";
import { SET_PROFILE } from "./types";

export const getProfile = () => async (dispatch) => {
  try {
    const res = await instance.get(`profile/`);
    const profile = res.data;   
    dispatch({
      type: SET_PROFILE,
      payload: profile,
    });
  } catch (err) {
    console.error("Error while fetching Profile", err);
  }
};

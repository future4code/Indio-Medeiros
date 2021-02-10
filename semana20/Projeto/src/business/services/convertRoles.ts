import { POST_TYPES } from "../../data/model/postModel";

export const convertUserRoleToString = (role: POST_TYPES): string => {
  return role === POST_TYPES.EVENT ? "event" : "normal";
};

export const convertStringToUserRole = (role: string): POST_TYPES => {
  if (role === "event") {
    return POST_TYPES.EVENT;
  } else if (role === "normal") {
    return POST_TYPES.NORMAL;
  }
  throw new Error("Invalid User Role");
};

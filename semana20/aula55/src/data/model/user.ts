import { USER_ROLES } from "../../business/entities/user";

export type signupInputDTO = {
  name: string;
  nickname: string;
  password: string;
  email: string;
  role: string;
};

export type loginInputDTO = {
  email: string;
  password: string;
};

export const convertRoleToText = (role: USER_ROLES): string => {
  return role === USER_ROLES.ADMIN ? "ADMIN" : "NORMAL";
};

export const convertTextToRole = (text: string): USER_ROLES => {
  if (text === "NORMAL") {
    return USER_ROLES.NORMAL;
  }
  return USER_ROLES.ADMIN;
};

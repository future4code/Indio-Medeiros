import * as jwt from "jsonwebtoken";
import { userTokenType } from "../type/userTokenType";

export const getData = (token: string): userTokenType => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role: payload.role,
  };
  return result;
};
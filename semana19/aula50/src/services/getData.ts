import * as jwt from "jsonwebtoken";
import { userTokenType } from "../type/userTokenType";

const getData = (token: string): userTokenType => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
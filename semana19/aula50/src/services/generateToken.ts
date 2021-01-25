import * as jwt from "jsonwebtoken";
import {userTokenType} from '../type/generateTokenType'

const expiresIn = "1min"

export const generateToken = (id: userTokenType): string => {
 
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }

  );

  return token;
}

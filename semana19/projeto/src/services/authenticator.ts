import * as jwt from "jsonwebtoken";

export function generateToken(payload: string): string {
  const token: string = jwt.sign(payload, process.env.JWT_KEY as string, {
  });

  return token;
}

export function getTokenData(token: string): string {
  const payload = jwt.verify(token, process.env.JWT_KEY!) as string;

  return payload;
}

import * as bcrypt from "bcryptjs";



export const hash = async (s: string): Promise<string> => {
  const rounds: number = Number(process.env.BCRYPT_COST);
  const salt: string =  bcrypt.genSaltSync(rounds);
  const result: string = bcrypt.hashSync(s, salt);
  return result;
};

export const compare = async (s: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(s, hash);
};

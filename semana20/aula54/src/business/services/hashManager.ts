import * as bcrypt from "bcryptjs";

export const hash = async (password: string): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSaltSync(rounds);
  return bcrypt.hashSync(password, salt);
};

export const compare = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

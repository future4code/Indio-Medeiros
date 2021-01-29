import * as bcrypt from "bcryptjs";

export function hashGenerator(password: string): string {
  const cost: number = Number(process.env.BCRYPT_COST);
  const salt: string = bcrypt.genSaltSync(cost);
  const encryptedText: string = bcrypt.hashSync(password, salt);

  return encryptedText;
}

export function comparePasswordEndHash(
  password: string,
  encryptedText: string
): boolean {
  return bcrypt.compareSync(password, encryptedText);
}

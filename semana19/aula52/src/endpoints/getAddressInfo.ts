import { Request, Response } from "express";
import { getAddressByCep } from "../services/adressManage";
import { addressType } from "../type/addressType";

export default async function getAddressInfo(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const cep = req.params.cep;

    //validação
    if (!cep || cep.includes("-")) {
      res.statusCode = 406;
      throw new Error("utilize somente numeros");
    }

    //requisição feita em outro servidor
    const address: addressType = await getAddressByCep(cep);

    res.status(200).send(address);
  } catch (error) {
    res.send(error.message);
  }
}

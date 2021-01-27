import axios from "axios";
import { addressType } from "../type/addressType";

const URL = "https://viacep.com.br/ws";

export async function getAddressByCep(cep: string): Promise<addressType> {
  try {
    const result = await axios.get(`${URL}/${cep}/json`);
    const { logradouro, bairro, localidade, uf } = result.data;
    const myAddress: addressType = {
      name: logradouro,
      neighbourhood: bairro,
      city: localidade,
      state: uf,
    };
    return myAddress;
  } catch (error) {
    throw new Error(error.message);
  }
}

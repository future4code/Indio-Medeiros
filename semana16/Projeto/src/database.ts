export type user  = {
    id: number
    name: string,
    nickname: string,
    email: string
}

export let users: user[] = [];

export type task = {
    title: string,
	description: string,
	limitDate: Date,
	creatorUserId: number
}

//validação de dados do req.body
 export  function checkBody (req: string, propsError: string) {
    let Message = `(verifique o body) ausência da propriedade `;
    if (!req || req === undefined) {
       throw new Error(Message + propsError);
      }  
  }
//validação do id
  export  function checkID (req: string, result: number) {
    if (!req || result === -1) {
        throw new Error("usuário não encontrado, verifique o id utilizado");
      } 
  }

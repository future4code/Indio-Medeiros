import { Request, Response } from "express";
import { send } from "process";
import filterUserType from "../queryEndPoint/filterUserType";

// filtrar o usuários por nome
export const getUserType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const type = req.params.type as string;

    if(type === "CX" ||  type === "Teacher" || type === "Operations" ){
      
    const users = await filterUserType(type);
    console.log(users)
    if (!type.length ) {
      res.statusCode = 404;
      throw new Error("No users found");
    }
    res.status(200).send(users);
   
    }else{
      
      res.statusCode = 404
      throw new Error ("parametro não aceito. use: 'CX', 'Teacher' ou 'Operations'")
    }
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

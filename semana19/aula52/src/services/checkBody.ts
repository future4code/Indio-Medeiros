import { Response } from "express";

export function checkBody (req:string, props:string, res:Response):any {
    if(!req || req === undefined){
        res.statusCode = 406
        throw new Error(`check property *${props}*`)
    }
}

export function checkBodyIncludes (req:string, props:string, includes:string,  res:Response):any {
    if (!req || !req.includes(`${includes}`)) {
        res.statusCode = 406;
        throw new Error(`check property *${props}*`);
      }
}
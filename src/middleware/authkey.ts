import {Request, Response, NextFunction} from "express"

export default function authKey(req:Request, res:Response, next:NextFunction) {
  const clientKey = req.header('x-API-Key')
  const apikey = process.env.API_KEY_CLIENT
  if(!clientKey) {
    return res.status(401).send({error: "client api key not provided!"})
  }
  if(clientKey !== apikey) {
    return res.status(401).send({error: "client api key invalid!"})
  }

  next()
}

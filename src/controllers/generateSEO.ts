import { Request, Response } from "express";
import { generateSEOService } from "../services/geminiService";

export async function generateSEO(req:Request, res:Response){
  const {topic, keywords, leng } = req.body
  if(!topic || !keywords || !leng) {
    return res.status(400).send({error: 'data not provided!'})
  }
  try{
    const seo = await generateSEOService(topic,keywords, leng)
    res.status(200).json(seo)
  } catch(error) {
    console.error(error)
    res.status(500).json(error)
  }
}

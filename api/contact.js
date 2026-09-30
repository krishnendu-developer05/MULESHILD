import { db } from "hatchable";

export const access = "public";
export const methods = ["POST"];

export default async function(req,res){
  const body=req.body||{};
  const name=typeof body.name==="string"?body.name.trim():"";
  const email=typeof body.email==="string"?body.email.trim().toLowerCase():"";
  const message=typeof body.message==="string"?body.message.trim():"";
  const consent=body.consent===true;
  if(!name||name.length>100)return res.status(400).json({error:"Please enter a valid name."});
  if(!email||email.length>160||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return res.status(400).json({error:"Please enter a valid email."});
  if(!message||message.length>1200)return res.status(400).json({error:"Please enter a message under 1200 characters."});
  if(!consent)return res.status(400).json({error:"Consent is required before sending the request."});
  await db.query("INSERT INTO contact_submissions (name,email,message,consent,consent_at) VALUES ($1,$2,$3,$4,now())",[name,email,message,consent]);
  res.json({ok:true});
}
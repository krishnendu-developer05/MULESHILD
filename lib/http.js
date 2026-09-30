export function jsonError(res,status,message,code='bad_request'){return res.status(status).json({error:{code,message}})}
export function requestId(req){return req.headers['x-request-id']||crypto.randomUUID()}
export function requiredString(v,max=200){return typeof v==='string'&&v.trim().length>0&&v.length<=max}
export function positiveAmount(v){const n=Number(v);return Number.isFinite(n)&&n>0&&n<=100000000}
export function isoDate(v){const d=new Date(v);return Number.isNaN(d.getTime())?null:d.toISOString()}
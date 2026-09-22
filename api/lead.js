// Vercel function: no persistent local store. A 2xx is returned only when the configured receiver acknowledges the lead.
const json=(res,status,body)=>{res.statusCode=status;res.setHeader('Content-Type','application/json; charset=utf-8');res.setHeader('Cache-Control','no-store');res.end(JSON.stringify(body));};
const validEmail=s=>typeof s==='string'&&s.length<=200&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
export default async function handler(req,res){
  if(req.method!=='POST'){res.setHeader('Allow','POST');return json(res,405,{error:'Method not allowed'});}
  const endpoint=process.env.LEAD_WEBHOOK_URL;
  const ready=endpoint&&process.env.LEAD_OPERATOR_NAME&&process.env.PRIVACY_CONTACT_EMAIL&&process.env.LEAD_RECEIVER_NAME&&process.env.LEAD_RETENTION_DAYS;
  if(!ready)return json(res,503,{error:'Lead delivery is not configured'});
  let target;
  try{target=new URL(endpoint);if(target.protocol!=='https:'||target.username||target.password)throw Error('Invalid target');}catch{return json(res,503,{error:'Lead delivery is not configured'});}
  let b=req.body;
  if(typeof b==='string'){try{b=JSON.parse(b)}catch{return json(res,400,{error:'Invalid request'});}}
  if(!b||typeof b!=='object'||Array.isArray(b))return json(res,400,{error:'Invalid request'});
  if(b.company_url)return json(res,200,{accepted:true}); // honeypot, no lead sent
  const txt=k=>typeof b[k]==='string'?b[k].trim():'';
  if(txt('consent')!=='on'||!txt('name')||txt('name').length>100||!validEmail(txt('email'))||!/^\+?[\d ()-]{7,30}$/.test(txt('phone'))||!/^\d{5}$/.test(txt('zip'))||txt('details').length>1500||!['Replacement','Storm damage','Repair assessment','Unsure'].includes(txt('project'))||!['Researching','Within a month','As soon as practical'].includes(txt('timing')))return json(res,400,{error:'Check required details and consent'});
  const payload={name:txt('name'),email:txt('email'),phone:txt('phone'),zip:txt('zip'),project:txt('project'),timing:txt('timing'),details:txt('details'),consent:true,source:'dallasnewroof.com/get-quotes',submittedAt:new Date().toISOString()};
  try{
    const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),8000);
    let response;
    try{response=await fetch(target,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.LEAD_WEBHOOK_TOKEN?{Authorization:`Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify(payload),signal:controller.signal,redirect:'error'});}finally{clearTimeout(timeout);}
    if(!response.ok)return json(res,502,{error:'Receiver did not accept request'});
    return json(res,200,{accepted:true});
  }catch{return json(res,502,{error:'Delivery failed'});}
}

import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const files={'/':'index.html','/app.js':'app.js','/styles.css':'styles.css'};
const types={html:'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8'};
export const server=http.createServer(async(req,res)=>{
 const path=new URL(req.url,'http://localhost').pathname;
 if(!files[path]){res.writeHead(404);res.end('No encontrado');return;}
 try{const body=await readFile(new URL('./public/'+files[path],import.meta.url));res.writeHead(200,{'Content-Type':types[files[path].split('.').pop()],'X-Content-Type-Options':'nosniff'});res.end(body);}catch{res.writeHead(500);res.end('Error al cargar la aplicación');}
});
if(process.argv[1]===fileURLToPath(import.meta.url))server.listen(Number(process.env.PORT||3000),'0.0.0.0',()=>console.log('Gestión Sanitaria 360 disponible en puerto '+(process.env.PORT||3000)));

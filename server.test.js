import {test} from 'node:test';
import assert from 'node:assert/strict';
import {server} from './server.js';
test('sirve la aplicación y sus recursos, y rechaza rutas desconocidas',async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 try{const base=`http://127.0.0.1:${server.address().port}`;
 for(const [path,type,expected] of [['/','text/html','lang="es"'],['/app.js','text/javascript','contact-form'],['/styles.css','text/css','.hero']]){const r=await fetch(base+path);assert.equal(r.status,200);assert.ok(r.headers.get('content-type').includes(type));assert.ok((await r.text()).includes(expected));}
 assert.equal((await fetch(base+'/missing')).status,404);
 }finally{await new Promise(resolve=>server.close(resolve))}
});
test('el juego tiene manifiesto, iconos y todos los recursos para funcionar sin conexión',async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 try{const base=`http://127.0.0.1:${server.address().port}`;
 const sw=await (await fetch(base+'/juego/sw.js')).text();
 const assets=sw.match(/const ASSETS=\[(.*?)\]/)[1].match(/'([^']+)'/g).map(x=>x.slice(1,-1));
 for(const path of assets){const r=await fetch(base+'/juego/'+path.replace(/^\.\//,''));assert.equal(r.status,200,path);assert.ok((await r.arrayBuffer()).byteLength>0,path)}
 const manifest=await (await fetch(base+'/juego/manifest.webmanifest')).json();assert.equal(manifest.display,'standalone');assert.equal(manifest.scope,'./');
 }finally{await new Promise(resolve=>server.close(resolve))}
});

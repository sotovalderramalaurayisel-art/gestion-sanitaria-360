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

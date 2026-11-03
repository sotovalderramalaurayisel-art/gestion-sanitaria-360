import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createState,advance} from './public/juego/engine.js';
const item=(type,x=200,y=570)=>({type,x,y,speed:100,rotation:0});
test('atrapar una estrella suma diez puntos y la retira',()=>{const s=createState();s.spawn=100;s.objects=[item('star')];assert.equal(advance(s,.02).length,1);assert.equal(s.score,10);assert.equal(s.objects.length,0);assert.equal(s.lives,3)});
test('un meteorito atrapado cuesta una vida; uno esquivado no',()=>{const s=createState();s.spawn=100;s.objects=[item('rock'),item('rock',40,680)];advance(s,.02);assert.equal(s.lives,2);assert.equal(s.objects.length,0)});
test('perder la última estrella termina la partida y detiene la simulación',()=>{const s=createState();s.spawn=100;s.lives=1;s.objects=[item('star',50,680)];advance(s,.02);assert.equal(s.lives,0);assert.ok(s.ended);const elapsed=s.elapsed;assert.deepEqual(advance(s,1),[]);assert.equal(s.elapsed,elapsed)});
test('la puntuación aumenta el nivel y los intervalos largos se limitan',()=>{const s=createState();s.score=150;advance(s,20,()=>.5);assert.equal(s.level,2);assert.equal(s.elapsed,.05);assert.equal(s.objects[0].speed,161.5)});

export const WIDTH=400,HEIGHT=650;
export function createState(){return {score:0,lives:3,level:1,x:200,objects:[],spawn:0,elapsed:0,ended:false};}
export function advance(state,dt,random=Math.random){
 if(state.ended)return [];
 dt=Math.min(Math.max(dt,0),.05);state.elapsed+=dt;state.level=1+Math.floor(state.score/150);state.spawn-=dt;
 if(state.spawn<=0){state.objects.push({x:22+random()*356,y:-25,type:random()<.23?'rock':'star',speed:120+Math.min(state.level-1,14)*19+random()*45,rotation:random()*6});state.spawn=Math.max(.25,.85-(state.level-1)*.055);}
 const events=[];
 for(const o of state.objects){o.y+=o.speed*dt;o.rotation+=dt;
  if(o.y>HEIGHT-88&&o.y<HEIGHT-42&&Math.abs(o.x-state.x)<36){o.caught=true;if(o.type==='star'){state.score+=10;events.push({type:'star',x:o.x,y:o.y})}else{state.lives--;events.push({type:'rock',x:o.x,y:o.y})} }
  if(o.y>HEIGHT+25&&!o.caught){o.caught=true;if(o.type==='star'){state.lives--;events.push({type:'miss',x:o.x,y:HEIGHT-50})}}
  if(state.lives<=0){state.lives=0;state.ended=true;break;}
 }
 state.objects=state.objects.filter(o=>!o.caught);return events;
}

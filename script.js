document.addEventListener("DOMContentLoaded",function(){
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const loader=$("#loader"),header=$("#header"),nav=$("#nav"),menu=$("#menu");
setTimeout(()=>{loader.style.opacity="0";loader.style.visibility="hidden"},1400);
$("#year").textContent=new Date().getFullYear();
addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>15),{passive:true});
menu.addEventListener("click",()=>{nav.classList.toggle("open");menu.classList.toggle("open")});
$$("nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.classList.remove("open")}));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");obs.unobserve(e.target)}}),{threshold:.1});
$$(".reveal").forEach(e=>obs.observe(e));
const sections=$$("section[id]"),links=$$("nav a");
function active(){let id="home",p=scrollY+180;sections.forEach(s=>{if(p>=s.offsetTop)id=s.id});links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+id))}
addEventListener("scroll",active,{passive:true});active();
if(matchMedia("(pointer:fine)").matches){
const cur=$(".cursor"),dot=$(".cursor-dot");let x=0,y=0,cx=0,cy=0;
addEventListener("mousemove",e=>{x=e.clientX;y=e.clientY;dot.style.left=x+"px";dot.style.top=y+"px"});
(function loop(){cx+=(x-cx)*.16;cy+=(y-cy)*.16;cur.style.left=cx+"px";cur.style.top=cy+"px";requestAnimationFrame(loop)})();
$$("a,button,.skill,.platform,.tilt").forEach(e=>{e.addEventListener("mouseenter",()=>document.body.classList.add("hovering"));e.addEventListener("mouseleave",()=>document.body.classList.remove("hovering"))});
const tilt=$(".tilt");
addEventListener("mousemove",e=>{const r=tilt.getBoundingClientRect();if(e.clientX<r.left-100||e.clientX>r.right+100||e.clientY<r.top-100||e.clientY>r.bottom+100)return;const rx=((e.clientY-r.top)/r.height-.5)*-5,ry=((e.clientX-r.left)/r.width-.5)*6;tilt.style.transform=`rotate(-5deg) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`});
tilt.addEventListener("mouseleave",()=>tilt.style.transform="rotate(-5deg)");
$$(".magnetic").forEach(el=>{el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect(),mx=e.clientX-r.left-r.width/2,my=e.clientY-r.top-r.height/2;el.style.transform=`translate(${mx*.12}px,${my*.12}px)`});el.addEventListener("mouseleave",()=>el.style.transform="")});
}
});
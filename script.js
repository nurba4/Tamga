// Анимация появления секций
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

// Частицы на фоне
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    dx: Math.random()*1-0.5,
    dy: Math.random()*1-0.5
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(255,255,255,0.4)';
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(draw);
}
draw();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

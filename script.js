const shapes={
  sedan:'M12 88V74Q14 66 34 62L82 54Q102 30 140 26H190Q222 30 244 54L282 62Q294 66 294 76V88Z',
  coupe:'M12 88V76Q14 68 36 64L90 56Q112 38 150 34H186Q214 38 238 58L284 64Q296 68 296 78V88Z',
  suv:'M12 88V50Q14 42 32 40L62 36Q74 14 100 12H214Q238 14 250 36L282 42Q296 46 296 58V88Z',
  electric:'M12 88V76Q16 66 40 62Q92 24 150 22Q214 22 250 56L284 64Q296 68 296 78V88Z'
};
const models=[
 ['S-Class','sedan','Flagship','The brand’s luxury benchmark for comfort and technology.'],
 ['C-Class','sedan','Compact executive','A smaller sedan for everyday driving.'],
 ['CLE','coupe','Coupe','Two doors and a sloping roofline.'],
 ['AMG GT','coupe','Performance','A low sports car built by the AMG performance arm.'],
 ['G-Class','suv','Off-road icon','Boxy, rugged and in production in some form since 1979.'],
 ['GLC','suv','Family SUV','A mid-size SUV with plenty of space.'],
 ['EQS','electric','Electric flagship','The electric counterpart to the S-Class.'],
 ['EQE','electric','Electric executive','A smooth electric car sized between the EQS and the C-Class.']
];
function art(t){
 return `<svg viewBox="0 0 306 120" aria-hidden="true"><ellipse cx="153" cy="104" rx="130" ry="6" fill="#000" opacity=".12"/><path d="${shapes[t]}" fill="var(--car)"/><path d="M104 54H190L176 34H128Z" fill="var(--surface)" opacity=".35"/><g fill="var(--surface)" stroke="var(--car)" stroke-width="6"><circle cx="70" cy="88" r="15"/><circle cx="236" cy="88" r="15"/></g></svg>`;
}
const grid=document.getElementById('grid');
function show(f){
 grid.innerHTML=models.filter(m=>f==='all'||m[1]===f).map(m=>`<article class="card">${art(m[1])}<div><small>${m[2]}</small><h3>${m[0]}</h3><p>${m[3]}</p></div></article>`).join('');
}
show('all');
document.getElementById('tabs').addEventListener('click',e=>{
 const b=e.target.closest('button'); if(!b) return;
 document.querySelectorAll('#tabs button').forEach(x=>x.setAttribute('aria-pressed',x===b));
 show(b.dataset.f);
});
let deg=0;
const star=document.getElementById('star'),spin=document.getElementById('spin');
star.addEventListener('click',()=>{deg+=120;star.classList.add('turn');spin.style.transform='rotate('+deg+'deg)';});

// mobile nav
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.nav-mobile');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// ticker duplication for seamless loop
const tk = document.getElementById('tk');
if (tk) tk.innerHTML += tk.innerHTML;

// floating fruit background
const fr = document.getElementById('fruits');
if (fr) {
  const em = ['🍊','🍍','🥭','🍓','🍉','🥑','🌶️','🍋'];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement('span');
    s.className = 'fruit';
    s.textContent = em[i % em.length];
    s.style.left = Math.random() * 94 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.fontSize = (1.2 + Math.random() * 1.8) + 'rem';
    s.style.opacity = .12 + Math.random() * .25;
    s.style.animationDelay = (Math.random() * 4) + 's';
    s.style.animationDuration = (4 + Math.random() * 4) + 's';
    fr.appendChild(s);
  }
}

// scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

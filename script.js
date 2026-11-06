document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); }), {threshold: .14});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.addEventListener('pointermove', (e) => document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px'));

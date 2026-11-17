document.documentElement.classList.add('js');

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
const yearsCount = document.getElementById('years-count');
if (yearsCount) yearsCount.textContent = new Date().getFullYear() - 2019;

// Sticky nav border on scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('mobile-menu');
const setMenu = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', HW.t(open ? 'menu.close' : 'menu.open'));
  menu.hidden = !open;
};
toggle.addEventListener('click', () => setMenu(menu.hidden));
document.addEventListener('langchange', () => {
  setMenu(!menu.hidden); // refresh translated aria-label
  setStatus('');
});
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Reveal on scroll (staggered within each parent)
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
      el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 5) * 80}ms`);
      el.classList.add('is-in');
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-in'));
}

// Contact form (Web3Forms)
const form = document.getElementById('contact-form');
const status = form.querySelector('.form__status');
const button = form.querySelector('button[type="submit"]');
const label = button.querySelector('.btn__label');

const setStatus = (msg, kind = '') => {
  status.textContent = msg;
  status.className = 'form__status' + (kind ? ` is-${kind}` : '');
};

const validate = () => {
  let ok = true;
  form.querySelectorAll('[required]').forEach((input) => {
    const wrapper = input.closest('.field, .consent');
    const valid = input.type === 'checkbox' ? input.checked : input.checkValidity() && input.value.trim() !== '';
    wrapper.classList.toggle('is-invalid', !valid);
    if (!valid) ok = false;
  });
  return ok;
};

form.addEventListener('input', (e) => {
  const wrapper = e.target.closest('.is-invalid');
  if (wrapper) wrapper.classList.remove('is-invalid');
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validate()) {
    setStatus(HW.t('form.err.fields'), 'err');
    form.querySelector('.is-invalid input, .is-invalid textarea')?.focus();
    return;
  }

  const key = form.querySelector('[name="access_key"]').value;
  if (!key || key.startsWith('YOUR_')) {
    setStatus(HW.t('form.err.setup'), 'err');
    return;
  }

  button.disabled = true;
  label.textContent = HW.t('form.sending');
  setStatus('');

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');
    form.reset();
    setStatus(HW.t('form.ok'), 'ok');
  } catch {
    setStatus(HW.t('form.err.send'), 'err');
  } finally {
    button.disabled = false;
    label.textContent = HW.t('form.send');
  }
});

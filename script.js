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

// "Back to top" and logo links: always scroll to the very top
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    history.replaceState(null, '', location.pathname + location.search);
  });
});

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

// The trail blaze: marks the section you are in (nav) and the phase you are reading (route)
if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('.nav__links a[href^="#"]')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => {
        if (a.getAttribute('href') === `#${entry.target.id}`) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
      sections.forEach((s) => s.classList.toggle('is-here', s === entry.target));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));
  // Clear the marker when back at the signpost
  const hero = document.querySelector('.hero');
  if (hero) new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    navLinks.forEach((a) => a.removeAttribute('aria-current'));
    sections.forEach((s) => s.classList.remove('is-here'));
  }, { rootMargin: '-45% 0px -50% 0px' }).observe(hero);

  const stops = [...document.querySelectorAll('.stop')];
  const route = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const idx = stops.indexOf(entry.target);
      stops.forEach((s, i) => {
        s.classList.toggle('is-current', i === idx);
        s.classList.toggle('is-passed', i < idx);
      });
    });
  }, { rootMargin: '-35% 0px -45% 0px' });
  stops.forEach((s) => route.observe(s));
} else {
  document.documentElement.classList.add('no-io');
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

// Anti-robot measures: a simple arithmetic question, a hidden honeypot field
// (botcheck) and a minimum time between page load and submission.
const checkInput = document.getElementById('f-check');
const checkQ = document.getElementById('check-q');
const loadedAt = Date.now();
let check = { a: 0, b: 0 };
const newCheck = () => {
  check = { a: 2 + Math.floor(Math.random() * 8), b: 1 + Math.floor(Math.random() * 9) };
  renderCheck();
};
const renderCheck = () => {
  checkQ.textContent = HW.t('form.check.q').replace('{a}', check.a).replace('{b}', check.b);
};
newCheck();
document.addEventListener('langchange', renderCheck);

const validate = () => {
  let ok = true;
  form.querySelectorAll('[required]').forEach((input) => {
    const wrapper = input.closest('.field, .consent');
    const valid = input === checkInput
      ? Number(input.value.trim()) === check.a + check.b && input.value.trim() !== ''
      : input.type === 'checkbox' ? input.checked : input.checkValidity() && input.value.trim() !== '';
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
  // Silently stop obvious bots: honeypot filled, or submitted within 3 seconds of loading
  if (form.querySelector('[name="botcheck"]').checked || Date.now() - loadedAt < 3000) {
    setStatus(HW.t('form.err.send'), 'err');
    return;
  }
  if (!validate()) {
    const onlyCheck = form.querySelectorAll('.is-invalid').length === 1 && checkInput.closest('.is-invalid');
    if (onlyCheck) {
      setStatus(HW.t('form.err.check'), 'err');
      checkInput.value = '';
      newCheck();
      checkInput.focus();
      return;
    }
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
    newCheck();
    setStatus(HW.t('form.ok'), 'ok');
  } catch {
    setStatus(HW.t('form.err.send'), 'err');
  } finally {
    button.disabled = false;
    label.textContent = HW.t('form.send');
  }
});

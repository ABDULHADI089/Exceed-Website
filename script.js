const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const setNav = open => {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
};
if (toggle && nav) {
  toggle.addEventListener('click', () => setNav(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) { setNav(false); toggle.focus(); }
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

// Open / closed status in Cyprus time. Opens 13:00 weekdays, 12:00 weekends; closes 01:00 the next morning.
const updateOpenStatus = () => {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Nicosia', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
    .formatToParts(new Date()).map(p => [p.type, p.value]));
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
  const minutes = Number(parts.hour) * 60 + Number(parts.minute);
  const opens = day === 0 || day === 6 ? 12 * 60 : 13 * 60;
  const afterMidnight = minutes < 60;
  const open = afterMidnight || minutes >= opens;
  const closingSoon = afterMidnight || minutes >= 23 * 60;
  const text = !open ? `Closed now · opens today at ${opens / 60}:00`
    : closingSoon ? 'Open now · closing soon at 01:00' : 'Open now · until 01:00';
  document.querySelectorAll('[data-open-status]').forEach(el => {
    el.textContent = text;
    el.classList.toggle('is-open', open);
    el.classList.toggle('is-closed', !open);
  });
  document.querySelectorAll('[data-today-hours]').forEach(el => {
    el.textContent = open ? 'Open now till 01:00' : `Opens at ${opens / 60}:00`;
  });
  const today = afterMidnight ? (day + 6) % 7 : day;
  document.querySelectorAll('.hours-row').forEach(row => row.classList.toggle('is-today', row.dataset.days.split(',').map(Number).includes(today)));
};
updateOpenStatus();
setInterval(updateOpenStatus, 60000);

// Full menu: category filters and search within the chosen category, rendered from menu-data.js
const menuData = window.EXCEED_MENU || [];
const filters = document.getElementById('menu-filters');
const results = document.getElementById('menu-results');
const search = document.getElementById('menu-search');
const searchClear = document.getElementById('menu-search-clear');
const status = document.getElementById('menu-status');
const escapeHtml = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const formatPrice = p => `€${p.toFixed(2)}`;
const menuOrder = ['food', 'cocktails', 'coffee', 'beer', 'spirits', 'wine', 'soft', 'pool'];
const searchHints = { food: 'pizza', cocktails: 'mojito', coffee: 'freddo', beer: 'keo', spirits: 'gin', wine: 'red', soft: 'mango', pool: 'hour' };
const totalItems = menuData.reduce((n, g) => n + g.sections.reduce((m, s) => m + s.items.length, 0), 0);
let activeGroup = 'food';

const groupTitle = id => id === 'all' ? 'all categories' : menuData.find(g => g.id === id).title;
const matchingSections = (group, query) => group.sections
  .map(section => ({ ...section, items: query ? section.items.filter(item => `${item.name} ${item.ingredients || ''}`.toLowerCase().includes(query)) : section.items }))
  .filter(section => section.items.length);
const countMatches = (groups, query) => groups.reduce((n, g) => n + matchingSections(g, query).reduce((m, s) => m + s.items.length, 0), 0);

const highlight = (text, query) => {
  const safe = escapeHtml(text);
  return query ? safe.replace(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'), '<mark>$1</mark>') : safe;
};
const renderItems = (items, query) => items.map(item => {
  const prices = item.sizes
    ? item.sizes.map(([size, price]) => `<b><small>${escapeHtml(size)}</small>${formatPrice(price)}</b>`).join('')
    : `<b>${formatPrice(item.price)}</b>`;
  return `<div class="menu-item${item.photo ? ' has-photo' : ''}${item.sizes ? ' has-sizes' : ''}">`
    + (item.photo ? `<img class="menu-photo-thumb" src="${item.photo}" alt="" loading="lazy" width="96" height="96">` : '')
    + `<div class="menu-item-text"><span>${highlight(item.name, query)}</span>${item.ingredients ? `<p class="menu-ingredients">${highlight(item.ingredients, query)}</p>` : ''}</div>`
    + `<div class="menu-prices">${prices}</div></div>`;
}).join('');

const renderMenu = () => {
  if (!results) return;
  const raw = search.value.trim();
  const query = raw.toLowerCase();
  const scoped = activeGroup === 'all' ? menuData : menuData.filter(g => g.id === activeGroup);
  let html = '', count = 0, i = 0;
  scoped.forEach(group => {
    const sections = matchingSections(group, query);
    if (!sections.length) return;
    if (activeGroup === 'all') html += `<h3 class="menu-group-title">${escapeHtml(group.title)}</h3>`;
    html += '<div class="menu-grid">' + sections.map(section => {
      count += section.items.length;
      return `<div class="menu-column" style="--i:${i++}"><h3>${escapeHtml(section.title)}</h3>${section.note ? `<p class="menu-note">${escapeHtml(section.note)}</p>` : ''}${renderItems(section.items, query)}</div>`;
    }).join('') + '</div>';
  });
  const title = escapeHtml(groupTitle(activeGroup));
  const term = escapeHtml(raw);
  const elsewhere = query && activeGroup !== 'all' ? countMatches(menuData, query) - count : 0;
  const showAll = elsewhere ? ` <button type="button" class="link-button" data-search-all>${count ? `+${elsewhere} in other categories` : `Show ${elsewhere} in all categories`}</button>` : '';
  status.innerHTML = !query ? `${count} items in ${title}`
    : count ? `${count} ${count === 1 ? 'result' : 'results'} for “${term}” in ${title}.${showAll}`
    : `No matches for “${term}” in ${title}.${showAll}`;
  results.innerHTML = html || `<p class="menu-empty">${elsewhere ? 'Try all categories,' : 'Try another word,'} or <a href="tel:+35722333313">call us</a> and we'll help.</p>`;
  searchClear.hidden = !raw;
  search.placeholder = activeGroup === 'all' ? `Search all ${totalItems} items — try “mojito”` : `Search ${groupTitle(activeGroup)} — try “${searchHints[activeGroup]}”`;
  filters.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.group === activeGroup)));
};

const selectGroup = (id, { scroll = false } = {}) => {
  activeGroup = id;
  renderMenu();
  const chip = filters.querySelector(`[data-group="${id}"]`);
  if (chip) filters.scrollTo({ left: chip.offsetLeft - (filters.clientWidth - chip.offsetWidth) / 2, behavior: reduceMotion ? 'auto' : 'smooth' });
  const board = filters.parentElement;
  if (scroll || board.getBoundingClientRect().top < 0) board.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
};

if (filters && menuData.length) {
  const groups = menuOrder.map(id => menuData.find(g => g.id === id)).filter(Boolean);
  filters.innerHTML = groups.map(g => `<button type="button" data-group="${g.id}">${escapeHtml(g.title)}</button>`).join('')
    + `<button type="button" data-group="all">Everything <small>${totalItems}</small></button>`;
  filters.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (button) selectGroup(button.dataset.group);
  });
  search.addEventListener('input', renderMenu);
  searchClear.addEventListener('click', () => { search.value = ''; renderMenu(); search.focus(); });
  status.addEventListener('click', event => { if (event.target.closest('[data-search-all]')) selectGroup('all'); });
  document.querySelectorAll('[data-menu-link]').forEach(link => link.addEventListener('click', () => {
    search.value = '';
    selectGroup(link.dataset.menuLink);
  }));

  renderMenu();
}

// Gallery lightbox with previous / next, arrow keys and focus kept inside while open
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxCount = lightbox.querySelector('.lightbox-count');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxButtons = [...lightbox.querySelectorAll('button')];
const galleryItems = [...document.querySelectorAll('.gallery-item')];
let current = 0;
const showPhoto = index => {
  current = (index + galleryItems.length) % galleryItems.length;
  const img = galleryItems[current].querySelector('img');
  lightboxImg.src = galleryItems[current].dataset.image;
  lightboxImg.alt = img.alt;
  lightboxCount.textContent = `${current + 1} / ${galleryItems.length} · ${img.alt}`;
};
const closeLightbox = () => {
  if (!lightbox.classList.contains('open')) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
  document.body.style.overflow = '';
  galleryItems[current].focus();
};
galleryItems.forEach((item, index) => item.addEventListener('click', () => {
  showPhoto(index);
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}));
lightboxClose.addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(current - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(current + 1));
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => {
  if (!lightbox.classList.contains('open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') showPhoto(current - 1);
  if (event.key === 'ArrowRight') showPhoto(current + 1);
  if (event.key === 'Tab') {
    event.preventDefault();
    const i = lightboxButtons.indexOf(document.activeElement);
    lightboxButtons[(i + (event.shiftKey ? -1 : 1) + lightboxButtons.length) % lightboxButtons.length].focus();
  }
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));

  // Scroll reveals: elements fade up gently as they enter the viewport
  const revealer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      revealer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -12% 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
}

// Gentle tilt with a light glare that follows the pointer
if (finePointer && !reduceMotion) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', event => {
      const r = card.getBoundingClientRect();
      const x = (event.clientX - r.left) / r.width, y = (event.clientY - r.top) / r.height;
      card.classList.add('is-tilting');
      card.style.setProperty('--ry', `${(x - 0.5) * 6}deg`);
      card.style.setProperty('--rx', `${(0.5 - y) * 5}deg`);
      card.style.setProperty('--gx', `${x * 100}%`);
      card.style.setProperty('--gy', `${y * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

// Scroll-linked parallax backgrounds and the header progress bar
const header = document.querySelector('.site-header');
const parallaxEls = [...document.querySelectorAll('[data-parallax]')];
let ticking = false;
const onScroll = () => {
  const vh = window.innerHeight;
  const max = document.documentElement.scrollHeight - vh;
  header.style.setProperty('--progress', max > 0 ? (window.scrollY / max).toFixed(4) : 0);
  if (!reduceMotion) {
    parallaxEls.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const shift = (r.top + r.height / 2 - vh / 2) * -Number(el.dataset.parallax);
      el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.15)`;
    });
  }
  ticking = false;
};
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
window.addEventListener('resize', onScroll);
onScroll();

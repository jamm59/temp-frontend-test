/* ==========================================================================
   LibraryMS — Shared UI helpers
   ========================================================================== */

const ICON = {
  menu: '<svg class="icon" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close: '<svg class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  book: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  openBook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5c1.5-1 4-1.5 6-1.5s4.5.5 6 1.5v14c-1.5-1-4-1.5-6-1.5s-4.5.5-6 1.5V5z"/><path d="M22 5c-1.5-1-4-1.5-6-1.5S11.5 4 10 5"/></svg>',
  grid: '<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  list: '<svg class="icon" viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',
  books: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 5v14"/><path d="M9 4v16"/><path d="M14 5l3-1 3 17-3 1z"/></svg>',
  borrowing: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z"/><path d="M9 8h6M9 11h6"/></svg>',
  bookmark: '<svg class="icon" viewBox="0 0 24 24"><path d="M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17l-6-4-6 4z"/></svg>',
  people: '<svg class="icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  pie: '<svg class="icon" viewBox="0 0 24 24"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',
  gear: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  signout: '<svg class="icon" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  warning: '<svg class="icon" viewBox="0 0 24 24"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  arrowRight: '<svg class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  search: '<svg class="icon" viewBox="0 0 24 24" style="width:16px;height:16px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  filter: '<svg class="icon" viewBox="0 0 24 24" style="width:15px;height:15px;"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  eye: '<svg class="icon" viewBox="0 0 24 24" style="width:16px;height:16px;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
};

const NAV_ITEMS = [
  { href: 'dashboard.html', label: 'Dashboard', icon: ICON.grid },
  { href: 'books.html', label: 'Book Management', icon: ICON.books },
  { href: 'borrow.html', label: 'Borrowing', icon: ICON.borrowing },
  { href: 'reports.html', label: 'Reports', icon: ICON.pie },
  { href: 'members.html', label: 'Members', icon: ICON.people },
];

function renderChrome(activeHref, pageTitle) {
  const user = (typeof Auth !== 'undefined' && Auth.getUser()) || null;

  document.body.insertAdjacentHTML('afterbegin', `
    <header class="topbar">
      <button class="hamburger-btn" id="hamburger-btn" aria-label="Open menu">${ICON.menu}</button>
      <div class="topbar-brand">
        <span class="topbar-mark">${ICON.openBook}</span>
        <span class="topbar-title">${pageTitle || 'LibraryMS'}</span>
      </div>
      <div class="topbar-spacer"></div>
      <div class="topbar-user">${user ? escapeHtml(user.name) : ''}</div>
    </header>

    <div class="drawer-overlay" id="drawer-overlay"></div>
    <nav class="drawer" id="drawer">
      <div class="drawer-head">
        <div class="drawer-brand">
          <span class="topbar-mark">${ICON.openBook}</span>
          <div class="drawer-brand-text">
            <strong>LibraryMS</strong>
            <span>${user ? user.role : ''}</span>
          </div>
        </div>
        <button class="drawer-close" id="drawer-close" aria-label="Close menu">${ICON.close}</button>
      </div>
      <div class="drawer-nav">
        ${NAV_ITEMS.map(item => `
          <a class="drawer-link ${item.href === activeHref ? 'active' : ''}" href="${item.href}">
            ${item.icon} ${item.label}
          </a>`).join('')}
      </div>
      <div class="drawer-foot">
        <div class="drawer-user-name">${user ? escapeHtml(user.name) : 'Guest'}</div>
        <div class="drawer-user-email">${user ? escapeHtml(user.email) : ''}</div>
        <div class="drawer-foot-link">${ICON.gear} Settings</div>
        <div class="drawer-foot-link danger" id="logout-link">${ICON.signout} Sign Out</div>
      </div>
    </nav>
  `);

  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawer-overlay');
  const open = () => { drawer.classList.add('open'); overlay.classList.add('open'); };
  const close = () => { drawer.classList.remove('open'); overlay.classList.remove('open'); };

  document.getElementById('hamburger-btn').addEventListener('click', open);
  document.getElementById('drawer-close').addEventListener('click', close);
  overlay.addEventListener('click', close);

  document.getElementById('logout-link').addEventListener('click', () => {
    Auth.clear();
    window.location.href = 'index.html';
  });
}

function showToast(message) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove('show'), 2800);
}

function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }

function fmtDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}

function initials(name) {
  return String(name).trim().split(/\s+/).map(p => p[0]).slice(0, 2).join('').toUpperCase();
}

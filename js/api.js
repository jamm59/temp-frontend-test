/* ==========================================================================
   LMUI Library — API client
   All data now lives in a real SQLite database behind the Express backend.
   This file is the only place that knows about fetch(); every page just
   calls these functions and works with plain JS objects/promises.
   ========================================================================== */

const API_BASE = 'https://temp-server-project.onrender.com'; // same-origin: the backend serves the frontend too

const Auth = {
  TOKEN_KEY: 'lmui_token',
  USER_KEY: 'lmui_user',

  getToken() { return localStorage.getItem(this.TOKEN_KEY); },
  getUser() {
    try { return JSON.parse(localStorage.getItem(this.USER_KEY)); }
    catch (e) { return null; }
  },
  setSession(token, user) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  },
  clear() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  },
  requireLogin() {
    const token = this.getToken();
    if (!token) { window.location.href = 'index.html'; return null; }
    return this.getUser();
  },
};

async function apiRequest(method, path, body) {
  const headers = { 'Content-Type': 'application/json' };
  const token = Auth.getToken();
  if (token) headers['Authorization'] = 'Bearer ' + token;

  const res = await fetch(API_BASE + path, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) {
    Auth.clear();
    window.location.href = 'index.html';
    throw new Error('Session expired');
  }

  if (res.status === 204) return null;

  let data = null;
  try { data = await res.json(); } catch (e) { /* no body */ }

  if (!res.ok) {
    throw new Error((data && data.error) || 'Something went wrong. Please try again.');
  }
  return data;
}

const API = {
  login: (email, password) => apiRequest('POST', '/api/auth/login', { email, password }),

  getBooks: (q) => apiRequest('GET', '/api/books' + (q ? `?q=${encodeURIComponent(q)}` : '')),
  addBook: (book) => apiRequest('POST', '/api/books', book),
  updateBook: (id, patch) => apiRequest('PUT', `/api/books/${id}`, patch),
  deleteBook: (id) => apiRequest('DELETE', `/api/books/${id}`),

  getMembers: (q) => apiRequest('GET', '/api/members' + (q ? `?q=${encodeURIComponent(q)}` : '')),
  addMember: (member) => apiRequest('POST', '/api/members', member),
  updateMember: (id, patch) => apiRequest('PUT', `/api/members/${id}`, patch),
  deleteMember: (id) => apiRequest('DELETE', `/api/members/${id}`),

  getBorrows: (status) => apiRequest('GET', '/api/borrows' + (status ? `?status=${status}` : '')),
  issueBook: (bookId, memberId, days) => apiRequest('POST', '/api/borrows/issue', { bookId, memberId, days }),
  returnBook: (id) => apiRequest('POST', `/api/borrows/${id}/return`),

  getSummary: () => apiRequest('GET', '/api/reports/summary'),
  getCategories: () => apiRequest('GET', '/api/reports/categories'),
  getOverdue: () => apiRequest('GET', '/api/reports/overdue'),
  getPopular: () => apiRequest('GET', '/api/reports/popular'),
};

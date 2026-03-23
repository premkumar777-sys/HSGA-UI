// ===== ACCESSIBILITY: FONT SIZE TOGGLE =====
let currentFontSize = 15;
function changeFontSize(action) {
    if (action === 'plain') currentFontSize = 15;
    else if (action === 'plus') currentFontSize += 1;
    else if (action === 'minus') currentFontSize -= 1;

    // Constrain
    if (currentFontSize > 22) currentFontSize = 22;
    if (currentFontSize < 12) currentFontSize = 12;

    document.documentElement.style.fontSize = currentFontSize + 'px';
}

// Hook up accessibility buttons
document.querySelectorAll('.topbar-right span').forEach(span => {
    if (span.textContent.includes('A')) {
        const parts = span.textContent.trim().split(/\s+/);
        span.innerHTML = '';
        parts.forEach(p => {
            const a = document.createElement('a');
            a.href = '#';
            a.style.color = 'inherit';
            a.style.textDecoration = 'none';
            a.style.margin = '0 5px';
            a.textContent = p;
            if (p === 'A+') a.onclick = (e) => { e.preventDefault(); changeFontSize('plus'); };
            else if (p === 'A-') a.onclick = (e) => { e.preventDefault(); changeFontSize('minus'); };
            else if (p === 'A') a.onclick = (e) => { e.preventDefault(); changeFontSize('plain'); };
            span.appendChild(a);
        });
    }
});

// ===== DATE =====
const d = new Date();
const liveDateEl = document.getElementById('live-date');
if (liveDateEl) {
    liveDateEl.textContent = d.toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
}

// ===== PAGE ROUTING =====
function showPage(id, navEl) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-wrap a').forEach(a => a.classList.remove('active'));

    const target = document.getElementById('page-' + id);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }

    if (navEl) {
        navEl.classList.add('active');
    } else {
        document.querySelectorAll('.nav-wrap a').forEach(a => {
            if (a.getAttribute('onclick') && a.getAttribute('onclick').includes("'" + id + "'")) {
                a.classList.add('active');
            }
        });
    }
    return false;
}

// ===== NAV INTERCEPT =====
document.querySelectorAll('.nav-wrap a').forEach(a => {
    a.addEventListener('click', function (e) {
        // e.preventDefault(); // Handled by inline onclick usually, but safe to have
    });
});

// ===== COUNTER ANIMATION =====
function animCount(el, target, suffix) {
    let v = 0;
    const step = target / 60;
    const t = setInterval(() => {
        v += step;
        if (v >= target) {
            v = target;
            clearInterval(t);
        }
        el.textContent = Math.floor(v) + (suffix || '');
    }, 16);
}

const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            document.querySelectorAll('.stat-box .n').forEach(el => {
                const tgt = parseInt(el.dataset.target);
                const sfx = el.dataset.suffix || '';
                animCount(el, tgt, sfx);
            });
            obs.disconnect();
        }
    });
}, { threshold: 0.3 });

const hero = document.querySelector('.hero');
if (hero) obs.observe(hero);

// ===== PROGRAM TABS =====
function switchTab(id) {
    document.querySelectorAll('.prog-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.prog-panel').forEach(p => p.classList.remove('active'));

    const panel = document.getElementById('panel-' + id);
    if (panel) panel.classList.add('active');

    // If called from event
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// ===== MOCK API ENDPOINTS (FOR BACKEND HANDOFF) =====
/**
 * These functions simulate API calls.
 * Backend developers can replace the 'fetch' calls with real endpoints.
 */

const API_BASE_URL = '/api'; // Change to your actual backend URL

const MockAPI = {
    // Authentication
    async login(credentials) {
        console.log('Mock API: Login attempt', credentials);
        return { success: true, token: 'mock-jwt-token', user: { name: 'Admin', role: 'state_secretary' } };
    },

    // School Management
    async registerSchool(formData) {
        console.log('Mock API: Registering school', formData);
        return { success: true, application_id: 'HSGA-2026-' + Math.floor(Math.random() * 10000) };
    },

    async getSchoolStatus(id) {
        console.log('Mock API: Fetching status for', id);
        return { success: true, status: 'In Review', last_updated: new Date().toISOString() };
    },

    // Member Management
    async enrollMember(memberData) {
        console.log('Mock API: Enrolling member', memberData);
        return { success: true, member_id: 'MEM-' + Date.now() };
    },

    // Content & Resources
    async getLatestNotifications() {
        console.log('Mock API: Fetching notifications');
        return [
            { id: 1, title: 'Annual State Jamboree 2026', date: '2026-04-15' },
            { id: 2, title: 'President Award Nominations', date: '2026-03-31' }
        ];
    },

    async submitContactForm(data) {
        console.log('Mock API: Contact form submission', data);
        return { success: true, message: 'Your enquiry has been received.' };
    }
};

// Example usage in Contact Form
const contactBtn = document.querySelector('#page-contact button');
if (contactBtn) {
    contactBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const form = contactBtn.closest('.contact-form');
        const formData = {
            name: form.querySelector('input[placeholder="Your full name"]').value,
            email: form.querySelector('input[placeholder="your@email.com"]').value,
            message: form.querySelector('textarea').value
        };

        contactBtn.textContent = 'Sending...';
        const response = await MockAPI.submitContactForm(formData);
        if (response.success) {
            alert('Success! ' + response.message);
            contactBtn.textContent = 'Submit Enquiry →';
            form.querySelectorAll('input, textarea').forEach(i => i.value = '');
        }
    });
}

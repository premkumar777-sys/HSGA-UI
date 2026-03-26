console.log('HSGA Script Loaded v1.1');

// ===== HERO CAROUSEL =====
let currentHeroSlide = 0;
function setHeroSlide(idx) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;

    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[idx].classList.add('active');
    dots[idx].classList.add('active');
    currentHeroSlide = idx;
}

function nextHeroSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;
    let next = (currentHeroSlide + 1) % slides.length;
    setHeroSlide(next);
}

// carousel cycle disabled for patriotic animation
// setInterval(nextHeroSlide, 5000);

// ===== PAGE ROUTING =====
function showPage(id, navEl) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-wrap a, .drop-trigger').forEach(a => a.classList.remove('active'));

    const target = document.getElementById('page-' + id);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }

    if (navEl) {
        navEl.classList.add('active');
    } else {
        // Find links that call this page ID and mark them/parents as active
        document.querySelectorAll('.nav-wrap a').forEach(a => {
            if (a.getAttribute('onclick') && a.getAttribute('onclick').includes("'" + id + "'")) {
                a.classList.add('active');
                // If it's inside a dropdown, mark the trigger as active too
                const parentDropdown = a.closest('.dropdown');
                if (parentDropdown) {
                    parentDropdown.querySelector('.drop-trigger').classList.add('active');
                }
            }
        });
    }
    return false;
}

// ===== NAV INTERCEPT & INDICATOR =====
document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.querySelector('.nav-indicator');
    const navWrap = document.querySelector('.nav-wrap');
    const items = document.querySelectorAll('.nav-wrap > a, .nav-wrap > .dropdown');

    if (!indicator || !navWrap) return;

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            indicator.style.width = item.offsetWidth + 'px';
            indicator.style.left = item.offsetLeft + 'px';
            indicator.style.opacity = '1';
        });
    });

    navWrap.addEventListener('mouseleave', () => {
        indicator.style.opacity = '0';
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
// ===== BUTTON RIPPLE EFFECT =====
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    // Remove existing ripples to avoid stacking on multiple clicks
    const existingRipples = btn.querySelectorAll('.ripple');
    existingRipples.forEach(r => r.remove());

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = btn.getBoundingClientRect();
    const size = Math.max(btn.offsetWidth, btn.offsetHeight);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    btn.appendChild(ripple);
    console.log('Ripple attached to:', btn.textContent.trim());

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});

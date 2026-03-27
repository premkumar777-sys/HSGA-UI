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

// ===== CRICKET-STYLE DECELERATION COUNTER =====
function animCount(el, target, suffix) {
    const slowCount = 5; // last 5 numbers go slow
    const fastTarget = Math.max(target - slowCount, 0);
    const fastDuration = 800; // ms for the fast phase
    const slowInterval = 250; // ms per tick in slow phase
    const startTime = performance.now();

    // Phase 1: race fast from 0 to (target - 5)
    function fastTick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / fastDuration, 1);
        // ease-out for smooth fast phase
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(eased * fastTarget);

        el.textContent = currentValue + (suffix || '');

        if (progress < 1) {
            requestAnimationFrame(fastTick);
        } else {
            el.textContent = fastTarget + (suffix || '');
            // Phase 2: tick last 5 slowly
            let i = 1;
            const slowTick = setInterval(() => {
                el.textContent = (fastTarget + i) + (suffix || '');
                if (fastTarget + i >= target) clearInterval(slowTick);
                i++;
            }, slowInterval);
        }
    }

    requestAnimationFrame(fastTick);
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
        return { success: true, token: 'mock-jwt-token', user: { name: 'Admin', role: 'state_secretary' } };
    },

    // School Management
    async registerSchool(formData) {
        return { success: true, application_id: 'HSGA-2026-' + Math.floor(Math.random() * 10000) };
    },

    async getSchoolStatus(id) {
        return { success: true, status: 'In Review', last_updated: new Date().toISOString() };
    },

    // Member Management
    async enrollMember(memberData) {
        return { success: true, member_id: 'MEM-' + Date.now() };
    },

    // Content & Resources
    async getLatestNotifications() {
        return [
            { id: 1, title: 'Annual State Jamboree 2026', date: '2026-04-15' },
            { id: 2, title: 'President Award Nominations', date: '2026-03-31' }
        ];
    },

    async submitContactForm(data) {
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

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});

// ===== GALLERY FILTER =====
function filterGallery(cat, btn) {
    // Update filter button states
    document.querySelectorAll('.gal-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter gallery items
    const items = document.querySelectorAll('#galleryGrid .gal-item');
    items.forEach(item => {
        if (cat === 'all' || item.dataset.cat === cat) {
            item.style.display = '';
            item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
            item.style.display = 'none';
        }
    });
}

// ===== LIGHTBOX =====
const lightboxImages = [
    { src: 'assets/gallery_training_camp.png', caption: 'State Training Camp 2025 — Scouts in formation, Hyderabad State Grounds' },
    { src: 'assets/gallery_social_service.png', caption: 'Haritha Haram Drive — 25,000 saplings planted in a single day across Telangana' },
    { src: 'assets/gallery_award_ceremony.png', caption: 'Rajya Puraskar Ceremony — State Award Presentation, Hyderabad' },
    { src: 'assets/gallery_camping.png', caption: 'Adventure Camp — Scouts setting up camp at Nallamala Hills Basecamp' },
    { src: 'assets/gallery_jamboree.png', caption: 'Annual State Jamboree 2025 — 5,000+ Scouts & Guides from all 33 Districts' },
    { src: 'assets/gallery_first_aid.png', caption: 'First Aid Training Camp — District Camp, Karimnagar' }
];
let currentLightboxIdx = 0;

function openLightbox(idx) {
    currentLightboxIdx = idx;
    const overlay = document.getElementById('lightboxOverlay');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    if (!overlay || idx >= lightboxImages.length) return;

    img.src = lightboxImages[idx].src;
    caption.textContent = lightboxImages[idx].caption;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const overlay = document.getElementById('lightboxOverlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

function lightboxNav(dir) {
    let next = currentLightboxIdx + dir;
    if (next < 0) next = lightboxImages.length - 1;
    if (next >= lightboxImages.length) next = 0;
    openLightbox(next);
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
});

// ===== SCROLL REVEAL ANIMATION =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
            entry.target.style.opacity = '1';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Apply reveal to key elements when pages become active
function initRevealAnimations() {
    const revealEls = document.querySelectorAll(
        '.st-card, .st-card-sm, .py-phase-card, .py-stage, .gal-item, .blog-card, .job-card, .gs-card, .py-spec-card'
    );
    revealEls.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.animationDelay = (i * 0.04) + 's';
        revealObserver.observe(el);
    });
}

// Re-init animations when pages change
const originalShowPage = window.showPage;
window.showPage = function(id, navEl) {
    const result = originalShowPage ? originalShowPage(id, navEl) : null;
    setTimeout(initRevealAnimations, 100);
    return result;
};

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initRevealAnimations, 300);
});

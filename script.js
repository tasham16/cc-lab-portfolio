// ===========================================
// SCROLL ANIMATIONS
// ===========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(el => observer.observe(el));
});

// ===========================================
// PROJECT CARD INTERACTIONS
// ===========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const color = card.getAttribute('data-color');
        card.style.setProperty('--hover-color', `var(--${color})`);
    });
    
    // Add parallax effect on mouse move
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;
        
        const thumbnail = card.querySelector('.project-thumbnail');
        if (thumbnail) {
            thumbnail.style.transform = `
                perspective(1000px)
                rotateY(${percentX * 5}deg)
                rotateX(${-percentY * 5}deg)
                scale(1.02)
            `;
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const thumbnail = card.querySelector('.project-thumbnail');
        if (thumbnail) {
            thumbnail.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
        }
    });
});

// ===========================================
// WORK ITEMS INTERACTIONS
// ===========================================

const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const color = item.getAttribute('data-color');
        item.style.setProperty('--hover-color', `var(--${color})`);
    });
});

// ===========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================================
// DYNAMIC PATTERN ANIMATION
// ===========================================

const patternBoxes = document.querySelectorAll('.pattern-box');

if (patternBoxes.length > 0) {
    let currentIndex = 0;
    
    setInterval(() => {
        patternBoxes[currentIndex].classList.toggle('filled');
        currentIndex = (currentIndex + 1) % patternBoxes.length;
    }, 200);
}

// ===========================================
// CURSOR EFFECT (Optional Enhancement)
// ===========================================

const cursor = {
    init() {
        this.createCursor();
        this.bindEvents();
    },
    
    createCursor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--red);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease;
            mix-blend-mode: difference;
            display: none;
        `;
        document.body.appendChild(this.cursor);
    },
    
    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.display = 'block';
            this.cursor.style.left = e.clientX - 10 + 'px';
            this.cursor.style.top = e.clientY - 10 + 'px';
        });
        
        document.addEventListener('mouseleave', () => {
            this.cursor.style.display = 'none';
        });
        
        // Scale cursor on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .work-item');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(2)';
                this.cursor.style.borderColor = 'var(--blue)';
            });
            
            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.borderColor = 'var(--red)';
            });
        });
    }
};

// Initialize cursor on desktop only
if (window.innerWidth > 968) {
    // cursor.init(); // Uncomment to enable custom cursor
}

// ===========================================
// LOADING ANIMATION
// ===========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Stagger animation for hero elements
    const heroElements = document.querySelectorAll('.hero [data-animate]');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 150);
    });
});

// ===========================================
// RANDOM COLOR ACCENT ON PAGE LOAD
// ===========================================

function setRandomAccent() {
    const colors = ['red', 'green', 'blue', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--accent-color', `var(--${randomColor})`);
}

// setRandomAccent(); // Uncomment to enable random accent colors

// ===========================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ===========================================

document.addEventListener('keydown', (e) => {
    // Press 'H' to go home
    if (e.key === 'h' || e.key === 'H') {
        if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
            window.location.href = 'index.html';
        }
    }
    
    // Press 'A' to go to about
    if (e.key === 'a' || e.key === 'A') {
        if (window.location.pathname !== '/about.html') {
            window.location.href = 'about.html';
        }
    }
    
    // Press 'W' to go to work
    if (e.key === 'w' || e.key === 'W') {
        if (window.location.pathname !== '/work.html') {
            window.location.href = 'work.html';
        }
    }
});

// ===========================================
// PERFORMANCE OPTIMIZATION
// ===========================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Lazy loading for images (if you add images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===========================================
// CONSOLE EASTER EGG
// ===========================================

console.log(`
%c
██╗   ██╗ █████╗ ██████╗  █████╗ 
╚██╗ ██╔╝██╔══██╗██╔══██╗██╔══██╗
 ╚████╔╝ ███████║██████╔╝███████║
  ╚██╔╝  ██╔══██║██╔══██╗██╔══██║
   ██║   ██║  ██║██║  ██║██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝

%cKila muundo una hadithi
%cEvery design carries a story

%cLooking at the code? I like you already! 
Let's build something together 🚀
`,
    'color: #F20815; font-weight: bold;',
    'color: #155FCC; font-size: 14px;',
    'color: #11A253; font-size: 14px;',
    'color: #000; font-size: 12px;'
);

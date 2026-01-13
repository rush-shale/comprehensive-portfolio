// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Info Modal Toggle
const infoBtn = document.getElementById('infoBtn');
const infoModal = document.getElementById('infoModal');
const closeBtn = document.getElementById('closeBtn');

// Favorite Modal Toggle
const favoriteModal = document.getElementById('favoriteModal');
const closeFavoriteBtn = document.getElementById('closeFavoriteBtn');
const favoriteBtns = document.querySelectorAll('.favorite-btn');

// Favorites data
const favoritesData = {
    game: {
        title: '🎮 My Favorite Game',
        emoji: '🎮',
        text: 'Click the button to add your favorite game details and upload a picture!'
    },
    sport: {
        title: '⚽ My Favorite Sport',
        emoji: '⚽',
        text: 'Click the button to add your favorite sport details and upload a picture!'
    },
    want: {
        title: '💡 What I Want',
        emoji: '💡',
        text: 'Click the button to add your goals and dreams with a picture!'
    }
};

// Open info modal when button is clicked
infoBtn.addEventListener('click', () => {
    infoModal.style.display = 'flex';
});

// Close info modal when close button is clicked
closeBtn.addEventListener('click', () => {
    infoModal.style.display = 'none';
});

// Close info modal when clicking outside the content
infoModal.addEventListener('click', (e) => {
    if (e.target === infoModal) {
        infoModal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && infoModal.style.display === 'flex') {
        infoModal.style.display = 'none';
    }
});

// Favorite buttons click handlers
favoriteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const favoriteType = btn.getAttribute('data-favorite');
        const data = favoritesData[favoriteType];
        
        document.getElementById('favoriteTitle').textContent = data.title;
        document.getElementById('favoriteImage').textContent = data.emoji;
        document.getElementById('favoriteText').textContent = data.text;
        
        favoriteModal.style.display = 'flex';
    });
});

// Close favorite modal when close button is clicked
closeFavoriteBtn.addEventListener('click', () => {
    favoriteModal.style.display = 'none';
});

// Close favorite modal when clicking outside the content
favoriteModal.addEventListener('click', (e) => {
    if (e.target === favoriteModal) {
        favoriteModal.style.display = 'none';
    }
});

// Close favorite modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && favoriteModal.style.display === 'flex') {
        favoriteModal.style.display = 'none';
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    }
});

// Form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        message: contactForm.querySelector('textarea').value
    };

    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Reset form
    contactForm.reset();
    
    // Show success message
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Message Sent! ✓';
    submitBtn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 3000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and skill tags
document.querySelectorAll('.project-card, .skill-category, .stat').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Smooth scroll enhancement
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

// Add scroll indicator
const scrollIndicator = document.createElement('div');
scrollIndicator.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #f97316);
    width: 0%;
    z-index: 999;
    transition: width 0.3s ease;
`;
document.body.appendChild(scrollIndicator);

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.width = scrollPercentage + '%';
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Prevent form submission if fields are empty
contactForm.addEventListener('submit', (e) => {
    const inputs = contactForm.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#f97316';
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (!isValid) {
        e.preventDefault();
    }
});

// Clear error styling on input
contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim()) {
            input.style.borderColor = '';
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            setTimeout(() => this.classList.remove('loading'), 3000);
        }
    });
});

console.log('Portfolio website loaded successfully!');

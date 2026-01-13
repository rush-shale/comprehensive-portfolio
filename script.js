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
const favoriteImage = document.getElementById('favoriteImage');
const imageUpload = document.getElementById('imageUpload');
const emailBtn = document.querySelector('.email-btn');
const emailText = document.getElementById('emailText');

// Store favorite images in browser storage
let favoriteImages = JSON.parse(localStorage.getItem('favoriteImages')) || {};

// Favorites data
const favoritesData = {
    game: {
        title: '🎮 My Favorite Game',
        emoji: '🎮',
        text: 'My favorite game',
        // Use the dota2 image from the existing image folder
        imageUrl: 'image/dota2.jpg'
    },
    sport: {
        title: '⚽ My Favorite Sport',
        emoji: '⚽',
        text: 'My favorite sport',
        // Use the runner image from the image folder
        imageUrl: 'image/runner.jpg'
    },
    want: {
        title: '💡 What I Want',
        emoji: '💡',
        text: 'My goals and dreams',
        // Use the moto image from the image folder
        imageUrl: 'image/moto.jpg'
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
        document.getElementById('favoriteText').textContent = data.text;
        
        const favoriteImage = document.getElementById('favoriteImage');
        favoriteImage.innerHTML = ''; // Clear previous content
        
        // Check if it has an image URL
        if (data.imageUrl) {
            const img = document.createElement('img');
            img.src = data.imageUrl;
            img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 10px;';
            img.onerror = function() {
                // If image fails to load, show emoji instead
                favoriteImage.textContent = data.emoji || '📸';
            };
            favoriteImage.appendChild(img);
        } else {
            favoriteImage.textContent = data.emoji || '📸';
        }
        
        // Add link button if available
        const favoriteBody = document.getElementById('favoriteBody');
        const existingLink = favoriteBody.querySelector('.favorite-link');
        if (existingLink) {
            existingLink.remove();
        }
        
        if (data.link) {
            const linkBtn = document.createElement('a');
            linkBtn.href = data.link;
            linkBtn.target = '_blank';
            linkBtn.className = 'favorite-link';
            linkBtn.style.cssText = `
                display: inline-block;
                margin-top: 1.5rem;
                padding: 0.8rem 1.5rem;
                background: linear-gradient(135deg, #00d4ff 0%, #f97316 100%);
                color: #0a0e27;
                text-decoration: none;
                border-radius: 25px;
                font-weight: 600;
                transition: all 0.3s ease;
            `;
            linkBtn.textContent = 'Learn More →';
            linkBtn.onmouseover = function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.4)';
            };
            linkBtn.onmouseout = function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            };
            favoriteBody.appendChild(linkBtn);
        }
        
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

// Show email text instead of navigating away
if (emailBtn && emailText) {
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        emailText.textContent = emailBtn.dataset.email || 'hinoyogjohnrushel@gmal.com';
        emailText.classList.add('show');
    });
}

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

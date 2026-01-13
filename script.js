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

// Welding GIF Modal Toggle
const weldingModal = document.getElementById('weldingModal');
const closeWeldingBtn = document.getElementById('closeWeldingBtn');
const weldingTag = document.querySelector('.welding-tag');

// Computer Literature GIF Modal Toggle
const computerLitModal = document.getElementById('computerLitModal');
const closeComputerLitBtn = document.getElementById('closeComputerLitBtn');
const computerLitTag = document.querySelector('.computer-lit-tag');

// Cooking GIF Modal Toggle
const cookingModal = document.getElementById('cookingModal');
const closeCookingBtn = document.getElementById('closeCookingBtn');
const cookingTag = document.querySelector('.cooking-tag');

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
    if (e.key === 'Escape' && weldingModal && weldingModal.style.display === 'flex') {
        weldingModal.style.display = 'none';
    }
    if (e.key === 'Escape' && computerLitModal && computerLitModal.style.display === 'flex') {
        computerLitModal.style.display = 'none';
    }
    if (e.key === 'Escape' && cookingModal && cookingModal.style.display === 'flex') {
        cookingModal.style.display = 'none';
    }
});

// Welding tag click handler
if (weldingTag) {
    weldingTag.addEventListener('click', () => {
        weldingModal.style.display = 'flex';
    });
}

// Close welding modal when close button is clicked
if (closeWeldingBtn) {
    closeWeldingBtn.addEventListener('click', () => {
        weldingModal.style.display = 'none';
    });
}

// Close welding modal when clicking outside the content
if (weldingModal) {
    weldingModal.addEventListener('click', (e) => {
        if (e.target === weldingModal) {
            weldingModal.style.display = 'none';
        }
    });
}

// Computer Literature tag click handler
if (computerLitTag) {
    computerLitTag.addEventListener('click', () => {
        computerLitModal.style.display = 'flex';
    });
}

// Close Computer Literature modal when close button is clicked
if (closeComputerLitBtn) {
    closeComputerLitBtn.addEventListener('click', () => {
        computerLitModal.style.display = 'none';
    });
}

// Close Computer Literature modal when clicking outside the content
if (computerLitModal) {
    computerLitModal.addEventListener('click', (e) => {
        if (e.target === computerLitModal) {
            computerLitModal.style.display = 'none';
        }
    });
}

// Cooking tag click handler
if (cookingTag) {
    cookingTag.addEventListener('click', () => {
        cookingModal.style.display = 'flex';
    });
}

// Close Cooking modal when close button is clicked
if (closeCookingBtn) {
    closeCookingBtn.addEventListener('click', () => {
        cookingModal.style.display = 'none';
    });
}

// Close Cooking modal when clicking outside the content
if (cookingModal) {
    cookingModal.addEventListener('click', (e) => {
        if (e.target === cookingModal) {
            cookingModal.style.display = 'none';
        }
    });
}

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

// Form handling (contact form removed)

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

// Show email text instead of navigating away
if (emailBtn && emailText) {
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        emailText.textContent = emailBtn.dataset.email || 'hinoyogjohnrushel@gmail.com';
        emailText.classList.toggle('show');
    });
}

// Clear error styling on input (contact form removed)

// Add loading animation to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            setTimeout(() => this.classList.remove('loading'), 3000);
        }
    });
});

// Add click ripple effects to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Add ripple effect to all buttons and clickable elements
document.querySelectorAll('.cta-button, .social-links a, .favorite-btn, .stat, .project-card, .skill-tag, .nav-link').forEach(element => {
    element.addEventListener('click', function(e) {
        // Add a pulse animation class
        this.classList.add('pulse-effect');
        setTimeout(() => {
            this.classList.remove('pulse-effect');
        }, 300);
    });
});

// Resume show all functionality
document.addEventListener('DOMContentLoaded', () => {
    const showAllResumeBtn = document.getElementById('showAllResumeBtn');
    const backResumeBtn = document.getElementById('backResumeBtn');
    const resumeImages = document.querySelectorAll('.resume-img');
    const resumeImagesContainer = document.getElementById('resumeImagesContainer');

    if (showAllResumeBtn && resumeImages.length > 0) {
        showAllResumeBtn.addEventListener('click', () => {
            // Add full-size class to container
            resumeImagesContainer.classList.add('full-size');
            
            // Show all resume images
            resumeImages.forEach((img, index) => {
                if (img.classList.contains('resume-img-hidden')) {
                    img.classList.remove('resume-img-hidden');
                    img.classList.add('resume-img-visible');
                    
                    // Smooth fade-in animation for hidden images
                    img.style.opacity = '0';
                    img.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        img.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                        img.style.opacity = '1';
                        img.style.transform = 'translateY(0)';
                    }, 100 * index);
                }
            });
            
            // Hide "Click to see all" button and show "Back" button
            showAllResumeBtn.classList.add('hidden');
            backResumeBtn.classList.remove('hidden');
        });
    }

    if (backResumeBtn && resumeImages.length > 0) {
        backResumeBtn.addEventListener('click', () => {
            // Remove full-size class from container
            resumeImagesContainer.classList.remove('full-size');
            
            // Hide all images except the first one
            resumeImages.forEach((img, index) => {
                if (index > 0) {
                    img.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    img.style.opacity = '0';
                    img.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        img.classList.remove('resume-img-visible');
                        img.classList.add('resume-img-hidden');
                        img.style.opacity = '';
                        img.style.transform = '';
                    }, 400);
                }
            });
            
            // Show "Click to see all" button and hide "Back" button
            setTimeout(() => {
                showAllResumeBtn.classList.remove('hidden');
                backResumeBtn.classList.add('hidden');
            }, 400);
        });
    }
});

console.log('Portfolio website loaded successfully!');

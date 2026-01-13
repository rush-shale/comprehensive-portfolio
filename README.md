# Comprehensive Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a sleek dark theme, smooth animations, and all the sections you need to showcase your work.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern Animations** - Smooth fade-ins, hover effects, and scroll animations
- **Dark Theme** - Eye-catching dark background with cyan and orange accents
- **Navigation Menu** - Fixed navbar with smooth scrolling and mobile hamburger menu
- **Hero Section** - Eye-catching introduction with call-to-action button
- **About Section** - Personal introduction with social links and statistics
- **Projects Showcase** - Grid of featured projects with descriptions and technologies
- **Skills Section** - Organized skills by category (Frontend, Backend, DevOps, Tools)
- **Contact Form** - Functional contact form with validation and success feedback
- **Footer** - Navigation links and copyright information
- **Scroll Indicator** - Visual progress bar showing page scroll position

## File Structure

```
comprehensive-portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
├── assets/             # Directory for future assets (images, icons, etc.)
└── README.md           # This file
```

## Customization

### Update Your Information
Edit `index.html` to add your:
- Name and title
- About section content
- Project descriptions and links
- Social media links
- Contact information

### Modify Colors
In `styles.css`, update the CSS variables in `:root`:
```css
:root {
    --primary-color: #00d4ff;      /* Cyan accent */
    --secondary-color: #0a0e27;    /* Dark background */
    --text-color: #e4e4e7;         /* Light text */
    --accent-color: #f97316;       /* Orange accent */
    --border-color: #27272a;       /* Border color */
}
```

### Add Project Images
Add image files to the `assets/` folder and update the project cards in `index.html` to use real images instead of icons.

## Features Explained

### Mobile Menu
The hamburger menu automatically appears on screens smaller than 768px. Click to toggle navigation.

### Form Validation
The contact form validates that all fields are filled before submission and provides visual feedback.

### Smooth Scrolling
All navigation links smoothly scroll to their respective sections.

### Scroll Indicator
A colored progress bar at the top of the page shows how much of the page you've scrolled.

### Animations
- Elements fade in as they come into view
- Cards lift on hover
- Buttons glow on interaction
- Smooth color transitions throughout

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Started

1. Open `index.html` in your web browser
2. Customize the content with your information
3. Replace icon placeholders with real project images
4. Add your social media links
5. Host on GitHub Pages, Netlify, Vercel, or any static hosting service

## Tips for Enhancement

- **Add Project Images**: Replace the icon divs with actual project screenshots
- **Add More Sections**: Duplicate sections and modify for testimonials, blog, etc.
- **Contact Form Backend**: Connect the form to a backend service (Formspree, EmailJS, etc.)
- **Dark/Light Mode Toggle**: Add a theme switcher
- **Blog Section**: Add a blog/articles section
- **Downloads**: Add a resume/CV download button

## License

Feel free to use this portfolio template for your personal website!

---

Built with ❤️ using HTML, CSS, and JavaScript

// ===========================
// Digital Forensic HQ - JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    setCurrentDate();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize report button
    initReportButton();
    
    // Initialize form submission
    initContactForm();
    
    // Add scroll effects
    initScrollEffects();
});

// Set Current Date
function setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const storyDateElement = document.getElementById('story-date');
    
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-MY', options);
    
    if (dateElement) dateElement.textContent = dateString;
    if (storyDateElement) storyDateElement.textContent = dateString;
}

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger) return;
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Handle dropdown toggle on mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                const allDropdowns = document.querySelectorAll('.dropdown');
                allDropdowns.forEach(dd => {
                    if (dd !== this.closest('.dropdown')) {
                        dd.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                const dropdown = this.closest('.dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Handle dropdown menu item clicks
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                // Allow navigation
                setTimeout(() => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }, 100);
            }
        });
    });
    
    // Close menu when a regular link is clicked
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Report Button Handler
function initReportButton() {
    const reportBtn = document.querySelector('.read-button');
    
    if (!reportBtn) return;
    
    reportBtn.addEventListener('click', function() {
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Focus on form
        setTimeout(() => {
            const firstInput = document.querySelector('.contact-form input');
            if (firstInput) firstInput.focus();
        }, 500);
    });
}

// Contact Form Submission
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Validate form
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Please fill out all fields.');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        showNotification('Inquiry submitted successfully! We will contact you soon.');
        
        // Reset form
        this.reset();
    });
}

// Scroll Effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and items
    const cards = document.querySelectorAll('.service-card, .why-item, .threat-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Notification System
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #c70c0c;
        color: #ffffff;
        padding: 1rem 2rem;
        border-radius: 3px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        box-shadow: 0 5px 15px rgba(199, 12, 12, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    function smoothScroll(element) {
        const target = document.querySelector(element);
        if (target) {
            const targetPosition = target.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;
            
            window.requestAnimationFrame(function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const scrollAmount = (progress / duration) * distance;
                window.scrollTo(0, startPosition + scrollAmount);
                
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            });
        }
    }
}

// Add loading animation on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Initialize page
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

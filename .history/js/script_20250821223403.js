// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.remove('active');
        document.getElementById('nav-menu').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Scroll animations
function checkFadeElements() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFadeElements);
window.addEventListener('load', checkFadeElements);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form validation for contact page
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (name && email && message) {
            // Here you would typically send the form data to a server
            alert('¡Mensaje enviado! Nos pondremos en contacto pronto.');
            this.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
}

// Video background controls for index.html
if (document.querySelector('.video-background video')) {
    const video = document.querySelector('.video-background video');
    
    // Ensure video plays correctly on mobile devices
    video.addEventListener('loadedmetadata', function() {
        video.play().catch(function(error) {
            // Autoplay was prevented, handle it here
            console.log('Autoplay prevented:', error);
        });
    });
    
    // Add play/pause controls on click for mobile
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

// Service page specific functionality
if (document.querySelector('.services-hero')) {
    // Add service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const icon = card.querySelector('.service-icon');
        
        card.addEventListener('mouseenter', () => {
            icon.style.color = '#06b6d4'; // Change icon color on hover
            icon.style.transform = 'scale(1.1)'; // Slightly enlarge the icon
            icon.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            icon.style.color = '#2563eb'; // Reset icon color
            icon.style.transform = 'scale(1)'; // Reset icon size
        });
    });
    
    // Add animation to service features
    const serviceFeatures = document.querySelectorAll('.feature');
    serviceFeatures.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.1}s`;
        feature.classList.add('pulse-animation');
    });
}

// Technologies page specific functionality
if (document.querySelector('.technologies-hero')) {
    // Add tech item hover effects
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        const icon = item.querySelector('.tech-icon');
        
        item.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.transition = 'all 0.3s ease';
            item.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.2)';
        });
        
        item.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0)';
            item.style.boxShadow = 'var(--glass-shadow)';
        });
    });
    
    // Add tooltips to technology items
    const techTooltips = {
        'AWS': 'Amazon Web Services - Plataforma cloud líder en el mercado',
        'Google Cloud': 'Google Cloud Platform - Soluciones cloud de Google',
        'Python': 'Lenguaje de programación para ciencia de datos y AI',
        'Node.js': 'Entorno de ejecución para JavaScript del lado del servidor',
        'MongoDB': 'Base de datos NoSQL orientada a documentos',
        'SIEM': 'Security Information and Event Management - Gestión de seguridad'
    };
    
    techItems.forEach(item => {
        const techName = item.querySelector('.tech-name').textContent;
        if (techTooltips[techName]) {
            item.setAttribute('data-tooltip', techTooltips[techName]);
            
            // Create tooltip element
            const tooltip = document.createElement('div');
            tooltip.className = 'tech-tooltip';
            tooltip.textContent = techTooltips[techName];
            item.appendChild(tooltip);
            
            // Add event listeners for tooltip
            item.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
            });
            
            item.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            });
        }
    });
}

// Additional animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Add pulse animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 20px rgba(37, 99, 235, 0.5)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '';
        });
    });
    
    // Add parallax effect to hero section
    if (document.querySelector('.hero')) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-content');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    // Add intersection observer for advanced animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .service-card, .tech-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Service page filtering functionality
if (document.querySelector('.services-hero')) {
    // This would be implemented if we had a filter system for services
    console.log('Services page loaded - filter functionality can be added here');
}

// Technologies page filtering functionality
if (document.querySelector('.technologies-hero')) {
    // This would be implemented if we had a filter system for technologies
    console.log('Technologies page loaded - filter functionality can be added here');
}

// About page specific functionality
if (document.querySelector('.about-hero')) {
    // Team member hover effects
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            const overlay = member.querySelector('.member-overlay');
            overlay.style.opacity = '1';
            
            const image = member.querySelector('.member-image img');
            image.style.transform = 'scale(1.1)';
        });
        
        member.addEventListener('mouseleave', () => {
            const overlay = member.querySelector('.member-overlay');
            overlay.style.opacity = '0';
            
            const image = member.querySelector('.member-image img');
            image.style.transform = 'scale(1)';
        });
    });
}

// Solutions page specific functionality
if (document.querySelector('.solutions-hero')) {
    // Animate process steps on scroll
    const processSteps = document.querySelectorAll('.process-step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });
    
    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(20px)';
        step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        step.style.transitionDelay = `${index * 0.2}s`;
        
        observer.observe(step);
    });
}

// Contact page specific functionality
if (document.querySelector('.contact-hero')) {
    // Form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Show success message
                alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
                this.reset();
            } else {
                alert('Por favor, completa todos los campos obligatorios.');
            }
        });
    }
    
    // Add interactive effects to form fields
    const formFields = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    formFields.forEach(field => {
        field.addEventListener('focus', () => {
            field.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', () => {
            if (!field.value) {
                field.parentElement.classList.remove('focused');
            }
        });
    });
}

// Legal pages specific functionality
if (document.querySelector('.legal-hero')) {
    // Add smooth scrolling for section links
    document.querySelectorAll('.legal-text h2').forEach(heading => {
        heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    });
}
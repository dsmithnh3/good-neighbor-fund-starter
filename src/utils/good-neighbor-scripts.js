/**
 * Good Neighbor Mobility Fund - Enhanced JavaScript
 * Features: Mobile navigation, form validation, accessibility, smooth scrolling
 */

(function() {
  'use strict';

  // DOM Ready
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // Initialize all functionality when DOM is ready
  ready(function() {
    initMobileNavigation();
    initFormHandling();
    initSmoothScrolling();
    initAccessibilityFeatures();
    initAnimations();
    updateCopyrightYear();
    initAnalytics();
  });

  /**
   * Mobile Navigation
   */
  function initMobileNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav a');

    if (!mobileToggle || !navWrapper) return;

    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navWrapper.classList.toggle('active');
      
      // Trap focus when menu is open
      if (!isExpanded) {
        navLinks[0]?.focus();
      }
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navWrapper.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navWrapper.classList.contains('active')) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navWrapper.classList.remove('active');
        document.body.style.overflow = '';
        mobileToggle.focus();
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileToggle.contains(e.target) && !navWrapper.contains(e.target)) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navWrapper.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /**
   * Enhanced Form Handling
   */
  function initFormHandling() {
    const forms = document.querySelectorAll('form[data-netlify]');
    
    forms.forEach(form => {
      const successTarget = form.getAttribute('data-success-target');
      const statusElement = successTarget ? document.getElementById(successTarget) : null;
      
      // Add form validation
      addFormValidation(form);
      
      // Handle form submission
      form.addEventListener('submit', function(e) {
        if (!validateForm(form)) {
          e.preventDefault();
          return;
        }

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Netlify will handle the actual submission
        // We'll use a timeout to show success message
        setTimeout(() => {
          if (statusElement) {
            statusElement.textContent = getSuccessMessage(form.name);
            statusElement.className = 'form-status success';
          }
          
          // Reset form
          form.reset();
          
          // Reset button
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          
          // Clear any error messages
          clearFormErrors(form);
          
          // Announce success to screen readers
          announceToScreenReader(getSuccessMessage(form.name));
          
        }, 1000);
      });
    });
  }

  /**
   * Add real-time form validation
   */
  function addFormValidation(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      // Validate on blur
      input.addEventListener('blur', function() {
        validateField(input);
      });
      
      // Clear errors on input
      input.addEventListener('input', function() {
        clearFieldError(input);
      });
    });
  }

  /**
   * Validate entire form
   */
  function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    // Validate checkboxes for volunteer form
    if (form.name === 'volunteer') {
      const checkboxes = form.querySelectorAll('input[name="interests"]:checked');
      if (checkboxes.length === 0) {
        const fieldset = form.querySelector('fieldset');
        showFieldError(fieldset, 'Please select at least one area of interest.');
        isValid = false;
      }
    }
    
    return isValid;
  }

  /**
   * Validate individual field
   */
  function validateField(input) {
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Required field validation
    if (input.hasAttribute('required') && !value) {
      errorMessage = `${getFieldLabel(input)} is required.`;
      isValid = false;
    }
    
    // Email validation
    else if (input.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMessage = 'Please enter a valid email address.';
        isValid = false;
      }
    }
    
    // Phone validation (if provided)
    else if (input.type === 'tel' && value) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
        errorMessage = 'Please enter a valid phone number.';
        isValid = false;
      }
    }

    if (!isValid) {
      showFieldError(input, errorMessage);
    } else {
      clearFieldError(input);
    }

    return isValid;
  }

  /**
   * Show field error
   */
  function showFieldError(field, message) {
    const fieldContainer = field.closest('.form-group') || field.closest('fieldset');
    if (!fieldContainer) return;

    // Remove existing error
    clearFieldError(field);

    // Add error class
    field.classList.add('error');
    
    // Create error message
    const errorId = field.id ? `${field.id}-error` : `error-${Date.now()}`;
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.id = errorId;
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');
    
    // Insert error message
    fieldContainer.appendChild(errorElement);
    
    // Associate error with field
    field.setAttribute('aria-describedby', errorId);
    field.setAttribute('aria-invalid', 'true');
  }

  /**
   * Clear field error
   */
  function clearFieldError(field) {
    const fieldContainer = field.closest('.form-group') || field.closest('fieldset');
    if (!fieldContainer) return;

    // Remove error class
    field.classList.remove('error');
    
    // Remove error message
    const existingError = fieldContainer.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    // Remove aria attributes
    field.removeAttribute('aria-describedby');
    field.removeAttribute('aria-invalid');
  }

  /**
   * Clear all form errors
   */
  function clearFormErrors(form) {
    const errorMessages = form.querySelectorAll('.error-message');
    const errorFields = form.querySelectorAll('.error');
    
    errorMessages.forEach(error => error.remove());
    errorFields.forEach(field => {
      field.classList.remove('error');
      field.removeAttribute('aria-describedby');
      field.removeAttribute('aria-invalid');
    });
  }

  /**
   * Get field label for error messages
   */
  function getFieldLabel(field) {
    const label = document.querySelector(`label[for="${field.id}"]`);
    if (label) {
      return label.textContent.replace('*', '').trim();
    }
    
    const closestLabel = field.closest('.form-group')?.querySelector('label');
    if (closestLabel) {
      return closestLabel.textContent.replace('*', '').trim();
    }
    
    return field.name || 'This field';
  }

  /**
   * Get success message based on form name
   */
  function getSuccessMessage(formName) {
    const messages = {
      'donation-inquiry': 'Thank you for your interest! We\'ll send you donation information within 1-2 business days.',
      'volunteer': 'Thanks for volunteering! We\'ll contact you with opportunities that match your interests.',
      'contact': 'Message sent successfully! We\'ll respond within 1-2 business days.',
      'pledge': 'Thank you for your pledge! We\'ll be in touch with next steps.'
    };
    
    return messages[formName] || 'Thank you! We\'ll be in touch soon.';
  }

  /**
   * Smooth Scrolling for anchor links
   */
  function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Close mobile menu if open
          const navWrapper = document.querySelector('.nav-wrapper');
          const mobileToggle = document.querySelector('.mobile-menu-toggle');
          if (navWrapper?.classList.contains('active')) {
            mobileToggle?.setAttribute('aria-expanded', 'false');
            navWrapper.classList.remove('active');
            document.body.style.overflow = '';
          }
          
          // Smooth scroll to target
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Focus management for accessibility
          setTimeout(() => {
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus();
          }, 500);
        }
      });
    });
  }

  /**
   * Accessibility Features
   */
  function initAccessibilityFeatures() {
    // Announce page changes to screen readers
    announceToScreenReader('Good Neighbor Mobility Fund website loaded');
    
    // Enhanced focus management
    initFocusManagement();
    
    // Keyboard navigation improvements
    initKeyboardNavigation();
    
    // ARIA live regions
    initLiveRegions();
  }

  /**
   * Focus Management
   */
  function initFocusManagement() {
    // Track focus for better UX
    let focusedByMouse = false;
    
    document.addEventListener('mousedown', () => {
      focusedByMouse = true;
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        focusedByMouse = false;
      }
    });
    
    document.addEventListener('focus', (e) => {
      if (focusedByMouse) {
        e.target.classList.add('focus-mouse');
      } else {
        e.target.classList.remove('focus-mouse');
      }
    }, true);
  }

  /**
   * Keyboard Navigation
   */
  function initKeyboardNavigation() {
    // Arrow key navigation for card grids
    const cardGrids = document.querySelectorAll('.programs-grid, .cards');
    
    cardGrids.forEach(grid => {
      const cards = grid.querySelectorAll('.program-card, .card');
      
      cards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
          let targetIndex = -1;
          
          switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
              targetIndex = (index + 1) % cards.length;
              break;
            case 'ArrowLeft':
            case 'ArrowUp':
              targetIndex = (index - 1 + cards.length) % cards.length;
              break;
            case 'Home':
              targetIndex = 0;
              break;
            case 'End':
              targetIndex = cards.length - 1;
              break;
          }
          
          if (targetIndex >= 0) {
            e.preventDefault();
            cards[targetIndex].focus();
          }
        });
      });
    });
  }

  /**
   * ARIA Live Regions
   */
  function initLiveRegions() {
    // Create a global live region for announcements
    if (!document.getElementById('aria-live-region')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'aria-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      
      document.body.appendChild(liveRegion);
    }
  }

  /**
   * Announce to Screen Reader
   */
  function announceToScreenReader(message) {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      
      // Clear after a delay
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Animation on Scroll
   */
  function initAnimations() {
    // Only add animations if user hasn't requested reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
      '.program-card, .need-stat, .opportunity, .contact-method, .impact-example'
    );
    
    animateElements.forEach(el => {
      observer.observe(el);
    });
  }

  /**
   * Update Copyright Year
   */
  function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('#current-year, #year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
      element.textContent = currentYear;
    });
  }

  /**
   * Analytics Initialization
   */
  function initAnalytics() {
    // Track form submissions
    document.addEventListener('submit', function(e) {
      const form = e.target;
      if (form.hasAttribute('data-netlify')) {
        // Track with Google Analytics if available
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            form_name: form.name || 'unknown',
            event_category: 'engagement'
          });
        }
        
        // Track with Plausible if available
        if (typeof plausible !== 'undefined') {
          plausible('Form Submit', {
            props: { form: form.name || 'unknown' }
          });
        }
      }
    });

    // Track outbound links
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a');
      if (link && link.hostname !== window.location.hostname) {
        // Track with Google Analytics if available
        if (typeof gtag !== 'undefined') {
          gtag('event', 'click', {
            event_category: 'outbound',
            event_label: link.href,
            transport_type: 'beacon'
          });
        }
        
        // Track with Plausible if available
        if (typeof plausible !== 'undefined') {
          plausible('Outbound Link', {
            props: { url: link.href }
          });
        }
      }
    });

    // Track scroll depth
    let maxScroll = 0;
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          
          // Track with Google Analytics if available
          if (typeof gtag !== 'undefined') {
            gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: scrollPercent + '%'
            });
          }
          
          // Track with Plausible if available
          if (typeof plausible !== 'undefined') {
            plausible('Scroll Depth', {
              props: { depth: scrollPercent + '%' }
            });
          }
        }
      }, 100);
    });
  }

  /**
   * Utility Functions
   */
  
  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Throttle function for scroll events
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Progressive Enhancement Check
  function supportsIntersectionObserver() {
    return 'IntersectionObserver' in window;
  }

  // Expose utilities to global scope if needed
  window.GoodNeighborUtils = {
    announceToScreenReader,
    debounce,
    throttle,
    isInViewport
  };

})();
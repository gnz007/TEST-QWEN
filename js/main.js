/**
 * TechFix Pro - JavaScript Principal
 * Funcionalidades del sitio web
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Navegación Móvil
    // ===================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animación del icono hamburguesa
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                navToggle.setAttribute('aria-label', 'Cerrar menú');
            } else {
                navToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-label', 'Abrir menú');
            });
        });
    }
    
    // ===================================
    // Header con sombra al hacer scroll
    // ===================================
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            }
        });
    }
    
    // ===================================
    // Smooth Scroll para enlaces internos
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar enlaces vacíos o que no sean anclas
            if (href === '#' || !href.startsWith('#')) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Formulario de Presupuesto
    // ===================================
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Validar campos requeridos
            let isValid = true;
            const requiredFields = ['nombre', 'email', 'dispositivo', 'problema'];
            
            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!data[field] || data[field].trim() === '') {
                    isValid = false;
                    input.style.borderColor = 'var(--color-error)';
                } else {
                    input.style.borderColor = 'var(--color-gray-300)';
                }
            });
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (data.email && !emailRegex.test(data.email)) {
                isValid = false;
                const emailInput = this.querySelector('[name="email"]');
                emailInput.style.borderColor = 'var(--color-error)';
            }
            
            // Validar términos
            const terminosCheckbox = this.querySelector('[name="terminos"]');
            if (!terminosCheckbox.checked) {
                isValid = false;
                alert('Debes aceptar los términos y condiciones para continuar.');
                return;
            }
            
            if (isValid) {
                // Simular envío exitoso
                showFormSuccess(this, data);
            } else {
                alert('Por favor completá todos los campos requeridos correctamente.');
            }
        });
        
        // Limpiar estilos de error al escribir
        quoteForm.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = 'var(--color-gray-300)';
            });
        });
    }
    
    // ===================================
    // Mostrar mensaje de éxito del formulario
    // ===================================
    function showFormSuccess(form, data) {
        // Crear mensaje de éxito
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                <h3 style="font-size: 1.5rem; color: var(--color-success); margin-bottom: 1rem;">
                    ¡Solicitud Enviada!
                </h3>
                <p style="color: var(--color-gray-600); margin-bottom: 1.5rem;">
                    Gracias ${data.nombre}, hemos recibido tu solicitud de presupuesto.
                </p>
                <p style="color: var(--color-gray-600);">
                    Te contactaremos en menos de 24 horas hábiles al email <strong>${data.email}</strong>
                    ${data.telefono ? `o al teléfono ${data.telefono}` : ''}.
                </p>
                <button class="btn btn-primary" onclick="this.closest('.form-success').remove(); document.getElementById('quoteForm').reset();" 
                        style="margin-top: 1.5rem;">
                    Enviar otra consulta
                </button>
            </div>
        `;
        successMessage.style.cssText = `
            background-color: var(--color-gray-50);
            padding: var(--spacing-2xl);
            border-radius: var(--radius-xl);
            border: 1px solid var(--color-gray-200);
            text-align: center;
        `;
        
        // Reemplazar formulario con mensaje de éxito
        form.style.display = 'none';
        form.parentNode.insertBefore(successMessage, form.nextSibling);
        
        // Scroll suave hacia el mensaje
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Log para debugging (en producción esto iría a un servidor)
        console.log('Formulario enviado:', data);
    }
    
    // ===================================
    // Animaciones al hacer scroll (Intersection Observer)
    // ===================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animar
    const animateElements = document.querySelectorAll('.service-card, .about-feature, .credential, .contact-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // ===================================
    // Contador animado para credenciales
    // ===================================
    const credentialNumbers = document.querySelectorAll('.credential-number');
    
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                numberObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    credentialNumbers.forEach(num => {
        numberObserver.observe(num);
    });
    
    function animateCounter(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const number = parseInt(text.replace(/\D/g, ''));
        
        if (isNaN(number)) return;
        
        let current = 0;
        const increment = number / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            
            let display = Math.floor(current);
            if (hasPlus) display += '+';
            if (hasPercent) display += '%';
            
            element.textContent = display;
        }, stepTime);
    }
    
    // ===================================
    // Active Navigation Link
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.color = 'var(--color-primary)';
                } else {
                    navLink.style.color = '';
                }
            }
        });
    });
    
    // ===================================
    // Lazy Loading para imágenes (placeholder)
    // ===================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ===================================
    // Formateo de teléfono automático
    // ===================================
    const telefonoInput = document.getElementById('telefono');
    
    if (telefonoInput) {
        telefonoInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = `(${value}`;
                } else if (value.length <= 6) {
                    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
                } else {
                    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
                }
            }
            
            e.target.value = value;
        });
    }
    
    // ===================================
    // Mensaje de bienvenida en consola
    // ===================================
    console.log('%c🔧 TechFix Pro - Servicio Técnico Profesional', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%cSitio web cargado correctamente. ¡Listo para reparar!', 'color: #10b981; font-size: 12px;');
    
});

// ===================================
// Utilidad para year dinámico en footer
// ===================================
function updateFooterYear() {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} TechFix Pro. Todos los derechos reservados.`;
    }
}

updateFooterYear();

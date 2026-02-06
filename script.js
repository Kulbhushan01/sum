// ===================================
// KULKARNI CREATION - JAVASCRIPT
// Premium Rangoli Mats Website
// ===================================

// ===== PRODUCTS DATA =====
const products = [
    {
        id: 1,
        name: "Lotus Rangoli Mat",
        category: "lotus",
        price: 1600,
        originalPrice: 2000,
        discount: 20,
        image: "images/IMG-20251210-WA0029.jpg",
        description: "Beautiful lotus design symbolizing purity and beauty",
        featured: true
    },
    {
        id: 2,
        name: "Peacock Corner Rangoli Mat",
        category: "peacock",
        price: 850,
        originalPrice: 1000,
        discount: 15,
        image: "images/IMG-20251210-WA0007.jpg",
        description: "Beautiful peacock design for corner placement - festival special",
        featured: true
    },
    {
        id: 3,
        name: "Traditional Round Rangoli Mat",
        category: "round",
        price: 1300,
        originalPrice: 1500,
        discount: 13,
        image: "images/IMG-20251210-WA0006.jpg",
        description: "Traditional round design with intricate patterns",
        featured: true
    },
    {
        id: 4,
        name: "Floral Rangoli Mat Set",
        category: "lotus",
        price: 1400,
        originalPrice: 1600,
        discount: 12,
        image: "images/IMG-20251210-WA0004.jpg",
        description: "Floral pattern set - perfect for festive decorations",
        featured: true
    },
    {
        id: 5,
        name: "Designer Rangoli Mat",
        category: "special",
        price: 1350,
        originalPrice: 1500,
        discount: 10,
        image: "images/IMG-20251210-WA0003.jpg",
        description: "Designer collection with unique patterns",
        featured: true
    },
    {
        id: 6,
        name: "Simple Cotton Rangoli Mat",
        category: "cotton",
        price: 850,
        originalPrice: 900,
        discount: 5,
        image: "images/IMG-20251210-WA0005.jpg",
        description: "Simple cotton mat for daily use - washable and durable",
        featured: false
    },
    {
        id: 7,
        name: "Small Decorative Rangoli Mats (Pack of 5)",
        category: "special",
        price: 250,
        originalPrice: 300,
        discount: 17,
        image: "images/IMG-20251210-WA0008.jpg",
        description: "Small decorative mats pack - perfect for multiple corners",
        featured: false
    },
    {
        id: 8,
        name: "Mini Rangoli Mats Set",
        category: "star",
        price: 180,
        originalPrice: 200,
        discount: 10,
        image: "images/IMG-20251210-WA0009.jpg",
        description: "Mini mats set for small spaces and decorative purposes",
        featured: false
    },
    {
        id: 9,
        name: "Classic Kulkarni Creation Mat",
        category: "round",
        price: 1100,
        originalPrice: 1300,
        discount: 15,
        image: "images/IMG-20251210-WA0010.jpg",
        description: "Classic design from Kulkarni Creation - timeless elegance",
        featured: true
    },
    {
        id: 10,
        name: "Traditional Woolen Rangoli Mat",
        category: "round",
        price: 850,
        originalPrice: 950,
        discount: 10,
        image: "images/IMG-20251210-WA0011.jpg",
        description: "Woolen mat with traditional patterns - warm and cozy",
        featured: false
    },
    {
        id: 11,
        name: "Premium Kulkarni Creation Mat",
        category: "special",
        price: 1200,
        originalPrice: 1400,
        discount: 14,
        image: "images/IMG-20251210-WA0012.jpg",
        description: "Premium quality mat with detailed craftsmanship",
        featured: true
    },
    {
        id: 12,
        name: "Small Cotton Mat (20 pcs)",
        category: "cotton",
        price: 400,
        originalPrice: 500,
        discount: 20,
        image: "images/IMG-20251210-WA0015.jpg",
        description: "Small cotton mats in bulk (20 pieces) - great for events",
        featured: false
    },
    {
        id: 13,
        name: "Outdoor Rangoli Mat",
        category: "star",
        price: 600,
        originalPrice: 700,
        discount: 14,
        image: "images/IMG-20251210-WA0016.jpg",
        description: "Durable outdoor mat - weather resistant and long-lasting",
        featured: true
    },
    {
        id: 14,
        name: "Mandala Design Rangoli Mat",
        category: "round",
        price: 950,
        originalPrice: 1100,
        discount: 14,
        image: "images/IMG-20251210-WA0017.jpg",
        description: "Beautiful mandala design - symbolizes unity and harmony",
        featured: true
    },
    {
        id: 15,
        name: "Traditional Entrance Mat",
        category: "round",
        price: 800,
        originalPrice: 900,
        discount: 11,
        image: "images/IMG-20251210-WA0018.jpg",
        description: "Perfect for entrance - traditional welcome design",
        featured: false
    },
    {
        id: 16,
        name: "Modern Rangoli Mat",
        category: "special",
        price: 900,
        originalPrice: 1000,
        discount: 10,
        image: "images/IMG-20251210-WA0019.jpg",
        description: "Modern design with traditional touch - contemporary elegance",
        featured: true
    },
    {
        id: 17,
        name: "Classic Peacock Design Mat",
        category: "peacock",
        price: 1100,
        originalPrice: 1300,
        discount: 15,
        image: "images/IMG-20251210-WA0020.jpg",
        description: "Classic peacock motif - symbol of beauty and grace",
        featured: true
    },
    {
        id: 18,
        name: "Premium Designer Mat",
        category: "special",
        price: 1400,
        originalPrice: 1600,
        discount: 12,
        image: "images/IMG-20251210-WA0021.jpg",
        description: "Premium designer collection - exclusive patterns",
        featured: true
    },
    {
        id: 19,
        name: "Traditional Floor Mat",
        category: "round",
        price: 700,
        originalPrice: 800,
        discount: 12,
        image: "images/IMG-20251210-WA0022.jpg",
        description: "Traditional floor mat for home decor - cultural designs",
        featured: false
    },
    {
        id: 20,
        name: "Exclusive Kulkarni Creation",
        category: "special",
        price: 1000,
        originalPrice: 1200,
        discount: 17,
        image: "images/IMG-20251210-WA0013.jpg",
        description: "Exclusive design from Kulkarni Creation - limited edition",
        featured: true
    },
    {
        id: 21,
        name: "Basic Rangoli Starter Pack",
        category: "star",
        price: 300,
        originalPrice: 350,
        discount: 14,
        image: "images/IMG-20251210-WA0014.jpg",
        description: "Basic starter pack for beginners - simple and elegant",
        featured: false
    },
    {
        id: 22,
        name: "Malvani Motif Accent Mat",
        category: "special",
        price: 1500,
        originalPrice: 1800,
        discount: 17,
        image: "images/IMG-20251210-WA0038.jpg",
        description: "Regional Malvani motifs hand-crafted by artisans",
        featured: true
    },
    {
        id: 23,
        name: "Corner Rangoli Mat Design",
        category: "round",
        price: 750,
        originalPrice: 850,
        discount: 12,
        image: "images/IMG-20251210-WA0025.jpg",
        description: "Perfect corner design with beautiful patterns",
        featured: false
    },
    {
        id: 24,
        name: "Traditional Square Mat",
        category: "round",
        price: 850,
        originalPrice: 950,
        discount: 10,
        image: "images/IMG-20251210-WA0026.jpg",
        description: "Traditional square design for home decor",
        featured: false
    },
    {
        id: 25,
        name: "Floral Border Rangoli Mat",
        category: "lotus",
        price: 1100,
        originalPrice: 1300,
        discount: 15,
        image: "images/IMG-20251210-WA0027.jpg",
        description: "Beautiful floral border design - elegant and traditional",
        featured: true
    },
    {
        id: 26,
        name: "Malvani Mandala Woolen Mat",
        category: "round",
        price: 2500,
        originalPrice: 3000,
        discount: 17,
        image: "images/IMG-20251210-WA0028.jpg",
        description: "Handmade woolen mandala inspired by Konkan motifs",
        featured: true
    },
    {
        id: 27,
        name: "Circle Rangoli Mat",
        category: "round",
        price: 900,
        originalPrice: 1100,
        discount: 18,
        image: "images/IMG-20251210-WA0031.jpg",
        description: "Elegant circular design for puja areas",
        featured: true
    },
    {
        id: 28,
        name: "Floral Cotton Rangoli Mat (2ft)",
        category: "cotton",
        price: 700,
        originalPrice: 800,
        discount: 13,
        image: "images/IMG-20251210-WA0032.jpg",
        description: "Soft cotton mat with floral rangoli print",
        featured: false
    },
    {
        id: 29,
        name: "Decorative Center Mat",
        category: "special",
        price: 1200,
        originalPrice: 1400,
        discount: 14,
        image: "images/IMG-20251210-WA0030.jpg",
        description: "Decorative center mat for living room",
        featured: true
    },
    {
        id: 30,
        name: "Star Pattern Rangoli Mat",
        category: "star",
        price: 950,
        originalPrice: 1100,
        discount: 14,
        image: "images/IMG-20251210-WA0033.jpg",
        description: "Beautiful star pattern design - festive look",
        featured: false
    },
    {
        id: 31,
        name: "Peacock Feather Design Mat",
        category: "peacock",
        price: 1300,
        originalPrice: 1500,
        discount: 13,
        image: "images/IMG-20251210-WA0037.jpg",
        description: "Peacock feather inspired design - elegant and colorful",
        featured: true
    },
    {
        id: 32,
        name: "Star Border Rangoli Mat",
        category: "star",
        price: 850,
        originalPrice: 1000,
        discount: 15,
        image: "images/IMG-20251210-WA0034.jpg",
        description: "Star border design - perfect for festive occasions",
        featured: false
    },
    {
        id: 33,
        name: "Round Traditional Mat",
        category: "round",
        price: 700,
        originalPrice: 800,
        discount: 12,
        image: "images/IMG-20251210-WA0035.jpg",
        description: "Traditional round mat with intricate designs",
        featured: false
    },
    {
        id: 34,
        name: "Simple Round Design Mat",
        category: "round",
        price: 650,
        originalPrice: 750,
        discount: 13,
        image: "images/IMG-20251210-WA0036.jpg",
        description: "Simple yet elegant round design - versatile use",
        featured: false
    },
    {
        id: 35,
        name: "Two Peacock Rangoli Mat",
        category: "peacock",
        price: 1800,
        originalPrice: 2200,
        discount: 18,
        image: "images/IMG-20251210-WA0039.jpg",
        description: "Large peacock mandala with two peacocks - festival showstopper",
        featured: true
    }
];

// ===== STATE MANAGEMENT =====
let currentCategory = 'all';
let displayedProducts = 12;
let filteredProducts = [...products];
let currentSlide = 0;
let slideInterval;
let cart = [];

// ===== DOM ELEMENTS =====
const preloader = document.getElementById('preloader');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const scrollTopBtn = document.getElementById('scrollTop');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearchBtn = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const galleryGrid = document.getElementById('galleryGrid');
const newsletterForm = document.getElementById('newsletterForm');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.querySelector('.cart-count');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Hide preloader
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 1500);

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // Setup event listeners
    setupEventListeners();

    // Render initial products
    renderProducts();

    // Render gallery
    renderGallery();

    // Start slideshow
    startSlideshow();

    // Animate statistics
    animateStats();
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            scrollToSection(section);
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Category filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            filterProducts(category);
            
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }

    // Scroll to top button
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Search functionality
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchModal.classList.add('active');
            searchInput.focus();
        });
    }

    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', () => {
            searchModal.classList.remove('active');
        });
    }

    // Close search on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
        }
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Slideshow controls
    const prevSlideBtn = document.getElementById('prevSlide');
    const nextSlideBtn = document.getElementById('nextSlide');
    
    if (prevSlideBtn) prevSlideBtn.addEventListener('click', showPrevSlide);
    if (nextSlideBtn) nextSlideBtn.addEventListener('click', showNextSlide);

    // Slide indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Cart button
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            alert('Cart functionality coming soon!');
        });
    }
}

// ===== SCROLL HANDLER =====
function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar scroll effect
    if (scrollY > 100) {
        navbar.classList.add('scrolled');
        scrollTopBtn.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        scrollTopBtn.classList.remove('visible');
    }

    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// ===== SCROLL TO SECTION =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===== PRODUCTS RENDERING =====
function renderProducts() {
    const productsToShow = filteredProducts.slice(0, displayedProducts);
    
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-aos="fade-up" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.src='https://via.placeholder.com/400x400/e53e3e/ffffff?text=${encodeURIComponent(product.name)}'">
                ${product.discount > 0 ? `<div class="product-badge">-${product.discount}%</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice > product.price ? 
                        `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="product-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="wishlist-btn" onclick="addToWishlist(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Show/hide load more button
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedProducts >= filteredProducts.length ? 'none' : 'inline-flex';
    }

    // Refresh AOS
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// ===== FILTER PRODUCTS =====
function filterProducts(category) {
    currentCategory = category;
    displayedProducts = 12;

    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(p => p.category === category);
    }

    renderProducts();

    // Scroll to products section
    setTimeout(() => {
        scrollToSection('products');
    }, 300);
}

// ===== LOAD MORE PRODUCTS =====
function loadMoreProducts() {
    displayedProducts += 12;
    renderProducts();

    // Scroll to new products
    setTimeout(() => {
        const lastVisibleProduct = document.querySelectorAll('.product-card')[displayedProducts - 13];
        if (lastVisibleProduct) {
            lastVisibleProduct.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
}

// ===== SLIDESHOW FUNCTIONS =====
function startSlideshow() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;

    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        showNextSlide();
    }, 5000);
}

function showNextSlide() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlideshow(slides, indicators);
}

function showPrevSlide() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlideshow(slides, indicators);
    
    // Restart slideshow
    startSlideshow();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    currentSlide = index;
    updateSlideshow(slides, indicators);
    
    // Restart slideshow
    startSlideshow();
}

function updateSlideshow(slides, indicators) {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// ===== GALLERY RENDERING =====
function renderGallery() {
    if (!galleryGrid) return;

    const galleryImages = products.filter(p => p.featured).slice(0, 12);
    
    galleryGrid.innerHTML = galleryImages.map((product, index) => `
        <div class="gallery-item" data-aos="zoom-in" data-aos-delay="${index * 50}">
            <img src="${product.image}" alt="${product.name}"
                 onerror="this.src='https://via.placeholder.com/600x400/e53e3e/ffffff?text=${encodeURIComponent(product.name)}'">
            <div class="gallery-overlay">
                <div class="gallery-info">
                    <h3>${product.name}</h3>
                    <p>${product.category}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== SEARCH FUNCTIONALITY =====
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    
    if (!query) {
        searchResults.innerHTML = '';
        return;
    }

    const results = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        searchResults.innerHTML = '<p style="padding: 1rem; text-align: center; color: #718096;">No products found</p>';
        return;
    }

    searchResults.innerHTML = results.slice(0, 5).map(product => `
        <div style="padding: 1rem; border-bottom: 1px solid #e2e8f0; cursor: pointer;" 
             onclick="viewProduct(${product.id})">
            <div style="display: flex; gap: 1rem; align-items: center;">
                <img src="${product.image}" alt="${product.name}" 
                     style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;"
                     onerror="this.src='https://via.placeholder.com/60x60/e53e3e/ffffff'">
                <div style="flex: 1;">
                    <h4 style="margin-bottom: 0.25rem; font-size: 1rem;">${product.name}</h4>
                    <p style="color: #718096; font-size: 0.85rem;">${product.category}</p>
                </div>
                <div style="font-weight: 600; color: #e53e3e;">₹${product.price}</div>
            </div>
        </div>
    `).join('');
}

// ===== STATISTICS ANIMATION =====
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// ===== CART FUNCTIONS =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    updateCartCount();
    
    // Show notification
    showNotification(`${product.name} added to cart!`, 'success');
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    showNotification(`${product.name} added to wishlist!`, 'success');
}

function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    searchModal.classList.remove('active');
    
    // Filter to show this product's category
    const categoryBtn = document.querySelector(`[data-category="${product.category}"]`);
    if (categoryBtn) {
        categoryBtn.click();
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : '#e53e3e'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== NEWSLETTER FORM =====
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Thank you for subscribing to our newsletter!', 'success');
        e.target.reset();
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== SMOOTH SCROLL FOR ALL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

console.log('Kulkarni Creation website loaded successfully! 🎨');

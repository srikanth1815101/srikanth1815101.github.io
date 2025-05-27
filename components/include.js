// Function to include HTML components
async function includeHTML(elementId, path) {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    if (path.includes('header.html')) {
      element.innerHTML = `
        <header class="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur shadow-sm z-50 transition-all duration-300">
          <div class="container mx-auto px-4 py-4">
            <nav class="flex items-center justify-between">
              <a href="index.html" class="flex items-center gap-2 group select-none">
                <img src="logo.png" alt="CSRGO Logo" class="h-9 w-auto object-contain" />
                <span class="nav-divider mx-1"></span>
                <span class="nav-tools-text">Tools</span>
              </a>
              <div class="hidden md:flex items-center gap-6">
                <a href="index.html" class="text-base font-semibold text-gray-700 hover:text-blue-600 px-2 py-1 rounded transition-colors">Home</a>
                <div class="relative group">
                  <button class="text-base font-medium text-gray-700 hover:text-blue-700 transition-colors flex items-center gap-1" id="categoriesDropdownBtn">
                    Categories
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div id="categoriesDropdown" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 hidden group-hover:block">
                    <a href="category.html?id=image-tools" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Image Tools</a>
                    <a href="category.html?id=seo-tools" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">SEO Tools</a>
                    <a href="category.html?id=text-tools" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Text Tools</a>
                    <a href="category.html?id=developer-tools" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Developer Tools</a>
                    <a href="category.html?id=math-calculators" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Math & Calculators</a>
                    <a href="category.html?id=unit-converters" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Unit Converters</a>
                    <a href="category.html?id=security-tools" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Security & Encryption</a>
                    <a href="category.html?id=social-media-tools" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Social Media Tools</a>
                    <a href="category.html?id=misc-tools" class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Miscellaneous Tools</a>
                  </div>
                </div>
                <a href="blog.html" class="text-base font-semibold text-gray-700 hover:text-blue-600 px-2 py-1 rounded transition-colors">Blog</a>
                <a href="about.html" class="text-base font-semibold text-gray-700 hover:text-blue-600 px-2 py-1 rounded transition-colors">About Us</a>
                <a href="contact.html" class="text-base font-semibold text-gray-700 hover:text-blue-600 px-2 py-1 rounded transition-colors">Contact Us</a>
              </div>
              <button id="mobileMenuBtn" class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors" aria-label="Open menu">
                <i data-lucide="menu" class="w-6 h-6"></i>
              </button>
            </nav>
            <!-- New Mobile Menu -->
            <div id="mobileMenu" class="md:hidden fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out">
              <div class="flex flex-col h-full">
                <!-- Mobile Menu Header -->
                <div class="flex items-center justify-end p-4 border-b" style="background: linear-gradient(90deg, rgba(124,58,237,0.08) 0%, rgba(37,99,235,0.08) 100%); backdrop-filter: blur(8px);">
                  <button id="mobileMenuCloseBtn" class="p-2 rounded-lg text-gray-700" aria-label="Close menu" style="display: flex; justify-content: flex-end;">
                    <i data-lucide="x" class="w-6 h-6"></i>
                  </button>
                </div>
                
                <!-- Mobile Menu Content -->
                <div class="flex-1 overflow-y-auto" style="background: linear-gradient(90deg, rgba(124,58,237,0.08) 0%, rgba(37,99,235,0.08) 100%); backdrop-filter: blur(8px);">
                  <div class="p-4 space-y-2">
                    <a href="index.html" class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i data-lucide="home" class="w-5 h-5 mr-3"></i>
                      Home
                    </a>
                    <button id="mobileCategoriesBtn" class="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i data-lucide="grid" class="w-5 h-5 mr-3"></i>
                      Categories
                      <i data-lucide="chevron-down" class="w-5 h-5 ml-auto transition-transform"></i>
                    </button>
                    <div id="mobileCategoriesDropdown" class="hidden pl-12 space-y-2 mt-2">
                      <a href="category.html?id=image-tools" class="block py-2 text-gray-600 hover:text-blue-600">Image Tools</a>
                      <a href="category.html?id=seo-tools" class="block py-2 text-gray-600 hover:text-blue-600">SEO Tools</a>
                      <a href="category.html?id=text-tools" class="block py-2 text-gray-600 hover:text-blue-600">Text Tools</a>
                      <a href="category.html?id=developer-tools" class="block py-2 text-gray-600 hover:text-blue-600">Developer Tools</a>
                      <a href="category.html?id=math-calculators" class="block py-2 text-gray-600 hover:text-blue-600">Math & Calculators</a>
                      <a href="category.html?id=unit-converters" class="block py-2 text-gray-600 hover:text-blue-600">Unit Converters</a>
                      <a href="category.html?id=security-tools" class="block py-2 text-gray-600 hover:text-blue-600">Security & Encryption</a>
                      <a href="category.html?id=social-media-tools" class="block py-2 text-gray-600 hover:text-blue-600">Social Media Tools</a>
                      <a href="category.html?id=misc-tools" class="block py-2 text-gray-600 hover:text-blue-600">Miscellaneous Tools</a>
                    </div>
                    <a href="blog.html" class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i data-lucide="file-text" class="w-5 h-5 mr-3"></i>
                      Blog
                    </a>
                    <a href="about.html" class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i data-lucide="info" class="w-5 h-5 mr-3"></i>
                      About Us
                    </a>
                    <a href="contact.html" class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i data-lucide="mail" class="w-5 h-5 mr-3"></i>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      `;
      lucide.createIcons();
      initializeNavigation();
    } else if (path.includes('footer.html')) {
      element.innerHTML = `
        <!-- Footer -->
        <footer class="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
          <style>
            #mobileCategoriesDropdown.hidden { display: none !important; }
            #mobileCategoriesDropdown a { justify-content: center !important; text-align: center !important; width: 100%; }
            @media (max-width: 768px) {
              .footer-main {
                text-align: center !important;
                justify-items: center !important;
              }
              .footer-main .space-y-4, .footer-main > div {
                align-items: center !important;
                justify-content: center !important;
              }
              .footer-main .flex {
                justify-content: center !important;
              }
              /* Only apply full-screen overlay when menu is open */
              #mobileMenu.mobile-menu-open {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background: linear-gradient(135deg, rgba(124,58,237,0.95) 0%, rgba(37,99,235,0.95) 100%) !important;
                backdrop-filter: blur(16px) !important;
                -webkit-backdrop-filter: blur(16px) !important;
                z-index: 1000 !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 1.5rem !important;
                box-shadow: 0 2px 16px rgba(0,0,0,0.08);
                padding: 0 !important;
              }
              #mobileMenu a, #mobileMenu button {
                font-size: 1.25rem !important;
                width: 100%;
                text-align: center;
              }
              #mobileCategoriesDropdown {
                position: static !important;
                padding-left: 1rem !important;
                width: 100%;
                display: flex !important;
                flex-direction: column !important;
                gap: 0.5rem !important;
                text-align: left !important;
                align-items: stretch !important; /* Stretch items to full width */
              }

              #mobileCategoriesDropdown a {
                text-align: left !important;
                justify-content: flex-start !important;
                padding-left: 2rem !important;
              }
            }
          </style>
          <div class="container mx-auto px-4 py-12">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 footer-main">
              <!-- Brand Section -->
              <div class="space-y-4">
                <a href="index.html" class="flex items-center gap-3 group" style="align-items: center;">
                  <img src="logo.png" alt="CSRGO Logo" class="h-10 w-auto object-contain" style="height:2.5rem;" />
                  <span class="nav-divider mx-1"></span>
                  <span class="nav-tools-text text-2xl font-bold" style="font-size:2rem;">CSRGO Tools</span>
                </a>
                <p class="text-gray-600 text-base">Your one-stop destination for free online tools and utilities.</p>
              </div>

              <!-- Quick Links -->
              <div>
                <h3 class="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul class="space-y-2">
                  <li><a href="index.html" class="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
                  <li><a href="about.html" class="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
                  <li><a href="blog.html" class="text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
                  <li><a href="contact.html" class="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
                </ul>
              </div>

              <!-- Categories -->
              <div>
                <h3 class="font-semibold text-gray-900 mb-4">Categories</h3>
                <ul class="space-y-2">
                  <li><a href="category.html?id=image-tools" class="text-gray-600 hover:text-blue-600 transition-colors">Image Tools</a></li>
                  <li><a href="category.html?id=seo-tools" class="text-gray-600 hover:text-blue-600 transition-colors">SEO Tools</a></li>
                  <li><a href="category.html?id=text-tools" class="text-gray-600 hover:text-blue-600 transition-colors">Text Tools</a></li>
                  <li><a href="category.html?id=developer-tools" class="text-gray-600 hover:text-blue-600 transition-colors">Developer Tools</a></li>
                  <li><a href="category.html?id=math-calculators" class="text-gray-600 hover:text-blue-600 transition-colors">Math & Calculators</a></li>
                  <li><a href="category.html?id=unit-converters" class="text-gray-600 hover:text-blue-600 transition-colors">Unit Converters</a></li>
                  <li><a href="category.html?id=security-tools" class="text-gray-600 hover:text-blue-600 transition-colors">Security & Encryption</a></li>
                  <li><a href="category.html?id=social-media-tools" class="text-gray-600 hover:text-blue-600 transition-colors">Social Media Tools</a></li>
                  <li><a href="category.html?id=misc-tools" class="text-gray-600 hover:text-blue-600 transition-colors">Miscellaneous Tools</a></li>
                </ul>
              </div>

              <!-- Legal -->
              <div>
                <h3 class="font-semibold text-gray-900 mb-4">Legal</h3>
                <ul class="space-y-2">
                  <li><a href="privacy-policy.html" class="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="terms-of-service.html" class="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a></li>
                  <li><a href="cookie-policy.html" class="text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a></li>
                  <li><a href="disclaimer.html" class="text-gray-600 hover:text-blue-600 transition-colors">Disclaimer</a></li>
                  <li><a href="accessibility.html" class="text-gray-600 hover:text-blue-600 transition-colors">Accessibility</a></li>
                </ul>
              </div>
            </div>

            <!-- AdSense Notice -->
            <div class="bg-blue-50 rounded-lg p-4 mb-8">
              <p class="text-sm text-blue-800 text-center">
                This site uses Google AdSense to serve personalized advertisements. By using this site, you agree to our use of cookies and data collection practices as described in our <a href="privacy-policy.html" class="underline hover:text-blue-900">Privacy Policy</a>.
              </p>
            </div>

            <!-- Copyright -->
            <div class="border-t border-gray-100 pt-8">
              <p class="text-center text-gray-500 text-sm">
                &copy; <span id="year"></span> CSRGO Tools. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      `;
      // Initialize footer-specific scripts
      document.getElementById('year').textContent = new Date().getFullYear();
      lucide.createIcons();
    }
  } catch (error) {
    console.error('Error loading component:', error);
    if (path.includes('footer.html')) {
      element.innerHTML = `
        <footer class="bg-white border-t py-6 text-center text-gray-400 text-sm">
          &copy; ${new Date().getFullYear()} CSRGO Tools. All rights reserved.
        </footer>
      `;
    }
  }
}

// Function to initialize navigation functionality
function initializeNavigation() {
  // Desktop categories dropdown
  const categoriesDropdownBtn = document.getElementById('categoriesDropdownBtn');
  const categoriesDropdown = document.getElementById('categoriesDropdown');
  if (categoriesDropdownBtn && categoriesDropdown) {
    categoriesDropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      categoriesDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!categoriesDropdown.contains(e.target) && !categoriesDropdownBtn.contains(e.target)) {
        categoriesDropdown.classList.add('hidden');
      }
    });
  }

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
  const mobileCategoriesBtn = document.getElementById('mobileCategoriesBtn');
  const mobileCategoriesDropdown = document.getElementById('mobileCategoriesDropdown');

  if (mobileMenuBtn && mobileMenu) {
    const toggleMenu = (show) => {
      if (show) {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
        // Reset categories dropdown when closing menu
        if (mobileCategoriesDropdown) {
          mobileCategoriesDropdown.classList.add('hidden');
          const chevron = mobileCategoriesBtn.querySelector('[data-lucide="chevron-down"]');
          if (chevron) {
            chevron.style.transform = 'rotate(0deg)';
          }
        }
      }
    };

    mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
    mobileMenuCloseBtn.addEventListener('click', () => toggleMenu(false));

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        toggleMenu(false);
      }
    });

    // Categories dropdown in mobile menu
    if (mobileCategoriesBtn && mobileCategoriesDropdown) {
      mobileCategoriesBtn.addEventListener('click', () => {
        mobileCategoriesDropdown.classList.toggle('hidden');
        const chevron = mobileCategoriesBtn.querySelector('[data-lucide="chevron-down"]');
        if (chevron) {
          chevron.style.transform = mobileCategoriesDropdown.classList.contains('hidden')
            ? 'rotate(0deg)'
            : 'rotate(180deg)';
        }
      });
    }
  }
}

// Include header and footer when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  // Include header
  await includeHTML('header-placeholder', 'components/header.html');

  // Include footer
  await includeHTML('footer-placeholder', 'components/footer.html');

  // Initialize mobile categories dropdown
  const mobileCategoriesDropdown = document.getElementById('mobileCategoriesDropdown');
  if (mobileCategoriesDropdown) {
    mobileCategoriesDropdown.classList.add('hidden');
  }
}); 
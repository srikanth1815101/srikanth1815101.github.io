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
              <button id="mobileMenuBtn" class="md:hidden flex items-center px-2 py-1 text-gray-700 hover:text-blue-700 focus:outline-none" aria-label="Open menu">
                <i data-lucide="menu" class="w-7 h-7"></i>
              </button>
            </nav>
            <div id="mobileMenu" class="md:hidden absolute top-full left-0 w-full bg-white/90 shadow-lg backdrop-blur-lg py-4 px-6 hidden flex-col gap-2 z-50">
              <a href="index.html" class="block py-2 text-base font-semibold text-gray-700 hover:text-blue-600 rounded transition-colors">Home</a>
              <button id="mobileCategoriesBtn" class="w-full text-left py-2 text-base font-medium text-gray-700 hover:text-blue-700 transition-colors flex items-center gap-1">
                Categories
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="mobileCategoriesDropdown" class="pl-4 hidden flex-col gap-1">
                <a href="category.html?id=image-tools" class="block py-1 text-gray-700 hover:bg-blue-50">Image Tools</a>
                <a href="category.html?id=seo-tools" class="block py-1 text-gray-700 hover:bg-blue-50">SEO Tools</a>
                <a href="category.html?id=text-tools" class="block py-1 text-gray-700 hover:bg-blue-50">Text Tools</a>
                <a href="category.html?id=developer-tools" class="block py-1 text-gray-700 hover:bg-blue-50">Developer Tools</a>
                <a href="category.html?id=math-calculators" class="block py-1 text-gray-700 hover:bg-blue-50">Math & Calculators</a>
                <a href="category.html?id=unit-converters" class="block py-1 text-gray-700 hover:bg-blue-50">Unit Converters</a>
                <a href="category.html?id=security-tools" class="block py-1 text-gray-700 hover:bg-blue-50">Security & Encryption</a>
                <a href="category.html?id=social-media-tools" class="block py-1 text-gray-700 hover:bg-blue-50">Social Media Tools</a>
                <a href="category.html?id=misc-tools" class="block py-1 text-gray-700 hover:bg-blue-50">Miscellaneous Tools</a>
              </div>
              <a href="blog.html" class="block py-2 text-base font-semibold text-gray-700 hover:text-blue-600 rounded transition-colors">Blog</a>
              <a href="about.html" class="block py-2 text-base font-semibold text-gray-700 hover:text-blue-600 rounded transition-colors">About Us</a>
              <a href="contact.html" class="block py-2 text-base font-semibold text-gray-700 hover:text-blue-600 rounded transition-colors">Contact Us</a>
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
          <div class="container mx-auto px-4 py-12">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <!-- Brand Section -->
              <div class="space-y-4">
                <a href="index.html" class="flex items-center gap-3 group">
                  <img src="logo.png" alt="CSRGO Logo" class="h-14 w-auto object-contain" />
                  <span class="nav-divider mx-1"></span>
                  <span class="nav-tools-text text-3xl font-bold">CSRGO Tools</span>
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

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileCategoriesBtn = document.getElementById('mobileCategoriesBtn');
  const mobileCategoriesDropdown = document.getElementById('mobileCategoriesDropdown');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
  
  if (mobileCategoriesBtn && mobileCategoriesDropdown) {
    mobileCategoriesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mobileCategoriesDropdown.classList.toggle('hidden');
    });
  }
}

// Include header and footer when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  // Include header
  await includeHTML('header-placeholder', 'components/header.html');
  
  // Include footer
  await includeHTML('footer-placeholder', 'components/footer.html');
}); 
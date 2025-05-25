// Function to include HTML components
function includeHTML(elementId, path) {
  const element = document.getElementById(elementId);
  if (!element) return;

  // For local development, directly include the HTML
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
      <footer class="bg-white border-t py-6 text-center text-gray-400 text-sm">
        &copy; <span id="year"></span> CSRGO Tools. All rights reserved.
      </footer>
    `;
    document.getElementById('year').textContent = new Date().getFullYear();
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
document.addEventListener('DOMContentLoaded', () => {
  // Include header
  includeHTML('header-placeholder', 'components/header.html');
  
  // Include footer
  includeHTML('footer-placeholder', 'components/footer.html');
}); 
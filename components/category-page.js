// Function to initialize the category page
function initCategoryPage(categoryId, categoryName, categoryDescription, categoryIcon, categoryColor) {
  // Set page title
  document.title = `${categoryName} - CSRGO Tools`;

  // Create hero section with modern styling
  const heroSection = document.createElement('section');
  heroSection.className = 'pt-28 pb-16 px-4 relative overflow-hidden';
  heroSection.innerHTML = `
    <div class="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
    <div class="container mx-auto text-center relative z-10">
      <div class="flex justify-center mb-6">
        <div class="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center animate-float">
          <i data-lucide="${categoryIcon}" class="w-10 h-10 text-white"></i>
        </div>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in animate-hero-heading" style="animation-delay:0.2s;">
        <span class="gradient-logo-text">${categoryName}</span>
      </h1>
      <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
        ${categoryDescription}
      </p>
      <div class="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in animate-hero-search" style="animation-delay:0.6s;">
        <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm whitespace-nowrap">
          <i data-lucide="shield" class="w-4 h-4 text-green-500"></i>
          <span class="text-sm font-medium text-gray-700">Secure Tools</span>
        </div>
        <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm whitespace-nowrap">
          <i data-lucide="zap" class="w-4 h-4 text-yellow-500"></i>
          <span class="text-sm font-medium text-gray-700">Instant Results</span>
        </div>
        <div class="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm whitespace-nowrap">
          <i data-lucide="globe" class="w-4 h-4 text-blue-500"></i>
          <span class="text-sm font-medium text-gray-700">Browser-based</span>
        </div>
      </div>
      <div id="tools-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>
    </div>
  `;

  // Insert hero section after header
  const headerPlaceholder = document.getElementById('header-placeholder');
  headerPlaceholder.parentNode.insertBefore(heroSection, headerPlaceholder.nextSibling);

  // Initialize Lucide icons
  lucide.createIcons();

  // Include header and footer with correct paths
  includeHTML('header-placeholder', '../components/header.html');
  includeHTML('footer-placeholder', '../components/footer.html');

  // Render tools
  renderTools(categoryId);
}

// Function to render tools for the category
function renderTools(categoryId) {
  const toolsInCategory = tools.filter(t => t.category === categoryId);
  const grid = document.getElementById('tools-grid');
  
  if (toolsInCategory.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12">
        <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
          <i data-lucide="alert-circle" class="w-8 h-8 text-gray-400"></i>
        </div>
        <p class="text-gray-400 text-lg">No tools found in this category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = toolsInCategory.map((tool, idx) => `
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 transition-all duration-300 hover:shadow-md hover:border-blue-100 focus:ring-2 focus:ring-blue-200 outline-none">
      ${window.renderToolItem(tool, idx)}
    </div>
  `).join('');

  lucide.createIcons();

  // Add other categories section
  renderOtherCategories(categoryId);
}

// Function to render other categories section
function renderOtherCategories(currentCategoryId) {
  // Get categories from app.js
  const categories = window.categories || [];
  // Filter out current category
  const otherCategories = categories.filter(cat => cat.id !== currentCategoryId);
  // Create other categories section
  const otherCategoriesSection = document.createElement('section');
  otherCategoriesSection.className = 'py-20 px-4 relative overflow-hidden';
  otherCategoriesSection.innerHTML = `
    <div class="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
    <div class="container mx-auto relative">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-logo-text">Browse Other Categories</span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Explore our collection of powerful tools organized by category
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        ${otherCategories.map(category => `
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 transition-all duration-300 hover:shadow-md hover:border-blue-100">
            <div class="flex flex-col items-center text-center">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center ${category.color} mb-4">
                <i data-lucide="${category.icon}" class="w-6 h-6"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">${category.name}</h3>
              <p class="text-gray-600 text-sm mb-4">${category.description}</p>
              <a href="../categories/${category.id}.html" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium text-sm hover:bg-blue-100 transition-colors">
                View all tools
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  // Insert after tools grid
  const toolsGrid = document.getElementById('tools-grid');
  toolsGrid.parentNode.insertBefore(otherCategoriesSection, toolsGrid.nextSibling);
  // Initialize Lucide icons for the new section
  lucide.createIcons();
}

// Helper function to get category descriptions
function getCategoryDescription(categoryId) {
  const descriptions = {
    'image-tools': 'Convert, resize, and optimize your images',
    'text-tools': 'Format, analyze, and transform your text',
    'developer-tools': 'Essential tools for web development',
    'math-calculators': 'Perform complex calculations and conversions',
    'unit-converters': 'Convert between different units of measurement',
    'security-tools': 'Keep your data safe and secure',
    'misc-tools': 'Various useful tools and utilities'
  };
  return descriptions[categoryId] || 'Explore our collection of tools';
}

// Add required styles
const style = document.createElement('style');
style.textContent = `
  /* Gradient Background */
  .gradient-bg {
    background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  }

  /* Gradient Text */
  .gradient-logo-text {
    background-image: linear-gradient(90deg, var(--csrgo-purple) 10%, var(--csrgo-blue) 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 800;
    letter-spacing: -0.01em;
    text-shadow: 0 2px 8px rgba(124,58,237,0.08);
  }

  /* Card Hover Effects */
  .card-hover {
    transition: all 0.3s ease;
  }
  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  /* Animations */
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .animate-fade-in {
    opacity: 0;
    animation: fadeIn 0.6s ease-out forwards;
  }
  .animate-hero-heading {
    animation: heroHeading 1s cubic-bezier(0.4,0,0.2,1) forwards;
  }
  .animate-hero-desc {
    animation: heroDesc 0.8s 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
  }
  .animate-hero-search {
    animation: heroSearch 0.9s 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
  }

  /* Keyframes */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes heroHeading {
    0% { opacity: 0; transform: scale(0.95) translateY(20px); filter: brightness(0.8); }
    60% { opacity: 1; transform: scale(1.03) translateY(-2px); filter: brightness(1.1); }
    100% { opacity: 1; transform: scale(1) translateY(0); filter: brightness(1); }
  }
  @keyframes heroDesc {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes heroSearch {
    0% { opacity: 0; transform: translateY(20px) scale(0.98); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Drop Zone */
  .drop-zone-active {
    border-color: #3B82F6 !important;
    background-color: #EFF6FF;
  }
`;
document.head.appendChild(style); 
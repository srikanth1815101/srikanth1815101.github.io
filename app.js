// ---- DATA ----
const categories = [
  {
    id: 'text-tools',
    name: 'Text Tools',
    description: 'Tools for text manipulation and conversion',
    icon: 'type',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'pdf-tools',
    name: 'PDF Tools',
    description: 'Work with PDF files easily',
    icon: 'file-text',
    color: 'bg-red-50 text-red-600',
  },
  {
    id: 'image-tools',
    name: 'Image Tools',
    description: 'Edit and convert images online',
    icon: 'image',
    color: 'bg-green-50 text-green-600',
  },
  {
    id: 'ai-tools',
    name: 'AI Tools',
    description: 'Leverage AI for various tasks',
    icon: 'brain',
    color: 'bg-purple-50 text-purple-600',
  },
];

const tools = [
  // Text Tools
  {
    id: 'text-converter',
    name: 'Text Converter',
    description: 'Convert text between different formats',
    icon: 'type',
    url: 'tool.html',
    category: 'text-tools',
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text between different cases',
    icon: 'type',
    url: 'tool.html',
    category: 'text-tools',
  },
  // PDF Tools
  {
    id: 'pdf-merger',
    name: 'PDF Merger',
    description: 'Merge multiple PDFs into one',
    icon: 'file-text',
    url: 'tool.html',
    category: 'pdf-tools',
  },
  {
    id: 'pdf-splitter',
    name: 'PDF Splitter',
    description: 'Split PDF into multiple files',
    icon: 'file-text',
    url: 'tool.html',
    category: 'pdf-tools',
  },
  // Image Tools
  {
    id: 'image-resizer',
    name: 'Image Resizer',
    description: 'Resize images online',
    icon: 'image',
    url: 'tool.html',
    category: 'image-tools',
  },
  {
    id: 'image-converter',
    name: 'Image Converter',
    description: 'Convert images between formats',
    icon: 'image',
    url: 'tool.html',
    category: 'image-tools',
  },
  // AI Tools
  {
    id: 'ai-summarizer',
    name: 'AI Summarizer',
    description: 'Summarize text using AI',
    icon: 'brain',
    url: 'tool.html',
    category: 'ai-tools',
  },
  {
    id: 'ai-writer',
    name: 'AI Writer',
    description: 'Generate text using AI',
    icon: 'brain',
    url: 'tool.html',
    category: 'ai-tools',
  },
];

// ---- HELPERS ----
function getToolsByCategory(categoryId) {
  return tools.filter(t => t.category === categoryId);
}
function getToolsBySearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return tools.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q)
  );
}

// ---- RENDERING ----
function renderCategories() {
  const section = document.getElementById('categoriesSection');
  section.innerHTML = `
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Browse by Categories</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Find the perfect tool for your task from our collection of free online utilities
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        ${categories.map(cat => renderCategoryCard(cat)).join('')}
      </div>
    </div>
  `;
  lucide.createIcons();
}

function renderCategoryCard(category) {
  const toolsInCat = getToolsByCategory(category.id);
  const previewTools = toolsInCat.slice(0, 2);
  return `
    <div class="group relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-100">
      <div class="absolute top-0 right-0 w-24 h-24 opacity-5 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none select-none">
        <i data-lucide="${category.icon}" class="w-full h-full"></i>
      </div>
      <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${category.color}">
        <i data-lucide="${category.icon}" class="w-6 h-6"></i>
      </div>
      <h3 class="text-xl font-bold mb-2">${category.name}</h3>
      <p class="text-gray-600 text-sm mb-6">${category.description}</p>
      <div class="space-y-2">
        ${previewTools.map(tool => renderToolItem(tool)).join('')}
        <div class="pt-4 mt-4 border-t border-gray-100">
          <a href="category.html?id=${category.id}" class="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group/link">
            <span>View all tools</span>
            <div class="flex items-center gap-1">
              <span class="text-blue-500">${toolsInCat.length}</span>
              <span class="transform transition-transform group-hover/link:translate-x-0.5">→</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderToolItem(tool) {
  return `
    <a href="${tool.url}" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
      <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors">
        <i data-lucide="${tool.icon}" class="w-4 h-4 text-gray-600"></i>
      </div>
      <div>
        <span class="font-medium text-gray-900">${tool.name}</span>
        <p class="text-xs text-gray-500 mt-0.5">${tool.description}</p>
      </div>
    </a>
  `;
}

function renderSearchResults(results, query) {
  const section = document.getElementById('searchResults');
  if (!query.trim()) {
    section.innerHTML = '';
    return;
  }
  const displayResults = results.slice(0, 3);
  section.innerHTML = `
    <div class="container mx-auto py-8 px-4">
      <h2 class="text-lg font-semibold mb-4">
        ${displayResults.length > 0
          ? `Results for "${query}" (${displayResults.length})`
          : `No results found for "${query}"`}
      </h2>
      ${displayResults.length > 0
        ? `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${displayResults.map(tool => renderToolCard(tool)).join('')}
          </div>`
        : `<div class="bg-gray-50 rounded-lg p-8 text-center">
            <p class="text-gray-500">
              No tools match your search. Try different keywords or browse categories below.
            </p>
          </div>`
      }
    </div>
  `;
  lucide.createIcons();
}

function renderToolCard(tool) {
  const category = categories.find(c => c.id === tool.category);
  return `
    <a href="${tool.url}" class="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 transition-all duration-300 hover:shadow-md hover:border-blue-100 focus:ring-2 focus:ring-blue-200 outline-none">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-gray-50">
          <i data-lucide="${tool.icon}" class="w-7 h-7 text-blue-500"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-lg text-gray-900">${tool.name}</div>
          <div class="text-gray-500 text-base mt-1">${tool.description}</div>
        </div>
      </div>
      <hr class="my-4 border-gray-100">
      <div class="text-sm text-gray-400">Category: ${category ? category.name : ''}</div>
    </a>
  `;
}

// ---- INTERACTIVITY ----
function setupSearch() {
  const input = document.getElementById('searchInput');
  const form = document.getElementById('searchForm');
  let lastQuery = '';

  input.addEventListener('input', (e) => {
    const query = e.target.value;
    lastQuery = query;
    renderSearchResults(getToolsBySearch(query), query);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderSearchResults(getToolsBySearch(lastQuery), lastQuery);
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  setupSearch();
  lucide.createIcons();
}); 
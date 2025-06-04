// Similar Tools Section for CSRGO Tool Pages
(function() {
  // Utility: Get current tool info from window.CSRGO_TOOL_INFO
  function getCurrentTool() {
    return window.CSRGO_TOOL_INFO || null;
  }
  // Utility: Get tools by category, excluding current tool
  function getSimilarTools(currentTool) {
    if (!currentTool || !currentTool.category) return [];
    
    // Get all tools in the same category except current tool
    const similarTools = (window.tools || []).filter(t =>
      t.category === currentTool.category &&
      t.url !== currentTool.url &&
      t.name !== currentTool.name
    );

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = similarTools.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [similarTools[i], similarTools[j]] = [similarTools[j], similarTools[i]];
    }

    // Return first 2 tools from shuffled array
    return similarTools.slice(0, 2);
  }
  // Utility: Get category info
  function getCategory(catId) {
    return (window.categories || []).find(c => c.id === catId);
  }
  // Render a tool card (compact style)
  function renderToolCard(tool, idx) {
    const colorPalette = [
      "bg-blue-50 text-blue-600",
      "bg-green-50 text-green-600",
      "bg-yellow-50 text-yellow-600",
      "bg-purple-50 text-purple-600",
      "bg-pink-50 text-pink-600",
      "bg-orange-50 text-orange-600",
      "bg-red-50 text-red-600",
      "bg-indigo-50 text-indigo-600",
      "bg-gray-50 text-gray-600"
    ];
    const colorClass = colorPalette[idx % colorPalette.length];
    const isFileProtocol = location.protocol === 'file:';
    let link;
    if (isFileProtocol) {
      // If current path includes /tools/, strip the tools/ prefix from tool.url
      if (location.pathname.includes('/tools/')) {
        link = tool.url.replace(/^tools\//, '').replace(/^tools\//, '');
      } else {
        link = tool.url;
      }
    } else {
      link = '/' + tool.url;
    }
    return `
      <a href="${link}" class="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}">
          <i data-lucide="${tool.icon}" class="w-5 h-5"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-base text-gray-900">${tool.name}</div>
          <div class="text-gray-500 text-sm mt-0.5">${tool.description}</div>
        </div>
      </a>
    `;
  }
  // Main render function
  function renderSimilarTools() {
    const currentTool = getCurrentTool();
    if (!currentTool) return;
    const similarTools = getSimilarTools(currentTool);
    if (!similarTools.length) return;
    const category = getCategory(currentTool.category);
    // Section HTML
    const section = document.createElement('section');
    section.id = 'similarToolsSection';
    section.className = 'mt-12 mb-24';
    section.innerHTML = `
      <div class="container mx-auto max-w-4xl px-4 pb-12">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <i data-lucide="sparkles" class="w-6 h-6 text-yellow-400"></i>
          Similar Tools
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          ${similarTools.map((tool, idx) => renderToolCard(tool, idx)).join('')}
          <a href="../category.html?id=${category ? category.id : ''}" class="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] shadow-sm hover:shadow-md transition-all">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
              <i data-lucide="arrow-right" class="w-5 h-5 text-white"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-semibold text-base text-white">View all ${category ? category.name : 'tools'}</div>
            </div>
          </a>
        </div>
      </div>
    `;
    // Insert after tool UI or into #similarToolsSection
    let target = document.getElementById('similarToolsSection');
    if (target) {
      target.innerHTML = '';
      target.appendChild(section.firstElementChild);
    } else {
      // Try to insert after main tool UI (assume #toolUI or main)
      const toolUI = document.getElementById('toolUI') || document.querySelector('main') || document.body;
      toolUI.parentNode.insertBefore(section, toolUI.nextSibling);
    }
    if (window.lucide) lucide.createIcons();
  }
  // On DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSimilarTools);
  } else {
    renderSimilarTools();
  }
})(); 
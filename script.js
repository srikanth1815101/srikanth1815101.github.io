// No imports needed; lucide is available globally

// State management
let darkMode = false;
let scrollY = 0;

// Data
const subdomains = [
    {
        title: 'Tools',
        url: 'tools.csrgo.com',
        description: 'Browser-based online utilities like formatters, converters, calculators, and more.',
        icon: 'wrench',
        gradient: 'from-emerald-400 to-teal-600',
        bgGradient: 'from-emerald-50 to-teal-50',
        darkBgGradient: 'from-emerald-900/20 to-teal-900/20',
        available: true
    },
    {
        title: 'Blog',
        url: 'blog.csrgo.com',
        description: 'Wide range of blog posts on tech, productivity, philosophy, coding, and more.',
        icon: 'book-open',
        gradient: 'from-orange-400 to-red-600',
        bgGradient: 'from-orange-50 to-red-50',
        darkBgGradient: 'from-orange-900/20 to-red-900/20',
        available: true
    },
    {
        title: 'Services',
        url: 'services.csrgo.com',
        description: 'Fast, secure, and modern digital solutions for websites, apps, Shopify setup, and creative content.',
        icon: 'briefcase',
        gradient: 'from-blue-400 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50',
        darkBgGradient: 'from-blue-900/20 to-indigo-900/20',
        available: true
    }
];

// DOM Elements
const root = document.getElementById('root');

// Event Listeners
window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    updateBackgroundTransform();
});

// Dark mode toggle
function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    renderApp();
}

// Scroll to projects
function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
}

// Update background transform based on scroll
function updateBackgroundTransform() {
    const bgElement = document.querySelector('.scroll-bg');
    if (bgElement) {
        bgElement.style.transform = `translateY(${scrollY * 0.5}px) skewY(-12deg)`;
    }
}

// Render functions
function renderHeader() {
    return `
        <header class="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 transition-all duration-300">
            <div class="max-w-7xl mx-auto">
                <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg shadow-purple-500/10 dark:shadow-purple-400/10">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-2 sm:space-x-3 group">
                            <div class="relative">
                                <img src="./logo.png" alt="CSRGO" class="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:scale-110" />
                                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </div>
                        </div>
                        <button
                            onclick="toggleDarkMode()"
                            class="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-800/40 dark:to-blue-800/40 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-700/50 dark:hover:to-blue-700/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            ${darkMode ? 
                                '<i data-lucide="sun" class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"></i>' : 
                                '<i data-lucide="moon" class="w-4 h-4 sm:w-5 sm:h-5 text-purple-600"></i>'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </header>
    `;
}

function renderHeroSection() {
    return `
        <section class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16 pb-8">
            <div class="max-w-5xl mx-auto text-center relative w-full">
                <!-- Floating Elements -->
                <div class="absolute -top-10 -left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
                <div class="absolute -top-5 -right-5 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-bounce"></div>
                <div class="absolute top-1/2 -left-8 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-bounce"></div>
                
                <div class="mb-6 sm:mb-8 flex justify-center animate-fade-in">
                    <div class="relative group">
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl transform scale-110"></div>
                        <img 
                            src="./logo.png" 
                            alt="CSRGO" 
                            class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" 
                        />
                    </div>
                </div>
                
                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 animate-slide-up">
                    <span class="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">
                        CSRGO
                    </span>
                </h1>
                
                <div class="space-y-3 sm:space-y-4 md:space-y-5 animate-slide-up">
                    <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-gray-100 font-semibold px-2">
                        A Collective of Tools, Ideas, and Creative Projects
                    </p>
                    
                    <p class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                        CSRGO is a digital ecosystem of open tools, thoughtful content, and a creative journey. 
                        Explore our growing suite of apps, blogs, and personal projects—all in one place.
                    </p>
                </div>
                
                <div class="mt-6 sm:mt-8 md:mt-10 animate-slide-up">
                    <button
                        onclick="scrollToProjects()"
                        class="group relative inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40"
                    >
                        <span>Explore Projects</span>
                        <i data-lucide="chevron-down" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-y-1 transition-transform"></i>
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </button>
                </div>
            </div>
        </section>
    `;
}

function renderProjectsSection() {
    return `
        <section id="projects" class="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-10">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <p class="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
                        Discover our collection of live tools and platforms, each designed to solve real problems and enhance productivity.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    ${subdomains.map((subdomain, index) => `
                        <div
                            class="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:rotate-1 border border-gray-100 dark:border-gray-700 overflow-hidden"
                            style="animation-delay: ${index * 0.1}s"
                        >
                            <div class="absolute inset-0 bg-gradient-to-br ${subdomain.bgGradient} dark:${subdomain.darkBgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div class="relative z-10">
                                <div class="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                                    <div class="p-2.5 sm:p-3 bg-gradient-to-r ${subdomain.gradient} rounded-lg sm:rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                        <i data-lucide="${subdomain.icon}" class="w-5 h-5 sm:w-6 sm:h-6 text-white"></i>
                                    </div>
                                    <div class="flex items-center space-x-1.5 sm:space-x-2">
                                        <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-green-100 dark:bg-green-800/40 text-green-700 dark:text-green-300 text-xs font-bold rounded-full">
                                            Live
                                        </span>
                                    </div>
                                </div>
                                
                                <h3 class="text-lg sm:text-xl font-black mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    ${subdomain.title}
                                </h3>
                                
                                <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                    ${subdomain.description}
                                </p>
                                
                                <div class="flex flex-row items-center justify-between gap-2 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <span class="text-xs text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-700/50 px-2 sm:px-2.5 py-1 rounded-lg inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                        ${subdomain.url}
                                    </span>
                                    <a href="https://${subdomain.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-1.5 sm:space-x-2 bg-gradient-to-r ${subdomain.gradient} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex-shrink-0">
                                        <span>Visit</span>
                                        <i data-lucide="external-link" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderGamesSection() {
    return `
        <section class="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-900/10 dark:to-blue-900/10"></div>
            <div class="max-w-7xl mx-auto relative">
                <div class="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900 dark:text-white">
                        Coming Soon
                    </h2>
                    <p class="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
                        A dedicated Java DSA platform that is 100% free, secure, and requires no logins or accounts.
                    </p>
                </div>
                
                <div class="flex justify-center">
                    <div class="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-all duration-500 max-w-md w-full mx-2 sm:mx-0">
                        <!-- Animated Background -->
                        <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
                        <div class="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        
                        <!-- Content -->
                        <div class="relative z-10 text-center">
                            <div class="flex justify-center mb-6 sm:mb-8">
                                <div class="p-4 sm:p-5 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-800/40 dark:to-blue-800/40 rounded-2xl sm:rounded-3xl group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-blue-200 dark:group-hover:from-purple-700/50 dark:group-hover:to-blue-700/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                                    <i data-lucide="code-2" class="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors"></i>
                                </div>
                            </div>
                            
                            <div class="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
                                <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-400 rounded-full animate-pulse"></div>
                                <span class="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-orange-100 dark:bg-orange-800/40 text-orange-700 dark:text-orange-300 text-xs sm:text-sm font-bold rounded-full">
                                    Coming Soon
                                </span>
                            </div>
                            
                            <h3 class="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gray-900 dark:text-white">
                                DSA Platform
                            </h3>
                            
                            <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2">
                                Practice data structures and algorithms in Java with ready-to-download starter code you can run locally. Seamless learning with zero sign-ups—just open the repo and start coding.
                            </p>
                            
                            <div class="flex items-center justify-center mb-4 sm:mb-6">
                                <div class="px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-100 dark:bg-gray-700/50 rounded-lg sm:rounded-xl">
                                    <span class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-mono break-all">
                                        dsa.csrgo.com
                                    </span>
                                </div>
                            </div>

                            <!-- Platform Features Preview -->
                            <div class="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                                <div class="p-2 sm:p-3 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg sm:rounded-xl">
                                    <div class="flex justify-center mb-1.5 sm:mb-2">
                                        <i data-lucide="coffee" class="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-300"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">Pure Java</span>
                                </div>
                                <div class="p-2 sm:p-3 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg sm:rounded-xl">
                                    <div class="flex justify-center mb-1.5 sm:mb-2">
                                        <i data-lucide="lock" class="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 dark:text-orange-300"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">No Login</span>
                                </div>
                                <div class="p-2 sm:p-3 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg sm:rounded-xl">
                                    <div class="flex justify-center mb-1.5 sm:mb-2">
                                        <i data-lucide="download" class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-300"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">Starter Code</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Loading Animation -->
                        <div class="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 overflow-hidden rounded-b-2xl sm:rounded-b-3xl">
                            <div class="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-2000 ease-out"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderFooter() {
    const currentYear = new Date().getFullYear();
    return `
        <footer class="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
            
            <div class="max-w-7xl mx-auto relative">
                <div class="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-white">
                        Get in Touch
                    </h2>
                    <p class="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
                        Have questions, suggestions, or want to collaborate? We'd love to hear from you.
                    </p>
                    
                    <a
                        href="mailto:contact@csrgo.com"
                        class="group inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-purple-500/25"
                    >
                        <i data-lucide="mail" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform"></i>
                        <span class="text-xs sm:text-sm md:text-base break-all sm:break-normal">contact.csrgo@gmail.com</span>
                    </a>
                </div>
                
                <div class="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-10 md:pt-12 border-t border-gray-700">
                    <div class="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-0">
                        <img src="./logo.png" alt="CSRGO" class="w-6 h-6 sm:w-8 sm:h-8" />
                        <span class="text-gray-400 text-sm sm:text-base md:text-lg">
                            © ${currentYear} CSRGO. All rights reserved.
                        </span>
                    </div>
                    
                    <div class="flex items-center space-x-4 sm:space-x-6">
                        ${[
                            { icon: 'user', href: 'https://resume.csrgo.com/' },
                            { icon: 'linkedin', href: 'https://www.linkedin.com/in/csrsrikanthreddy/' }
                        ].map(social => `
                            <a 
                                href="${social.href}" 
                                class="p-2 sm:p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 text-gray-400 hover:text-white rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                            >
                                <i data-lucide="${social.icon}" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </footer>
    `;
}

function renderApp() {
    const app = `
        <div class="${darkMode ? 'dark' : ''} min-h-screen transition-all duration-500">
            <!-- Animated Background -->
            <div class="fixed inset-0 -z-10">
                <div class="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/50 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"></div>
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
                <div 
                    class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/20 to-transparent dark:via-purple-400/5 transform -skew-y-12 animate-pulse scroll-bg"
                ></div>
            </div>

            ${renderHeader()}
            ${renderHeroSection()}
            ${renderProjectsSection()}
            ${renderGamesSection()}
            ${renderFooter()}
        </div>
    `;
    
    root.innerHTML = app;
    if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons();
    }
}

// Initial render
renderApp();

// Make functions globally available
window.toggleDarkMode = toggleDarkMode;
window.scrollToProjects = scrollToProjects; 
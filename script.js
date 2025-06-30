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
        title: 'Portfolio',
        url: 'me.csrgo.com',
        description: 'My digital portfolio and resume, showcasing work, skills, and experience.',
        icon: 'user',
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
        <header class="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
            <div class="max-w-7xl mx-auto">
                <div class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 rounded-2xl px-6 py-4 shadow-lg shadow-purple-500/10 dark:shadow-purple-400/10">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-3 group">
                            <div class="relative">
                                <img src="./logo.png" alt="CSRGO" class="w-8 h-8 transition-transform group-hover:scale-110" />
                                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </div>
                        </div>
                        <button
                            onclick="toggleDarkMode()"
                            class="p-3 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-800/40 dark:to-blue-800/40 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-700/50 dark:hover:to-blue-700/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            ${darkMode ? 
                                '<i data-lucide="sun" class="w-5 h-5 text-yellow-400"></i>' : 
                                '<i data-lucide="moon" class="w-5 h-5 text-purple-600"></i>'
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
        <section class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div class="max-w-5xl mx-auto text-center relative">
                <!-- Floating Elements -->
                <div class="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
                <div class="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-bounce"></div>
                <div class="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-bounce"></div>
                
                <div class="mb-12 flex justify-center animate-fade-in">
                    <div class="relative group">
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl transform scale-110"></div>
                        <img 
                            src="./logo.png" 
                            alt="CSRGO" 
                            class="w-28 h-28 sm:w-36 sm:h-36 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" 
                        />
                    </div>
                </div>
                
                <h1 class="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 animate-slide-up">
                    <span class="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">
                        CSRGO
                    </span>
                </h1>
                
                <div class="space-y-6 animate-slide-up">
                    <p class="text-2xl sm:text-3xl text-gray-800 dark:text-gray-100 font-semibold">
                        A Collective of Tools, Ideas, and Creative Projects
                    </p>
                    
                    <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        CSRGO is a digital ecosystem of open tools, thoughtful content, and a creative journey. 
                        Explore our growing suite of apps, blogs, and personal projects—all in one place.
                    </p>
                </div>
                
                <div class="mt-12 animate-slide-up">
                    <button
                        onclick="scrollToProjects()"
                        class="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40"
                    >
                        <span>Explore Projects</span>
                        <i data-lucide="chevron-down" class="w-6 h-6 group-hover:translate-y-1 transition-transform"></i>
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </button>
                </div>
            </div>
        </section>
    `;
}

function renderProjectsSection() {
    return `
        <section id="projects" class="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <h2 class="text-4xl sm:text-5xl font-black mb-6 text-gray-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Discover our collection of live tools and platforms, each designed to solve real problems and enhance productivity.
                    </p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${subdomains.map((subdomain, index) => `
                        <div
                            class="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-gray-100 dark:border-gray-700 overflow-hidden"
                            style="animation-delay: ${index * 0.1}s"
                        >
                            <div class="absolute inset-0 bg-gradient-to-br ${subdomain.bgGradient} dark:${subdomain.darkBgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div class="relative z-10">
                                <div class="flex items-center justify-between mb-8">
                                    <div class="p-4 bg-gradient-to-r ${subdomain.gradient} rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                        <i data-lucide="${subdomain.icon}" class="w-8 h-8 text-white"></i>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span class="px-3 py-1 bg-green-100 dark:bg-green-800/40 text-green-700 dark:text-green-300 text-sm font-bold rounded-full">
                                            Live
                                        </span>
                                    </div>
                                </div>
                                
                                <h3 class="text-2xl font-black mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    ${subdomain.title}
                                </h3>
                                
                                <p class="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                                    ${subdomain.description}
                                </p>
                                
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-lg">
                                        ${subdomain.url}
                                    </span>
                                    <a href="https://${subdomain.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 bg-gradient-to-r ${subdomain.gradient} text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
                                        <span>Visit</span>
                                        <i data-lucide="external-link" class="w-4 h-4"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderGamesSection() {
    return `
        <section class="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-900/10 dark:to-blue-900/10"></div>
            <div class="max-w-7xl mx-auto relative">
                <div class="text-center mb-20">
                    <h2 class="text-4xl sm:text-5xl font-black mb-6 text-gray-900 dark:text-white">
                        Coming Soon
                    </h2>
                    <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Exciting gaming experiences currently in development. Get ready for some fun!
                    </p>
                </div>
                
                <div class="flex justify-center">
                    <div class="group relative bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-all duration-500 max-w-md w-full">
                        <!-- Animated Background -->
                        <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
                        <div class="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        
                        <!-- Content -->
                        <div class="relative z-10 text-center">
                            <div class="flex justify-center mb-8">
                                <div class="p-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-800/40 dark:to-blue-800/40 rounded-3xl group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-blue-200 dark:group-hover:from-purple-700/50 dark:group-hover:to-blue-700/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                                    <i data-lucide="gamepad-2" class="w-16 h-16 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors"></i>
                                </div>
                            </div>
                            
                            <div class="flex items-center justify-center space-x-2 mb-6">
                                <div class="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                                <span class="px-4 py-2 bg-orange-100 dark:bg-orange-800/40 text-orange-700 dark:text-orange-300 text-lg font-bold rounded-full">
                                    Coming Soon
                                </span>
                            </div>
                            
                            <h3 class="text-3xl font-black mb-6 text-gray-900 dark:text-white">
                                Games Hub
                            </h3>
                            
                            <p class="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                                A collection of engaging browser games including puzzles, arcade-style games, and strategy challenges. 
                                Perfect for quick entertainment breaks or deep gaming sessions.
                            </p>
                            
                            <div class="flex items-center justify-center mb-8">
                                <div class="px-6 py-3 bg-gray-100 dark:bg-gray-700/50 rounded-xl">
                                    <span class="text-lg text-gray-600 dark:text-gray-400 font-mono">
                                        games.csrgo.com
                                    </span>
                                </div>
                            </div>

                            <!-- Game Features Preview -->
                            <div class="grid grid-cols-3 gap-4 text-center">
                                <div class="p-3 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl">
                                    <div class="text-2xl mb-2">🧩</div>
                                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Puzzles</span>
                                </div>
                                <div class="p-3 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl">
                                    <div class="text-2xl mb-2">⚡</div>
                                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Arcade</span>
                                </div>
                                <div class="p-3 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl">
                                    <div class="text-2xl mb-2">🎯</div>
                                    <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Strategy</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Loading Animation -->
                        <div class="absolute bottom-0 left-0 right-0 h-2 bg-gray-200 dark:bg-gray-700 overflow-hidden rounded-b-3xl">
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
        <footer class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
            
            <div class="max-w-7xl mx-auto relative">
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl font-black mb-6 text-white">
                        Get in Touch
                    </h2>
                    <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Have questions, suggestions, or want to collaborate? We'd love to hear from you.
                    </p>
                    
                    <a
                        href="mailto:contact@csrgo.com"
                        class="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-purple-500/25"
                    >
                        <i data-lucide="mail" class="w-6 h-6 group-hover:rotate-12 transition-transform"></i>
                        <span>contact@csrgo.com</span>
                    </a>
                </div>
                
                <div class="flex flex-col sm:flex-row justify-between items-center pt-12 border-t border-gray-700">
                    <div class="flex items-center space-x-4 mb-6 sm:mb-0">
                        <img src="./logo.png" alt="CSRGO" class="w-8 h-8" />
                        <span class="text-gray-400 text-lg">
                            © ${currentYear} CSRGO. All rights reserved.
                        </span>
                    </div>
                    
                    <div class="flex items-center space-x-6">
                        ${[
                            { icon: 'github', href: '#' },
                            { icon: 'twitter', href: '#' },
                            { icon: 'linkedin', href: '#' }
                        ].map(social => `
                            <a 
                                href="${social.href}" 
                                class="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 text-gray-400 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                            >
                                <i data-lucide="${social.icon}" class="w-6 h-6"></i>
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
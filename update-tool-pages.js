const fs = require('fs');
const path = require('path');

// List of all tool names (same as in generate-tools.js)
const tools = [
  // Image Tools
  "Image Resizer",
  "Image Compressor",
  "Image Cropper",
  "Convert Image to Base64",
  "Convert WebP to PNG",
  "GIF Maker",
  "QR Code Generator",
  "Screenshot to PDF Converter",
  // SEO Tools
  "Meta Tag Generator",
  "Keyword Density Checker",
  "Sitemap Generator",
  "Robots.txt Generator",
  "Google Index Checker",
  "Domain Authority Checker",
  "Backlink Checker",
  "Page Speed Checker",
  "XML Sitemap Validator",
  "Mobile-Friendly Test",
  // Text Tools
  "Word Counter",
  "Character Counter",
  "Case Converter",
  "Plagiarism Checker",
  "Grammar Checker",
  "Text-to-Speech",
  "Speech-to-Text",
  "URL Encoder & Decoder",
  "Fancy Text Generator",
  "Random Text Generator",
  // Developer Tools
  "JSON Formatter",
  "HTML to Markdown Converter",
  "CSS Minifier",
  "JavaScript Minifier",
  "SQL Formatter",
  "HTACCESS Redirect Generator",
  "Markdown to HTML Converter",
  "Color Code Picker",
  "Base64 Encoder & Decoder",
  "IP Address Lookup",
  // Math & Calculators
  "Percentage Calculator",
  "Age Calculator",
  "BMI Calculator",
  "Loan EMI Calculator",
  "Scientific Calculator",
  "Discount Calculator",
  "Currency Converter",
  "Time Zone Converter",
  "Binary to Decimal Converter",
  "Tip Calculator",
  // Unit Converters
  "Length Converter",
  "Weight Converter",
  "Speed Converter",
  "Temperature Converter",
  "Volume Converter",
  "Data Storage Converter",
  "Energy Converter",
  "Pressure Converter",
  "Fuel Efficiency Converter",
  "Angle Converter",
  // Security & Encryption Tools
  "MD5 Hash Generator",
  "SHA256 Hash Generator",
  "Password Generator",
  "Random String Generator",
  "URL Shortener",
  "IP Geolocation Finder",
  "SSL Certificate Checker",
  "Whois Lookup",
  "HTTP Headers Checker",
  "Privacy Policy Generator",
  // Social Media Tools
  "YouTube Thumbnail Downloader",
  "Instagram Photo Downloader",
  "Twitter Video Downloader",
  "Facebook Video Downloader",
  "TikTok Video Downloader",
  "YouTube Tags Extractor",
  "Hashtag Generator",
  "Social Media Post Generator",
  "Emoji Keyboard",
  "Twitter Character Counter",
  // Miscellaneous Tools
  "Barcode Generator",
  "Meme Generator",
  "Resume Builder",
  "Invoice Generator",
  "Business Name Generator",
  "Lottery Number Generator",
  "Flip a Coin Simulator",
  "Random Number Generator",
  "Dice Roller Simulator",
  "Internet Speed Test",
  "Daily Planner Creator",
  "Wedding Invitation Generator",
  "Story Plot Generator",
  "E-book Creator",
  "AI Chatbot Demo",
  "IP Address Tracker",
  "Fake Address Generator",
  "Calculator for Electric Bills",
  "Leap Year Checker",
  "Name to Numerology Calculator"
];

// Converts tool name to kebab-case file name
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// HTML boilerplate template for each tool
function htmlTemplate(toolKey, toolTitle) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${toolTitle} - Free Online Tool | CSRGO Tools</title>
  <!-- Google Fonts: Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <!-- Custom CSS -->
  <link rel="stylesheet" href="../styles.css">
  <link rel="icon" href="https://csrgo.com/logo.png" type="image/png" sizes="32x32">
  <link rel="shortcut icon" href="https://csrgo.com/logo.png" type="image/png">
  <link rel="apple-touch-icon" href="https://csrgo.com/logo.png">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://csrgo.com/",
    "name": "CSRGO Tools",
    "logo": "https://csrgo.com/logo.png"
  }
  </script>
</head>
<body class="bg-gradient-to-b from-blue-50 via-white to-gray-50 min-h-screen flex flex-col">
  <!-- Header Placeholder -->
  <div id="header-placeholder"></div>

  <!-- Main Content -->
  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="pt-20 pb-8 px-4 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      <div class="container mx-auto text-center relative z-10" id="heroSection"></div>
    </section>

    <!-- Similar Tools Section Placeholder -->
    <div id="similarToolsSection"></div>

    <!-- What is tool? Section -->
    <section id="whatIsSection" class="py-16 px-4 bg-white"></section>

    <!-- Why use tool? Section -->
    <section id="whyUseSection" class="py-16 px-4"></section>

    <!-- How to use tool? Section -->
    <section id="howToUseSection" class="py-16 px-4 bg-white"></section>

    <!-- Features Section -->
    <section id="featuresSection" class="py-16 px-4"></section>

    <!-- FAQ Section -->
    <section id="faqSection" class="py-16 px-4 bg-white"></section>
  </main>

  <!-- Footer Placeholder -->
  <div id="footer-placeholder"></div>
  <!-- Floating Buttons Placeholder -->
  <div id="floating-buttons"></div>

  <!-- Scripts -->
  <script src="../app.js"></script>
  <script>
    // Set current tool info automatically by matching URL
    if (window.tools) {
      window.CSRGO_TOOL_INFO = window.tools.find(
        t => t.url === "tools/${toolKey}.html"
      );
    }
  </script>
  <script src="../components/include.js"></script>
  <script src="../components/similar-tools.js"></script>
  <script src="../tool-sections.js"></script>
  <script src="../components/floating-buttons.js"></script>
  <script>
    // Initialize Lucide icons
    lucide.createIcons();
    // Initialize tool sections
    document.addEventListener('DOMContentLoaded', () => {
      renderToolSections('${toolKey}');
    });
  </script>
</body>
</html>
`;
}

const toolsDir = path.join(__dirname, 'tools');
if (!fs.existsSync(toolsDir)) fs.mkdirSync(toolsDir);

tools.forEach(tool => {
  const toolKey = toKebabCase(tool);
  const filePath = path.join(toolsDir, `${toolKey}.html`);
  fs.writeFileSync(filePath, htmlTemplate(toolKey, tool));
  console.log(`Updated: ${filePath}`);
});

console.log('All tool HTML files updated with boilerplate!'); 
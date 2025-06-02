const fs = require('fs');
const path = require('path');

const tools = [
  // Image Tools
  "Image to PNG Converter",
  "Image to JPG Converter",
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

const htmlTemplate = (toolKey, toolTitle) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${toolTitle} - Free Online Tool | CSRGO Tools</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="stylesheet" href="../styles.css">
</head>
<body class="bg-gradient-to-b from-blue-50 via-white to-gray-50 min-h-screen flex flex-col">
  <div id="header-placeholder"></div>
  <main class="flex-grow">
    <section id="whatIsSection" class="py-16 px-4 bg-white"></section>
    <section id="whyUseSection" class="py-16 px-4"></section>
    <section id="howToUseSection" class="py-16 px-4 bg-white"></section>
    <section id="featuresSection" class="py-16 px-4"></section>
    <section id="faqSection" class="py-16 px-4 bg-white"></section>
  </main>
  <div id="footer-placeholder"></div>
  <script src="../app.js"></script>
  <script src="../components/include.js"></script>
  <div id="floating-buttons"></div>
  <script src="../components/floating-buttons.js"></script>
  <script src="../components/similar-tools.js"></script>
  <script>
    window.CSRGO_TOOL_NAME = '${toolKey}';
  </script>
  <script src="../tool-sections.js"></script>
</body>
</html>
`;

const toolsDir = path.join(__dirname, 'tools');
if (!fs.existsSync(toolsDir)) fs.mkdirSync(toolsDir);

tools.forEach(tool => {
  const toolKey = toKebabCase(tool);
  const filePath = path.join(toolsDir, `${toolKey}.html`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, htmlTemplate(toolKey, tool));
    console.log(`Created: ${filePath}`);
  } else {
    console.log(`Skipped (already exists): ${filePath}`);
  }
});

console.log('All tool files generated!');
// ---- DATA ----
window.categories = [
  {
    id: 'image-tools',
    name: 'Image Tools',
    description: 'Convert, resize, and manipulate images online',
    icon: 'image',
    color: 'bg-green-50 text-green-600',
  },
  {
    id: 'text-tools',
    name: 'Text Tools',
    description: 'Text manipulation and analysis tools',
    icon: 'type',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'math-calculators',
    name: 'Math & Calculators',
    description: 'Various calculators and mathematical tools',
    icon: 'calculator',
    color: 'bg-red-50 text-red-600',
  },
  {
    id: 'unit-converters',
    name: 'Unit Converters',
    description: 'Convert units easily',
    icon: 'ruler',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    id: 'seo-tools',
    name: 'SEO Tools',
    description: 'Optimize your website for search engines',
    icon: 'search',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 'developer-tools',
    name: 'Developer Tools',
    description: 'Essential tools for web developers',
    icon: 'code',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    id: 'security-tools',
    name: 'Security & Encryption',
    description: 'Tools for security and data encryption',
    icon: 'shield',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: 'social-media-tools',
    name: 'Social Media Tools',
    description: 'Tools for social media content and analysis',
    icon: 'share-2',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    id: 'misc-tools',
    name: 'Miscellaneous Tools',
    description: 'Various useful online tools',
    icon: 'wrench',
    color: 'bg-gray-50 text-gray-600',
  }
];

window.tools = [
  // Image Tools
  {
    id: 'image-to-png',
    name: 'Image to PNG Converter',
    description: 'Convert images to PNG format',
    icon: 'image',
    url: 'tools/image-to-png-converter.html',
    category: 'image-tools',
  },
  {
    id: 'image-to-jpg',
    name: 'Image to JPG Converter',
    description: 'Convert images to JPG format',
    icon: 'image',
    url: 'tools/image-to-jpg-converter.html',
    category: 'image-tools',
  },
  {
    id: 'image-resizer',
    name: 'Image Resizer',
    description: 'Resize images to desired dimensions',
    icon: 'scaling',
    url: 'tools/image-resizer.html',
    category: 'image-tools',
  },
  {
    id: 'image-compressor',
    name: 'Image Compressor',
    description: 'Compress images without losing quality',
    icon: 'image-upscale',
    url: 'tools/image-compressor.html',
    category: 'image-tools',
  },
  {
    id: 'image-cropper',
    name: 'Image Cropper',
    description: 'Crop images to desired size',
    icon: 'crop',
    url: 'tools/image-cropper.html',
    category: 'image-tools',
  },
  {
    id: 'image-to-base64',
    name: 'Convert Image to Base64',
    description: 'Convert images to Base64 string',
    icon: 'file-code',
    url: 'tools/convert-image-to-base64.html',
    category: 'image-tools',
  },
  {
    id: 'webp-to-png',
    name: 'Convert WebP to PNG',
    description: 'Convert WebP images to PNG format',
    icon: 'image',
    url: 'tools/convert-webp-to-png.html',
    category: 'image-tools',
  },
  {
    id: 'gif-maker',
    name: 'GIF Maker',
    description: 'Create animated GIFs from images',
    icon: 'image-play',
    url: 'tools/gif-maker.html',
    category: 'image-tools',
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Generate QR codes for any content',
    icon: 'qr-code',
    url: 'tools/qr-code-generator.html',
    category: 'image-tools',
  },
  {
    id: 'screenshot-to-pdf',
    name: 'Image to PDF Converter',
    description: 'Convert images to PDF format',
    icon: 'file',
    url: 'tools/image-to-pdf-converter.html',
    category: 'image-tools',
  },

  // SEO Tools
  {
    id: 'meta-tag-generator',
    name: 'Meta Tag Generator',
    description: 'Generate meta tags for your website',
    icon: 'tags',
    url: 'tools/meta-tag-generator.html',
    category: 'seo-tools',
  },
  {
    id: 'keyword-density',
    name: 'Keyword Density Checker',
    description: 'Check keyword density in your content',
    icon: 'bar-chart',
    url: 'tools/keyword-density-checker.html',
    category: 'seo-tools',
  },
  {
    id: 'sitemap-generator',
    name: 'Sitemap Generator',
    description: 'Generate XML sitemaps for your website',
    icon: 'network',
    url: 'tools/sitemap-generator.html',
    category: 'seo-tools',
  },
  {
    id: 'robots-generator',
    name: 'Robots.txt Generator',
    description: 'Generate robots.txt file for your website',
    icon: 'file-text',
    url: 'tools/robots-txt-generator.html',
    category: 'seo-tools',
  },
  {
    id: 'google-index-checker',
    name: 'Google Index Checker',
    description: 'Check if your page is indexed by Google',
    icon: 'search',
    url: 'tools/google-index-checker.html',
    category: 'seo-tools',
  },
  {
    id: 'domain-authority',
    name: 'Domain Authority Checker',
    description: 'Check domain authority score',
    icon: 'trending-up',
    url: 'tools/domain-authority-checker.html',
    category: 'seo-tools',
  },
  {
    id: 'backlink-checker',
    name: 'Backlink Checker',
    description: 'Check backlinks for your website',
    icon: 'link',
    url: 'tools/backlink-checker.html',
    category: 'seo-tools',
  },
  {
    id: 'page-speed',
    name: 'Page Speed Checker',
    description: 'Check your website loading speed',
    icon: 'gauge',
    url: 'tools/page-speed-checker.html',
    category: 'seo-tools',
  },
  {
    id: 'xml-validator',
    name: 'XML Sitemap Validator',
    description: 'Validate your XML sitemap',
    icon: 'check-circle',
    url: 'tools/xml-sitemap-validator.html',
    category: 'seo-tools',
  },
  {
    id: 'mobile-friendly',
    name: 'Mobile-Friendly Test',
    description: 'Test if your website is mobile-friendly',
    icon: 'smartphone',
    url: 'tools/mobile-friendly-test.html',
    category: 'seo-tools',
  },

  // Text Tools
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words in your text',
    icon: 'whole-word',
    url: 'tools/word-counter.html',
    category: 'text-tools',
  },
  {
    id: 'white-space-removal',
    name: 'White Space Removal',
    description: 'Remove extra spaces, tabs, and line breaks',
    icon: 'letter-text',
    url: 'tools/white-space-removal.html',
    category: 'text-tools',
    keywords: ['white space', 'text cleaning', 'format text', 'remove spaces', 'remove tabs', 'remove line breaks', 'text formatting', 'clean text']
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text between different cases',
    icon: 'type',
    url: 'tools/case-converter.html',
    category: 'text-tools',
  },
  {
    id: 'text-to-handwriting',
    name: 'Text to Handwriting Converter',
    description: 'Convert your text into realistic handwriting',
    icon: 'pen-tool',
    url: 'tools/text-to-handwriting.html',
    category: 'text-tools',
  },
  {
    id: 'grammar-checker',
    name: 'Grammar Checker',
    description: 'Check text for grammar errors',
    icon: 'check-circle',
    url: 'tools/grammar-checker.html',
    category: 'text-tools',
  },
  {
    id: 'text-to-speech',
    name: 'Text-to-Speech',
    description: 'Convert text to speech',
    icon: 'volume-2',
    url: 'tools/text-to-speech.html',
    category: 'text-tools',
  },
  {
    id: 'speech-to-text',
    name: 'Speech-to-Text',
    description: 'Convert speech to text',
    icon: 'mic',
    url: 'tools/speech-to-text.html',
    category: 'text-tools',
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder & Decoder',
    description: 'Encode or decode URLs',
    icon: 'link',
    url: 'tools/url-encoder-decoder.html',
    category: 'text-tools',
  },
  {
    id: 'fancy-text',
    name: 'Fancy Text Generator',
    description: 'Generate fancy text styles',
    icon: 'wand',
    url: 'tools/fancy-text-generator.html',
    category: 'text-tools',
  },
  {
    id: 'random-text',
    name: 'Random Text Generator',
    description: 'Generate random text',
    icon: 'shuffle',
    url: 'tools/random-text-generator.html',
    category: 'text-tools',
  },

  // Developer Tools
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format and validate JSON',
    icon: 'braces',
    url: 'tools/json-formatter.html',
    category: 'developer-tools',
  },
  {
    id: 'html-to-markdown',
    name: 'HTML to Markdown Converter',
    description: 'Convert HTML to Markdown',
    icon: 'code',
    url: 'tools/html-to-markdown-converter.html',
    category: 'developer-tools',
  },
  {
    id: 'css-minifier',
    name: 'CSS Minifier',
    description: 'Minify CSS code',
    icon: 'file-code',
    url: 'tools/css-minifier.html',
    category: 'developer-tools',
  },
  {
    id: 'js-minifier',
    name: 'JavaScript Minifier',
    description: 'Minify JavaScript code',
    icon: 'file-code-2',
    url: 'tools/javascript-minifier.html',
    category: 'developer-tools',
  },
  {
    id: 'sql-formatter',
    name: 'SQL Formatter',
    description: 'Format SQL queries',
    icon: 'database',
    url: 'tools/sql-formatter.html',
    category: 'developer-tools',
  },
  {
    id: 'htaccess-generator',
    name: 'HTACCESS Redirect Generator',
    description: 'Generate HTACCESS redirect rules',
    icon: 'file-code',
    url: 'tools/htaccess-redirect-generator.html',
    category: 'developer-tools',
  },
  {
    id: 'markdown-to-html',
    name: 'Markdown to HTML Converter',
    description: 'Convert Markdown to HTML',
    icon: 'code-xml',
    url: 'tools/markdown-to-html-converter.html',
    category: 'developer-tools',
  },
  {
    id: 'color-picker',
    name: 'Color Code Picker',
    description: 'Pick and convert color codes',
    icon: 'palette',
    url: 'tools/color-code-picker.html',
    category: 'developer-tools',
  },
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder & Decoder',
    description: 'Encode or decode Base64',
    icon: 'file-code',
    url: 'tools/base64-encoder-decoder.html',
    category: 'developer-tools',
  },
  {
    id: 'ip-lookup',
    name: 'IP Address Lookup',
    description: 'Look up IP address information',
    icon: 'globe',
    url: 'tools/ip-address-lookup.html',
    category: 'developer-tools',
  },

  // Math & Calculators
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages',
    icon: 'percent',
    url: 'tools/percentage-calculator.html',
    category: 'math-calculators',
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate age from birth date',
    icon: 'calendar',
    url: 'tools/age-calculator.html',
    category: 'math-calculators',
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate Body Mass Index',
    icon: 'scale',
    url: 'tools/bmi-calculator.html',
    category: 'math-calculators',
  },
  {
    id: 'loan-calculator',
    name: 'Loan EMI Calculator',
    description: 'Calculate loan EMI',
    icon: 'credit-card',
    url: 'tools/loan-emi-calculator.html',
    category: 'math-calculators',
  },
  {
    id: 'scientific-calculator',
    name: 'Scientific Calculator',
    description: 'Advanced mathematical calculations',
    icon: 'calculator',
    url: 'tools/scientific-calculator.html',
    category: 'math-calculators',
  },
  {
    id: 'discount-calculator',
    name: 'Discount Calculator',
    description: 'Calculate discounts',
    icon: 'badge-indian-rupee',
    url: 'tools/discount-calculator.html',
    category: 'math-calculators',
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter',
    description: 'Convert between currencies',
    icon: 'dollar-sign',
    url: 'tools/currency-converter.html',
    category: 'math-calculators',
  },
  {
    id: 'timezone-converter',
    name: 'Time Zone Converter',
    description: 'Convert between time zones',
    icon: 'clock',
    url: 'tools/time-zone-converter.html',
    category: 'math-calculators',
  },
  {
    id: 'binary-converter',
    name: 'Binary to Decimal Converter',
    description: 'Convert between binary and decimal',
    icon: 'code',
    url: 'tools/binary-to-decimal-converter.html',
    category: 'math-calculators',
  },
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    description: 'Calculate tips and splits',
    icon: 'hand-platter',
    url: 'tools/tip-calculator.html',
    category: 'math-calculators',
  },

  // Unit Converters
  {
    id: 'length-converter',
    name: 'Length Converter',
    description: 'Convert between length units',
    icon: 'ruler',
    url: 'tools/length-converter.html',
    category: 'unit-converters',
  },
  {
    id: 'weight-converter',
    name: 'Weight Converter',
    description: 'Convert between weight units',
    icon: 'scale',
    url: 'tools/weight-converter.html',
    category: 'unit-converters',
  },
  {
    id: 'speed-converter',
    name: 'Speed Converter',
    description: 'Convert between speed units',
    icon: 'gauge',
    url: 'tools/speed-converter.html',
    category: 'unit-converters',
  },
  {
    id: 'temperature-converter',
    name: 'Temperature Converter',
    description: 'Convert between temperature units',
    icon: 'thermometer',
    url: 'tools/temperature-converter.html',
    category: 'unit-converters',
  },
  {
    id: 'volume-converter',
    name: 'Volume Converter',
    description: 'Convert between volume units',
    icon: 'box',
    url: 'tools/volume-converter.html',
    category: 'unit-converters',
  },
  {
    id: 'data-converter',
    name: 'Data Storage Converter',
    description: 'Convert between data storage units',
    icon: 'hard-drive',
    url: 'tools/data-storage-converter.html',
    category: 'unit-converters',
  },
  {
    id: 'energy-converter',
    name: 'Energy Converter',
    description: 'Convert between energy units',
    icon: 'zap',
    url: 'tools/energy-converter.html',
    category: 'unit-converters',
  },
  {
    id: 'pressure-converter',
    name: 'Pressure Converter',
    description: 'Convert between pressure units',
    icon: 'wind-arrow-down',
    url: 'tools/pressure-converter.html',
    category: 'unit-converters',
  },
  {
    id: 'fuel-converter',
    name: 'Fuel Efficiency Converter',
    description: 'Convert between fuel efficiency units',
    icon: 'circle-gauge',
    url: 'tools/fuel-efficiency-converter.html',
    category: 'unit-converters',
  },
  {
    id: 'angle-converter',
    name: 'Angle Converter',
    description: 'Convert between angle units',
    icon: 'compass',
    url: 'tools/angle-converter.html',
    category: 'unit-converters',
  },

  // Security & Encryption Tools
  {
    id: 'md5-generator',
    name: 'MD5 Hash Generator',
    description: 'Generate MD5 hashes',
    icon: 'key',
    url: 'tools/md5-hash-generator.html',
    category: 'security-tools',
  },
  {
    id: 'sha256-generator',
    name: 'SHA256 Hash Generator',
    description: 'Generate SHA256 hashes',
    icon: 'key',
    url: 'tools/sha256-hash-generator.html',
    category: 'security-tools',
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure passwords',
    icon: 'lock',
    url: 'tools/password-generator.html',
    category: 'security-tools',
  },
  {
    id: 'random-string',
    name: 'Random String Generator',
    description: 'Generate random strings',
    icon: 'hash',
    url: 'tools/random-string-generator.html',
    category: 'security-tools',
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener',
    description: 'Shorten long URLs',
    icon: 'link',
    url: 'tools/url-shortener.html',
    category: 'security-tools',
  },
  {
    id: 'ip-geolocation',
    name: 'IP Geolocation Finder',
    description: 'Find location from IP address',
    icon: 'map-pin',
    url: 'tools/ip-geolocation-finder.html',
    category: 'security-tools',
  },
  {
    id: 'ssl-checker',
    name: 'SSL Certificate Checker',
    description: 'Check SSL certificate validity',
    icon: 'shield',
    url: 'tools/ssl-certificate-checker.html',
    category: 'security-tools',
  },
  {
    id: 'whois-lookup',
    name: 'Whois Lookup',
    description: 'Look up domain information',
    icon: 'search',
    url: 'tools/whois-lookup.html',
    category: 'security-tools',
  },
  {
    id: 'http-headers',
    name: 'HTTP Headers Checker',
    description: 'Check HTTP headers',
    icon: 'globe',
    url: 'tools/http-headers-checker.html',
    category: 'security-tools',
  },
  {
    id: 'privacy-policy',
    name: 'Privacy Policy Generator',
    description: 'Generate privacy policy',
    icon: 'file-text',
    url: 'tools/privacy-policy-generator.html',
    category: 'security-tools',
  },

  // Social Media Tools
  {
    id: 'youtube-thumbnail',
    name: 'YouTube Thumbnail Downloader',
    description: 'Download YouTube video thumbnails',
    icon: 'youtube',
    url: 'tools/youtube-thumbnail-downloader.html',
    category: 'social-media-tools',
  },
  {
    id: 'instagram-downloader',
    name: 'Instagram Photo Downloader',
    description: 'Download Instagram photos',
    icon: 'instagram',
    url: 'tools/instagram-photo-downloader.html',
    category: 'social-media-tools',
  },
  {
    id: 'twitter-downloader',
    name: 'Twitter Video Downloader',
    description: 'Download Twitter videos',
    icon: 'twitter',
    url: 'tools/twitter-video-downloader.html',
    category: 'social-media-tools',
  },
  {
    id: 'facebook-downloader',
    name: 'Facebook Video Downloader',
    description: 'Download Facebook videos',
    icon: 'facebook',
    url: 'tools/facebook-video-downloader.html',
    category: 'social-media-tools',
  },
  {
    id: 'tiktok-downloader',
    name: 'TikTok Video Downloader',
    description: 'Download TikTok videos',
    icon: 'flame',
    url: 'tools/tiktok-video-downloader.html',
    category: 'social-media-tools',
  },
  {
    id: 'youtube-tags',
    name: 'YouTube Tags Extractor',
    description: 'Extract tags from YouTube videos',
    icon: 'tags',
    url: 'tools/youtube-tags-extractor.html',
    category: 'social-media-tools',
  },
  {
    id: 'hashtag-generator',
    name: 'Hashtag Generator',
    description: 'Generate hashtags for social media',
    icon: 'hash',
    url: 'tools/hashtag-generator.html',
    category: 'social-media-tools',
  },
  {
    id: 'social-post-generator',
    name: 'Social Media Post Generator',
    description: 'Generate social media posts',
    icon: 'edit-3',
    url: 'tools/social-media-post-generator.html',
    category: 'social-media-tools',
  },
  {
    id: 'emoji-keyboard',
    name: 'Emoji Keyboard',
    description: 'Copy and paste emojis',
    icon: 'smile',
    url: 'tools/emoji-keyboard.html',
    category: 'social-media-tools',
  },
  {
    id: 'twitter-counter',
    name: 'Twitter Character Counter',
    description: 'Count characters for Twitter posts',
    icon: 'hash',
    url: 'tools/twitter-character-counter.html',
    category: 'social-media-tools',
  },

  // Miscellaneous Tools
  {
    id: 'barcode-generator',
    name: 'Barcode Generator',
    description: 'Generate barcodes',
    icon: 'barcode',
    url: 'tools/barcode-generator.html',
    category: 'misc-tools',
  },
  {
    id: 'meme-generator',
    name: 'Meme Generator',
    description: 'Create and edit memes',
    icon: 'image',
    url: 'tools/meme-generator.html',
    category: 'misc-tools',
  },
  {
    id: 'resume-builder',
    name: 'Resume Builder',
    description: 'Create professional resumes',
    icon: 'file-user',
    url: 'tools/resume-builder.html',
    category: 'misc-tools',
  },
  {
    id: 'invoice-generator',
    name: 'Invoice Generator',
    description: 'Generate professional invoices',
    icon: 'file-text',
    url: 'tools/invoice-generator.html',
    category: 'misc-tools',
  },
  {
    id: 'business-name',
    name: 'Business Name Generator',
    description: 'Generate business names',
    icon: 'briefcase',
    url: 'tools/business-name-generator.html',
    category: 'misc-tools',
  },
  {
    id: 'lottery-generator',
    name: 'Lottery Number Generator',
    description: 'Generate lottery numbers',
    icon: 'shuffle',
    url: 'tools/lottery-number-generator.html',
    category: 'misc-tools',
  },
  {
    id: 'coin-flip',
    name: 'Flip a Coin Simulator',
    description: 'Simulate coin flips',
    icon: 'hand-coins',
    url: 'tools/flip-a-coin-simulator.html',
    category: 'misc-tools',
  },
  {
    id: 'random-number',
    name: 'Random Number Generator',
    description: 'Generate random numbers',
    icon: 'hash',
    url: 'tools/random-number-generator.html',
    category: 'misc-tools',
  },
  {
    id: 'dice-roller',
    name: 'Dice Roller Simulator',
    description: 'Simulate dice rolls',
    icon: 'dice-5',
    url: 'tools/dice-roller-simulator.html',
    category: 'misc-tools',
  },
  {
    id: 'speed-test',
    name: 'Internet Speed Test',
    description: 'Test your internet speed',
    icon: 'activity',
    url: 'tools/internet-speed-test.html',
    category: 'misc-tools',
  },
  {
    id: 'daily-planner',
    name: 'Daily Planner Creator',
    description: 'Create daily planners',
    icon: 'calendar',
    url: 'tools/daily-planner-creator.html',
    category: 'misc-tools',
  },
  {
    id: 'wedding-invitation',
    name: 'Wedding Invitation Generator',
    description: 'Generate wedding invitations',
    icon: 'heart',
    url: 'tools/wedding-invitation-generator.html',
    category: 'misc-tools',
  },
  {
    id: 'story-plot',
    name: 'Story Plot Generator',
    description: 'Generate story plots',
    icon: 'book-open',
    url: 'tools/story-plot-generator.html',
    category: 'misc-tools',
  },
  {
    id: 'ebook-creator',
    name: 'E-book Creator',
    description: 'Create e-books',
    icon: 'book',
    url: 'tools/e-book-creator.html',
    category: 'misc-tools',
  },
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot Demo',
    description: 'Try our AI chatbot',
    icon: 'message-circle',
    url: 'tools/ai-chatbot-demo.html',
    category: 'misc-tools',
  },
  {
    id: 'ip-tracker',
    name: 'IP Address Tracker',
    description: 'Track IP addresses',
    icon: 'map-pin',
    url: 'tools/ip-address-tracker.html',
    category: 'misc-tools',
  },
  {
    id: 'fake-address',
    name: 'Fake Address Generator',
    description: 'Generate fake addresses',
    icon: 'map-pin',
    url: 'tools/fake-address-generator.html',
    category: 'misc-tools',
  },
  {
    id: 'electric-bill',
    name: 'Calculator for Electric Bills',
    description: 'Calculate electric bills',
    icon: 'zap',
    url: 'tools/calculator-for-electric-bills.html',
    category: 'misc-tools',
  },
  {
    id: 'leap-year',
    name: 'Leap Year Checker',
    description: 'Check if a year is a leap year',
    icon: 'calendar-check',
    url: 'tools/leap-year-checker.html',
    category: 'misc-tools',
  },
  {
    id: 'numerology',
    name: 'Name to Numerology Calculator',
    description: 'Calculate numerology from names',
    icon: 'hash',
    url: 'tools/name-to-numerology-calculator.html',
    category: 'misc-tools',
  }
];

// ---- HELPERS ----
function getToolsByCategory(categoryId) {
  return window.tools.filter(t => t.category === categoryId);
}
function getToolsBySearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return window.tools.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q)
  );
}

// ---- RENDERING ----
function renderCategories() {
  const section = document.getElementById('categoriesSection');
  if (!section) return; // Exit if element doesn't exist
  
  section.innerHTML = `
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Browse by Categories</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Find the perfect tool for your task from our collection of free online utilities
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        ${window.categories.map(cat => renderCategoryCard(cat)).join('')}
      </div>
    </div>
  `;
  lucide.createIcons();
}

function renderCategoryCard(category) {
  const toolsInCat = getToolsByCategory(category.id);
  return `
    <div class="group relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-100 h-full flex flex-col">
      <div class="flex justify-between items-start mb-4">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center ${category.color}">
          <i data-lucide="${category.icon}" class="w-6 h-6"></i>
        </div>
        <a href="category.html?id=${category.id}" class="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <span>View all</span>
          <span class="transform transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
      <h3 class="text-xl font-bold mb-2">${category.name}</h3>
      <p class="text-gray-600 text-sm mb-6">${category.description}</p>
      <div class="space-y-2 flex-grow">
        ${toolsInCat.map((tool, idx) => renderToolItem(tool, idx)).join('')}
      </div>
    </div>
  `;
}

function renderToolItem(tool, idx = 0) {
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
  return `
    <a href="${tool.url}" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
      <div class="w-8 h-8 rounded-lg flex items-center justify-center ${colorClass}">
        <i data-lucide="${tool.icon}" class="w-4 h-4"></i>
      </div>
      <div>
        <span class="font-medium text-gray-900">${tool.name}</span>
        <p class="text-xs text-gray-500 mt-0.5">${tool.description}</p>
      </div>
    </a>
  `;
}

// ---- POPULAR TOOLS ----
const popularToolIds = [
  'image-to-png', 'image-to-jpg', 'image-resizer', 'image-compressor', 'image-cropper',
  'meta-tag-generator', 'keyword-density', 'word-counter', 'case-converter', 'json-formatter',
  'bmi-calculator', 'currency-converter', 'length-converter', 'md5-generator', 'password-generator',
  'youtube-thumbnail', 'instagram-downloader', 'barcode-generator', 'resume-builder', 'random-number',
  'ai-chatbot', 'meme-generator', 'tip-calculator', 'sql-formatter', 'color-picker',
];

function renderPopularTools() {
  const row1 = document.getElementById('popularToolsRow1');
  const row2 = document.getElementById('popularToolsRow2');
  if (!row1 || !row2) return;
  // Split popular tools into two rows
  const popularTools = popularToolIds.map(id => window.tools.find(t => t.id === id)).filter(Boolean);
  const half = Math.ceil(popularTools.length / 2);
  const row1Tools = popularTools.slice(0, half);
  const row2Tools = popularTools.slice(half);
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
  row1.innerHTML = row1Tools.map((tool, idx) => `
    <a href="${tool.url}" class="min-w-[320px] max-w-xs h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:border-blue-100 focus:ring-2 focus:ring-blue-200 outline-none">
      <div class="w-12 h-12 rounded-lg flex items-center justify-center ${colorPalette[idx % colorPalette.length]}">
        <i data-lucide="${tool.icon}" class="w-6 h-6"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-base text-gray-900">${tool.name}</div>
        <div class="text-gray-500 text-sm mt-1">${tool.description}</div>
      </div>
    </a>
  `).join('');
  row2.innerHTML = row2Tools.map((tool, idx) => `
    <a href="${tool.url}" class="min-w-[320px] max-w-xs h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:border-blue-100 focus:ring-2 focus:ring-blue-200 outline-none">
      <div class="w-12 h-12 rounded-lg flex items-center justify-center ${colorPalette[idx % colorPalette.length]}">
        <i data-lucide="${tool.icon}" class="w-6 h-6"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-base text-gray-900">${tool.name}</div>
        <div class="text-gray-500 text-sm mt-1">${tool.description}</div>
      </div>
    </a>
  `).join('');
  lucide.createIcons();

  // --- Smooth continuous auto-scroll using requestAnimationFrame ---
  function autoScroll(row, speed, direction) {
    let scrollAmount = 0;
    function step() {
      if (row.scrollWidth > row.clientWidth) {
        scrollAmount += speed * direction;
        if (scrollAmount < 0) scrollAmount = row.scrollWidth - row.clientWidth;
        if (scrollAmount > row.scrollWidth - row.clientWidth) scrollAmount = 0;
        row.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  autoScroll(row1, 0.7, 1); // Row 1: left to right
  autoScroll(row2, 0.7, -1); // Row 2: right to left
}

// ---- CATEGORY REVEAL ON SCROLL ----
function setupCategoryReveal() {
  const catSection = document.getElementById('categoriesSection');
  function onScroll() {
    const trigger = document.getElementById('popularToolsSection');
    if (!catSection || !trigger) return;
    const rect = trigger.getBoundingClientRect();
    if (rect.bottom < window.innerHeight * 0.7) {
      catSection.classList.remove('opacity-0', 'pointer-events-none');
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll);
}

// ---- SEARCH/POPULAR TOOLS TOGGLE ----
function showPopularTools(show) {
  const popSection = document.getElementById('popularToolsSection');
  if (popSection) popSection.style.display = show ? '' : 'none';
}

// ---- INTERACTIVITY ----
function setupSearch() {
  const input = document.getElementById('searchInput');
  const form = document.getElementById('searchForm');
  let lastQuery = '';

  input.addEventListener('input', (e) => {
    const query = e.target.value;
    lastQuery = query;
    const results = getToolsBySearch(query);
    console.log('Search input:', query, 'Results:', results);
    renderSearchResults(results, query);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const results = getToolsBySearch(lastQuery);
    console.log('Search submit:', lastQuery, 'Results:', results);
    renderSearchResults(results, lastQuery);
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  // Only call these functions if we're on the index page
  if (document.getElementById('categoriesSection')) {
    renderCategories();
    renderPopularTools();
    setupCategoryReveal();
    setupSearch();
    
    // Typewriter effect setup with tool names
    const typewriterPhrases = window.tools.map(t => t.name);
    const typewriterCategoryMap = window.tools.map(t => t.category);
    let typewriterIndex = Math.floor(Math.random() * typewriterPhrases.length);
    let charIndex = 0;
    let isDeleting = false;
    const searchInput = document.getElementById('searchInput');
    
    window.typewriterPhrases = typewriterPhrases;
    window.typewriterCategoryMap = typewriterCategoryMap;
    window.typewriterIndex = typewriterIndex;
    window.charIndex = charIndex;
    window.isDeleting = isDeleting;
    window.searchInput = searchInput;
    
    if (searchInput) {
      // Start typewriter animation
      typewriterTick();
      
      // Add input event listener to handle clearing
      searchInput.addEventListener('input', () => {
        if (!searchInput.value) {
          // Reset typewriter state when input is cleared
          window.charIndex = 0;
          window.isDeleting = false;
          window.typewriterIndex = Math.floor(Math.random() * typewriterPhrases.length);
          typewriterTick();
        }
      });
    }
    
    renderHeroCategoriesRow();
    autoScrollHeroCategoriesRow();
  }
  
  // Always initialize Lucide icons
  lucide.createIcons();
});

// ---- SEARCH OVERRIDE ----
function renderSearchResults(results, query) {
  const section = document.getElementById('searchResults');
  console.log('Rendering search results for:', query, 'Results:', results);
  if (!query.trim()) {
    section.innerHTML = '';
    showPopularTools(true);
    return;
  }
  showPopularTools(false);
  section.innerHTML = `
    <div class="container mx-auto py-8 px-4">
      <h2 class="text-lg font-semibold mb-4">
        ${results.length > 0
          ? `Results for "${query}" (${results.length})`
          : `No results found for "${query}"`}
      </h2>
      ${results.length > 0
        ? `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${results.map((tool, idx) => renderToolCard(tool, idx)).join('')}
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

// Color palette for tool cards (used in multiple places)
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

function renderToolCard(tool, idx) {
  const category = window.categories.find(c => c.id === tool.category);
  const colorClass = colorPalette[idx % colorPalette.length];
  return `
    <a href="${tool.url}" class="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 transition-all duration-300 hover:shadow-md hover:border-blue-100 focus:ring-2 focus:ring-blue-200 outline-none">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-lg flex items-center justify-center ${colorClass}">
          <i data-lucide="${tool.icon}" class="w-7 h-7"></i>
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

// Map typewriter phrases to category color classes
const typewriterCategoryMap = [
  'image-tools',
  'seo-tools',
  'text-tools',
  'developer-tools',
  'math-calculators',
  'unit-converters',
  'security-tools',
  'social-media-tools',
  'misc-tools',
  null // All-in-One Toolbox (default color)
];

function getCategoryBgColor(catId) {
  const cat = window.categories.find(c => c.id === catId);
  if (!cat) return '#2563eb';
  // Extract the bg color class (e.g., 'bg-green-50')
  const match = cat.color.match(/bg-[^ ]+/);
  if (!match) return '#2563eb';
  // Map Tailwind bg classes to hex (add more as needed)
  const colorMap = {
    'bg-green-50': '#ecfdf5',
    'bg-purple-50': '#f5f3ff',
    'bg-blue-50': '#eff6ff',
    'bg-orange-50': '#fff7ed',
    'bg-red-50': '#fef2f2',
    'bg-yellow-50': '#fefce8',
    'bg-indigo-50': '#eef2ff',
    'bg-pink-50': '#fdf2f8',
    'bg-gray-50': '#f9fafb',
  };
  return colorMap[match[0]] || '#2563eb';
}

function getCategoryTextColor(catId) {
  const cat = window.categories.find(c => c.id === catId);
  if (!cat) return '#2563eb';
  // Extract the text color class (e.g., 'text-green-600')
  const match = cat.color.match(/text-[^ ]+/);
  if (!match) return '#2563eb';
  // Map Tailwind text classes to hex (add more as needed)
  const colorMap = {
    'text-green-600': '#059669',
    'text-purple-600': '#7c3aed',
    'text-blue-600': '#2563eb',
    'text-orange-600': '#ea580c',
    'text-red-600': '#dc2626',
    'text-yellow-600': '#ca8a04',
    'text-indigo-600': '#4f46e5',
    'text-pink-600': '#db2777',
    'text-gray-600': '#4b5563',
  };
  return colorMap[match[0]] || '#2563eb';
}

// Color cycle for typewriter
const typewriterColorCycle = [
  '#2563eb', // blue
  '#059669', // green
  '#ca8a04', // yellow
  '#7c3aed', // purple
  '#db2777', // pink
  '#ea580c', // orange
  '#dc2626', // red
  '#4f46e5', // indigo
  '#4b5563', // gray
];

let typewriterPause = false;
function typewriterTick() {
  const typewriterPhrases = window.typewriterPhrases;
  let typewriterIndex = window.typewriterIndex;
  let charIndex = window.charIndex;
  let isDeleting = window.isDeleting;
  const typewriterCategoryMap = window.typewriterCategoryMap;
  const searchTypewriterText = document.getElementById('searchTypewriterText');
  const searchTypewriterOverlay = document.getElementById('searchTypewriterOverlay');
  const searchInput = window.searchInput;
  const searchIconDiv = document.getElementById('searchIcon');
  if (!searchTypewriterText || !searchInput) return;

  // Hide overlay if input has value
  if (searchInput.value && searchInput.value.length > 0) {
    searchTypewriterOverlay.style.display = 'none';
    return;
  } else {
    searchTypewriterOverlay.style.display = 'flex';
  }

  const currentPhrase = typewriterPhrases[typewriterIndex];
  // Cycle color by index
  const color = typewriterColorCycle[typewriterIndex % typewriterColorCycle.length];
  searchTypewriterText.style.color = color;
  // Color the search icon
  setTimeout(() => {
    if (searchIconDiv) {
      const iconEl = searchIconDiv.querySelector('i');
      if (iconEl) iconEl.style.color = color;
    }
  }, 0);

  // Typewriter logic
  if (isDeleting) {
    if (charIndex === 0) {
      isDeleting = false;
      typewriterIndex = (typewriterIndex + 1) % typewriterPhrases.length;
      window.typewriterIndex = typewriterIndex;
      window.isDeleting = isDeleting;
      setTimeout(typewriterTick, 500);
      return;
    } else {
      charIndex--;
      window.charIndex = charIndex;
      searchTypewriterText.textContent = currentPhrase.substring(0, charIndex);
      setTimeout(typewriterTick, 50);
      return;
    }
  } else {
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      window.isDeleting = isDeleting;
      setTimeout(typewriterTick, 1000);
      return;
    } else {
      charIndex++;
      window.charIndex = charIndex;
      searchTypewriterText.textContent = currentPhrase.substring(0, charIndex);
      setTimeout(typewriterTick, 100);
      return;
    }
  }
}

// ---- HERO CATEGORIES ICONS SCROLL ----
let heroCategoryScrollIndex = 0;
let heroCategoryRowWidth = 0;
let heroCategoryIconWidth = 0;
function renderHeroCategoriesRow() {
  const outer = document.getElementById('heroCategoriesRow');
  if (!outer) return;
  const inner = outer.querySelector('.hero-icons-inner');
  if (!inner) return;
  // Duplicate icons for seamless infinite scroll
  const allCats = [...window.categories, ...window.categories];
  inner.innerHTML = allCats.map(cat => `
    <span class="hero-category-icon ${cat.color}"><i data-lucide="${cat.icon}"></i></span>
  `).join('');
  lucide.createIcons();
  // Calculate row width and icon width for animation
  setTimeout(() => {
    heroCategoryRowWidth = inner.scrollWidth / 2;
    heroCategoryIconWidth = inner.firstElementChild ? inner.firstElementChild.offsetWidth + 20 : 60; // 20px gap
  }, 100);
}

function autoScrollHeroCategoriesRow() {
  const outer = document.getElementById('heroCategoriesRow');
  if (!outer) return;
  const inner = outer.querySelector('.hero-icons-inner');
  if (!inner) return;
  let currentIndex = 0;
  let currentX = 0;
  function step() {
    // Animate to next icon
    const targetX = -(currentIndex * heroCategoryIconWidth);
    inner.style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1)';
    inner.style.transform = `translateX(${targetX}px)`;
    currentX = targetX;
    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= window.categories.length) {
        // Reset for seamless loop
        inner.style.transition = 'none';
        inner.style.transform = 'translateX(0px)';
        currentIndex = 0;
        currentX = 0;
        setTimeout(step, 900);
      } else {
        setTimeout(step, 900);
      }
    }, 700);
  }
  setTimeout(step, 900);
}

// ---- CATEGORY PAGE RENDERING ----
// Patch: Expose renderToolItem for category.html
window.renderToolItem = renderToolItem; 
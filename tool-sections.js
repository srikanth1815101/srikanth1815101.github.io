// tool-sections.js

// Tool info data (can be moved to a separate JSON if needed)
const TOOL_SECTIONS_DATA = {
  'image-to-png-converter': {
    hero: {
      icon: 'image',
      iconBg: 'gradient-bg',
      title: 'Image to PNG Converter',
      subtitle: 'Convert your images to PNG format with high quality and transparency support',
      features: [
        { icon: 'shield', color: 'text-green-500', label: 'Secure Conversion' },
        { icon: 'zap', color: 'text-yellow-500', label: 'Instant Results' },
        { icon: 'globe', color: 'text-blue-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is Image to PNG Converter?',
      content: `The Image to PNG Converter is a free online tool that allows you to convert various image formats (such as JPG, JPEG, GIF, BMP, etc.) to PNG format. PNG (Portable Network Graphics) is a raster graphics file format that supports lossless data compression and transparency, making it ideal for web graphics, logos, and images that require transparent backgrounds.<br><br><strong>Customisation options:</strong> Before converting, you can resize your image by setting a custom width and height, choose a background color for non-transparent images, and decide whether to keep or remove transparency. This gives you full control over your PNG output.`
    },
    whyUse: {
      title: 'Why Use Image to PNG Converter?',
      items: [
        { icon: 'shield', title: 'Lossless Quality', desc: 'PNG format preserves image quality without compression artifacts, ensuring your images look crisp and clear.' },
        { icon: 'layers', title: 'Transparency & Background Control', desc: 'Choose to keep transparency or set a custom background color for your PNG output, giving you flexibility for different use cases.' },
        { icon: 'globe', title: 'Web Compatibility', desc: 'PNG is widely supported across all modern web browsers and platforms, ensuring your images display correctly everywhere.' },
        { icon: 'scaling', title: 'Custom Size Output', desc: 'Easily resize your image by specifying the width and height before conversion, so your PNG fits your needs perfectly.' }
      ]
    },
    howToUse: {
      title: 'How to Use Image to PNG Converter',
      steps: [
        { icon: 'upload', title: 'Upload Your Image', desc: 'Click the upload area or drag and drop your image file into the designated zone.' },
        { icon: 'settings', title: 'Set Customization Options', desc: 'Choose your desired width, height, background color, and transparency options.' },
        { icon: 'wand-2', title: 'Download PNG', desc: 'Preview your PNG and download it instantly.' }
      ]
    },
    features: [
      'Convert images to PNG from multiple formats (JPG, JPEG, GIF, BMP, TIFF, WebP, and more)',
      'Resize output image by specifying custom width and height',
      'Choose background color for non-transparent images or remove background for transparent PNGs',
      'Keep or remove transparency based on your needs',
      'Instant preview and one-click download of the converted PNG',
      'All processing is done in your browser for privacy and security'
    ],
    faq: [
      {
        q: 'What image formats are supported?',
        a: 'The tool supports all common image formats including JPG, JPEG, GIF, BMP, TIFF, WebP, and more.'
      },
      {
        q: 'Will converting to PNG affect image quality?',
        a: 'No, PNG is a lossless format, so your image quality is preserved.'
      },
      {
        q: 'Can I keep transparency in my PNG?',
        a: 'Yes, you can choose to keep or remove transparency before converting.'
      },
      {
        q: 'Is there a file size limit?',
        a: 'No, there are no file size limitations.'
      },
      {
        q: 'Are my images secure?',
        a: 'All processing is done locally in your browser for maximum privacy.'
      }
    ]
  },
  'image-to-jpg-converter': {
    hero: {
      icon: 'image',
      iconBg: 'gradient-bg',
      title: 'Image to JPG Converter',
      subtitle: 'Convert your images to JPG format with customizable quality and background options.',
      features: [
        { icon: 'shield', color: 'text-green-500', label: 'Efficient Compression' },
        { icon: 'sliders', color: 'text-purple-500', label: 'Custom Quality & Size' },
        { icon: 'globe', color: 'text-blue-500', label: 'Universal Compatibility' }
      ]
    },
    whatIs: {
      title: 'What is Image to JPG Converter?',
      content: `The Image to JPG Converter is a free online tool that allows you to convert various image formats (such as PNG, GIF, BMP, TIFF, WebP, etc.) to JPG format. JPG (or JPEG) is a widely used compressed image format, ideal for photos and web images due to its small file size and broad compatibility.<br><br><strong>Customisation options:</strong> Before converting, you can resize your image by setting a custom width and height, choose a background color for transparent images, and adjust the JPG quality to balance file size and image clarity. This gives you full control over your JPG output.`
    },
    whyUse: {
      title: 'Why Use Image to JPG Converter?',
      items: [
        { icon: 'shield', title: 'Efficient Compression', desc: 'JPG format compresses images to reduce file size, making it perfect for web use and sharing without sacrificing too much quality.' },
        { icon: 'sliders', title: 'Custom Quality & Size', desc: 'Adjust the JPG quality and resize your image to get the perfect balance between file size and visual clarity.' },
        { icon: 'globe', title: 'Universal Compatibility', desc: 'JPG is supported by virtually all devices, browsers, and platforms, ensuring your images are always viewable.' },
        { icon: 'palette', title: 'Custom Background', desc: 'Set a background color for images with transparency, as JPG does not support transparent pixels.' }
      ]
    },
    howToUse: {
      title: 'How to Use Image to JPG Converter',
      steps: [
        { icon: 'upload', title: 'Upload Your Image', desc: 'Click the upload area or drag and drop your image file into the designated zone.' },
        { icon: 'settings', title: 'Customise Output', desc: 'Set your desired width and height to resize the image. Choose a background color for transparent images, and adjust the JPG quality slider to control file size and clarity.' },
        { icon: 'wand-2', title: 'Convert & Download', desc: 'Click the "Convert to JPG" button to apply your customizations. Preview the result and download your customized JPG image instantly.' }
      ]
    },
    features: [
      'Convert images to JPG from multiple formats (PNG, GIF, BMP, TIFF, WebP, and more)',
      'Resize output image by specifying custom width and height',
      'Choose background color for transparent images (JPG does not support transparency)',
      'Adjust JPG quality to control file size and image clarity',
      'Instant preview and one-click download of the converted JPG',
      'All processing is done in your browser for privacy and security'
    ],
    faq: [
      { q: 'What image formats can I convert to JPG?', a: 'You can convert various image formats including PNG, GIF, BMP, TIFF, and WebP to JPG format.' },
      { q: 'Can I control the quality of the JPG output?', a: 'Yes! Use the JPG quality slider to set your preferred balance between file size and image clarity. Higher values mean better quality and larger files.' },
      { q: 'What happens to transparent images?', a: 'JPG does not support transparency. Any transparent areas in your image will be filled with the background color you select before conversion.' },
      { q: 'Are my uploaded images secure?', a: 'Yes, all conversions are performed locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.' },
      { q: 'Can I resize my image before converting?', a: 'Absolutely! You can set a custom width and height before converting to JPG, giving you full control over the output size.' }
    ]
  },
  'image-resizer': {
    hero: {
      icon: 'scaling',
      iconBg: 'gradient-bg',
      title: 'Image Resizer',
      subtitle: 'Resize your images to any dimension, with full control over aspect ratio, format, and quality.',
      features: [
        { icon: 'ruler', color: 'text-blue-500', label: 'Custom Size' },
        { icon: 'settings', color: 'text-purple-500', label: 'Advanced Options' },
        { icon: 'wand-2', color: 'text-green-500', label: 'Instant Preview' }
      ]
    },
    whatIs: {
      title: 'What is Image Resizer?',
      content: `The Image Resizer is a free online tool that allows you to resize images to any custom width and height. You can maintain the original aspect ratio, choose from popular preset sizes (like Instagram, Facebook, Twitter, and more), and select your preferred output format (JPG, PNG, WebP). Adjust quality for lossy formats and set a background color for non-transparent outputs. All processing is done in your browser for privacy and speed.`
    },
    whyUse: {
      title: 'Why Use Image Resizer?',
      items: [
        { icon: 'ruler', title: 'Custom Dimensions', desc: 'Resize images to exact pixel or percentage values for any use case.' },
        { icon: 'lock', title: 'Aspect Ratio Control', desc: 'Lock or unlock aspect ratio to prevent unwanted stretching or squashing.' },
        { icon: 'layout', title: 'Preset Sizes', desc: 'Quickly select from popular social media and standard aspect ratios.' },
        { icon: 'image', title: 'Format & Quality', desc: 'Choose output format (JPG, PNG, WebP) and adjust quality for optimal results.' },
        { icon: 'paint-bucket', title: 'Background Color', desc: 'Set a background color for formats that do not support transparency.' },
        { icon: 'wand-2', title: 'Instant Preview & Download', desc: 'See your resized image instantly and download with one click.' }
      ]
    },
    howToUse: {
      title: 'How to Use Image Resizer',
      steps: [
        { icon: 'upload', title: 'Upload Your Image', desc: 'Drag and drop or browse to select your image file.' },
        { icon: 'settings', title: 'Set Resize Options', desc: 'Enter custom width/height, lock aspect ratio, or pick a preset size. Choose output format, quality, and background color.' },
        { icon: 'wand-2', title: 'Preview & Download', desc: 'Preview the resized image and download it instantly.' }
      ]
    },
    features: [
      'Resize images to any width and height (px or %)',
      'Lock/unlock aspect ratio for proportional scaling',
      'Choose from preset sizes for social media and standard formats',
      'Select output format: JPG, PNG, or WebP',
      'Adjust quality for lossy formats (JPG, WebP)',
      'Set background color for non-transparent outputs',
      'Instant preview and one-click download',
      'All processing is done in your browser for privacy and security'
    ],
    faq: [
      { q: 'What image formats are supported?', a: 'You can upload JPG, PNG, WebP, GIF, BMP, and more.' },
      { q: 'Can I keep the original aspect ratio?', a: 'Yes, use the aspect ratio lock to maintain proportions.' },
      { q: 'What are preset sizes?', a: 'Preset sizes are common dimensions for social media and standard uses (e.g., Instagram, Facebook, Twitter, 1:1, 16:9, etc.).' },
      { q: 'How do I change output quality?', a: 'Use the quality slider to adjust compression for JPG and WebP formats.' },
      { q: 'Is my image processed securely?', a: 'Yes, all processing happens locally in your browser. Your images are never uploaded.' }
    ]
  },
};

function renderToolSections(toolName) {
  const data = TOOL_SECTIONS_DATA[toolName];
  if (!data) return;

  // HERO SECTION
  if (data.hero && document.getElementById('heroSection')) {
    document.getElementById('heroSection').innerHTML = `
      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 rounded-2xl ${data.hero.iconBg} flex items-center justify-center animate-float">
          <i data-lucide="${data.hero.icon}" class="w-8 h-8 text-white"></i>
        </div>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 animate-fade-in">
        <span class="gradient-logo-text">${data.hero.title}</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-6 animate-fade-in">
        ${data.hero.subtitle}
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-4">
        ${data.hero.features.map(f => `
          <div class="flex items-center gap-2 text-gray-600 justify-center">
            <i data-lucide="${f.icon}" class="w-6 h-6 ${f.color}"></i>
            <span class="text-base font-medium">${f.label}</span>
          </div>
        `).join('')}
      </div>
    `;
    lucide.createIcons();
  }

  // What is
  document.getElementById('whatIsSection').innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-10 md:w-12 aspect-square rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
          <i data-lucide="info" class="w-6 h-6 text-white"></i>
        </div>
        <h2 class="text-3xl font-bold">${data.whatIs.title}</h2>
      </div>
      <div class="bg-gray-50 rounded-2xl p-8 shadow-sm">
        <p class="text-gray-600 text-lg leading-relaxed">${data.whatIs.content}</p>
      </div>
    </div>
  `;

  // Why Use
  document.getElementById('whyUseSection').innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-10 md:w-12 aspect-square rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
          <i data-lucide="star" class="w-6 h-6 text-white"></i>
        </div>
        <h2 class="text-3xl font-bold">${data.whyUse.title}</h2>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        ${data.whyUse.items.map((item, idx) => `
          <div class="bg-white p-6 rounded-xl shadow-sm card-hover">
            <div class="w-12 h-12 rounded-xl ${['bg-blue-50','bg-purple-50','bg-green-50','bg-yellow-50'][idx%4]} flex items-center justify-center mb-4">
              <i data-lucide="${item.icon || ['shield','settings','file-type','zap'][idx%4]}" class="w-6 h-6 ${['text-blue-600','text-purple-600','text-green-600','text-yellow-600'][idx%4]}"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
            <p class="text-gray-600">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // How to Use
  document.getElementById('howToUseSection').innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-10 md:w-12 aspect-square rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
          <i data-lucide="help-circle" class="w-6 h-6 text-white"></i>
        </div>
        <h2 class="text-3xl font-bold">${data.howToUse.title}</h2>
      </div>
      <div class="space-y-6">
        ${data.howToUse.steps.map((step, i) => `
          <div class="flex gap-4 bg-gray-50 p-6 rounded-xl">
            <div class="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl">${i+1}</div>
            <div>
              <h3 class="text-xl font-semibold mb-2 flex items-center gap-2">
                <i data-lucide="${step.icon || (i===0?'upload':i===1?'settings':'wand-2')}" class="w-5 h-5 text-blue-600"></i>
                ${step.title}
              </h3>
              <p class="text-gray-600">${step.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Features
  document.getElementById('featuresSection').innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-10 md:w-12 aspect-square rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
          <i data-lucide="list-checks" class="w-6 h-6 text-white"></i>
        </div>
        <h2 class="text-3xl font-bold">Features</h2>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        ${data.features.map(f => `
          <div class="bg-white p-6 rounded-xl shadow-sm card-hover">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                <i data-lucide="check-circle" class="w-5 h-5 text-green-500"></i>
              </div>
              <span class="text-gray-600">${f}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // FAQ
  document.getElementById('faqSection').innerHTML = `
    <div class="container mx-auto max-w-4xl">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-10 md:w-12 aspect-square rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
          <i data-lucide="help-circle" class="w-6 h-6 text-white"></i>
        </div>
        <h2 class="text-3xl font-bold">Frequently Asked Questions</h2>
      </div>
      <div class="space-y-4">
        ${data.faq.map((item, i) => `
          <div class="faq-item bg-gray-50 rounded-xl overflow-hidden">
            <button class="w-full px-6 py-4 text-left flex items-center justify-between">
              <h3 class="text-xl font-semibold">${item.q}</h3>
              <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500 faq-icon transition-transform duration-300"></i>
            </button>
            <div class="faq-content overflow-hidden transition-all duration-300 ease-in-out" style="max-height: 0;">
              <div class="px-6 pb-4">
                <p class="text-gray-600">${item.a}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  lucide.createIcons();

  // FAQ toggle
  let activeFaq = null;
  document.querySelectorAll('.faq-item').forEach(item => {
    const button = item.querySelector('button');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');
    
    button.addEventListener('click', () => {
      // If clicking the active FAQ, close it
      if (activeFaq === item) {
        content.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
        activeFaq = null;
        return;
      }

      // If there's an active FAQ, close it first
      if (activeFaq) {
        const activeContent = activeFaq.querySelector('.faq-content');
        const activeIcon = activeFaq.querySelector('.faq-icon');
        activeContent.style.maxHeight = '0';
        activeIcon.style.transform = 'rotate(0deg)';
      }

      // Open the clicked FAQ
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.style.transform = 'rotate(180deg)';
      activeFaq = item;
    });
  });
}

// On DOMContentLoaded, render sections if placeholders exist
window.addEventListener('DOMContentLoaded', () => {
  if (window.CSRGO_TOOL_NAME) {
    renderToolSections(window.CSRGO_TOOL_NAME);
  }
});

// Inject shared tool styles if not already present
(function() {
  if (!document.getElementById('csrgo-tool-shared-styles')) {
    const style = document.createElement('style');
    style.id = 'csrgo-tool-shared-styles';
    style.textContent = `
      .gradient-bg {
        background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
      }
      .card-hover {
        transition: all 0.3s ease;
      }
      .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      .drop-zone-active {
        border-color: #4F46E5;
        background-color: rgba(79, 70, 229, 0.05);
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
    `;
    document.head.appendChild(style);
  }
})(); 
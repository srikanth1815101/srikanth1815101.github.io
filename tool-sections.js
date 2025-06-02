// tool-sections.js

// Tool info data (can be moved to a separate JSON if needed)
const TOOL_SECTIONS_DATA = {
  'image-resizer': {
    whatIs: {
      title: 'What is Image Resizer?',
      content: `The Image Resizer is a free online tool that allows you to resize your images to any desired dimensions while maintaining quality. Whether you need to resize images for social media, websites, or print, this tool provides a simple and efficient solution.<br><br><strong>Key features:</strong> You can resize images by specifying exact dimensions, maintain aspect ratios, adjust quality, and choose from multiple output formats. The tool supports various image formats including JPEG, PNG, and WebP.`
    },
    whyUse: {
      title: 'Why Use Image Resizer?',
      items: [
        { icon: 'scaling', title: 'Precise Resizing', desc: 'Resize images to exact dimensions or maintain aspect ratios for perfect proportions.' },
        { icon: 'settings', title: 'Quality Control', desc: 'Adjust image quality to balance file size and visual appearance.' },
        { icon: 'file-type', title: 'Multiple Formats', desc: 'Choose from JPEG, PNG, or WebP formats based on your needs.' },
        { icon: 'zap', title: 'Instant Processing', desc: 'Get your resized images instantly with no waiting time or uploads.' }
      ]
    },
    howToUse: {
      title: 'How to Use Image Resizer',
      steps: [
        { icon: 'upload', title: 'Upload Your Image', desc: 'Click the upload area or drag and drop your image file into the designated zone.' },
        { icon: 'scaling', title: 'Set Resize Options', desc: 'Choose your desired dimensions, aspect ratio, quality, and output format.' },
        { icon: 'download', title: 'Download Result', desc: 'Preview your resized image and download it in your chosen format.' }
      ]
    },
    features: [
      'Resize images to any custom dimensions',
      'Supports all major image formats (JPEG, PNG, GIF, BMP, WebP)',
      'Quality and format control (JPEG, PNG, WebP)',
      'Instant preview and download',
      'Optimized for social media',
      'Privacy and security: all processing in your browser'
    ],
    faq: [
      {
        q: 'What image formats are supported?',
        a: 'The tool supports all common image formats including JPEG, PNG, GIF, BMP, and WebP. You can output your resized image in JPEG, PNG, or WebP format.'
      },
      {
        q: 'Will resizing affect image quality?',
        a: 'The tool uses high-quality resizing algorithms to maintain image quality. You can also adjust the quality slider to balance between file size and image quality.'
      },
      {
        q: 'Is there a file size limit?',
        a: 'No, there are no file size limitations. You can resize images of any size.'
      },
      {
        q: 'Are my images secure?',
        a: 'Yes, all processing is done locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.'
      },
      {
        q: 'What are the recommended dimensions for social media?',
        a: `Common social media image dimensions are: Facebook (1200x630px), Instagram (1080x1080px), Twitter (1200x675px), and LinkedIn (1200x627px). The tool\'s preset aspect ratios make it easy to achieve these dimensions.`
      }
    ]
  },
  'image-to-png': {
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
  'image-to-jpg': {
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
  }
};

function renderToolSections(toolName) {
  const data = TOOL_SECTIONS_DATA[toolName];
  if (!data) return;

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
        ${data.faq.map(faq => `
          <div class="faq-item bg-gray-50 rounded-xl overflow-hidden transition-all">
            <button class="w-full px-6 py-4 text-left flex items-center justify-between">
              <h3 class="text-xl font-semibold">${faq.q}</h3>
              <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500 faq-icon transition-transform"></i>
            </button>
            <div class="faq-content">
              <div class="px-6 pb-4">
                <p class="text-gray-600">${faq.a}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  lucide.createIcons();

  // FAQ toggle
  document.querySelectorAll('.faq-item').forEach(item => {
    const button = item.querySelector('button');
    const content = item.querySelector('.faq-content');
    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-content').style.maxHeight = null;
      });
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  });
}

// On DOMContentLoaded, render sections if placeholders exist
window.addEventListener('DOMContentLoaded', () => {
  if (window.CSRGO_TOOL_NAME) {
    renderToolSections(window.CSRGO_TOOL_NAME);
  }
}); 
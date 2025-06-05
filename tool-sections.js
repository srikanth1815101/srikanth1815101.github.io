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
  'image-compressor': {
    hero: {
      icon: 'image-upscale',
      iconBg: 'gradient-bg',
      title: 'Image Compressor',
      subtitle: 'Compress your images without losing quality. Reduce file size while maintaining visual clarity.',
      features: [
        { icon: 'shield', color: 'text-green-500', label: 'Secure Compression' },
        { icon: 'sliders', color: 'text-purple-500', label: 'Quality Control' },
        { icon: 'globe', color: 'text-blue-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is Image Compressor?',
      content: `The Image Compressor is a free online tool that helps you reduce the file size of your images while maintaining acceptable quality. It's perfect for optimizing images for web use, email attachments, or storage purposes.<br><br><strong>Compression options:</strong> You can control the compression level using the quality slider, resize the image dimensions, choose the output format (JPEG, PNG, or WebP), and maintain aspect ratio. The tool shows you the compression ratio and file size savings in real-time, helping you find the perfect balance between quality and file size.`
    },
    whyUse: {
      title: 'Why Use Image Compressor?',
      items: [
        { icon: 'shield', title: 'Optimize File Size', desc: 'Reduce image file sizes without significant quality loss, perfect for web optimization and faster loading times.' },
        { icon: 'sliders', title: 'Quality Control', desc: 'Fine-tune compression settings to find the perfect balance between file size and image quality.' },
        { icon: 'scaling', title: 'Resize & Format', desc: 'Resize images to specific dimensions and convert to different formats (JPEG, PNG, WebP) in one step.' },
        { icon: 'chart-bar', title: 'Real-time Stats', desc: 'See compression ratio and file size savings instantly to make informed decisions.' }
      ]
    },
    howToUse: {
      title: 'How to Use Image Compressor',
      steps: [
        { icon: 'upload', title: 'Upload Your Image', desc: 'Click the upload area or drag and drop your image file into the designated zone.' },
        { icon: 'settings', title: 'Adjust Settings', desc: 'Set your desired quality level, dimensions, and output format. Preview the compression results in real-time.' },
        { icon: 'download', title: 'Download Compressed Image', desc: 'Review the compression stats and download your optimized image with one click.' }
      ]
    },
    features: [
      'Compress images while maintaining acceptable quality',
      'Adjust compression level with quality slider',
      'Resize images to specific dimensions',
      'Choose output format (JPEG, PNG, WebP)',
      'Maintain aspect ratio while resizing',
      'Real-time compression statistics',
      'Instant preview and one-click download',
      'All processing is done in your browser for privacy and security'
    ],
    faq: [
      {
        q: 'What image formats are supported?',
        a: 'You can compress images in various formats including JPG, PNG, WebP, GIF, and more.'
      },
      {
        q: 'Will compression affect image quality?',
        a: 'The tool allows you to control the compression level. Higher quality settings maintain more detail but result in larger file sizes.'
      },
      {
        q: 'Can I resize images while compressing?',
        a: 'Yes, you can set custom dimensions and maintain aspect ratio while compressing your images.'
      },
      {
        q: 'What output formats are available?',
        a: 'You can save compressed images in JPEG, PNG, or WebP format, depending on your needs.'
      },
      {
        q: 'Is my image data secure?',
        a: 'Yes, all compression is done locally in your browser. Your images are never uploaded to our servers.'
      }
    ]
  },
  'image-cropper': {
    hero: {
      icon: 'crop',
      iconBg: 'gradient-bg',
      title: 'Image Cropper',
      subtitle: 'Crop your images with precision. Free online tool with aspect ratio control and custom dimensions.',
      features: [
        { icon: 'ruler', color: 'text-blue-500', label: 'Custom Dimensions' },
        { icon: 'ratio', color: 'text-purple-500', label: 'Aspect Ratio Control' },
        { icon: 'globe', color: 'text-green-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is Image Cropper?',
      content: `The Image Cropper is a free online tool that allows you to crop your images with precision and control. It's perfect for adjusting image compositions, creating profile pictures, or preparing images for social media.<br><br><strong>Crop options:</strong> You can crop images freely or maintain specific aspect ratios (1:1, 16:9, 9:16, 4:3, 3:4). Set custom dimensions in pixels, preview the cropped result in real-time, and download the cropped image instantly. All processing is done in your browser for privacy and speed.`
    },
    whyUse: {
      title: 'Why Use Image Cropper?',
      items: [
        { icon: 'ruler', title: 'Precise Control', desc: 'Crop images with pixel-perfect precision using our intuitive cropping interface.' },
        { icon: 'ratio', title: 'Aspect Ratio Options', desc: 'Choose from common aspect ratios or set custom dimensions for your specific needs.' },
        { icon: 'eye', title: 'Real-time Preview', desc: 'See your cropped image instantly before downloading, ensuring perfect results.' },
        { icon: 'shield', title: 'Privacy First', desc: 'All image processing happens in your browser. Your images are never uploaded to our servers.' }
      ]
    },
    howToUse: {
      title: 'How to Use Image Cropper',
      steps: [
        { icon: 'upload', title: 'Upload Your Image', desc: 'Click the upload area or drag and drop your image file into the designated zone.' },
        { icon: 'settings', title: 'Set Crop Options', desc: 'Choose your desired aspect ratio or set custom dimensions. Use the cropping interface to adjust the crop area.' },
        { icon: 'download', title: 'Download Cropped Image', desc: 'Preview your cropped image and download it instantly in PNG format.' }
      ]
    },
    features: [
      'Crop images with pixel-perfect precision',
      'Choose from common aspect ratios (1:1, 16:9, 9:16, 4:3, 3:4)',
      'Set custom dimensions in pixels',
      'Real-time preview of cropped result',
      'Drag and drop image upload',
      'Instant download in PNG format',
      'All processing done in your browser',
      'No image quality loss'
    ],
    faq: [
      {
        q: 'What image formats are supported?',
        a: 'You can upload images in various formats including JPG, PNG, WebP, GIF, and more. The cropped output will be in PNG format.'
      },
      {
        q: 'Can I set custom dimensions?',
        a: 'Yes, you can enter specific width and height values in pixels, or use the aspect ratio presets for common dimensions.'
      },
      {
        q: 'Will cropping affect image quality?',
        a: 'No, the cropping process maintains the original image quality. The output is saved in lossless PNG format.'
      },
      {
        q: 'Is there a file size limit?',
        a: 'No, there are no file size limitations. However, very large images might take longer to process.'
      },
      {
        q: 'Are my images secure?',
        a: 'Yes, all processing is done locally in your browser. Your images are never uploaded to our servers.'
      }
    ]
  },
  'image-to-base64': {
    hero: {
      icon: 'file-code',
      iconBg: 'gradient-bg',
      title: 'Image to Base64 Converter',
      subtitle: 'Convert your images to Base64 format online. Free tool for encoding images to Base64 strings.',
      features: [
        { icon: 'shield', color: 'text-green-500', label: 'Secure Conversion' },
        { icon: 'sliders', color: 'text-purple-500', label: 'Format Options' },
        { icon: 'globe', color: 'text-blue-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is Image to Base64 Converter?',
      content: `The Image to Base64 Converter is a free online tool that allows you to convert your images into Base64 encoded strings. Base64 encoding is a way to represent binary data (like images) in an ASCII string format, making it easy to embed images directly in HTML, CSS, or JSON files.<br><br><strong>Conversion options:</strong> You can choose the output format (JPEG, PNG, or WebP), adjust quality settings for lossy formats, and get the Base64 string instantly. The tool also provides options to copy the Base64 string to clipboard or download it as a text file. All processing is done in your browser for privacy and speed.`
    },
    whyUse: {
      title: 'Why Use Image to Base64 Converter?',
      items: [
        { icon: 'code', title: 'Easy Integration', desc: 'Embed images directly in your code without needing separate image files.' },
        { icon: 'sliders', title: 'Format Control', desc: 'Choose between JPEG, PNG, and WebP formats with quality control for optimal results.' },
        { icon: 'clipboard', title: 'Quick Copy', desc: 'One-click copy functionality to easily use the Base64 string in your projects.' },
        { icon: 'shield', title: 'Privacy First', desc: 'All conversion happens in your browser. Your images are never uploaded to our servers.' }
      ]
    },
    howToUse: {
      title: 'How to Use Image to Base64 Converter',
      steps: [
        { icon: 'upload', title: 'Upload Your Image', desc: 'Click the upload area or drag and drop your image file into the designated zone.' },
        { icon: 'settings', title: 'Set Conversion Options', desc: 'Choose your desired output format (JPEG, PNG, or WebP) and adjust quality if needed.' },
        { icon: 'code', title: 'Get Base64 String', desc: 'Click "Convert to Base64" to generate the encoded string. Copy or download the result.' }
      ]
    },
    features: [
      'Convert images to Base64 from multiple formats',
      'Choose output format (JPEG, PNG, WebP)',
      'Adjust quality settings for lossy formats',
      'One-click copy to clipboard',
      'Download Base64 string as text file',
      'Real-time preview of original image',
      'Drag and drop image upload',
      'All processing done in your browser'
    ],
    faq: [
      {
        q: 'What is Base64 encoding?',
        a: 'Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It\'s commonly used to embed images in HTML, CSS, or JSON files.'
      },
      {
        q: 'What image formats are supported?',
        a: 'You can convert images from any common format (JPG, PNG, WebP, GIF, etc.) and output them as Base64 encoded JPEG, PNG, or WebP.'
      },
      {
        q: 'Why would I need to convert images to Base64?',
        a: 'Base64 encoding is useful for embedding images directly in code, reducing HTTP requests, and including images in JSON data or CSS files.'
      },
      {
        q: 'Is there a file size limit?',
        a: 'No, there are no file size limitations. However, very large images might take longer to process.'
      },
      {
        q: 'Are my images secure?',
        a: 'Yes, all conversion is done locally in your browser. Your images are never uploaded to our servers.'
      }
    ]
  },
  'convert-webp-to-png': {
    hero: {
      icon: 'image',
      iconBg: 'gradient-bg',
      title: 'WebP to PNG Converter',
      subtitle: 'Convert WebP images to PNG format with ease. Free online tool for high-quality image conversion.',
      features: [
        { icon: 'shield', color: 'text-green-500', label: 'Lossless Quality' },
        { icon: 'image', color: 'text-blue-500', label: 'Format Support' },
        { icon: 'globe', color: 'text-purple-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is WebP to PNG Converter?',
      content: `The WebP to PNG Converter is a free online tool that allows you to convert WebP images to PNG format. WebP is a modern image format developed by Google that provides superior compression for images on the web, while PNG is a widely supported format that offers lossless compression and transparency support.<br><br><strong>Conversion options:</strong> You can convert WebP images to PNG format while maintaining image quality and transparency. The tool supports all WebP image types and provides instant conversion without any software installation required. All processing is done in your browser for privacy and speed.`
    },
    whyUse: {
      title: 'Why Use WebP to PNG Converter?',
      items: [
        { icon: 'shield', title: 'Wide Compatibility', desc: 'PNG format is supported by virtually all image viewers and editors, making it more accessible than WebP.' },
        { icon: 'image', title: 'Lossless Quality', desc: 'PNG format provides lossless compression, ensuring your images maintain their original quality.' },
        { icon: 'layers', title: 'Transparency Support', desc: 'PNG format supports alpha channel transparency, making it ideal for images with transparent backgrounds.' },
        { icon: 'zap', title: 'Instant Conversion', desc: 'Convert your WebP images to PNG quickly and easily with our browser-based tool.' }
      ]
    },
    howToUse: {
      title: 'How to Use WebP to PNG Converter',
      steps: [
        { icon: 'upload', title: 'Upload WebP Image', desc: 'Click the upload area or drag and drop your WebP image file into the designated zone.' },
        { icon: 'settings', title: 'Adjust Settings', desc: 'Set the desired quality for your PNG output using the quality slider.' },
        { icon: 'image', title: 'Convert to PNG', desc: 'Click the "Convert to PNG" button to start the conversion process.' },
        { icon: 'download', title: 'Download PNG', desc: 'Once the conversion is complete, click the "Download PNG" button to save your converted image.' }
      ]
    },
    features: [
      'Convert WebP images to PNG format',
      'Preserve image quality and transparency',
      'Support for all WebP image types',
      'Instant conversion process',
      'No software installation required',
      'Drag and drop image upload',
      'Quality control for output',
      'All processing done in your browser'
    ],
    faq: [
      {
        q: 'What is WebP format?',
        a: 'WebP is a modern image format developed by Google that provides superior compression for images on the web. It supports both lossy and lossless compression, as well as transparency and animation.'
      },
      {
        q: 'Why convert WebP to PNG?',
        a: 'While WebP offers better compression, PNG is more widely supported and provides lossless quality. Converting to PNG can be necessary for compatibility with older systems or when you need to maintain the highest possible image quality.'
      },
      {
        q: 'Will the conversion affect image quality?',
        a: 'No, converting from WebP to PNG will not affect the image quality. PNG format provides lossless compression, ensuring your images maintain their original quality.'
      },
      {
        q: 'Is there a file size limit?',
        a: 'No, there is no file size limit for converting WebP images to PNG format. You can convert images of any size.'
      },
      {
        q: 'Are my images secure?',
        a: 'Yes, your images are completely secure. All conversions are done locally in your browser, and your images are never uploaded to our servers.'
      }
    ]
  },
  'gif-maker': {
    hero: {
      icon: 'image-play',
      iconBg: 'gradient-bg',
      title: 'GIF Maker',
      subtitle: 'Create animated GIFs from your images with customizable frame timing and effects',
      features: [
        { icon: 'image', color: 'text-blue-500', label: 'Multiple Frames' },
        { icon: 'clock', color: 'text-purple-500', label: 'Custom Timing' },
        { icon: 'globe', color: 'text-green-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is GIF Maker?',
      content: `The GIF Maker is a free online tool that allows you to create animated GIFs from multiple images. GIF (Graphics Interchange Format) is a bitmap image format that supports both static and animated images, making it perfect for creating simple animations, memes, and short video clips.<br><br><strong>Creation options:</strong> You can upload multiple images as frames, adjust the duration of each frame, set the loop count, and preview your animation before creating the final GIF. The tool supports various image formats and provides instant conversion without any software installation required. All processing is done in your browser for privacy and speed.`
    },
    whyUse: {
      title: 'Why Use GIF Maker?',
      items: [
        { icon: 'image', title: 'Easy Animation', desc: 'Create animated GIFs from your images with just a few clicks, no complex software required.' },
        { icon: 'clock', title: 'Custom Timing', desc: 'Control the duration of each frame to create smooth or dramatic animations.' },
        { icon: 'repeat', title: 'Loop Control', desc: 'Set how many times your GIF should loop, from once to infinite.' },
        { icon: 'eye', title: 'Live Preview', desc: 'Preview your animation in real-time before creating the final GIF.' }
      ]
    },
    howToUse: {
      title: 'How to Use GIF Maker',
      steps: [
        { icon: 'upload', title: 'Upload Images', desc: 'Click the upload area or drag and drop your image files. You can select multiple images to use as frames.' },
        { icon: 'settings', title: 'Adjust Settings', desc: 'Set the duration for each frame and choose how many times the GIF should loop.' },
        { icon: 'play', title: 'Preview Animation', desc: 'Click the "Preview GIF" button to see how your animation looks.' },
        { icon: 'image', title: 'Create & Download', desc: 'Click "Create GIF" to generate your animated GIF, then download it to your device.' }
      ]
    },
    features: [
      'Create GIFs from multiple image frames',
      'Customize frame duration for each image',
      'Set loop count (infinite or specific number)',
      'Live preview of animation',
      'Drag and drop image upload',
      'Support for various image formats',
      'Instant conversion process',
      'All processing done in your browser'
    ],
    faq: [
      {
        q: 'What is a GIF?',
        a: 'A GIF (Graphics Interchange Format) is a bitmap image format that supports both static and animated images. It\'s widely used for simple animations, memes, and short video clips on the web.'
      },
      {
        q: 'What image formats are supported?',
        a: 'You can use various image formats including JPG, PNG, WebP, and more. The tool will convert them to GIF format.'
      },
      {
        q: 'How many frames can I use?',
        a: 'You can use as many frames as you need, but keep in mind that more frames will result in a larger file size.'
      },
      {
        q: 'Can I adjust the timing of each frame?',
        a: 'Yes, you can set a custom duration for each frame in milliseconds, allowing you to create smooth or dramatic animations.'
      },
      {
        q: 'Are my images secure?',
        a: 'Yes, all processing is done locally in your browser. Your images are never uploaded to our servers.'
      }
    ]
  },
  'qr-code-generator': {
    hero: {
      icon: 'qr-code',
      iconBg: 'gradient-bg',
      title: 'QR Code Generator',
      subtitle: 'Create QR codes for URLs, text, contact information, and more with size and error correction options',
      features: [
        { icon: 'shield', color: 'text-green-500', label: 'Secure Generation' },
        { icon: 'zap', color: 'text-purple-500', label: 'Instant Results' },
        { icon: 'globe', color: 'text-blue-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is QR Code Generator?',
      content: `The QR Code Generator is a free online tool that allows you to create QR codes for various purposes. QR (Quick Response) codes are two-dimensional barcodes that can store different types of information such as URLs, text, contact details, and more.<br><br><strong>Options:</strong> You can adjust the size and error correction level of your QR code. All QR codes are generated with a black foreground and white background for maximum compatibility and scan reliability.`
    },
    whyUse: {
      title: 'Why Use QR Code Generator?',
      items: [
        { icon: 'shield', title: 'Error Correction', desc: 'Choose from multiple error correction levels to ensure your QR code remains scannable even if partially damaged.' },
        { icon: 'ruler', title: 'Custom Size', desc: 'Set the size of your QR code to fit your needs, from 50px to 1000px.' },
        { icon: 'globe', title: 'Universal Compatibility', desc: 'Generated QR codes are compatible with all modern QR code scanners and mobile devices.' },
        { icon: 'zap', title: 'Instant Generation', desc: 'Create and download QR codes instantly without any software installation required.' }
      ]
    },
    howToUse: {
      title: 'How to Use QR Code Generator',
      steps: [
        { icon: 'edit', title: 'Enter Content', desc: 'Type or paste the text, URL, or other content you want to encode in the QR code.' },
        { icon: 'settings', title: 'Set Size & Error Correction', desc: 'Adjust the size and error correction level to match your needs.' },
        { icon: 'wand-2', title: 'Generate QR Code', desc: 'Click the "Generate QR Code" button to create your QR code.' },
        { icon: 'download', title: 'Download', desc: 'Download your QR code as a PNG image for use in your projects.' }
      ]
    },
    features: [
      'Generate QR codes for URLs, text, contact information, and more',
      'Customize QR code size from 50px to 1000px',
      'Choose from multiple error correction levels (L, M, Q, H)',
      'All QR codes are black on white for maximum compatibility',
      'Instant preview of generated QR code',
      'Download QR code as PNG image',
      'All processing done in your browser for privacy and security',
      'No software installation required'
    ],
    faq: [
      {
        q: 'What is error correction in QR codes?',
        a: 'Error correction allows QR codes to remain scannable even if they are partially damaged or obscured. Higher error correction levels (H) provide better recovery but require more space, while lower levels (L) use less space but are more vulnerable to damage.'
      },
      {
        q: 'What types of content can I encode in a QR code?',
        a: 'You can encode various types of content including URLs, plain text, contact information (vCard), email addresses, phone numbers, SMS messages, and more.'
      },
      {
        q: 'Can I customize the colors of my QR code?',
        a: 'No, this tool generates QR codes with a black foreground and white background only. This ensures the highest level of compatibility and scan reliability.'
      },
      {
        q: 'What size should I make my QR code?',
        a: 'The size depends on your use case. For digital use, 200-300px is usually sufficient. For printing, you may want to use a larger size (500px+) to ensure good quality.'
      },
      {
        q: 'Are my QR codes secure?',
        a: 'Yes, all QR code generation is done locally in your browser. Your data is never sent to our servers, ensuring complete privacy and security.'
      }
    ]
  },
  'image-to-pdf-converter': {
    hero: {
      icon: 'file',
      iconBg: 'gradient-bg',
      title: 'Image to PDF Converter',
      subtitle: 'Combine your images into a single PDF file online. Free, fast, and privacy-friendly.',
      features: [
        { icon: 'image', color: 'text-blue-500', label: 'Multiple Images' },
        { icon: 'layers', color: 'text-purple-500', label: 'Reorder & Preview' },
        { icon: 'globe', color: 'text-green-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is Image to PDF Converter?',
      content: `Image to PDF Converter is a free online tool that allows you to combine multiple images into a single PDF document. Simply upload your images, arrange them in your preferred order, and download the resulting PDF. All processing is done in your browser for maximum privacy.`
    },
    whyUse: {
      title: 'Why Use Image to PDF Converter?',
      items: [
        { icon: 'image', title: 'Combine Images', desc: 'Merge multiple images into a single, easy-to-share PDF file.' },
        { icon: 'layers', title: 'Reorder & Preview', desc: 'Drag to reorder your images and preview the result before converting.' },
        { icon: 'shield', title: 'Privacy First', desc: 'All processing is done locally in your browser. Your images are never uploaded.' },
        { icon: 'zap', title: 'Instant Conversion', desc: 'Create and download your PDF instantly, no signup or installation required.' }
      ]
    },
    howToUse: {
      title: 'How to Use Image to PDF Converter',
      steps: [
        { icon: 'upload', title: 'Upload Images', desc: 'Click the upload area or drag and drop your images.' },
        { icon: 'settings', title: 'Reorder & Preview', desc: 'Arrange your images in the desired order and preview them.' },
        { icon: 'file-text', title: 'Convert to PDF', desc: 'Click "Convert to PDF" to generate your PDF document.' },
        { icon: 'download', title: 'Download PDF', desc: 'Download your combined PDF file instantly.' }
      ]
    },
    features: [
      'Combine multiple images into a single PDF',
      'Drag-and-drop upload and easy reordering',
      'Preview images before conversion',
      'All processing is done in your browser for privacy',
      'No file size or image count limits (browser memory applies)',
      'Download PDF instantly, no signup required',
      'Supports PNG, JPG, JPEG, BMP, GIF, WebP formats',
      'Modern, mobile-friendly interface'
    ],
    faq: [
      {
        q: 'What image formats are supported?',
        a: 'You can upload PNG, JPG, JPEG, BMP, GIF, and WebP images.'
      },
      {
        q: 'Is there a limit to the number of images I can combine?',
        a: 'There is no hard limit, but very large numbers of images may be limited by your browser memory.'
      },
      {
        q: 'Are my images uploaded to a server?',
        a: 'No, all processing is done locally in your browser. Your images never leave your device.'
      },
      {
        q: 'Can I reorder the images before creating the PDF?',
        a: 'Yes, you can drag to reorder your images before converting to PDF.'
      },
      {
        q: 'Is this tool free to use?',
        a: 'Yes, Image to PDF Converter is completely free and requires no signup.'
      }
    ]
  },
  'word-counter': {
    hero: {
      icon: 'whole-word',
      iconBg: 'gradient-bg',
      title: 'Word Counter',
      subtitle: 'Count words, characters, sentences, and paragraphs in your text. Get detailed statistics and reading time estimates.',
      features: [
        { icon: 'zap', color: 'text-blue-500', label: 'Real-time Analysis' },
        { icon: 'chart-bar', color: 'text-purple-500', label: 'Detailed Stats' },
        { icon: 'globe', color: 'text-green-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is Word Counter?',
      content: `The Word Counter is a free online tool that helps you analyze text by counting various elements such as words, characters, sentences, and paragraphs. It's particularly useful for writers, students, and professionals who need to meet specific length requirements or analyze their content.<br><br><strong>Analysis features:</strong> Our word counter provides detailed statistics about your text, including word count, character count, sentence count, paragraph count, reading time, speaking time, and unique words count. All processing is done in your browser for privacy and speed.`
    },
    whyUse: {
      title: 'Why Use Word Counter?',
      items: [
        { icon: 'zap', title: 'Real-time Analysis', desc: 'Get instant feedback as you type or paste your text, with all statistics updating automatically.' },
        { icon: 'chart-bar', title: 'Comprehensive Stats', desc: 'Track multiple metrics including words, characters, sentences, paragraphs, and reading time.' },
        { icon: 'clock', title: 'Time Estimates', desc: 'Calculate reading and speaking time based on standard rates for better content planning.' },
        { icon: 'shield', title: 'Privacy First', desc: 'All text analysis happens in your browser. Your content never leaves your device.' }
      ]
    },
    howToUse: {
      title: 'How to Use Word Counter',
      steps: [
        { icon: 'edit', title: 'Enter Your Text', desc: 'Type or paste your text into the input box. The counter updates automatically as you type.' },
        { icon: 'chart-bar', title: 'View Statistics', desc: 'Watch the statistics update in real-time, showing word count, character count, and more.' },
        { icon: 'copy', title: 'Copy Text', desc: 'Use the copy button to easily copy your text to the clipboard.' },
        { icon: 'trash-2', title: 'Clear Text', desc: 'Use the clear button to reset the counter and start over.' }
      ]
    },
    features: [
      'Real-time word, character, sentence, and paragraph counting',
      'Reading time estimation based on average reading speed',
      'Speaking time calculation for presentation planning',
      'Unique words analysis for vocabulary assessment',
      'Copy and clear functionality for easy text management',
      'Mobile-responsive design for use on any device',
      'No data storage or server processing',
      'Instant updates as you type or paste text'
    ],
    faq: [
      {
        q: 'How accurate is the word count?',
        a: 'Our word counter is highly accurate, counting words based on standard word separation rules. It handles various text formats and special characters correctly.'
      },
      {
        q: 'Does the tool count spaces as characters?',
        a: 'Yes, the character count includes spaces. This is useful for applications that have character limits including spaces.'
      },
      {
        q: 'How is reading time calculated?',
        a: 'Reading time is calculated based on an average reading speed of 200 words per minute, which is the standard reading speed for adults.'
      },
      {
        q: 'Is my text saved or stored?',
        a: 'No, your text is processed entirely in your browser and is never sent to our servers. This ensures complete privacy.'
      },
      {
        q: 'Can I use this tool on mobile devices?',
        a: 'Yes, our word counter is fully responsive and works perfectly on all devices, including smartphones and tablets.'
      }
    ]
  },
  'white-space-removal': {
    hero: {
      icon: 'letter-text',
      iconBg: 'gradient-bg',
      title: 'White Space Removal',
      subtitle: 'Remove extra spaces, tabs, and line breaks from your text. Clean up text formatting with ease.',
      features: [
        { icon: 'wand-2', color: 'text-blue-500', label: 'Smart Cleaning' },
        { icon: 'settings', color: 'text-purple-500', label: 'Custom Options' },
        { icon: 'globe', color: 'text-green-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is White Space Removal?',
      content: `The White Space Removal tool is a free online utility that helps you clean up text by removing unnecessary spaces, tabs, and line breaks. It's perfect for formatting text for various purposes, from code snippets to content editing.<br><br><strong>Cleaning options:</strong> You can choose to remove extra spaces, tabs, line breaks, and trim edges of your text. The tool processes your text instantly in your browser, ensuring privacy and speed.`
    },
    whyUse: {
      title: 'Why Use White Space Removal?',
      items: [
        { icon: 'wand-2', title: 'Smart Text Cleaning', desc: 'Remove unnecessary spaces, tabs, and line breaks with a single click.' },
        { icon: 'settings', title: 'Customizable Options', desc: 'Choose which types of white space to remove based on your needs.' },
        { icon: 'zap', title: 'Instant Results', desc: 'Get clean text instantly with real-time processing.' },
        { icon: 'shield', title: 'Privacy First', desc: 'All text processing happens in your browser. Your content never leaves your device.' }
      ]
    },
    howToUse: {
      title: 'How to Use White Space Removal',
      steps: [
        { icon: 'edit', title: 'Enter Your Text', desc: 'Type or paste your text into the input box.' },
        { icon: 'settings', title: 'Select Options', desc: 'Choose which types of white space to remove (spaces, tabs, line breaks, trim edges).' },
        { icon: 'wand-2', title: 'Clean Text', desc: 'Click the "Clean Text" button to process your text.' },
        { icon: 'copy', title: 'Copy Result', desc: 'Use the copy button to copy the cleaned text to your clipboard.' }
      ]
    },
    features: [
      'Remove extra spaces between words',
      'Remove tab characters',
      'Remove line breaks and newlines',
      'Trim spaces from text edges',
      'Customizable cleaning options',
      'Copy cleaned text to clipboard',
      'Clear text with one click',
      'All processing done in your browser'
    ],
    faq: [
      {
        q: 'What types of white space can be removed?',
        a: 'The tool can remove extra spaces between words, tab characters, line breaks, and trim spaces from the beginning and end of text.'
      },
      {
        q: 'Will the tool affect my text formatting?',
        a: 'The tool only removes white space characters (spaces, tabs, line breaks) and doesn\'t modify any other text formatting or content.'
      },
      {
        q: 'Can I choose which types of white space to remove?',
        a: 'Yes, you can select which types of white space to remove using the checkboxes before processing your text.'
      },
      {
        q: 'Is my text saved or stored?',
        a: 'No, your text is processed entirely in your browser and is never sent to our servers. This ensures complete privacy.'
      },
      {
        q: 'Can I use this tool on mobile devices?',
        a: 'Yes, our white space removal tool is fully responsive and works perfectly on all devices, including smartphones and tablets.'
      }
    ]
  },
  'case-converter': {
    hero: {
      icon: 'type',
      iconBg: 'gradient-bg',
      title: 'Case Converter',
      subtitle: 'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, and more. Free online case conversion tool for text formatting.',
      features: [
        { icon: 'zap', color: 'text-blue-500', label: 'Instant Conversion' },
        { icon: 'type', color: 'text-purple-500', label: 'Multiple Formats' },
        { icon: 'globe', color: 'text-green-500', label: 'Browser-based' }
      ]
    },
    whatIs: {
      title: 'What is a Case Converter?',
      content: `<p>A case converter is a text formatting tool that transforms text into different capitalization styles. It's particularly useful for:</p>
      <ul class="list-disc pl-6 mt-4 space-y-2">
        <li>Converting text to UPPERCASE for emphasis or headings</li>
        <li>Transforming text to lowercase for consistent formatting</li>
        <li>Creating Title Case for proper nouns and titles</li>
        <li>Applying Sentence case for proper sentence structure</li>
        <li>Generating alternating case for creative text styling</li>
        <li>Inverting case for special formatting needs</li>
      </ul>`
    },
    whyUse: {
      title: 'Why Use Our Case Converter?',
      items: [
        {
          icon: 'zap',
          title: 'Instant Conversion',
          description: 'Get immediate results with our fast and efficient case conversion tool.'
        },
        {
          icon: 'type',
          title: 'Multiple Formats',
          description: 'Choose from various case styles including UPPERCASE, lowercase, Title Case, and more.'
        },
        {
          icon: 'shield',
          title: 'Privacy Focused',
          description: 'Your text is processed locally in your browser - we never store or transmit your content.'
        },
        {
          icon: 'globe',
          title: 'Accessible Anywhere',
          description: 'Use our tool on any device with a web browser - no installation required.'
        }
      ]
    },
    howToUse: {
      title: 'How to Use',
      steps: [
        {
          icon: 'type',
          title: 'Enter Your Text',
          description: 'Type or paste your text into the input area.'
        },
        {
          icon: 'wand-2',
          title: 'Choose Case Style',
          description: 'Select your desired case conversion style from the available options.'
        },
        {
          icon: 'copy',
          title: 'Copy Result',
          description: 'Click the copy button to copy the converted text to your clipboard.'
        }
      ]
    },
    features: [
      'Convert text to UPPERCASE',
      'Transform text to lowercase',
      'Create Title Case formatting',
      'Apply Sentence case structure',
      'Generate alternating case text',
      'Invert text case',
      'Instant conversion',
      'Copy to clipboard functionality',
      'Clear text option',
      'Mobile-friendly interface'
    ],
    faq: [
      {
        q: 'What types of case conversion are available?',
        a: 'Our tool offers six different case conversion options: UPPERCASE, lowercase, Title Case, Sentence case, alternating case, and inverse case.'
      },
      {
        q: 'Is my text safe when using this tool?',
        a: 'Yes, your text is completely safe. All processing happens locally in your browser, and we never store or transmit your content.'
      },
      {
        q: 'Can I use this tool on mobile devices?',
        a: 'Yes, our case converter is fully responsive and works on any device with a web browser, including smartphones and tablets.'
      },
      {
        q: 'How do I copy the converted text?',
        a: 'Simply click the "Copy" button after converting your text, and it will be copied to your clipboard automatically.'
      },
      {
        q: 'Is there a limit to how much text I can convert?',
        a: 'There is no strict limit, but for optimal performance, we recommend converting text under 100,000 characters at a time.'
      }
    ]
  },
  'text-to-handwriting': {
    hero: {
      icon: 'pen-tool',
      iconBg: 'gradient-bg',
      title: 'Text to Handwriting Converter',
      subtitle: 'Transform your digital text into beautiful handwriting styles with customizable paper backgrounds',
      features: [
        { icon: 'pen-tool', color: 'text-blue-500', label: 'Multiple Styles' },
        { icon: 'layout', color: 'text-purple-500', label: 'Paper Options' },
        { icon: 'download', color: 'text-green-500', label: 'High Quality' }
      ]
    },
    whatIs: {
      title: 'What is Text to Handwriting Converter?',
      content: `The Text to Handwriting Converter is a free online tool that transforms your digital text into realistic handwriting styles. It's perfect for creating personalized notes, cards, or adding a human touch to your digital content.<br><br><strong>Conversion options:</strong> Choose from multiple handwriting styles with live previews, various paper backgrounds (lined, blank, grid), and customization options like font size, line spacing, and ink color. All processing is done in your browser for privacy and speed.`
    },
    whyUse: {
      title: 'Why Use Text to Handwriting Converter?',
      items: [
        { icon: 'pen-tool', title: 'Multiple Styles', desc: 'Choose from various handwriting styles including cursive, print, neat, and casual, with live previews of each style.' },
        { icon: 'layout', title: 'Paper Options', desc: 'Select from lined, blank, or grid paper backgrounds with proper spacing and alignment for authentic results.' },
        { icon: 'sliders', title: 'Customization', desc: 'Adjust font size, line spacing, and ink color to create the perfect handwritten look for your needs.' },
        { icon: 'download', title: 'High Quality', desc: 'Download your converted text as a high-resolution PNG image, perfect for any use case.' }
      ]
    },
    howToUse: {
      title: 'How to Use Text to Handwriting Converter',
      steps: [
        { icon: 'type', title: 'Enter Your Text', desc: 'Type or paste the text you want to convert into handwriting.' },
        { icon: 'sliders', title: 'Choose Style', desc: 'Select your preferred handwriting style and see a live preview of how it looks.' },
        { icon: 'settings', title: 'Customize', desc: 'Adjust font size, line spacing, and ink color to match your preferences.' },
        { icon: 'download', title: 'Download', desc: 'Click the download button to save your handwritten text as a PNG image.' }
      ]
    },
    features: [
      'Convert text to multiple handwriting styles',
      'Choose from various paper backgrounds (lined, blank, grid)',
      'Adjustable font size and line spacing',
      'Custom ink color selection',
      'Real-time preview of changes',
      'Download as high-quality PNG image',
      'Mobile-friendly interface',
      'All processing done in your browser'
    ],
    faq: [
      {
        q: 'What file format is the output?',
        a: 'The converted text is downloaded as a high-quality PNG image file, which can be used in any project or shared easily.'
      },
      {
        q: 'Can I use the converted text commercially?',
        a: 'Yes, you can use the converted text for both personal and commercial purposes. The handwriting fonts used are free for commercial use.'
      },
      {
        q: 'Is there a limit to how much text I can convert?',
        a: 'There is no strict limit, but for best results, we recommend converting text in smaller chunks to maintain quality and readability.'
      },
      {
        q: 'Can I customize the handwriting style?',
        a: 'Yes, you can choose from multiple handwriting styles and adjust various parameters like size, spacing, and color to create your desired look.'
      },
      {
        q: 'Are my texts secure?',
        a: 'Yes, all conversion is done locally in your browser. Your text is never uploaded to our servers.'
      }
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
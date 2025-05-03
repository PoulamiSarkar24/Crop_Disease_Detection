const translations = {
    en: {
      "hero-heading": "AI-Powered Crop Disease Detection",
      "hero-description": "Upload a crop image to detect diseases and get expert treatment suggestions instantly.",
      "upload-heading": "🌾 Upload Your Crop Image",
      "upload-label": "📁 Choose File",
      "submit-button": "🔍 Detect Disease",
      "loader": "🔄 Analyzing image...",
      "result-heading": "🧪 Prediction Result",
      "disease-label": "Disease:",
      "confidence-label": "Confidence:",
      "treatment-label": "Treatment:",
      "footer-text": "© 2025 Team Harvest Link. Empowering Farmers with AI 🌾",
      "about-heading": "📖 About Harvest Link",
      "about-content": "Harvest Link is an AI-powered tool developed by Team Harvest Link to help farmers identify crop diseases early and get treatment recommendations instantly. By analyzing uploaded crop images using advanced machine learning, Harvest Link helps prevent the spread of plant diseases and reduces crop loss. This tool is built to empower farmers with real-time insights and promote sustainable agriculture practices across rural and urban farming communities."
    },
    bn: {
      "hero-heading": "এআই-চালিত ফসল রোগ সনাক্তকরণ",
      "hero-description": "রোগ সনাক্ত করতে এবং তাৎক্ষণিক চিকিৎসার পরামর্শ পেতে একটি ফসলের ছবি আপলোড করুন।",
      "upload-heading": "🌾 আপনার ফসলের ছবি আপলোড করুন",
      "upload-label": "📁 ফাইল নির্বাচন করুন",
      "submit-button": "🔍 রোগ সনাক্ত করুন",
      "loader": "🔄 ছবি বিশ্লেষণ করা হচ্ছে...",
      "result-heading": "🧪 বিশ্লেষণের ফলাফল",
      "disease-label": "রোগ:",
      "confidence-label": "নির্ভরযোগ্যতা:",
      "treatment-label": "চিকিৎসা:",
      "footer-text": "© 2025 টিম হার্ভেস্ট লিংক। কৃষকদের জন্য এআই 🌾",
      "about-heading": "📖 Harvest Link সম্পর্কে",
      "about-content": "Harvest Link হল একটি কৃত্রিম বুদ্ধিমত্তা চালিত সরঞ্জাম যা Team Harvest Link দ্বারা তৈরি। এটি কৃষকদের ফসলের রোগ দ্রুত সনাক্ত করতে এবং চিকিৎসা পরামর্শ পেতে সাহায্য করে। ফসলের ছবি বিশ্লেষণ করে Harvest Link রোগ ছড়ানো রোধ করে এবং ফসলের ক্ষয় কমায়। এই সরঞ্জামটি বাস্তব সময়ে অন্তর্দৃষ্টি প্রদান করে কৃষকদের ক্ষমতায়ন করতে এবং টেকসই কৃষি প্রচারে সহায়তা করে।"
    },
    hi: {
      "hero-heading": "एआई-संचालित फसल रोग पहचान",
      "hero-description": "रोगों का पता लगाने और त्वरित उपचार सुझाव प्राप्त करने के लिए फसल की छवि अपलोड करें।",
      "upload-heading": "🌾 अपनी फसल की छवि अपलोड करें",
      "upload-label": "📁 फ़ाइल चुनें",
      "submit-button": "🔍 रोग पहचानें",
      "loader": "🔄 छवि का विश्लेषण किया जा रहा है...",
      "result-heading": "🧪 विश्लेषण परिणाम",
      "disease-label": "रोग:",
      "confidence-label": "विश्वास स्तर:",
      "treatment-label": "उपचार:",
      "footer-text": "© 2025 टीम हार्वेस्ट लिंक। किसानों को एआई से सशक्त बनाना 🌾",
      "about-heading": "📖 Harvest Link के बारे में",
      "about-content": "Harvest Link एक एआई-संचालित टूल है जिसे Team Harvest Link ने विकसित किया है ताकि किसान फसलों में रोगों की शीघ्र पहचान कर सकें और तुरंत उपचार प्राप्त कर सकें। यह उपकरण अपलोड की गई फसल छवियों का विश्लेषण कर रोगों को फैलने से रोकता है और फसल हानि को कम करता है। यह किसानों को वास्तविक समय की जानकारी देकर सशक्त बनाता है और टिकाऊ कृषि को बढ़ावा देता है।"
    }
  };
  
  const elementsToTranslate = [
    "hero-heading", "hero-description", "upload-heading", "upload-label", "submit-button",
    "loader", "result-heading", "disease-label", "confidence-label", "treatment-label",
    "footer-text", "about-heading", "about-content"
  ];
  
  // Language toggle
  document.getElementById("toggle-en").addEventListener("click", () => applyLanguage("en"));
  document.getElementById("toggle-bn").addEventListener("click", () => applyLanguage("bn"));
  document.getElementById("toggle-hi").addEventListener("click", () => applyLanguage("hi"));
  
  function applyLanguage(lang) {
    const dictionary = translations[lang];
    elementsToTranslate.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerText = dictionary[id];
    });
  }
  
  // Simulate upload and analysis
  const uploadForm = document.getElementById("uploadForm");
  const imageInput = document.getElementById("imageInput");
  const loader = document.getElementById("loader");
  const resultSection = document.getElementById("result");
  
  uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    if (imageInput.files.length === 0) {
      alert("Please select an image!");
      return;
    }
  
    loader.classList.remove("hidden");
    resultSection.classList.add("hidden");



    // Toggle between tabs
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.add('hidden');
    });
    document.getElementById(`${tabId}-tab`).classList.remove('hidden');
  }
  
  // Optional: set default tab
  window.onload = function () {
    showTab('home');
  };
  
  
    // Simulate 2-second processing delay
    setTimeout(() => {
      loader.classList.add("hidden");
      resultSection.classList.remove("hidden");
  
      // Simulated results (replace with real AI integration)
      //document.getElementById("disease").innerText = "Leaf Spot";
      //document.getElementById("confidence").innerText = "92";
      //document.getElementById("treatment").innerText = "Apply Mancozeb 75% WP fungicide every 7–10 days.";
    }, 2000);


    const langButtons = {
        en: document.getElementById("toggle-en"),
        bn: document.getElementById("toggle-bn"),
        hi: document.getElementById("toggle-hi"),
      };
      
      function switchLanguage(lang) {
        document.querySelectorAll(".lang-content").forEach(el => el.classList.add("hidden"));
        const aboutContent = document.getElementById(`about-content-${lang}`);
        if (aboutContent) aboutContent.classList.remove("hidden");
      }
      
      // Attach event listeners
      langButtons.en.onclick = () => switchLanguage("en");
      langButtons.bn.onclick = () => switchLanguage("bn");
      langButtons.hi.onclick = () => switchLanguage("hi");
      
      // Default language
      switchLanguage("bn");
      
  });
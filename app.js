const cropData = {
  wheat: { name: "Wheat", base: 2320, volatility: 70, storageGain: 1.8, shelf: 75 },
  rice: { name: "Rice", base: 2860, volatility: 90, storageGain: 1.2, shelf: 90 },
  cotton: { name: "Cotton", base: 7150, volatility: 260, storageGain: 2.3, shelf: 90 },
  maize: { name: "Maize", base: 2180, volatility: 75, storageGain: 1.5, shelf: 65 },
  soybean: { name: "Soybean", base: 4620, volatility: 180, storageGain: 1.9, shelf: 80 },
  tomato: { name: "Tomato", base: 1550, volatility: 320, storageGain: -3.4, shelf: 8 },
  onion: { name: "Onion", base: 1850, volatility: 210, storageGain: 0.8, shelf: 45 },
  potato: { name: "Potato", base: 1450, volatility: 160, storageGain: 0.6, shelf: 55 },
  chilli: { name: "Chilli", base: 9200, volatility: 540, storageGain: 2.6, shelf: 30 },
  brinjal: { name: "Brinjal", base: 1650, volatility: 230, storageGain: -2.1, shelf: 6 },
  mango: { name: "Mango", base: 5200, volatility: 470, storageGain: -1.6, shelf: 10 },
  banana: { name: "Banana", base: 1850, volatility: 190, storageGain: -1.1, shelf: 9 },
  grapes: { name: "Grapes", base: 6100, volatility: 520, storageGain: -2.4, shelf: 7 },
  apple: { name: "Apple", base: 7800, volatility: 360, storageGain: 0.4, shelf: 35 },
  cabbage: { name: "Cabbage", base: 1250, volatility: 170, storageGain: -1.8, shelf: 9 },
  marigold: { name: "Marigold", base: 4200, volatility: 680, storageGain: -4.8, shelf: 3 },
  rose: { name: "Rose", base: 12800, volatility: 950, storageGain: -5.5, shelf: 2 },
  jasmine: { name: "Jasmine", base: 18500, volatility: 1300, storageGain: -6.2, shelf: 1 }
};

const directConsumerChannels = {
  homes: {
    label: "Homes",
    buyer: "Apartment groups and weekly family boxes",
    priceLift: 1.34,
    demand: { wheat: 72, rice: 88, cotton: 15, maize: 64, soybean: 58, tomato: 94, onion: 90, potato: 86, chilli: 72, brinjal: 88, mango: 92, banana: 91, grapes: 87, apple: 82, marigold: 68, rose: 62, jasmine: 74 },
    pack: "5-10 kg clean packs",
    payment: "UPI before delivery",
    pitch: "Fresh farm produce delivered directly to your home with transparent weight and price."
  },
  hotels: {
    label: "Hotels",
    buyer: "Hotels, hostels, and catering kitchens",
    priceLift: 1.2,
    demand: { wheat: 70, rice: 92, cotton: 10, maize: 68, soybean: 62, tomato: 86, onion: 88, potato: 90, chilli: 84, brinjal: 76, mango: 81, banana: 86, grapes: 78, apple: 73, marigold: 48, rose: 52, jasmine: 58 },
    pack: "25-50 kg kitchen lots",
    payment: "50% advance, balance on delivery",
    pitch: "Reliable bulk supply with fixed weekly rates and direct farmer billing."
  },
  restaurants: {
    label: "Restaurants",
    buyer: "Restaurants, cafes, and cloud kitchens",
    priceLift: 1.27,
    demand: { wheat: 66, rice: 84, cotton: 8, maize: 76, soybean: 70, tomato: 96, onion: 92, potato: 82, chilli: 90, brinjal: 91, mango: 84, banana: 88, grapes: 86, apple: 76, marigold: 54, rose: 68, jasmine: 82 },
    pack: "Daily or alternate-day crates",
    payment: "Same-day settlement",
    pitch: "Consistent quality, fresher stock, and no commission agent in between."
  }
};

const cropNames = {
  en: { wheat: "Wheat", rice: "Rice", cotton: "Cotton", maize: "Maize", soybean: "Soybean", tomato: "Tomato" },
  hi: { wheat: "गेहूं", rice: "धान", cotton: "कपास", maize: "मक्का", soybean: "सोयाबीन", tomato: "टमाटर" },
  te: { wheat: "గోధుమ", rice: "బియ్యం", cotton: "పత్తి", maize: "మొక్కజొన్న", soybean: "సోయాబీన్", tomato: "టమాటా" },
  ta: { wheat: "கோதுமை", rice: "அரிசி", cotton: "பருத்தி", maize: "மக்காச்சோளம்", soybean: "சோயாபீன்", tomato: "தக்காளி" },
  kn: { wheat: "ಗೋಧಿ", rice: "ಅಕ್ಕಿ", cotton: "ಹತ್ತಿ", maize: "ಮೆಕ್ಕೆಜೋಳ", soybean: "ಸೋಯಾಬೀನ್", tomato: "ಟೊಮೇಟೊ" },
  mr: { wheat: "गहू", rice: "तांदूळ", cotton: "कापूस", maize: "मका", soybean: "सोयाबीन", tomato: "टोमॅटो" }
};

const i18n = {
  en: {
    heroTitle: "Smart Crop Market Negotiator",
    heroIntro: "An interactive assistant for farmers to compare prices, negotiate with buyers, check scam risk, and decide when to sell or store crops.",
    marketPrice: "market price", buyerTrustMini: "buyer trust", languageLabel: "Language", cropLabel: "Crop", quantityLabel: "Quantity", quintal: "quintal",
    offerLabel: "Buyer Offer", transportLabel: "Transport Cost", costLabel: "Production Cost", storageDaysLabel: "Storage Days", days: "days",
    voiceStyleLabel: "Voice Modulator", voiceRateLabel: "Voice Speed", useVoice: "Use Voice", speakPitch: "Speak Deal", reset: "Reset", analyze: "Analyze Deal",
    voiceHelp: "Voice support listens for crop, quantity, and offer details when your browser allows speech recognition.",
    predictedPriceLabel: "Predicted Price", profitLabel: "Profit", buyerTrustLabel: "Buyer Trust", scamRiskLabel: "Scam Risk",
    negotiationTitle: "AI Negotiation Assistant", copy: "Copy", districtTitle: "District Crop Prices", pricePredictionTitle: "Price Prediction",
    buyerTrustTitle: "Buyer Trust Score", scamTitle: "AI Scam Detection", storageTitle: "Storage Advisor", sellNow: "Sell now", sellLater: "After storage",
    profitCalculatorTitle: "Profit Calculator", selectPrice: "Use price", demoData: "Demo district data", copied: "Copied", listen: "Listening in selected language.",
    noVoice: "Voice support is not available in this browser. Try Chrome or Edge.", heard: "Heard", noSpeech: "Voice input could not start. Check microphone permission."
  },
  hi: {
    heroTitle: "स्मार्ट फसल बाजार नेगोशिएटर",
    heroIntro: "किसान कीमत तुलना, खरीदार से बातचीत, धोखाधड़ी जांच और स्टोरेज निर्णय एक ही जगह कर सकते हैं.",
    marketPrice: "बाजार कीमत", buyerTrustMini: "खरीदार भरोसा", languageLabel: "भाषा", cropLabel: "फसल", quantityLabel: "मात्रा", quintal: "क्विंटल",
    offerLabel: "खरीदार ऑफर", transportLabel: "परिवहन खर्च", costLabel: "उत्पादन खर्च", storageDaysLabel: "स्टोरेज दिन", days: "दिन",
    voiceStyleLabel: "वॉइस मॉड्युलेटर", voiceRateLabel: "आवाज गति", useVoice: "वॉइस इस्तेमाल करें", speakPitch: "डील सुनाएं", reset: "रीसेट", analyze: "डील जांचें",
    voiceHelp: "ब्राउजर अनुमति दे तो वॉइस से फसल, मात्रा और ऑफर बोल सकते हैं.",
    predictedPriceLabel: "अनुमानित कीमत", profitLabel: "लाभ", buyerTrustLabel: "खरीदार भरोसा", scamRiskLabel: "धोखा जोखिम",
    negotiationTitle: "AI बातचीत सहायक", copy: "कॉपी", districtTitle: "जिला फसल कीमतें", pricePredictionTitle: "कीमत अनुमान",
    buyerTrustTitle: "खरीदार भरोसा स्कोर", scamTitle: "AI धोखा जांच", storageTitle: "स्टोरेज सलाह", sellNow: "अभी बेचें", sellLater: "स्टोरेज के बाद",
    profitCalculatorTitle: "लाभ कैलकुलेटर", selectPrice: "कीमत चुनें", demoData: "डेमो जिला डेटा", copied: "कॉपी हुआ", listen: "चुनी हुई भाषा में सुन रहा है.",
    noVoice: "इस ब्राउजर में वॉइस उपलब्ध नहीं है. Chrome या Edge आजमाएं.", heard: "सुना", noSpeech: "वॉइस शुरू नहीं हुई. माइक्रोफोन अनुमति जांचें."
  },
  te: {
    heroTitle: "స్మార్ట్ పంట మార్కెట్ నెగోషియేటర్",
    heroIntro: "రైతులు ధరలను పోల్చి, కొనుగోలుదారుతో మాట్లాడి, మోసం ప్రమాదాన్ని చూసి, నిల్వ నిర్ణయం తీసుకోవచ్చు.",
    marketPrice: "మార్కెట్ ధర", buyerTrustMini: "కొనుగోలుదారు నమ్మకం", languageLabel: "భాష", cropLabel: "పంట", quantityLabel: "పరిమాణం", quintal: "క్వింటాల్",
    offerLabel: "కొనుగోలుదారు ఆఫర్", transportLabel: "రవాణా ఖర్చు", costLabel: "ఉత్పత్తి ఖర్చు", storageDaysLabel: "నిల్వ రోజులు", days: "రోజులు",
    voiceStyleLabel: "వాయిస్ మాడ్యులేటర్", voiceRateLabel: "వాయిస్ వేగం", useVoice: "వాయిస్ వాడండి", speakPitch: "డీల్ వినిపించు", reset: "రీసెట్", analyze: "డీల్ విశ్లేషించు",
    voiceHelp: "బ్రౌజర్ అనుమతిస్తే పంట, పరిమాణం, ఆఫర్ ను వాయిస్ ద్వారా చెప్పవచ్చు.",
    predictedPriceLabel: "అంచనా ధర", profitLabel: "లాభం", buyerTrustLabel: "కొనుగోలుదారు నమ్మకం", scamRiskLabel: "మోసం ప్రమాదం",
    negotiationTitle: "AI నెగోషియేషన్ అసిస్టెంట్", copy: "కాపీ", districtTitle: "జిల్లా పంట ధరలు", pricePredictionTitle: "ధర అంచనా",
    buyerTrustTitle: "కొనుగోలుదారు ట్రస్ట్ స్కోర్", scamTitle: "AI మోసం గుర్తింపు", storageTitle: "నిల్వ సలహా", sellNow: "ఇప్పుడే అమ్ము", sellLater: "నిల్వ తర్వాత",
    profitCalculatorTitle: "లాభం కాల్క్యులేటర్", selectPrice: "ధర వాడు", demoData: "డెమో జిల్లా డేటా", copied: "కాపీ అయింది", listen: "ఎంచుకున్న భాషలో వింటోంది.",
    noVoice: "ఈ బ్రౌజర్ లో వాయిస్ లేదు. Chrome లేదా Edge వాడండి.", heard: "విన్నది", noSpeech: "వాయిస్ ప్రారంభం కాలేదు. మైక్ అనుమతి చూడండి."
  },
  ta: {
    heroTitle: "ஸ்மார்ட் பயிர் சந்தை பேசுபவர்",
    heroIntro: "விவசாயிகள் விலை ஒப்பிட, வாங்குபவருடன் பேச, மோசடி ஆபத்தை பார்க்க, சேமிப்பு முடிவு எடுக்க உதவும்.",
    marketPrice: "சந்தை விலை", buyerTrustMini: "வாங்குபவர் நம்பிக்கை", languageLabel: "மொழி", cropLabel: "பயிர்", quantityLabel: "அளவு", quintal: "குவிண்டால்",
    offerLabel: "வாங்குபவர் ஆஃபர்", transportLabel: "போக்குவரத்து செலவு", costLabel: "உற்பத்தி செலவு", storageDaysLabel: "சேமிப்பு நாட்கள்", days: "நாட்கள்",
    voiceStyleLabel: "குரல் மாற்றி", voiceRateLabel: "குரல் வேகம்", useVoice: "குரல் பயன்படுத்து", speakPitch: "டீலை பேசு", reset: "ரீசெட்", analyze: "டீல் பகுப்பாய்வு",
    voiceHelp: "பிரவுசர் அனுமதித்தால் பயிர், அளவு, ஆஃபர் ஆகியவற்றை குரலில் சொல்லலாம்.",
    predictedPriceLabel: "கணிப்பு விலை", profitLabel: "லாபம்", buyerTrustLabel: "வாங்குபவர் நம்பிக்கை", scamRiskLabel: "மோசடி ஆபத்து",
    negotiationTitle: "AI பேச்சுவார்த்தை உதவி", copy: "காப்பி", districtTitle: "மாவட்ட பயிர் விலைகள்", pricePredictionTitle: "விலை கணிப்பு",
    buyerTrustTitle: "வாங்குபவர் நம்பிக்கை மதிப்பெண்", scamTitle: "AI மோசடி கண்டறிதல்", storageTitle: "சேமிப்பு ஆலோசனை", sellNow: "இப்போது விற்க", sellLater: "சேமித்த பின்",
    profitCalculatorTitle: "லாப கணிப்பான்", selectPrice: "விலை பயன்படுத்து", demoData: "டெமோ மாவட்ட தரவு", copied: "காப்பி ஆனது", listen: "தேர்ந்தெடுத்த மொழியில் கேட்கிறது.",
    noVoice: "இந்த பிரவுசரில் குரல் இல்லை. Chrome அல்லது Edge முயற்சிக்கவும்.", heard: "கேட்டது", noSpeech: "குரல் தொடங்கவில்லை. மைக் அனுமதி பார்க்கவும்."
  },
  kn: {
    heroTitle: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ಮಾತುಕತೆಗಾರ",
    heroIntro: "ರೈತರು ಬೆಲೆ ಹೋಲಿಸಿ, ಖರೀದಿದಾರರೊಂದಿಗೆ ಮಾತುಕತೆ ಮಾಡಿ, ವಂಚನೆ ಅಪಾಯ ನೋಡಿ, ಸಂಗ್ರಹ ನಿರ್ಧಾರ ಮಾಡಬಹುದು.",
    marketPrice: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ", buyerTrustMini: "ಖರೀದಿದಾರ ನಂಬಿಕೆ", languageLabel: "ಭಾಷೆ", cropLabel: "ಬೆಳೆ", quantityLabel: "ಪ್ರಮಾಣ", quintal: "ಕ್ವಿಂಟಲ್",
    offerLabel: "ಖರೀದಿದಾರ ಆಫರ್", transportLabel: "ಸಾರಿಗೆ ವೆಚ್ಚ", costLabel: "ಉತ್ಪಾದನಾ ವೆಚ್ಚ", storageDaysLabel: "ಸಂಗ್ರಹ ದಿನಗಳು", days: "ದಿನಗಳು",
    voiceStyleLabel: "ವಾಯ್ಸ್ ಮಾಡ್ಯುಲೇಟರ್", voiceRateLabel: "ವಾಯ್ಸ್ ವೇಗ", useVoice: "ವಾಯ್ಸ್ ಬಳಸಿ", speakPitch: "ಡೀಲ್ ಹೇಳಿ", reset: "ರೀಸೆಟ್", analyze: "ಡೀಲ್ ವಿಶ್ಲೇಷಿಸಿ",
    voiceHelp: "ಬ್ರೌಸರ್ ಅನುಮತಿಸಿದರೆ ಬೆಳೆ, ಪ್ರಮಾಣ, ಆಫರ್ ಅನ್ನು ಧ್ವನಿಯಲ್ಲಿ ಹೇಳಬಹುದು.",
    predictedPriceLabel: "ಅಂದಾಜು ಬೆಲೆ", profitLabel: "ಲಾಭ", buyerTrustLabel: "ಖರೀದಿದಾರ ನಂಬಿಕೆ", scamRiskLabel: "ವಂಚನೆ ಅಪಾಯ",
    negotiationTitle: "AI ಮಾತುಕತೆ ಸಹಾಯಕ", copy: "ಕಾಪಿ", districtTitle: "ಜಿಲ್ಲಾ ಬೆಳೆ ಬೆಲೆಗಳು", pricePredictionTitle: "ಬೆಲೆ ಅಂದಾಜು",
    buyerTrustTitle: "ಖರೀದಿದಾರ ಟ್ರಸ್ಟ್ ಸ್ಕೋರ್", scamTitle: "AI ವಂಚನೆ ಪತ್ತೆ", storageTitle: "ಸಂಗ್ರಹ ಸಲಹೆ", sellNow: "ಈಗ ಮಾರಾಟ", sellLater: "ಸಂಗ್ರಹದ ನಂತರ",
    profitCalculatorTitle: "ಲಾಭ ಕ್ಯಾಲ್ಕುಲೇಟರ್", selectPrice: "ಬೆಲೆ ಬಳಸಿ", demoData: "ಡೆಮೋ ಜಿಲ್ಲಾ ಡೇಟಾ", copied: "ಕಾಪಿ ಆಯಿತು", listen: "ಆಯ್ದ ಭಾಷೆಯಲ್ಲಿ ಕೇಳುತ್ತಿದೆ.",
    noVoice: "ಈ ಬ್ರೌಸರ್ ನಲ್ಲಿ ವಾಯ್ಸ್ ಇಲ್ಲ. Chrome ಅಥವಾ Edge ಪ್ರಯತ್ನಿಸಿ.", heard: "ಕೇಳಿತು", noSpeech: "ವಾಯ್ಸ್ ಆರಂಭವಾಗಲಿಲ್ಲ. ಮೈಕ್ ಅನುಮತಿ ನೋಡಿ."
  },
  mr: {
    heroTitle: "स्मार्ट पीक बाजार नेगोशिएटर",
    heroIntro: "शेतकरी किंमत तुलना, खरेदीदाराशी बोलणी, फसवणूक तपासणी आणि साठवण निर्णय घेऊ शकतात.",
    marketPrice: "बाजारभाव", buyerTrustMini: "खरेदीदार विश्वास", languageLabel: "भाषा", cropLabel: "पीक", quantityLabel: "प्रमाण", quintal: "क्विंटल",
    offerLabel: "खरेदीदार ऑफर", transportLabel: "वाहतूक खर्च", costLabel: "उत्पादन खर्च", storageDaysLabel: "साठवण दिवस", days: "दिवस",
    voiceStyleLabel: "व्हॉइस मॉड्युलेटर", voiceRateLabel: "आवाज वेग", useVoice: "व्हॉइस वापरा", speakPitch: "डील ऐका", reset: "रीसेट", analyze: "डील तपासा",
    voiceHelp: "ब्राउजर परवानगी देत असेल तर पीक, प्रमाण आणि ऑफर आवाजाने सांगू शकता.",
    predictedPriceLabel: "अंदाजित किंमत", profitLabel: "नफा", buyerTrustLabel: "खरेदीदार विश्वास", scamRiskLabel: "फसवणूक धोका",
    negotiationTitle: "AI बोलणी सहाय्यक", copy: "कॉपी", districtTitle: "जिल्हा पीक भाव", pricePredictionTitle: "किंमत अंदाज",
    buyerTrustTitle: "खरेदीदार ट्रस्ट स्कोअर", scamTitle: "AI फसवणूक तपासणी", storageTitle: "साठवण सल्ला", sellNow: "आता विक्री", sellLater: "साठवणीनंतर",
    profitCalculatorTitle: "नफा कॅल्क्युलेटर", selectPrice: "भाव वापरा", demoData: "डेमो जिल्हा डेटा", copied: "कॉपी झाले", listen: "निवडलेल्या भाषेत ऐकत आहे.",
    noVoice: "या ब्राउजरमध्ये व्हॉइस उपलब्ध नाही. Chrome किंवा Edge वापरा.", heard: "ऐकले", noSpeech: "व्हॉइस सुरू झाला नाही. माईक परवानगी तपासा."
  }
};

const buyerProfiles = {
  wheat: { repeatOrders: 8, paymentDays: 4, disputeRate: 6, license: true },
  rice: { repeatOrders: 14, paymentDays: 3, disputeRate: 4, license: true },
  cotton: { repeatOrders: 6, paymentDays: 9, disputeRate: 11, license: true },
  maize: { repeatOrders: 5, paymentDays: 6, disputeRate: 10, license: false },
  soybean: { repeatOrders: 11, paymentDays: 5, disputeRate: 7, license: true },
  tomato: { repeatOrders: 3, paymentDays: 12, disputeRate: 14, license: false },
  onion: { repeatOrders: 9, paymentDays: 5, disputeRate: 8, license: true },
  potato: { repeatOrders: 10, paymentDays: 4, disputeRate: 7, license: true },
  chilli: { repeatOrders: 7, paymentDays: 7, disputeRate: 9, license: true },
  brinjal: { repeatOrders: 4, paymentDays: 8, disputeRate: 12, license: false },
  mango: { repeatOrders: 12, paymentDays: 4, disputeRate: 6, license: true },
  banana: { repeatOrders: 8, paymentDays: 5, disputeRate: 8, license: true },
  grapes: { repeatOrders: 6, paymentDays: 6, disputeRate: 9, license: true },
  apple: { repeatOrders: 13, paymentDays: 3, disputeRate: 5, license: true },
  marigold: { repeatOrders: 5, paymentDays: 2, disputeRate: 10, license: true },
  rose: { repeatOrders: 4, paymentDays: 2, disputeRate: 12, license: true },
  jasmine: { repeatOrders: 6, paymentDays: 1, disputeRate: 9, license: true }
};

const districts = [
  { name: "Pune", state: "MH", mod: 1.08, trend: 4 }, { name: "Nashik", state: "MH", mod: 1.12, trend: 6 },
  { name: "Nagpur", state: "MH", mod: 0.96, trend: -2 }, { name: "Amravati", state: "MH", mod: 0.99, trend: 1 },
  { name: "Solapur", state: "MH", mod: 1.03, trend: 2 }, { name: "Aurangabad", state: "MH", mod: 0.95, trend: -3 },
  { name: "Bengaluru Rural", state: "KA", mod: 1.1, trend: 5 }, { name: "Mysuru", state: "KA", mod: 1.02, trend: 1 },
  { name: "Belagavi", state: "KA", mod: 0.97, trend: -1 }, { name: "Ballari", state: "KA", mod: 1.06, trend: 3 },
  { name: "Hyderabad", state: "TS", mod: 1.14, trend: 7 }, { name: "Warangal", state: "TS", mod: 1.01, trend: 2 },
  { name: "Nizamabad", state: "TS", mod: 0.94, trend: -4 }, { name: "Vijayawada", state: "AP", mod: 1.09, trend: 4 },
  { name: "Guntur", state: "AP", mod: 1.13, trend: 6 }, { name: "Kurnool", state: "AP", mod: 0.98, trend: -1 },
  { name: "Chennai", state: "TN", mod: 1.16, trend: 5 }, { name: "Coimbatore", state: "TN", mod: 1.05, trend: 3 },
  { name: "Madurai", state: "TN", mod: 0.97, trend: -2 }, { name: "Jaipur", state: "RJ", mod: 1.0, trend: 1 },
  { name: "Kota", state: "RJ", mod: 0.93, trend: -5 }, { name: "Indore", state: "MP", mod: 1.04, trend: 2 },
  { name: "Bhopal", state: "MP", mod: 0.99, trend: 0 }, { name: "Lucknow", state: "UP", mod: 1.07, trend: 3 }
];

const mandiFactors = {
  bangalore: { label: "APMC Bangalore", mod: 1.08, demand: 0.9 },
  kolar: { label: "Kolar Mandi", mod: 1.13, demand: 1.02 },
  mysuru: { label: "Mysuru Mandi", mod: 1.04, demand: 0.86 },
  hubli: { label: "Hubli Market", mod: 0.96, demand: 1.08 },
  pune: { label: "Pune APMC", mod: 1.1, demand: 0.94 }
};

const seasonFactors = {
  kharif: { label: "Kharif", mod: 1.03 },
  rabi: { label: "Rabi", mod: 0.98 },
  zaid: { label: "Zaid", mod: 1.08 }
};

const smartBuyers = [
  { name: "Ramesh Traders", deals: 142, pay: "24h", base: 88, note: "Consistent above-market offers" },
  { name: "Mandi King Wholesale", deals: 87, pay: "5-9d", base: 42, note: "Lowball pattern - 31% below median" },
  { name: "FreshLink Co-op", deals: 64, pay: "48h", base: 76, note: "Verified buyer - partial advance" },
  { name: "Quick Pay Agents", deals: 23, pay: "12-20d", base: 19, note: "Fraud risk - 4 disputes in 30d" }
];

const nearbyBuyers = [
  { name: "GreenBite Homes", type: "Apartment buyers", distance: 2.4, trust: 94, payHours: 1, offerLift: 1.04, pickup: 35, review: "Fast payment", fit: ["tomato", "onion", "potato", "banana", "mango", "grapes", "apple"] },
  { name: "Hotel Sunrise Kitchen", type: "Hotel bulk buyer", distance: 5.8, trust: 88, payHours: 3, offerLift: 1.02, pickup: 55, review: "Reliable weekly orders", fit: ["rice", "wheat", "onion", "potato", "chilli", "tomato", "banana"] },
  { name: "FreshCart Local Hub", type: "Instant commerce vendor", distance: 3.1, trust: 91, payHours: 2, offerLift: 1.06, pickup: 40, review: "Quick pickup", fit: ["tomato", "brinjal", "mango", "grapes", "apple", "rose", "jasmine", "marigold"] },
  { name: "Spice Route Restaurant", type: "Restaurant chain", distance: 7.2, trust: 83, payHours: 4, offerLift: 1.08, pickup: 75, review: "Pays premium for quality", fit: ["chilli", "onion", "tomato", "brinjal", "rice", "maize"] },
  { name: "City Flower Mart", type: "Flower buyer", distance: 4.4, trust: 86, payHours: 1, offerLift: 1.12, pickup: 30, review: "Same-day settlement", fit: ["marigold", "rose", "jasmine"] },
  { name: "AgroPay Wholesale", type: "Verified mandi buyer", distance: 10.6, trust: 79, payHours: 8, offerLift: 0.99, pickup: 95, review: "Large quantity support", fit: ["wheat", "rice", "cotton", "maize", "soybean", "potato", "onion"] }
];

const karnatakaMarkets = [
  "Kolar", "Bengaluru APMC", "Mysuru", "Hubli", "Davangere", "Tumakuru",
  "Belagavi", "Mangaluru", "Chitradurga", "Hassan", "Shivamogga", "Bidar",
  "Ballari", "Raichur", "Vijayapura", "Chikkamagaluru"
];

const voiceLang = { en: "en-IN", hi: "hi-IN", te: "te-IN", ta: "ta-IN", kn: "kn-IN", mr: "mr-IN" };
let availableSpeechVoices = [];

function refreshSpeechVoices() {
  if (!window.speechSynthesis) return;
  availableSpeechVoices = window.speechSynthesis.getVoices() || [];
}

function voiceForSelectedLanguage() {
  refreshSpeechVoices();
  const lang = voiceLang[languageInput.value] || "en-IN";
  const langPrefix = lang.split("-")[0].toLowerCase();
  return availableSpeechVoices.find((voice) => voice.lang.toLowerCase() === lang.toLowerCase())
    || availableSpeechVoices.find((voice) => voice.lang.toLowerCase().startsWith(`${langPrefix}-`))
    || availableSpeechVoices.find((voice) => voice.name.toLowerCase().includes(langPrefix))
    || null;
}

if (window.speechSynthesis) {
  refreshSpeechVoices();
  window.speechSynthesis.onvoiceschanged = refreshSpeechVoices;
}
const langPack = {
  en: {
    shockTitle: "AI Market Shock Alerts", shockIntro: "Live risk alerts for weather, surplus, crashes, and sudden demand spikes.", powerFeature: "Power feature",
    sellingHeatmapTitle: "Crop Selling Heatmap", sellingHeatmapIntro: "Best market zones, highest demand areas, and most profitable regions.", bestProfit: "Best profit", stable: "Stable", lowDemand: "Low demand",
    timerTitle: "AI Smart Selling Timer", timerIntro: "Find the best hour or holding window before selling.", rescueTitle: "Emergency Market Rescue", rescueIntro: "When prices crash, AI suggests alternative markets and rescue options.", rescueMode: "Rescue mode",
    smartStorageTitle: "Smart Storage Recommendation", smartStorageIntro: "Choose whether to sell, store, refrigerate, dry, or process the crop.", pricePredictionIntro: "AI-powered market price forecast for your crop",
    negotiationIntro: "Let AI negotiate the best crop deal for you", smartTrustTitle: "Smart Buyer Trust Score", behaviorAi: "Behavior AI - 12K samples", demandHeatmapTitle: "Crop Demand Heatmap - Karnataka",
    weather: "Weather", supply: "Supply", crashRisk: "Crash risk", aiAction: "AI action", selectedAction: "Selected action", tapSignal: "Tap to use this signal",
    heavyRain: "Heavy rainfall expected nearby", weatherWatch: "Weather route watch", tomatoRainBody: "Tomato arrivals may slow down. Prices may increase 18% within 48 hours.", weatherWatchBody: "Transport delays may create short demand spikes in nearby mandis.",
    supplySurplus: "Supply surplus detected", balancedSupply: "Balanced supply", weakOfferBody: "Buyer offer is weak against market signal. Selling immediately is not recommended unless quality is falling.", balancedBody: "No major surplus pressure detected. Negotiate with confidence.",
    qualityClock: "Quality clock is running", noCrash: "No crash signal", freshnessHigh: "Freshness risk is high. Use rescue options or cold storage today.", crashLow: "Price crash risk is low for the current storage window.",
    strongSelling: "Strong selling chance", watch48: "Watch next 48h", offerBeats: "Current buyer offer beats prediction. Confirm payment and weighing, then close.", holdCounter: "Hold or counter-offer unless emergency cash need is high.",
    bestWindow: "Best window", sellFast: "Sell fast", hold48: "Hold 48h", tomorrow: "Tomorrow 7AM-11AM", hold2: "Hold 2 days", bestHours: "best hours", holdWindow: "hold window", calendar: "Calendar", selectedDate: "Selected date",
    morningDemand: "Morning demand is strongest before large mandi arrivals.", prepareWindow: "Prepare transport, weighing, and payment confirmation before the window starts.", expectedIncrease: "Expected price increase if stock quality stays stable.", noWeak: "Do not accept weak offers today.",
    sellWithin6: "Sell within 6 hours", fastExit: "fast exit", urgentCash: "Use this when quality is falling or cash is urgent.", acceptNear: "Accept only if buyer offer is near", hold48Title: "Hold 48 hours", watchPrice: "watch price", useStorage: "Use storage/cold chain and avoid credit buyers.",
    activePlan: "Active rescue plan", tapActivate: "Tap to activate", sellNow: "Sell now", store: "Store", refrigerate: "Refrigerate", process: "Dry/process"
  },
  hi: {
    shockTitle: "AI बाजार झटका अलर्ट", shockIntro: "मौसम, अधिक सप्लाई, क्रैश और मांग बढ़ने के लाइव जोखिम अलर्ट.", powerFeature: "पावर फीचर",
    sellingHeatmapTitle: "फसल बिक्री हीटमैप", sellingHeatmapIntro: "सबसे अच्छे बाजार, सबसे अधिक मांग और लाभदायक क्षेत्र.", bestProfit: "सबसे अच्छा लाभ", stable: "स्थिर", lowDemand: "कम मांग",
    timerTitle: "AI स्मार्ट बिक्री टाइमर", timerIntro: "बेचने से पहले सबसे अच्छा समय या होल्डिंग विंडो खोजें.", rescueTitle: "आपात बाजार बचाव", rescueIntro: "कीमत गिरने पर AI वैकल्पिक बाजार और बचाव उपाय सुझाता है.", rescueMode: "बचाव मोड",
    smartStorageTitle: "स्मार्ट स्टोरेज सलाह", smartStorageIntro: "बेचना, स्टोर करना, ठंडा रखना, सुखाना या प्रोसेस करना चुनें.", pricePredictionIntro: "आपकी फसल के लिए AI बाजार कीमत अनुमान",
    negotiationIntro: "AI को आपके लिए बेहतर फसल डील नेगोशिएट करने दें", smartTrustTitle: "स्मार्ट खरीदार भरोसा स्कोर", behaviorAi: "व्यवहार AI - 12K नमूने", demandHeatmapTitle: "फसल मांग हीटमैप - कर्नाटक",
    weather: "मौसम", supply: "सप्लाई", crashRisk: "क्रैश जोखिम", aiAction: "AI कार्रवाई", selectedAction: "चयनित कार्रवाई", tapSignal: "इस संकेत को चुनें",
    heavyRain: "पास के जिलों में भारी बारिश", weatherWatch: "मौसम रूट निगरानी", tomatoRainBody: "टमाटर आवक धीमी हो सकती है. 48 घंटे में कीमत 18% बढ़ सकती है.", weatherWatchBody: "परिवहन देरी से मंडियों में छोटी मांग बढ़त आ सकती है.",
    supplySurplus: "सप्लाई सरप्लस मिला", balancedSupply: "सप्लाई संतुलित", weakOfferBody: "खरीदार ऑफर बाजार संकेत से कमजोर है. गुणवत्ता न गिर रही हो तो तुरंत बेचना सही नहीं.", balancedBody: "बड़ा सरप्लस दबाव नहीं है. आत्मविश्वास से नेगोशिएट करें.",
    qualityClock: "गुणवत्ता समय कम है", noCrash: "क्रैश संकेत नहीं", freshnessHigh: "ताजगी जोखिम ज्यादा है. आज बचाव या कोल्ड स्टोरेज इस्तेमाल करें.", crashLow: "इस स्टोरेज विंडो में कीमत क्रैश जोखिम कम है.",
    strongSelling: "मजबूत बिक्री मौका", watch48: "अगले 48 घंटे देखें", offerBeats: "ऑफर अनुमान से बेहतर है. भुगतान और वजन पक्का कर के बंद करें.", holdCounter: "आपात नकद जरूरत न हो तो होल्ड या काउंटर करें.",
    bestWindow: "सबसे अच्छा समय", sellFast: "जल्दी बेचें", hold48: "48 घंटे रोकें", tomorrow: "कल 7AM-11AM", hold2: "2 दिन रोकें", bestHours: "सर्वश्रेष्ठ घंटे", holdWindow: "होल्ड विंडो", calendar: "कैलेंडर", selectedDate: "चयनित तारीख",
    morningDemand: "बड़ी मंडी आवक से पहले सुबह मांग सबसे मजबूत रहती है.", prepareWindow: "विंडो शुरू होने से पहले परिवहन, वजन और भुगतान पुष्टि तैयार करें.", expectedIncrease: "गुणवत्ता स्थिर रहे तो कीमत बढ़ने की उम्मीद.", noWeak: "आज कमजोर ऑफर स्वीकार न करें.",
    sellWithin6: "6 घंटे में बेचें", fastExit: "फास्ट एग्जिट", urgentCash: "गुणवत्ता गिर रही हो या नकद जरूरत हो तो उपयोग करें.", acceptNear: "केवल तब स्वीकार करें जब ऑफर करीब हो", hold48Title: "48 घंटे रोकें", watchPrice: "कीमत देखें", useStorage: "स्टोरेज/कोल्ड चेन रखें और क्रेडिट खरीदारों से बचें.",
    activePlan: "सक्रिय बचाव योजना", tapActivate: "सक्रिय करने के लिए टैप करें", sellNow: "अभी बेचें", store: "स्टोर", refrigerate: "ठंडा रखें", process: "सुखाएं/प्रोसेस"
  }
};
Object.assign(langPack, {
  te: { ...langPack.en, shockTitle: "AI మార్కెట్ షాక్ అలర్ట్స్", sellingHeatmapTitle: "పంట అమ్మకం హీట్ మ్యాప్", timerTitle: "AI స్మార్ట్ అమ్మకం టైమర్", rescueTitle: "అత్యవసర మార్కెట్ రక్షణ", smartStorageTitle: "స్మార్ట్ నిల్వ సిఫార్సు", bestWindow: "ఉత్తమ సమయం", sellFast: "త్వరగా అమ్ము", hold48: "48గం ఉంచు", calendar: "క్యాలెండర్", selectedDate: "ఎంచుకున్న తేదీ", sellNow: "ఇప్పుడే అమ్ము", store: "నిల్వ", refrigerate: "చల్లబరచు", process: "ఎండబెట్టు/ప్రాసెస్" },
  ta: { ...langPack.en, shockTitle: "AI சந்தை அதிர்ச்சி எச்சரிக்கை", sellingHeatmapTitle: "பயிர் விற்பனை ஹீட்மேப்", timerTitle: "AI ஸ்மார்ட் விற்பனை டைமர்", rescueTitle: "அவசர சந்தை மீட்பு", smartStorageTitle: "ஸ்மார்ட் சேமிப்பு பரிந்துரை", bestWindow: "சிறந்த நேரம்", sellFast: "விரைவில் விற்க", hold48: "48மணி காத்திரு", calendar: "காலண்டர்", selectedDate: "தேர்ந்த தேதி", sellNow: "இப்போது விற்க", store: "சேமி", refrigerate: "குளிர வைத்து", process: "உலர்/செயலாக்கு" },
  kn: { ...langPack.en, shockTitle: "AI ಮಾರುಕಟ್ಟೆ ಶಾಕ್ ಎಚ್ಚರಿಕೆ", sellingHeatmapTitle: "ಬೆಳೆ ಮಾರಾಟ ಹೀಟ್ ಮ್ಯಾಪ್", timerTitle: "AI ಸ್ಮಾರ್ಟ್ ಮಾರಾಟ ಟೈಮರ್", rescueTitle: "ತುರ್ತು ಮಾರುಕಟ್ಟೆ ರಕ್ಷಣೆ", smartStorageTitle: "ಸ್ಮಾರ್ಟ್ ಸಂಗ್ರಹ ಸಲಹೆ", bestWindow: "ಉತ್ತಮ ಸಮಯ", sellFast: "ಬೇಗ ಮಾರಾಟ", hold48: "48ಗಂ ಹಿಡಿ", calendar: "ಕ್ಯಾಲೆಂಡರ್", selectedDate: "ಆಯ್ದ ದಿನಾಂಕ", sellNow: "ಈಗ ಮಾರಾಟ", store: "ಸಂಗ್ರಹ", refrigerate: "ತಂಪಿಡಿ", process: "ಒಣಗಿಸಿ/ಪ್ರಕ್ರಿಯೆ" },
  mr: { ...langPack.en, shockTitle: "AI बाजार धक्का अलर्ट", sellingHeatmapTitle: "पीक विक्री हीटमॅप", timerTitle: "AI स्मार्ट विक्री टाइमर", rescueTitle: "आपत्कालीन बाजार बचाव", smartStorageTitle: "स्मार्ट साठवण शिफारस", bestWindow: "सर्वोत्तम वेळ", sellFast: "लवकर विक्री", hold48: "48 तास थांबा", calendar: "कॅलेंडर", selectedDate: "निवडलेली तारीख", sellNow: "आता विक्री", store: "साठवा", refrigerate: "थंड ठेवा", process: "वाळवा/प्रक्रिया" }
});
const cropAliases = {
  wheat: ["wheat", "गेहूं", "गहू", "గోధుమ", "கோதுமை", "ಗೋಧಿ"],
  rice: ["rice", "धान", "चावल", "तांदूळ", "బియ్యం", "அரிசி", "ಅಕ್ಕಿ"],
  cotton: ["cotton", "कपास", "कापूस", "పత్తి", "பருத்தி", "ಹತ್ತಿ"],
  maize: ["maize", "corn", "मक्का", "मका", "మొక్కజొన్న", "மக்காச்சோளம்", "ಮೆಕ್ಕೆಜೋಳ"],
  soybean: ["soybean", "सोयाबीन", "సోయాబీన్", "சோயாபீன்", "ಸೋಯಾಬೀನ್"],
  tomato: ["tomato", "टमाटर", "टोमॅटो", "టమాటా", "தக்காளி", "ಟೊಮೇಟೊ"]
};

Object.assign(cropAliases, {
  onion: ["onion", "pyaz", "pyaaz", "kanda", "ఉల్లి", "வெங்காயம்", "ಈರುಳ್ಳಿ"],
  potato: ["potato", "aloo", "batata", "ఆలుగడ్డ", "உருளைக்கிழங்கு", "ಆಲೂಗಡ್ಡೆ"],
  chilli: ["chilli", "chili", "mirchi", "మిరపకాయ", "மிளகாய்", "ಮೆಣಸಿನಕಾಯಿ"],
  brinjal: ["brinjal", "eggplant", "baingan", "vangi", "వంకాయ", "கத்திரிக்காய்", "ಬದನೆಕಾಯಿ"],
  mango: ["mango", "aam", "amba", "mamidi", "மாம்பழம்", "ಮಾವು"],
  banana: ["banana", "kela", "kele", "arati", "வாழைப்பழம்", "ಬಾಳೆಹಣ್ಣು"],
  grapes: ["grapes", "angoor", "draksha", "திராட்சை", "ದ್ರಾಕ್ಷಿ"],
  apple: ["apple", "seb", "safarchand", "ఆపిల్", "ஆப்பிள்", "ಸೇಬು"],
  marigold: ["marigold", "genda", "zendu", "బంతి పువ్వు", "சாமந்தி", "ಚೆಂಡು ಹೂವು"],
  rose: ["rose", "gulab", "గులాబీ", "ரோஜா", "ಗುಲಾಬಿ"],
  jasmine: ["jasmine", "chameli", "mogra", "mallige", "మల్లె", "மல்லிகை"]
});

const form = document.getElementById("cropForm");
const languageInput = document.getElementById("language");
const cropInput = document.getElementById("crop");
const listingCropInput = document.getElementById("listingCrop");
const listingQuantityInput = document.getElementById("listingQuantity");
const listingExpectedPriceInput = document.getElementById("listingExpectedPrice");
const quantityInput = document.getElementById("quantity");
const quantityUnitInput = document.getElementById("quantityUnit");
const offerInput = document.getElementById("offer");
const transportInput = document.getElementById("transport");
const costInput = document.getElementById("cost");
const storageDaysInput = document.getElementById("storageDays");
const voiceModeInput = document.getElementById("voiceMode");
const voiceRateInput = document.getElementById("voiceRate");
const forecastCropInput = document.getElementById("forecastCrop");
const forecastMandiInput = document.getElementById("forecastMandi");
const forecastSeasonInput = document.getElementById("forecastSeason");
const forecastPeriodInput = document.getElementById("forecastPeriod");
const dealCropInput = document.getElementById("dealCrop");
const dealQuantityInput = document.getElementById("dealQuantity");
const dealQuantityUnitInput = document.getElementById("dealQuantityUnit");
const dealMinPriceInput = document.getElementById("dealMinPrice");
const dealOfferInput = document.getElementById("dealOffer");
const chatSpeakerInput = document.getElementById("chatSpeaker");
const chatMessageInput = document.getElementById("chatMessage");
const storageReadout = document.getElementById("storageReadout");
let lastTone = "friendly";
let negotiationMessages = [];
let selectedShock = "Weather";
let selectedTimerMode = "best";
let selectedRescue = "";
let selectedStorage = "";
let selectedCalendarOffset = 1;
let selectedDirectChannel = "homes";
let urgentSellMode = false;
let selectedMarketBuyer = "";
let buyerSortMode = "match";
let marketChatMessages = [];
let buyerAlertSent = false;

const languageLabels = {
  en: { label: "English", html: "en" },
  hi: { label: "हिन्दी", html: "hi" },
  te: { label: "తెలుగు", html: "te" },
  ta: { label: "தமிழ்", html: "ta" },
  kn: { label: "ಕನ್ನಡ", html: "kn" },
  mr: { label: "मराठी", html: "mr" }
};

const cleanCropNames = {
  en: { wheat: "Wheat", rice: "Rice", cotton: "Cotton", maize: "Maize", soybean: "Soybean", tomato: "Tomato", onion: "Onion", potato: "Potato", chilli: "Chilli", brinjal: "Brinjal", mango: "Mango", banana: "Banana", grapes: "Grapes", apple: "Apple", marigold: "Marigold", rose: "Rose", jasmine: "Jasmine" },
  hi: { wheat: "गेहूं", rice: "धान", cotton: "कपास", maize: "मक्का", soybean: "सोयाबीन", tomato: "टमाटर", onion: "प्याज", potato: "आलू", chilli: "मिर्च", brinjal: "बैंगन", mango: "आम", banana: "केला", grapes: "अंगूर", apple: "सेब", marigold: "गेंदा", rose: "गुलाब", jasmine: "चमेली" },
  te: { wheat: "గోధుమ", rice: "బియ్యం", cotton: "పత్తి", maize: "మొక్కజొన్న", soybean: "సోయాబీన్", tomato: "టమాటా", onion: "ఉల్లి", potato: "ఆలుగడ్డ", chilli: "మిరపకాయ", brinjal: "వంకాయ", mango: "మామిడి", banana: "అరటి", grapes: "ద్రాక్ష", apple: "ఆపిల్", marigold: "బంతి పువ్వు", rose: "గులాబీ", jasmine: "మల్లె" },
  ta: { wheat: "கோதுமை", rice: "அரிசி", cotton: "பருத்தி", maize: "மக்காச்சோளம்", soybean: "சோயாபீன்", tomato: "தக்காளி", onion: "வெங்காயம்", potato: "உருளைக்கிழங்கு", chilli: "மிளகாய்", brinjal: "கத்திரிக்காய்", mango: "மாம்பழம்", banana: "வாழைப்பழம்", grapes: "திராட்சை", apple: "ஆப்பிள்", marigold: "சாமந்தி", rose: "ரோஜா", jasmine: "மல்லிகை" },
  kn: { wheat: "ಗೋಧಿ", rice: "ಅಕ್ಕಿ", cotton: "ಹತ್ತಿ", maize: "ಮೆಕ್ಕೆಜೋಳ", soybean: "ಸೋಯಾಬೀನ್", tomato: "ಟೊಮೇಟೊ", onion: "ಈರುಳ್ಳಿ", potato: "ಆಲೂಗಡ್ಡೆ", chilli: "ಮೆಣಸಿನಕಾಯಿ", brinjal: "ಬದನೆಕಾಯಿ", mango: "ಮಾವು", banana: "ಬಾಳೆಹಣ್ಣು", grapes: "ದ್ರಾಕ್ಷಿ", apple: "ಸೇಬು", marigold: "ಚೆಂಡು ಹೂವು", rose: "ಗುಲಾಬಿ", jasmine: "ಮಲ್ಲಿಗೆ" },
  mr: { wheat: "गहू", rice: "तांदूळ", cotton: "कापूस", maize: "मका", soybean: "सोयाबीन", tomato: "टोमॅटो", onion: "कांदा", potato: "बटाटा", chilli: "मिरची", brinjal: "वांगी", mango: "आंबा", banana: "केळी", grapes: "द्राक्षे", apple: "सफरचंद", marigold: "झेंडू", rose: "गुलाब", jasmine: "मोगरा" }
};

const appI18n = {
  en: {
    heroTitle: "Smart Crop Market Negotiator", heroIntro: "An interactive assistant for farmers to compare prices, negotiate with buyers, check scam risk, and decide when to sell or store crops.",
    marketPrice: "market price", buyerTrustMini: "buyer trust", languageLabel: "Language", cropLabel: "Crop", quantityLabel: "Quantity", offerLabel: "Buyer Offer", transportLabel: "Transport Cost", costLabel: "Production Cost", storageDaysLabel: "Storage Days", days: "days",
    voiceStyleLabel: "Voice Modulator", voiceRateLabel: "Voice Speed", useVoice: "Use Voice", speakPitch: "Speak Deal", reset: "Reset", analyze: "Analyze Deal", voiceHelp: "Voice support listens for crop, quantity, and offer details when your browser allows speech recognition.",
    predictedPriceLabel: "Predicted Price", profitLabel: "Profit", buyerTrustLabel: "Buyer Trust", scamRiskLabel: "Scam Risk",
    shockTitle: "AI Market Shock Alerts", shockIntro: "Live risk alerts for weather, surplus, crashes, and sudden demand spikes.", powerFeature: "Power feature",
    sellingHeatmapTitle: "Crop Selling Heatmap", sellingHeatmapIntro: "Best market zones, highest demand areas, and most profitable regions.", bestProfit: "Best profit", stable: "Stable", lowDemand: "Low demand",
    timerTitle: "AI Smart Selling Timer", timerIntro: "Find the best hour or holding window before selling.", rescueTitle: "Emergency Market Rescue", rescueIntro: "When prices crash, AI suggests alternative markets and rescue options.", rescueMode: "Rescue mode",
    smartStorageTitle: "Smart Storage Recommendation", smartStorageIntro: "Choose whether to sell, store, refrigerate, dry, or process the crop.", pricePredictionTitle: "Price Prediction", pricePredictionIntro: "AI-powered market price forecast for your crop",
    negotiationTitle: "AI Negotiation Assistant", negotiationIntro: "Let AI negotiate the best crop deal for you", smartTrustTitle: "Smart Buyer Trust Score", behaviorAi: "Behavior AI - 12K samples", demandHeatmapTitle: "Crop Demand Heatmap - Karnataka",
    copied: "Copied", listen: "Listening in selected language.", noVoice: "Voice support is not available in this browser. Try Chrome or Edge.", heard: "Heard", noSpeech: "Voice input could not start. Check microphone permission.",
    weather: "Weather", supply: "Supply", crashRisk: "Crash risk", aiAction: "AI action", selectedAction: "Selected action", tapSignal: "Tap to use this signal",
    heavyRain: "Heavy rain nearby", weatherWatch: "Weather route watch", tomatoRainBody: "Tomato arrivals may slow down. Price may rise in 48 hours.", weatherWatchBody: "Transport delays can create small demand spikes in mandis.",
    supplySurplus: "Supply surplus detected", balancedSupply: "Balanced supply", weakOfferBody: "Buyer offer is weak against market signal. Selling immediately is not recommended unless quality is falling.", balancedBody: "No major surplus pressure detected. Negotiate with confidence.",
    qualityClock: "Quality clock is running", noCrash: "No crash signal", freshnessHigh: "Freshness risk is high. Use rescue options or cold storage today.", crashLow: "Price crash risk is low for the current storage window.",
    strongSelling: "Strong selling chance", watch48: "Watch next 48h", offerBeats: "Current buyer offer beats prediction. Confirm payment and weighing, then close.", holdCounter: "Hold or counter-offer unless emergency cash need is high.",
    bestWindow: "Best window", sellFast: "Sell fast", hold48: "Hold 48h", tomorrow: "Tomorrow 7AM-11AM", hold2: "Hold 2 days", bestHours: "best hours", holdWindow: "hold window", calendar: "Calendar", selectedDate: "Selected date",
    morningDemand: "Morning demand is strongest before large mandi arrivals.", prepareWindow: "Prepare transport, weighing, and payment confirmation before the window starts.", expectedIncrease: "Expected price increase if stock quality stays stable.", noWeak: "Do not accept weak offers today.",
    sellWithin6: "Sell within 6 hours", fastExit: "fast exit", urgentCash: "Use this when quality is falling or cash is urgent.", acceptNear: "Accept only if buyer offer is near", hold48Title: "Hold 48 hours", watchPrice: "watch price", useStorage: "Use storage/cold chain and avoid credit buyers.",
    sellNow: "Sell now", store: "Store", refrigerate: "Refrigerate", process: "Dry/process"
  },
  hi: {
    heroTitle: "स्मार्ट फसल बाजार नेगोशिएटर", heroIntro: "किसानों के लिए कीमत तुलना, खरीदार से बातचीत, धोखा जोखिम जांच, और बेचने या स्टोर करने का निर्णय लेने वाला इंटरैक्टिव सहायक.",
    marketPrice: "बाजार कीमत", buyerTrustMini: "खरीदार भरोसा", languageLabel: "भाषा", cropLabel: "फसल", quantityLabel: "मात्रा", offerLabel: "खरीदार का ऑफर", transportLabel: "परिवहन लागत", costLabel: "उत्पादन लागत", storageDaysLabel: "स्टोरेज दिन", days: "दिन",
    voiceStyleLabel: "आवाज मोड", voiceRateLabel: "आवाज गति", useVoice: "आवाज उपयोग करें", speakPitch: "डील सुनाएं", reset: "रीसेट", analyze: "डील जांचें", voiceHelp: "ब्राउजर अनुमति दे तो आवाज से फसल, मात्रा और ऑफर बोल सकते हैं.",
    predictedPriceLabel: "अनुमानित कीमत", profitLabel: "लाभ", buyerTrustLabel: "खरीदार भरोसा", scamRiskLabel: "धोखा जोखिम",
    shockTitle: "AI बाजार अलर्ट", shockIntro: "मौसम, अतिरिक्त सप्लाई, कीमत गिरावट और अचानक मांग के लाइव अलर्ट.", powerFeature: "पावर फीचर",
    sellingHeatmapTitle: "फसल बिक्री हीटमैप", sellingHeatmapIntro: "सर्वश्रेष्ठ बाजार, ज्यादा मांग वाले क्षेत्र और लाभदायक इलाके.", bestProfit: "सर्वश्रेष्ठ लाभ", stable: "स्थिर", lowDemand: "कम मांग",
    timerTitle: "AI स्मार्ट बिक्री टाइमर", timerIntro: "बेचने का सही समय या होल्डिंग विंडो खोजें.", rescueTitle: "आपात बाजार बचाव", rescueIntro: "कीमत गिरने पर AI वैकल्पिक बाजार और बचाव उपाय सुझाता है.", rescueMode: "बचाव मोड",
    smartStorageTitle: "स्मार्ट स्टोरेज सलाह", smartStorageIntro: "बेचना, स्टोर करना, ठंडा रखना, सुखाना या प्रोसेस करना चुनें.", pricePredictionTitle: "कीमत अनुमान", pricePredictionIntro: "आपकी फसल के लिए AI आधारित बाजार कीमत अनुमान",
    negotiationTitle: "AI बातचीत सहायक", negotiationIntro: "AI को आपके लिए बेहतर फसल डील बातचीत करने दें", smartTrustTitle: "स्मार्ट खरीदार भरोसा स्कोर", behaviorAi: "व्यवहार AI - 12K नमूने", demandHeatmapTitle: "फसल मांग हीटमैप - कर्नाटक",
    copied: "कॉपी हुआ", listen: "चुनी हुई भाषा में सुन रहा है.", noVoice: "इस ब्राउजर में आवाज सुविधा उपलब्ध नहीं है. Chrome या Edge आजमाएं.", heard: "सुना", noSpeech: "आवाज शुरू नहीं हुई. माइक्रोफोन अनुमति जांचें.",
    weather: "मौसम", supply: "सप्लाई", crashRisk: "गिरावट जोखिम", aiAction: "AI कार्रवाई", selectedAction: "चुनी कार्रवाई", tapSignal: "इस संकेत को चुनें",
    heavyRain: "पास में भारी बारिश", weatherWatch: "मौसम रूट निगरानी", tomatoRainBody: "टमाटर की आवक धीमी हो सकती है. 48 घंटे में कीमत बढ़ सकती है.", weatherWatchBody: "परिवहन देरी से मंडियों में मांग बढ़ सकती है.",
    supplySurplus: "अतिरिक्त सप्लाई मिली", balancedSupply: "सप्लाई संतुलित", weakOfferBody: "खरीदार का ऑफर बाजार संकेत से कमजोर है. गुणवत्ता न गिर रही हो तो तुरंत बेचना सही नहीं.", balancedBody: "बड़ा सप्लाई दबाव नहीं है. आत्मविश्वास से बातचीत करें.",
    qualityClock: "गुणवत्ता समय कम है", noCrash: "गिरावट संकेत नहीं", freshnessHigh: "ताजगी जोखिम ज्यादा है. आज बचाव विकल्प या कोल्ड स्टोरेज उपयोग करें.", crashLow: "इस स्टोरेज विंडो में कीमत गिरावट जोखिम कम है.",
    strongSelling: "मजबूत बिक्री मौका", watch48: "अगले 48 घंटे देखें", offerBeats: "मौजूदा ऑफर अनुमान से बेहतर है. भुगतान और वजन पक्का करके डील बंद करें.", holdCounter: "आपात नकद जरूरत न हो तो होल्ड या काउंटर ऑफर करें.",
    bestWindow: "सर्वश्रेष्ठ समय", sellFast: "जल्दी बेचें", hold48: "48 घंटे रोकें", tomorrow: "कल 7AM-11AM", hold2: "2 दिन रोकें", bestHours: "सर्वश्रेष्ठ घंटे", holdWindow: "होल्ड विंडो", calendar: "कैलेंडर", selectedDate: "चुनी तारीख",
    morningDemand: "बड़ी मंडी आवक से पहले सुबह मांग सबसे मजबूत रहती है.", prepareWindow: "समय शुरू होने से पहले परिवहन, वजन और भुगतान पुष्टि तैयार करें.", expectedIncrease: "गुणवत्ता स्थिर रहे तो कीमत बढ़ने की उम्मीद.", noWeak: "आज कमजोर ऑफर स्वीकार न करें.",
    sellWithin6: "6 घंटे में बेचें", fastExit: "तेज निकास", urgentCash: "गुणवत्ता गिर रही हो या नकद जरूरत हो तो उपयोग करें.", acceptNear: "केवल तब स्वीकार करें जब ऑफर करीब हो", hold48Title: "48 घंटे रोकें", watchPrice: "कीमत देखें", useStorage: "स्टोरेज/कोल्ड चेन रखें और उधार खरीदारों से बचें.",
    sellNow: "अभी बेचें", store: "स्टोर", refrigerate: "ठंडा रखें", process: "सुखाएं/प्रोसेस"
  }
};

Object.assign(appI18n, {
  te: { ...appI18n.en, heroTitle: "స్మార్ట్ పంట మార్కెట్ నెగోషియేటర్", heroIntro: "రైతులు ధరలు పోల్చి, కొనుగోలుదారులతో చర్చించి, మోసం ప్రమాదం చూసి, అమ్మాలా నిల్వ చేయాలా నిర్ణయించుకునే సహాయకుడు.", marketPrice: "మార్కెట్ ధర", buyerTrustMini: "కొనుగోలుదారు నమ్మకం", languageLabel: "భాష", cropLabel: "పంట", quantityLabel: "పరిమాణం", offerLabel: "కొనుగోలుదారు ఆఫర్", transportLabel: "రవాణా ఖర్చు", costLabel: "ఉత్పత్తి ఖర్చు", storageDaysLabel: "నిల్వ రోజులు", days: "రోజులు", voiceStyleLabel: "వాయిస్ మోడ్", voiceRateLabel: "వాయిస్ వేగం", useVoice: "వాయిస్ వాడండి", speakPitch: "డీల్ వినిపించు", reset: "రీసెట్", analyze: "డీల్ విశ్లేషించు", voiceHelp: "బ్రౌజర్ అనుమతిస్తే పంట, పరిమాణం, ఆఫర్‌ను వాయిస్‌తో చెప్పవచ్చు.", predictedPriceLabel: "అంచనా ధర", profitLabel: "లాభం", buyerTrustLabel: "కొనుగోలుదారు నమ్మకం", scamRiskLabel: "మోసం ప్రమాదం", shockTitle: "AI మార్కెట్ అలర్ట్లు", shockIntro: "వాతావరణం, సరఫరా, ధర పతనం, డిమాండ్ పెరుగుదలపై ప్రత్యక్ష అలర్ట్లు.", powerFeature: "పవర్ ఫీచర్", sellingHeatmapTitle: "పంట అమ్మకం హీట్‌మ్యాప్", sellingHeatmapIntro: "ఉత్తమ మార్కెట్లు, అధిక డిమాండ్ ప్రాంతాలు, లాభదాయక ప్రాంతాలు.", bestProfit: "ఉత్తమ లాభం", stable: "స్థిరం", lowDemand: "తక్కువ డిమాండ్", timerTitle: "AI స్మార్ట్ అమ్మకం టైమర్", timerIntro: "అమ్మడానికి ఉత్తమ సమయం లేదా నిల్వ విండో కనుగొనండి.", rescueTitle: "అత్యవసర మార్కెట్ రక్షణ", rescueIntro: "ధర పడితే AI ప్రత్యామ్నాయ మార్కెట్లు, రక్షణ చర్యలు సూచిస్తుంది.", rescueMode: "రక్షణ మోడ్", smartStorageTitle: "స్మార్ట్ నిల్వ సిఫార్సు", smartStorageIntro: "అమ్మడం, నిల్వ, చల్లగా ఉంచడం, ఎండబెట్టడం లేదా ప్రాసెస్ ఎంచుకోండి.", pricePredictionTitle: "ధర అంచనా", pricePredictionIntro: "మీ పంటకు AI ఆధారిత మార్కెట్ ధర అంచనా", negotiationTitle: "AI చర్చ సహాయకుడు", negotiationIntro: "మీకు మంచి పంట డీల్ కోసం AI చర్చ చేయనివ్వండి", smartTrustTitle: "స్మార్ట్ కొనుగోలుదారు నమ్మకం స్కోర్", behaviorAi: "ప్రవర్తన AI - 12K నమూనాలు", demandHeatmapTitle: "పంట డిమాండ్ హీట్‌మ్యాప్ - కర్ణాటక", sellNow: "ఇప్పుడే అమ్ము", store: "నిల్వ", refrigerate: "చల్లగా ఉంచు", process: "ఎండబెట్టు/ప్రాసెస్" },
  ta: { ...appI18n.en, heroTitle: "ஸ்மார்ட் பயிர் சந்தை பேச்சுவார்த்தை", heroIntro: "விவசாயிகள் விலைகளை ஒப்பிட்டு, வாங்குபவர்களுடன் பேசிச், மோசடி ஆபத்தை பார்த்து, விற்கலாமா சேமிக்கலாமா முடிவு செய்ய உதவும் கருவி.", marketPrice: "சந்தை விலை", buyerTrustMini: "வாங்குபவர் நம்பிக்கை", languageLabel: "மொழி", cropLabel: "பயிர்", quantityLabel: "அளவு", offerLabel: "வாங்குபவர் சலுகை", transportLabel: "போக்குவரத்து செலவு", costLabel: "உற்பத்தி செலவு", storageDaysLabel: "சேமிப்பு நாட்கள்", days: "நாட்கள்", voiceStyleLabel: "குரல் முறை", voiceRateLabel: "குரல் வேகம்", useVoice: "குரல் பயன்படுத்து", speakPitch: "டீலை பேசு", reset: "ரீசெட்", analyze: "டீல் பகுப்பாய்வு", voiceHelp: "பிரௌசர் அனுமதித்தால் பயிர், அளவு, சலுகையை குரலில் சொல்லலாம்.", predictedPriceLabel: "கணிப்பு விலை", profitLabel: "லாபம்", buyerTrustLabel: "வாங்குபவர் நம்பிக்கை", scamRiskLabel: "மோசடி ஆபத்து", shockTitle: "AI சந்தை எச்சரிக்கைகள்", shockIntro: "வானிலை, அதிக விநியோகம், விலை சரிவு, திடீர் தேவை குறித்து நேரடி எச்சரிக்கை.", powerFeature: "பவர் அம்சம்", sellingHeatmapTitle: "பயிர் விற்பனை ஹீட்மேப்", sellingHeatmapIntro: "சிறந்த சந்தைகள், அதிக தேவை இடங்கள், லாபகரமான பகுதிகள்.", bestProfit: "சிறந்த லாபம்", stable: "நிலையானது", lowDemand: "குறைந்த தேவை", timerTitle: "AI ஸ்மார்ட் விற்பனை டைமர்", timerIntro: "விற்க சிறந்த நேரம் அல்லது காத்திருப்பு சாளரம் கண்டறி.", rescueTitle: "அவசர சந்தை மீட்பு", rescueIntro: "விலை சரிந்தால் AI மாற்று சந்தை மற்றும் மீட்பு வழிகளை பரிந்துரைக்கும்.", rescueMode: "மீட்பு முறை", smartStorageTitle: "ஸ்மார்ட் சேமிப்பு பரிந்துரை", smartStorageIntro: "விற்க, சேமிக்க, குளிர்விக்க, உலர்த்த அல்லது செயலாக்க தேர்வு செய்.", pricePredictionTitle: "விலை கணிப்பு", pricePredictionIntro: "உங்கள் பயிருக்கு AI சந்தை விலை கணிப்பு", negotiationTitle: "AI பேச்சுவார்த்தை உதவி", negotiationIntro: "உங்களுக்கு சிறந்த பயிர் டீல் பேச AI-ஐ அனுமதி", smartTrustTitle: "ஸ்மார்ட் வாங்குபவர் நம்பிக்கை மதிப்பெண்", behaviorAi: "நடத்தை AI - 12K மாதிரிகள்", demandHeatmapTitle: "பயிர் தேவை ஹீட்மேப் - கர்நாடகா", sellNow: "இப்போது விற்க", store: "சேமி", refrigerate: "குளிர்வி", process: "உலர்/செயலாக்கு" },
  kn: { ...appI18n.en, heroTitle: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ಮಾತುಕತೆ", heroIntro: "ರೈತರು ಬೆಲೆ ಹೋಲಿಸಿ, ಖರೀದಿದಾರರೊಂದಿಗೆ ಮಾತುಕತೆ ಮಾಡಿ, ಮೋಸ ಅಪಾಯ ನೋಡಿ, ಮಾರಾಟ ಅಥವಾ ಸಂಗ್ರಹ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಲು ಸಹಾಯಕ.", marketPrice: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ", buyerTrustMini: "ಖರೀದಿದಾರ ನಂಬಿಕೆ", languageLabel: "ಭಾಷೆ", cropLabel: "ಬೆಳೆ", quantityLabel: "ಪ್ರಮಾಣ", offerLabel: "ಖರೀದಿದಾರರ ಆಫರ್", transportLabel: "ಸಾರಿಗೆ ವೆಚ್ಚ", costLabel: "ಉತ್ಪಾದನಾ ವೆಚ್ಚ", storageDaysLabel: "ಸಂಗ್ರಹ ದಿನಗಳು", days: "ದಿನಗಳು", voiceStyleLabel: "ಧ್ವನಿ ಮೋಡ್", voiceRateLabel: "ಧ್ವನಿ ವೇಗ", useVoice: "ಧ್ವನಿ ಬಳಸಿ", speakPitch: "ಡೀಲ್ ಹೇಳಿ", reset: "ರಿಸೆಟ್", analyze: "ಡೀಲ್ ವಿಶ್ಲೇಷಿಸಿ", voiceHelp: "ಬ್ರೌಸರ್ ಅನುಮತಿಸಿದರೆ ಬೆಳೆ, ಪ್ರಮಾಣ, ಆಫರ್ ಅನ್ನು ಧ್ವನಿಯಲ್ಲಿ ಹೇಳಬಹುದು.", predictedPriceLabel: "ಅಂದಾಜು ಬೆಲೆ", profitLabel: "ಲಾಭ", buyerTrustLabel: "ಖರೀದಿದಾರ ನಂಬಿಕೆ", scamRiskLabel: "ಮೋಸ ಅಪಾಯ", shockTitle: "AI ಮಾರುಕಟ್ಟೆ ಎಚ್ಚರಿಕೆಗಳು", shockIntro: "ಹವಾಮಾನ, ಹೆಚ್ಚುವರಿ ಪೂರೈಕೆ, ಬೆಲೆ ಕುಸಿತ, ಬೇಡಿಕೆ ಏರಿಕೆ ಕುರಿತು ಲೈವ್ ಎಚ್ಚರಿಕೆ.", powerFeature: "ಪವರ್ ವೈಶಿಷ್ಟ್ಯ", sellingHeatmapTitle: "ಬೆಳೆ ಮಾರಾಟ ಹೀಟ್‌ಮ್ಯಾಪ್", sellingHeatmapIntro: "ಉತ್ತಮ ಮಾರುಕಟ್ಟೆಗಳು, ಹೆಚ್ಚು ಬೇಡಿಕೆಯ ಪ್ರದೇಶಗಳು, ಲಾಭದಾಯಕ ಪ್ರದೇಶಗಳು.", bestProfit: "ಉತ್ತಮ ಲಾಭ", stable: "ಸ್ಥಿರ", lowDemand: "ಕಡಿಮೆ ಬೇಡಿಕೆ", timerTitle: "AI ಸ್ಮಾರ್ಟ್ ಮಾರಾಟ ಟೈಮರ್", timerIntro: "ಮಾರಾಟಕ್ಕೆ ಉತ್ತಮ ಸಮಯ ಅಥವಾ ಹಿಡಿದುಕೊಳ್ಳುವ ಕಿಟಕಿ ಕಂಡುಹಿಡಿ.", rescueTitle: "ತುರ್ತು ಮಾರುಕಟ್ಟೆ ರಕ್ಷಣೆ", rescueIntro: "ಬೆಲೆ ಕುಸಿದರೆ AI ಪರ್ಯಾಯ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ರಕ್ಷಣೆ ಸೂಚಿಸುತ್ತದೆ.", rescueMode: "ರಕ್ಷಣೆ ಮೋಡ್", smartStorageTitle: "ಸ್ಮಾರ್ಟ್ ಸಂಗ್ರಹ ಸಲಹೆ", smartStorageIntro: "ಮಾರಾಟ, ಸಂಗ್ರಹ, ತಂಪು, ಒಣಗಿಸುವುದು ಅಥವಾ ಪ್ರಕ್ರಿಯೆ ಆಯ್ಕೆಮಾಡಿ.", pricePredictionTitle: "ಬೆಲೆ ಅಂದಾಜು", pricePredictionIntro: "ನಿಮ್ಮ ಬೆಳೆಗೆ AI ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಅಂದಾಜು", negotiationTitle: "AI ಮಾತುಕತೆ ಸಹಾಯಕ", negotiationIntro: "ನಿಮಗಾಗಿ ಉತ್ತಮ ಬೆಳೆ ಡೀಲ್ ಮಾತುಕತೆ ಮಾಡಲು AI ಬಳಸಿ", smartTrustTitle: "ಸ್ಮಾರ್ಟ್ ಖರೀದಿದಾರ ನಂಬಿಕೆ ಸ್ಕೋರ್", behaviorAi: "ವರ್ತನೆ AI - 12K ಮಾದರಿ", demandHeatmapTitle: "ಬೆಳೆ ಬೇಡಿಕೆ ಹೀಟ್‌ಮ್ಯಾಪ್ - ಕರ್ನಾಟಕ", sellNow: "ಈಗ ಮಾರಾಟ", store: "ಸಂಗ್ರಹ", refrigerate: "ತಂಪಾಗಿರಿಸಿ", process: "ಒಣಗಿಸಿ/ಪ್ರಕ್ರಿಯೆ" },
  mr: { ...appI18n.en, heroTitle: "स्मार्ट पीक बाजार नेगोशिएटर", heroIntro: "शेतकऱ्यांना किंमती तुलना, खरेदीदाराशी वाटाघाटी, फसवणूक धोका तपासणी आणि विक्री किंवा साठवण निर्णय घेण्यास मदत करणारा सहाय्यक.", marketPrice: "बाजार किंमत", buyerTrustMini: "खरेदीदार विश्वास", languageLabel: "भाषा", cropLabel: "पीक", quantityLabel: "मात्रा", offerLabel: "खरेदीदार ऑफर", transportLabel: "वाहतूक खर्च", costLabel: "उत्पादन खर्च", storageDaysLabel: "साठवण दिवस", days: "दिवस", voiceStyleLabel: "आवाज मोड", voiceRateLabel: "आवाज वेग", useVoice: "आवाज वापरा", speakPitch: "डील बोला", reset: "रीसेट", analyze: "डील तपासा", voiceHelp: "ब्राउजर परवानगी दिल्यास पीक, मात्रा आणि ऑफर आवाजातून सांगू शकता.", predictedPriceLabel: "अंदाजित किंमत", profitLabel: "नफा", buyerTrustLabel: "खरेदीदार विश्वास", scamRiskLabel: "फसवणूक धोका", shockTitle: "AI बाजार अलर्ट", shockIntro: "हवामान, जादा पुरवठा, किंमत घसरण आणि अचानक मागणीचे लाईव्ह अलर्ट.", powerFeature: "पावर फीचर", sellingHeatmapTitle: "पीक विक्री हीटमॅप", sellingHeatmapIntro: "सर्वोत्तम बाजार, जास्त मागणी क्षेत्रे आणि नफ्याचे भाग.", bestProfit: "सर्वोत्तम नफा", stable: "स्थिर", lowDemand: "कमी मागणी", timerTitle: "AI स्मार्ट विक्री टाइमर", timerIntro: "विक्रीची सर्वोत्तम वेळ किंवा होल्ड विंडो शोधा.", rescueTitle: "आपत्कालीन बाजार बचाव", rescueIntro: "किंमत पडल्यास AI पर्यायी बाजार आणि बचाव उपाय सुचवतो.", rescueMode: "बचाव मोड", smartStorageTitle: "स्मार्ट साठवण शिफारस", smartStorageIntro: "विक्री, साठवण, थंड ठेवणे, वाळवणे किंवा प्रक्रिया निवडा.", pricePredictionTitle: "किंमत अंदाज", pricePredictionIntro: "तुमच्या पिकासाठी AI आधारित बाजार किंमत अंदाज", negotiationTitle: "AI वाटाघाटी सहाय्यक", negotiationIntro: "तुमच्यासाठी चांगली पीक डील AI कडून वाटाघाटी करून घ्या", smartTrustTitle: "स्मार्ट खरेदीदार विश्वास स्कोर", behaviorAi: "वर्तन AI - 12K नमुने", demandHeatmapTitle: "पीक मागणी हीटमॅप - कर्नाटक", sellNow: "आता विक्री", store: "साठवा", refrigerate: "थंड ठेवा", process: "वाळवा/प्रक्रिया" }
});

const phraseTranslations = {
  hi: {
    "AgriDeal AI": "AgriDeal AI", "Smart Crop Market Negotiator": "स्मार्ट फसल बाजार नेगोशिएटर", "Crop": "फसल", "Market / Mandi": "बाजार / मंडी", "Season": "मौसम", "Forecast period": "अनुमान अवधि", "Current Price": "वर्तमान कीमत", "quintal": "क्विंटल", "per quintal": "प्रति क्विंटल", "Best Sell Window": "सर्वश्रेष्ठ बिक्री समय", "Confidence": "विश्वास", "Price trend": "कीमत रुझान",
    "Farm-to-Consumer Selling Mode": "फार्म-से-ग्राहक बिक्री मोड", "Sell directly to homes, hotels, and restaurants while cutting middlemen.": "बिचौलियों को हटाकर घरों, होटलों और रेस्टोरेंट को सीधे बेचें.", "Direct mode": "सीधा मोड", "Best direct channel": "सर्वश्रेष्ठ सीधा चैनल", "Middleman saving": "बिचौलिया बचत", "Suggested direct price": "सुझाई सीधी कीमत", "Estimated extra revenue": "अनुमानित अतिरिक्त आय", "Per quintal equivalent": "प्रति क्विंटल बराबर",
    "Homes": "घर", "Hotels": "होटल", "Restaurants": "रेस्टोरेंट", "Deal Setup": "डील सेटअप", "Crop type": "फसल प्रकार", "Your minimum price (INR/qtl)": "आपकी न्यूनतम कीमत (INR/क्विंटल)", "Buyer's offer (INR/qtl)": "खरीदार ऑफर (INR/क्विंटल)", "Start Negotiation": "बातचीत शुरू करें", "Negotiation Chat": "बातचीत चैट", "Buyer": "खरीदार", "Farmer": "किसान", "Send": "भेजें", "Mic": "माइक",
    "Improve price": "कीमत बढ़ाएं", "Ask advance": "अग्रिम मांगें", "Confirm terms": "शर्तें पक्की करें", "Transport": "परिवहन", "Quality proof": "गुणवत्ता प्रमाण", "Verify buyer": "खरीदार जांचें", "Split delivery": "डिलीवरी बांटें", "Final offer": "अंतिम ऑफर", "Feedback Analysis": "फीडबैक विश्लेषण", "Negotiation strength": "बातचीत ताकत", "Auto Report Generator": "ऑटो रिपोर्ट जनरेटर", "Copy Report": "रिपोर्ट कॉपी करें", "Download": "डाउनलोड",
    "Best profit": "सर्वश्रेष्ठ लाभ", "Stable": "स्थिर", "High demand": "अधिक मांग", "Low demand": "कम मांग", "Power feature": "पावर फीचर", "Rescue mode": "बचाव मोड", "Storage AI": "स्टोरेज AI", "AI timing": "AI समय", "Behavior AI - 12K samples": "व्यवहार AI - 12K नमूने"
  }
};

Object.assign(phraseTranslations, {
  te: {
    "Smart Crop Market Negotiator": "స్మార్ట్ పంట మార్కెట్ నెగోషియేటర్", "Crop": "పంట", "Quantity": "పరిమాణం", "Market / Mandi": "మార్కెట్ / మండీ", "Season": "సీజన్", "Forecast period": "అంచనా కాలం", "Current Price": "ప్రస్తుత ధర", "Best Sell Window": "ఉత్తమ అమ్మకం సమయం", "Confidence": "నమ్మకం", "Price trend": "ధర ధోరణి",
    "Farm-to-Consumer Selling Mode": "ఫార్మ్-టు-కన్స్యూమర్ అమ్మకం మోడ్", "Sell directly to homes, hotels, and restaurants while cutting middlemen.": "మధ్యవర్తులను తొలగించి ఇళ్లు, హోటళ్లు, రెస్టారెంట్లకు నేరుగా అమ్మండి.", "Direct mode": "నేరుగా అమ్మకం", "Best direct channel": "ఉత్తమ నేరుగా ఛానల్", "Middleman saving": "మధ్యవర్తి ఆదా", "Suggested direct price": "సూచించిన నేరుగా ధర", "Estimated extra revenue": "అంచనా అదనపు ఆదాయం", "Per quintal equivalent": "క్వింటాల్‌కు సమానం",
    "Homes": "ఇళ్లు", "Hotels": "హోటళ్లు", "Restaurants": "రెస్టారెంట్లు", "Deal Setup": "డీల్ సెటప్", "Crop type": "పంట రకం", "Your minimum price (INR/qtl)": "మీ కనీస ధర (INR/క్వింటాల్)", "Buyer's offer (INR/qtl)": "కొనుగోలుదారు ఆఫర్ (INR/క్వింటాల్)", "Start Negotiation": "చర్చ మొదలుపెట్టు", "Negotiation Chat": "చర్చ చాట్", "Buyer": "కొనుగోలుదారు", "Farmer": "రైతు", "Send": "పంపు", "Mic": "మైక్", "Feedback Analysis": "ఫీడ్‌బ్యాక్ విశ్లేషణ", "Copy Report": "రిపోర్ట్ కాపీ", "Download": "డౌన్‌లోడ్"
  },
  ta: {
    "Smart Crop Market Negotiator": "ஸ்மார்ட் பயிர் சந்தை பேச்சுவார்த்தை", "Crop": "பயிர்", "Quantity": "அளவு", "Market / Mandi": "சந்தை / மண்டி", "Season": "பருவம்", "Forecast period": "கணிப்பு காலம்", "Current Price": "தற்போதைய விலை", "Best Sell Window": "சிறந்த விற்பனை நேரம்", "Confidence": "நம்பிக்கை", "Price trend": "விலை போக்கு",
    "Farm-to-Consumer Selling Mode": "பண்ணை-நுகர்வோர் விற்பனை முறை", "Sell directly to homes, hotels, and restaurants while cutting middlemen.": "நடுவணரை நீக்கி வீடுகள், ஹோட்டல்கள், உணவகங்களுக்கு நேரடியாக விற்கவும்.", "Direct mode": "நேரடி முறை", "Best direct channel": "சிறந்த நேரடி வழி", "Middleman saving": "நடுவண் செலவு சேமிப்பு", "Suggested direct price": "பரிந்துரைக்கப்பட்ட நேரடி விலை", "Estimated extra revenue": "கூடுதல் வருமான மதிப்பு", "Per quintal equivalent": "குவிண்டால் சம விலை",
    "Homes": "வீடுகள்", "Hotels": "ஹோட்டல்கள்", "Restaurants": "உணவகங்கள்", "Deal Setup": "டீல் அமைப்பு", "Crop type": "பயிர் வகை", "Your minimum price (INR/qtl)": "உங்கள் குறைந்தபட்ச விலை (INR/குவிண்டால்)", "Buyer's offer (INR/qtl)": "வாங்குபவர் சலுகை (INR/குவிண்டால்)", "Start Negotiation": "பேச்சுவார்த்தை தொடங்கு", "Negotiation Chat": "பேச்சு அரட்டை", "Buyer": "வாங்குபவர்", "Farmer": "விவசாயி", "Send": "அனுப்பு", "Mic": "மைக்", "Feedback Analysis": "கருத்து பகுப்பாய்வு", "Copy Report": "அறிக்கை நகல்", "Download": "பதிவிறக்கு"
  },
  kn: {
    "Smart Crop Market Negotiator": "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ಮಾತುಕತೆ", "Crop": "ಬೆಳೆ", "Quantity": "ಪ್ರಮಾಣ", "Market / Mandi": "ಮಾರುಕಟ್ಟೆ / ಮಂಡಿ", "Season": "ಋತು", "Forecast period": "ಅಂದಾಜು ಅವಧಿ", "Current Price": "ಪ್ರಸ್ತುತ ಬೆಲೆ", "Best Sell Window": "ಉತ್ತಮ ಮಾರಾಟ ಸಮಯ", "Confidence": "ನಂಬಿಕೆ", "Price trend": "ಬೆಲೆ ಪ್ರವೃತ್ತಿ",
    "Farm-to-Consumer Selling Mode": "ಫಾರ್ಮ್-ರಿಂದ-ಗ್ರಾಹಕ ಮಾರಾಟ ಮೋಡ್", "Sell directly to homes, hotels, and restaurants while cutting middlemen.": "ಮಧ್ಯವರ್ತಿಗಳನ್ನು ಕಡಿದು ಮನೆ, ಹೋಟೆಲ್, ರೆಸ್ಟೋರೆಂಟ್‌ಗಳಿಗೆ ನೇರವಾಗಿ ಮಾರಾಟ ಮಾಡಿ.", "Direct mode": "ನೇರ ಮೋಡ್", "Best direct channel": "ಉತ್ತಮ ನೇರ ಚಾನಲ್", "Middleman saving": "ಮಧ್ಯವರ್ತಿ ಉಳಿತಾಯ", "Suggested direct price": "ಸೂಚಿಸಿದ ನೇರ ಬೆಲೆ", "Estimated extra revenue": "ಅಂದಾಜು ಹೆಚ್ಚುವರಿ ಆದಾಯ", "Per quintal equivalent": "ಕ್ವಿಂಟಲ್ ಸಮ",
    "Homes": "ಮನೆಗಳು", "Hotels": "ಹೋಟೆಲ್‌ಗಳು", "Restaurants": "ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು", "Deal Setup": "ಡೀಲ್ ಸೆಟಪ್", "Crop type": "ಬೆಳೆ ಪ್ರಕಾರ", "Your minimum price (INR/qtl)": "ನಿಮ್ಮ ಕನಿಷ್ಠ ಬೆಲೆ (INR/ಕ್ವಿಂಟಲ್)", "Buyer's offer (INR/qtl)": "ಖರೀದಿದಾರರ ಆಫರ್ (INR/ಕ್ವಿಂಟಲ್)", "Start Negotiation": "ಮಾತುಕತೆ ಆರಂಭಿಸಿ", "Negotiation Chat": "ಮಾತುಕತೆ ಚಾಟ್", "Buyer": "ಖರೀದಿದಾರ", "Farmer": "ರೈತ", "Send": "ಕಳುಹಿಸಿ", "Mic": "ಮೈಕ್", "Feedback Analysis": "ಪ್ರತಿಕ್ರಿಯೆ ವಿಶ್ಲೇಷಣೆ", "Copy Report": "ವರದಿ ನಕಲಿಸಿ", "Download": "ಡೌನ್‌ಲೋಡ್"
  },
  mr: {
    "Smart Crop Market Negotiator": "स्मार्ट पीक बाजार नेगोशिएटर", "Crop": "पीक", "Quantity": "मात्रा", "Market / Mandi": "बाजार / मंडी", "Season": "हंगाम", "Forecast period": "अंदाज कालावधी", "Current Price": "सध्याची किंमत", "Best Sell Window": "सर्वोत्तम विक्री वेळ", "Confidence": "विश्वास", "Price trend": "किंमत कल",
    "Farm-to-Consumer Selling Mode": "शेतातून-ग्राहक विक्री मोड", "Sell directly to homes, hotels, and restaurants while cutting middlemen.": "मध्यस्थ कमी करून घरे, हॉटेल्स आणि रेस्टॉरंट्सना थेट विक्री करा.", "Direct mode": "थेट मोड", "Best direct channel": "सर्वोत्तम थेट चॅनेल", "Middleman saving": "मध्यस्थ बचत", "Suggested direct price": "सुचवलेली थेट किंमत", "Estimated extra revenue": "अंदाजित अतिरिक्त उत्पन्न", "Per quintal equivalent": "प्रति क्विंटल समतुल्य",
    "Homes": "घरे", "Hotels": "हॉटेल्स", "Restaurants": "रेस्टॉरंट्स", "Deal Setup": "डील सेटअप", "Crop type": "पीक प्रकार", "Your minimum price (INR/qtl)": "तुमची किमान किंमत (INR/क्विंटल)", "Buyer's offer (INR/qtl)": "खरेदीदार ऑफर (INR/क्विंटल)", "Start Negotiation": "वाटाघाटी सुरू करा", "Negotiation Chat": "वाटाघाटी चॅट", "Buyer": "खरेदीदार", "Farmer": "शेतकरी", "Send": "पाठवा", "Mic": "माइक", "Feedback Analysis": "अभिप्राय विश्लेषण", "Copy Report": "रिपोर्ट कॉपी", "Download": "डाउनलोड"
  }
});

Object.assign(phraseTranslations.te, {
  "Improve price": "ధర పెంచండి", "Ask advance": "అడ్వాన్స్ అడుగు", "Confirm terms": "నిబంధనలు నిర్ధారించు", "Transport": "రవాణా", "Quality proof": "నాణ్యత ఆధారం", "Verify buyer": "కొనుగోలుదారుని తనిఖీ", "Split delivery": "డెలివరీ విభజించు", "Final offer": "చివరి ఆఫర్", "Auto Report Generator": "ఆటో రిపోర్ట్ జనరేటర్", "Negotiation strength": "చర్చ బలం", "Best profit": "ఉత్తమ లాభం", "Stable": "స్థిరం", "High demand": "అధిక డిమాండ్", "Low demand": "తక్కువ డిమాండ్", "Power feature": "పవర్ ఫీచర్", "Rescue mode": "రక్షణ మోడ్", "Storage AI": "నిల్వ AI", "AI timing": "AI సమయం", "Behavior AI - 12K samples": "ప్రవర్తన AI - 12K నమూనాలు", "quintal": "క్వింటాల్", "per quintal": "క్వింటాల్‌కు"
});
Object.assign(phraseTranslations.ta, {
  "Improve price": "விலை உயர்த்து", "Ask advance": "முன்பணம் கேள்", "Confirm terms": "நிபந்தனைகள் உறுதி", "Transport": "போக்குவரத்து", "Quality proof": "தர சான்று", "Verify buyer": "வாங்குபவர் சரிபார்", "Split delivery": "விநியோகம் பிரி", "Final offer": "இறுதி சலுகை", "Auto Report Generator": "ஆட்டோ அறிக்கை உருவாக்கி", "Negotiation strength": "பேச்சுவார்த்தை வலிமை", "Best profit": "சிறந்த லாபம்", "Stable": "நிலையானது", "High demand": "அதிக தேவை", "Low demand": "குறைந்த தேவை", "Power feature": "பவர் அம்சம்", "Rescue mode": "மீட்பு முறை", "Storage AI": "சேமிப்பு AI", "AI timing": "AI நேரம்", "Behavior AI - 12K samples": "நடத்தை AI - 12K மாதிரிகள்", "quintal": "குவிண்டால்", "per quintal": "குவிண்டாலுக்கு"
});
Object.assign(phraseTranslations.kn, {
  "Improve price": "ಬೆಲೆ ಹೆಚ್ಚಿಸಿ", "Ask advance": "ಮುಂಗಡ ಕೇಳಿ", "Confirm terms": "ನಿಬಂಧನೆ ದೃಢೀಕರಿಸಿ", "Transport": "ಸಾರಿಗೆ", "Quality proof": "ಗುಣಮಟ್ಟ ಸಾಕ್ಷಿ", "Verify buyer": "ಖರೀದಿದಾರ ಪರಿಶೀಲಿಸಿ", "Split delivery": "ಡೆಲಿವರಿ ವಿಭಜಿಸಿ", "Final offer": "ಅಂತಿಮ ಆಫರ್", "Auto Report Generator": "ಸ್ವಯಂ ವರದಿ ರಚಕ", "Negotiation strength": "ಮಾತುಕತೆ ಶಕ್ತಿ", "Best profit": "ಉತ್ತಮ ಲಾಭ", "Stable": "ಸ್ಥಿರ", "High demand": "ಹೆಚ್ಚು ಬೇಡಿಕೆ", "Low demand": "ಕಡಿಮೆ ಬೇಡಿಕೆ", "Power feature": "ಪವರ್ ವೈಶಿಷ್ಟ್ಯ", "Rescue mode": "ರಕ್ಷಣೆ ಮೋಡ್", "Storage AI": "ಸಂಗ್ರಹ AI", "AI timing": "AI ಸಮಯ", "Behavior AI - 12K samples": "ವರ್ತನೆ AI - 12K ಮಾದರಿ", "quintal": "ಕ್ವಿಂಟಲ್", "per quintal": "ಕ್ವಿಂಟಲ್‌ಗೆ"
});
Object.assign(phraseTranslations.mr, {
  "Improve price": "किंमत वाढवा", "Ask advance": "अग्रिम मागा", "Confirm terms": "अटी निश्चित करा", "Transport": "वाहतूक", "Quality proof": "गुणवत्ता पुरावा", "Verify buyer": "खरेदीदार तपासा", "Split delivery": "डिलिव्हरी विभागा", "Final offer": "अंतिम ऑफर", "Auto Report Generator": "ऑटो रिपोर्ट जनरेटर", "Negotiation strength": "वाटाघाटी ताकद", "Best profit": "सर्वोत्तम नफा", "Stable": "स्थिर", "High demand": "जास्त मागणी", "Low demand": "कमी मागणी", "Power feature": "पावर फीचर", "Rescue mode": "बचाव मोड", "Storage AI": "साठवण AI", "AI timing": "AI वेळ", "Behavior AI - 12K samples": "वर्तन AI - 12K नमुने", "quintal": "क्विंटल", "per quintal": "प्रति क्विंटल"
});

Object.assign(phraseTranslations.hi, {
  "Highest direct margin": "सबसे अच्छा सीधा मार्जिन",
  "Next action": "अगला कदम",
  "Target price": "लक्ष्य कीमत",
  "Risk status": "जोखिम स्थिति",
  "Can close": "डील बंद कर सकते हैं",
  "Counter": "काउंटर करें",
  "Controlled": "नियंत्रित",
  "Needs terms": "शर्तें चाहिए",
  "Live": "लाइव",
  "Proceed carefully": "सावधानी से आगे बढ़ें",
  "Counter offer": "काउंटर ऑफर",
  "Deal is profitable now": "डील अभी लाभदायक है",
  "Negotiate or reduce costs": "बातचीत करें या लागत घटाएं",
  "Offer risk scan": "ऑफर जोखिम जांच",
  "Profile score": "प्रोफाइल स्कोर",
  "Waiting for crop data": "फसल डेटा की प्रतीक्षा",
  "Enter your costs": "अपनी लागत डालें",
  "Type a reply, counter offer, or buyer message": "जवाब, काउंटर ऑफर या खरीदार संदेश लिखें",
  "Microphone is not available in this browser": "इस ब्राउजर में माइक्रोफोन उपलब्ध नहीं है",
  "Listening...": "सुन रहा है...",
  "Mic permission failed. Try again.": "माइक अनुमति विफल. फिर कोशिश करें.",
  "AI reply": "AI जवाब",
  "AI strategy": "AI रणनीति",
  "Good signal": "अच्छा संकेत",
  "Strong offer": "मजबूत ऑफर",
  "Do not accept yet": "अभी स्वीकार न करें",
  "Buyer is resisting": "खरीदार विरोध कर रहा है",
  "Credit request is risky": "उधार अनुरोध जोखिम भरा है",
  "Payment safety": "भुगतान सुरक्षा",
  "quality proof": "गुणवत्ता प्रमाण",
  "written confirmation": "लिखित पुष्टि"
});

Object.assign(phraseTranslations.te, {
  "Highest direct margin": "అత్యధిక నేరుగా మార్జిన్",
  "Next action": "తదుపరి చర్య",
  "Target price": "లక్ష్య ధర",
  "Risk status": "ప్రమాద స్థితి",
  "Can close": "డీల్ ముగించవచ్చు",
  "Counter": "కౌంటర్ చేయండి",
  "Controlled": "నియంత్రణలో ఉంది",
  "Needs terms": "నిబంధనలు కావాలి",
  "Live": "లైవ్",
  "Proceed carefully": "జాగ్రత్తగా ముందుకు వెళ్ళండి",
  "Counter offer": "కౌంటర్ ఆఫర్",
  "Deal is profitable now": "డీల్ ఇప్పుడు లాభదాయకం",
  "Negotiate or reduce costs": "చర్చించండి లేదా ఖర్చు తగ్గించండి",
  "Offer risk scan": "ఆఫర్ ప్రమాద తనిఖీ",
  "Profile score": "ప్రొఫైల్ స్కోర్",
  "Waiting for crop data": "పంట డేటా కోసం వేచి ఉంది",
  "Enter your costs": "మీ ఖర్చులు నమోదు చేయండి",
  "Type a reply, counter offer, or buyer message": "జవాబు, కౌంటర్ ఆఫర్ లేదా కొనుగోలుదారు సందేశం టైప్ చేయండి",
  "Microphone is not available in this browser": "ఈ బ్రౌజర్‌లో మైక్ అందుబాటులో లేదు",
  "Listening...": "వింటోంది...",
  "Mic permission failed. Try again.": "మైక్ అనుమతి విఫలమైంది. మళ్లీ ప్రయత్నించండి.",
  "AI reply": "AI జవాబు",
  "AI strategy": "AI వ్యూహం",
  "Good signal": "మంచి సంకేతం",
  "Strong offer": "బలమైన ఆఫర్",
  "Do not accept yet": "ఇంకా అంగీకరించవద్దు",
  "Buyer is resisting": "కొనుగోలుదారు నిరాకరిస్తున్నాడు",
  "Credit request is risky": "క్రెడిట్ అభ్యర్థన ప్రమాదకరం",
  "Payment safety": "చెల్లింపు భద్రత",
  "quality proof": "నాణ్యత ఆధారం",
  "written confirmation": "లిఖిత నిర్ధారణ"
});

Object.assign(phraseTranslations.ta, {
  "Highest direct margin": "அதிக நேரடி லாப வித்தியாசம்",
  "Next action": "அடுத்த செயல்",
  "Target price": "இலக்கு விலை",
  "Risk status": "ஆபத்து நிலை",
  "Can close": "டீலை முடிக்கலாம்",
  "Counter": "எதிர் சலுகை",
  "Controlled": "கட்டுப்பாட்டில்",
  "Needs terms": "நிபந்தனைகள் தேவை",
  "Live": "நேரலை",
  "Proceed carefully": "கவனமாக முன்னேறு",
  "Counter offer": "எதிர் சலுகை",
  "Deal is profitable now": "டீல் இப்போது லாபகரம்",
  "Negotiate or reduce costs": "பேசுங்கள் அல்லது செலவு குறைக்கவும்",
  "Offer risk scan": "சலுகை ஆபத்து சோதனை",
  "Profile score": "சுயவிவர மதிப்பெண்",
  "Waiting for crop data": "பயிர் தரவு காத்திருக்கிறது",
  "Enter your costs": "உங்கள் செலவுகளை உள்ளிடுங்கள்",
  "Type a reply, counter offer, or buyer message": "பதில், எதிர் சலுகை அல்லது வாங்குபவர் செய்தி எழுதுங்கள்",
  "Microphone is not available in this browser": "இந்த உலாவியில் மைக் இல்லை",
  "Listening...": "கேட்கிறது...",
  "Mic permission failed. Try again.": "மைக் அனுமதி தோல்வி. மீண்டும் முயற்சிக்கவும்.",
  "AI reply": "AI பதில்",
  "AI strategy": "AI திட்டம்",
  "Good signal": "நல்ல அறிகுறி",
  "Strong offer": "வலுவான சலுகை",
  "Do not accept yet": "இன்னும் ஏற்க வேண்டாம்",
  "Buyer is resisting": "வாங்குபவர் எதிர்க்கிறார்",
  "Credit request is risky": "கடன் கோரிக்கை ஆபத்தானது",
  "Payment safety": "கட்டண பாதுகாப்பு",
  "quality proof": "தர சான்று",
  "written confirmation": "எழுத்து உறுதி"
});

Object.assign(phraseTranslations.kn, {
  "Highest direct margin": "ಅತಿ ಹೆಚ್ಚು ನೇರ ಲಾಭ ಅಂತರ",
  "Next action": "ಮುಂದಿನ ಕ್ರಮ",
  "Target price": "ಲಕ್ಷ್ಯ ಬೆಲೆ",
  "Risk status": "ಅಪಾಯ ಸ್ಥಿತಿ",
  "Can close": "ಡೀಲ್ ಮುಚ್ಚಬಹುದು",
  "Counter": "ಕೌಂಟರ್ ಮಾಡಿ",
  "Controlled": "ನಿಯಂತ್ರಣದಲ್ಲಿ",
  "Needs terms": "ನಿಯಮಗಳು ಬೇಕು",
  "Live": "ಲೈವ್",
  "Proceed carefully": "ಎಚ್ಚರಿಕೆಯಿಂದ ಮುಂದುವರಿಯಿರಿ",
  "Counter offer": "ಕೌಂಟರ್ ಆಫರ್",
  "Deal is profitable now": "ಡೀಲ್ ಈಗ ಲಾಭದಾಯಕ",
  "Negotiate or reduce costs": "ಮಾತುಕತೆ ಮಾಡಿ ಅಥವಾ ವೆಚ್ಚ ಕಡಿಮೆ ಮಾಡಿ",
  "Offer risk scan": "ಆಫರ್ ಅಪಾಯ ಪರಿಶೀಲನೆ",
  "Profile score": "ಪ್ರೊಫೈಲ್ ಸ್ಕೋರ್",
  "Waiting for crop data": "ಬೆಳೆ ಡೇಟಾಕಾಗಿ ಕಾಯುತ್ತಿದೆ",
  "Enter your costs": "ನಿಮ್ಮ ವೆಚ್ಚಗಳನ್ನು ನಮೂದಿಸಿ",
  "Type a reply, counter offer, or buyer message": "ಉತ್ತರ, ಕೌಂಟರ್ ಆಫರ್ ಅಥವಾ ಖರೀದಿದಾರ ಸಂದೇಶ ಟೈಪ್ ಮಾಡಿ",
  "Microphone is not available in this browser": "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮೈಕ್ ಲಭ್ಯವಿಲ್ಲ",
  "Listening...": "ಕೇಳುತ್ತಿದೆ...",
  "Mic permission failed. Try again.": "ಮೈಕ್ ಅನುಮತಿ ವಿಫಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
  "AI reply": "AI ಉತ್ತರ",
  "AI strategy": "AI ತಂತ್ರ",
  "Good signal": "ಒಳ್ಳೆಯ ಸೂಚನೆ",
  "Strong offer": "ಬಲವಾದ ಆಫರ್",
  "Do not accept yet": "ಇನ್ನೂ ಒಪ್ಪಬೇಡಿ",
  "Buyer is resisting": "ಖರೀದಿದಾರ ವಿರೋಧಿಸುತ್ತಿದ್ದಾರೆ",
  "Credit request is risky": "ಕ್ರೆಡಿಟ್ ವಿನಂತಿ ಅಪಾಯಕಾರಿ",
  "Payment safety": "ಪಾವತಿ ಸುರಕ್ಷತೆ",
  "quality proof": "ಗುಣಮಟ್ಟ ಸಾಕ್ಷಿ",
  "written confirmation": "ಲೇಖಿತ ದೃಢೀಕರಣ"
});

Object.assign(phraseTranslations.mr, {
  "Highest direct margin": "सर्वाधिक थेट मार्जिन",
  "Next action": "पुढची कृती",
  "Target price": "लक्ष्य किंमत",
  "Risk status": "धोका स्थिती",
  "Can close": "डील बंद करू शकता",
  "Counter": "काउंटर करा",
  "Controlled": "नियंत्रित",
  "Needs terms": "अटी हव्यात",
  "Live": "लाईव्ह",
  "Proceed carefully": "काळजीपूर्वक पुढे जा",
  "Counter offer": "काउंटर ऑफर",
  "Deal is profitable now": "डील आता फायदेशीर आहे",
  "Negotiate or reduce costs": "वाटाघाटी करा किंवा खर्च कमी करा",
  "Offer risk scan": "ऑफर धोका तपासणी",
  "Profile score": "प्रोफाइल स्कोर",
  "Waiting for crop data": "पीक डेटाची प्रतीक्षा",
  "Enter your costs": "तुमचे खर्च भरा",
  "Type a reply, counter offer, or buyer message": "उत्तर, काउंटर ऑफर किंवा खरेदीदार संदेश लिहा",
  "Microphone is not available in this browser": "या ब्राउजरमध्ये माइक उपलब्ध नाही",
  "Listening...": "ऐकत आहे...",
  "Mic permission failed. Try again.": "माइक परवानगी अयशस्वी. पुन्हा प्रयत्न करा.",
  "AI reply": "AI उत्तर",
  "AI strategy": "AI रणनीती",
  "Good signal": "चांगला संकेत",
  "Strong offer": "मजबूत ऑफर",
  "Do not accept yet": "अजून स्वीकारू नका",
  "Buyer is resisting": "खरेदीदार विरोध करत आहे",
  "Credit request is risky": "उधार विनंती धोकादायक आहे",
  "Payment safety": "पेमेंट सुरक्षा",
  "quality proof": "गुणवत्ता पुरावा",
  "written confirmation": "लिखित पुष्टी"
});

Object.assign(phraseTranslations.hi, { "Lot plan": "लॉट योजना", "Price floor": "न्यूनतम कीमत", "Payment rule": "भुगतान नियम", "Direct sale playbook": "सीधी बिक्री योजना", "clean packs": "साफ पैक", "kitchen lots": "किचन लॉट", "crates": "क्रेट" });
Object.assign(phraseTranslations.te, { "Lot plan": "లాట్ ప్రణాళిక", "Price floor": "కనీస ధర", "Payment rule": "చెల్లింపు నియమం", "Direct sale playbook": "నేరుగా అమ్మకం ప్లేబుక్", "clean packs": "శుభ్రమైన ప్యాక్‌లు", "kitchen lots": "కిచెన్ లాట్లు", "crates": "క్రేట్లు" });
Object.assign(phraseTranslations.ta, { "Lot plan": "லாட் திட்டம்", "Price floor": "குறைந்தபட்ச விலை", "Payment rule": "கட்டண விதி", "Direct sale playbook": "நேரடி விற்பனை திட்டம்", "clean packs": "சுத்தமான பாக்குகள்", "kitchen lots": "சமையலறை தொகுதிகள்", "crates": "கிரேட்டுகள்" });
Object.assign(phraseTranslations.kn, { "Lot plan": "ಲಾಟ್ ಯೋಜನೆ", "Price floor": "ಕನಿಷ್ಠ ಬೆಲೆ", "Payment rule": "ಪಾವತಿ ನಿಯಮ", "Direct sale playbook": "ನೇರ ಮಾರಾಟ ಯೋಜನೆ", "clean packs": "ಸ್ವಚ್ಛ ಪ್ಯಾಕ್‌ಗಳು", "kitchen lots": "ಅಡಿಗೆ ಲಾಟ್‌ಗಳು", "crates": "ಕ್ರೇಟ್‌ಗಳು" });
Object.assign(phraseTranslations.mr, { "Lot plan": "लॉट योजना", "Price floor": "किमान किंमत", "Payment rule": "पेमेंट नियम", "Direct sale playbook": "थेट विक्री योजना", "clean packs": "स्वच्छ पॅक", "kitchen lots": "किचन लॉट", "crates": "क्रेट्स" });

function t(key) {
  if (appI18n[languageInput.value]?.[key]) return appI18n[languageInput.value][key];
  return (i18n[languageInput.value] || i18n.en)[key]
    || (langPack[languageInput.value] || langPack.en)[key]
    || i18n.en[key]
    || langPack.en[key]
    || key;
}

function cropName(crop) {
  return (cleanCropNames[languageInput.value] || cleanCropNames.en)[crop] || cropData[crop].name;
}

function populateCropSelects() {
  [cropInput, forecastCropInput, dealCropInput, listingCropInput].forEach((select) => {
    const current = select.value || "wheat";
    select.innerHTML = Object.keys(cropData).map((crop) => `<option value="${crop}">${cropName(crop)}</option>`).join("");
    select.value = cropData[current] ? current : "wheat";
  });
}

function textLang() {
  return languageInput.value || "en";
}

function translatePhrase(text) {
  const lang = textLang();
  if (lang === "en" || !text) return text;
  const clean = text.replace(/\s+/g, " ").trim();
  const exact = phraseTranslations[lang]?.[clean];
  if (exact) return text.replace(clean, exact);

  const key = Object.keys(appI18n.en).find((item) => appI18n.en[item] === clean);
  if (key && appI18n[lang]?.[key]) return text.replace(clean, appI18n[lang][key]);

  const wordMap = {
    hi: {
      "day": "दिन", "days": "दिन", "Forecast": "अनुमान", "expected": "अपेक्षित", "demand": "मांग", "Trust": "भरोसा", "Score": "स्कोर", "Recommendation": "सलाह", "Proceed carefully": "सावधानी से आगे बढ़ें", "Counter offer": "काउंटर ऑफर", "Safe floor": "सुरक्षित न्यूनतम", "Expected revenue": "अनुमानित आय", "Buyer offer": "खरीदार ऑफर", "Farmer minimum": "किसान न्यूनतम", "Quantity": "मात्रा", "Crop": "फसल", "Report": "रिपोर्ट", "Selected date": "चुनी तारीख", "AI recommendation": "AI सलाह", "Suggested price": "सुझाई कीमत", "Saved": "बचत", "saved": "बचत", "fit": "फिट", "quality": "गुणवत्ता", "payment": "भुगतान", "delivery": "डिलीवरी", "market": "बाजार", "buyer": "खरीदार", "farmer": "किसान"
    },
    te: { "day": "రోజు", "days": "రోజులు", "Forecast": "అంచనా", "expected": "అంచనా", "demand": "డిమాండ్", "Trust": "నమ్మకం", "Score": "స్కోర్", "Recommendation": "సిఫార్సు", "Quantity": "పరిమాణం", "Crop": "పంట", "Report": "రిపోర్ట్", "buyer": "కొనుగోలుదారు", "farmer": "రైతు", "payment": "చెల్లింపు", "delivery": "డెలివరీ", "market": "మార్కెట్" },
    ta: { "day": "நாள்", "days": "நாட்கள்", "Forecast": "கணிப்பு", "expected": "எதிர்பார்ப்பு", "demand": "தேவை", "Trust": "நம்பிக்கை", "Score": "மதிப்பெண்", "Recommendation": "பரிந்துரை", "Quantity": "அளவு", "Crop": "பயிர்", "Report": "அறிக்கை", "buyer": "வாங்குபவர்", "farmer": "விவசாயி", "payment": "கட்டணம்", "delivery": "விநியோகம்", "market": "சந்தை" },
    kn: { "day": "ದಿನ", "days": "ದಿನಗಳು", "Forecast": "ಅಂದಾಜು", "expected": "ನಿರೀಕ್ಷಿತ", "demand": "ಬೇಡಿಕೆ", "Trust": "ನಂಬಿಕೆ", "Score": "ಸ್ಕೋರ್", "Recommendation": "ಸಲಹೆ", "Quantity": "ಪ್ರಮಾಣ", "Crop": "ಬೆಳೆ", "Report": "ವರದಿ", "buyer": "ಖರೀದಿದಾರ", "farmer": "ರೈತ", "payment": "ಪಾವತಿ", "delivery": "ಡೆಲಿವರಿ", "market": "ಮಾರುಕಟ್ಟೆ" },
    mr: { "day": "दिवस", "days": "दिवस", "Forecast": "अंदाज", "expected": "अपेक्षित", "demand": "मागणी", "Trust": "विश्वास", "Score": "स्कोर", "Recommendation": "शिफारस", "Quantity": "मात्रा", "Crop": "पीक", "Report": "रिपोर्ट", "buyer": "खरेदीदार", "farmer": "शेतकरी", "payment": "पेमेंट", "delivery": "डिलिव्हरी", "market": "बाजार" }
  }[lang] || {};

  return Object.keys(wordMap)
    .sort((a, b) => b.length - a.length)
    .reduce((value, source) => value.replace(new RegExp(`\\b${source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g"), wordMap[source]), text);
}

function translateRenderedPage() {
  const lang = textLang();
  document.documentElement.lang = languageLabels[lang]?.html || "en";
  Array.from(languageInput.options).forEach((option) => {
    option.textContent = languageLabels[option.value]?.label || option.textContent;
  });

  const optionLabels = {
    calm: { en: "Calm Farmer Voice", hi: "शांत किसान आवाज", te: "శాంత రైతు వాయిస్", ta: "அமைதியான விவசாயி குரல்", kn: "ಶಾಂತ ರೈತ ಧ್ವನಿ", mr: "शांत शेतकरी आवाज" },
    strong: { en: "Strong Negotiator", hi: "मजबूत बातचीतकर्ता", te: "బలమైన చర్చకుడు", ta: "வலுவான பேச்சாளர்", kn: "ಬಲವಾದ ಮಾತುಕತಿಗಾರ", mr: "मजबूत वाटाघाटीकार" },
    fast: { en: "Fast Market Alert", hi: "तेज बाजार अलर्ट", te: "త్వరిత మార్కెట్ అలర్ట్", ta: "வேக சந்தை எச்சரிக்கை", kn: "ವೇಗ ಮಾರುಕಟ್ಟೆ ಎಚ್ಚರಿಕೆ", mr: "जलद बाजार अलर्ट" },
    low: { en: "Deep Trust Voice", hi: "गहरी भरोसा आवाज", te: "లోతైన నమ్మకం వాయిస్", ta: "ஆழமான நம்பிக்கை குரல்", kn: "ಆಳವಾದ ನಂಬಿಕೆ ಧ್ವನಿ", mr: "खोल विश्वास आवाज" }
  };
  Array.from(voiceModeInput.options).forEach((option) => {
    option.textContent = optionLabels[option.value]?.[lang] || optionLabels[option.value]?.en || option.textContent;
  });

  [quantityUnitInput, dealQuantityUnitInput].forEach((select) => {
    Array.from(select.options).forEach((option) => {
      if (option.value === "qtl") option.textContent = lang === "en" ? "quintal" : translatePhrase("quintal");
      if (option.value === "kg") option.textContent = "kg";
    });
  });

  document.querySelectorAll("input[placeholder]").forEach((input) => {
    if (!input.dataset.basePlaceholder) input.dataset.basePlaceholder = input.getAttribute("placeholder");
    input.setAttribute("placeholder", translatePhrase(input.dataset.basePlaceholder));
  });

  document.querySelectorAll("[aria-label]").forEach((element) => {
    if (!element.dataset.baseAriaLabel) element.dataset.baseAriaLabel = element.getAttribute("aria-label");
    element.setAttribute("aria-label", translatePhrase(element.dataset.baseAriaLabel));
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.tagName === "OPTION") return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (lang === "en") node.__baseText = node.nodeValue;
    if (!node.__baseText) node.__baseText = node.nodeValue;
    node.nodeValue = translatePhrase(node.__baseText);
  });
}

function currency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Math.round(value));
}

function pricePerKg(pricePerQuintal) {
  return pricePerQuintal / 100;
}

function currencyPerKg(pricePerQuintal) {
  return `${currency(pricePerKg(pricePerQuintal))}/kg`;
}

function getInputs() {
  const rawQuantity = Number(quantityInput.value) || 0;
  const quantity = quantityUnitInput.value === "kg" ? rawQuantity / 100 : rawQuantity;
  return {
    crop: cropInput.value,
    quantity,
    rawQuantity,
    quantityUnit: quantityUnitInput.value,
    offer: Number(offerInput.value) || 0,
    transport: Number(transportInput.value) || 0,
    cost: Number(costInput.value) || 0,
    storageDays: Number(storageDaysInput.value) || 0
  };
}

function dealQuantityInfo() {
  const raw = Number(dealQuantityInput.value) || 0;
  const unit = dealQuantityUnitInput.value;
  const quintals = unit === "kg" ? raw / 100 : raw;
  return {
    raw,
    unit,
    quintals,
    label: `${raw} ${unit === "kg" ? "kg" : "quintals"}`
  };
}

function predictedPrice(crop, storageDays) {
  const data = cropData[crop];
  const seasonWave = Math.sin((storageDays + 14) / 18) * data.volatility;
  const storageEffect = (data.base * data.storageGain * storageDays) / 1000;
  const freshnessPenalty = storageDays > data.shelf ? (storageDays - data.shelf) * data.volatility * 0.11 : 0;
  return Math.max(350, data.base + seasonWave + storageEffect - freshnessPenalty);
}

function districtPrice(crop, district, prediction) {
  const cropBoost = crop === "tomato" ? district.trend * 18 : district.trend * 9;
  return Math.max(250, prediction * district.mod + cropBoost);
}

function districtRows(crop, prediction) {
  return districts
    .map((district) => ({ ...district, price: districtPrice(crop, district, prediction) }))
    .sort((a, b) => b.price - a.price);
}

function buildPriceSeries(crop, storageDays) {
  return Array.from({ length: 8 }, (_, index) => {
    const day = Math.round(index * 12.8);
    return {
      label: `${day}d`,
      value: predictedPrice(crop, day) + Math.cos(index * 1.4) * cropData[crop].volatility * 0.18,
      active: Math.abs(day - storageDays) < 8
    };
  });
}

function trustScore(crop, offer, prediction) {
  const profile = buyerProfiles[crop] || { repeatOrders: 6, paymentDays: 5, disputeRate: 9, license: true };
  let score = 52;
  score += Math.min(profile.repeatOrders * 3, 30);
  score += profile.license ? 12 : -10;
  score -= Math.max(profile.paymentDays - 3, 0) * 2;
  score -= profile.disputeRate * 1.2;
  if (offer > prediction * 1.12) score -= 10;
  if (offer < prediction * 0.9) score -= 5;
  return Math.max(5, Math.min(98, Math.round(score)));
}

function scamRisk(crop, offer, prediction, trust) {
  const data = cropData[crop];
  const profile = buyerProfiles[crop] || { paymentDays: 5, license: true };
  let risk = 18;
  if (offer > prediction * 1.18) risk += 30;
  if (offer < prediction * 0.82) risk += 12;
  if (trust < 50) risk += 24;
  if (profile.paymentDays > 8) risk += 12;
  if (!profile.license) risk += 14;
  if (crop === "tomato" && Number(storageDaysInput.value) > data.shelf) risk += 10;
  return Math.max(3, Math.min(96, Math.round(risk)));
}

function gradeTrust(score) {
  if (score >= 85) return "A";
  if (score >= 72) return "B+";
  if (score >= 60) return "B";
  if (score >= 45) return "C";
  return "D";
}

function riskLabel(risk) {
  if (risk >= 70) return "High";
  if (risk >= 42) return "Review";
  return "Low";
}

function negotiationMessage(inputs, prediction, profit, trust, risk, tone = "friendly") {
  const crop = cropName(inputs.crop);
  const target = Math.round(prediction * (risk > 60 ? 0.98 : 1.04));
  const floor = Math.round(prediction * 0.96);
  const lang = languageInput.value;

  if (lang === "hi") return `मेरे ${crop} के लिए आपका ऑफर ${currency(inputs.offer)} प्रति क्विंटल है. बाजार अनुमान ${currency(prediction)} है. ${inputs.quantity} क्विंटल माल के लिए मैं ${currency(target)} प्रति क्विंटल पर डील बंद कर सकता हूं. न्यूनतम सही कीमत ${currency(floor)} है, भुगतान और वजन पक्का होना चाहिए.`;
  if (lang === "te") return `నా ${crop} పంటకు మీ ఆఫర్ ${currency(inputs.offer)} ప్రతి క్వింటాల్. మార్కెట్ అంచనా ${currency(prediction)}. ${inputs.quantity} క్వింటాల్స్ కోసం ${currency(target)} వద్ద ఒప్పందం చేయగలను. కనీస సరైన ధర ${currency(floor)}; చెల్లింపు, తూకం ధృవీకరణ కావాలి.`;
  if (lang === "ta") return `என் ${crop} பயிருக்கு உங்கள் ஆஃபர் ${currency(inputs.offer)} ஒரு குவிண்டாலுக்கு. சந்தை கணிப்பு ${currency(prediction)}. ${inputs.quantity} குவிண்டாலுக்கு ${currency(target)} என்ற விலையில் முடிக்கலாம். குறைந்தபட்ச சரியான விலை ${currency(floor)}; கட்டணம் மற்றும் எடை உறுதி வேண்டும்.`;
  if (lang === "kn") return `ನನ್ನ ${crop} ಬೆಳೆಗೆ ನಿಮ್ಮ ಆಫರ್ ${currency(inputs.offer)} ಪ್ರತಿ ಕ್ವಿಂಟಲ್. ಮಾರುಕಟ್ಟೆ ಅಂದಾಜು ${currency(prediction)}. ${inputs.quantity} ಕ್ವಿಂಟಲ್ ಗೆ ${currency(target)} ದಲ್ಲಿ ಡೀಲ್ ಮಾಡಬಹುದು. ಕನಿಷ್ಠ ಸರಿಯಾದ ಬೆಲೆ ${currency(floor)}; ಪಾವತಿ ಮತ್ತು ತೂಕ ದೃಢವಾಗಿರಲಿ.`;
  if (lang === "mr") return `माझ्या ${crop} पिकासाठी तुमची ऑफर ${currency(inputs.offer)} प्रति क्विंटल आहे. बाजार अंदाज ${currency(prediction)} आहे. ${inputs.quantity} क्विंटलसाठी मी ${currency(target)} प्रति क्विंटलला डील करू शकतो. किमान योग्य भाव ${currency(floor)} आहे; पेमेंट आणि वजन खात्रीचे पाहिजे.`;

  const opening = {
    firm: `Your current offer of ${currency(inputs.offer)} per quintal is below my target for ${crop}.`,
    friendly: `Thank you for the offer on my ${crop}. I want to close this deal fairly for both sides.`,
    urgent: "I can arrange dispatch soon, but the price needs to match today's market movement."
  };
  return `${opening[tone]} Market prediction is around ${currency(prediction)} per quintal, and my lot is ${inputs.quantity} quintals. I can accept ${currency(target)} per quintal with prompt payment and verified weighing. My minimum workable price is ${currency(floor)} per quintal after transport and production cost.`;
}

function syncAdvancedControls(inputs, prediction) {
  if (forecastCropInput.value !== inputs.crop) forecastCropInput.value = inputs.crop;
  if (dealCropInput.value !== inputs.crop) dealCropInput.value = inputs.crop;
}

function renderForecastPro(inputs) {
  const crop = forecastCropInput.value;
  const mandi = mandiFactors[forecastMandiInput.value];
  const season = seasonFactors[forecastSeasonInput.value];
  const period = Number(forecastPeriodInput.value);
  const current = predictedPrice(crop, Math.min(inputs.storageDays, 18)) * mandi.mod * season.mod;
  const periodLift = 1 + (period / 100) * cropData[crop].storageGain * mandi.demand;
  const forecast = Math.max(250, current * periodLift);
  const move = ((forecast - current) / current) * 100;
  const confidence = Math.max(69, Math.min(94, Math.round(88 - cropData[crop].volatility / 70 + mandi.demand * 4)));
  const bestStart = Math.max(2, Math.round(period * 0.62));
  const bestEnd = Math.min(period, bestStart + 3);

  document.getElementById("proCurrentPrice").textContent = currency(current);
  document.getElementById("proForecastLabel").textContent = `${period}-day Forecast`;
  document.getElementById("proForecastPrice").textContent = currency(forecast);
  document.getElementById("proForecastMove").textContent = `${move >= 0 ? "+" : ""}${move.toFixed(1)}% expected`;
  document.getElementById("proSellWindow").textContent = `Day ${bestStart}-${bestEnd}`;
  document.getElementById("proConfidence").textContent = `${confidence}%`;
  document.getElementById("proTrendDays").textContent = `(${period} days)`;

  const bars = Array.from({ length: 7 }, (_, index) => {
    const ratio = 0.78 + Math.sin(index * 0.8 + mandi.demand) * 0.11 + index * (move / 1000);
    const height = Math.max(38, Math.min(150, 118 * ratio));
    return { height, active: index === Math.min(6, bestStart - 1), label: `D${index + 1}` };
  });
  document.getElementById("proTrendBars").innerHTML = bars.map((bar) => `
    <div class="trend-bar ${bar.active ? "active" : ""}" style="height:${bar.height}px">
      <span>${bar.label}</span>
    </div>
  `).join("");
}

function renderNegotiationLab() {
  const crop = dealCropInput.value;
  const quantity = dealQuantityInfo();
  const minimum = Number(dealMinPriceInput.value) || 0;
  const offer = Number(dealOfferInput.value) || 0;
  const gap = minimum - offer;
  const market = predictedPrice(crop, Number(storageDaysInput.value) || 0);
  const floor = Math.max(minimum, Math.round(market * 0.96));
  const target = Math.round(Math.max(minimum * 1.06, market * 1.04));
  const totalGap = Math.max(0, (floor - offer) * quantity.quintals);
  const tone = gap > 0 ? "firm" : "friendly";
  const inputSnapshot = { crop, quantity: quantity.quintals, offer, transport: 0, cost: 0, storageDays: 0 };
  const aiLine = offer < floor
    ? `AI reply: Do not accept yet. The buyer offer ${currency(offer)} is below your safe floor ${currency(floor)} per quintal. Counter at ${currency(target)} and keep the minimum acceptable price at ${currency(floor)}.`
    : negotiationMessage(inputSnapshot, Math.max(market, offer), 0, 72, 18, tone);

  if (!negotiationMessages.length) {
    negotiationMessages = [
      { role: "buyer", text: `Buyer: I can pay ${currency(offer)} per quintal for ${quantity.label} of ${cropName(crop)}.` },
      { role: "ai", text: aiLine },
      { role: "system", text: `AI strategy: ask for ${currency(target)}, keep floor at ${currency(floor)}, and mention that accepting the current offer loses ${currency(totalGap)} against the safe floor.` }
    ];
  }

  renderNegotiationChat();
  renderFeedbackAnalysis();
  renderAutoReport();
}

function resetNegotiationLab() {
  negotiationMessages = [];
  renderNegotiationLab();
}

function renderNegotiationChat() {
  document.getElementById("negotiationChat").innerHTML = `
    ${negotiationMessages.map((message) => `<div class="nego-bubble ${message.role}">${message.text}</div>`).join("")}
  `;
  const chat = document.getElementById("negotiationChat");
  chat.scrollTop = chat.scrollHeight;
  renderDecisionStrip();
}

function addNegotiationMessage(role, text) {
  if (!text.trim()) return;
  negotiationMessages.push({ role, text: role === "buyer" ? `Buyer: ${text.trim()}` : `Farmer: ${text.trim()}` });
  negotiationMessages.push({ role: "ai", text: generateAiReply(text) });
  renderNegotiationChat();
  renderFeedbackAnalysis();
  renderAutoReport();
}

function generateAiReply(text) {
  const crop = dealCropInput.value;
  const quantity = dealQuantityInfo();
  const minimum = Number(dealMinPriceInput.value) || 0;
  const offer = Number(dealOfferInput.value) || 0;
  const market = predictedPrice(crop, Number(storageDaysInput.value) || 0);
  const marketFloor = Math.round(market * 0.96);
  const safeFloor = Math.max(minimum, marketFloor);
  const lower = text.toLowerCase();
  const numbers = text.match(/(?:₹|rs\.?|inr)?\s*(\d{3,6})/gi) || [];
  const mentionedPrice = numbers
    .map((match) => Number(match.replace(/[^\d]/g, "")))
    .filter((value) => value >= 100 && value <= 50000)
    .pop();
  if (mentionedPrice && chatSpeakerInput.value === "buyer") dealOfferInput.value = mentionedPrice;
  const currentOffer = mentionedPrice || offer;
  const target = Math.round(Math.max(safeFloor * 1.05, market * 1.04, currentOffer * 1.03));
  const buyerIsSpeaking = chatSpeakerInput.value === "buyer";

  if (buyerIsSpeaking && (lower.includes("cannot") || lower.includes("can't") || lower.includes("not possible") || lower.includes("too high"))) {
    return `AI reply: Buyer is resisting. Hold the safe floor at ${currency(safeFloor)} and offer one concession only: faster loading, cleaner grading, or split delivery. Do not reduce price unless they give advance payment.`;
  }
  if (buyerIsSpeaking && (lower.includes("credit") || lower.includes("later") || lower.includes("after delivery"))) {
    return `AI reply: Credit request is risky. Ask for advance now and balance before unloading. If they need credit, use a written agreement and keep the price above ${currency(target)} per quintal.`;
  }
  if (buyerIsSpeaking && (lower.includes("ok") || lower.includes("agree") || lower.includes("confirmed") || lower.includes("deal"))) {
    return `AI reply: Good signal. Before closing, ask them to confirm final price ${currency(currentOffer)}, total quantity ${quantity.label}, pickup time, weighing slip, and payment mode in writing.`;
  }
  if (buyerIsSpeaking && mentionedPrice && currentOffer > offer) {
    return currentOffer >= safeFloor
      ? `AI reply: Buyer improved the offer. It clears the safe floor ${currency(safeFloor)}. Push once toward ${currency(target)}, or accept only after payment and weighing confirmation.`
      : `AI reply: Buyer improved, but ${currency(currentOffer)} is still below safe floor ${currency(safeFloor)}. Counter at ${currency(target)} and explain the remaining gap.`;
  }
  if (lower.includes("location") || lower.includes("pickup") || lower.includes("weigh")) {
    return `AI reply: For terms confirmation, ask the buyer to write pickup location, weighing method, payment deadline, and loading responsibility in one message. Keep the deal on hold until those terms are confirmed. Minimum close price: ${currency(safeFloor)} per quintal.`;
  }
  if (lower.includes("advance") || lower.includes("payment")) {
    return `AI reply: For payment safety, ask for 20% advance before loading and same-day bank transfer for the balance. Do not dispatch ${cropName(crop)} until payment proof is shared. Keep price floor at ${currency(safeFloor)} per quintal.`;
  }
  if (lower.includes("transport") || lower.includes("loading") || lower.includes("charge")) {
    return `AI reply: Make transport a separate negotiation point. Ask the buyer to cover transport/loading or add ${currency(80)}-${currency(120)} per quintal to the price. Final price should not fall below ${currency(safeFloor)}.`;
  }
  if (lower.includes("quality") || lower.includes("above market") || lower.includes("better quality")) {
    return `AI reply: Use quality as leverage. Say you can provide clean, graded ${cropName(crop)} with moisture/quality proof, but the buyer must pay closer to ${currency(target)} per quintal.`;
  }
  if (lower.includes("license") || lower.includes("reference") || lower.includes("verify")) {
    return `AI reply: Good scam check. Ask for mandi license number, GST or trader ID, two recent farmer references, and payment history before accepting pickup.`;
  }
  if (lower.includes("split") || lower.includes("two lots") || lower.includes("delivery")) {
    return `AI reply: Split delivery is safer. Send the first lot only after advance payment, then release the second lot after the first payment clears. Keep both lots priced at or above ${currency(safeFloor)}.`;
  }
  if (lower.includes("final") || lower.includes("close") || lower.includes("now")) {
    return `AI reply: Ask for a final written quote. If the buyer reaches ${currency(target)}, close with advance payment and weighing confirmation. If they stay below ${currency(safeFloor)}, reject politely.`;
  }
  if (lower.includes("improve") || lower.includes("price") || lower.includes("rate")) {
    return `AI reply: Counter strongly at ${currency(target)} per quintal. Explain that the market safe floor is ${currency(safeFloor)} and your quantity is ${quantity.label}, so the current offer is not enough.`;
  }
  if (currentOffer < safeFloor) {
    return `AI reply: Do not accept yet. ${currency(currentOffer)} is below the safe floor ${currency(safeFloor)} per quintal. Counter at ${currency(target)}. For ${quantity.label}, accepting now loses ${currency((safeFloor - currentOffer) * quantity.quintals)} against the safe floor.`;
  }
  if (currentOffer < target) {
    return `AI reply: This offer clears the floor but still has room. Ask the buyer to improve toward ${currency(target)} per quintal, then lock verified weighing, payment proof, and pickup timing.`;
  }
  return `AI reply: Strong offer. You can proceed at ${currency(currentOffer)} per quintal after written confirmation of advance payment, weighing slip, and pickup timing.`;
}

function renderDecisionStrip() {
  const metrics = negotiationMetrics();
  const action = metrics.gap >= 0 ? "Can close" : "Counter";
  const nextPrice = metrics.gap >= 0 ? metrics.offer : Math.round(metrics.safeFloor * 1.05);
  const risk = metrics.paymentScore > 70 && metrics.safetyScore > 70 ? "Controlled" : "Needs terms";
  document.getElementById("aiDecisionStrip").innerHTML = [
    ["Next action", action],
    ["Target price", currency(nextPrice)],
    ["Risk status", risk]
  ].map(([label, value]) => `
    <div class="decision-chip"><span>${label}</span><strong>${value}</strong></div>
  `).join("");
}

function negotiationMetrics() {
  const quantity = dealQuantityInfo();
  const minimum = Number(dealMinPriceInput.value) || 0;
  const offer = Number(dealOfferInput.value) || 0;
  const market = predictedPrice(dealCropInput.value, Number(storageDaysInput.value) || 0);
  const safeFloor = Math.max(minimum, Math.round(market * 0.96));
  const gap = offer - safeFloor;
  const priceScore = Math.max(0, Math.min(100, Math.round(60 + (gap / Math.max(safeFloor, 1)) * 180)));
  const termText = negotiationMessages.map((message) => message.text.toLowerCase()).join(" ");
  const paymentScore = termText.includes("advance") || termText.includes("payment") ? 88 : 54;
  const safetyScore = termText.includes("weigh") || termText.includes("pickup") || termText.includes("confirm") ? 86 : 58;
  const clarityScore = Math.min(96, 58 + negotiationMessages.length * 6);
  const total = Math.round((priceScore * 0.38) + (paymentScore * 0.22) + (safetyScore * 0.22) + (clarityScore * 0.18));
  return { quantity: quantity.quintals, quantityLabel: quantity.label, minimum, safeFloor, offer, gap, priceScore, paymentScore, safetyScore, clarityScore, total };
}

function renderFeedbackAnalysis() {
  const metrics = negotiationMetrics();
  const grade = metrics.total >= 85 ? "A" : metrics.total >= 70 ? "B" : metrics.total >= 55 ? "C" : "D";
  const status = metrics.total >= 85 ? "Ready to close" : metrics.total >= 70 ? "Almost ready" : metrics.total >= 55 ? "Needs terms" : "Counter first";
  const ringColor = metrics.total >= 70 ? "#75d69c" : metrics.total >= 55 ? "#e0b64d" : "#ff796d";
  document.getElementById("feedbackScore").textContent = metrics.total;
  document.getElementById("feedbackGrade").textContent = grade;
  document.querySelector(".feedback-score").style.setProperty("--score", `${metrics.total * 3.6}deg`);
  document.querySelector(".feedback-score").style.setProperty("--score-color", ringColor);
  document.getElementById("feedbackMeters").innerHTML = [
    ["Price strength", metrics.priceScore, metrics.priceScore >= 70 ? "Strong" : "Improve"],
    ["Payment safety", metrics.paymentScore, metrics.paymentScore >= 70 ? "Safe" : "Add advance"],
    ["Dispute protection", metrics.safetyScore, metrics.safetyScore >= 70 ? "Protected" : "Confirm terms"],
    ["Clarity", metrics.clarityScore, metrics.clarityScore >= 70 ? "Clear" : "Needs detail"]
  ].map(([label, value, tag]) => `
    <div class="meter-row" title="${label}: ${value}%">
      <span><b>${label}</b><em>${tag}</em><b>${value}%</b></span>
      <div class="meter-track"><div style="width:${value}%"></div></div>
    </div>
  `).join("");

  const advice = [
    metrics.gap >= 0
      ? ["Strong price", `Offer is ${currency(metrics.gap)} above the safe floor per quintal.`, "Keep price", "final"]
      : ["Price gap", `Buyer is ${currency(Math.abs(metrics.gap))} below the safe floor per quintal.`, "Counter price", "price"],
    metrics.paymentScore > 70
      ? ["Payment covered", "Payment or advance terms are mentioned.", "Lock payment", "payment"]
      : ["Add payment terms", "Ask for advance payment or same-day transfer proof.", "Add advance", "advance"],
    metrics.safetyScore > 70
      ? ["Risk reduced", "Pickup, weighing, or confirmation terms are included.", "Confirm close", "confirm"]
      : ["Add safety terms", "Mention weighing slip, pickup location, and written confirmation.", "Add safety", "confirm"]
  ];
  const projected = Math.min(100, metrics.total + (metrics.paymentScore < 70 ? 12 : 0) + (metrics.safetyScore < 70 ? 10 : 0) + (metrics.priceScore < 70 ? 8 : 0));
  const nextStep = metrics.gap >= 0 ? "Confirm payment, weighing, and pickup before closing." : `Counter at ${currency(Math.round(metrics.safeFloor * 1.05))} per quintal.`;
  document.getElementById("feedbackList").innerHTML = advice.map(([title, body, cta, action]) => `
    <button type="button" class="feedback-item" data-feedback-action="${action}">
      <strong>${title}</strong><span>${body}</span>
      <small>${cta}</small>
    </button>
  `).join("") + `
    <div class="feedback-next-step">
      <div><span>AI next step</span><strong>${nextStep}</strong></div>
      <div><span>Possible score</span><strong>${projected}/100</strong></div>
      <div><span>Status</span><strong>${status}</strong></div>
    </div>
  `;
}

function reportText() {
  const metrics = negotiationMetrics();
  const crop = cropName(dealCropInput.value);
  const revenue = metrics.offer * metrics.quantity;
  const floorRevenue = metrics.safeFloor * metrics.quantity;
  return [
    "AgriDeal AI Negotiation Report",
    `Crop: ${crop}`,
    `Quantity: ${metrics.quantityLabel}`,
    `Buyer offer: ${currency(metrics.offer)} per quintal`,
    `Farmer minimum: ${currency(metrics.minimum)} per quintal`,
    `Safe floor: ${currency(metrics.safeFloor)} per quintal`,
    `Expected revenue: ${currency(revenue)}`,
    `Floor revenue: ${currency(floorRevenue)}`,
    `Negotiation score: ${metrics.total}/100`,
    `Recommendation: ${metrics.gap >= 0 ? "Proceed after payment and weighing confirmation." : "Counter offer before accepting."}`
  ].join("\n");
}

function renderAutoReport() {
  const metrics = negotiationMetrics();
  const crop = cropName(dealCropInput.value);
  const revenue = metrics.offer * metrics.quantity;
  const recommendation = metrics.gap >= 0 ? "Proceed carefully" : "Counter offer";
  document.getElementById("autoReport").innerHTML = `
    <h4>AgriDeal AI Deal Report</h4>
    <div class="report-grid">
      <div class="report-stat"><span>Crop</span><strong>${crop}</strong></div>
      <div class="report-stat"><span>Quantity</span><strong>${metrics.quantityLabel}</strong></div>
      <div class="report-stat"><span>Buyer offer</span><strong>${currency(metrics.offer)}</strong></div>
      <div class="report-stat"><span>Expected revenue</span><strong>${currency(revenue)}</strong></div>
      <div class="report-stat"><span>Safe floor</span><strong>${currency(metrics.safeFloor)}</strong></div>
      <div class="report-stat"><span>Score</span><strong>${metrics.total}/100</strong></div>
    </div>
    <p><strong>Recommendation:</strong> ${recommendation}. ${metrics.gap >= 0 ? "Offer clears the safe floor, but confirm advance/payment and weighing before dispatch." : `Ask for at least ${currency(metrics.safeFloor)} per quintal before accepting.`}</p>
  `;
}

function directChannelRows(inputs, prediction) {
  const commissionRate = 0.12;
  const middlemanLoss = prediction * commissionRate;
  return Object.entries(directConsumerChannels).map(([key, channel]) => {
    const demand = channel.demand[inputs.crop] || 50;
    const directPrice = Math.round(prediction * channel.priceLift + demand * 2);
    const fulfillmentCost = key === "homes" ? 220 : key === "hotels" ? 140 : 170;
    const netPrice = directPrice - fulfillmentCost;
    const extraPerQtl = Math.max(0, netPrice - inputs.offer + middlemanLoss);
    const fit = Math.max(8, Math.min(99, Math.round(demand * 0.68 + channel.priceLift * 18 + (inputs.quantity < 25 && key === "homes" ? 9 : 0))));
    return { key, channel, demand, directPrice, fulfillmentCost, netPrice, extraPerQtl, fit };
  });
}

function renderDirectSellingMode(inputs, prediction) {
  const rows = directChannelRows(inputs, prediction);
  const best = rows.reduce((top, row) => row.extraPerQtl * row.fit > top.extraPerQtl * top.fit ? row : top, rows[0]);
  if (!rows.some((row) => row.key === selectedDirectChannel)) selectedDirectChannel = best.key;
  const active = rows.find((row) => row.key === selectedDirectChannel) || best;
  const totalSaving = active.extraPerQtl * inputs.quantity;
  const directLots = Math.max(1, Math.ceil(inputs.quantity / (active.key === "homes" ? 2 : active.key === "hotels" ? 8 : 5)));

  document.getElementById("directBestChannel").textContent = best.channel.label;
  document.getElementById("directBestReason").textContent = `${best.fit}% fit with ${best.demand}% demand`;
  document.getElementById("directSaving").textContent = currency(totalSaving);
  document.getElementById("directSuggestedPrice").textContent = currency(active.directPrice);

  document.getElementById("directChannelTabs").innerHTML = rows.map((row) => `
    <button type="button" class="${row.key === active.key ? "active" : ""}" data-direct-channel="${row.key}">
      ${row.channel.label}
    </button>
  `).join("");

  document.getElementById("directBuyerGrid").innerHTML = rows.map((row) => `
    <div class="direct-buyer-card ${row.key === active.key ? "active" : ""}">
      <span>${row.channel.buyer}</span>
      <strong>${row.channel.label}</strong>
      <small>Suggested price</small>
      <b>${currency(row.directPrice)} / qtl</b>
      <div class="direct-chip-row">
        <span>${row.demand}% demand</span>
        <span>${row.fit}% fit</span>
        <span>${currency(row.extraPerQtl)} saved/qtl</span>
      </div>
      <small>${row.pack} - ${row.payment}</small>
    </div>
  `).join("");

  document.getElementById("directPlaybook").innerHTML = `
    <h3>${active.channel.label} - Direct sale playbook</h3>
    <p>${active.channel.pitch}</p>
    <ul>
      <li><strong>Lot plan:</strong> ${directLots} lots - ${active.channel.pack.toLowerCase()}.</li>
      <li><strong>Price floor:</strong> quote ${currency(active.directPrice)} and keep at least ${currency(active.netPrice)} after packing and delivery.</li>
      <li><strong>Payment rule:</strong> ${active.channel.payment}. Confirm weight, delivery time, and return rules before dispatch.</li>
    </ul>
  `;
}

function freshnessMetrics(inputs) {
  const shelf = cropData[inputs.crop].shelf;
  const harvestHours = Number(document.getElementById("listingHarvest")?.value || 0);
  const listingAgeDays = inputs.storageDays + harvestHours / 24;
  const freshness = Math.max(12, Math.min(98, Math.round(98 - (listingAgeDays / Math.max(shelf, 1)) * 52)));
  const harvestLabel = harvestHours === 0 && inputs.storageDays <= 1
    ? "Harvested today"
    : harvestHours > 0 && harvestHours < 24
      ? `Harvested ${harvestHours} hours ago`
    : inputs.storageDays <= 3
      ? "Harvested recently"
      : `${inputs.storageDays} days after harvest`;
  const quality = freshness >= 90 ? "A+" : freshness >= 78 ? "A" : freshness >= 62 ? "B" : "Needs fast sale";
  const after12 = Math.max(10, freshness - Math.round(12 / Math.max(shelf * 24, 1) * 52));
  const urgency = freshness >= 82 ? "Sell within 24 hours for maximum value." : freshness >= 62 ? "Sell today or use cold storage." : "Urgent sale recommended now.";
  return { freshness, harvestLabel, quality, after12, urgency };
}

function demandBoostForCrop(crop) {
  if (["tomato", "onion", "potato", "brinjal", "banana"].includes(crop)) return 12;
  if (["mango", "grapes", "apple"].includes(crop)) return 9;
  if (["marigold", "rose", "jasmine"].includes(crop)) return 14;
  if (["rice", "wheat", "maize"].includes(crop)) return 5;
  return 2;
}

function buyerMatchRows(inputs, prediction) {
  const freshness = freshnessMetrics(inputs);
  const demandBoost = demandBoostForCrop(inputs.crop);
  return nearbyBuyers.map((buyer, index) => {
    const cropFit = buyer.fit.includes(inputs.crop);
    const distanceScore = Math.max(0, 100 - buyer.distance * 6);
    const paymentScore = Math.max(30, 100 - buyer.payHours * 7);
    const offerLift = buyer.offerLift + (cropFit ? 0.02 : -0.04) + (urgentSellMode ? 0.01 : 0);
    const offer = Math.round(prediction * offerLift);
    const score = Math.max(12, Math.min(99, Math.round(
      offerLift * 28 +
      buyer.trust * 0.26 +
      distanceScore * 0.18 +
      paymentScore * 0.14 +
      freshness.freshness * 0.1 +
      demandBoost +
      (cropFit ? 7 : -6)
    )));
    const deliveryMinutes = Math.max(25, Math.round(buyer.pickup + buyer.distance * 8 - (urgentSellMode ? 18 : 0)));
    const transportCost = Math.max(70, Math.round(buyer.distance * 26 + inputs.quantity * 12));
    return {
      ...buyer,
      cropFit,
      offer,
      offerKg: pricePerKg(offer),
      score,
      deliveryMinutes,
      transportCost,
      rankValue: score + offer / 220 - buyer.distance * 1.8 - buyer.payHours
    };
  }).sort((a, b) => {
    if (buyerSortMode === "price") return b.offer - a.offer;
    if (buyerSortMode === "distance") return a.distance - b.distance;
    if (buyerSortMode === "trust") return b.trust - a.trust;
    return b.rankValue - a.rankValue;
  });
}

function renderBuyerAlertSystem(inputs, prediction, rows, fresh, quantityKg, fairLow, fairHigh) {
  const activeRows = rows.filter((buyer) => buyer.cropFit || buyer.score >= 78);
  const notified = buyerAlertSent ? Math.max(8, activeRows.length * 3 + (urgentSellMode ? 6 : 2)) : 0;
  const seen = buyerAlertSent ? Math.max(0, notified - (urgentSellMode ? 2 : 4)) : 0;
  const interested = buyerAlertSent ? Math.max(0, Math.round(activeRows.length * 1.7 + (demandBoostForCrop(inputs.crop) >= 10 ? 3 : 1))) : 0;
  const pickupReady = buyerAlertSent ? Math.max(0, activeRows.filter((buyer) => buyer.deliveryMinutes <= 75).length + (urgentSellMode ? 2 : 0)) : 0;
  const topBuyer = rows[0];

  document.getElementById("buyerAlertStats").innerHTML = [
    ["Notified", notified, buyerAlertSent ? "Nearby buyers reached" : "Waiting"],
    ["Seen", seen, buyerAlertSent ? "Listing opened" : "Not sent"],
    ["Interested", interested, buyerAlertSent ? "Buyers responding" : "No responses"],
    ["Pickup ready", pickupReady, buyerAlertSent ? "Fast pickup vendors" : "Pending"]
  ].map(([label, value, body]) => `
    <div class="alert-stat">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${body}</small>
    </div>
  `).join("");

  const timeline = buyerAlertSent
    ? [
        ["Sent", `AI broadcasted ${cropName(inputs.crop)} ${quantityKg}kg at ${currency(fairLow)}-${currency(fairHigh)}/kg.`],
        ["Seen", `${topBuyer.name} opened the listing and checked freshness score ${fresh.freshness}%.`],
        ["Response", `${topBuyer.name} can pickup in ${topBuyer.deliveryMinutes} minutes with ${topBuyer.trust}% trust.`],
        [urgentSellMode ? "Urgent boost" : "AI follow-up", urgentSellMode ? "Urgent sale pushed to fast pickup buyers." : "AI is nudging high-trust buyers for better offers."]
      ]
    : [
        ["Ready", "Create a listing or click Notify Buyers to alert nearby buyers instantly."],
        ["Preview", "Hotels, vendors, restaurants, markets, and wholesalers will receive quantity, price, distance, and freshness."]
      ];

  document.getElementById("buyerAlertTimeline").innerHTML = timeline.map(([title, body]) => `
    <div class="alert-step">
      <span>${title}</span>
      <p>${body}</p>
    </div>
  `).join("");
}

function renderSmartBuyerMarketplace(inputs, prediction) {
  const rows = buyerMatchRows(inputs, prediction);
  const best = rows[0];
  if (!rows.some((buyer) => buyer.name === selectedMarketBuyer)) selectedMarketBuyer = best.name;
  const activeBuyer = rows.find((buyer) => buyer.name === selectedMarketBuyer) || best;
  const fresh = freshnessMetrics(inputs);
  const quantityKg = Math.round((Number(listingQuantityInput?.value) || inputs.quantity * 100));
  const fairLow = Math.max(1, Math.round(pricePerKg(prediction * 0.96)));
  const fairHigh = Math.max(fairLow, Math.round(pricePerKg(prediction * 1.06)));
  const uploadedOfferKg = Math.max(1, Math.round(Number(listingExpectedPriceInput?.value) || pricePerKg(inputs.offer)));
  const location = document.getElementById("listingLocation")?.value || "Bengaluru Rural";
  const demandItems = ["tomato", "onion", "potato", "cabbage"].map((crop) => {
    const low = crop === "cabbage";
    const hot = !low && (crop === inputs.crop || demandBoostForCrop(crop) >= 12);
    return { crop, hot, low, demand: low ? 38 : Math.min(99, 76 + demandBoostForCrop(crop) + (crop === inputs.crop ? 8 : 0)) };
  });

  document.getElementById("marketUploadCrop").textContent = cropName(inputs.crop);
  document.getElementById("marketUploadDetails").textContent = `${quantityKg} kg - ${currency(uploadedOfferKg)}/kg - ${location}`;
  document.getElementById("freshnessScore").textContent = `${fresh.freshness}%`;
  document.getElementById("freshnessDetails").textContent = `${fresh.harvestLabel} - ${fresh.quality} quality - 12h: ${fresh.after12}%`;
  document.getElementById("autoPriceRecommendation").textContent = `${currency(fairLow)}-${currency(fairHigh)}/kg`;
  document.getElementById("marketDemandSignal").textContent = demandBoostForCrop(inputs.crop) >= 10 ? "HIGH DEMAND TODAY" : "Stable demand today";
  document.getElementById("deliveryEstimate").textContent = `${Math.round(best.deliveryMinutes / 60) || 1}-${Math.ceil(best.deliveryMinutes / 60) + 1} hours`;
  document.getElementById("deliveryCost").textContent = `Transport ${currency(best.transportCost)}`;
  document.getElementById("buyerSortTabs").querySelectorAll("[data-buyer-sort]").forEach((button) => {
    button.classList.toggle("active", button.dataset.buyerSort === buyerSortMode);
  });
  document.getElementById("listingAiOutput").innerHTML = `
    <div>
      <span>Smart Crop Listing</span>
      <strong>${cropName(inputs.crop)} ${quantityKg}kg</strong>
      <small>Location: ${location}</small>
    </div>
    <div>
      <span>AI suggested price</span>
      <strong>${currency(fairLow)}-${currency(fairHigh)}/kg</strong>
      <small>Expected by current demand and freshness</small>
    </div>
    <div>
      <span>Demand level</span>
      <strong>${demandBoostForCrop(inputs.crop) >= 10 ? "High" : "Medium"}</strong>
      <small>${fresh.urgency}</small>
    </div>
  `;
  renderBuyerAlertSystem(inputs, prediction, rows, fresh, quantityKg, fairLow, fairHigh);

  document.getElementById("liveMarketDemandFeed").innerHTML = demandItems.map((item) => `
    <button type="button" class="demand-feed-item ${item.hot ? "hot" : ""} ${item.low ? "low" : ""} ${item.crop === inputs.crop ? "active" : ""}" data-demand-crop="${item.crop}">
      <span>${item.low ? "LOW DEMAND" : item.hot ? "HIGH DEMAND TODAY" : "Market demand"}</span>
      <strong>${cropName(item.crop)}</strong>
      <small>${item.demand}% buyer activity</small>
      <i><b style="width:${item.demand}%"></b></i>
    </button>
  `).join("");

  document.getElementById("selectedBuyerPanel").innerHTML = `
    <div>
      <span>Chosen buyer for sale</span>
      <strong>${activeBuyer.name}</strong>
      <small>${activeBuyer.type} - ${activeBuyer.distance.toFixed(1)} km away</small>
    </div>
    <div>
      <span>Best offer</span>
      <strong>${currencyPerKg(activeBuyer.offer)}</strong>
      <small>${currency(Math.round(activeBuyer.offerKg * quantityKg))} total value</small>
    </div>
    <div>
      <span>Pickup ETA</span>
      <strong>${activeBuyer.deliveryMinutes} min</strong>
      <small>Transport ${currency(activeBuyer.transportCost)}</small>
    </div>
    <div>
      <span>Trust + payment</span>
      <strong>${activeBuyer.trust}%</strong>
      <small>${activeBuyer.payHours}h payment - ${activeBuyer.review}</small>
    </div>
  `;
  const success = Math.max(18, Math.min(98, Math.round(activeBuyer.score * 0.42 + fresh.freshness * 0.28 + (activeBuyer.offer / Math.max(prediction, 1)) * 24 + (urgentSellMode ? 4 : 0))));
  const scamRisk = activeBuyer.trust < 80 || activeBuyer.payHours > 6 ? "Review payment terms" : "Low fraud risk";
  document.getElementById("dealSuccessProbability").textContent = `${success}%`;
  document.getElementById("dealSuccessReason").textContent = `${currencyPerKg(activeBuyer.offer)} offer - ${activeBuyer.trust}% buyer trust`;
  document.getElementById("marketScamAlert").innerHTML = `
    <span>AI Scam/Fraud Detection</span>
    <strong>${scamRisk}</strong>
    <small>${activeBuyer.trust < 80 ? "Buyer trust score is lower. Ask for advance payment." : "Verified buyer pattern. Still confirm payment before dispatch."}</small>
  `;

  document.getElementById("buyerMatchGrid").innerHTML = rows.slice(0, 3).map((buyer, index) => `
    <div class="buyer-match-card ${index === 0 ? "best" : ""} ${buyer.name === activeBuyer.name ? "selected" : ""}" data-market-buyer-card="${buyer.name}">
      <div class="buyer-match-head">
        <div>
          <span class="buyer-match-name">${buyer.name}</span>
          <span>${buyer.type} - ${buyer.distance.toFixed(1)} km away</span>
        </div>
        <div class="match-score">${buyer.score}<small>AI match</small></div>
      </div>
      <div class="buyer-metrics">
        <span>${currencyPerKg(buyer.offer)}</span>
        <span>${buyer.trust}% trust</span>
        <span>${buyer.deliveryMinutes} min pickup</span>
        <span>${buyer.payHours}h payment</span>
      </div>
      <small>Sees: ${quantityKg} kg, ${currency(uploadedOfferKg)}/kg, ${buyer.distance.toFixed(1)} km distance, ${fresh.freshness}% freshness.</small>
      <div class="buyer-review">★★★★★ "${buyer.review}"</div>
      <div class="buyer-live-status">
        <span>${buyer.name === activeBuyer.name ? "Chosen for sale" : index === 0 ? "AI best sale match" : "Tap to compare"}</span>
        <strong>${currency(Math.round(buyer.offerKg * quantityKg))} total</strong>
      </div>
      <div class="buyer-actions">
        <button type="button" data-market-buy="${buyer.name}">Sell Now</button>
        <button type="button" class="secondary" data-market-negotiate="${buyer.name}">Counter Offer</button>
      </div>
    </div>
  `).join("");

  document.getElementById("liveDealPrompt").textContent =
    `Farmer can sell to ${activeBuyer.name} at ${currencyPerKg(activeBuyer.offer)}. AI fair price: ${currency(fairLow)}-${currency(fairHigh)}/kg for ${fresh.freshness}% freshness.`;
  document.getElementById("suggestedReply").textContent = `Suggested reply: Can offer at ${currency(Math.max(fairLow, Math.round(pricePerKg(activeBuyer.offer * 0.96))))}/kg.`;
  if (!marketChatMessages.length) {
    marketChatMessages = [
      { role: "buyer", text: `${activeBuyer.name}: I can purchase ${quantityKg} kg at ${currencyPerKg(activeBuyer.offer)}.` },
      { role: "ai", text: `AI: Farmer should sell only if pickup, payment, and price are confirmed. Fair range is ${currency(fairLow)}-${currency(fairHigh)}/kg.` }
    ];
  }
  document.getElementById("marketChatLog").innerHTML = marketChatMessages.slice(-4).map((message) => `
    <div class="market-chat-bubble ${message.role}">${message.text}</div>
  `).join("");
}

function syncListingToMainForm() {
  if (!listingCropInput.value) listingCropInput.value = cropInput.value;
  cropInput.value = listingCropInput.value;
  forecastCropInput.value = listingCropInput.value;
  dealCropInput.value = listingCropInput.value;
  quantityInput.value = Math.max(1, Number(listingQuantityInput.value) || 500);
  quantityUnitInput.value = "kg";
  offerInput.value = Math.max(1, (Number(listingExpectedPriceInput.value) || 24) * 100);
}

function renderSmartTrust(inputs) {
  const offerPressure = Math.max(-8, Math.min(8, Math.round((inputs.offer - predictedPrice(inputs.crop, inputs.storageDays)) / 80)));
  document.getElementById("smartBuyerList").innerHTML = smartBuyers.map((buyer) => {
    const score = Math.max(5, Math.min(98, buyer.base + offerPressure));
    const state = score < 35 ? "danger" : score < 58 ? "warn" : "";
    return `
      <div class="buyer-card">
        <div class="buyer-head">
          <div>
            <span class="buyer-name">${buyer.name}</span>
            <span class="buyer-meta">${buyer.deals} deals - pay ${buyer.pay}</span>
          </div>
          <div class="buyer-score ${state}">${score}<small>Trust</small></div>
        </div>
        <div class="trust-line"><div class="${state}" style="width:${score}%"></div></div>
        <div class="buyer-note">- ${buyer.note}</div>
      </div>
    `;
  }).join("");
}

function heatColor(demand) {
  if (demand >= 92) return "linear-gradient(135deg, #9a0d58, #c01955)";
  if (demand >= 76) return "linear-gradient(135deg, #ab1d16, #c43821)";
  if (demand >= 58) return "linear-gradient(135deg, #b03a00, #bf5a08)";
  return "linear-gradient(135deg, #9a6800, #b46b0b)";
}

function renderDemandHeatmap(inputs) {
  const crop = inputs.crop;
  const cropDemand = crop === "tomato" ? 22 : crop === "cotton" ? 10 : crop === "rice" ? 5 : 0;
  const heat = karnatakaMarkets.map((name, index) => {
    const wave = Math.round(58 + Math.sin(index * 1.75 + cropData[crop].base / 600) * 24 + cropDemand);
    const demand = Math.max(35, Math.min(108, wave));
    const price = Math.max(12, districtPrice(crop, { mod: 0.88 + index * 0.009, trend: demand / 14 }, predictedPrice(crop, inputs.storageDays)) / 100);
    return { name, demand, price };
  });
  const best = heat.reduce((top, item) => item.demand > top.demand ? item : top, heat[0]);

  document.getElementById("demandHeatmap").innerHTML = heat.map((item) => `
    <div class="heat-tile" style="background:${heatColor(item.demand)}">
      ${item.demand >= 88 ? '<b class="surge-pill">Surge</b>' : ""}
      <span>${item.name}</span>
      <strong>${currency(item.price * 100).replace(".00", "")}</strong>
      <small>demand ${item.demand}%</small>
    </div>
  `).join("");
  document.getElementById("heatHotspot").textContent = `HOTSPOT: ${best.name} has the strongest demand index at ${best.demand}. Route ${cropName(crop)} here for better negotiation leverage.`;
}

function renderMarketShockAlerts(inputs, prediction) {
  const crop = inputs.crop;
  const freshRisk = crop === "tomato" && inputs.storageDays > cropData[crop].shelf ? "high" : "normal";
  const offerGap = ((inputs.offer - prediction) / Math.max(prediction, 1)) * 100;
  const alerts = [
    {
      tag: t("weather"),
      title: crop === "tomato" ? t("heavyRain") : t("weatherWatch"),
      body: crop === "tomato" ? t("tomatoRainBody") : t("weatherWatchBody"),
      level: "good"
    },
    {
      tag: t("supply"),
      title: offerGap < -8 ? t("supplySurplus") : t("balancedSupply"),
      body: offerGap < -8 ? t("weakOfferBody") : t("balancedBody"),
      level: offerGap < -8 ? "high" : "good"
    },
    {
      tag: t("crashRisk"),
      title: freshRisk === "high" ? t("qualityClock") : t("noCrash"),
      body: freshRisk === "high" ? t("freshnessHigh") : t("crashLow"),
      level: freshRisk === "high" ? "high" : "good"
    },
    {
      tag: t("aiAction"),
      title: offerGap > 6 ? t("strongSelling") : t("watch48"),
      body: offerGap > 6 ? t("offerBeats") : t("holdCounter"),
      level: offerGap > 6 ? "good" : "normal"
    }
  ];

  document.getElementById("marketShockAlerts").innerHTML = alerts.map((alert) => `
    <button type="button" class="shock-card alert-${alert.level} ${selectedShock === alert.tag ? "selected" : ""}" data-shock="${alert.tag}">
      <span class="shock-tag">${alert.tag}</span>
      <strong>${alert.title}</strong>
      <p>${alert.body}</p>
      <small>${selectedShock === alert.tag ? t("selectedAction") : t("tapSignal")}</small>
    </button>
  `).join("");
}

function renderSellingHeatmap(inputs, prediction) {
  const zones = [
    { name: "Bengaluru APMC", mod: 1.12, demand: 92 },
    { name: "Kolar", mod: 1.16, demand: 88 },
    { name: "Mysuru", mod: 1.03, demand: 70 },
    { name: "Hubli", mod: 0.91, demand: 44 },
    { name: "Tumakuru", mod: 1.08, demand: 80 },
    { name: "Belagavi", mod: 0.96, demand: 58 },
    { name: "Mangaluru", mod: 1.1, demand: 76 },
    { name: "Raichur", mod: 0.89, demand: 39 }
  ];
  document.getElementById("sellingHeatmap").innerHTML = zones.map((zone) => {
    const profit = prediction * zone.mod - inputs.offer;
    const color = zone.demand > 84 ? "linear-gradient(135deg,#64d977,#2f9f5b)" : zone.demand > 62 ? "linear-gradient(135deg,#e0b64d,#c77921)" : "linear-gradient(135deg,#c7362f,#8d1f2b)";
    return `
      <div class="zone-card" style="background:${color}">
        <span>${zone.name}</span>
        <strong>${currency(prediction * zone.mod)}</strong>
        <small>demand ${zone.demand}% · ${profit >= 0 ? "+" : ""}${currency(profit)} vs offer</small>
      </div>
    `;
  }).join("");
}

function renderSmartSellingTimer(inputs, prediction) {
  const gain = Math.round(((predictedPrice(inputs.crop, Math.min(90, inputs.storageDays + 2)) - prediction) / Math.max(prediction, 1)) * 100);
  const shouldHold = gain > 4 && inputs.crop !== "tomato";
  const timerOptions = {
    best: {
      label: shouldHold ? t("hold2") : t("tomorrow"),
      clock: shouldHold ? "2d" : "7-11",
      sub: shouldHold ? t("holdWindow") : t("bestHours"),
      body: shouldHold ? `${t("expectedIncrease")} (${gain}%).` : t("morningDemand"),
      action: shouldHold ? t("noWeak") : t("prepareWindow")
    },
    fast: {
      label: t("sellWithin6"),
      clock: "6h",
      sub: t("fastExit"),
      body: t("urgentCash"),
      action: `${t("acceptNear")} ${currency(Math.max(inputs.offer, prediction * 0.96))}.`
    },
    hold: {
      label: t("hold48Title"),
      clock: "48h",
      sub: t("watchPrice"),
      body: `Predicted 48h value is ${currency(predictedPrice(inputs.crop, Math.min(90, inputs.storageDays + 2)))}.`,
      action: t("useStorage")
    }
  };
  const option = timerOptions[selectedTimerMode] || timerOptions.best;
  document.getElementById("timerBadge").textContent = selectedTimerMode === "fast" ? "Fast" : selectedTimerMode === "hold" ? "Hold" : shouldHold ? "Hold" : "Sell window";
  const calendarDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    const price = predictedPrice(inputs.crop, Math.min(90, inputs.storageDays + index));
    const best = index === selectedCalendarOffset;
    return { index, date, price, best };
  });
  document.getElementById("smartSellingTimer").innerHTML = `
    <div class="timer-clock"><strong>${option.clock}</strong><span>${option.sub}</span></div>
    <div class="timer-details">
      <h3>${option.label}</h3>
      <p>${option.body}</p>
      <p>AI recommendation: ${option.action}</p>
      <div class="timer-actions">
        <button type="button" class="${selectedTimerMode === "best" ? "active" : ""}" data-timer="best">${t("bestWindow")}</button>
        <button type="button" class="${selectedTimerMode === "fast" ? "active" : ""}" data-timer="fast">${t("sellFast")}</button>
        <button type="button" class="${selectedTimerMode === "hold" ? "active" : ""}" data-timer="hold">${t("hold48")}</button>
      </div>
      <div class="selling-calendar">
        <div class="calendar-title">${t("calendar")} · ${t("selectedDate")}: ${calendarDays[selectedCalendarOffset]?.date.toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</div>
        <div class="calendar-grid">
          ${calendarDays.map((day) => `
            <button type="button" class="calendar-day ${day.best ? "active" : ""}" data-calendar-day="${day.index}">
              <span>${day.date.toLocaleDateString("en-IN", { weekday: "short" })}</span>
              <strong>${day.date.getDate()}</strong>
              <small>${currency(day.price)}</small>
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderEmergencyRescue(inputs, prediction) {
  const crash = inputs.crop === "tomato" || inputs.offer < prediction * 0.88;
  const options = crash
    ? [
        ["Alternative market", "Route to Bengaluru APMC or Kolar for better demand."],
        ["Cold storage", "Use 24-48h cold storage to avoid distress selling."],
        ["Delayed selling", "Split stock and sell only urgent quantity today."],
        ["Community buyers", "Contact NGO/community kitchens for bulk rescue sale."]
      ]
    : [
        ["No emergency", "Market is stable enough for normal negotiation."],
        ["Backup route", "Keep Kolar and Tumakuru as alternate markets."],
        ["Buyer filter", "Avoid buyers asking for delayed payment."],
        ["Stock plan", "Store only if quality and moisture are safe."]
      ];
  if (!selectedRescue) selectedRescue = options[0][0];
  document.getElementById("marketRescue").innerHTML = options.map(([title, body]) => `
    <button type="button" class="rescue-card ${selectedRescue === title ? "selected" : ""}" data-rescue="${title}">
      <strong>${title}</strong><p>${body}</p>
      <small>${selectedRescue === title ? "Active rescue plan" : "Tap to activate"}</small>
    </button>
  `).join("");
}

function renderSmartStorageRecommendation(inputs, prediction) {
  const crop = inputs.crop;
  const later = predictedPrice(crop, Math.min(90, inputs.storageDays + 2));
  const qualityDays = Math.max(0, cropData[crop].shelf - inputs.storageDays);
  const suggested = crop === "tomato" && qualityDays <= 2 ? "refrigerate" : later > prediction * 1.05 ? "store" : crop === "tomato" ? "sell" : "process";
  const active = selectedStorage || suggested;
  const options = [
    ["sell", t("sellNow"), inputs.offer >= prediction ? "Offer is strong enough." : "Use only for urgent cash need."],
    ["store", t("store"), `Expected future price: ${currency(later)}.`],
    ["refrigerate", t("refrigerate"), `${cropName(crop)} quality safe for ${qualityDays} more days.`],
    ["process", t("process"), "Reduce loss risk if buyer price stays weak."]
  ];
  document.getElementById("smartStorageBadge").textContent = active === "sell" ? "Sell" : active === "store" ? "Store" : active === "refrigerate" ? "Cold" : "Process";
  document.getElementById("smartStorageRecommendation").innerHTML = options.map(([key, title, body]) => `
    <button type="button" class="storage-option ${key === active ? "active" : ""}" data-storage-option="${key}">
      <strong>${title}</strong>
      <span>${body}</span>
    </button>
  `).join("");
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  populateCropSelects();
}

function analyze(tone = lastTone) {
  lastTone = tone;
  applyLanguage();
  const inputs = getInputs();
  const data = cropData[inputs.crop];
  const prediction = predictedPrice(inputs.crop, inputs.storageDays);
  const grossRevenue = inputs.offer * inputs.quantity;
  const predictedRevenue = prediction * inputs.quantity;
  const profit = grossRevenue - inputs.transport - inputs.cost;
  const predictedProfit = predictedRevenue - inputs.transport - inputs.cost;
  const storageCost = inputs.quantity * inputs.storageDays * 9;
  const storedRevenue = predictedRevenue - storageCost;
  const trust = trustScore(inputs.crop, inputs.offer, prediction);
  const risk = scamRisk(inputs.crop, inputs.offer, prediction, trust);
  const marketGap = inputs.offer - prediction;

  storageReadout.textContent = inputs.storageDays;
  document.getElementById("predictedPrice").textContent = currency(prediction);
  document.getElementById("priceSignal").textContent = marketGap >= 0 ? `Offer is ${currency(marketGap)} above prediction` : `Offer is ${currency(Math.abs(marketGap))} below prediction`;
  document.getElementById("profitValue").textContent = currency(profit);
  document.getElementById("profitValue").className = profit >= 0 ? "positive" : "negative";
  document.getElementById("profitSignal").textContent = profit >= 0 ? "Deal is profitable now" : "Negotiate or reduce costs";
  document.getElementById("trustScore").textContent = `${trust}%`;
  document.getElementById("trustSignal").textContent = `${gradeTrust(trust)} grade buyer`;
  document.getElementById("riskScore").textContent = `${risk}%`;
  document.getElementById("riskSignal").textContent = `${riskLabel(risk)} scam risk`;
  document.getElementById("visualPrice").textContent = currency(prediction);
  document.getElementById("visualTrust").textContent = `${trust}%`;

  syncAdvancedControls(inputs, prediction);
  renderMarketShockAlerts(inputs, prediction);
  renderSellingHeatmap(inputs, prediction);
  renderSmartSellingTimer(inputs, prediction);
  renderEmergencyRescue(inputs, prediction);
  renderSmartStorageRecommendation(inputs, prediction);
  renderForecastPro(inputs);
  renderDirectSellingMode(inputs, prediction);
  renderSmartBuyerMarketplace(inputs, prediction);
  renderNegotiationLab();
  renderSmartTrust(inputs);
  renderDemandHeatmap(inputs);
  translateRenderedPage();
}

function voiceSettings() {
  const mode = voiceModeInput.value;
  const settings = {
    calm: { pitch: 1, rate: Number(voiceRateInput.value) },
    strong: { pitch: 0.82, rate: Number(voiceRateInput.value) * 0.95 },
    fast: { pitch: 1.18, rate: Number(voiceRateInput.value) * 1.18 },
    low: { pitch: 0.62, rate: Number(voiceRateInput.value) * 0.86 }
  };
  return settings[mode] || settings.calm;
}

function speakDeal() {
  const text = document.querySelector("#negotiationChat .nego-bubble.ai")?.textContent || "";
  if (!window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const settings = voiceSettings();
  utterance.lang = voiceLang[languageInput.value] || "en-IN";
  const selectedVoice = voiceForSelectedLanguage();
  if (selectedVoice) utterance.voice = selectedVoice;
  utterance.pitch = settings.pitch;
  utterance.rate = settings.rate;
  window.speechSynthesis.speak(utterance);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  analyze();
});

[languageInput, cropInput, quantityInput, quantityUnitInput, offerInput, transportInput, costInput, storageDaysInput, voiceModeInput, voiceRateInput].forEach((input) => {
  input.addEventListener("input", () => analyze());
});

[forecastCropInput, forecastMandiInput, forecastSeasonInput, forecastPeriodInput].forEach((input) => {
  input.addEventListener("input", () => {
    if (input === forecastCropInput) cropInput.value = forecastCropInput.value;
    renderForecastPro(getInputs());
    renderDemandHeatmap(getInputs());
  });
});

[dealCropInput, dealQuantityInput, dealQuantityUnitInput, dealMinPriceInput, dealOfferInput].forEach((input) => {
  input.addEventListener("input", resetNegotiationLab);
});

document.getElementById("feedbackList").addEventListener("click", (event) => {
  const item = event.target.closest("[data-feedback-action]");
  if (!item) return;
  const action = item.dataset.feedbackAction;
  const prompts = {
    price: "Can you improve the price to match the current safe market floor?",
    advance: "I need advance payment or same-day transfer proof before loading.",
    payment: "Please confirm advance payment, payment mode, and transfer time.",
    confirm: "Please confirm pickup location, weighing slip, payment time, and final quantity in writing.",
    final: "Please send your final written offer with price, payment, weighing, and pickup details."
  };
  chatSpeakerInput.value = "farmer";
  addNegotiationMessage("farmer", prompts[action] || prompts.confirm);
});

document.querySelectorAll("[data-tone]").forEach((button) => {
  button.addEventListener("click", () => analyze(button.dataset.tone));
});

document.getElementById("marketShockAlerts").addEventListener("click", (event) => {
  const card = event.target.closest("[data-shock]");
  if (!card) return;
  selectedShock = card.dataset.shock;
  if (selectedShock === "Supply") offerInput.value = Math.max(1, Math.round(predictedPrice(cropInput.value, Number(storageDaysInput.value)) * 0.96));
  if (selectedShock === "Crash risk") storageDaysInput.value = Math.min(Number(storageDaysInput.value) + 1, 90);
  analyze();
});

document.getElementById("smartSellingTimer").addEventListener("click", (event) => {
  const day = event.target.closest("[data-calendar-day]");
  if (day) {
    selectedCalendarOffset = Number(day.dataset.calendarDay);
    storageDaysInput.value = Math.min(Number(storageDaysInput.value) + selectedCalendarOffset, 90);
    selectedTimerMode = selectedCalendarOffset > 1 ? "hold" : "best";
    analyze();
    return;
  }
  const button = event.target.closest("[data-timer]");
  if (!button) return;
  selectedTimerMode = button.dataset.timer;
  selectedCalendarOffset = selectedTimerMode === "hold" ? 2 : selectedTimerMode === "fast" ? 0 : 1;
  if (selectedTimerMode === "fast") storageDaysInput.value = 0;
  if (selectedTimerMode === "hold") storageDaysInput.value = Math.min(Number(storageDaysInput.value) + 2, 90);
  analyze();
});

document.getElementById("marketRescue").addEventListener("click", (event) => {
  const card = event.target.closest("[data-rescue]");
  if (!card) return;
  selectedRescue = card.dataset.rescue;
  if (selectedRescue.includes("Cold")) selectedStorage = "refrigerate";
  if (selectedRescue.includes("Delayed") || selectedRescue.includes("Stock")) selectedStorage = "store";
  if (selectedRescue.includes("Alternative") || selectedRescue.includes("Backup")) selectedTimerMode = "fast";
  analyze();
});

document.getElementById("smartStorageRecommendation").addEventListener("click", (event) => {
  const option = event.target.closest("[data-storage-option]");
  if (!option) return;
  selectedStorage = option.dataset.storageOption;
  if (selectedStorage === "sell") storageDaysInput.value = 0;
  if (selectedStorage === "store") storageDaysInput.value = Math.min(Number(storageDaysInput.value) + 7, 90);
  if (selectedStorage === "refrigerate") storageDaysInput.value = Math.min(Number(storageDaysInput.value) + 2, 90);
  if (selectedStorage === "process") storageDaysInput.value = Math.min(Number(storageDaysInput.value) + 14, 90);
  analyze();
});

document.getElementById("directChannelTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-direct-channel]");
  if (!button) return;
  selectedDirectChannel = button.dataset.directChannel;
  analyze();
});

document.getElementById("urgentSellBtn").addEventListener("click", () => {
  urgentSellMode = !urgentSellMode;
  if (urgentSellMode) buyerAlertSent = true;
  document.getElementById("urgentSellBtn").textContent = urgentSellMode ? "Urgent Sale On" : "Urgent Sale";
  marketChatMessages = urgentSellMode
    ? [
        { role: "farmer", text: "Farmer: Urgent sale mode is ON. Please alert nearby instant buyers." },
        { role: "ai", text: "AI: 12 buyers notified nearby. Fast pickup vendors are now ranked first." }
      ]
    : [];
  analyze();
});

document.getElementById("createSmartListing").addEventListener("click", () => {
  syncListingToMainForm();
  buyerAlertSent = true;
  marketChatMessages = [
    { role: "farmer", text: `Farmer: Listing created for ${quantityInput.value} ${quantityUnitInput.value === "kg" ? "kg" : "quintals"} of ${cropName(cropInput.value)}.` },
    { role: "ai", text: "AI: Suggested price, freshness score, demand level, and nearby buyer matches are ready." }
  ];
  analyze();
});

document.getElementById("notifyBuyersBtn").addEventListener("click", () => {
  syncListingToMainForm();
  buyerAlertSent = true;
  const quantityKg = Number(listingQuantityInput.value) || 500;
  marketChatMessages = [
    { role: "farmer", text: `Farmer: Notify nearby buyers for ${quantityKg} kg of ${cropName(cropInput.value)}.` },
    { role: "ai", text: "AI: Buyer alerts sent to nearby hotels, vendors, restaurants, wholesalers, and market buyers." },
    { role: "buyer", text: "FreshMart: Listing received. Please confirm pickup location and final price." }
  ];
  analyze();
});

document.getElementById("voiceListingBtn").addEventListener("click", () => {
  listingCropInput.value = "tomato";
  listingQuantityInput.value = 500;
  listingExpectedPriceInput.value = 24;
  document.getElementById("listingHarvest").value = "0";
  syncListingToMainForm();
  buyerAlertSent = true;
  marketChatMessages = [
    { role: "farmer", text: "Farmer voice: Selling 500kg tomatoes. 500 ಕೆಜಿ ಟೊಮ್ಯಾಟೊ ಮಾರಾಟಕ್ಕೆ ಇದೆ." },
    { role: "ai", text: "AI: Listing created. Suggested price is around ₹23-₹25/kg and nearby buyers are matched." }
  ];
  analyze();
});

document.getElementById("listingImage").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const preview = document.getElementById("listingImagePreview");
  const reader = new FileReader();
  reader.onload = () => {
    preview.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.38)), url("${reader.result}")`;
    preview.classList.add("has-image");
    preview.innerHTML = "<strong>Image uploaded</strong><span>AI quality scan ready</span>";
  };
  reader.readAsDataURL(file);
});

[listingCropInput, listingQuantityInput, listingExpectedPriceInput, document.getElementById("listingLocation"), document.getElementById("listingHarvest")].forEach((input) => {
  input.addEventListener("input", () => {
    syncListingToMainForm();
    buyerAlertSent = false;
    marketChatMessages = [];
    analyze();
  });
});

document.getElementById("pickupSlot").addEventListener("input", (event) => {
  document.getElementById("pickupArrival").textContent = `Pickup arriving in ${event.target.value} minutes`;
  marketChatMessages.push({ role: "ai", text: `AI: Pickup slot scheduled. Vehicle arriving in ${event.target.value} minutes.` });
  analyze();
});

document.getElementById("sendCounterOffer").addEventListener("click", () => {
  const inputs = getInputs();
  const prediction = predictedPrice(inputs.crop, inputs.storageDays);
  const counterKg = Math.round(pricePerKg(prediction * 1.04));
  marketChatMessages.push({ role: "farmer", text: `Farmer: I can offer at ${currency(counterKg)}/kg if pickup and payment are confirmed.` });
  marketChatMessages.push({ role: "ai", text: "AI: Counter offer sent. This protects price while keeping the buyer engaged." });
  chatSpeakerInput.value = "farmer";
  addNegotiationMessage("farmer", `I can offer at ${currency(counterKg)}/kg if pickup and payment are confirmed.`);
  analyze();
});

document.getElementById("liveMarketDemandFeed").addEventListener("click", (event) => {
  const demandButton = event.target.closest("[data-demand-crop]");
  if (!demandButton) return;
  cropInput.value = demandButton.dataset.demandCrop;
  forecastCropInput.value = demandButton.dataset.demandCrop;
  dealCropInput.value = demandButton.dataset.demandCrop;
  selectedMarketBuyer = "";
  marketChatMessages = [];
  analyze();
});

document.getElementById("buyerSortTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-buyer-sort]");
  if (!button) return;
  buyerSortMode = button.dataset.buyerSort;
  selectedMarketBuyer = "";
  marketChatMessages = [];
  analyze();
});

document.getElementById("buyerMatchGrid").addEventListener("click", (event) => {
  const buyerCard = event.target.closest("[data-market-buyer-card]");
  const buyButton = event.target.closest("[data-market-buy]");
  const negotiateButton = event.target.closest("[data-market-negotiate]");
  if (buyerCard) selectedMarketBuyer = buyerCard.dataset.marketBuyerCard;
  if (!buyButton && !negotiateButton) {
    marketChatMessages = [];
    analyze();
    return;
  }

  const inputs = getInputs();
  const prediction = predictedPrice(inputs.crop, inputs.storageDays);
  const rows = buyerMatchRows(inputs, prediction);
  const buyerName = buyButton?.dataset.marketBuy || negotiateButton?.dataset.marketNegotiate;
  const buyer = rows.find((item) => item.name === buyerName) || rows[0];
  selectedMarketBuyer = buyer.name;
  const quantityKg = Math.round(inputs.quantity * 100);
  marketChatMessages = buyButton
    ? [
        { role: "farmer", text: `Farmer: I choose to sell ${quantityKg} kg to ${buyer.name} at ${currencyPerKg(buyer.offer)}.` },
        { role: "ai", text: `AI: Good sale match. Confirm ${buyer.deliveryMinutes} min pickup, ${currency(buyer.transportCost)} transport, and ${buyer.payHours}h payment before dispatch.` },
        { role: "buyer", text: `${buyer.name}: Please share pickup time and final invoice details.` }
      ]
    : [
        { role: "farmer", text: `Farmer: I want to counter ${buyer.name}'s offer for ${quantityKg} kg.` },
        { role: "ai", text: `AI: Counter near ${currencyPerKg(prediction * 1.04)}. Current buyer trust is ${buyer.trust}% and distance is ${buyer.distance.toFixed(1)} km.` },
        { role: "farmer", text: `Farmer: I can sell if you match fair market price and confirm fast pickup.` }
      ];
  dealCropInput.value = inputs.crop;
  dealQuantityInput.value = Math.round(inputs.quantity * 100);
  dealQuantityUnitInput.value = "kg";
  dealOfferInput.value = buyer.offer;
  dealMinPriceInput.value = Math.round(prediction * 0.96);
  negotiationMessages = [
    { role: "farmer", text: `Farmer: I am ready to ${buyButton ? "sell now" : "counter offer"} with ${buyer.name} at ${currencyPerKg(buyer.offer)} for ${Math.round(inputs.quantity * 100)} kg of ${cropName(inputs.crop)}.` },
    { role: "ai", text: `AI reply: ${buyer.score}/100 sale match. Fair price range is ${currencyPerKg(prediction * 0.96)}-${currencyPerKg(prediction * 1.06)}. Confirm pickup in ${buyer.deliveryMinutes} minutes, transport ${currency(buyer.transportCost)}, and payment within ${buyer.payHours} hours.` }
  ];
  renderNegotiationChat();
  renderFeedbackAnalysis();
  renderAutoReport();
});

document.getElementById("marketBuyNow").addEventListener("click", () => {
  const firstBuy = document.querySelector("[data-market-buy]");
  if (firstBuy) firstBuy.click();
});

document.getElementById("marketNegotiate").addEventListener("click", () => {
  const firstNegotiate = document.querySelector("[data-market-negotiate]");
  if (firstNegotiate) firstNegotiate.click();
});

document.getElementById("startNegotiation").addEventListener("click", () => {
  const quantity = dealQuantityInfo();
  cropInput.value = dealCropInput.value;
  quantityInput.value = Math.max(1, quantity.quintals);
  quantityUnitInput.value = "qtl";
  offerInput.value = dealOfferInput.value;
  negotiationMessages = [];
  analyze("firm");
  renderNegotiationLab();
});

document.getElementById("sendChatMessage").addEventListener("click", () => {
  addNegotiationMessage(chatSpeakerInput.value, chatMessageInput.value);
  chatMessageInput.value = "";
});

chatMessageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addNegotiationMessage(chatSpeakerInput.value, chatMessageInput.value);
    chatMessageInput.value = "";
  }
});

document.querySelectorAll("[data-reply]").forEach((button) => {
  button.addEventListener("click", () => {
    chatSpeakerInput.value = "farmer";
    addNegotiationMessage("farmer", button.dataset.reply);
  });
});

document.getElementById("chatMic").addEventListener("click", () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    chatMessageInput.placeholder = "Microphone is not available in this browser";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = voiceLang[languageInput.value] || "en-IN";
  recognition.interimResults = false;
  recognition.start();
  chatMessageInput.placeholder = "Listening...";

  recognition.onresult = (event) => {
    chatMessageInput.value = event.results[0][0].transcript;
    chatMessageInput.placeholder = "Type a reply, counter offer, or buyer message";
  };

  recognition.onerror = () => {
    chatMessageInput.placeholder = "Mic permission failed. Try again.";
  };
});

document.getElementById("copyReport").addEventListener("click", async () => {
  await navigator.clipboard.writeText(reportText());
  document.getElementById("copyReport").textContent = "Copied";
  setTimeout(() => {
    document.getElementById("copyReport").textContent = "Copy Report";
  }, 1200);
});

document.getElementById("downloadReport").addEventListener("click", () => {
  const blob = new Blob([reportText()], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "agrideal-negotiation-report.txt";
  link.click();
  URL.revokeObjectURL(link.href);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  languageInput.value = "en";
  cropInput.value = "wheat";
  quantityInput.value = 40;
  quantityUnitInput.value = "qtl";
  offerInput.value = 2200;
  transportInput.value = 3000;
  costInput.value = 68000;
  storageDaysInput.value = 25;
  voiceModeInput.value = "calm";
  voiceRateInput.value = 0.95;
  dealQuantityUnitInput.value = "qtl";
  selectedShock = "Weather";
  selectedTimerMode = "best";
  selectedCalendarOffset = 1;
  selectedRescue = "";
  selectedStorage = "";
  selectedDirectChannel = "homes";
  negotiationMessages = [];
  analyze();
});

document.getElementById("speakPitch").addEventListener("click", speakDeal);

document.getElementById("voiceBtn").addEventListener("click", () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const status = document.getElementById("voiceStatus");
  if (!SpeechRecognition) {
    status.textContent = t("noVoice");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = voiceLang[languageInput.value] || "en-IN";
  recognition.interimResults = false;
  recognition.start();
  status.textContent = t("listen");

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    status.textContent = `${t("heard")}: ${transcript}`;
    Object.entries(cropAliases).forEach(([crop, aliases]) => {
      if (aliases.some((alias) => transcript.includes(alias.toLowerCase()))) cropInput.value = crop;
    });

    const numbers = transcript.match(/\d+/g)?.map(Number) || [];
    if (numbers[0]) quantityInput.value = numbers[0];
    if (numbers[1]) offerInput.value = numbers[1];
    analyze();
  };

  recognition.onerror = () => {
    status.textContent = t("noSpeech");
  };
});

analyze();

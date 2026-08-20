// ============================================================
// MAURITIUS LEARNING HUB DATA
// ============================================================
const mauritiusQuestions = [
    // ========================================================
    // LEVEL 1: EASY (Basic Facts, Geography & Culture) - 30 Qs
    // ========================================================
    { level: 1, q: "What is the capital city of Mauritius?", options: ["Curepipe", "Port Louis", "Grand Baie", "Rose Hill"], a: 1, icon: "🏙️" },
    { level: 1, q: "Which famous extinct flightless bird was endemic to Mauritius?", options: ["Kiwi", "Dodo", "Moa", "Penguin"], a: 1, icon: "🦤" },
    { level: 1, q: "What are the four colors of the Mauritian national flag?", options: ["Red, Blue, Yellow, Green", "Green, White, Red, Blue", "Red, White, Blue, Yellow", "Yellow, Black, Red, Green"], a: 0, icon: "🇲🇺" },
    { level: 1, q: "In which ocean is Mauritius located?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"], a: 2, icon: "🌊" },
    { level: 1, q: "In what year did Mauritius gain its independence?", options: ["1968", "1950", "1982", "1992"], a: 0, icon: "🎉" },
    { level: 1, q: "What is the official currency used in Mauritius?", options: ["Euro", "Dollar", "Mauritian Rupee", "Franc"], a: 2, icon: "🪙" },
    { level: 1, q: "Which traditional music and dance form originated in Mauritius?", options: ["Sega", "Reggae", "Salsa", "Samba"], a: 0, icon: "💃" },
    { level: 1, q: "Which island dependency lies roughly 560 km east of main Mauritius?", options: ["Réunion", "Rodrigues", "Madagascar", "Seychelles"], a: 1, icon: "🏝️" },
    { level: 1, q: "Which famous natural site features multi-colored volcanic earth?", options: ["Black River Gorges", "Chamarel Seven Coloured Earth", "Trou aux Cerfs", "Le Morne"], a: 1, icon: "🌈" },
    { level: 1, q: "Which crop historically dominated agriculture across Mauritius?", options: ["Rice", "Sugarcane", "Wheat", "Cotton"], a: 1, icon: "🌾" },
    { level: 1, q: "Which animal is depicted on the left side of the Mauritian Coat of Arms?", options: ["Lion", "Dodo", "Tiger", "Deer"], a: 1, icon: "🛡️" },
    { level: 1, q: "Which animal is depicted on the right side of the Mauritian Coat of Arms?", options: ["Sambar Deer", "Leopard", "Horse", "Dolphin"], a: 0, icon: "🦌" },
    { level: 1, q: "What primary language is most widely spoken in daily conversation across Mauritius?", options: ["English", "French", "Mauritian Creole", "Hindi"], a: 2, icon: "🗣️" },
    { level: 1, q: "What major international airport serves Mauritius?", options: ["Sir Seewoosagur Ramgoolam International Airport", "Roland Garros Airport", "Ivato Airport", "Plaisance International Airport"], a: 0, icon: "✈️" },
    { level: 1, q: "What is the national flower of Mauritius?", options: ["Trochetia boutoniana", "Hibiscus", "Lotus", "Orchid"], a: 0, icon: "🌺" },
    { level: 1, q: "Which month is Mauritian Independence Day celebrated every year?", options: ["January 1", "March 12", "July 14", "December 25"], a: 1, icon: "📅" },
    { level: 1, q: "What mountain shape resembles a head looking at the sky near Port Louis?", options: ["Le Pouce", "Pieter Both", "Corps de Garde", "Le Morne"], a: 0, icon: "🖐️" },
    { level: 1, q: "Which popular beach destination in the north is known for aquatic activities?", options: ["Grand Baie", "Curepipe", "Vacoas", "Moka"], a: 0, icon: "🏖️" },
    { level: 1, q: "What island off the east coast is famous for turquoise waters and water sports?", options: ["Île aux Cerfs", "Île aux Aigrettes", "Flat Island", "Coin de Mire"], a: 0, icon: "⛵" },
    { level: 1, q: "Which nature reserve island is protected by the Mauritian Wildlife Foundation?", options: ["Île aux Aigrettes", "Île aux Cerfs", "Round Island", "Gunner's Quoin"], a: 0, icon: "🐢" },
    { level: 1, q: "What type of climate does Mauritius experience?", options: ["Tropical", "Arctic", "Desert", "Mediterranean"], a: 0, icon: "☀️" },
    { level: 1, q: "What major body of water surrounds the island's coastline?", options: ["Barrier Reef Lagoon", "Fjord System", "Bay of Bengal", "Red Sea"], a: 0, icon: "🐠" },
    { level: 1, q: "Which street food snack consists of fried split-pea cakes?", options: ["Dholl Puri", "Gâteau Piment", "Samoussa", "Mine Frit"], a: 1, icon: "🧆" },
    { level: 1, q: "What flatbread filled with yellow split peas is widely considered the national street food?", options: ["Roti", "Dholl Puri", "Naan", "Farata"], a: 1, icon: "🌯" },
    { level: 1, q: "In which hemisphere is Mauritius located?", options: ["Northern Hemisphere", "Southern Hemisphere", "Western Hemisphere only", "North Pole"], a: 1, icon: "🌐" },
    { level: 1, q: "What is the tallest mountain peak in Mauritius?", options: ["Piton de la Petite Rivière Noire", "Pieter Both", "Le Pouce", "Le Morne"], a: 0, icon: "🏔️" },
    { level: 1, q: "Which public holiday celebrates the arrival of indentured laborers in Mauritius?", options: ["Aapravasi Ghat Day (Nov 2)", "Labor Day", "Republic Day", "Emancipation Day"], a: 0, icon: "⚓" },
    { level: 1, q: "Which religious festival of lights is widely celebrated across the island?", options: ["Diwali", "Eid", "Cavadee", "Maha Shivaratri"], a: 0, icon: "🪔" },
    { level: 1, q: "What sacred lake in Grand Bassin is dedicated to Lord Shiva?", options: ["Ganga Talao", "Trou aux Cerfs", "Mare aux Vacoas", "Bassin Blanc"], a: 0, icon: "🕉️" },
    { level: 1, q: "What is the driving side of the road in Mauritius?", options: ["Left side", "Right side", "Center", "Either side"], a: 0, icon: "🚗" },

    // ========================================================
    // LEVEL 2: MEDIUM (Colonial Eras, Leaders & Culture) - 30 Qs
    // ========================================================
    { level: 2, q: "Which European power was the first to establish a permanent settlement in 1598?", options: ["French", "British", "Dutch", "Portuguese"], a: 2, icon: "⛵" },
    { level: 2, q: "Which French Governor developed Port Louis into a major naval port?", options: ["Mahé de La Bourdonnais", "Charles Decaen", "Pierre Poivre", "Robert Farquhar"], a: 0, icon: "🏛️" },
    { level: 2, q: "Who is revered as the 'Father of the Nation' in Mauritius?", options: ["Sir Gaëtan Duval", "Sir Seewoosagur Ramgoolam", "Aapravasi Ghat", "Emmanuel Anquetil"], a: 1, icon: "👑" },
    { level: 2, q: "In which year did Mauritius officially transition into a Republic?", options: ["1968", "1975", "1992", "2000"], a: 2, icon: "📜" },
    { level: 2, q: "What historic site marks the landing point of Indian indentured laborers?", options: ["Le Morne Brabant", "Aapravasi Ghat", "Eureka House", "Château de Labourdonnais"], a: 1, icon: "🧱" },
    { level: 2, q: "What name was given to Mauritius during French colonial administration?", options: ["Isle de France", "Île Bourbon", "Dina Arobi", "New Holland"], a: 0, icon: "🇫🇷" },
    { level: 2, q: "Who served as the first British Governor of Mauritius starting in 1810?", options: ["Sir Robert Farquhar", "Sir John Shaw", "Lord William Bentinck", "Sir Colville Barclay"], a: 0, icon: "🎩" },
    { level: 2, q: "Which dormant volcanic crater is located in the town of Curepipe?", options: ["Le Pouce", "Trou aux Cerfs", "Pieter Both", "Mont Piton"], a: 1, icon: "🌋" },
    { level: 2, q: "Who became the first female President of Mauritius in 2015?", options: ["Monique Ohsan Bellepeau", "Ameenah Gurib-Fakim", "Navin Ramgoolam", "Maya Hanoomanjee"], a: 1, icon: "👩‍💼" },
    { level: 2, q: "Which mountain is famous for the large rock balanced precariously on its summit?", options: ["Le Morne Brabant", "Pieter Both", "Corps de Garde", "Moka Range"], a: 1, icon: "🏔️" },
    { level: 2, q: "In what year did the Dutch permanently abandon Mauritius?", options: ["1710", "1658", "1750", "1810"], a: 0, icon: "🏚️" },
    { level: 2, q: "Which French Governor established the famous Pamplemousses Botanical Garden?", options: ["Mahé de La Bourdonnais", "Pierre Poivre", "Charles Decaen", "Pierre Félix Bart"], a: 1, icon: "🌱" },
    { level: 2, q: "What giant water lily species is famous at the Sir Seewoosagur Ramgoolam Botanical Garden?", options: ["Victoria amazonica", "Lotus flower", "Water Hyacinth", "Nymphaea caerulea"], a: 0, icon: "🪷" },
    { level: 2, q: "What historic event occurred on February 1, 1835 in Mauritius?", options: ["Abolition of Slavery", "Arrival of First Dutch Ship", "Independence Proclamation", "Battle of Grand Port"], a: 0, icon: "🕊️" },
    { level: 2, q: "Which political leader led the Movement Républicain and served as Prime Minister from 2000-2003?", options: ["Sir Anerood Jugnauth", "Paul Bérenger", "Navin Ramgoolam", "Pravind Jugnauth"], a: 0, icon: "👔" },
    { level: 2, q: "Who was the only non-Hindu Prime Minister of Mauritius (serving 2003-2005)?", options: ["Sir Gaëtan Duval", "Paul Bérenger", "Xavier-Luc Duval", "Maurice Curé"], a: 1, icon: "🏛️" },
    { level: 2, q: "Which historic building in Port Louis serves as the official seat of Parliament?", options: ["Government House", "The Citadel", "State House", "Plaza Theatre"], a: 0, icon: "🏛️" },
    { level: 2, q: "What military fort built by the British overlooks the harbor of Port Louis?", options: ["Fort Adelaide (The Citadel)", "Fort Victoria", "Fort George", "Fort William"], a: 0, icon: "🏰" },
    { level: 2, q: "Which primary trade agreement boosted the Mauritian textile industry in the late 20th century?", options: ["Lomé Convention", "NAFTA", "ASEAN", "MERCOSUR"], a: 0, icon: "🏭" },
    { level: 2, q: "What is the largest natural reservoir in Mauritius?", options: ["Mare aux Vacoas", "La Nicolière", "Piton du Milieu", "Ferme Reservoir"], a: 0, icon: "💧" },
    { level: 2, q: "Which outer island territory of Mauritius was detached by the UK in 1965 prior to independence?", options: ["Chagos Archipelago", "Rodrigues", "Agaléga", "Tromelin"], a: 0, icon: "🗺️" },
    { level: 2, q: "What twin islands form a small dependency of Mauritius about 1,000 km north of Port Louis?", options: ["Agaléga", "Chagos", "Cargados Carajos", "Rodrigues"], a: 0, icon: "🏝️" },
    { level: 2, q: "What archipelago of low-lying shoals and islets is managed by Mauritius for fishing?", options: ["St. Brandon (Cargados Carajos)", "Aldabra", "Farquhar", "Amirante"], a: 0, icon: "🐟" },
    { level: 2, q: "Which famous French author wrote 'Paul et Virginie', setting it in Mauritius?", options: ["Jacques-Henri Bernardin de Saint-Pierre", "Victor Hugo", "Alexandre Dumas", "Gustave Flaubert"], a: 0, icon: "📚" },
    { level: 2, q: "Which color on the Mauritian flag represents the struggle for freedom and independence?", options: ["Red", "Blue", "Yellow", "Green"], a: 0, icon: "🔴" },
    { level: 2, q: "Which color on the flag represents the Indian Ocean surrounding the island?", options: ["Red", "Blue", "Yellow", "Green"], a: 1, icon: "🔵" },
    { level: 2, q: "Which color on the flag represents the light of independence shining over the island?", options: ["Red", "Blue", "Yellow", "Green"], a: 2, icon: "🟡" },
    { level: 2, q: "Which color on the flag represents the agriculture and lush vegetation of Mauritius?", options: ["Red", "Blue", "Yellow", "Green"], a: 3, icon: "🟢" },
    { level: 2, q: "What trade system brought over 400,000 laborers from India between 1834 and 1920?", options: ["Indentured Labor System", "Slave Trade", "Free Migration", "Feudal System"], a: 0, icon: "⛓️" },
    { level: 2, q: "Which constitutional court in the UK remains the highest court of appeal for Mauritius?", options: ["Judicial Committee of the Privy Council", "Supreme Court of the UK", "European Court of Human Rights", "International Court of Justice"], a: 0, icon: "⚖️" },

    // ========================================================
    // LEVEL 3: HARD (Deep History, Battles & Rare Knowledge) - 30 Qs
    // ========================================================
    { level: 3, q: "In what year did the French victory occur at the naval Battle of Grand Port?", options: ["1810", "1795", "1835", "1868"], a: 0, icon: "⚔️" },
    { level: 3, q: "Which mountain was a sanctuary for runaway enslaved people known as maroons?", options: ["Trou aux Cerfs", "Le Morne Brabant", "Black River Peak", "Pieter Both"], a: 1, icon: "⛰️" },
    { level: 3, q: "Which French botanist successfully smuggled nutmeg and clove trees into Mauritius?", options: ["Pierre Poivre", "Bernardin de Saint-Pierre", "Louis Antoine de Bougainville", "Charles Telfair"], a: 0, icon: "🌿" },
    { level: 3, q: "Under British rule, in which year was slavery officially abolished in Mauritius?", options: ["1810", "1835", "1848", "1865"], a: 1, icon: "🕊️" },
    { level: 3, q: "What name was assigned to Mauritius by Arab navigators in the 10th century?", options: ["Isle de France", "Dina Arobi", "Cerne", "Cirne"], a: 1, icon: "🗺️" },
    { level: 3, q: "Which treaty formally ceded Mauritius to Great Britain in 1814?", options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Utrecht", "Treaty of Vienna"], a: 1, icon: "📜" },
    { level: 3, q: "After whom was Mauritius named by Dutch Commander Wybrand van Warwijck in 1598?", options: ["Prince Maurice of Nassau", "St. Maurice", "Emperor Maurice", "Maurice de Saxe"], a: 0, icon: "👑" },
    { level: 3, q: "In what year did the French ship 'Saint-Géran' shipwreck, inspiring the novel 'Paul et Virginie'?", options: ["1744", "1810", "1698", "1789"], a: 0, icon: "⚓" },
    { level: 3, q: "In what year did British forces land at Cap Malheureux to invade the island?", options: ["1810", "1805", "1815", "1799"], a: 0, icon: "🪖" },
    { level: 3, q: "What was the name of the French Governor who surrendered Mauritius to the British in 1810?", options: ["Charles Decaen", "Mahé de La Bourdonnais", "Pierre Poivre", "Isidore de Souillac"], a: 0, icon: "🏳️" },
    { level: 3, q: "Which Portuguese explorer first sighted the Mascarene islands around 1507-1513?", options: ["Pedro Mascarenhas", "Vasco da Gama", "Ferdinand Magellan", "Diogo Cão"], a: 0, icon: "🧭" },
    { level: 3, q: "What name did Portuguese sailors mark on maps for Mauritius prior to Dutch settlement?", options: ["Cirne", "Dina Arobi", "Ilha da Franca", "San Sebastiano"], a: 0, icon: "🗺️" },
    { level: 3, q: "Which treaty ending the Napoleonic Wars allowed French settlers to retain their language and laws in Mauritius?", options: ["Treaty of Paris (1814)", "Treaty of Amiens", "Congress of Vienna", "Treaty of Ghent"], a: 0, icon: "⚖️" },
    { level: 3, q: "In what year was the Mauritius Labour Party founded by Dr. Maurice Curé?", options: ["1936", "1948", "1922", "1958"], a: 0, icon: "🏛️" },
    { level: 3, q: "Who was the legendary Maroon leader associated with resistance at Le Morne?", options: ["King Zouline", "Madame Francoise", "Ratsitatane", "Barbe Blanche"], a: 0, icon: "🛡️" },
    { level: 3, q: "Which Malagasy prince was exiled to Mauritius and executed in 1822 after leading a revolt?", options: ["Ratsitatane", "Radama I", "Andrianampoinimerina", "Rainilaiarivony"], a: 0, icon: "👑" },
    { level: 3, q: "In what year were the Mauritius Penny Black and Penny Red stamps issued?", options: ["1847", "1840", "1855", "1862"], a: 0, icon: "📮" },
    { level: 3, q: "Which rare stamp wording error makes the 1847 Mauritius stamps world-famous?", options: ["'Post Office' instead of 'Post Paid'", "'Postage Free' instead of 'Post Office'", "'British Mauritius' instead of 'Mauritius'", "'Royal Mail' instead of 'Post Office'"], a: 0, icon: "✉️" },
    { level: 3, q: "Who was the British Governor's wife who hosted the ball requiring the famous 1847 stamps?", options: ["Lady Elizabeth Gomm", "Lady Farquhar", "Lady Barkly", "Lady Gordon"], a: 0, icon: "💃" },
    { level: 3, q: "Which epidemic devastated Port Louis in 1867, killing over 40,000 residents?", options: ["Malaria", "Cholera", "Bubonic Plague", "Yellow Fever"], a: 0, icon: "🦟" },
    { level: 3, q: "In what year did Mahatma Gandhi visit Mauritius, encouraging education and political engagement?", options: ["1901", "1915", "1893", "1925"], a: 0, icon: "👓" },
    { level: 3, q: "Who was the Indian lawyer sent by Mahatma Gandhi in 1907 to represent workers in Mauritius?", options: ["Manilal Doctor", "Gopal Krishna Gokhale", "B. R. Ambedkar", "Jawaharlal Nehru"], a: 0, icon: "⚖️" },
    { level: 3, q: "Which agreement signed in 1965 led to the detachment of the Chagos Archipelago?", options: ["Lancaster House Agreement", "Port Louis Accord", "London Pact", "Diego Garcia Treaty"], a: 0, icon: "📜" },
    { level: 3, q: "In what year did the U.N. International Court of Justice rule that the UK's detachment of Chagos was unlawful?", options: ["2019", "2010", "2005", "2022"], a: 0, icon: "🏛️" },
    { level: 3, q: "Which endemic reptile species was saved from extinction on Round Island?", options: ["Round Island Boa", "Komodo Dragon", "Aldabra Tortoise", "Chameleon"], a: 0, icon: "🐍" },
    { level: 3, q: "What rare endemic bird species was brought back from fewer than 10 individuals in the 1970s?", options: ["Mauritius Kestrel", "Pink Pigeon", "Echo Parakeet", "Dodo"], a: 0, icon: "🦅" },
    { level: 3, q: "Who was the famous biologist who led conservation efforts for the Mauritius Kestrel?", options: ["Carl Jones", "Gerald Durrell", "David Attenborough", "Jane Goodall"], a: 0, icon: "🌿" },
    { level: 3, q: "What is the name of the oldest racecourse in the Southern Hemisphere, located in Port Louis?", options: ["Champ de Mars", "Ascot", "Longchamp", "Flemington"], a: 0, icon: "🏇" },
    { level: 3, q: "In what year was the Champ de Mars racecourse founded in Port Louis?", options: ["1812", "1835", "1850", "1790"], a: 0, icon: "🏁" },
    { level: 3, q: "Which major constitutional reform introduced universal adult suffrage in Mauritius?", options: ["1948 Constitution", "1958 Constitution", "1968 Act", "1936 Reform"], a: 1, icon: "🗳️" }
];

// Import Firebase Firestore SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    doc, 
    setDoc, 
    getDoc, 
    deleteDoc, 
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ============================================================
// FIREBASE CONFIGURATION & INITIALIZATION
// ============================================================
const firebaseConfig = {
    apiKey: "AIzaSyDprgTd5C-H8vq18OHSCyCdgG08KLsEgDs",
    authDomain: "kidzoneapp-3a074.firebaseapp.com",
    projectId: "kidzoneapp-3a074",
    storageBucket: "kidzoneapp-3a074.firebasestorage.app",
    messagingSenderId: "235123295283",
    appId: "1:235123295283:web:86e89736f70cb6f9d94f46",
    measurementId: "G-Y8NGVL88QV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Helper function to shuffle questions
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Keep dynamic profiles cache in memory
let cachedKidProfiles = [];

// ============================================================
// AUDIO & SOUND EFFECTS ENGINE
// ============================================================
const AudioCtx = window.AudioContext || window.webkitAudioContext;
const audioCtx = AudioCtx ? new AudioCtx() : null;

function unlockAudio() {
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}
document.addEventListener('pointerdown', unlockAudio, { once: true });
document.addEventListener('keydown', unlockAudio, { once: true });

function playSound(freq, type = 'sine', duration = 0.15) {
    try {
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
        // Fallback for browser audio restrictions
    }
}

function playChime(notes, type = 'triangle') {
    notes.forEach((freq, index) => {
        setTimeout(() => playSound(freq, type, 0.3), index * 120);
    });
}

// ------------------------------------------------------------
// NARRATION ENGINE (Web Speech API)
//
// Chrome has several well-known bugs that make speech silently
// fail. This engine works around all of them:
//   1. Voices load asynchronously -> wait for 'voiceschanged'.
//   2. speak() needs a real user gesture -> prime on first tap.
//   3. cancel() immediately followed by speak() races and dies
//      -> always speak on the next tick.
//   4. Utterances longer than ~15s get cut off -> keep-alive
//      resume() ticker + split long text into sentences.
//   5. Remote "Google" voices can hang -> prefer local voices.
// ------------------------------------------------------------
const speechSupported = ('speechSynthesis' in window) && (typeof SpeechSynthesisUtterance !== 'undefined');
let speechEnabled = true;
let speechPrimed = false;
let cachedVoices = [];
let preferredVoice = null;
let speakTimer = null;
let keepAliveTimer = null;
let speechQueue = [];

function loadSpeechVoices() {
    if (!speechSupported) return;
    cachedVoices = window.speechSynthesis.getVoices() || [];
    if (!cachedVoices.length) return;

    // Prefer a local (offline) English voice: they are the most reliable.
    const en = cachedVoices.filter(v => /^en(-|_|$)/i.test(v.lang || ''));
    preferredVoice =
        en.find(v => v.localService && /female|zira|samantha|karen|susan/i.test(v.name)) ||
        en.find(v => v.localService) ||
        en[0] ||
        cachedVoices.find(v => v.localService) ||
        cachedVoices[0] ||
        null;
}

if (speechSupported) {
    loadSpeechVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadSpeechVoices);
    // Chrome can drop the engine when a tab is hidden.
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopSpeech();
    });
}

// Chrome refuses to speak until the user has interacted with the page.
// Fire a silent utterance on the very first gesture to open the gate.
function primeSpeech() {
    if (!speechSupported || speechPrimed) return;
    speechPrimed = true;
    try {
        window.speechSynthesis.cancel();
        const warmup = new SpeechSynthesisUtterance('hello');
        warmup.volume = 0;      // inaudible, just unlocks the API
        warmup.rate = 2;
        window.speechSynthesis.speak(warmup);
        loadSpeechVoices();
    } catch (e) {
        console.warn('[KidZone] speech priming failed:', e);
    }
}
document.addEventListener('pointerdown', primeSpeech);
document.addEventListener('keydown', primeSpeech);

function startKeepAlive() {
    stopKeepAlive();
    // Works around Chrome cutting speech off after ~15 seconds.
    keepAliveTimer = setInterval(() => {
        if (!window.speechSynthesis.speaking) { stopKeepAlive(); return; }
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
    }, 9000);
}

function stopKeepAlive() {
    if (keepAliveTimer) { clearInterval(keepAliveTimer); keepAliveTimer = null; }
}

function stopSpeech() {
    speechQueue = [];
    if (speakTimer) { clearTimeout(speakTimer); speakTimer = null; }
    stopKeepAlive();
    if (speechSupported) {
        try { window.speechSynthesis.cancel(); } catch (e) { /* ignore */ }
    }
}
window.stopSpeech = stopSpeech;

// Break long text into sentence-sized pieces Chrome can handle.
function splitForSpeech(text, maxLen = 180) {
    const sentences = String(text).match(/[^.!?]+[.!?]*/g) || [String(text)];
    const chunks = [];
    let buf = '';
    sentences.forEach(sentence => {
        const piece = sentence.trim();
        if (!piece) return;
        if ((buf + ' ' + piece).trim().length <= maxLen) {
            buf = (buf ? buf + ' ' : '') + piece;
        } else {
            if (buf) chunks.push(buf);
            buf = piece.length > maxLen ? piece.slice(0, maxLen) : piece;
        }
    });
    if (buf) chunks.push(buf);
    return chunks;
}

function speakChunk(lang) {
    if (!speechQueue.length) {
        stopKeepAlive();
        document.querySelectorAll('.book-text.reading').forEach(e => e.classList.remove('reading'));
        return;
    }
    const text = speechQueue.shift();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.pitch = 1.15;
    utterance.rate = 0.92;   // must stay <= 2 or Chrome jams
    utterance.volume = 1;

    // Only force a voice when it matches the requested language,
    // otherwise let the browser choose (needed for fr/es lessons).
    if (preferredVoice && (preferredVoice.lang || '').slice(0, 2) === lang.slice(0, 2)) {
        utterance.voice = preferredVoice;
    }

    utterance.onend = () => speakChunk(lang);
    utterance.onerror = (e) => {
        if (e && e.error && e.error !== 'interrupted' && e.error !== 'canceled') {
            console.warn('[KidZone] speech error:', e.error);
        }
        stopKeepAlive();
    };

    try {
        window.speechSynthesis.speak(utterance);
        startKeepAlive();
    } catch (e) {
        console.warn('[KidZone] speak() failed:', e);
    }
}

function speakText(customText = null, lang = 'en-US') {
    if (!speechSupported || !speechEnabled) return;

    // Only fall back to the storybook when called with NO argument.
    // speakText('') must stay silent rather than reading the story.
    const text = (customText === null || customText === undefined)
        ? (stories[currentStoryKey] ? stories[currentStoryKey].pages[currentStoryPage].text : '')
        : customText;
    if (!text || !String(text).trim()) return;   // empty string jams Chrome

    primeSpeech();
    stopSpeech();

    speechQueue = splitForSpeech(text);
    // Deferring past cancel() avoids Chrome's cancel/speak race.
    speakTimer = setTimeout(() => speakChunk(lang), 120);
}

// Narration on/off switch
function toggleNarration() {
    speechEnabled = !speechEnabled;
    if (!speechEnabled) stopSpeech();
    document.querySelectorAll('.narration-toggle').forEach(btn => {
        btn.innerHTML = speechEnabled ? '🔊 Voice On' : '🔇 Voice Off';
        btn.classList.toggle('muted', !speechEnabled);
    });
    if (!speechEnabled) {
        document.querySelectorAll('.book-text.reading').forEach(e => e.classList.remove('reading'));
        const auto = document.getElementById('autoReadToggle');
        if (auto && auto.checked) { auto.checked = false; autoReadStories = false; }
    }
    if (speechEnabled) {
        playSound(700);
        speakText('Voice is on!');
    } else {
        playSound(300, 'sawtooth');
    }
    showToast(speechEnabled ? 'Narration turned on' : 'Narration muted',
              speechEnabled ? '🔊' : '🔇', 2000);
}
window.toggleNarration = toggleNarration;

// Console helper: run speechDiagnostics() in DevTools if audio misbehaves.
function speechDiagnostics() {
    const v = speechSupported ? window.speechSynthesis.getVoices() : [];
    const info = {
        supported: speechSupported,
        enabled: speechEnabled,
        primed: speechPrimed,
        voicesFound: v.length,
        chosenVoice: preferredVoice ? `${preferredVoice.name} (${preferredVoice.lang})${preferredVoice.localService ? ' [local]' : ' [remote]'}` : 'none',
        speaking: speechSupported ? window.speechSynthesis.speaking : false,
        audioContext: audioCtx ? audioCtx.state : 'none'
    };
    console.table(info);
    if (!v.length) {
        console.warn('[KidZone] No voices installed. On Windows: Settings > Time & Language > Speech > Manage voices.');
    }
    return info;
}
window.speechDiagnostics = speechDiagnostics;

// Global window exposure for inline HTML handlers
window.playSound = playSound;
window.playChime = playChime;
window.speakText = speakText;

// ============================================================
// GLOBAL ACCESSIBILITY & TOASTS/CONFETTI
// ============================================================
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeBadgesModal();
        closeCreateAccountModal();
        closeAdminPortalModal();
    }
});

function showToast(message, icon = '🎉', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg">${message}</span>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, duration);
}

const CONFETTI_EMOJI = ['🎉', '⭐', '✨', '🎈', '🥳', '💥'];
function launchConfetti(count = 20) {
    const container = document.getElementById('confettiContainer');
    if (!container) {
        return;
    }

    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.innerText = CONFETTI_EMOJI[Math.floor(Math.random() * CONFETTI_EMOJI.length)];
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.fontSize = `${16 + Math.random() * 16}px`;
        piece.style.animationDuration = `${1.8 + Math.random() * 1.4}s`;
        piece.style.animationDelay = `${Math.random() * 0.4}s`;
        container.appendChild(piece);
        setTimeout(() => piece.remove(), 3800);
    }
}

// ============================================================
// AUTHENTICATION & PROFILE SYSTEM
// ============================================================
const ADMIN_EMAIL = "yaasin@gmail.com";
const ADMIN_PASS = "yaasin786";

let currentRole = null; // 'admin' or 'kid'
let currentActiveId = null;

function toggleLoginType(type) {
    playSound(400);
    const kidForm = document.getElementById('kidLoginForm');
    const adminForm = document.getElementById('adminLoginForm');
    const tabKid = document.getElementById('tabKidLogin');
    const tabAdmin = document.getElementById('tabAdminLogin');

    if (type === 'kid') {
        if (kidForm) kidForm.style.display = 'block';
        if (adminForm) adminForm.style.display = 'none';
        if (tabKid) tabKid.classList.add('active');
        if (tabAdmin) tabAdmin.classList.remove('active');
        populateKidSelect();
    } else {
        if (kidForm) kidForm.style.display = 'none';
        if (adminForm) adminForm.style.display = 'block';
        if (tabKid) tabKid.classList.remove('active');
        if (tabAdmin) tabAdmin.classList.add('active');
    }
}
window.toggleLoginType = toggleLoginType;

function checkLoginSession() {
    const isLoggedIn = sessionStorage.getItem('kidzone_logged_in');
    const role = sessionStorage.getItem('kidzone_user_role');
    const activeId = sessionStorage.getItem('kidzone_active_id');
    const loginOverlay = document.getElementById('loginScreen');

    if (isLoggedIn === 'true' && activeId) {
        currentRole = role;
        currentActiveId = activeId;
        if (loginOverlay) loginOverlay.classList.add('hidden');
        setupUIForSession();
        loadProgress();
    } else {
        if (loginOverlay) loginOverlay.classList.remove('hidden');
        populateKidSelect();
    }
}

function listenToKidProfiles() {
    onSnapshot(collection(db, "kidProfiles"), (snapshot) => {
        cachedKidProfiles = [];
        snapshot.forEach(docSnap => {
            cachedKidProfiles.push(docSnap.data());
        });
        populateKidSelect();
        setupUIForSession();
        const adminModal = document.getElementById('adminPortalModal');
        if (adminModal && adminModal.style.display === 'flex') {
            renderAdminPortalProfiles();
        }
    }, (error) => {
        console.error("Firestore sync error:", error);
    });
}

function populateKidSelect() {
    const selectElem = document.getElementById('loginKidSelect');
    if (!selectElem) return;
    selectElem.innerHTML = '<option value="" disabled selected>Choose your profile...</option>';

    cachedKidProfiles.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.innerText = `${p.avatar} ${p.name}`;
        selectElem.appendChild(opt);
    });
}

async function handleKidLogin(event) {
    if (event) event.preventDefault();
    const selectElem = document.getElementById('loginKidSelect');
    const pinElem = document.getElementById('loginKidPin');
    if (!selectElem || !pinElem) return;

    const kidId = selectElem.value;
    const pinInput = pinElem.value.trim();
    const errorMsg = document.getElementById('kidLoginErrorMsg');

    const kid = cachedKidProfiles.find(p => p.id === kidId);

    if (kid && kid.pin === pinInput) {
        sessionStorage.setItem('kidzone_logged_in', 'true');
        sessionStorage.setItem('kidzone_user_role', 'kid');
        sessionStorage.setItem('kidzone_active_id', kid.id);

        currentRole = 'kid';
        currentActiveId = kid.id;

        const loginTimeISO = new Date().toISOString();
        try {
            await setDoc(doc(db, "kidProfiles", kid.id), {
                lastLogin: loginTimeISO,
                loginCount: (kid.loginCount || 0) + 1
            }, { merge: true });
        } catch (e) {
            console.error("Failed to record login timestamp:", e);
        }

        if (errorMsg) errorMsg.style.display = "none";
        const loginOverlay = document.getElementById('loginScreen');
        if (loginOverlay) loginOverlay.classList.add('hidden');
        
        setupUIForSession();
        loadProgress();
        playChime([523, 659, 784, 1046]);
        launchConfetti(40);
        showToast(`Welcome back, ${kid.name}! 🚀`, '✨', 3500);
    } else {
        playSound(150, 'sawtooth', 0.3);
        if (errorMsg) {
            errorMsg.innerText = "❌ Incorrect Explorer or 4-digit PIN!";
            errorMsg.style.display = "block";
        }
    }
}
window.handleKidLogin = handleKidLogin;

function handleAdminLogin(event) {
    if (event) event.preventDefault();
    const emailElem = document.getElementById('adminEmail');
    const passElem = document.getElementById('adminPassword');
    if (!emailElem || !passElem) return;

    const email = emailElem.value.trim().toLowerCase();
    const password = passElem.value.trim();
    const errorMsg = document.getElementById('adminLoginErrorMsg');

    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
        sessionStorage.setItem('kidzone_logged_in', 'true');
        sessionStorage.setItem('kidzone_user_role', 'admin');
        sessionStorage.setItem('kidzone_active_id', 'admin_yaasin');

        currentRole = 'admin';
        currentActiveId = 'admin_yaasin';

        if (errorMsg) errorMsg.style.display = "none";
        const loginOverlay = document.getElementById('loginScreen');
        if (loginOverlay) loginOverlay.classList.add('hidden');

        setupUIForSession();
        loadProgress();
        playChime([523, 659, 784, 1046]);
        showToast(`Welcome Admin Yaasin! 🛠️`, '👑', 3500);
    } else {
        playSound(150, 'sawtooth', 0.3);
        if (errorMsg) {
            errorMsg.innerText = "❌ Invalid Admin Email or Password.";
            errorMsg.style.display = "block";
        }
    }
}
window.handleAdminLogin = handleAdminLogin;

function setupUIForSession() {
    const addKidBtn = document.getElementById('addKidBtn');
    const manageProfilesBtn = document.getElementById('manageProfilesBtn');
    const reportsBtn = document.getElementById('reportsBtn');
    const avatarElem = document.getElementById('activeAvatar');
    const nameElem = document.getElementById('activeName');

    if (currentRole === 'admin') {
        if (addKidBtn) addKidBtn.style.display = 'inline-block';
        if (manageProfilesBtn) manageProfilesBtn.style.display = 'inline-block';
        if (reportsBtn) reportsBtn.style.display = 'inline-block';
        if (avatarElem) avatarElem.innerText = '🛠️';
        if (nameElem) nameElem.innerText = 'Admin (Yaasin)';
    } else {
        if (addKidBtn) addKidBtn.style.display = 'none';
        if (manageProfilesBtn) manageProfilesBtn.style.display = 'none';
        if (reportsBtn) reportsBtn.style.display = 'none';
        const kid = cachedKidProfiles.find(p => p.id === currentActiveId);
        if (kid) {
            if (avatarElem) avatarElem.innerText = kid.avatar;
            if (nameElem) nameElem.innerText = kid.name;
        }
    }
}

function handleLogout() {
    playSound(300);
    sessionStorage.removeItem('kidzone_logged_in');
    sessionStorage.removeItem('kidzone_user_role');
    sessionStorage.removeItem('kidzone_active_id');
    
    currentRole = null;
    currentActiveId = null;

    const pinElem = document.getElementById('loginKidPin');
    const passElem = document.getElementById('adminPassword');
    if (pinElem) pinElem.value = '';
    if (passElem) passElem.value = '';
    
    const loginOverlay = document.getElementById('loginScreen');
    if (loginOverlay) loginOverlay.classList.remove('hidden');
    
    populateKidSelect();
    showToast('Logged out! Access locked. 👋', '🔒', 3000);
}
window.handleLogout = handleLogout;

// ============================================================
// ADMIN MODAL & PROFILE MANAGEMENT
// ============================================================
let selectedAvatar = '🚀';

function openCreateAccountModal() {
    if (currentRole !== 'admin') {
        showToast('Only Admin can create new kid profiles!', '⚠️', 3000);
        return;
    }
    playSound(600);
    const modal = document.getElementById('createAccountModal');
    if (modal) modal.style.display = 'flex';
}
window.openCreateAccountModal = openCreateAccountModal;

function closeCreateAccountModal() {
    playSound(300);
    const modal = document.getElementById('createAccountModal');
    if (modal) modal.style.display = 'none';
}
window.closeCreateAccountModal = closeCreateAccountModal;

function closeCreateModalOnBg(e) {
    if (e.target.id === 'createAccountModal') closeCreateAccountModal();
}
window.closeCreateModalOnBg = closeCreateModalOnBg;

function selectAvatar(avatarEmoji, btnElem) {
    playSound(400);
    selectedAvatar = avatarEmoji;
    document.querySelectorAll('.avatar-option').forEach(b => b.classList.remove('active'));
    if (btnElem) btnElem.classList.add('active');
}
window.selectAvatar = selectAvatar;

async function handleCreateKidAccount(event) {
    event.preventDefault();
    const nameInput = document.getElementById('newKidName');
    const pinInput = document.getElementById('newKidPin');

    if (!nameInput || !pinInput) return;

    const kidName = nameInput.value.trim();
    const kidPin = pinInput.value.trim();

    if (!kidName || kidPin.length !== 4) {
        showToast('Please provide a name and 4-digit PIN!', '⚠️', 3000);
        return;
    }

    const newId = `kid_${Date.now()}`;
    const newProfile = {
        id: newId,
        name: kidName,
        avatar: selectedAvatar,
        pin: kidPin
    };

    try {
        await setDoc(doc(db, "kidProfiles", newId), newProfile);

        closeCreateAccountModal();
        nameInput.value = '';
        pinInput.value = '';

        playChime([523, 659, 784, 1046]);
        launchConfetti(40);
        showToast(`Profile created for ${kidName}! Synced to Mobile! 🎉`, '✨', 3500);
    } catch (e) {
        console.error("Firestore Save Error:", e);
        showToast('Error saving profile to Firestore!', '❌', 3000);
    }
}
window.handleCreateKidAccount = handleCreateKidAccount;

function openAdminPortalModal() {
    if (currentRole !== 'admin') {
        showToast('Only Admin can manage profiles!', '⚠️', 3000);
        return;
    }
    playSound(600);
    renderAdminPortalProfiles();
    const modal = document.getElementById('adminPortalModal');
    if (modal) modal.style.display = 'flex';
}
window.openAdminPortalModal = openAdminPortalModal;

function closeAdminPortalModal() {
    playSound(300);
    const modal = document.getElementById('adminPortalModal');
    if (modal) modal.style.display = 'none';
}
window.closeAdminPortalModal = closeAdminPortalModal;

function closeAdminPortalModalOnBg(e) {
    if (e.target.id === 'adminPortalModal') closeAdminPortalModal();
}
window.closeAdminPortalModalOnBg = closeAdminPortalModalOnBg;

function renderAdminPortalProfiles() {
    const container = document.getElementById('adminProfilesList');
    if (!container) return;
    
    if (cachedKidProfiles.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); padding: 10px;">No kid profiles created yet.</p>';
        return;
    }

    container.innerHTML = '';
    cachedKidProfiles.forEach(p => {
        const div = document.createElement('div');
        div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 14px 18px; border-radius: 14px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);';
        
        let formattedDate = 'Never logged in';
        if (p.lastLogin) {
            const dateObj = new Date(p.lastLogin);
            formattedDate = dateObj.toLocaleString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        div.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 4px; text-align: left;">
                <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-color);">
                    <span style="font-size: 1.2rem; margin-right: 6px;">${p.avatar}</span> ${p.name} 
                    <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">(PIN: ${p.pin})</span>
                </div>
                <div style="font-size: 0.82rem; color: var(--text-muted); display: flex; align-items: center; gap: 6px;">
                    <span>🕒 Last Login:</span>
                    <strong style="color: var(--primary-blue-dark); font-weight: 700;">${formattedDate}</strong>
                </div>
            </div>
            <button class="logout-btn" style="padding: 8px 14px; font-size: 0.85rem;" onclick="deleteKidProfile('${p.id}', '${p.name}')">🗑️ Remove</button>
        `;
        container.appendChild(div);
    });
}

async function deleteKidProfile(kidId, kidName) {
    if (currentRole !== 'admin') return;
    if (!confirm(`Are you sure you want to permanently delete ${kidName}'s profile?`)) return;

    try {
        await deleteDoc(doc(db, "kidProfiles", kidId));
        await deleteDoc(doc(db, "kidProgress", kidId));
        
        playSound(300);
        showToast(`Profile for ${kidName} was deleted.`, '🗑️', 3500);
    } catch (e) {
        console.error("Error removing document: ", e);
        showToast('Error deleting profile from database.', '❌', 3000);
    }
}
window.deleteKidProfile = deleteKidProfile;

// ============================================================
// PROGRESS TRACKING & BADGES SYSTEM
// ============================================================
let userStars = 0;
let level = 1;
let unlockedBadges = new Set();
let factsViewed = new Set();
let finishedStories = new Set();
let completedExperiments = new Set();

const BADGES = {
    factFinder:   { icon: '🔍', name: 'Fact Finder',        desc: 'Explored your first encyclopedia fact!' },
    factMaster:   { icon: '🧠', name: 'Encyclopedia Master', desc: 'Explored every single fact!' },
    bookworm:     { icon: '📚', name: 'Bookworm',            desc: 'Finished a whole storybook!' },
    scientist:    { icon: '🔬', name: 'Junior Scientist',    desc: 'Completed a full lab experiment!' },
    gamer:        { icon: '🕹️', name: 'Game Champ',          desc: 'Scored 100+ points in Pac-Man!' },
    memoryMaster: { icon: '🧩', name: 'Memory Master',       desc: 'Matched every card in Memory Match!' },
    quizWhiz:     { icon: '🏆', name: 'Quiz Whiz',           desc: 'Got a perfect score in Trivia Quiz!' },
    mathGenius:   { icon: '🔢', name: 'Math Genius',         desc: 'Aced a Math Wizard round!' },
    duoLingo:     { icon: '🦉', name: 'Linguist Star',       desc: 'Completed a Duolingo Dash lesson!' },
    superstar:    { icon: '🌟', name: 'Superstar Explorer',  desc: 'Collected 100 stars!' },
    bodyExplorer: { icon: '🧍', name: 'Body Explorer',       desc: 'Discovered your first body part!' },
    bodyDoctor:   { icon: '🩺', name: 'Little Doctor',       desc: 'Found every body part on the map!' },
    spaceCadet:   { icon: '🚀', name: 'Space Cadet',         desc: 'Visited your first planet!' },
    astronomer:   { icon: '🔭', name: 'Astronomer',          desc: 'Explored every planet and the Sun!' },
    planetPro:    { icon: '🪐', name: 'Planet Pro',          desc: 'Perfect score on the Planet Quiz!' }
};

async function saveProgress() {
    if (!currentActiveId) return;
    try {
        const data = {
            stars: userStars,
            level,
            badges: [...unlockedBadges],
            factsViewed: [...factsViewed],
            finishedStories: [...finishedStories],
            completedExperiments: [...completedExperiments]
        };
        await setDoc(doc(db, "kidProgress", currentActiveId), data);
    } catch (e) {
        console.error("Cloud Save error:", e);
    }
}

async function loadProgress() {
    if (!currentActiveId) return;
    try {
        const docRef = doc(db, "kidProgress", currentActiveId);
        const docSnap = await getDoc(docRef);
        
        if (!docSnap.exists()) {
            await loadQuizStats();
            userStars = 0;
            level = 1;
            unlockedBadges = new Set();
            factsViewed = new Set();
            finishedStories = new Set();
            completedExperiments = new Set();
            updateStatsDisplay();
            return;
        }
        
        await loadQuizStats();

        const d = docSnap.data();
        userStars = d.stars || 0;
        level = d.level || 1;
        unlockedBadges = new Set(d.badges || []);
        factsViewed = new Set(d.factsViewed || []);
        finishedStories = new Set(d.finishedStories || []);
        completedExperiments = new Set(d.completedExperiments || []);

        updateStatsDisplay();
    } catch (e) {
        console.error("Cloud Load error:", e);
    }
}

function updateStatsDisplay() {
    const starElem = document.getElementById('starCount') || document.getElementById('star-count');
    const levelElem = document.getElementById('levelCount');
    const badgeElem = document.getElementById('badgeCount');
    const xpBar = document.getElementById('xpBarFill');

    if (starElem) starElem.innerText = userStars;
    if (levelElem) levelElem.innerText = level;
    if (badgeElem) badgeElem.innerText = unlockedBadges.size;

    if (xpBar) {
        const starsIntoLevel = userStars % 50;
        xpBar.style.width = `${(starsIntoLevel / 50) * 100}%`;
    }
}

function addStars(amount) {
    userStars += amount;
    checkLevelUp();
    if (userStars >= 100) unlockBadge('superstar');
    updateStatsDisplay();
    saveProgress();
}
window.addStars = addStars;

function checkLevelUp() {
    const newLevel = Math.floor(userStars / 50) + 1;
    if (newLevel > level) {
        level = newLevel;
        showToast(`Level Up! You're now Level ${level}! 🚀`, '⬆️', 3500);
        launchConfetti(25);
        playChime([523, 659, 784]);
    }
}

function unlockBadge(id) {
    if (unlockedBadges.has(id)) return;
    unlockedBadges.add(id);
    const b = BADGES[id];
    updateStatsDisplay();
    saveProgress();
    launchConfetti(45);
    playChime([660, 880, 1046]);
    showToast(`New Badge Unlocked: ${b.name}!`, b.icon, 4200);
    renderBadgesGrid();
}

function renderBadgesGrid() {
    const grid = document.getElementById('badgesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    Object.keys(BADGES).forEach(id => {
        const b = BADGES[id];
        const unlocked = unlockedBadges.has(id);
        const slot = document.createElement('div');
        slot.className = `badge-slot ${unlocked ? 'unlocked' : 'locked'}`;
        slot.innerHTML = `
            <div class="badge-icon">${unlocked ? b.icon : '🔒'}</div>
            <div class="badge-name">${unlocked ? b.name : '???'}</div>
            <div class="badge-desc">${unlocked ? b.desc : 'Keep exploring to unlock!'}</div>
        `;
        grid.appendChild(slot);
    });
}

function openBadgesModal() {
    playSound(600);
    renderBadgesGrid();
    const modal = document.getElementById('badgesModal');
    if (modal) modal.style.display = 'flex';
}
window.openBadgesModal = openBadgesModal;

function closeBadgesModal() {
    playSound(300);
    const modal = document.getElementById('badgesModal');
    if (modal) modal.style.display = 'none';
}
window.closeBadgesModal = closeBadgesModal;

function closeBadgesModalOnBg(e) {
    if (e.target.id === 'badgesModal') closeBadgesModal();
}
window.closeBadgesModalOnBg = closeBadgesModalOnBg;

// --- Mascot Buddy ---
const MASCOT_TIPS = [
    "Did you know? Try the Surprise Me button for a random fact! 🎲",
    "Master Spanish, French, and German in Duolingo Dash! 🦉",
    "Try out the Math Wizard game to practice dynamic math problems! 🔢",
    "Reading a whole storybook earns you a special badge! 📖",
    "Finish a science experiment to become a Junior Scientist! 🔬",
    "Collect 100 stars to become a Superstar Explorer! 🌟"
];

function mascotSpeak() {
    const bubble = document.getElementById('mascotBubble');
    if (!bubble) return;
    
    bubble.innerText = MASCOT_TIPS[Math.floor(Math.random() * MASCOT_TIPS.length)];
    bubble.classList.add('show');
    playSound(700, 'sine', 0.15);
    clearTimeout(window._mascotTimer);
    window._mascotTimer = setTimeout(() => bubble.classList.remove('show'), 4000);
}
window.mascotSpeak = mascotSpeak;

// ============================================================
// NAVIGATION & TAB CONTROLLERS
// ============================================================
function switchTab(tabId, evt) {
    if (tabId === 'solar') setTimeout(buildSolarSystem, 30);
    playSound(440);

    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add('active');
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');

    if (tabId === 'games') {
        initDuoGame();
    } else if (pacGameInterval) {
        // Leaving the Games tab entirely - stop any running Pac-Man loop.
        clearInterval(pacGameInterval);
        pacGameInterval = null;
    }
}
window.switchTab = switchTab;

function showGame(gameId, evt) {
    playSound(450);
    const tabs = document.querySelectorAll('.game-tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    }

    const duo = document.getElementById('duo-game');
    const math = document.getElementById('math-game');
    const quiz = document.getElementById('quiz-game');
    const pacman = document.getElementById('pacman-game');
    const memory = document.getElementById('memory-match');
    const mauritius = document.getElementById('mauritius-game');
    const body = document.getElementById('body-game');

    if (duo) duo.style.display = (gameId === 'duo-game') ? 'block' : 'none';
    if (math) math.style.display = (gameId === 'math-game') ? 'block' : 'none';
    if (quiz) quiz.style.display = (gameId === 'quiz-game') ? 'block' : 'none';
    if (pacman) pacman.style.display = (gameId === 'pacman-game') ? 'block' : 'none';
    if (memory) memory.style.display = (gameId === 'memory-match') ? 'block' : 'none';
    if (mauritius) mauritius.style.display = (gameId === 'mauritius-game') ? 'block' : 'none';
    if (body) body.style.display = (gameId === 'body-game') ? 'block' : 'none';

    // Game initializations
    if (gameId === 'duo-game') initDuoGame();
    if (gameId === 'math-game') initMathGame();
    if (gameId === 'quiz-game') initQuiz();
    if (gameId === 'memory-match') initMemoryGame();
    if (gameId === 'mauritius-game') initMauritiusGame();
    if (gameId === 'body-game') {
        // Guard: if script.js is stale/half-updated, say so instead of
        // silently showing an empty panel.
        if (typeof initBodyGame === 'function') {
            initBodyGame();
        } else {
            console.error('[KidZone] initBodyGame() is missing — script.js looks out of date.');
            if (body) {
                body.innerHTML = '<div style="text-align:center;padding:40px;">' +
                    '<div style="font-size:3rem;">\u26a0\ufe0f</div>' +
                    '<h3 style="font-family:var(--font-heading);margin:10px 0;">Body Parts Explorer could not load</h3>' +
                    '<p style="color:var(--text-muted);">script.js is out of date \u2014 it has no initBodyGame() function. ' +
                    'Copy the updated script.js into your project and hard-refresh (Ctrl+Shift+R).</p></div>';
            }
        }
    }

    // Only run the Pac-Man loop while its tab is actually visible,
    // otherwise pause it so it doesn't burn CPU/battery in the background.
    if (gameId === 'pacman-game') {
        resetPacmanGame();
    } else if (pacGameInterval) {
        clearInterval(pacGameInterval);
        pacGameInterval = null;
    }
}
window.showGame = showGame;

// ============================================================
// ENCYCLOPEDIA
// ============================================================
const encycloData = {
    'mars': { title: 'Mars the Red Planet', icon: '🔴', body: 'Mars looks red because its soil is full of iron oxide (rust)! Scientists have sent robotic rovers like Perseverance to explore Mars and look for signs of ancient water.' },
    'cheetah': { title: 'Cheetah: Speed King', icon: '🐆', body: 'Cheetahs can accelerate from 0 to 60 mph in just 3 seconds—faster than many sports cars! They use their long tails to help steer while running at high speeds.' },
    'trex': { title: 'Tyrannosaurus Rex', icon: '🦖', body: 'T-Rex lived around 66 million years ago. Even though its arms were tiny, they were super strong and could lift over 400 pounds!' },
    'moon': { title: 'Earth\'s Moon', icon: '🌕', body: 'The Moon doesn\'t produce its own light—it reflects light from the Sun! Twelve astronauts have walked on the Moon during the Apollo missions.' },
    'blue-whale': { title: 'Blue Whale', icon: '🐋', body: 'A Blue Whale\'s heart is as big as a small car! Their calls can travel underwater for hundreds of miles.' },
    'dolphin': { title: 'Dolphins: Ocean Genius', icon: '🐬', body: 'Dolphins use echolocation—clicking sounds that bounce off objects—to "see" underwater! They are also one of the few animals that can recognize themes in a mirror.' },
    'octopus': { title: 'Octopus: Eight-Armed Wonder', icon: '🐙', body: 'An octopus has three hearts and blue blood! It can squeeze through any gap bigger than its beak, since it has no bones at all.' },
    'reef': { title: 'Coral Reefs', icon: '🪸', body: 'Coral reefs are built by tiny living animals called coral polyps! Even though they look like rocks or plants, reefs are home to a quarter of all ocean life.' }
};

function openModal(id) {
    playSound(600);
    const data = encycloData[id];
    if (data) {
        document.getElementById('modalIcon').innerText = data.icon;
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalBody').innerText = data.body;
        
        const modal = document.getElementById('encyModal');
        if (modal) modal.style.display = 'flex';

        if (!factsViewed.has(id)) {
            factsViewed.add(id);
            addStars(5);
            if (factsViewed.size === 1) unlockBadge('factFinder');
            if (factsViewed.size === Object.keys(encycloData).length) unlockBadge('factMaster');
            saveProgress();
        }
    }
}
window.openModal = openModal;

function closeModal() {
    playSound(300);
    const modal = document.getElementById('encyModal');
    if (modal) modal.style.display = 'none';
}
window.closeModal = closeModal;

function closeModalOnBg(e) {
    if (e.target.id === 'encyModal') closeModal();
}
window.closeModalOnBg = closeModalOnBg;

function filterEncyclopedia() {
    const searchElem = document.getElementById('encySearch');
    if (!searchElem) return;
    const query = searchElem.value.toLowerCase();
    const cards = document.querySelectorAll('#encyGrid .card');
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
}
window.filterEncyclopedia = filterEncyclopedia;

function filterCategory(cat, evt) {
    playSound(520);
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');

    const cards = document.querySelectorAll('#encyGrid .card');
    cards.forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.category === cat) ? 'block' : 'none';
    });
}
window.filterCategory = filterCategory;

function surpriseMe() {
    playSound(660, 'triangle', 0.2);
    const ids = Object.keys(encycloData);
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    const firstFilter = document.querySelector('.filter-btn');
    if (firstFilter) firstFilter.classList.add('active');
    
    document.querySelectorAll('#encyGrid .card').forEach(card => card.style.display = 'block');
    openModal(randomId);
}
window.surpriseMe = surpriseMe;

// ============================================================
// STORYBOOKS
// ============================================================
const stories = {
    snowwhite: {
        title: "Snow White & The Whispering Enchantment",
        pages: [
            { page: 1, img: '👑', text: "Once upon a time, deep within a kingdom encircled by mist and emerald mountains, lived Princess Snow White. She was kind to every creature, from the smallest bluebird to the oldest forest stag. Her skin was as white as winter snow, her lips red as wild roses, and her hair dark as midnight. Yet, despite her warmth, the kingdom held a shadow in the high tower of the royal palace." },
            { page: 2, img: '🪞', text: "High in that tower, the jealous Queen stood before her ancient, silver-framed Magic Mirror. 'Mirror, mirror on the wall, who is the fairest of them all?' she demanded. The glass shimmered with a pale, ethereal light and whispered back: 'Queen, your beauty is true, 'tis plain to see, but Snow White in the forest is a thousand times more fair than thee!' Driven by bitter envy, the Queen vowed to banish the young princess forever." },
            { page: 3, img: '🌲', text: "Fleeing into the unknown depths of the forest under a blanket of moonlight, Snow White found herself surrounded by looming oak trees that seemed to whisper in the night wind. The path split before her into two mysterious trails hidden beneath thick fog. She had to decide which path to trust in the dark." },
            { 
                page: 4, 
                img: '🌲', 
                text: "Which path should Snow White take through the dark woods?",
                choices: [
                    { text: "🏡 Follow the Cozy Lantern Path", nextPage: 4 },
                    { text: "🌿 Enter the Whispering Woodland Trail", nextPage: 5 }
                ]
            },
            { page: 5, img: '🏡', text: "Following the soft glow of tiny lanterns hanging from wild mossy branches, Snow White stumbled upon a small clearing. Nestled among giant mushrooms was a cozy wooden cottage with tiny wooden shutters and smoke gently drifting from its stone chimney. She knocked gently, but hearing no answer, stepped quietly inside to rest." },
            { page: 6, img: '🦊', text: "Entering the Whispering Woodland Trail, friendly forest animals—a red fox, a pair of inquisitive raccoons, and a gentle doe—guided her step-by-step through the thick brush. Together, they led her through the tangled vines and straight to the garden gate of a quaint, magical cottage hiding near a rushing stream." },
            { page: 7, img: '🛏️', text: "Inside the cottage, everything was miniature! Seven tiny chairs sat around a sturdy wooden dinner table, and seven tiny unmade beds lined the loft upstairs. Exhausted from her long journey through the enchanted woods, Snow White curled across three of the little beds and fell into a peaceful, deep sleep." },
            { page: 8, img: '⛏️', text: "At sunset, march steps echoed outside. The Seven Dwarfs—Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy, and Dopey—returned home from digging for sparkling gems deep inside the mountains. Surprised to find a sleeping maiden, they listened as she shared her story. Touched by her gentle heart, they offered her a permanent home filled with safety and friendship." },
            { page: 9, img: '🧙‍♀️', text: "Weeks passed happily until the Wicked Queen consulted her mirror once more and learned Snow White was still alive. Disguising herself as an old peasant peddler woman with a ragged cape, she journeyed to the cottage while the dwarfs were away working in the jewel mines." },
            { page: 10, img: '🍎', text: "Knocking on the tiny wooden window, the disguised Queen held up a polished, bright red poison apple that gleamed temptingly in the sunlight. 'Take a bite, sweet girl,' the peddler croaked, 'and your deepest wish will come true!' Snow White hesitated at the threshold." },
            { 
                page: 11, 
                img: '🍎', 
                text: "What should Snow White do with the mysterious stranger?",
                choices: [
                    { text: "❌ Politely Refuse the Apple", nextPage: 11 },
                    { text: "🍎 Take a Bite of the Apple", nextPage: 12 }
                ]
            },
            { page: 12, img: '🛡️', text: "Remembering the dwarfs' stern warnings, Snow White shook her head gently and stepped back. 'No thank you, kind auntie, I cannot accept gifts from strangers.' The Queen gasped in defeat, dropped the fruit, and fled into the dark mountains, never to be seen again!" },
            { page: 13, img: '💤', text: "Snow White took a bite of the rosy red fruit and instantly fell into an enchanted slumber. Devastated, the Seven Dwarfs built a glass casket surrounded by forest blossoms to protect her until a brave Prince arrived, breaking the dark sleeping spell with a vow of true love." },
            { page: 14, img: '🏰', text: "With safety restored across the realm, Snow White returned to the palace with her prince and forest friends. The kingdom celebrated with music, dancing, and feast days for months, living happily ever after! The end!" }
        ]
    },
    pip: {
        title: "Pip's Nebula Dream Voyage",
        pages: [
            { page: 1, img: '🚀', text: "On the quiet star-dusted launchpad of Starlight Station 9, located on the outer rim of the Milky Way galaxy, lived Pip—a cheerful young rocket ship with glowing sapphire thrusters and a heat shield painted with bright yellow stars." },
            { page: 2, img: '🗺️', text: "Every night, Pip gazed through his space-telescope at the Golden Nebula—a giant, swirling cloud of pink cosmic dust, sparkling newborn stars, and floating space crystals light-years away. More than anything, Pip dreamed of flying across the universe to explore it firsthand." },
            { page: 3, img: '🪐', text: "One evening, after fueling his engine with liquid starlight, Pip counted down out loud: 'Three... Two... One... Liftoff!' With a magnificent roar of rainbow fire, he rocketed upward into the dark vacuum of deep space, zooming past icy comets and ringed planets." },
            { page: 4, img: '☄️', text: "Halfway across the sector, Pip encountered a rocky asteroid belt tumbling directly in his navigational path. Giant boulders made of space granite spun left and right. Pip adjusted his steering fins and expertly bobbed, wooshed, and dodged around each fast-moving meteor!" },
            { page: 5, img: '🛸', text: "Beyond the asteroid field, Pip spotted a gleaming silver saucer stranded near a lunar crater. A friendly blue alien named Orbit was waving for help! Orbit's propulsion engine was missing two glowing stardust batteries." },
            { page: 6, img: '🔋', text: "Pip opened his cargo bay, pulled out extra solar power batteries, and helped Orbit repair his cosmic ship. Overjoyed, Orbit handed Pip an ancient star-map that revealed a shortcut through a warm solar wind stream." },
            { page: 7, img: '🌌', text: "Riding the warm solar winds like an ocean wave, Pip finally reached the edges of the Golden Nebula! The cosmic cloud sparkled with gold dust, glowing space butterflies, and floating jelly-whales that sang soothing melodies across the galaxy." },
            { page: 8, img: '🥳', text: "Friendly galaxy explorers and space creatures gathered on a nearby moon base to host a stellar picnic in Pip's honor, celebrating the tiny rocket who dared to dream big. Pip knew that no matter how vast space was, courage and kindness made every star feel close to home. The end!" }
        ]
    },
    leo: {
        title: "Leo's Grand Jungle Symphony",
        pages: [
            { page: 1, img: '🦁', text: "Deep in the lush heart of the Sunlit Savanna lived Leo, a young lion with a fluffy golden mane and a heart full of rhythm. While the other young lions practiced ferocious roars to grow up to be kings, Leo preferred to pat his paws against hollow logs, crafting rhythmic beats that echoed across the plains." },
            { page: 2, img: '🥁', text: "Leo collected dry gourd shells, hollow bamboo stalks, and stretched tree bark to assemble his very own jungle drum kit under the wide canopy of an ancient baobab tree. Every morning, he drummed out lively beats that set the rhythm for the entire savanna." },
            { page: 3, img: '📜', text: "One sunny afternoon, a flock of colorful toucans fluttered through the trees dropping golden leaves. They carried invitations to the Great Jungle Talent Contest, where the animal king would award a sparkling golden trophy to the best musical performer in the forest." },
            { page: 4, img: '🦜', text: "Leo spent days composing a drum rhythm that captured the spirit of the savanna: the gentle pitter-patter of morning rain, the rushing stride of running zebras, and the deep boom of thunder across the hills." },
            { page: 5, img: '🌴', text: "On the night of the grand show, fireflies illuminated the woodland stage. Leo watched nervously as the parrots sang high operatic notes and the baboons performed acrobatic flips. Soon, his name was announced to the waiting crowd." },
            { page: 6, img: '🎶', text: "Stepping up to his wooden instruments, Leo took a deep breath and began to play. His paws moved fast like lightning! He drummed a thunderous rhythm that filled every heart in the clearing with energy and joy." },
            { page: 7, img: '💃', text: "The music was so infectious that the elephants began stomping their feet, the monkeys swung rhythmically from vines, and even the stern elder lions began tapping their paws in harmony!" },
            { page: 8, img: '🏆', text: "The crowd cheered with deafening applause as Leo was awarded the golden Rhythm Crown. Leo smiled bright, proving to the entire jungle that being true to your own unique passion is the greatest roar of all. The end!" }
        ]
    },
    mira: {
        title: "Mira & The Lost Coral Kingdom",
        pages: [
            { page: 1, img: '🧜‍♀️', text: "Far beneath the turquoise surface of the tropical sea lay the kingdom of Aquaria, home to Mira the mermaid. Mira possessed sparkling emerald fins and spent her days tending to the delicate ocean gardens of glowing sea anemones, giant pink clams, and vibrant coral reefs." },
            { page: 2, img: '🪸', text: "One morning, Mira swam down to the main reef and noticed a distressing change: the vibrant corals were losing their iridescent shimmer, fading into dull grey stone. Without the magic of the main coral reef, the tiny fish, sea turtles, and starfish had no place to play or build their homes." },
            { page: 3, img: '📜', text: "The wise old octopus, Barnaby, swam up to Mira and unrolled an ancient kelp parchment map. 'The heart of our reef can only be restored by the legendary Pearl of Lumina,' he explained, 'hidden deep inside the Sunken Sea Cave across the trench.'" },
            { page: 4, img: '🐬', text: "Mira knew she couldn't make the long journey alone. She whistled a high underwater tune, calling upon her two closest sea companions: Bubbles, an energetic bottle-nosed dolphin, and Barnaby the wise octopus, who knew every secret pathway in the ocean depths." },
            { page: 5, img: '🌊', text: "Together, the trio swam past swirling underwater currents, glowing jellyfish fields, and dark underwater chasms. Whenever they encountered a tricky path, Barnaby used his eight arms to move obstacles, while Bubbles used echolocation to guide them safely through murky waters." },
            { page: 6, img: '💎', text: "At last, deep within the shimmering Sunken Sea Cave, they discovered the Pearl of Lumina resting upon a bed of crystalline sand. It shone with every hue of the rainbow, illuminating the dark cavern with warm light." },
            { page: 7, img: '✨', text: "Carefully carrying the pearl back to Aquaria, Mira gently placed it upon the central altar of the reef. Instantly, a wave of magical iridescent energy pulsed through the waters! The coral burst back into brilliant shades of violet, orange, turquoise, and gold." },
            { page: 8, img: '🎉', text: "Thousands of colorful reef fish swirled around Mira, singing songs of gratitude. The ocean kingdom was saved, and Mira's bravery ensured that the magical coral gardens would flourish for generations to come. The end!" }
        ]
    }
};

let currentStoryKey = 'snowwhite';
let currentStoryPage = 0;
let storyHistory = [0]; // tracks the actual path taken through branches

function selectStory(key, evt) {
    playSound(580);
    currentStoryKey = key;
    currentStoryPage = 0;
    storyHistory = [0];
    document.querySelectorAll('.story-btn').forEach(btn => btn.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
    renderStoryPage();
}
window.selectStory = selectStory;

function renderStoryPage() {
    const storyData = stories[currentStoryKey];
    if (!storyData) return;

    const list = storyData.pages;
    const p = list[currentStoryPage];
    const isLastPage = currentStoryPage === list.length - 1;

    const pageNumElem = document.getElementById('pageNumber');
    const bookTitleElem = document.getElementById('bookTitle');
    const bookImgElem = document.getElementById('bookImg');
    const bookTextElem = document.getElementById('bookText');

    if (pageNumElem) pageNumElem.innerText = `Page ${p.page}`;
    if (bookTitleElem) bookTitleElem.innerText = storyData.title;
    if (bookImgElem) bookImgElem.innerText = p.img;
    if (bookTextElem) bookTextElem.innerText = p.text;

    const choicesContainer = document.getElementById('storyChoices');
    const nextBtn = document.getElementById('nextPageBtn');
    const prevBtn = document.getElementById('prevPageBtn');

    if (choicesContainer) {
        choicesContainer.innerHTML = '';
        if (p.choices) {
            choicesContainer.style.display = 'flex';
            if (nextBtn) nextBtn.style.display = 'none';

            p.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn';
                btn.innerText = choice.text;
                btn.onclick = () => {
                    playSound(600);
                    currentStoryPage = choice.nextPage;
                    storyHistory.push(currentStoryPage);
                    renderStoryPage();
                };
                choicesContainer.appendChild(btn);
            });
        } else {
            choicesContainer.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'inline-block';
        }
    }

    if (prevBtn) prevBtn.disabled = (currentStoryPage === 0);
    if (nextBtn) nextBtn.disabled = isLastPage;

    const endBanner = document.getElementById('theEndBanner');
    if (endBanner) endBanner.style.display = isLastPage ? 'block' : 'none';

    if (isLastPage && !finishedStories.has(currentStoryKey)) {
        finishedStories.add(currentStoryKey);
        addStars(10);
        unlockBadge('bookworm');
        launchConfetti(35);
        showToast('Story finished — great reading!', '📖', 3500);
        saveProgress();
    }

    // Read the new page aloud when Auto-Read is switched on.
    if (typeof autoReadStories !== 'undefined' && autoReadStories && speechEnabled) {
        setTimeout(readStoryPage, 260);
    } else {
        stopSpeech();
        if (bookTextElem) bookTextElem.classList.remove('reading');
    }
}

// ---- Storybook narration controls ----
let autoReadStories = false;

function readStoryPage() {
    const el = document.getElementById('bookText');
    const text = el ? el.innerText : '';
    if (!text) return;
    if (!speechEnabled) {
        showToast('Voice is off — turn it on to hear the story', '🔇', 2600);
        return;
    }
    if (el) el.classList.add('reading');
    speakText(text);
}
window.readStoryPage = readStoryPage;

function stopStoryReading() {
    stopSpeech();
    playSound(300, 'sawtooth', 0.12);
    document.querySelectorAll('.book-text.reading').forEach(e => e.classList.remove('reading'));
}
window.stopStoryReading = stopStoryReading;

function toggleAutoRead(on) {
    autoReadStories = !!on;
    playSound(on ? 700 : 350);
    showToast(on ? 'Auto-Read on — pages read themselves!' : 'Auto-Read off',
              on ? '📖' : '📕', 2600);
    if (autoReadStories) {
        if (!speechEnabled) toggleNarration();
        readStoryPage();
    } else {
        stopStoryReading();
    }
}
window.toggleAutoRead = toggleAutoRead;

function changePage(delta) {
    playSound(500);

    if (delta === 1) {
        let next = currentStoryPage + 1;
        if (currentStoryKey === 'snowwhite') {
            if (next === 5) next = 6;
            if (next === 12) next = 13;
        }
        currentStoryPage = next;
        storyHistory.push(currentStoryPage);
    } else if (storyHistory.length > 1) {
        // Step back through the pages actually visited, respecting
        // whichever branch was chosen - not just "index minus one".
        storyHistory.pop();
        currentStoryPage = storyHistory[storyHistory.length - 1];
    }

    renderStoryPage();
}
window.changePage = changePage;

// ============================================================
// GAME 0: DUOLINGO DASH
// ============================================================
const duoQuestions = [
    { prompt: "Translate: 'Hola, ¿cómo estás?'", lang: "es-ES", options: ["Hello, how are you?", "Goodbye, my friend", "Good morning!", "Thank you very much"], answer: 0, icon: "🇪🇸" },
    { prompt: "Translate: 'Apple' into Spanish", lang: "es-ES", options: ["El perro", "La manzana", "El gato", "El agua"], answer: 1, icon: "🍎" },
    { prompt: "Translate: 'Bonjour, mon ami!'", lang: "fr-FR", options: ["Goodnight, my cat!", "Hello, my friend!", "See you tomorrow!", "Where are you?"], answer: 1, icon: "🇫🇷" },
    { prompt: "Translate: 'Cat' into French", lang: "fr-FR", options: ["Le chat", "Le chien", "La maison", "Le poisson"], answer: 0, icon: "🐱" },
    { prompt: "Translate: 'Guten Tag!'", lang: "de-DE", options: ["Good evening!", "Good day / Hello!", "Thank you!", "Please!"], answer: 1, icon: "🇩🇪" },
    { prompt: "Translate: 'Water' into German", lang: "de-DE", options: ["Brot", "Milch", "Wasser", "Kaffee"], answer: 2, icon: "💧" }
];

let duoIndex = 0, duoScore = 0, duoHearts = 3, duoStreak = 0;
let duoCurrentQuestions = [];

function initDuoGame() {
    duoCurrentQuestions = shuffleArray([...duoQuestions]).slice(0, 5);
    duoIndex = 0;
    duoScore = 0;
    duoHearts = 3;
    updateDuoStats();
    renderDuoQuestion();
}
window.initDuoGame = initDuoGame;

function updateDuoStats() {
    const heartsElem = document.getElementById('duoHearts');
    const streakElem = document.getElementById('duoStreak');
    const scoreElem = document.getElementById('duoScore');

    if (heartsElem) heartsElem.innerText = '❤️'.repeat(Math.max(0, duoHearts));
    if (streakElem) streakElem.innerText = duoStreak;
    if (scoreElem) scoreElem.innerText = duoScore;
}

function renderDuoQuestion() {
    const container = document.getElementById('duoContainer');
    if (!container) return;

    if (duoHearts <= 0) {
        container.innerHTML = `
            <div class="quiz-result">
                <div class="quiz-result-icon">💔</div>
                <h3>Out of Hearts!</h3>
                <p>Don't worry! Practice makes perfect. Duo believes in you!</p>
                <button class="restart-btn" onclick="initDuoGame()">🔄 Try Again</button>
            </div>
        `;
        playChime([300, 200, 150], 'sawtooth');
        return;
    }

    if (duoIndex >= duoCurrentQuestions.length) {
        unlockBadge('duoLingo');
        recordRoundScore('duo', duoScore, Math.max(duoCurrentQuestions.length * 10, 1));
        const earnedStars = duoScore * 5;
        addStars(earnedStars);
        launchConfetti(40);

        container.innerHTML = `
            <div class="quiz-result">
                <div class="quiz-result-icon">🦉</div>
                <h3>Lesson Completed! Great Job!</h3>
                <p>You earned <strong>${earnedStars} Stars</strong> ⭐!</p>
                <button class="restart-btn" onclick="initDuoGame()">🔄 Play Next Lesson</button>
            </div>
        `;
        playChime([523, 659, 784, 1046]);
        return;
    }

    const q = duoCurrentQuestions[duoIndex];
    container.innerHTML = `
        <div class="quiz-question">
            <div class="quiz-question-icon">${q.icon}</div>
            <h3>${q.prompt}</h3>
            <button class="book-btn audio-btn" style="margin-bottom: 12px;" onclick="speakText('${q.prompt.replace("Translate: ", "").replace(/'/g, "")}', '${q.lang}')">🔊 Listen Audio</button>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `<button class="quiz-option" onclick="answerDuo(${i})">${opt}</button>`).join('')}
            </div>
        </div>
    `;
}

function answerDuo(choice) {
    const q = duoCurrentQuestions[duoIndex];
    const buttons = document.querySelectorAll('#duoContainer .quiz-option');
    buttons.forEach(btn => btn.onclick = null);

    if (buttons[q.answer]) buttons[q.answer].classList.add('correct');
    if (choice === q.answer) {
        playSound(880, 'sine', 0.2);
        duoScore += 10;
        duoStreak++;
    } else {
        playSound(180, 'sawtooth', 0.3);
        if (buttons[choice]) buttons[choice].classList.add('incorrect');
        duoHearts--;
        duoStreak = 0;
    }

    recordAnswer('duo', choice === q.answer, q.prompt || '');
    updateDuoStats();

    setTimeout(() => {
        duoIndex++;
        renderDuoQuestion();
    }, 1000);
}
window.answerDuo = answerDuo;

// ============================================================
// GAME 1: MATH WIZARD (Dynamic Generator)
// ============================================================
let mathQuestionsPool = [];
let mathRoundQuestions = [], mathIndex = 0, mathScore = 0;

function generate500MathQuestions() {
    const list = [];
    const ops = ['+', '-', '×', '÷'];
    
    for (let i = 0; i < 500; i++) {
        const op = ops[i % ops.length];
        let num1, num2, ans, qText;
        
        if (op === '+') {
            num1 = Math.floor(Math.random() * 80) + 5;
            num2 = Math.floor(Math.random() * 80) + 5;
            ans = num1 + num2;
            qText = `What is ${num1} + ${num2}?`;
        } else if (op === '-') {
            num1 = Math.floor(Math.random() * 90) + 10;
            num2 = Math.floor(Math.random() * num1) + 1;
            ans = num1 - num2;
            qText = `What is ${num1} - ${num2}?`;
        } else if (op === '×') {
            num1 = Math.floor(Math.random() * 12) + 1;
            num2 = Math.floor(Math.random() * 12) + 1;
            ans = num1 * num2;
            qText = `What is ${num1} × ${num2}?`;
        } else {
            num2 = Math.floor(Math.random() * 10) + 1;
            ans = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * ans;
            qText = `What is ${num1} ÷ ${num2}?`;
        }

        const choices = new Set([ans]);
        while (choices.size < 4) {
            let offset = (Math.floor(Math.random() * 6) + 1) * (Math.random() < 0.5 ? 1 : -1);
            let wrongAns = ans + offset;
            if (wrongAns >= 0) choices.add(wrongAns);
        }

        const choicesArr = Array.from(choices).sort(() => Math.random() - 0.5);
        list.push({
            q: `Math Question #${i + 1}: ${qText}`,
            options: choicesArr,
            answer: choicesArr.indexOf(ans),
            icon: '🔢'
        });
    }
    return list;
}

mathQuestionsPool = generate500MathQuestions();

function initMathGame() {
    mathRoundQuestions = shuffleArray([...mathQuestionsPool]).slice(0, 5);
    mathIndex = 0;
    mathScore = 0;
    renderMathQuestion();
}
window.initMathGame = initMathGame;

function renderMathQuestion() {
    const container = document.getElementById('mathContainer');
    if (!container) return;
    const total = mathRoundQuestions.length;

    const mathProgElem = document.getElementById('mathProgress');
    const mathScoreElem = document.getElementById('mathScoreDisplay');

    if (mathIndex >= total) {
        if (mathProgElem) mathProgElem.innerText = `${total} / ${total}`;
        if (mathScoreElem) mathScoreElem.innerText = mathScore;

        recordRoundScore('math', mathScore, total);
        const perfect = mathScore === total;
        if (perfect) unlockBadge('mathGenius');
        const earnedStars = mathScore * 5;
        addStars(earnedStars);
        if (mathScore >= Math.ceil(total * 0.8)) launchConfetti(30);

        container.innerHTML = `
            <div class="quiz-result">
                <div class="quiz-result-icon">${perfect ? '🌟' : '✏️'}</div>
                <h3>Math Wizard Round Complete!</h3>
                <p>You scored ${mathScore} / ${total} correctly and earned ${earnedStars} stars ⭐!</p>
                <button class="restart-btn" onclick="initMathGame()">🔄 Play Again</button>
            </div>
        `;
        playChime(perfect ? [523, 659, 784, 1046] : [523, 659]);
        return;
    }

    if (mathProgElem) mathProgElem.innerText = `${mathIndex + 1} / ${total}`;
    if (mathScoreElem) mathScoreElem.innerText = mathScore;

    const q = mathRoundQuestions[mathIndex];
    container.innerHTML = `
        <div class="quiz-question">
            <div class="quiz-question-icon">${q.icon}</div>
            <h3>${q.q}</h3>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `<button class="quiz-option" onclick="answerMath(${i})">${opt}</button>`).join('')}
            </div>
        </div>
    `;
}

function answerMath(choice) {
    const q = mathRoundQuestions[mathIndex];
    const buttons = document.querySelectorAll('#mathContainer .quiz-option');
    buttons.forEach(btn => btn.onclick = null);

    if (buttons[q.answer]) buttons[q.answer].classList.add('correct');
    if (choice === q.answer) {
        playSound(800, 'sine', 0.2);
        mathScore++;
    } else {
        playSound(200, 'sawtooth', 0.3);
        if (buttons[choice]) buttons[choice].classList.add('incorrect');
    }

    recordAnswer('math', choice === q.answer, q.question || '');

    setTimeout(() => {
        mathIndex++;
        renderMathQuestion();
    }, 900);
}
window.answerMath = answerMath;

// ============================================================
// GAME 2: TRIVIA QUIZ ENGINE
// ============================================================
function generate500TriviaQuestions() {
    const list = [];
    const dynamicFacts = [
        { q: "What is the capital city of France?", correct: "Paris", wrong: ["London", "Berlin", "Rome"], icon: "🏰" },
        { q: "Which color do you get when you mix Red and Yellow?", correct: "Orange", wrong: ["Purple", "Green", "Brown"], icon: "🎨" },
        { q: "How many days are in a leap year?", correct: "366", wrong: ["365", "360", "300"], icon: "📅" },
        { q: "What is the main ingredient in bread?", correct: "Flour", wrong: ["Rice", "Sugar", "Corn"], icon: "🍞" },
        { q: "Which instrument has 88 black and white keys?", correct: "Piano", wrong: ["Guitar", "Flute", "Drum"], icon: "🎹" }
    ];

    for (let i = 0; i < 500; i++) {
        const fact = dynamicFacts[i % dynamicFacts.length];
        const allOpts = shuffleArray([fact.correct, ...fact.wrong]);
        list.push({
            q: `Question #${i + 1}: ${fact.q}`,
            options: allOpts,
            answer: allOpts.indexOf(fact.correct),
            icon: fact.icon
        });
    }

    return list;
}

const all500Questions = generate500TriviaQuestions();
let availableQuizIndices = [];
let quizOrder = [];
let quizIndex = 0;
let quizScore = 0;

function initQuiz() {
    if (!availableQuizIndices || availableQuizIndices.length < 5) {
        availableQuizIndices = shuffleArray([...Array(all500Questions.length).keys()]);
    }

    quizOrder = availableQuizIndices.splice(0, 5);
    quizIndex = 0;
    quizScore = 0;
    renderQuizQuestion();
}
window.initQuiz = initQuiz;

function renderQuizQuestion() {
    const container = document.getElementById('quizContainer');
    if (!container) return;
    const total = quizOrder.length;

    const quizProgElem = document.getElementById('quizProgress');
    const quizScoreElem = document.getElementById('quizScoreDisplay');

    if (quizIndex >= total) {
        if (quizProgElem) quizProgElem.innerText = `${total} / ${total}`;
        if (quizScoreElem) quizScoreElem.innerText = quizScore;

        recordRoundScore('trivia', quizScore, total);
        const perfect = quizScore === total;
        if (perfect) unlockBadge('quizWhiz');
        const earnedStars = quizScore * 5;
        addStars(earnedStars);
        if (quizScore >= Math.ceil(total * 0.8)) launchConfetti(30);

        container.innerHTML = `
            <div class="quiz-result">
                <div class="quiz-result-icon">${perfect ? '🏆' : '🎯'}</div>
                <h3>Quiz Round Complete!</h3>
                <p>You scored ${quizScore} / ${total}!</p>
                <p>Earned ${earnedStars} stars ⭐</p>
                <button class="restart-btn" onclick="initQuiz()">🔄 Play Next Round</button>
            </div>
        `;
        playChime(perfect ? [523, 659, 784, 1046] : [523, 659]);
        return;
    }

    if (quizProgElem) quizProgElem.innerText = `${quizIndex + 1} / ${total}`;
    if (quizScoreElem) quizScoreElem.innerText = quizScore;

    const q = all500Questions[quizOrder[quizIndex]];
    container.innerHTML = `
        <div class="quiz-question">
            <div class="quiz-question-icon">${q.icon}</div>
            <h3>${q.q}</h3>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `<button class="quiz-option" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
            </div>
        </div>
    `;
}

function answerQuiz(choice) {
    const q = all500Questions[quizOrder[quizIndex]];
    const buttons = document.querySelectorAll('#quizContainer .quiz-option');
    buttons.forEach(btn => btn.onclick = null);

    if (buttons[q.answer]) buttons[q.answer].classList.add('correct');
    if (choice === q.answer) {
        playSound(800, 'sine', 0.2);
        quizScore++;
    } else {
        playSound(200, 'sawtooth', 0.3);
        if (buttons[choice]) buttons[choice].classList.add('incorrect');
    }

    recordAnswer('trivia', choice === q.answer, q.question || '');

    setTimeout(() => {
        quizIndex++;
        renderQuizQuestion();
    }, 900);
}
window.answerQuiz = answerQuiz;

// ============================================================
// MAURITIUS LEARNING HUB ENGINE
// ============================================================
let currentMruLevel = 1;
let filteredMruQuestions = [];
let unlockedMruLevel = 1; // Tracks highest unlocked level
let mruIndex = 0;
let mruScore = 0;

function setMruLevel(lvl) {
    if (lvl > unlockedMruLevel) {
        alert(`🔒 Level ${lvl} is locked! Complete Level ${lvl - 1} with at least 80% to unlock it.`);
        return;
    }
    playSound(450);
    currentMruLevel = lvl;
    
    document.querySelectorAll('.lvl-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`mruLvl${lvl}Btn`);
    if (activeBtn) activeBtn.classList.add('active');

    initMauritiusGame();
}
window.setMruLevel = setMruLevel;

function initMauritiusGame() {
    filteredMruQuestions = shuffleArray(mauritiusQuestions.filter(q => q.level === currentMruLevel));
    mruIndex = 0;
    mruScore = 0;
    renderMauritiusQuestion();
}
window.initMauritiusGame = initMauritiusGame;

function renderMauritiusQuestion() {
    const container = document.getElementById('mruContainer');
    if (!container) return;

    const total = filteredMruQuestions.length;
    const progressElem = document.getElementById('mruProgress');
    const scoreElem = document.getElementById('mruScoreDisplay');

    if (mruIndex >= total) {
        if (progressElem) progressElem.innerText = `${total} / ${total}`;
        if (scoreElem) scoreElem.innerText = mruScore;

        const passPercentage = (mruScore / total) * 100;
        let unlockedNext = false;

        if (passPercentage >= 80 && currentMruLevel === unlockedMruLevel && unlockedMruLevel < 3) {
            unlockedMruLevel++;
            unlockedNext = true;
            
            const nextBtn = document.getElementById(`mruLvl${unlockedMruLevel}Btn`);
            if (nextBtn) nextBtn.disabled = false;
        }

        recordRoundScore('mauritius', mruScore, total);
        const perfect = mruScore === total;
        const earnedStars = mruScore * 10;
        addStars(earnedStars);

        if (passPercentage >= 80) launchConfetti(40);

        container.innerHTML = `
            <div class="quiz-result">
                <div class="quiz-result-icon">${perfect ? '🇲🇺🎉' : passPercentage >= 80 ? '🌟' : '📚'}</div>
                <h3>Level ${currentMruLevel} Quiz Complete!</h3>
                <p>You scored <strong>${mruScore} / ${total}</strong> (${Math.round(passPercentage)}%)!</p>
                <p>You earned <strong>${earnedStars} Stars</strong> ⭐!</p>
                ${unlockedNext ? `<p style="color: #48bb78; font-weight: bold;">🎉 Level ${unlockedMruLevel} is now Unlocked!</p>` : ''}
                <div style="margin-top: 15px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <button class="restart-btn" onclick="initMauritiusGame()">🔄 Replay Level ${currentMruLevel}</button>
                    ${unlockedMruLevel > currentMruLevel ? `<button class="restart-btn" style="background: var(--primary-green);" onclick="setMruLevel(${currentMruLevel + 1})">🚀 Move to Level ${currentMruLevel + 1}</button>` : ''}
                </div>
            </div>
        `;
        playChime(perfect ? [523, 659, 784, 1046] : [523, 659]);
        return;
    }

    if (progressElem) progressElem.innerText = `${mruIndex + 1} / ${total}`;
    if (scoreElem) scoreElem.innerText = mruScore;

    const q = filteredMruQuestions[mruIndex];
    container.innerHTML = `
        <div class="level-tabs" style="display: flex; gap: 10px; justify-content: center; margin-bottom: 20px;">
            <button id="mruLvl1Btn" class="lvl-btn ${currentMruLevel === 1 ? 'active' : ''}" onclick="setMruLevel(1)">Level 1: Easy</button>
            <button id="mruLvl2Btn" class="lvl-btn ${currentMruLevel === 2 ? 'active' : ''}" ${unlockedMruLevel < 2 ? 'disabled' : ''} onclick="setMruLevel(2)">Level 2: Medium ${unlockedMruLevel < 2 ? '🔒' : ''}</button>
            <button id="mruLvl3Btn" class="lvl-btn ${currentMruLevel === 3 ? 'active' : ''}" ${unlockedMruLevel < 3 ? 'disabled' : ''} onclick="setMruLevel(3)">Level 3: Hard ${unlockedMruLevel < 3 ? '🔒' : ''}</button>
        </div>
        <div class="quiz-question">
            <div class="quiz-question-icon">${q.icon}</div>
            <h3>${q.q}</h3>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `<button class="quiz-option" onclick="answerMauritius(${i})">${opt}</button>`).join('')}
            </div>
        </div>
    `;
}

function answerMauritius(choice) {
    const q = filteredMruQuestions[mruIndex];
    const buttons = document.querySelectorAll('#mruContainer .quiz-option');
    buttons.forEach(btn => btn.onclick = null);

    if (buttons[q.a]) buttons[q.a].classList.add('correct');

    if (choice === q.a) {
        playSound(800, 'sine', 0.2);
        mruScore++;
    } else {
        playSound(200, 'sawtooth', 0.3);
        if (buttons[choice]) buttons[choice].classList.add('incorrect');
    }

    recordAnswer('mauritius', choice === q.a, q.q || '');

    setTimeout(() => {
        mruIndex++;
        renderMauritiusQuestion();
    }, 1200);
}
window.answerMauritius = answerMauritius;

// ============================================================
// GAME 4: PAC-MAN ENGINE
// ============================================================
const canvas = document.getElementById('pacmanCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

const pacMap = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,1,2,2,2,2,2,1],
    [1,3,1,2,1,2,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,1,2,1],
    [1,2,1,1,1,0,1,1,1,2,1],
    [1,2,2,2,0,0,0,2,2,2,1],
    [1,2,1,1,1,1,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,1,2,1],
    [1,3,1,2,1,1,1,2,1,3,1],
    [1,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1]
];

const tileSize = 40;
let pacGrid = [];
let pacman = { x: 5, y: 5, dirX: 0, dirY: 0, nextDirX: 0, nextDirY: 0 };
let ghosts = [];

let pScore = 0;
let pLives = 3;
let powerPelletTimer = 0;
let pacGameInterval = null;
let pacIsPaused = false;

function setPacmanDir(dx, dy) {
    pacman.nextDirX = dx;
    pacman.nextDirY = dy;
}
window.setPacmanDir = setPacmanDir;

function resetPacmanGame() {
    pScore = 0;
    pLives = 3;
    powerPelletTimer = 0;
    pacIsPaused = false;

    const pauseBtn = document.getElementById('pausePacmanBtn');
    if (pauseBtn) pauseBtn.innerText = '⏸️ Pause';

    pacGrid = pacMap.map(row => [...row]);
    pacman = { x: 5, y: 5, dirX: 0, dirY: 0, nextDirX: 0, nextDirY: 0 };

    ghosts = [
        { x: 1, y: 1, color: '#FF0000', dirX: 1, dirY: 0 },
        { x: 9, y: 1, color: '#FFB8FF', dirX: -1, dirY: 0 },
        { x: 1, y: 9, color: '#00FFFF', dirX: 0, dirY: -1 },
        { x: 9, y: 9, color: '#FFB852', dirX: 0, dirY: 1 }
    ];

    updatePacmanHUD();

    if (pacGameInterval) clearInterval(pacGameInterval);
    pacGameInterval = setInterval(pacmanGameLoop, 220);
}
window.resetPacmanGame = resetPacmanGame;

function togglePausePacman() {
    pacIsPaused = !pacIsPaused;
    const pauseBtn = document.getElementById('pausePacmanBtn');
    if (pauseBtn) pauseBtn.innerText = pacIsPaused ? '▶️ Resume' : '⏸️ Pause';
    playSound(400);
}
window.togglePausePacman = togglePausePacman;

function updatePacmanHUD() {
    const sElem = document.getElementById('score');
    const lElem = document.getElementById('lives');
    if (sElem) sElem.innerText = pScore;
    if (lElem) lElem.innerText = '❤️'.repeat(Math.max(0, pLives));
}

function pacmanGameLoop() {
    if (pacIsPaused || !ctx) return;

    if (powerPelletTimer > 0) powerPelletTimer--;

    // Move Pac-man
    if (canMove(pacman.x + pacman.nextDirX, pacman.y + pacman.nextDirY)) {
        pacman.dirX = pacman.nextDirX;
        pacman.dirY = pacman.nextDirY;
    }

    if (canMove(pacman.x + pacman.dirX, pacman.y + pacman.dirY)) {
        pacman.x += pacman.dirX;
        pacman.y += pacman.dirY;
    }

    // Check Pellets
    const currentCell = pacGrid[pacman.y][pacman.x];
    if (currentCell === 2) {
        pacGrid[pacman.y][pacman.x] = 0;
        pScore += 10;
        playSound(600, 'sine', 0.05);
    } else if (currentCell === 3) {
        pacGrid[pacman.y][pacman.x] = 0;
        pScore += 50;
        powerPelletTimer = 30; // ~6.6 seconds
        playSound(900, 'triangle', 0.2);
    }

    if (pScore >= 100) unlockBadge('gamer');

    // Move Ghosts
    ghosts.forEach(g => {
        const validDirs = [];
        const directions = [
            { x: 0, y: -1 },
            { x: 0, y: 1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 }
        ];

        directions.forEach(d => {
            if (canMove(g.x + d.x, g.y + d.y)) validDirs.push(d);
        });

        if (validDirs.length > 0) {
            const chosen = validDirs[Math.floor(Math.random() * validDirs.length)];
            g.x += chosen.x;
            g.y += chosen.y;
        }

        // Collision Check
        if (g.x === pacman.x && g.y === pacman.y) {
            if (powerPelletTimer > 0) {
                // Eat ghost
                g.x = 5;
                g.y = 4;
                pScore += 200;
                playSound(1000, 'sine', 0.2);
            } else {
                // Lose life
                pLives--;
                playSound(150, 'sawtooth', 0.4);
                pacman.x = 5;
                pacman.y = 5;
                pacman.dirX = 0;
                pacman.dirY = 0;

                if (pLives <= 0) {
                    clearInterval(pacGameInterval);
                    alert(`🎮 Game Over! Your Final Score: ${pScore}`);
                    addStars(Math.floor(pScore / 10));
                }
            }
        }
    });

    updatePacmanHUD();
    drawPacmanCanvas();
}

function canMove(x, y) {
    if (x < 0 || x >= 11 || y < 0 || y >= 11) return false;
    return pacGrid[y][x] !== 1;
}

function drawPacmanCanvas() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let r = 0; r < 11; r++) {
        for (let c = 0; c < 11; c++) {
            const tile = pacGrid[r][c];
            if (tile === 1) {
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(c * tileSize, r * tileSize, tileSize, tileSize);
                ctx.strokeStyle = '#3b82f6';
                ctx.strokeRect(c * tileSize, r * tileSize, tileSize, tileSize);
            } else if (tile === 2) {
                ctx.fillStyle = '#fbbf24';
                ctx.beginPath();
                ctx.arc(c * tileSize + 20, r * tileSize + 20, 4, 0, Math.PI * 2);
                ctx.fill();
            } else if (tile === 3) {
                ctx.fillStyle = '#f59e0b';
                ctx.beginPath();
                ctx.arc(c * tileSize + 20, r * tileSize + 20, 9, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    // Draw Pac-man
    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.arc(pacman.x * tileSize + 20, pacman.y * tileSize + 20, 16, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacman.x * tileSize + 20, pacman.y * tileSize + 20);
    ctx.fill();

    // Draw Ghosts
    ghosts.forEach(g => {
        ctx.fillStyle = (powerPelletTimer > 0) ? '#3b82f6' : g.color;
        ctx.beginPath();
        ctx.arc(g.x * tileSize + 20, g.y * tileSize + 20, 15, 0, Math.PI * 2);
        ctx.fill();
    });
}

window.addEventListener('keydown', e => {
    const pTab = document.getElementById('pacman-game');
    if (!pTab || pTab.style.display === 'none') return;

    if (e.key === 'ArrowUp') setPacmanDir(0, -1);
    if (e.key === 'ArrowDown') setPacmanDir(0, 1);
    if (e.key === 'ArrowLeft') setPacmanDir(-1, 0);
    if (e.key === 'ArrowRight') setPacmanDir(1, 0);
});

// ============================================================
// GAME 5: MEMORY MATCH ENGINE
// ============================================================
const memoryIcons = ['🦁', '🦄', '🤖', '🦖', '🧜‍♀️', '🚀'];
let memoryCards = [];
let flippedCards = [];
let memoryMoves = 0;
let memoryMatches = 0;

function initMemoryGame() {
    const grid = document.getElementById('memoryGrid');
    if (!grid) return;

    grid.innerHTML = '';
    memoryCards = shuffleArray([...memoryIcons, ...memoryIcons]);
    flippedCards = [];
    memoryMoves = 0;
    memoryMatches = 0;

    const movesElem = document.getElementById('memoryMoves');
    const matchesElem = document.getElementById('memoryMatches');
    if (movesElem) movesElem.innerText = 0;
    if (matchesElem) matchesElem.innerText = '0 / 6';

    memoryCards.forEach((icon, idx) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.icon = icon;
        card.dataset.index = idx;
        card.innerHTML = `<span class="card-inner">❓</span>`;
        card.onclick = () => flipMemoryCard(card);
        grid.appendChild(card);
    });
}
window.initMemoryGame = initMemoryGame;

function flipMemoryCard(card) {
    if (flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;

    playSound(500);
    card.classList.add('flipped');
    card.querySelector('.card-inner').innerText = card.dataset.icon;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        memoryMoves++;
        const movesElem = document.getElementById('memoryMoves');
        if (movesElem) movesElem.innerText = memoryMoves;

        const [c1, c2] = flippedCards;
        if (c1.dataset.icon === c2.dataset.icon) {
            playSound(900, 'sine', 0.2);
            c1.classList.add('matched');
            c2.classList.add('matched');
            memoryMatches++;

            const matchesElem = document.getElementById('memoryMatches');
            if (matchesElem) matchesElem.innerText = `${memoryMatches} / 6`;

            flippedCards = [];

            if (memoryMatches === 6) {
                unlockBadge('memoryMaster');
                addStars(15);
                launchConfetti(40);
                setTimeout(() => alert(`🧩 Amazing! Memory match complete in ${memoryMoves} moves!`), 300);
            }
        } else {
            setTimeout(() => {
                playSound(200, 'sawtooth', 0.2);
                c1.classList.remove('flipped');
                c2.classList.remove('flipped');
                c1.querySelector('.card-inner').innerText = '❓';
                c2.querySelector('.card-inner').innerText = '❓';
                flippedCards = [];
            }, 900);
        }
    }
}

// ============================================================
// GAME 6: BODY PARTS EXPLORER
// ============================================================
const BODY_PARTS = [
    { id: 'head',      name: 'Head',      icon: '🧠', fact: 'Your head protects your brain, which is the boss of your whole body! It tells you when to move, think and giggle.' },
    { id: 'hair',      name: 'Hair',      icon: '💇', fact: 'Hair keeps your head warm and grows about 1 centimetre every month. You have around 100,000 hairs up there!' },
    { id: 'eyes',      name: 'Eyes',      icon: '👀', fact: 'Your two eyes let you see colours and shapes. You blink about 15 times a minute to keep them clean and wet!' },
    { id: 'ears',      name: 'Ears',      icon: '👂', fact: 'Ears catch sounds and also help you keep your balance so you do not fall over when you spin!' },
    { id: 'nose',      name: 'Nose',      icon: '👃', fact: 'Your nose warms up the air you breathe and can remember over 1 trillion different smells!' },
    { id: 'mouth',     name: 'Mouth',     icon: '👄', fact: 'Your mouth helps you eat, talk and smile. Kids have 20 baby teeth hiding inside!' },
    { id: 'neck',      name: 'Neck',      icon: '🧣', fact: 'Your neck holds your head up and lets you nod yes and shake no. It has 7 bones inside!' },
    { id: 'shoulders', name: 'Shoulders', icon: '🤷', fact: 'Shoulders are the most bendy joints in your body. They let your arms swing in a big circle!' },
    { id: 'chest',     name: 'Chest',     icon: '❤️', fact: 'Your chest protects your heart and lungs behind a cage of 24 ribs!' },
    { id: 'arms',      name: 'Arms',      icon: '💪', fact: 'Arms let you hug, throw and carry things. The muscle on top is called the biceps!' },
    { id: 'hands',     name: 'Hands',     icon: '🖐️', fact: 'Each hand has 27 bones and 5 fingers. Your fingerprints are special — nobody else has the same ones!' },
    { id: 'tummy',     name: 'Tummy',     icon: '🍎', fact: 'Your tummy holds your stomach, which turns your breakfast into energy for playing!' },
    { id: 'knees',     name: 'Knees',     icon: '🦵', fact: 'Knees are hinges like a door. They bend so you can run, jump and sit down!' },
    { id: 'legs',      name: 'Legs',      icon: '🏃', fact: 'Your legs have the longest bone in your body — the femur — and they carry you everywhere!' },
    { id: 'feet',      name: 'Feet',      icon: '🦶', fact: 'Feet keep you balanced. Each foot has 26 bones and lots of tickly nerve endings!' },
    { id: 'back',      name: 'Back',      icon: '🔙', fact: 'Your back has a bendy spine made of 33 little bones so you can twist and bend over!' },
    { id: 'elbows',    name: 'Elbows',    icon: '💪', fact: 'Elbows let your arms fold up. The tingly funny bone spot is really a nerve!' },
    { id: 'heels',     name: 'Heels',     icon: '🦶', fact: 'Your heel bone is the biggest bone in your foot and takes your weight when you walk!' }
];

// The figure has two faces (front / back). These helpers keep every
// lookup view-aware so nothing has to know which SVG it is dealing with.
function getBodySvgs() {
    return [document.getElementById('bodySvgFront'), document.getElementById('bodySvgBack')].filter(Boolean);
}

function getActiveBodySvg() {
    return document.getElementById(bodyView === 'front' ? 'bodySvgFront' : 'bodySvgBack');
}

// Which view(s) can show a given part
function getViewsForPart(id) {
    const views = [];
    const front = document.getElementById('bodySvgFront');
    const back  = document.getElementById('bodySvgBack');
    if (front && front.querySelector(`.body-part[data-part="${id}"]`)) views.push('front');
    if (back  && back.querySelector(`.body-part[data-part="${id}"]`))  views.push('back');
    return views;
}

// Unique parts across BOTH views (a part on both faces counts once)
function getBodyHotspotIds() {
    const ids = new Set();
    getBodySvgs().forEach(svg =>
        svg.querySelectorAll('.body-part').forEach(g => ids.add(g.dataset.part)));
    return ids.size ? [...ids] : BODY_PARTS.map(p => p.id);
}

function getBodyTotal() {
    return getBodyHotspotIds().length;
}

let bodyMode = 'explore';
let bodyScore = 0;
let bodyDiscovered = new Set();
let bodyTargetId = null;
let bodyRoundQueue = [];
let bodyLocked = false;
let bodyLastSpoken = '';
let bodyView = 'front';

function getBodyPart(id) {
    return BODY_PARTS.find(p => p.id === id);
}

function initBodyGame() {
    const svgs = getBodySvgs();
    if (!svgs.length) return;

    bodyScore = 0;
    bodyDiscovered = new Set();
    bodyTargetId = null;
    bodyLocked = false;

    // Wire up hotspots once on both faces (click + keyboard for accessibility)
    svgs.forEach(svg => {
        svg.querySelectorAll('.body-part').forEach(group => {
            if (group.dataset.wired === 'yes') return;
            group.dataset.wired = 'yes';
            group.addEventListener('click', () => handleBodyPartClick(group.dataset.part));
            group.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleBodyPartClick(group.dataset.part);
                }
            });
        });
    });

    setBodyView(bodyView, { silent: true, instant: true });
    clearBodyHighlights();
    renderBodyChecklist();
    updateBodyStats();

    if (bodyMode === 'explore') {
        setBodyPrompt('Tap any part, then press Turn Around to see the back! 🔍');
        showBodyInfo(null);
        clearBodyChoices();
    } else {
        startBodyRound();
    }
}
window.initBodyGame = initBodyGame;

function setBodyMode(mode, evt) {
    playSound(450);
    bodyMode = mode;

    document.querySelectorAll('.body-mode-btn').forEach(b => b.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');

    const label = document.getElementById('bodyModeLabel');
    if (label) {
        label.innerText = mode === 'explore' ? 'Explore' : (mode === 'find' ? 'Find the Part' : 'Label It');
    }
    initBodyGame();

    // Explain the mode out loud so kids who cannot read yet still know what to do.
    const intros = {
        explore: 'Explore mode! Tap any part of the body and I will tell you all about it.',
        find:    'Find the part! I will name a body part, and you tap it on the picture.',
        spell:   'Label it! Look at the glowing part, then choose its correct name.'
    };
    setTimeout(() => speakText(intros[mode] || ''), 220);
}
window.setBodyMode = setBodyMode;

function updateBodyStats() {
    const foundElem = document.getElementById('bodyFound');
    const scoreElem = document.getElementById('bodyScore');
    if (foundElem) foundElem.innerText = `${bodyDiscovered.size} / ${getBodyTotal()}`;
    if (scoreElem) scoreElem.innerText = bodyScore;
}

function setBodyPrompt(text) {
    const el = document.getElementById('bodyPrompt');
    if (el) el.innerText = text;
}

function clearBodyChoices() {
    const box = document.getElementById('bodyChoices');
    if (box) box.innerHTML = '';
}

function clearBodyHighlights() {
    getBodySvgs().forEach(svg => {
        svg.classList.remove('has-target');
        svg.querySelectorAll('.body-part').forEach(g => {
            g.classList.remove('selected', 'correct-flash', 'wrong-flash', 'target-glow');
            g.classList.toggle('found-mark', bodyDiscovered.has(g.dataset.part));
        });
    });
    removeBodyTargetRing();
}

// ---- Rotation ----
function setBodyView(view, opts = {}) {
    if (view !== 'front' && view !== 'back') return;
    const changed = bodyView !== view;
    bodyView = view;

    const stage = document.getElementById('bodyStage');
    if (stage) stage.classList.toggle('flipped', view === 'back');

    const pill = document.getElementById('bodyViewPill');
    if (pill) pill.innerText = view === 'front' ? 'Front' : 'Back';

    const label = document.getElementById('bodyRotateLabel');
    if (label) label.innerText = view === 'front' ? 'Turn Around' : 'Turn Back';

    // hidden face must not be reachable by keyboard
    getBodySvgs().forEach(svg => {
        const isActive = (svg.id === 'bodySvgFront') === (view === 'front');
        svg.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        svg.querySelectorAll('.body-part').forEach(g =>
            g.setAttribute('tabindex', isActive ? '0' : '-1'));
    });

    if (changed && !opts.silent) {
        playSound(520, 'triangle', 0.18);
        speakText(view === 'front' ? 'Now you see the front of the body.'
                                   : 'Now you see the back of the body.');
    }
    // ring is positioned per-face, so redraw after the flip settles
    if (bodyTargetId && bodyMode === 'spell') {
        removeBodyTargetRing();
        setTimeout(() => drawBodyTargetRing(bodyTargetId), opts.instant ? 0 : 700);
    }
}
window.setBodyView = setBodyView;

function flipBodyView() {
    setBodyView(bodyView === 'front' ? 'back' : 'front');
}
window.flipBodyView = flipBodyView;

// ---- Target ring overlay (Label It mode) ----
function removeBodyTargetRing() {
    document.querySelectorAll('.body-target-ring, .body-target-arrow').forEach(el => el.remove());
}

function drawBodyTargetRing(partId) {
    removeBodyTargetRing();
    const holder = document.querySelector('.body-svg-holder');
    const svg = getActiveBodySvg();
    if (!holder || !svg) return;

    const group = svg.querySelector(`.body-part[data-part="${partId}"]`);
    if (!group || typeof group.getBoundingClientRect !== 'function') return;

    const gb = group.getBoundingClientRect();
    const hb = holder.getBoundingClientRect();
    if (!gb.width && !gb.height) return;

    const pad = 14;
    const size = Math.max(gb.width, gb.height) + pad * 2;
    const cx = gb.left - hb.left + gb.width / 2;
    const cy = gb.top - hb.top + gb.height / 2;

    const ring = document.createElement('div');
    ring.className = 'body-target-ring';
    ring.style.width = `${size}px`;
    ring.style.height = `${size}px`;
    ring.style.left = `${cx - size / 2}px`;
    ring.style.top = `${cy - size / 2}px`;
    holder.appendChild(ring);

    const arrow = document.createElement('div');
    arrow.className = 'body-target-arrow';
    arrow.innerText = '👉';
    arrow.style.left = `${cx - size / 2 - 34}px`;
    arrow.style.top = `${cy - 16}px`;
    holder.appendChild(arrow);
}

function renderBodyChecklist() {
    const box = document.getElementById('bodyChecklist');
    if (!box) return;
    box.innerHTML = '';
    getBodyHotspotIds().forEach(id => {
        const part = getBodyPart(id);
        if (!part) return;
        const chip = document.createElement('span');
        chip.className = 'body-chip' + (bodyDiscovered.has(id) ? ' found' : '');
        chip.innerText = bodyDiscovered.has(id) ? `${part.icon} ${part.name}` : `❔ ${part.name}`;
        box.appendChild(chip);
    });
}

function showBodyInfo(partId) {
    const iconEl = document.getElementById('bodyInfoIcon');
    const titleEl = document.getElementById('bodyInfoTitle');
    const factEl = document.getElementById('bodyInfoFact');
    if (!iconEl || !titleEl || !factEl) return;

    if (!partId) {
        iconEl.innerText = '👋';
        titleEl.innerText = 'Meet your body!';
        factEl.innerText = 'Click or tap a body part on the picture to hear its name and learn a cool fact about it.';
        bodyLastSpoken = '';
        return;
    }

    const part = getBodyPart(partId);
    if (!part) return;
    iconEl.innerText = part.icon;
    titleEl.innerText = `This is the ${part.name}!`;
    factEl.innerText = part.fact;
    bodyLastSpoken = `${part.name}. ${part.fact}`;
}

function sayBodyPart() {
    const text = bodyLastSpoken || 'Tap a body part to begin!';
    speakText(text);
}
window.sayBodyPart = sayBodyPart;

function markBodyDiscovered(partId) {
    if (bodyDiscovered.has(partId)) return;
    bodyDiscovered.add(partId);
    renderBodyChecklist();
    updateBodyStats();

    if (bodyDiscovered.size === 1) {
        unlockBadge('bodyExplorer');
    }
    if (bodyDiscovered.size >= getBodyTotal()) {
        unlockBadge('bodyDoctor');
        addStars(20);
        launchConfetti(45);
        playChime([523, 659, 784, 1046]);
        showToast('You found every body part! 🧍✨', '🩺', 4200);
        setBodyPrompt('Amazing! You know your whole body! 🎉');
        setTimeout(() => speakText('Amazing work! You found every single body part. You are a little doctor now!'), 500);
    }
}

function handleBodyPartClick(partId) {
    if (bodyLocked) return;
    const part = getBodyPart(partId);
    if (!part) return;

    const svg = getActiveBodySvg();
    const group = svg ? svg.querySelector(`.body-part[data-part="${partId}"]`) : null;

    if (bodyMode === 'explore') {
        playSound(620);
        getBodySvgs().forEach(s2 => s2.querySelectorAll('.body-part').forEach(g => g.classList.remove('selected')));
        if (group) group.classList.add('selected');
        showBodyInfo(partId);
        const isNew = !bodyDiscovered.has(partId);
        speakText(`${part.name}! ${part.fact}${isNew ? ' Great discovery!' : ''}`);
        markBodyDiscovered(partId);
        addStars(2);
        return;
    }

    if (bodyMode === 'find') {
        if (partId === bodyTargetId) {
            bodyLocked = true;
            playSound(900, 'sine', 0.2);
            if (group) group.classList.add('correct-flash');
            showBodyInfo(partId);
            speakText(`Yes! That is the ${part.name}. ${part.fact}`);
            bodyScore += 10;
            recordAnswer('body', true, `Find: ${part.name}`);
            markBodyDiscovered(partId);
            addStars(3);
            setBodyPrompt(`✅ Correct! That is the ${part.name}!`);
            updateBodyStats();
            launchConfetti(12);
            setTimeout(() => { bodyLocked = false; startBodyRound(); }, 2200);
        } else {
            playSound(200, 'sawtooth', 0.25);
            if (group) {
                group.classList.add('wrong-flash');
                setTimeout(() => group.classList.remove('wrong-flash'), 520);
            }
            recordAnswer('body', false, `Find: looking for ${getBodyPart(bodyTargetId) ? getBodyPart(bodyTargetId).name : ''}`);
            setBodyPrompt(`Oops, that is the ${part.name}. Try again! 🔍`);
            speakText(`That is the ${part.name}. Try again!`);
        }
        return;
    }

    // In 'spell' (Label It) mode the picture is not the answer surface,
    // but tapping still reads out the part for extra learning.
    playSound(500);
    speakText(`${part.name}. ${part.fact}`);
}
window.handleBodyPartClick = handleBodyPartClick;

function startBodyRound() {
    clearBodyHighlights();
    clearBodyChoices();

    const ids = getBodyHotspotIds();
    if (!bodyRoundQueue.length) {
        bodyRoundQueue = shuffleArray(ids);
    }
    // Avoid immediately repeating the same target
    let next = bodyRoundQueue.pop();
    if (next === bodyTargetId && bodyRoundQueue.length) {
        bodyRoundQueue.unshift(next);
        next = bodyRoundQueue.pop();
    }
    bodyTargetId = next;

    const target = getBodyPart(bodyTargetId);
    if (!target) return;

    if (bodyMode === 'find') {
        const views = getViewsForPart(bodyTargetId);
        const hint = (views.length === 1 && views[0] !== bodyView)
            ? ' (try turning around!)' : '';
        setBodyPrompt(`🎯 Can you tap the ${target.name}?${hint}`);
        speakText(`Where is the ${target.name}?`);
        showBodyInfo(null);
        const titleEl = document.getElementById('bodyInfoTitle');
        const iconEl = document.getElementById('bodyInfoIcon');
        const factEl = document.getElementById('bodyInfoFact');
        if (titleEl) titleEl.innerText = `Find the ${target.name}!`;
        if (iconEl) iconEl.innerText = '🎯';
        if (factEl) factEl.innerText = 'Tap the matching part on the picture. Take your time!';
        bodyLastSpoken = `Where is the ${target.name}?`;
    } else {
        // Label It: make sure the target is on the face we are showing,
        // then glow it hard and ring it so it cannot be missed.
        const views = getViewsForPart(bodyTargetId);
        if (views.length && !views.includes(bodyView)) {
            setBodyView(views[0], { silent: true });
        }

        const svg = getActiveBodySvg();
        const group = svg ? svg.querySelector(`.body-part[data-part="${bodyTargetId}"]`) : null;
        if (group) group.classList.add('target-glow');
        if (svg) svg.classList.add('has-target');
        setTimeout(() => drawBodyTargetRing(bodyTargetId), 60);

        setBodyPrompt('🔤 What is the glowing part called?');
        const iconEl = document.getElementById('bodyInfoIcon');
        const titleEl = document.getElementById('bodyInfoTitle');
        const factEl = document.getElementById('bodyInfoFact');
        if (iconEl) iconEl.innerText = '❓';
        if (titleEl) titleEl.innerText = 'Name that part!';
        if (factEl) factEl.innerText = 'Look at the glowing spot, then pick the right name below.';
        bodyLastSpoken = 'What is the glowing part called?';

        const wrongPool = shuffleArray(ids.filter(i => i !== bodyTargetId)).slice(0, 3);
        const choices = shuffleArray([bodyTargetId, ...wrongPool]);
        renderBodyChoices(choices);
    }
}

function renderBodyChoices(choiceIds) {
    const box = document.getElementById('bodyChoices');
    if (!box) return;
    box.innerHTML = '';

    choiceIds.forEach(id => {
        const part = getBodyPart(id);
        if (!part) return;
        const btn = document.createElement('button');
        btn.className = 'body-choice-btn';
        btn.innerText = `${part.icon} ${part.name}`;
        btn.onclick = () => answerBodyLabel(id, btn);
        box.appendChild(btn);
    });
}

function answerBodyLabel(chosenId, btn) {
    if (bodyLocked) return;
    bodyLocked = true;

    const box = document.getElementById('bodyChoices');
    const buttons = box ? [...box.querySelectorAll('.body-choice-btn')] : [];
    buttons.forEach(b => b.disabled = true);

    const target = getBodyPart(bodyTargetId);

    recordAnswer('body', chosenId === bodyTargetId, `Label: ${target ? target.name : ''}`);

    if (chosenId === bodyTargetId) {
        playSound(900, 'sine', 0.2);
        btn.classList.add('correct');
        bodyScore += 10;
        markBodyDiscovered(bodyTargetId);
        addStars(3);
        setBodyPrompt(`✅ Yes! That is the ${target.name}!`);
        showBodyInfo(bodyTargetId);
        speakText(`Correct! ${target.name}. ${target.fact}`);
        launchConfetti(12);
    } else {
        playSound(200, 'sawtooth', 0.25);
        btn.classList.add('wrong');
        const correctBtn = buttons.find(b => b.innerText.includes(target.name));
        if (correctBtn) correctBtn.classList.add('correct');
        setBodyPrompt(`Not quite — that was the ${target.name}. 💡`);
        showBodyInfo(bodyTargetId);
        speakText(`Almost! It was the ${target.name}.`);
    }

    getBodySvgs().forEach(sv => sv.classList.remove('has-target'));
    removeBodyTargetRing();
    updateBodyStats();
    setTimeout(() => { bodyLocked = false; startBodyRound(); }, 2400);
}
window.answerBodyLabel = answerBodyLabel;



// ============================================================
// QUIZ RESULT TRACKING (per kid, per activity)
// Every answer a kid gives is recorded so the admin can see
// exactly how many they got right in each activity.
// ============================================================
const ACTIVITY_LABELS = {
    duo:      { icon: '🦉', name: 'Duolingo Dash' },
    math:     { icon: '🔢', name: 'Math Wizard' },
    trivia:   { icon: '🧠', name: 'Trivia Quiz' },
    mauritius:{ icon: '🇲🇺', name: 'Mauritius History' },
    body:     { icon: '🧍', name: 'Body Parts Explorer' },
    planet:   { icon: '🪐', name: 'Planet Quiz' },
    memory:   { icon: '🧩', name: 'Memory Match' }
};

// In-memory mirror of this kid's stats (also saved to Firestore).
let quizStats = {};

function blankActivityStat() {
    return { correct: 0, wrong: 0, attempts: 0, best: 0, lastPlayed: null };
}

/**
 * Record one answer.
 * @param {string} activity - key from ACTIVITY_LABELS
 * @param {boolean} isCorrect
 * @param {string} questionText - optional, for the recent-answers log
 */
function recordAnswer(activity, isCorrect, questionText = '') {
    if (!quizStats[activity]) quizStats[activity] = blankActivityStat();
    const st = quizStats[activity];
    st.attempts++;
    if (isCorrect) st.correct++; else st.wrong++;
    st.lastPlayed = Date.now();

    if (!quizStats._recent) quizStats._recent = [];
    quizStats._recent.unshift({
        activity,
        correct: !!isCorrect,
        q: String(questionText).slice(0, 90),
        at: Date.now()
    });
    quizStats._recent = quizStats._recent.slice(0, 40);

    saveQuizStats();
}
window.recordAnswer = recordAnswer;

/** Record a finished round's score (for "best score" tracking). */
function recordRoundScore(activity, score, total) {
    if (!quizStats[activity]) quizStats[activity] = blankActivityStat();
    const st = quizStats[activity];
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    if (pct > (st.best || 0)) st.best = pct;
    st.rounds = (st.rounds || 0) + 1;
    st.lastPlayed = Date.now();
    saveQuizStats();
}
window.recordRoundScore = recordRoundScore;

let quizStatsSaveTimer = null;
async function saveQuizStats() {
    if (!currentActiveId || currentRole !== 'kid') return;
    // debounce so rapid answers do not spam Firestore
    if (quizStatsSaveTimer) clearTimeout(quizStatsSaveTimer);
    quizStatsSaveTimer = setTimeout(async () => {
        try {
            await setDoc(doc(db, "kidStats", currentActiveId), {
                stats: quizStats,
                name: (cachedKidProfiles.find(p => p.id === currentActiveId) || {}).name || '',
                updatedAt: Date.now()
            });
        } catch (e) {
            console.error('Stats save error:', e);
        }
    }, 800);
}

async function loadQuizStats() {
    quizStats = {};
    if (!currentActiveId) return;
    try {
        const snap = await getDoc(doc(db, "kidStats", currentActiveId));
        if (snap.exists()) quizStats = snap.data().stats || {};
    } catch (e) {
        console.error('Stats load error:', e);
    }
}


// ============================================================
// ADMIN: KID PERFORMANCE REPORTS
// ============================================================
let allKidStats = {};      // kidId -> stats object
let allKidProgress = {};   // kidId -> progress object
let adminReportKid = null; // null = overview, otherwise a kid id

async function fetchAllKidData() {
    allKidStats = {};
    allKidProgress = {};
    await Promise.all(cachedKidProfiles.map(async (p) => {
        try {
            const [statSnap, progSnap] = await Promise.all([
                getDoc(doc(db, "kidStats", p.id)),
                getDoc(doc(db, "kidProgress", p.id))
            ]);
            allKidStats[p.id] = statSnap.exists() ? (statSnap.data().stats || {}) : {};
            allKidProgress[p.id] = progSnap.exists() ? progSnap.data() : {};
        } catch (e) {
            console.error('Report fetch error for', p.name, e);
            allKidStats[p.id] = {};
            allKidProgress[p.id] = {};
        }
    }));
}

function totalsFor(stats) {
    let correct = 0, wrong = 0, attempts = 0;
    Object.keys(stats || {}).forEach(k => {
        if (k.startsWith('_')) return;
        const st = stats[k] || {};
        correct += st.correct || 0;
        wrong += st.wrong || 0;
        attempts += st.attempts || 0;
    });
    const pct = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;
    return { correct, wrong, attempts, pct };
}

function accuracyClass(pct) {
    if (pct >= 80) return 'acc-great';
    if (pct >= 60) return 'acc-ok';
    if (pct > 0)   return 'acc-low';
    return 'acc-none';
}

async function openReportsModal() {
    if (currentRole !== 'admin') return;
    playSound(600);
    adminReportKid = null;
    const modal = document.getElementById('reportsModal');
    if (modal) modal.style.display = 'flex';
    const body = document.getElementById('reportsBody');
    if (body) body.innerHTML = '<p class="rep-loading">⏳ Loading results…</p>';
    await fetchAllKidData();
    renderReports();
}
window.openReportsModal = openReportsModal;

function closeReportsModal() {
    const m = document.getElementById('reportsModal');
    if (m) m.style.display = 'none';
    playSound(400);
}
window.closeReportsModal = closeReportsModal;

function closeReportsModalOnBg(e) {
    if (e.target.id === 'reportsModal') closeReportsModal();
}
window.closeReportsModalOnBg = closeReportsModalOnBg;

function renderReports() {
    const body = document.getElementById('reportsBody');
    if (!body) return;

    if (!cachedKidProfiles.length) {
        body.innerHTML = '<p class="rep-loading">No kid profiles yet. Add one with ➕ Add Kid.</p>';
        return;
    }

    if (adminReportKid) { renderKidReport(adminReportKid); return; }

    // ---------- Overview: every kid, ranked ----------
    const rows = cachedKidProfiles.map(p => {
        const t = totalsFor(allKidStats[p.id]);
        const prog = allKidProgress[p.id] || {};
        return { p, t, stars: prog.stars || 0, level: prog.level || 1, badges: (prog.badges || []).length };
    }).sort((a, b) => b.t.correct - a.t.correct);

    const classCorrect = rows.reduce((s, r) => s + r.t.correct, 0);
    const classAttempts = rows.reduce((s, r) => s + r.t.attempts, 0);
    const classPct = classAttempts ? Math.round((classCorrect / classAttempts) * 100) : 0;

    body.innerHTML = `
        <div class="rep-summary">
            <div class="rep-sum-card">
                <span class="rs-num">${cachedKidProfiles.length}</span>
                <span class="rs-lab">Explorers</span>
            </div>
            <div class="rep-sum-card">
                <span class="rs-num">${classAttempts}</span>
                <span class="rs-lab">Questions Answered</span>
            </div>
            <div class="rep-sum-card">
                <span class="rs-num">${classCorrect}</span>
                <span class="rs-lab">Correct</span>
            </div>
            <div class="rep-sum-card ${accuracyClass(classPct)}">
                <span class="rs-num">${classPct}%</span>
                <span class="rs-lab">Class Accuracy</span>
            </div>
        </div>

        <p class="rep-hint">👇 Click a kid to see a full subject-by-subject breakdown.</p>

        <div class="rep-list">
            ${rows.map((r, i) => `
                <button class="rep-row" onclick="showKidReport('${r.p.id}')">
                    <span class="rep-rank">${i === 0 && r.t.correct > 0 ? '🥇' : (i === 1 && r.t.correct > 0 ? '🥈' : (i === 2 && r.t.correct > 0 ? '🥉' : '#' + (i + 1)))}</span>
                    <span class="rep-avatar">${r.p.avatar || '🚀'}</span>
                    <span class="rep-name">
                        ${r.p.name}
                        <small>Lvl ${r.level} · ⭐ ${r.stars} · 🏅 ${r.badges}</small>
                    </span>
                    <span class="rep-score">
                        <strong>${r.t.correct}</strong><small>/${r.t.attempts} right</small>
                    </span>
                    <span class="rep-bar-wrap">
                        <span class="rep-bar ${accuracyClass(r.t.pct)}" style="width:${r.t.pct}%"></span>
                        <span class="rep-pct">${r.t.attempts ? r.t.pct + '%' : '—'}</span>
                    </span>
                </button>`).join('')}
        </div>`;
}

function showKidReport(kidId) {
    adminReportKid = kidId;
    playSound(560);
    renderKidReport(kidId);
}
window.showKidReport = showKidReport;

function backToReportOverview() {
    adminReportKid = null;
    playSound(420);
    renderReports();
}
window.backToReportOverview = backToReportOverview;

function renderKidReport(kidId) {
    const body = document.getElementById('reportsBody');
    const kid = cachedKidProfiles.find(p => p.id === kidId);
    if (!body || !kid) return;

    const stats = allKidStats[kidId] || {};
    const prog = allKidProgress[kidId] || {};
    const t = totalsFor(stats);

    const activityKeys = Object.keys(ACTIVITY_LABELS).filter(k => stats[k] && stats[k].attempts > 0);

    const activityRows = activityKeys.length ? activityKeys.map(k => {
        const st = stats[k];
        const pct = st.attempts ? Math.round((st.correct / st.attempts) * 100) : 0;
        const meta = ACTIVITY_LABELS[k];
        return `
            <div class="rep-act">
                <span class="ra-icon">${meta.icon}</span>
                <span class="ra-name">${meta.name}
                    <small>${st.rounds ? st.rounds + ' rounds · ' : ''}best ${st.best || 0}%</small>
                </span>
                <span class="ra-nums">
                    <strong class="ra-right">${st.correct} ✔</strong>
                    <strong class="ra-wrong">${st.wrong} ✘</strong>
                </span>
                <span class="rep-bar-wrap">
                    <span class="rep-bar ${accuracyClass(pct)}" style="width:${pct}%"></span>
                    <span class="rep-pct">${pct}%</span>
                </span>
            </div>`;
    }).join('') : '<p class="rep-loading">This explorer has not answered any quiz questions yet.</p>';

    const recent = (stats._recent || []).slice(0, 12);
    const recentRows = recent.length ? recent.map(r => {
        const meta = ACTIVITY_LABELS[r.activity] || { icon: '❔', name: r.activity };
        const when = new Date(r.at).toLocaleString(undefined,
            { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        return `<li class="${r.correct ? 'rr-ok' : 'rr-bad'}">
                    <span class="rr-mark">${r.correct ? '✅' : '❌'}</span>
                    <span class="rr-q">${meta.icon} ${r.q || meta.name}</span>
                    <span class="rr-when">${when}</span>
                </li>`;
    }).join('') : '<li class="rep-loading">No answers recorded yet.</li>';

    const weakest = activityKeys.map(k => {
        const st = stats[k];
        return { k, pct: st.attempts ? Math.round((st.correct / st.attempts) * 100) : 0 };
    }).sort((a, b) => a.pct - b.pct)[0];

    body.innerHTML = `
        <button class="rep-back" onclick="backToReportOverview()">◀ All Explorers</button>

        <div class="rep-kid-head">
            <span class="rep-kid-avatar">${kid.avatar || '🚀'}</span>
            <div>
                <h3>${kid.name}</h3>
                <p>Level ${prog.level || 1} · ⭐ ${prog.stars || 0} stars · 🏅 ${(prog.badges || []).length} badges</p>
            </div>
        </div>

        <div class="rep-summary">
            <div class="rep-sum-card"><span class="rs-num">${t.attempts}</span><span class="rs-lab">Answered</span></div>
            <div class="rep-sum-card acc-great"><span class="rs-num">${t.correct}</span><span class="rs-lab">Correct</span></div>
            <div class="rep-sum-card acc-low"><span class="rs-num">${t.wrong}</span><span class="rs-lab">Wrong</span></div>
            <div class="rep-sum-card ${accuracyClass(t.pct)}"><span class="rs-num">${t.pct}%</span><span class="rs-lab">Accuracy</span></div>
        </div>

        ${weakest && weakest.pct < 70 ? `
            <div class="rep-tip">💡 <strong>Needs practice:</strong>
                ${ACTIVITY_LABELS[weakest.k].icon} ${ACTIVITY_LABELS[weakest.k].name} (${weakest.pct}% correct)</div>` : ''}

        <h4 class="rep-sub">📊 Subject Breakdown</h4>
        <div class="rep-acts">${activityRows}</div>

        <h4 class="rep-sub">🕒 Recent Answers</h4>
        <ul class="rep-recent">${recentRows}</ul>

        <div class="rep-actions">
            <button class="solar-tool-btn" onclick="exportKidCSV('${kidId}')">⬇️ Download CSV</button>
            <button class="solar-tool-btn" onclick="resetKidStats('${kidId}')">🧹 Reset Results</button>
        </div>`;
}

function exportKidCSV(kidId) {
    const kid = cachedKidProfiles.find(p => p.id === kidId);
    const stats = allKidStats[kidId] || {};
    if (!kid) return;

    let csv = 'Activity,Correct,Wrong,Total,Accuracy %,Best Score %\n';
    Object.keys(ACTIVITY_LABELS).forEach(k => {
        const st = stats[k];
        if (!st || !st.attempts) return;
        const pct = Math.round((st.correct / st.attempts) * 100);
        csv += `"${ACTIVITY_LABELS[k].name}",${st.correct},${st.wrong},${st.attempts},${pct},${st.best || 0}\n`;
    });
    const t = totalsFor(stats);
    csv += `"TOTAL",${t.correct},${t.wrong},${t.attempts},${t.pct},\n`;

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${kid.name}-results.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Downloaded ${kid.name}'s results`, '⬇️', 3000);
}
window.exportKidCSV = exportKidCSV;

async function resetKidStats(kidId) {
    const kid = cachedKidProfiles.find(p => p.id === kidId);
    if (!kid) return;
    if (!confirm(`Clear all quiz results for ${kid.name}? Stars and badges are kept.`)) return;
    try {
        await setDoc(doc(db, "kidStats", kidId), { stats: {}, name: kid.name, updatedAt: Date.now() });
        allKidStats[kidId] = {};
        showToast(`${kid.name}'s results were cleared`, '🧹', 3000);
        renderKidReport(kidId);
    } catch (e) {
        console.error(e);
        showToast('Could not clear results', '❌', 3000);
    }
}
window.resetKidStats = resetKidStats;

// ============================================================
// SOLAR SYSTEM EXPLORER
// ============================================================
const PLANETS = [
    {
        id: 'sun', name: 'The Sun', emoji: '☀️', type: 'Star',
        colors: ['#fff3a0', '#ffb700', '#ff7300'],
        size: 46, orbit: 0, speed: 0, tagline: 'Our neighbourhood star!',
        gravity: 27.01, moons: 0, dayLength: '27 Earth days', yearLength: '—',
        temp: '5,500°C surface', distance: '0 km (the centre!)', diameter: '1,392,700 km',
        fact: 'The Sun is so big that about 1.3 million Earths could fit inside it! It turns hydrogen into helium and gives us light and warmth.'
    },
    {
        id: 'mercury', name: 'Mercury', emoji: '🪨', type: 'Rocky planet',
        colors: ['#cfc6bd', '#9a8f86', '#6b625b'],
        size: 12, orbit: 76, speed: 12, tagline: 'The speedy little one!',
        gravity: 0.38, moons: 0, dayLength: '59 Earth days', yearLength: '88 Earth days',
        temp: '-180°C to 430°C', distance: '58 million km from Sun', diameter: '4,879 km',
        fact: 'Mercury zooms around the Sun faster than any other planet. One year there is only 88 days, so you would have birthdays super often!'
    },
    {
        id: 'venus', name: 'Venus', emoji: '🌋', type: 'Rocky planet',
        colors: ['#ffe0a3', '#e8a33d', '#b4661a'],
        size: 18, orbit: 106, speed: 19, tagline: 'The hottest planet!',
        gravity: 0.91, moons: 0, dayLength: '243 Earth days', yearLength: '225 Earth days',
        temp: '465°C — hot enough to melt lead', distance: '108 million km from Sun', diameter: '12,104 km',
        fact: 'Venus spins backwards and very slowly, so one day there lasts longer than its whole year! Thick clouds trap heat like a blanket.'
    },
    {
        id: 'earth', name: 'Earth', emoji: '🌍', type: 'Our home!',
        colors: ['#9be7ff', '#2f86d6', '#1b5a9c'],
        size: 19, orbit: 140, speed: 26, tagline: 'The only place with life!',
        gravity: 1, moons: 1, dayLength: '24 hours', yearLength: '365.25 days',
        temp: '-88°C to 58°C', distance: '150 million km from Sun', diameter: '12,742 km',
        fact: 'Earth is the only planet we know of with liquid water oceans and living things. About 71 percent of it is covered in water!'
    },
    {
        id: 'moon', name: 'The Moon', emoji: '🌕', type: "Earth's only moon",
        parent: 'earth', moonOrbit: 34, moonSpeed: 6,
        colors: ['#f4f2ec', '#c9c5bb', '#8f8b82'],
        size: 8, orbit: 0, speed: 0, tagline: 'Our closest neighbour in space!',
        gravity: 0.166, moons: 0, dayLength: '29.5 Earth days', yearLength: 'Circles Earth every 27.3 days',
        temp: '-173°C to 127°C', distance: '384,400 km from Earth', diameter: '3,475 km',
        fact: 'The Moon has no wind or rain, so the footprints the astronauts left in 1969 are still there today — and could stay for millions of years!'
    },
    {
        id: 'mars', name: 'Mars', emoji: '🔴', type: 'Rocky planet',
        colors: ['#ffb99a', '#d1542f', '#8c2f16'],
        size: 15, orbit: 176, speed: 35, tagline: 'The rusty red planet!',
        gravity: 0.38, moons: 2, dayLength: '24.6 hours', yearLength: '687 Earth days',
        temp: '-140°C to 20°C', distance: '228 million km from Sun', diameter: '6,779 km',
        fact: 'Mars has the tallest volcano in the solar system, Olympus Mons — about three times taller than Mount Everest!'
    },
    {
        id: 'jupiter', name: 'Jupiter', emoji: '🌀', type: 'Gas giant',
        colors: ['#ffe6c4', '#d9a066', '#96603a'],
        size: 38, orbit: 226, speed: 60, tagline: 'The giant with a storm!',
        gravity: 2.34, moons: 95, dayLength: '10 hours', yearLength: '12 Earth years',
        temp: '-145°C cloud tops', distance: '778 million km from Sun', diameter: '139,820 km',
        fact: 'Jupiter has a giant storm called the Great Red Spot that has been swirling for over 300 years — and it is bigger than Earth!'
    },
    {
        id: 'saturn', name: 'Saturn', emoji: '🪐', type: 'Gas giant',
        colors: ['#fff0c9', '#e0bb72', '#a8823f'],
        size: 33, orbit: 278, speed: 85, tagline: 'The one with beautiful rings!',
        gravity: 0.93, moons: 146, dayLength: '10.7 hours', yearLength: '29 Earth years',
        temp: '-178°C', distance: '1.4 billion km from Sun', diameter: '116,460 km',
        fact: 'Saturn is so light for its size that it would float in a giant bathtub of water! Its rings are made of ice and rock chunks.',
        hasRings: true
    },
    {
        id: 'uranus', name: 'Uranus', emoji: '💠', type: 'Ice giant',
        colors: ['#d6f7ff', '#7fd4e8', '#3f9fb8'],
        size: 25, orbit: 322, speed: 110, tagline: 'The planet that rolls!',
        gravity: 0.92, moons: 28, dayLength: '17 hours', yearLength: '84 Earth years',
        temp: '-224°C — the coldest!', distance: '2.9 billion km from Sun', diameter: '50,724 km',
        fact: 'Uranus is tipped right over on its side, so it rolls around the Sun like a ball instead of spinning like a top!',
        hasRings: true
    },
    {
        id: 'neptune', name: 'Neptune', emoji: '🔵', type: 'Ice giant',
        colors: ['#bcd9ff', '#3f6fd8', '#22407f'],
        size: 24, orbit: 362, speed: 135, tagline: 'The windiest world!',
        gravity: 1.12, moons: 16, dayLength: '16 hours', yearLength: '165 Earth years',
        temp: '-214°C', distance: '4.5 billion km from Sun', diameter: '49,244 km',
        fact: 'Neptune has the fastest winds in the solar system — over 2,000 km per hour, faster than a jet plane!'
    }
];

let orbitsRunning = true;
let solarRealScale = false;
let currentPlanetIndex = 0;
let solarBuilt = false;

function getPlanet(id) {
    return PLANETS.find(p => p.id === id);
}

function buildStarfield() {
    const field = document.getElementById('starfield');
    if (!field || field.dataset.built === 'yes') return;
    field.dataset.built = 'yes';
    let html = '';
    for (let i = 0; i < 90; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const d = (Math.random() * 2.4 + 0.8).toFixed(1);
        const delay = (Math.random() * 4).toFixed(1);
        html += `<span class="star" style="left:${x}%;top:${y}%;width:${d}px;height:${d}px;animation-delay:${delay}s"></span>`;
    }
    field.innerHTML = html;
}

function buildSolarSystem() {
    const layer = document.getElementById('orbitLayer');
    if (!layer) return;

    buildStarfield();
    layer.innerHTML = '';

    // Hovering anywhere on the map freezes the orbits, so a moving planet
    // is easy to aim at. Leaving the map resumes them.
    const map = document.getElementById('solarMap');
    if (map && map.dataset.hoverWired !== 'yes') {
        map.dataset.hoverWired = 'yes';
        map.addEventListener('pointerenter', () => {
            if (orbitsRunning) layer.classList.add('hover-paused');
        });
        map.addEventListener('pointerleave', () => layer.classList.remove('hover-paused'));
    }

    PLANETS.filter(p => p.id !== 'sun' && !p.parent).forEach((p, i) => {
        const ring = document.createElement('div');
        ring.className = 'orbit-ring';
        ring.style.width = ring.style.height = `${p.orbit * 2}px`;

        const spinner = document.createElement('div');
        spinner.className = 'orbit-spinner';
        spinner.style.animationDuration = `${p.speed}s`;
        spinner.style.animationDelay = `-${i * 2.3}s`;
        spinner.dataset.planet = p.id;

        const body = document.createElement('button');
        body.className = 'planet-body';
        body.type = 'button';
        body.dataset.planet = p.id;
        body.style.width = body.style.height = `${p.size}px`;
        body.style.background =
            `radial-gradient(circle at 32% 30%, ${p.colors[0]}, ${p.colors[1]} 58%, ${p.colors[2]} 100%)`;
        body.setAttribute('aria-label', p.name);
        body.title = p.name;

        // A click event needs mousedown AND mouseup on the same spot. These
        // planets are orbiting, so they slide away between the two and the
        // click never fires. Opening on pointerdown makes them reliable to hit.
        const grab = (e) => {
            e.preventDefault();
            e.stopPropagation();
            openPlanet(p.id);
        };
        body.addEventListener('pointerdown', grab);
        body.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPlanet(p.id); }
        });

        if (p.hasRings) {
            const rings = document.createElement('span');
            rings.className = 'planet-rings';
            body.appendChild(rings);
        }

        // Attach any moons that orbit THIS planet
        PLANETS.filter(m => m.parent === p.id).forEach(m => {
            const moonOrbit = document.createElement('span');
            moonOrbit.className = 'moon-orbit';
            moonOrbit.style.width = moonOrbit.style.height = `${m.moonOrbit * 2}px`;
            moonOrbit.style.animationDuration = `${m.moonSpeed}s`;

            const moonBody = document.createElement('button');
            moonBody.className = 'moon-body';
            moonBody.type = 'button';
            moonBody.dataset.planet = m.id;
            moonBody.style.width = moonBody.style.height = `${m.size}px`;
            moonBody.style.background =
                `radial-gradient(circle at 34% 30%, ${m.colors[0]}, ${m.colors[1]} 58%, ${m.colors[2]} 100%)`;
            moonBody.setAttribute('aria-label', m.name);
            moonBody.title = m.name;
            moonBody.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                e.stopPropagation();   // don't open Earth as well
                openPlanet(m.id);
            });
            moonBody.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault(); e.stopPropagation(); openPlanet(m.id);
                }
            });

            const moonLabel = document.createElement('span');
            moonLabel.className = 'planet-label moon-label';
            moonLabel.innerText = m.name;
            moonBody.appendChild(moonLabel);

            moonOrbit.appendChild(moonBody);
            body.appendChild(moonOrbit);
        });

        const label = document.createElement('span');
        label.className = 'planet-label';
        label.innerText = p.name;
        body.appendChild(label);

        spinner.appendChild(body);
        ring.appendChild(spinner);
        layer.appendChild(ring);
    });

    renderPlanetCards();
    solarBuilt = true;
}

function renderPlanetCards() {
    const grid = document.getElementById('planetGrid');
    if (!grid) return;
    grid.innerHTML = '';
    PLANETS.forEach(p => {
        const card = document.createElement('div');
        card.className = 'planet-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.onclick = () => openPlanet(p.id);
        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPlanet(p.id); }
        };
        card.innerHTML = `
            <div class="pc-orb" style="background: radial-gradient(circle at 32% 30%, ${p.colors[0]}, ${p.colors[1]} 58%, ${p.colors[2]} 100%)"></div>
            <div class="pc-body">
                <h4>${p.emoji} ${p.name}</h4>
                <span class="pc-type">${p.type}</span>
                <p>${p.tagline}</p>
            </div>`;
        grid.appendChild(card);
    });
}

function toggleOrbits() {
    orbitsRunning = !orbitsRunning;
    const layer = document.getElementById('orbitLayer');
    if (layer) layer.classList.toggle('paused', !orbitsRunning);
    const btn = document.getElementById('orbitToggleBtn');
    if (btn) {
        btn.innerHTML = orbitsRunning ? '⏸️ Pause Orbits' : '▶️ Start Orbits';
        btn.classList.toggle('active', orbitsRunning);
    }
    playSound(orbitsRunning ? 620 : 320);
}
window.toggleOrbits = toggleOrbits;

function toggleSolarScale() {
    solarRealScale = !solarRealScale;
    const map = document.getElementById('solarMap');
    if (map) map.classList.toggle('real-scale', solarRealScale);
    const btn = document.getElementById('scaleToggleBtn');
    if (btn) {
        btn.innerHTML = solarRealScale ? '🔍 Show Fun Sizes' : '📏 Show Real Sizes';
        btn.classList.toggle('active', solarRealScale);
    }
    playSound(500);
    showToast(solarRealScale
        ? 'Now showing how different planet sizes really are!'
        : 'Back to easy-to-click sizes', '📏', 2800);
}
window.toggleSolarScale = toggleSolarScale;

// ---- Planet detail modal ----
function openPlanet(id) {
    const p = getPlanet(id);
    if (!p) return;
    currentPlanetIndex = PLANETS.findIndex(x => x.id === id);

    playSound(660);

    const visual = document.getElementById('planetVisual');
    if (visual) {
        visual.style.background =
            `radial-gradient(circle at 32% 28%, ${p.colors[0]}, ${p.colors[1]} 55%, ${p.colors[2]} 100%)`;
        visual.className = 'planet-visual' + (p.hasRings ? ' with-rings' : '') + (p.id === 'sun' ? ' is-sun' : '');
    }

    const setText = (elId, val) => { const e = document.getElementById(elId); if (e) e.innerText = val; };
    setText('planetModalTitle', `${p.emoji} ${p.name}`);
    setText('planetTagline', p.tagline);
    setText('planetFact', p.fact);

    const stats = document.getElementById('planetStats');
    if (stats) {
        const rows = [
            ['🌡️', 'Temperature', p.temp],
            ['📏', 'Width', p.diameter],
            ['🚀', 'Distance', p.distance],
            ['🌙', 'Moons', p.moons],
            ['🕐', 'One day', p.dayLength],
            ['📅', 'One year', p.yearLength]
        ];
        stats.innerHTML = rows.map(([icon, label, val]) =>
            `<div class="pstat"><span class="pstat-icon">${icon}</span>
             <span class="pstat-label">${label}</span>
             <span class="pstat-val">${val}</span></div>`).join('');
    }

    updatePlanetWeight();

    const modal = document.getElementById('planetModal');
    if (modal) modal.style.display = 'flex';

    if (!factsViewed.has('planet-' + p.id)) {
        factsViewed.add('planet-' + p.id);
        addStars(4);
        const seen = PLANETS.filter(x => factsViewed.has('planet-' + x.id)).length;
        if (seen === 1) unlockBadge('spaceCadet');
        if (seen === PLANETS.length) {
            unlockBadge('astronomer');
            launchConfetti(50);
        }
        saveProgress();
    }
}
window.openPlanet = openPlanet;

function closePlanetModal() {
    const m = document.getElementById('planetModal');
    if (m) m.style.display = 'none';
    stopSpeech();
    playSound(400);
}
window.closePlanetModal = closePlanetModal;

function closePlanetModalOnBg(e) {
    if (e.target.id === 'planetModal') closePlanetModal();
}
window.closePlanetModalOnBg = closePlanetModalOnBg;

function nextPlanet() {
    currentPlanetIndex = (currentPlanetIndex + 1) % PLANETS.length;
    openPlanet(PLANETS[currentPlanetIndex].id);
}
window.nextPlanet = nextPlanet;

function prevPlanet() {
    currentPlanetIndex = (currentPlanetIndex - 1 + PLANETS.length) % PLANETS.length;
    openPlanet(PLANETS[currentPlanetIndex].id);
}
window.prevPlanet = prevPlanet;

function speakPlanet() {
    const p = PLANETS[currentPlanetIndex];
    if (!p) return;
    speakText(`${p.name}. ${p.tagline} ${p.fact}`);
}
window.speakPlanet = speakPlanet;

function updatePlanetWeight() {
    const input = document.getElementById('earthWeight');
    const out = document.getElementById('weightResult');
    const p = PLANETS[currentPlanetIndex];
    if (!input || !out || !p) return;

    const kg = parseFloat(input.value);
    if (isNaN(kg) || kg <= 0) { out.innerText = 'Type your weight to find out!'; return; }

    const there = kg * p.gravity;
    let msg;
    if (p.gravity > 1.5)      msg = 'Wow, you would feel super heavy!';
    else if (p.gravity > 0.95) msg = 'Almost the same as home!';
    else if (p.gravity > 0.5)  msg = 'You would feel a bit lighter!';
    else                       msg = 'You could jump really high there!';

    out.innerHTML = `On <strong>${p.name}</strong> you would weigh
        <strong class="weight-num">${there.toFixed(1)} kg</strong><br>
        <span class="weight-msg">${msg}</span>`;
}
window.updatePlanetWeight = updatePlanetWeight;

function solarSurprise() {
    const p = PLANETS[Math.floor(Math.random() * PLANETS.length)];
    launchConfetti(14);
    openPlanet(p.id);
}
window.solarSurprise = solarSurprise;

// ---- Planet quiz ----
let pqQuestions = [];
let pqIndex = 0;
let pqScore = 0;
let pqLocked = false;

function buildPlanetQuestions() {
    const q = [
        { q: 'Which planet is known as the Red Planet?', a: 'Mars' },
        { q: 'Which planet has beautiful rings made of ice and rock?', a: 'Saturn' },
        { q: 'Which planet is the hottest in our solar system?', a: 'Venus' },
        { q: 'Which planet do we live on?', a: 'Earth' },
        { q: 'Which is the biggest planet of them all?', a: 'Jupiter' },
        { q: 'Which planet is closest to the Sun?', a: 'Mercury' },
        { q: 'Which planet rolls on its side like a ball?', a: 'Uranus' },
        { q: 'Which planet has the fastest winds?', a: 'Neptune' },
        { q: 'What is at the centre of our solar system?', a: 'The Sun' },
        { q: 'Which planet has the Great Red Spot storm?', a: 'Jupiter' },
        { q: 'What goes around the Earth and lights up our night sky?', a: 'The Moon' },
        { q: 'Where did astronauts leave footprints that are still there today?', a: 'The Moon' }
    ];
    return shuffleArray(q).slice(0, 8);
}

function startPlanetQuiz() {
    pqQuestions = buildPlanetQuestions();
    pqIndex = 0;
    pqScore = 0;
    pqLocked = false;
    const box = document.getElementById('planetQuiz');
    if (box) box.style.display = 'block';
    playSound(700);
    renderPlanetQuestion();
    if (box && typeof box.scrollIntoView === 'function') {
        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
window.startPlanetQuiz = startPlanetQuiz;

function closePlanetQuiz() {
    const box = document.getElementById('planetQuiz');
    if (box) box.style.display = 'none';
    playSound(350);
}
window.closePlanetQuiz = closePlanetQuiz;

function renderPlanetQuestion() {
    const qEl = document.getElementById('pqQuestion');
    const optEl = document.getElementById('pqOptions');
    const progEl = document.getElementById('pqProgress');
    const scoreEl = document.getElementById('pqScore');
    if (!qEl || !optEl) return;

    if (pqIndex >= pqQuestions.length) {
        qEl.innerText = `🎉 Quiz complete! You scored ${pqScore} out of ${pqQuestions.length}!`;
        optEl.innerHTML = '<button class="pq-opt" onclick="startPlanetQuiz()">🔄 Play Again</button>';
        if (progEl) progEl.innerText = 'Finished!';
        if (pqScore === pqQuestions.length) {
            unlockBadge('planetPro');
            launchConfetti(50);
        }
        recordRoundScore('planet', pqScore, pqQuestions.length);
        addStars(pqScore * 2);
        speakText(`Quiz complete! You scored ${pqScore} out of ${pqQuestions.length}.`);
        return;
    }

    const cur = pqQuestions[pqIndex];
    qEl.innerText = cur.q;
    if (progEl) progEl.innerText = `Question ${pqIndex + 1} / ${pqQuestions.length}`;
    if (scoreEl) scoreEl.innerText = pqScore;

    const names = PLANETS
        .filter(p => !p.parent || cur.a === p.name)   // Moon only appears when it IS the answer
        .map(p => p.name)
        .filter(n => n !== cur.a);
    const opts = shuffleArray([cur.a, ...shuffleArray(names).slice(0, 3)]);

    optEl.innerHTML = '';
    opts.forEach(name => {
        const b = document.createElement('button');
        b.className = 'pq-opt';
        b.innerText = name;
        b.onclick = () => answerPlanetQuiz(name, b, cur.a);
        optEl.appendChild(b);
    });

    speakText(cur.q);
    pqLocked = false;
}

function answerPlanetQuiz(choice, btn, correct) {
    if (pqLocked) return;
    pqLocked = true;

    const all = [...document.querySelectorAll('#pqOptions .pq-opt')];
    all.forEach(b => b.disabled = true);

    if (choice === correct) {
        btn.classList.add('correct');
        pqScore++;
        playSound(900, 'sine', 0.2);
        launchConfetti(10);
        speakText('Correct!');
    } else {
        btn.classList.add('wrong');
        const right = all.find(b => b.innerText === correct);
        if (right) right.classList.add('correct');
        playSound(200, 'sawtooth', 0.25);
        speakText(`The answer is ${correct}.`);
    }

    recordAnswer('planet', choice === correct, correct ? ('Answer: ' + correct) : '');

    const scoreEl = document.getElementById('pqScore');
    if (scoreEl) scoreEl.innerText = pqScore;

    setTimeout(() => { pqIndex++; renderPlanetQuestion(); }, 1900);
}
window.answerPlanetQuiz = answerPlanetQuiz;

// ============================================================
// LAB EXPERIMENTS CONTROLLER
// ============================================================
function toggleStep(element) {
    playSound(450);
    element.classList.toggle('completed');

    const card = element.closest('.experiment-card');
    if (!card) return;

    const totalSteps = card.querySelectorAll('.steps-interactive li').length;
    const completedSteps = card.querySelectorAll('.steps-interactive li.completed').length;

    if (totalSteps > 0 && totalSteps === completedSteps) {
        const title = card.querySelector('h3') ? card.querySelector('h3').innerText : 'Experiment';
        if (!completedExperiments.has(title)) {
            completedExperiments.add(title);
            addStars(10);
            unlockBadge('scientist');
            launchConfetti(35);
            showToast(`Experiment Completed: ${title}! 🔬`, '🧪', 3500);
            saveProgress();
        }
    }
}
window.toggleStep = toggleStep;

// ============================================================
// APP INITIALIZATION ENTRY POINT
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
    listenToKidProfiles();
    checkLoginSession();
    renderStoryPage();
    // Pac-Man now starts itself (see showGame) once its tab is opened,
    // instead of running in the background from page load.
});

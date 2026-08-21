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
    onSnapshot,
    arrayUnion
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    setPersistence,
    inMemoryPersistence
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
const auth = getAuth(app);

// Admin login must NOT be remembered by the browser.
// This prevents the website from opening directly as Admin on the next visit.
const authPersistenceReady = setPersistence(auth, inMemoryPersistence).catch(e => {
    console.warn('[KidZone] Could not set in-memory admin auth persistence:', e);
});

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
    if (!speechQueue.length) { stopKeepAlive(); return; }
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
        if (typeof closeHistoryModal === 'function') closeHistoryModal();
        if (typeof closeGeoModal === 'function') closeGeoModal();
        if (typeof closeHomeworkModal === 'function') closeHomeworkModal();
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
// SECURITY LAYER
//
// IMPORTANT, PLEASE READ:
// This app runs entirely in the browser, so anything it knows,
// the browser knows. These measures raise the bar a great deal
// (no readable PINs, no plaintext password, lockouts, no XSS)
// but they are NOT a substitute for server-side authentication.
// A determined technical user can still tamper via DevTools.
// For real protection, enable Firebase Authentication - see
// SECURITY.md for the step-by-step guide.
// ============================================================

// ---------- 1. Escape untrusted text before it touches innerHTML ----------
function escapeHtml(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
window.escapeHtml = escapeHtml;

// ---------- 2. Hash PINs (SHA-256) so they are never stored readable ----------
const PIN_SALT = 'kidzone::v1::';

async function hashPin(pin) {
    const data = new TextEncoder().encode(PIN_SALT + String(pin));
    if (crypto && crypto.subtle && crypto.subtle.digest) {
        const buf = await crypto.subtle.digest('SHA-256', data);
        return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
    }
    // Very old browsers only: weak fallback, still better than plain text.
    let h = 0;
    for (const b of data) { h = ((h << 5) - h + b) | 0; }
    return ('legacy' + Math.abs(h).toString(16)).padEnd(64, '0');
}

/**
 * Verify a typed PIN against a stored profile.
 * Accepts a legacy plaintext PIN once, then silently upgrades it
 * to a hash so nobody gets locked out during the migration.
 */
async function verifyKidPin(kid, typedPin) {
    if (!kid) return false;
    const typedHash = await hashPin(typedPin);

    if (kid.pinHash) return kid.pinHash === typedHash;

    // Legacy profile still holding a plaintext pin.
    if (kid.pin && String(kid.pin) === String(typedPin)) {
        try {
            await setDoc(doc(db, "kidProfiles", kid.id),
                         { pinHash: typedHash, pin: null }, { merge: true });
            console.info('[KidZone] upgraded stored PIN to a secure hash for', kid.name);
        } catch (e) {
            console.warn('[KidZone] could not upgrade PIN hash:', e);
        }
        return true;
    }
    return false;
}

// ---------- 3. Slow down guessing: lockout after repeated failures ----------
const LOGIN_MAX_ATTEMPTS = 5;
const LOGIN_LOCK_MS = 60 * 1000;

function loginLockKey(scope) { return 'kidzone_lock_' + scope; }

function getLockState(scope) {
    try {
        return JSON.parse(localStorage.getItem(loginLockKey(scope))) || { fails: 0, until: 0 };
    } catch (e) { return { fails: 0, until: 0 }; }
}

function setLockState(scope, state) {
    try { localStorage.setItem(loginLockKey(scope), JSON.stringify(state)); } catch (e) {}
}

function lockRemainingMs(scope) {
    const st = getLockState(scope);
    return st.until > Date.now() ? st.until - Date.now() : 0;
}

function registerFailedLogin(scope) {
    const st = getLockState(scope);
    st.fails = (st.fails || 0) + 1;
    if (st.fails >= LOGIN_MAX_ATTEMPTS) {
        st.until = Date.now() + LOGIN_LOCK_MS;
        st.fails = 0;
    }
    setLockState(scope, st);
}

function clearFailedLogins(scope) { setLockState(scope, { fails: 0, until: 0 }); }

// ---------- 4. Keep stored progress within believable limits ----------
function sanitiseProgress(d) {
    const clampInt = (v, lo, hi, dflt) => {
        const n = parseInt(v, 10);
        return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : dflt;
    };
    const list = (v, cap) => Array.isArray(v) ? v.filter(x => typeof x === 'string').slice(0, cap) : [];
    return {
        stars: clampInt(d.stars, 0, 1000000, 0),
        level: clampInt(d.level, 1, 10000, 1),
        badges: list(d.badges, 100),
        factsViewed: list(d.factsViewed, 500),
        finishedStories: list(d.finishedStories, 100),
        completedExperiments: list(d.completedExperiments, 100)
    };
}


// ============================================================
// AUTHENTICATION & PROFILE SYSTEM
// ============================================================
// Credentials are stored as SHA-256 hashes so the password is not
// sitting in plain sight in the downloaded JavaScript.
// (Reminder: this is obfuscation, not real auth - see SECURITY.md.)
// Real authentication is handled by Firebase on Google's servers.
// This UID identifies which signed-in account is the admin. It is
// NOT a secret - Firestore rules enforce it server-side.
const ADMIN_UID = "l9skt6UUdcdMrmR1jKLRXQyhv4c2";

let currentRole = null; // 'admin' or 'kid'
let currentActiveId = null;
let adminLoginInProgress = false; // true only after the admin submits the password form

function getActiveKidProfile() {
    return cachedKidProfiles.find(k => k && k.id === currentActiveId) || null;
}

function updateSafeZoneIdentity() {
    const composerAvatar = document.getElementById('safeComposerAvatar');
    if (!composerAvatar) return;
    if (currentRole === 'admin') {
        composerAvatar.innerText = '🛠️';
        return;
    }
    const kid = getActiveKidProfile();
    composerAvatar.innerText = (kid && kid.avatar) ? kid.avatar : '🚀';
}

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

    // Admin sessions are NOT restored from sessionStorage - that flag can be
    // forged in DevTools. Firebase's onAuthStateChanged is the only thing
    // allowed to grant admin, and it re-checks the real token.
    if (role === 'admin') {
        if (loginOverlay) loginOverlay.classList.remove('hidden');
        populateKidSelect();
        return;
    }

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
        safeZoneProfileChats = [];
        snapshot.forEach(docSnap => {
            const data = docSnap.data() || {};
            if (data.kind === 'safeChat') {
                safeZoneProfileChats.push(data);
            } else if (data.id && (data.pinHash || data.pin || String(data.id).startsWith('kid_'))) {
                cachedKidProfiles.push(data);
                // Chat fallback: each kid can usually write to their OWN profile,
                // and everyone already reads kidProfiles for login/friend lists.
                if (Array.isArray(data.safeOutbox)) {
                    data.safeOutbox.forEach(m => { if (m && m.id) safeZoneProfileChats.push(m); });
                }
            }
        });
        populateKidSelect();
        setupUIForSession();
        // Keep Safe Zone friend lists live when Admin creates a new kid profile.
        if (typeof populateSafeAudience === 'function') populateSafeAudience();
        if (typeof populateSafeChatFriends === 'function') populateSafeChatFriends();
        if (typeof updateSafeZoneIdentity === 'function') updateSafeZoneIdentity();
        if (typeof renderSafeZone === 'function') renderSafeZone();
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
        opt.innerText = `${escapeHtml(p.avatar)} ${escapeHtml(p.name)}`;
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

    const waitMs = lockRemainingMs('kid_' + kidId);
    if (waitMs > 0) {
        if (errorMsg) {
            errorMsg.innerText = `\u23f3 Too many tries. Wait ${Math.ceil(waitMs / 1000)}s.`;
            errorMsg.style.display = 'block';
        }
        playSound(150, 'sawtooth', 0.3);
        return;
    }

    const pinOk = await verifyKidPin(kid, pinInput);

    if (kid && pinOk) {
        clearFailedLogins('kid_' + kidId);
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
        showToast(`Welcome back, ${escapeHtml(kid.name)}! 🚀`, '✨', 3500);
    } else {
        playSound(150, 'sawtooth', 0.3);
        if (errorMsg) {
            registerFailedLogin('kid_' + kidId);
        errorMsg.innerText = "❌ Incorrect Explorer or 4-digit PIN!";
            errorMsg.style.display = "block";
        }
    }
}
window.handleKidLogin = handleKidLogin;

async function handleAdminLogin(event) {
    if (event) event.preventDefault();
    const emailElem = document.getElementById('adminEmail');
    const passElem = document.getElementById('adminPassword');
    if (!emailElem || !passElem) return;

    const email = emailElem.value.trim().toLowerCase();
    const password = passElem.value;
    const errorMsg = document.getElementById('adminLoginErrorMsg');

    // Local lockout on top of Google's own rate limiting.
    const waitMs = lockRemainingMs('admin');
    if (waitMs > 0) {
        if (errorMsg) {
            errorMsg.innerText = `\u23f3 Too many attempts. Try again in ${Math.ceil(waitMs / 1000)}s.`;
            errorMsg.style.display = 'block';
        }
        playSound(150, 'sawtooth', 0.3);
        return;
    }

    const submitBtn = document.querySelector('#adminLoginForm .login-submit-btn');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerText = 'Signing in\u2026'; }

    try {
        // The password is verified by Google, NOT in this browser.
        // Mark this as a fresh password entry so Firebase's auth callback may open Admin.
        adminLoginInProgress = true;
        await authPersistenceReady;
        const cred = await signInWithEmailAndPassword(auth, email, password);

        // Signed in - but is this account actually the admin?
        if (cred.user.uid !== ADMIN_UID) {
            adminLoginInProgress = false;
            await signOut(auth);
            registerFailedLogin('admin');
            if (errorMsg) {
                errorMsg.innerText = "\u274c That account is not an administrator.";
                errorMsg.style.display = 'block';
            }
            playSound(150, 'sawtooth', 0.3);
            return;
        }

        clearFailedLogins('admin');
        // onAuthStateChanged() completes the sign-in and shows the app.
        if (errorMsg) errorMsg.style.display = 'none';
        passElem.value = '';
    } catch (err) {
        adminLoginInProgress = false;
        registerFailedLogin('admin');
        playSound(150, 'sawtooth', 0.3);
        const code = (err && err.code) || '';
        let msg = "\u274c Invalid Admin Email or Password.";
        if (code === 'auth/too-many-requests') {
            msg = "\u23f3 Google has temporarily blocked sign-in after too many attempts. Wait a few minutes.";
        } else if (code === 'auth/network-request-failed') {
            msg = "\ud83d\udcf6 No internet connection.";
        } else if (code === 'auth/invalid-email') {
            msg = "\u274c That email address is not valid.";
        }
        if (errorMsg) { errorMsg.innerText = msg; errorMsg.style.display = 'block'; }
        console.warn('[KidZone] admin sign-in failed:', code || err);
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerText = 'Admin Log In \ud83d\udee0\ufe0f'; }
    }
}
window.handleAdminLogin = handleAdminLogin;

/**
 * Firebase tells us whenever the signed-in admin appears or disappears
 * (including automatically on page refresh, so the session survives).
 */
function watchAdminAuth() {
    onAuthStateChanged(auth, async (user) => {
        if (user && user.uid === ADMIN_UID) {
            // If Firebase remembered an old admin token from a previous visit,
            // do NOT auto-open the website as Admin. Require the password form again.
            if (!adminLoginInProgress) {
                try { await signOut(auth); } catch (e) { console.warn('[KidZone] auto admin sign-out failed:', e); }
                sessionStorage.removeItem('kidzone_logged_in');
                sessionStorage.removeItem('kidzone_user_role');
                sessionStorage.removeItem('kidzone_active_id');
                currentRole = null;
                currentActiveId = null;
                const overlay = document.getElementById('loginScreen');
                if (overlay) overlay.classList.remove('hidden');
                setupUIForSession();
                return;
            }

            currentRole = 'admin';
            currentActiveId = 'admin_' + user.uid.slice(0, 8);
            sessionStorage.setItem('kidzone_logged_in', 'true');
            sessionStorage.setItem('kidzone_user_role', 'admin');
            sessionStorage.setItem('kidzone_active_id', currentActiveId);

            const overlay = document.getElementById('loginScreen');
            if (overlay) overlay.classList.add('hidden');
            setupUIForSession();
            loadProgress();
            playChime([523, 659, 784, 1046]);
            showToast('Welcome Admin! \ud83d\udee0\ufe0f', '\ud83d\udc51', 3500);
        } else if (currentRole === 'admin') {
            // Admin signed out or the token expired.
            adminLoginInProgress = false;
            currentRole = null;
            currentActiveId = null;
            sessionStorage.clear();
            const overlay = document.getElementById('loginScreen');
            if (overlay) overlay.classList.remove('hidden');
            setupUIForSession();
        }
    });
}

/** Emails a reset link - no more editing source code to change the password. */
async function sendAdminReset() {
    const emailElem = document.getElementById('adminEmail');
    const email = emailElem ? emailElem.value.trim() : '';
    if (!email) {
        showToast('Type your admin email first, then tap Reset.', '\u2709\ufe0f', 3000);
        return;
    }
    try {
        await sendPasswordResetEmail(auth, email);
        showToast('Password reset email sent \u2014 check your inbox.', '\u2709\ufe0f', 4000);
    } catch (err) {
        showToast('Could not send reset email.', '\u274c', 3000);
        console.warn('[KidZone] reset failed:', err && err.code);
    }
}
window.sendAdminReset = sendAdminReset;

function setupUIForSession() {
    const addKidBtn = document.getElementById('addKidBtn');
    const manageProfilesBtn = document.getElementById('manageProfilesBtn');
    const reportsBtn = document.getElementById('reportsBtn');
    const avatarElem = document.getElementById('activeAvatar');
    const nameElem = document.getElementById('activeName');
    const logoutBtn = document.querySelector('.logout-btn[onclick="handleLogout()"]');
    const homeworkAdminPanel = document.getElementById('homeworkAdminPanel');

    if (currentRole === 'admin') {
        if (addKidBtn) addKidBtn.style.display = 'inline-block';
        if (manageProfilesBtn) manageProfilesBtn.style.display = 'inline-block';
        if (reportsBtn) reportsBtn.style.display = 'inline-block';
        if (homeworkAdminPanel) homeworkAdminPanel.style.display = 'block';
        if (avatarElem) avatarElem.innerText = '🛠️';
        if (nameElem) nameElem.innerText = 'Admin (Yaasin)';
        if (logoutBtn) {
            logoutBtn.innerText = '🔒 Admin Logout';
            logoutBtn.title = 'Log out of Admin';
        }
    } else {
        if (addKidBtn) addKidBtn.style.display = 'none';
        if (manageProfilesBtn) manageProfilesBtn.style.display = 'none';
        if (reportsBtn) reportsBtn.style.display = 'none';
        if (homeworkAdminPanel) homeworkAdminPanel.style.display = 'none';
        if (logoutBtn) {
            logoutBtn.innerText = '🚪 Logout';
            logoutBtn.title = 'Log Out';
        }
        const kid = cachedKidProfiles.find(p => p.id === currentActiveId);
        if (kid) {
            if (avatarElem) avatarElem.innerText = kid.avatar;
            if (nameElem) nameElem.innerText = kid.name;
        }
    }
    setupSafeProgressChatListener();
    updateSafeZoneIdentity();
}

function handleLogout() {
    playSound(300);

    // If the admin is signed in with Firebase, end that session too -
    // otherwise the token would still authorise database writes.
    const wasAdmin = currentRole === 'admin';
    currentRole = null;                       // stop watchAdminAuth double-firing
    adminLoginInProgress = false;
    if (wasAdmin) {
        signOut(auth).catch(e => console.warn('[KidZone] signOut failed:', e));
    }

    sessionStorage.removeItem('kidzone_logged_in');
    sessionStorage.removeItem('kidzone_user_role');
    sessionStorage.removeItem('kidzone_active_id');
    
    currentRole = null;
    currentActiveId = null;
    if (safeProgressChatUnsub) { try { safeProgressChatUnsub(); } catch (e) {} safeProgressChatUnsub = null; }
    safeZoneProgressChats = [];

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

    // Reject absurd names and non-numeric PINs before saving.
    if (kidName.length > 24) {
        showToast('That name is too long (max 24 letters).', '\u26a0\ufe0f', 3000);
        return;
    }
    if (!/^[0-9]{4}$/.test(kidPin)) {
        showToast('PIN must be exactly 4 digits.', '\u26a0\ufe0f', 3000);
        return;
    }

    const newId = `kid_${Date.now()}`;
    const newProfile = {
        id: newId,
        name: kidName,
        avatar: selectedAvatar,
        pinHash: await hashPin(kidPin)   // never store the raw PIN
    };

    try {
        await setDoc(doc(db, "kidProfiles", newId), newProfile);

        closeCreateAccountModal();
        nameInput.value = '';
        pinInput.value = '';

        playChime([523, 659, 784, 1046]);
        launchConfetti(40);
        showToast(`Profile created for ${escapeHtml(kidName)}! Synced to Mobile! 🎉`, '✨', 3500);
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
                    <span style="font-size: 1.2rem; margin-right: 6px;">${escapeHtml(p.avatar)}</span> ${escapeHtml(p.name)} 
                    <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">${p.pinHash ? '\ud83d\udd12 PIN secured' : '\u26a0\ufe0f PIN not yet secured'}</span>
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
    planetPro:    { icon: '🪐', name: 'Planet Pro',          desc: 'Perfect score on the Planet Quiz!' },
    animalFriend: { icon: '🐾', name: 'Animal Friend',       desc: 'Met your first animal!' },
    zooKeeper:    { icon: '🦓', name: 'Zoo Keeper',          desc: 'Met 20 different animals!' },
    zoologist:    { icon: '🔬', name: 'Zoologist',           desc: 'Met every animal in the kingdom!' },
    soundMaster:  { icon: '👂', name: 'Sound Master',        desc: 'Perfect score in Guess the Sound!' },
    habitatHero:  { icon: '🏞️', name: 'Habitat Hero',        desc: 'Sent every animal to the right home!' },
    animalExpert: { icon: '🦁', name: 'Animal Expert',       desc: 'Perfect score on the Animal Quiz!' },
    firstFilm:    { icon: '🎬', name: 'First Screening',     desc: 'Watched your first documentary!' },
    filmFan:      { icon: '🍿', name: 'Film Fan',            desc: 'Watched 8 documentaries!' },
    documentarian:{ icon: '🏆', name: 'Documentarian',       desc: 'Watched every documentary!' },
    historyStarter: { icon: '🕰️', name: 'Time Traveller',     desc: 'Explored your first world history topic!' },
    historyExplorer:{ icon: '🌍', name: 'World Historian',     desc: 'Explored 8 world history topics!' },
    historyMaster:  { icon: '🏛️', name: 'History Master',     desc: 'Explored every world history topic!' },
    historyQuizAce: { icon: '🧠', name: 'History Quiz Ace',    desc: 'Perfect score on the World History Quiz!' },
    geoExplorer:   { icon: '🏔️', name: 'Geography Explorer', desc: 'Explored your first mountain or river!' },
    geoMaster:     { icon: '🗺️', name: 'World Map Master',   desc: 'Explored every mountain and river topic!' },
    geoQuizAce:    { icon: '🌊', name: 'Geo Quiz Ace',       desc: 'Perfect score on the Mountains & Rivers Quiz!' },
    geoMatcher:    { icon: '🧭', name: 'Map Matcher',        desc: 'Matched every place to its correct continent!' },
    safePoster:   { icon: '💬', name: 'Kind Communicator', desc: 'Shared your first safe post!' },
    safeFriend:   { icon: '🤝', name: 'Friendly Helper',   desc: 'Sent your first kind buddy note!' },
    safePopular:  { icon: '❤️', name: 'Heart Collector',   desc: 'Received 5 likes in the Safe Zone!' }
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
        await setDoc(doc(db, "kidProgress", currentActiveId), data, { merge: true });
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

        const clean = sanitiseProgress(docSnap.data() || {});
        userStars = clean.stars;
        level = clean.level;
        unlockedBadges = new Set(clean.badges);
        factsViewed = new Set(clean.factsViewed);
        finishedStories = new Set(clean.finishedStories);
        completedExperiments = new Set(clean.completedExperiments);

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
    if (tabId === 'solar') { setTimeout(buildSolarSystem, 30); setTimeout(buildMoonDance, 30); }
    if (tabId === 'animals') setTimeout(buildAnimalKingdom, 30);
    if (tabId === 'docs') setTimeout(buildDocumentaries, 30);
    if (tabId === 'history') setTimeout(buildWorldHistory, 30);
    if (tabId === 'geo') setTimeout(buildGeoExplorer, 30);
    if (tabId === 'homework') setTimeout(buildHomeworkHub, 30);
    if (tabId === 'safezone') setTimeout(buildSafeZone, 30);
    if (tabId !== 'docs' && typeof closeDocModal === 'function') {
        const dp = document.getElementById('docPlayer');
        if (dp && dp.innerHTML) dp.innerHTML = '';
    }
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
        if (typeof initBodyGame === 'function') {
            initBodyGame();
        } else {
            console.error('[KidZone] initBodyGame() missing - script.js out of date.');
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
    if (!speechEnabled) { showToast('Voice is off — turn it on to hear the story', '🔇', 2600); return; }
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
    showToast(on ? 'Auto-Read on — pages read themselves!' : 'Auto-Read off', on ? '📖' : '📕', 2600);
    if (autoReadStories) { if (!speechEnabled) toggleNarration(); readStoryPage(); }
    else { stopStoryReading(); }
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
// QUIZ RESULT TRACKING (per kid, per activity)
// ============================================================
const ACTIVITY_LABELS = {
    duo:      { icon: '🦉', name: 'Duolingo Dash' },
    math:     { icon: '🔢', name: 'Math Wizard' },
    trivia:   { icon: '🧠', name: 'Trivia Quiz' },
    mauritius:{ icon: '🇲🇺', name: 'Mauritius History' },
    body:     { icon: '🧍', name: 'Body Parts Explorer' },
    planet:   { icon: '🪐', name: 'Planet Quiz' },
    memory:   { icon: '🧩', name: 'Memory Match' },
    animalsound: { icon: '👂', name: 'Guess the Sound' },
    habitat:     { icon: '🏞️', name: 'Habitat Match' },
    animalquiz:  { icon: '🦁', name: 'Animal Quiz' },
    historyquiz: { icon: '🌍', name: 'World History Quiz' },
    geoquiz:    { icon: '🏔️', name: 'Mountains & Rivers Quiz' },
    geomatch:   { icon: '🗺️', name: 'Mountains & Rivers Map Match' }
};

let quizStats = {};

function blankActivityStat() {
    return { correct: 0, wrong: 0, attempts: 0, best: 0, lastPlayed: null };
}

function recordAnswer(activity, isCorrect, questionText = '') {
    if (!quizStats[activity]) quizStats[activity] = blankActivityStat();
    const st = quizStats[activity];
    st.attempts++;
    if (isCorrect) st.correct++; else st.wrong++;
    st.lastPlayed = Date.now();

    if (!quizStats._recent) quizStats._recent = [];
    quizStats._recent.unshift({
        activity, correct: !!isCorrect,
        q: String(questionText).slice(0, 90), at: Date.now()
    });
    quizStats._recent = quizStats._recent.slice(0, 40);
    saveQuizStats();
}
window.recordAnswer = recordAnswer;

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
    if (quizStatsSaveTimer) clearTimeout(quizStatsSaveTimer);
    quizStatsSaveTimer = setTimeout(async () => {
        try {
            await setDoc(doc(db, "kidStats", currentActiveId), {
                stats: quizStats,
                name: (cachedKidProfiles.find(p => p.id === currentActiveId) || {}).name || '',
                updatedAt: Date.now()
            });
        } catch (e) { console.error('Stats save error:', e); }
    }, 800);
}

async function loadQuizStats() {
    quizStats = {};
    if (!currentActiveId) return;
    try {
        const snap = await getDoc(doc(db, "kidStats", currentActiveId));
        if (snap.exists()) quizStats = snap.data().stats || {};
    } catch (e) { console.error('Stats load error:', e); }
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
                    <span class="rep-avatar">${escapeHtml(r.p.avatar || '🚀')}</span>
                    <span class="rep-name">
                        ${escapeHtml(r.p.name)}
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
                    <span class="rr-q">${meta.icon} ${escapeHtml(r.q || meta.name)}</span>
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
            <span class="rep-kid-avatar">${escapeHtml(kid.avatar || '🚀')}</span>
            <div>
                <h3>${escapeHtml(kid.name)}</h3>
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
// KIDZONE SAFE SOCIAL CLUB
// Admin-moderated, no hidden private chats. All notes are visible to Admin.
// ============================================================
let safeZonePosts = [];
let safeZoneChats = [];
let safeZoneProfileChats = []; // chat fallback stored in kidProfiles so it syncs across devices
let safeZoneProgressChats = []; // chat fallback stored in kidProgress inbox
let safeProgressChatUnsub = null;
let selectedSafeChatFriend = '';
let safeChatStickBottom = true;
let safeZoneFilter = 'all';

// If Firestore rules do not yet allow the new safeZoneChats collection,
// chat still works on the current device instead of failing for the child.
function localSafeChatKey() { return 'kidzone_safe_chats_v1'; }
function getLocalSafeChats() {
    try { return JSON.parse(localStorage.getItem(localSafeChatKey()) || '[]'); }
    catch (e) { return []; }
}
function saveLocalSafeChats(list) {
    try { localStorage.setItem(localSafeChatKey(), JSON.stringify((list || []).slice(-500))); }
    catch (e) { console.warn('[KidZone] local chat save failed:', e); }
}
function upsertLocalSafeChat(msg) {
    const list = getLocalSafeChats().filter(m => m.id !== msg.id);
    list.push(msg);
    saveLocalSafeChats(list);
}
function getAllSafeZoneChats() {
    const map = new Map();
    [...getLocalSafeChats(), ...safeZoneProgressChats, ...safeZoneProfileChats, ...safeZoneChats].forEach(m => { if (m && m.id) map.set(m.id, m); });
    return [...map.values()].sort((a,b) => (a.createdAt || 0) - (b.createdAt || 0));
}
function preserveSafeZoneScroll(pageY, chatY) {
    // Mobile browsers try to keep focused/changed elements visible after every
    // realtime update. Force the page and chat panel back to where the child was.
    const restore = () => {
        try { window.scrollTo(0, pageY); } catch (e) {}
        const win = document.getElementById('safeChatWindow');
        if (win && typeof chatY === 'number') win.scrollTop = chatY;
    };
    restore();
    requestAnimationFrame(restore);
    setTimeout(restore, 80);
    setTimeout(restore, 220);
}

function getLatestSafeChatFriendId() {
    if (!currentActiveId) return '';
    const mine = getAllSafeZoneChats()
        .filter(m => m && m.status !== 'deleted' && (m.fromId === currentActiveId || m.toId === currentActiveId))
        .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    if (!mine.length) return '';
    const latest = mine[0];
    return latest.fromId === currentActiveId ? latest.toId : latest.fromId;
}
let safeZoneBuilt = false;
let safeZonePaused = false;

const SAFE_BAD_WORDS = ['stupid', 'idiot', 'hate', 'kill', 'ugly', 'dumb', 'shut up'];

function safeZoneContainsBadWords(text) {
    const lower = String(text || '').toLowerCase();
    return SAFE_BAD_WORDS.some(w => lower.includes(w));
}

function getSafePost(id) { return safeZonePosts.find(p => p.id === id); }

function safePostTime(ms) {
    if (!ms) return '';
    try { return new Date(ms).toLocaleString(undefined, { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' }); }
    catch(e) { return ''; }
}

function listenToSafeZone() {
    onSnapshot(collection(db, 'safeZonePosts'), (snapshot) => {
        safeZonePosts = [];
        snapshot.forEach(docSnap => safeZonePosts.push(docSnap.data()));
        safeZonePosts.sort((a,b) => (b.createdAt || 0) - (a.createdAt || 0));
        renderSafeZone();
    }, (error) => console.error('Safe Zone sync error:', error));

    onSnapshot(collection(db, 'safeZoneChats'), (snapshot) => {
        safeZoneChats = [];
        snapshot.forEach(docSnap => safeZoneChats.push(docSnap.data()));
        safeZoneChats.sort((a,b) => (a.createdAt || 0) - (b.createdAt || 0));
        renderSafeChat();
        renderSafeAdminPanel();
    }, (error) => console.error('Safe Zone chat sync error:', error));

    onSnapshot(doc(db, 'safeZoneSettings', 'main'), (snap) => {
        safeZonePaused = snap.exists() ? !!snap.data().paused : false;
        renderSafeZone();
    }, (error) => console.error('Safe Zone settings sync error:', error));
}

function buildSafeZone() {
    safeZoneBuilt = true;
    populateSafeAudience();
    populateSafeChatFriends();
    renderSafeZone();
    renderSafeChat();
    wireSafeChatAttachmentPreview();
    syncLocalSafeChatsToCloud();
}
window.buildSafeZone = buildSafeZone;
window.updateSafeZoneIdentity = updateSafeZoneIdentity;

function populateSafeAudience() {
    const sel = document.getElementById('safePostAudience');
    if (!sel) return;
    const oldVal = sel.value || 'everyone';
    sel.innerHTML = '<option value="everyone">🌍 Everyone in KidZone</option>';
    const buddies = cachedKidProfiles.filter(k => k.id !== currentActiveId);
    buddies.forEach(k => {
        const opt = document.createElement('option');
        opt.value = k.id;
        opt.innerText = `💌 Buddy note to ${k.avatar || '🚀'} ${k.name || 'Explorer'} (Admin can see)`;
        sel.appendChild(opt);
    });
    if (!buddies.length && currentRole === 'kid') {
        const opt = document.createElement('option');
        opt.value = '';
        opt.disabled = true;
        opt.innerText = 'No buddies yet — ask Admin to add another kid';
        sel.appendChild(opt);
    }
    if ([...sel.options].some(o => o.value === oldVal)) sel.value = oldVal;
}

function filterSafeZone(filter, evt) {
    safeZoneFilter = filter;
    playSound(460);
    document.querySelectorAll('.safe-chip').forEach(c => c.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
    renderSafeZone();
}
window.filterSafeZone = filterSafeZone;

function renderSafeZone() {
    const feed = document.getElementById('safezoneFeed');
    if (!feed) return;
    const _safePageY = window.scrollY || document.documentElement.scrollTop || 0;
    const _safeChatWin = document.getElementById('safeChatWindow');
    const _safeChatY = _safeChatWin ? _safeChatWin.scrollTop : 0;
    populateSafeAudience();
    populateSafeChatFriends();

    const adminPanel = document.getElementById('safezoneAdminPanel');
    if (adminPanel) adminPanel.style.display = currentRole === 'admin' ? 'block' : 'none';
    document.querySelectorAll('.admin-only-filter').forEach(el => el.style.display = currentRole === 'admin' ? 'inline-block' : 'none');

    updateSafeZoneIdentity();

    const composer = document.getElementById('safezoneComposer');
    if (composer) composer.style.display = currentRole === 'admin' || currentRole === 'kid' ? 'flex' : 'none';
    const hint = document.getElementById('safeComposerHint');
    if (hint) hint.innerText = safeZonePaused && currentRole !== 'admin'
        ? 'Admin has paused posting for now. You can still read approved posts.'
        : (currentRole === 'admin' ? 'Admin posts appear immediately. Kids posts still need approval.' : 'Posts are sent to Admin for approval before everyone sees them.');
    const postBtn = document.querySelector('#safezoneComposer .login-submit-btn');
    if (postBtn) postBtn.disabled = safeZonePaused && currentRole !== 'admin';

    renderSafeAdminPanel();

    const q = ((document.getElementById('safezoneSearch') || {}).value || '').trim().toLowerCase();
    let list = safeZonePosts.filter(p => p.status !== 'deleted');

    if (currentRole !== 'admin') {
        list = list.filter(p => p.status === 'approved' || p.authorId === currentActiveId);
    }
    if (safeZoneFilter === 'mine') list = list.filter(p => p.authorId === currentActiveId);
    if (safeZoneFilter === 'notes') list = list.filter(p => p.audienceId && p.audienceId !== 'everyone');
    if (safeZoneFilter === 'pending') list = list.filter(p => p.status === 'pending' || (p.comments || []).some(c => c.status === 'pending'));
    if (q) list = list.filter(p => (p.text || '').toLowerCase().includes(q) || (p.authorName || '').toLowerCase().includes(q));

    if (!list.length) {
        feed.innerHTML = '<div class="safe-empty">📭 No safe posts here yet. Share something kind or clever!</div>';
        preserveSafeZoneScroll(_safePageY, _safeChatY);
        return;
    }
    feed.innerHTML = list.map(renderSafePostCard).join('');
    preserveSafeZoneScroll(_safePageY, _safeChatY);
}
window.renderSafeZone = renderSafeZone;

function renderSafeAdminPanel() {
    if (currentRole !== 'admin') return;
    const stats = document.getElementById('safezoneAdminStats');
    const pendingBox = document.getElementById('safezonePendingQueue');
    const pendingPosts = safeZonePosts.filter(p => p.status === 'pending');
    const pendingComments = safeZonePosts.reduce((n,p)=> n + (p.comments || []).filter(c => c.status === 'pending').length, 0);
    const allChats = getAllSafeZoneChats();
    const pendingChats = allChats.filter(m => m.status === 'pending').length;
    const approved = safeZonePosts.filter(p => p.status === 'approved').length;
    if (stats) stats.innerHTML = `
        <div class="safe-stat"><strong>${pendingPosts.length}</strong><span>Pending Posts</span></div>
        <div class="safe-stat"><strong>${pendingComments}</strong><span>Pending Comments</span></div>
        <div class="safe-stat"><strong>${pendingChats}</strong><span>Pending Chats</span></div>
        <div class="safe-stat"><strong>${approved}</strong><span>Approved Posts</span></div>
        <div class="safe-stat"><strong>${safeZonePaused ? 'ON' : 'OFF'}</strong><span>Posting Paused</span></div>`;
    const btn = document.getElementById('safePauseBtn');
    if (btn) btn.innerText = safeZonePaused ? '▶️ Resume Posting' : '⏸️ Pause Posting';
    if (pendingBox) {
        const items = [];
        pendingPosts.slice(0,5).forEach(p => items.push(`<div class="safe-pending-card"><div><strong>${escapeHtml(p.authorAvatar || '🚀')} ${escapeHtml(p.authorName || 'Explorer')}</strong><p>${escapeHtml(p.text || '')}</p></div><div class="safe-pending-actions"><button class="solar-tool-btn active" onclick="safeApprovePost('${p.id}')">✅ Approve</button><button class="book-btn danger" onclick="safeDeletePost('${p.id}')">🗑️ Delete</button></div></div>`));
        if (!items.length) items.push('<div class="safe-empty" style="padding:14px;">✅ No pending posts right now.</div>');
        pendingBox.innerHTML = items.join('');
    }
    const chatQueue = document.getElementById('safezoneChatAdminQueue');
    if (chatQueue) {
        const pendingChat = getAllSafeZoneChats().filter(m => m.status === 'pending').slice(0, 8);
        chatQueue.innerHTML = pendingChat.length ? pendingChat.map(m => `<div class="safe-pending-card"><div><strong>💬 ${escapeHtml(m.fromName || 'Explorer')} → ${escapeHtml(m.toName || 'Friend')}</strong><p>${escapeHtml(m.text || '')}</p></div><div class="safe-pending-actions"><button class="solar-tool-btn active" onclick="safeApproveChat('${m.id}')">✅ Approve</button><button class="book-btn danger" onclick="safeDeleteChat('${m.id}')">🗑️ Delete</button></div></div>`).join('') : '';
    }
}

function renderSafePostCard(p) {
    const liked = (p.likes || []).includes(currentActiveId);
    const isNote = p.audienceId && p.audienceId !== 'everyone';
    const visibleComments = (p.comments || []).filter(c => currentRole === 'admin' || c.status === 'approved' || c.authorId === currentActiveId);
    const pendingClass = p.status === 'pending' ? ' pending' : '';
    const targetName = isNote ? (cachedKidProfiles.find(k => k.id === p.audienceId)?.name || 'a friend') : 'Everyone';
    return `<article class="safe-post${pendingClass}" id="safePost_${p.id}">
        <div class="safe-post-head">
            <div class="safe-author"><span class="safe-author-avatar">${escapeHtml(p.authorAvatar || '🚀')}</span><div><strong>${escapeHtml(p.authorName || 'Explorer')}</strong><small>${escapeHtml(safePostTime(p.createdAt))}</small></div></div>
            <div class="safe-post-badges">
                <span class="safe-badge ${p.status === 'approved' ? 'approved' : 'pending'}">${p.status === 'approved' ? '✅ Approved' : '⏳ Waiting'}</span>
                ${isNote ? `<span class="safe-badge note">💌 To ${escapeHtml(targetName)}</span>` : '<span class="safe-badge">🏠 Club Feed</span>'}
                <span class="safe-badge">${escapeHtml(p.mood || '😊')}</span>
            </div>
        </div>
        <div class="safe-post-text">${escapeHtml(p.text || '')}</div>
        <div class="safe-post-actions">
            <button class="safe-action-btn ${liked ? 'liked' : ''}" onclick="toggleSafeLike('${p.id}')">❤️ ${(p.likes || []).length} Like</button>
            <button class="safe-action-btn" onclick="focusSafeComment('${p.id}')">💬 ${visibleComments.length} Comment</button>
            ${currentRole === 'admin' ? `<button class="safe-action-btn" onclick="safeApprovePost('${p.id}')">✅ Approve</button><button class="safe-action-btn" onclick="safeHidePost('${p.id}')">🙈 Hide</button><button class="safe-action-btn" onclick="safeDeletePost('${p.id}')">🗑️ Delete</button>` : ''}
        </div>
        <div class="safe-comments">
            ${visibleComments.map(c => `<div class="safe-comment ${c.status === 'pending' ? 'pending' : ''}"><strong>${escapeHtml(c.authorAvatar || '🚀')} ${escapeHtml(c.authorName || 'Explorer')}:</strong> ${escapeHtml(c.text || '')} ${c.status === 'pending' ? '<em>⏳ waiting</em>' : ''}${currentRole === 'admin' && c.status === 'pending' ? ` <button class="book-btn" onclick="safeApproveComment('${p.id}','${c.id}')">Approve</button>` : ''}</div>`).join('')}
        </div>
        ${currentRole === 'kid' || currentRole === 'admin' ? `<div class="safe-comment-box"><input id="comment_${p.id}" maxlength="220" placeholder="Write a kind comment..."><button class="book-btn" onclick="submitSafeComment('${p.id}')">Send 💬</button></div>` : ''}
    </article>`;
}

function focusSafeComment(postId) {
    const input = document.getElementById('comment_' + postId);
    if (input) input.focus();
}
window.focusSafeComment = focusSafeComment;


function populateSafeChatFriends() {
    const sel = document.getElementById('safeChatFriendSelect');
    if (!sel) return;

    const old = selectedSafeChatFriend || sel.value;
    sel.innerHTML = '<option value="">Choose a friend...</option>';

    // Use the live profile cache. Kids see every other kid profile.
    // Admin sees all kid profiles for monitoring/testing chat.
    const friends = (cachedKidProfiles || [])
        .filter(k => k && k.id)
        .filter(k => currentRole === 'admin' || k.id !== currentActiveId)
        .sort((a, b) => String(a.name || '').localeCompare(String(b.name || '')));

    const latestFriendId = (!old && currentRole !== 'admin') ? getLatestSafeChatFriendId() : '';
    friends.forEach(k => {
        const opt = document.createElement('option');
        opt.value = k.id;
        const hasMessages = getAllSafeZoneChats().some(m => m.status !== 'deleted' && ((m.fromId === currentActiveId && m.toId === k.id) || (m.fromId === k.id && m.toId === currentActiveId)));
        opt.innerText = `${k.avatar || '🚀'} ${k.name || 'Explorer'}${hasMessages ? ' 💬' : ''}`;
        sel.appendChild(opt);
    });

    if (!friends.length) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.disabled = true;
        opt.innerText = currentRole === 'admin'
            ? 'No kid profiles yet — create kids first'
            : 'No friends yet — ask Admin to add another kid';
        sel.appendChild(opt);
    }

    if ([...sel.options].some(o => o.value === old && old)) {
        sel.value = old;
        selectedSafeChatFriend = old;
    } else if (latestFriendId && friends.some(k => k.id === latestFriendId)) {
        sel.value = latestFriendId;
        selectedSafeChatFriend = latestFriendId;
    } else if (selectedSafeChatFriend && !friends.some(k => k.id === selectedSafeChatFriend)) {
        selectedSafeChatFriend = '';
    }
}

function selectSafeChatFriend(friendId) {
    selectedSafeChatFriend = friendId || '';
    safeChatStickBottom = true;
    playSound(480);
    renderSafeChat();
}
window.selectSafeChatFriend = selectSafeChatFriend;

function chatVisibleToCurrent(m) {
    if (currentRole === 'admin') return true;
    if (!currentActiveId) return false;
    const mine = m.fromId === currentActiveId || m.toId === currentActiveId;
    if (!mine) return false;
    // Sender can see their own pending typed message; receiver only sees approved messages.
    return m.status === 'approved' || m.fromId === currentActiveId;
}


function wireSafeChatAttachmentPreview() {
    const input = document.getElementById('safeChatAttachment');
    if (!input || input.dataset.wired === 'yes') return;
    input.dataset.wired = 'yes';
    input.addEventListener('change', () => {
        const box = document.getElementById('safeChatAttachmentPreview');
        const f = input.files && input.files[0];
        if (!box) return;
        if (!f) { box.innerHTML = ''; return; }
        const sizeKb = Math.round(f.size / 1024);
        if ((f.type || '').startsWith('image/')) {
            const url = URL.createObjectURL(f);
            box.innerHTML = `<div class="safe-attachment-preview-card">
                <img src="${url}" alt="Attachment preview">
                <div><strong>📎 ${escapeHtml(f.name)}</strong><small>${sizeKb} KB · image preview</small></div>
                <button type="button" class="safe-remove-attachment" onclick="clearSafeChatAttachment()">✖</button>
            </div>`;
        } else {
            box.innerHTML = `<div class="safe-attachment-preview-card file">
                <span class="safe-file-big">📎</span>
                <div><strong>${escapeHtml(f.name)}</strong><small>${sizeKb} KB · will be downloadable</small></div>
                <button type="button" class="safe-remove-attachment" onclick="clearSafeChatAttachment()">✖</button>
            </div>`;
        }
    });
}

function clearSafeChatAttachment() {
    const input = document.getElementById('safeChatAttachment');
    const box = document.getElementById('safeChatAttachmentPreview');
    if (input) input.value = '';
    if (box) box.innerHTML = '';
}
window.clearSafeChatAttachment = clearSafeChatAttachment;

function addSafeChatEmoji(emoji) {
    const input = document.getElementById('safeChatInput');
    if (!input) return;
    const start = (typeof input.selectionStart === 'number') ? input.selectionStart : input.value.length;
    const end = (typeof input.selectionEnd === 'number') ? input.selectionEnd : input.value.length;
    input.value = input.value.slice(0, start) + emoji + input.value.slice(end);
    // Do not force focus on mobile; focusing opens the keyboard and makes the page jump.
    try { input.selectionStart = input.selectionEnd = start + emoji.length; } catch (e) {}
    input.dispatchEvent(new Event('input', { bubbles: true }));
}
window.addSafeChatEmoji = addSafeChatEmoji;

function renderSafeChatAttachment(att) {
    if (!att || !att.dataUrl) return '';
    const name = escapeHtml(att.name || 'attachment');
    const url = escapeHtml(att.dataUrl);
    if ((att.type || '').startsWith('image/')) {
        return `<span class="safe-chat-attachment">
            <a href="${url}" target="_blank" rel="noopener" title="Open image preview"><img src="${url}" alt="${name}"></a>
            <a class="safe-chat-download" href="${url}" download="${name}">⬇️ Download image</a>
        </span>`;
    }
    return `<span class="safe-chat-attachment">
        <a class="safe-chat-file-link" href="${url}" target="_blank" rel="noopener">👁️ Preview ${name}</a>
        <a class="safe-chat-download" href="${url}" download="${name}">⬇️ Download file</a>
    </span>`;
}
async function safeChatFileToDataUrl(file) {
    if (!file) return null;
    const type = file.type || '';
    // Compress photos so they can sync through Firestore array fields.
    if (type.startsWith('image/')) {
        if (file.size > 7 * 1024 * 1024) throw new Error('Image is too large. Please choose a smaller picture.');
        const raw = await new Promise((resolve, reject) => {
            const r = new FileReader();
            r.onload = () => resolve(r.result);
            r.onerror = () => reject(new Error('Could not read image.'));
            r.readAsDataURL(file);
        });
        const img = await new Promise((resolve, reject) => {
            const im = new Image();
            im.onload = () => resolve(im);
            im.onerror = () => reject(new Error('Could not load image.'));
            im.src = raw;
        });
        const maxSide = 720;
        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        let dataUrl = canvas.toDataURL('image/jpeg', 0.68);
        // If still big, reduce once more.
        if (dataUrl.length > 650000) dataUrl = canvas.toDataURL('image/jpeg', 0.48);
        return { name: (file.name || 'photo').replace(/\.[^.]+$/, '') + '.jpg', type: 'image/jpeg', size: Math.round(dataUrl.length * 0.75), dataUrl };
    }
    return fileToDataUrl(file, 520 * 1024);
}

function renderSafeChat() {
    const win = document.getElementById('safeChatWindow');
    if (!win) return;
    const _safePageY = window.scrollY || document.documentElement.scrollTop || 0;
    const _safeChatY = win.scrollTop || 0;
    const panel = document.getElementById('safezoneChatPanel');
    if (panel) panel.style.display = currentRole === 'kid' || currentRole === 'admin' ? 'block' : 'none';
    populateSafeChatFriends();


    if (!selectedSafeChatFriend) {
        const recentIds = [...new Set(getAllSafeZoneChats()
            .filter(m => m.status !== 'deleted' && (m.fromId === currentActiveId || m.toId === currentActiveId))
            .sort((a,b) => (b.createdAt || 0) - (a.createdAt || 0))
            .map(m => m.fromId === currentActiveId ? m.toId : m.fromId))];
        if (recentIds.length) {
            win.innerHTML = `<div class="safe-empty">💬 Recent chats:<br>${recentIds.map(id => {
                const k = cachedKidProfiles.find(x => x.id === id) || {};
                return `<button type="button" class="book-btn" style="margin:6px;" onclick="selectSafeChatFriend('${id}')">${escapeHtml(k.avatar || '🚀')} ${escapeHtml(k.name || 'Friend')}</button>`;
            }).join('')}</div>`;
        } else {
            win.innerHTML = '<div class="safe-empty">👋 Choose a friend to start a safe chat.</div>';
        }
        preserveSafeZoneScroll(_safePageY, _safeChatY);
        return;
    }
    const friend = cachedKidProfiles.find(k => k.id === selectedSafeChatFriend);
    const messages = getAllSafeZoneChats().filter(m => m.status !== 'deleted' && chatVisibleToCurrent(m) && (
        currentRole === 'admin'
            ? (m.fromId === selectedSafeChatFriend || m.toId === selectedSafeChatFriend)
            : ((m.fromId === currentActiveId && m.toId === selectedSafeChatFriend) || (m.fromId === selectedSafeChatFriend && m.toId === currentActiveId))
    ));
    if (!messages.length) {
        win.innerHTML = `<div class="safe-empty">💬 No messages yet with ${escapeHtml(friend ? friend.name : 'this friend')}. Send a quick kind message!</div>`;
        preserveSafeZoneScroll(_safePageY, _safeChatY);
        return;
    }
    win.innerHTML = messages.map(m => {
        const isMe = m.fromId === currentActiveId;
        const pending = m.status === 'pending';
        return `<div class="safe-chat-bubble ${isMe ? 'me' : 'friend'} ${pending ? 'pending' : ''}">
            ${escapeHtml(m.text || '')}
            ${renderSafeChatAttachment(m.attachment)}
            <small>${escapeHtml(m.fromName || 'Explorer')} · ${safePostTime(m.createdAt)}</small>
        </div>`;
    }).join('');

    // Do NOT change scrollTop here. Realtime Firebase/profile updates can arrive
    // many times per second and moving scrollTop causes the up/down jumping on phones.
    safeChatStickBottom = false;
    preserveSafeZoneScroll(_safePageY, _safeChatY);
}
window.renderSafeChat = renderSafeChat;

async function sendSafeQuickMessage(text) {
    await sendSafeChatMessage(text, true);
}
window.sendSafeQuickMessage = sendSafeQuickMessage;


async function saveSafeChatToProfileFallback(data) {
    const profileChat = { ...data, kind: 'safeChat', profileFallback: true };
    await setDoc(doc(db, 'kidProfiles', 'safechat_' + data.id), profileChat);
}
async function saveSafeChatToOwnProfileOutbox(data) {
    // Most Firestore rule sets for this app already allow a kid to update
    // their own kidProfiles document (used for lastLogin). Store the chat
    // message there so friends can receive it through the existing profile feed.
    const outboxMsg = { ...data, ownProfileOutbox: true };
    await setDoc(doc(db, 'kidProfiles', data.fromId), { safeOutbox: arrayUnion(outboxMsg) }, { merge: true });
}
async function saveSafeChatToProgressFallback(data) {
    const progressChat = { ...data, progressFallback: true };
    // Put a copy in both children's progress docs so both devices can receive it.
    await Promise.all([
        setDoc(doc(db, 'kidProgress', data.fromId), { safeChats: arrayUnion(progressChat) }, { merge: true }),
        setDoc(doc(db, 'kidProgress', data.toId), { safeChats: arrayUnion(progressChat) }, { merge: true })
    ]);
}

function setupSafeProgressChatListener() {
    if (safeProgressChatUnsub) {
        try { safeProgressChatUnsub(); } catch (e) {}
        safeProgressChatUnsub = null;
    }
    safeZoneProgressChats = [];
    if (!currentActiveId || currentRole === 'admin') return;
    safeProgressChatUnsub = onSnapshot(doc(db, 'kidProgress', currentActiveId), (snap) => {
        const data = snap.exists() ? (snap.data() || {}) : {};
        safeZoneProgressChats = Array.isArray(data.safeChats) ? data.safeChats.filter(m => m && m.id) : [];
        if (typeof renderSafeChat === 'function') renderSafeChat();
    }, (err) => console.warn('[KidZone] safe progress chat listener failed:', err && (err.code || err.message || err)));
}

async function syncLocalSafeChatsToCloud() {
    const local = getLocalSafeChats();
    const unsynced = local.filter(m => m && m.localOnly && m.fromId === currentActiveId && m.status !== 'deleted');
    if (!unsynced.length) return;
    for (const msg of unsynced) {
        try {
            await saveSafeChatToOwnProfileOutbox({ ...msg, localOnly: false });
            msg.localOnly = false;
            msg.ownProfileOutbox = true;
        } catch (e) {
            try {
                await saveSafeChatToProfileFallback({ ...msg, localOnly: false });
                msg.localOnly = false;
                msg.profileFallback = true;
            } catch (e2) {
                // If this still fails, keep it local and try again next time.
                break;
            }
        }
    }
    saveLocalSafeChats(local);
}

async function sendSafeChatMessage(forcedText = null, quick = false) {
    if (!currentRole || !currentActiveId) { showToast('Please log in first.', '🔒', 2500); return; }
    if (safeZonePaused && currentRole !== 'admin') { showToast('Chat is paused by Admin right now.', '⏸️', 3000); return; }
    if (!selectedSafeChatFriend) { showToast('Choose a friend first.', '👋', 2500); return; }
    const input = document.getElementById('safeChatInput');
    const text = String(forcedText || input?.value || '').trim();
    const attachmentInput = document.getElementById('safeChatAttachment');
    const attachmentFile = (!forcedText && attachmentInput && attachmentInput.files) ? attachmentInput.files[0] : null;
    if (!text && !attachmentFile) return;
    if (safeZoneContainsBadWords(text)) { showToast('Kind chat only please.', '🛡️', 3000); return; }
    let attachment = null;
    try {
        attachment = attachmentFile ? await safeChatFileToDataUrl(attachmentFile) : null;
    } catch (e) {
        showToast(e.message || 'Attachment is too large.', '📎', 3600);
        return;
    }

    const me = getActiveKidProfile() || {};
    const friend = cachedKidProfiles.find(k => k.id === selectedSafeChatFriend) || {};
    const id = 'chat_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    const data = {
        id, text, createdAt: Date.now(), quick: !!quick,
        fromId: currentActiveId,
        fromName: currentRole === 'admin' ? 'Admin' : (me.name || 'Explorer'),
        fromAvatar: currentRole === 'admin' ? '🛠️' : (me.avatar || '🚀'),
        toId: selectedSafeChatFriend,
        toName: friend.name || 'Friend',
        toAvatar: friend.avatar || '🚀',
        status: 'approved',
        attachment
    };

    // Show it immediately for the sender, without waiting for Firebase.
    upsertLocalSafeChat({ ...data, instantLocal: true });
    if (input && !forcedText) input.value = '';
    if (attachmentInput && !forcedText) attachmentInput.value = '';
    const attPreview = document.getElementById('safeChatAttachmentPreview');
    if (attPreview && !forcedText) attPreview.innerHTML = '';
    renderSafeChat();
    playSound(720, 'triangle', 0.12);

    try {
        // Fastest reliable sync for your current app: write to sender's own kid profile.
        // All devices already listen to kidProfiles, so the receiver sees this quickly.
        await saveSafeChatToOwnProfileOutbox(data);
        showToast('Safe message sent!', '💬', 1800);
        if (currentRole === 'kid') unlockBadge('safeFriend');

        // Background mirrors. Do not wait for these because some Firebase rules block them.
        setDoc(doc(db, 'safeZoneChats', id), data).catch(e => console.warn('[KidZone] chat collection mirror failed:', e && (e.code || e.message || e)));
        saveSafeChatToProfileFallback(data).catch(e => console.warn('[KidZone] profile chat mirror failed:', e && (e.code || e.message || e)));
        saveSafeChatToProgressFallback(data).catch(e => console.warn('[KidZone] progress chat mirror failed:', e && (e.code || e.message || e)));
    } catch (e) {
        console.warn('[KidZone] Own profile outbox failed; trying other sync fallbacks:', e && (e.code || e.message || e));
        try {
            await saveSafeChatToProfileFallback(data);
            showToast('Safe message sent!', '💬', 1800);
            if (currentRole === 'kid') unlockBadge('safeFriend');
        } catch (e2) {
            try {
                await saveSafeChatToProgressFallback(data);
                showToast('Safe message sent!', '💬', 1800);
                if (currentRole === 'kid') unlockBadge('safeFriend');
            } catch (e3) {
                // It is already visible to the sender locally, but cannot sync to the other device.
                upsertLocalSafeChat({ ...data, localOnly: true });
                renderSafeChat();
                showToast('Message saved here, but Firebase is blocking instant sync.', '💬', 4200);
                if (currentRole === 'kid') unlockBadge('safeFriend');
            }
        }
    }
}
window.sendSafeChatMessage = sendSafeChatMessage;

async function safeApproveChat(chatId) {
    if (currentRole !== 'admin') return;
    const local = getLocalSafeChats();
    const localMsg = local.find(m => m.id === chatId);
    try {
        await setDoc(doc(db, 'safeZoneChats', chatId), { status: 'approved', approvedAt: Date.now() }, { merge: true });
    } catch (e) {
        console.warn('[KidZone] Cloud approve chat failed, approving local copy:', e && (e.code || e.message || e));
    }
    if (localMsg) {
        localMsg.status = 'approved';
        localMsg.approvedAt = Date.now();
        saveLocalSafeChats(local);
        renderSafeChat();
        renderSafeAdminPanel();
    }
    showToast('Chat message approved.', '✅', 2200);
}
window.safeApproveChat = safeApproveChat;

async function safeDeleteChat(chatId) {
    if (currentRole !== 'admin') return;
    const local = getLocalSafeChats();
    const localMsg = local.find(m => m.id === chatId);
    try {
        await setDoc(doc(db, 'safeZoneChats', chatId), { status: 'deleted', deletedAt: Date.now() }, { merge: true });
    } catch (e) {
        console.warn('[KidZone] Cloud delete chat failed; trying profile fallback:', e && (e.code || e.message || e));
        try { await setDoc(doc(db, 'kidProfiles', 'safechat_' + chatId), { status: 'deleted', deletedAt: Date.now() }, { merge: true }); }
        catch (e2) { console.warn('[KidZone] Profile fallback delete failed:', e2 && (e2.code || e2.message || e2)); }
    }
    if (localMsg) {
        localMsg.status = 'deleted';
        localMsg.deletedAt = Date.now();
        saveLocalSafeChats(local);
        renderSafeChat();
        renderSafeAdminPanel();
    }
    showToast('Chat message deleted.', '🗑️', 2200);
}
window.safeDeleteChat = safeDeleteChat;


async function submitSafePost() {
    if (!currentRole || !currentActiveId) { showToast('Please log in first.', '🔒', 3000); return; }
    if (safeZonePaused && currentRole !== 'admin') { showToast('Posting is paused by Admin right now.', '⏸️', 3000); return; }
    const textEl = document.getElementById('safePostText');
    const text = (textEl?.value || '').trim();
    const mood = document.getElementById('safePostMood')?.value || '😊';
    const audienceId = document.getElementById('safePostAudience')?.value || 'everyone';
    if (!text) { showToast('Write something kind first.', '✍️', 2500); return; }
    if (safeZoneContainsBadWords(text)) { showToast('Please use kind words only. Ask an adult if unsure.', '🛡️', 4000); return; }
    const kid = getActiveKidProfile() || {};
    const id = 'safe_' + Date.now();
    const data = {
        id, text, mood, audienceId, createdAt: Date.now(),
        authorId: currentActiveId,
        authorName: currentRole === 'admin' ? 'Admin' : (kid.name || 'Explorer'),
        authorAvatar: currentRole === 'admin' ? '🛠️' : (kid.avatar || '🚀'),
        status: currentRole === 'admin' ? 'approved' : 'pending',
        likes: [], comments: []
    };
    try {
        await setDoc(doc(db, 'safeZonePosts', id), data);
        if (textEl) textEl.value = '';
        if (currentRole === 'kid') {
            unlockBadge(audienceId !== 'everyone' ? 'safeFriend' : 'safePoster');
            addStars(2);
        }
        showToast(currentRole === 'admin' ? 'Posted to the club!' : 'Sent to Admin for approval!', '🛡️', 3500);
        launchConfetti(16);
    } catch (e) { console.error(e); showToast('Could not post.', '❌', 3000); }
}
window.submitSafePost = submitSafePost;

async function toggleSafeLike(postId) {
    if (!currentActiveId) return;
    const p = getSafePost(postId); if (!p || p.status !== 'approved') return;
    const likes = Array.isArray(p.likes) ? [...p.likes] : [];
    const i = likes.indexOf(currentActiveId);
    if (i >= 0) likes.splice(i, 1); else likes.push(currentActiveId);
    try {
        await setDoc(doc(db, 'safeZonePosts', postId), { likes }, { merge: true });
        if (likes.length >= 5 && p.authorId === currentActiveId) unlockBadge('safePopular');
        playSound(i >= 0 ? 320 : 720);
    } catch (e) { console.error(e); }
}
window.toggleSafeLike = toggleSafeLike;

async function submitSafeComment(postId) {
    if (!currentActiveId) return;
    if (safeZonePaused && currentRole !== 'admin') { showToast('Posting is paused by Admin right now.', '⏸️', 3000); return; }
    const input = document.getElementById('comment_' + postId);
    const text = (input?.value || '').trim();
    if (!text) return;
    if (safeZoneContainsBadWords(text)) { showToast('Kind comments only please.', '🛡️', 3000); return; }
    const p = getSafePost(postId); if (!p) return;
    const kid = cachedKidProfiles.find(k => k.id === currentActiveId) || {};
    const comments = Array.isArray(p.comments) ? [...p.comments] : [];
    comments.push({
        id: 'c_' + Date.now(), text, createdAt: Date.now(), authorId: currentActiveId,
        authorName: currentRole === 'admin' ? 'Admin' : (kid.name || 'Explorer'),
        authorAvatar: currentRole === 'admin' ? '🛠️' : (kid.avatar || '🚀'),
        status: currentRole === 'admin' ? 'approved' : 'pending'
    });
    try {
        await setDoc(doc(db, 'safeZonePosts', postId), { comments }, { merge: true });
        if (input) input.value = '';
        showToast(currentRole === 'admin' ? 'Comment posted.' : 'Comment sent for approval.', '💬', 2600);
    } catch (e) { console.error(e); showToast('Could not comment.', '❌', 3000); }
}
window.submitSafeComment = submitSafeComment;

async function safeApprovePost(postId) {
    if (currentRole !== 'admin') return;
    try { await setDoc(doc(db, 'safeZonePosts', postId), { status: 'approved', approvedAt: Date.now() }, { merge: true }); showToast('Post approved.', '✅', 2200); }
    catch(e) { console.error(e); }
}
window.safeApprovePost = safeApprovePost;

async function safeHidePost(postId) {
    if (currentRole !== 'admin') return;
    try { await setDoc(doc(db, 'safeZonePosts', postId), { status: 'hidden', hiddenAt: Date.now() }, { merge: true }); showToast('Post hidden from kids.', '🙈', 2200); }
    catch(e) { console.error(e); }
}
window.safeHidePost = safeHidePost;

async function safeDeletePost(postId) {
    if (currentRole !== 'admin') return;
    if (!confirm('Delete this Safe Zone post?')) return;
    try { await setDoc(doc(db, 'safeZonePosts', postId), { status: 'deleted', deletedAt: Date.now() }, { merge: true }); showToast('Post deleted.', '🗑️', 2200); }
    catch(e) { console.error(e); }
}
window.safeDeletePost = safeDeletePost;

async function safeApproveComment(postId, commentId) {
    if (currentRole !== 'admin') return;
    const p = getSafePost(postId); if (!p) return;
    const comments = (p.comments || []).map(c => c.id === commentId ? { ...c, status:'approved', approvedAt: Date.now() } : c);
    try { await setDoc(doc(db, 'safeZonePosts', postId), { comments }, { merge: true }); showToast('Comment approved.', '✅', 2200); }
    catch(e) { console.error(e); }
}
window.safeApproveComment = safeApproveComment;

async function safeApproveAllPending() {
    if (currentRole !== 'admin') return;
    const pending = safeZonePosts.filter(p => p.status === 'pending' || (p.comments || []).some(c => c.status === 'pending'));
    const pendingChats = getAllSafeZoneChats().filter(m => m.status === 'pending');
    try {
        await Promise.all([
            ...pending.map(p => {
            const comments = (p.comments || []).map(c => c.status === 'pending' ? { ...c, status:'approved', approvedAt: Date.now() } : c);
            return setDoc(doc(db, 'safeZonePosts', p.id), { status: p.status === 'pending' ? 'approved' : p.status, comments, approvedAt: Date.now() }, { merge: true });
            }),
            ...pendingChats.map(m => setDoc(doc(db, 'safeZoneChats', m.id), { status: 'approved', approvedAt: Date.now() }, { merge: true }))
        ]);
        showToast('All pending Safe Zone items approved.', '✅', 3000);
    } catch(e) { console.error(e); showToast('Could not approve all.', '❌', 3000); }
}
window.safeApproveAllPending = safeApproveAllPending;

async function toggleSafeZonePause() {
    if (currentRole !== 'admin') return;
    try { await setDoc(doc(db, 'safeZoneSettings', 'main'), { paused: !safeZonePaused, updatedAt: Date.now() }, { merge: true }); }
    catch(e) { console.error(e); showToast('Could not update Safe Zone settings.', '❌', 3000); }
}
window.toggleSafeZonePause = toggleSafeZonePause;


// ============================================================
// HOMEWORK & TEST PAPER HUB
// ============================================================
let homeworkAssignments = [];
let homeworkSubmissions = [];
let homeworkFilter = 'all';
let currentHomeworkId = null;
let homeworkBuilt = false;

function homeworkTypeIcon(type) {
    if (type === 'Test Paper') return '🧪';
    if (type === 'Worksheet') return '📄';
    if (type === 'Reading Task') return '📖';
    return '📝';
}

function formatHomeworkDate(value) {
    if (!value) return 'No due date';
    try {
        const d = new Date(value + 'T12:00:00');
        return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) { return value; }
}

function getHomeworkSubmission(assignmentId, kidId = currentActiveId) {
    return homeworkSubmissions.find(s => s.assignmentId === assignmentId && s.kidId === kidId);
}

function fileToDataUrl(file, maxBytes = 780 * 1024) {
    return new Promise((resolve, reject) => {
        if (!file) { resolve(null); return; }
        if (file.size > maxBytes) {
            reject(new Error('File is too large. Please use a file under 750 KB, or compress it first.'));
            return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve({ name: file.name, type: file.type || 'application/octet-stream', size: file.size, dataUrl: reader.result });
        reader.onerror = () => reject(new Error('Could not read the file.'));
        reader.readAsDataURL(file);
    });
}

function listenToHomework() {
    onSnapshot(collection(db, 'homework'), (snapshot) => {
        homeworkAssignments = [];
        snapshot.forEach(docSnap => homeworkAssignments.push(docSnap.data()));
        homeworkAssignments.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        renderHomeworkHub();
    }, (error) => console.error('Homework sync error:', error));

    onSnapshot(collection(db, 'homeworkSubmissions'), (snapshot) => {
        homeworkSubmissions = [];
        snapshot.forEach(docSnap => homeworkSubmissions.push(docSnap.data()));
        renderHomeworkHub();
        if (document.getElementById('homeworkReviewPanel')?.style.display === 'block') renderHomeworkReview(currentHomeworkId);
    }, (error) => console.error('Homework submissions sync error:', error));
}

function buildHomeworkHub() {
    homeworkBuilt = true;
    renderHomeworkHub();
}
window.buildHomeworkHub = buildHomeworkHub;

function toggleHomeworkForm(force) {
    if (currentRole !== 'admin') return;
    const form = document.getElementById('homeworkUploadForm');
    if (!form) return;
    const show = typeof force === 'boolean' ? force : form.style.display === 'none';
    form.style.display = show ? 'block' : 'none';
    if (show) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
window.toggleHomeworkForm = toggleHomeworkForm;

const hwFileInputWatcher = () => {
    const input = document.getElementById('hwFile');
    if (input && input.dataset.wired !== 'yes') {
        input.dataset.wired = 'yes';
        input.addEventListener('change', () => {
            const box = document.getElementById('hwFilePreview');
            const f = input.files && input.files[0];
            if (box) box.innerText = f ? `Selected: ${f.name} (${Math.round(f.size / 1024)} KB)` : '';
        });
    }
};
setTimeout(hwFileInputWatcher, 1000);

async function handleHomeworkUpload(event) {
    event.preventDefault();
    if (currentRole !== 'admin') { showToast('Only Admin can upload homework.', '⚠️', 3000); return; }
    const title = document.getElementById('hwTitle')?.value.trim();
    const type = document.getElementById('hwType')?.value || 'Homework';
    const dueDate = document.getElementById('hwDueDate')?.value || '';
    const points = Math.max(0, Math.min(100, parseInt(document.getElementById('hwPoints')?.value || '10', 10) || 0));
    const instructions = document.getElementById('hwInstructions')?.value.trim();
    const file = document.getElementById('hwFile')?.files?.[0] || null;
    if (!title || !instructions) { showToast('Please add a title and instructions.', '⚠️', 2800); return; }

    const submitBtn = document.querySelector('#homeworkUploadForm .login-submit-btn');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerText = 'Publishing…'; }
    try {
        const fileObj = await fileToDataUrl(file);
        const id = 'hw_' + Date.now();
        const data = {
            id, title, type, dueDate, points, instructions,
            file: fileObj,
            createdAt: Date.now(), createdBy: currentActiveId || 'admin', active: true
        };
        await setDoc(doc(db, 'homework', id), data);
        event.target.reset();
        const preview = document.getElementById('hwFilePreview'); if (preview) preview.innerText = '';
        toggleHomeworkForm(false);
        playChime([523, 659, 784, 1046]);
        launchConfetti(35);
        showToast('Homework published for children!', '📝', 3500);
    } catch (err) {
        console.error(err);
        showToast(err.message || 'Could not publish homework.', '❌', 4000);
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerText = 'Publish to Children 🚀'; }
    }
}
window.handleHomeworkUpload = handleHomeworkUpload;

function filterHomeworkStatus(status, evt) {
    homeworkFilter = status;
    playSound(460);
    document.querySelectorAll('.homework-chip').forEach(c => c.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
    renderHomeworkHub();
}
window.filterHomeworkStatus = filterHomeworkStatus;

function renderHomeworkHub() {
    const grid = document.getElementById('homeworkGrid');
    if (!grid) return;
    const adminPanel = document.getElementById('homeworkAdminPanel');
    if (adminPanel) adminPanel.style.display = currentRole === 'admin' ? 'block' : 'none';
    hwFileInputWatcher();

    const term = (document.getElementById('homeworkSearch') || {}).value || '';
    const q = term.trim().toLowerCase();
    let list = homeworkAssignments.filter(a => a.active !== false);
    list = list.filter(a => !q || (a.title || '').toLowerCase().includes(q) || (a.type || '').toLowerCase().includes(q) || (a.instructions || '').toLowerCase().includes(q));
    if (currentRole !== 'admin') {
        list = list.filter(a => {
            const submitted = !!getHomeworkSubmission(a.id);
            if (homeworkFilter === 'todo') return !submitted;
            if (homeworkFilter === 'done') return submitted;
            return true;
        });
    }

    const total = homeworkAssignments.filter(a => a.active !== false).length;
    const done = currentRole === 'kid' ? homeworkAssignments.filter(a => getHomeworkSubmission(a.id)).length : homeworkSubmissions.length;
    const stats = document.getElementById('homeworkStats');
    if (stats) {
        stats.innerHTML = currentRole === 'admin'
            ? `<div class="hw-stat-card"><strong>${total}</strong><span>Assignments</span></div><div class="hw-stat-card"><strong>${homeworkSubmissions.length}</strong><span>Submissions</span></div><div class="hw-stat-card"><strong>${cachedKidProfiles.length}</strong><span>Kids</span></div>`
            : `<div class="hw-stat-card"><strong>${total}</strong><span>Total Tasks</span></div><div class="hw-stat-card"><strong>${done}</strong><span>Submitted</span></div><div class="hw-stat-card"><strong>${Math.max(0,total-done)}</strong><span>To Do</span></div>`;
    }

    if (!list.length) {
        grid.innerHTML = `<div class="homework-card"><div class="hw-card-icon">📭</div><h3>No homework found</h3><p>${currentRole === 'admin' ? 'Create the first assignment using the Admin Teacher Tools.' : 'Nothing to do right now. Great job!'}</p></div>`;
        return;
    }

    grid.innerHTML = list.map(a => {
        const sub = getHomeworkSubmission(a.id);
        const statusClass = currentRole === 'admin' ? 'admin' : (sub ? 'done' : 'todo');
        const statusText = currentRole === 'admin' ? `${homeworkSubmissions.filter(s => s.assignmentId === a.id).length} answer(s)` : (sub ? 'Submitted' : 'To Do');
        return `<div class="homework-card" role="button" tabindex="0" onclick="openHomework('${a.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openHomework('${a.id}');}">
            <span class="hw-due-badge">${escapeHtml(formatHomeworkDate(a.dueDate))}</span>
            <div class="hw-card-icon">${homeworkTypeIcon(a.type)}</div>
            <h3>${escapeHtml(a.title)}</h3>
            <p>${escapeHtml((a.instructions || '').slice(0, 110))}${(a.instructions || '').length > 110 ? '…' : ''}</p>
            <span class="hw-status ${statusClass}">${statusClass === 'done' ? '✅' : statusClass === 'todo' ? '🟡' : '📊'} ${escapeHtml(statusText)}</span>
            ${a.file ? `<span class="hw-status admin" style="margin-left:6px;">📎 File</span>` : ''}
        </div>`;
    }).join('');
}
window.renderHomeworkHub = renderHomeworkHub;

function renderHomeworkFile(file) {
    if (!file || !file.dataUrl) return '<p style="color:var(--text-muted);font-weight:700;">No file attached. Follow the written instructions.</p>';
    const safeName = escapeHtml(file.name || 'homework-file');
    const href = escapeHtml(file.dataUrl);
    const img = (file.type || '').startsWith('image/') ? `<img class="hw-file-image" src="${href}" alt="${safeName}">` : '';
    const pdf = (file.type || '').includes('pdf') ? `<iframe title="${safeName}" src="${href}" style="width:100%;height:420px;border:0;border-radius:12px;margin-top:12px;background:#fff;"></iframe>` : '';
    return `<a class="hw-file-link" href="${href}" download="${safeName}" target="_blank" rel="noopener">📎 Open / Download ${safeName}</a>${img}${pdf}`;
}

function openHomework(id) {
    const a = homeworkAssignments.find(x => x.id === id);
    if (!a) return;
    currentHomeworkId = id;
    playSound(620);
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
    set('homeworkModalIcon', homeworkTypeIcon(a.type));
    set('homeworkModalType', a.type || 'Homework');
    set('homeworkModalTitle', a.title || 'Assignment');
    set('homeworkModalDue', `Due: ${formatHomeworkDate(a.dueDate)} · Reward: ${a.points || 0} stars`);
    const inst = document.getElementById('homeworkModalInstructions'); if (inst) inst.innerText = a.instructions || '';
    const fileBox = document.getElementById('homeworkModalFile'); if (fileBox) fileBox.innerHTML = renderHomeworkFile(a.file);
    const submitBox = document.getElementById('homeworkKidSubmitBox');
    const adminActions = document.getElementById('homeworkAdminModalActions');
    const answer = document.getElementById('homeworkAnswerText');
    if (currentRole === 'admin') {
        if (submitBox) submitBox.style.display = 'none';
        if (adminActions) adminActions.style.display = 'flex';
    } else {
        const sub = getHomeworkSubmission(id);
        if (submitBox) submitBox.style.display = 'flex';
        if (adminActions) adminActions.style.display = 'none';
        if (answer) answer.value = sub ? (sub.answer || '') : '';
    }
    const modal = document.getElementById('homeworkModal'); if (modal) modal.style.display = 'flex';
}
window.openHomework = openHomework;

function closeHomeworkModal() {
    const m = document.getElementById('homeworkModal'); if (m) m.style.display = 'none';
    const fileInput = document.getElementById('homeworkAnswerFile'); if (fileInput) fileInput.value = '';
    playSound(350);
}
window.closeHomeworkModal = closeHomeworkModal;
function closeHomeworkModalOnBg(e) { if (e.target.id === 'homeworkModal') closeHomeworkModal(); }
window.closeHomeworkModalOnBg = closeHomeworkModalOnBg;

async function submitHomeworkAnswer() {
    if (currentRole !== 'kid' || !currentActiveId || !currentHomeworkId) { showToast('Please log in as a kid to submit work.', '⚠️', 3000); return; }
    const a = homeworkAssignments.find(x => x.id === currentHomeworkId);
    if (!a) return;
    const answer = document.getElementById('homeworkAnswerText')?.value.trim() || '';
    const file = document.getElementById('homeworkAnswerFile')?.files?.[0] || null;
    if (!answer && !file) { showToast('Type an answer or attach a file/photo first.', '⚠️', 3000); return; }
    const submitBtn = document.querySelector('#homeworkKidSubmitBox .login-submit-btn');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerText = 'Submitting…'; }
    try {
        const existing = getHomeworkSubmission(currentHomeworkId);
        const fileObj = await fileToDataUrl(file);
        const kid = cachedKidProfiles.find(p => p.id === currentActiveId) || {};
        const id = `${currentHomeworkId}_${currentActiveId}`;
        await setDoc(doc(db, 'homeworkSubmissions', id), {
            id, assignmentId: currentHomeworkId, assignmentTitle: a.title,
            kidId: currentActiveId, kidName: kid.name || 'Explorer', kidAvatar: kid.avatar || '🚀',
            answer, file: fileObj || (existing ? existing.file : null), submittedAt: Date.now(), status: 'submitted',
            score: existing ? (existing.score || null) : null, feedback: existing ? (existing.feedback || '') : ''
        }, { merge: true });
        if (!existing) addStars(a.points || 0);
        launchConfetti(30);
        showToast(existing ? 'Work updated!' : `Submitted! You earned ${a.points || 0} stars.`, '✅', 3500);
        closeHomeworkModal();
        renderHomeworkHub();
    } catch (err) {
        console.error(err);
        showToast(err.message || 'Could not submit work.', '❌', 4000);
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerText = 'Submit My Work ✅'; }
    }
}
window.submitHomeworkAnswer = submitHomeworkAnswer;

function openHomeworkReviewForCurrent() {
    closeHomeworkModal();
    renderHomeworkReview(currentHomeworkId);
    const panel = document.getElementById('homeworkReviewPanel');
    if (panel) { panel.style.display = 'block'; panel.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
}
window.openHomeworkReviewForCurrent = openHomeworkReviewForCurrent;

function renderHomeworkReview(assignmentId = currentHomeworkId) {
    currentHomeworkId = assignmentId;
    const body = document.getElementById('homeworkReviewBody');
    if (!body) return;
    const a = homeworkAssignments.find(x => x.id === assignmentId);
    const subs = homeworkSubmissions.filter(s => s.assignmentId === assignmentId).sort((x,y)=>(y.submittedAt||0)-(x.submittedAt||0));
    if (!a) { body.innerHTML = '<p class="rep-loading">Assignment not found.</p>'; return; }
    if (!subs.length) { body.innerHTML = `<p class="rep-loading">No children have submitted <strong>${escapeHtml(a.title)}</strong> yet.</p>`; return; }
    body.innerHTML = subs.map(s => {
        const when = s.submittedAt ? new Date(s.submittedAt).toLocaleString() : '';
        return `<div class="hw-review-row">
            <h4>${escapeHtml(s.kidAvatar || '🚀')} ${escapeHtml(s.kidName || 'Explorer')}</h4>
            <p><strong>${escapeHtml(a.title)}</strong> · submitted ${escapeHtml(when)}</p>
            <p>${escapeHtml(s.answer || '(No typed answer)')}</p>
            ${s.file ? renderHomeworkFile(s.file) : ''}
            <div class="hw-review-actions">
                <input type="text" id="fb_${s.id}" placeholder="Feedback" value="${escapeHtml(s.feedback || '')}">
                <input type="number" id="sc_${s.id}" placeholder="Score" min="0" max="100" value="${escapeHtml(s.score == null ? '' : s.score)}">
                <button class="solar-tool-btn" onclick="saveHomeworkFeedback('${s.id}')">💾 Save Feedback</button>
            </div>
        </div>`;
    }).join('');
}
window.renderHomeworkReview = renderHomeworkReview;
function closeHomeworkReview() { const p = document.getElementById('homeworkReviewPanel'); if (p) p.style.display = 'none'; }
window.closeHomeworkReview = closeHomeworkReview;

async function saveHomeworkFeedback(submissionId) {
    if (currentRole !== 'admin') return;
    const sub = homeworkSubmissions.find(s => s.id === submissionId);
    if (!sub) return;
    const feedback = document.getElementById('fb_' + submissionId)?.value || '';
    const scoreVal = document.getElementById('sc_' + submissionId)?.value;
    const score = scoreVal === '' ? null : Math.max(0, Math.min(100, parseInt(scoreVal, 10) || 0));
    try {
        await setDoc(doc(db, 'homeworkSubmissions', submissionId), { feedback, score, reviewedAt: Date.now() }, { merge: true });
        showToast('Feedback saved!', '💾', 2500);
    } catch (e) { console.error(e); showToast('Could not save feedback.', '❌', 3000); }
}
window.saveHomeworkFeedback = saveHomeworkFeedback;

async function deleteCurrentHomework() {
    if (currentRole !== 'admin' || !currentHomeworkId) return;
    const a = homeworkAssignments.find(x => x.id === currentHomeworkId);
    if (!a) return;
    if (!confirm(`Delete assignment "${a.title}"? Submissions will stay in reports.`)) return;
    try {
        await setDoc(doc(db, 'homework', currentHomeworkId), { active: false, deletedAt: Date.now() }, { merge: true });
        closeHomeworkModal();
        showToast('Assignment removed from children.', '🗑️', 3000);
    } catch (e) { console.error(e); showToast('Could not delete assignment.', '❌', 3000); }
}
window.deleteCurrentHomework = deleteCurrentHomework;


// ============================================================
// MOUNTAINS & RIVERS OF THE WORLD
// ============================================================
const GEO_TYPES = {
    mountain: { icon: '🏔️', label: 'Mountain', color: '#0f766e' },
    river:    { icon: '🌊', label: 'River', color: '#2563eb' },
    range:    { icon: '⛰️', label: 'Mountain Range', color: '#7c3aed' }
};

const GEO_TOPICS = [
    { id:'everest', type:'mountain', name:'Mount Everest', icon:'🏔️', place:'Asia • Himalayas • Nepal/China', continent:'Asia', stat1:'8,849 m', stat1Label:'Height', stat2:'Highest mountain on Earth', stat2Label:'Famous for', videoId:'8MUTVxLnXa8',
      short:'The tallest mountain above sea level.', fact:'Mount Everest is the highest mountain on Earth above sea level. It is part of the Himalayas, a huge mountain range formed when tectonic plates pushed land upward over millions of years.' },
    { id:'kilimanjaro', type:'mountain', name:'Mount Kilimanjaro', icon:'🌋', place:'Africa • Tanzania', continent:'Africa', stat1:'5,895 m', stat1Label:'Height', stat2:'Free-standing volcano', stat2Label:'Famous for', videoId:'ZgvAaTZdpLo',
      short:'Africa’s highest mountain and a giant volcano.', fact:'Mount Kilimanjaro is the highest mountain in Africa. It is a volcanic mountain with different climate zones, from warm forests near the bottom to icy areas near the top.' },
    { id:'denali', type:'mountain', name:'Denali', icon:'❄️', place:'North America • Alaska', continent:'North America', stat1:'6,190 m', stat1Label:'Height', stat2:'North America’s highest peak', stat2Label:'Famous for', videoId:'ZgvAaTZdpLo',
      short:'The tallest mountain in North America.', fact:'Denali rises high in Alaska and has extremely cold, windy weather. Its name means “the high one” in the Koyukon language.' },
    { id:'andes', type:'range', name:'Andes Mountains', icon:'⛰️', place:'South America • West coast', continent:'South America', stat1:'About 7,000 km', stat1Label:'Length', stat2:'Longest continental mountain range', stat2Label:'Famous for', videoId:'01qzgULTduQ',
      short:'A huge mountain chain along South America.', fact:'The Andes stretch along the western side of South America. They include volcanoes, high plateaus, glaciers, and the source areas of many rivers.' },
    { id:'himalayas', type:'range', name:'Himalayas', icon:'🏔️', place:'Asia • India/Nepal/Bhutan/China/Pakistan', continent:'Asia', stat1:'Over 2,400 km', stat1Label:'Length', stat2:'Home of Everest', stat2Label:'Famous for', videoId:'8MUTVxLnXa8',
      short:'The world’s highest mountain range.', fact:'The Himalayas contain many of Earth’s tallest peaks. Snow and glaciers from these mountains feed major rivers that millions of people depend on.' },
    { id:'alps', type:'range', name:'The Alps', icon:'🏔️', place:'Europe • Several countries', continent:'Europe', stat1:'About 1,200 km', stat1Label:'Length', stat2:'Snowy peaks and valleys', stat2Label:'Famous for', videoId:'01qzgULTduQ',
      short:'Europe’s famous snowy mountain range.', fact:'The Alps cross countries such as France, Switzerland, Italy, Austria, and Germany. They are important for tourism, water, wildlife, and winter sports.' },
    { id:'nile', type:'river', name:'Nile River', icon:'🐊', place:'Africa • Flows north to Mediterranean Sea', continent:'Africa', stat1:'About 6,650 km', stat1Label:'Length', stat2:'One of the world’s longest rivers', stat2Label:'Famous for', videoId:'T5H3UyNBGMg',
      short:'A river that helped Ancient Egypt grow.', fact:'The Nile flows through northeastern Africa. Its water and fertile soil helped Ancient Egyptian civilization farm, travel, and build cities in a desert region.' },
    { id:'amazon', type:'river', name:'Amazon River', icon:'🐬', place:'South America • Andes to Atlantic Ocean', continent:'South America', stat1:'About 6,400 km', stat1Label:'Length', stat2:'Carries the most water', stat2Label:'Famous for', videoId:'T5H3UyNBGMg',
      short:'The river with the greatest water flow.', fact:'The Amazon River carries more water than any other river. It flows through the Amazon rainforest, one of the most biodiverse places on Earth.' },
    { id:'yangtze', type:'river', name:'Yangtze River', icon:'🐉', place:'Asia • China', continent:'Asia', stat1:'About 6,300 km', stat1Label:'Length', stat2:'Longest river in Asia', stat2Label:'Famous for', videoId:'T5H3UyNBGMg',
      short:'Asia’s longest river.', fact:'The Yangtze is the longest river in Asia. It supports farming, transport, cities, and wildlife across China before reaching the East China Sea.' },
    { id:'mississippi', type:'river', name:'Mississippi River', icon:'🛶', place:'North America • United States', continent:'North America', stat1:'About 3,730 km', stat1Label:'System length', stat2:'Major transport river', stat2Label:'Famous for', videoId:'T5H3UyNBGMg',
      short:'A huge river system in North America.', fact:'The Mississippi River system drains water from a large part of the United States. It has been important for travel, trade, farms, music, and wildlife.' },
    { id:'ganges', type:'river', name:'Ganges River', icon:'🪷', place:'Asia • India/Bangladesh', continent:'Asia', stat1:'About 2,525 km', stat1Label:'Length', stat2:'Sacred and life-giving river', stat2Label:'Famous for', videoId:'T5H3UyNBGMg',
      short:'A sacred river starting in the Himalayas.', fact:'The Ganges begins in the Himalayas and flows across northern India and Bangladesh. It is very important for farming, culture, cities, and religious traditions.' },
    { id:'danube', type:'river', name:'Danube River', icon:'🏰', place:'Europe • Many countries', continent:'Europe', stat1:'About 2,850 km', stat1Label:'Length', stat2:'Flows through/crosses 10 countries', stat2Label:'Famous for', videoId:'T5H3UyNBGMg',
      short:'A river connecting many European countries.', fact:'The Danube flows through or along many countries in Europe. It has helped connect cities, cultures, trade routes, and wildlife habitats for centuries.' }
];

let geoFilter = 'all';
let currentGeoIndex = 0;
let geoBuilt = false;
let geoQuizRounds = [], geoQuizIndex = 0, geoQuizScore = 0, geoQuizLocked = false;
let geoMatchRound = [], geoMatchDone = 0, geoPicked = null;

function buildGeoExplorer() { renderGeoExplorer(); geoBuilt = true; }
window.buildGeoExplorer = buildGeoExplorer;

function getGeoTopic(id) { return GEO_TOPICS.find(g => g.id === id); }

function renderGeoExplorer() {
    const grid = document.getElementById('geoGrid');
    if (!grid) return;
    const term = (document.getElementById('geoSearch') || {}).value || '';
    const q = term.trim().toLowerCase();
    const list = GEO_TOPICS.filter(g => {
        const typeOk = q ? true : (geoFilter === 'all' || g.type === geoFilter);
        const textOk = !q || g.name.toLowerCase().includes(q) || g.place.toLowerCase().includes(q) || g.fact.toLowerCase().includes(q) || g.continent.toLowerCase().includes(q);
        return typeOk && textOk;
    });
    const count = document.getElementById('geoCount');
    if (count) count.innerText = list.length ? `${list.length} geography topic${list.length === 1 ? '' : 's'} ready — tap one to learn!` : 'No places found — try another search.';
    grid.innerHTML = list.map(g => {
        const t = GEO_TYPES[g.type];
        return `<div class="geo-card" role="button" tabindex="0" onclick="openGeoTopic('${g.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openGeoTopic('${g.id}');}">
            <div class="card-badge">${t.icon} ${t.label}</div>
            <div class="geo-card-icon">${g.icon}</div>
            <h3>${escapeHtml(g.name)}</h3>
            <p>${escapeHtml(g.short)}</p>
            <span class="geo-type-tag">📍 ${escapeHtml(g.continent)}</span>
        </div>`;
    }).join('');
}
window.renderGeoExplorer = renderGeoExplorer;

function filterGeoType(type, evt) {
    geoFilter = type;
    playSound(480);
    document.querySelectorAll('.geo-chip').forEach(c => c.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
    renderGeoExplorer();
}
window.filterGeoType = filterGeoType;

function openGeoTopic(id) {
    const g = getGeoTopic(id);
    if (!g) return;
    currentGeoIndex = GEO_TOPICS.findIndex(x => x.id === id);
    const t = GEO_TYPES[g.type];
    playSound(660);
    stopSpeech();
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
    set('geoModalIcon', g.icon);
    set('geoModalTitle', g.name);
    set('geoModalSub', `${t.icon} ${t.label} · ${g.place}`);
    set('geoModalFact', g.fact);
    const hero = document.getElementById('geoModalHero');
    if (hero) hero.style.background = g.type === 'river' ? 'linear-gradient(135deg,#dbeafe,#67e8f9)' : 'linear-gradient(135deg,#dcfce7,#d1d5db)';
    const stats = document.getElementById('geoStatsGrid');
    if (stats) stats.innerHTML = [
        ['📍', 'Continent/Home', g.continent], ['📏', g.stat1Label, g.stat1], ['⭐', g.stat2Label, g.stat2], ['🎬', 'Video', 'Tap Watch Video']
    ].map(([i,l,v]) => `<div class="geo-stat"><span class="geo-stat-icon">${i}</span><span class="geo-stat-label">${l}</span><span class="geo-stat-value">${escapeHtml(v)}</span></div>`).join('');
    const box = document.getElementById('geoVideoBox');
    if (box) { box.style.display = 'none'; box.innerHTML = ''; }
    const modal = document.getElementById('geoModal');
    if (modal) modal.style.display = 'flex';
    if (!factsViewed.has('geo-' + g.id)) {
        factsViewed.add('geo-' + g.id);
        addStars(4);
        const seen = GEO_TOPICS.filter(x => factsViewed.has('geo-' + x.id)).length;
        if (seen === 1) unlockBadge('geoExplorer');
        if (seen === GEO_TOPICS.length) { unlockBadge('geoMaster'); launchConfetti(50); }
        saveProgress();
    }
}
window.openGeoTopic = openGeoTopic;

function closeGeoModal() {
    const m = document.getElementById('geoModal');
    if (m) m.style.display = 'none';
    const box = document.getElementById('geoVideoBox');
    if (box) box.innerHTML = '';
    stopSpeech();
    playSound(400);
}
window.closeGeoModal = closeGeoModal;
function closeGeoModalOnBg(e) { if (e.target.id === 'geoModal') closeGeoModal(); }
window.closeGeoModalOnBg = closeGeoModalOnBg;
function nextGeoTopic() { currentGeoIndex = (currentGeoIndex + 1) % GEO_TOPICS.length; openGeoTopic(GEO_TOPICS[currentGeoIndex].id); }
function prevGeoTopic() { currentGeoIndex = (currentGeoIndex - 1 + GEO_TOPICS.length) % GEO_TOPICS.length; openGeoTopic(GEO_TOPICS[currentGeoIndex].id); }
window.nextGeoTopic = nextGeoTopic; window.prevGeoTopic = prevGeoTopic;
function speakGeoTopic() { const g = GEO_TOPICS[currentGeoIndex]; if (g) speakText(`${g.name}. ${g.place}. ${g.short} ${g.fact}`); }
window.speakGeoTopic = speakGeoTopic;
function loadGeoVideo() {
    const g = GEO_TOPICS[currentGeoIndex]; const box = document.getElementById('geoVideoBox');
    if (!g || !box) return;
    stopSpeech(); box.style.display = 'block';
    box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${g.videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1" title="${escapeHtml(g.name)} video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>`;
}
window.loadGeoVideo = loadGeoVideo;
function geoSurprise() { const g = GEO_TOPICS[Math.floor(Math.random() * GEO_TOPICS.length)]; launchConfetti(12); openGeoTopic(g.id); }
window.geoSurprise = geoSurprise;

function startGeoQuiz() {
    geoQuizRounds = shuffleArray(GEO_TOPICS).slice(0, 8).map(g => {
        if (Math.random() < 0.5) {
            const wrong = shuffleArray(GEO_TOPICS.filter(x => x.continent !== g.continent)).map(x => x.continent).filter((v,i,a)=>a.indexOf(v)===i).slice(0,3);
            return { q:`Where is ${g.name} found?`, icon:g.icon, correct:g.continent, options:shuffleArray([g.continent, ...wrong]) };
        }
        const correct = GEO_TYPES[g.type].label;
        const wrong = shuffleArray(Object.keys(GEO_TYPES).filter(k => GEO_TYPES[k].label !== correct)).map(k => GEO_TYPES[k].label).slice(0,2);
        return { q:`Is ${g.name} a mountain, river, or mountain range?`, icon:g.icon, correct, options:shuffleArray([correct, ...wrong]) };
    });
    geoQuizIndex = 0; geoQuizScore = 0; geoQuizLocked = false;
    const box = document.getElementById('geoQuiz'); if (box) box.style.display = 'block';
    renderGeoQuizQuestion();
    if (box) box.scrollIntoView({ behavior:'smooth', block:'center' });
}
window.startGeoQuiz = startGeoQuiz;
function closeGeoQuiz() { const box = document.getElementById('geoQuiz'); if (box) box.style.display = 'none'; playSound(350); }
window.closeGeoQuiz = closeGeoQuiz;
function renderGeoQuizQuestion() {
    const qEl = document.getElementById('geoQuizQuestion'), optEl = document.getElementById('geoQuizOptions'), prog = document.getElementById('geoQuizProgress'), score = document.getElementById('geoQuizScore');
    if (!qEl || !optEl) return;
    if (geoQuizIndex >= geoQuizRounds.length) {
        qEl.innerText = `🎉 Geography quiz complete! You scored ${geoQuizScore} out of ${geoQuizRounds.length}!`;
        optEl.innerHTML = '<button class="pq-opt" onclick="startGeoQuiz()">🔄 Play Again</button>';
        if (prog) prog.innerText = 'Finished!'; if (score) score.innerText = geoQuizScore;
        recordRoundScore('geoquiz', geoQuizScore, geoQuizRounds.length); addStars(geoQuizScore * 3);
        if (geoQuizScore === geoQuizRounds.length) { unlockBadge('geoQuizAce'); launchConfetti(50); }
        speakText(`Geography quiz complete! You scored ${geoQuizScore} out of ${geoQuizRounds.length}.`);
        return;
    }
    const cur = geoQuizRounds[geoQuizIndex]; qEl.innerText = `${cur.icon} ${cur.q}`;
    if (prog) prog.innerText = `Question ${geoQuizIndex + 1} / ${geoQuizRounds.length}`; if (score) score.innerText = geoQuizScore;
    optEl.innerHTML = ''; cur.options.forEach(opt => { const b=document.createElement('button'); b.className='pq-opt'; b.innerText=opt; b.onclick=()=>answerGeoQuiz(opt,b,cur.correct,cur.q); optEl.appendChild(b); });
    geoQuizLocked = false; speakText(cur.q);
}
function answerGeoQuiz(choice, btn, correct, questionText) {
    if (geoQuizLocked) return; geoQuizLocked = true;
    const all = [...document.querySelectorAll('#geoQuizOptions .pq-opt')]; all.forEach(b => b.disabled = true);
    const ok = choice === correct; recordAnswer('geoquiz', ok, questionText || 'Geography question');
    if (ok) { btn.classList.add('correct'); geoQuizScore++; playSound(900,'sine',.2); launchConfetti(8); }
    else { btn.classList.add('wrong'); const right=all.find(b=>b.innerText===correct); if(right) right.classList.add('correct'); playSound(200,'sawtooth',.25); speakText(`The answer is ${correct}.`); }
    const score = document.getElementById('geoQuizScore'); if (score) score.innerText = geoQuizScore;
    setTimeout(()=>{ geoQuizIndex++; renderGeoQuizQuestion(); }, 1700);
}
window.answerGeoQuiz = answerGeoQuiz;

function startGeoMatch() {
    geoMatchDone = 0; geoPicked = null;
    geoMatchRound = shuffleArray(GEO_TOPICS).filter((g,i,a)=>a.findIndex(x=>x.continent===g.continent)===i).slice(0,6);
    const pool = document.getElementById('geoMatchPool'), zones = document.getElementById('geoMatchZones'), box = document.getElementById('geoMatch');
    if (box) box.style.display = 'block'; if (!pool || !zones) return;
    const score = document.getElementById('geoMatchScore'); if (score) score.innerText = `0 / ${geoMatchRound.length}`;
    pool.innerHTML = ''; zones.innerHTML = '';
    shuffleArray(geoMatchRound).forEach(g => {
        const chip = document.createElement('button'); chip.className='geo-place-chip'; chip.type='button'; chip.draggable=true; chip.dataset.place=g.id; chip.innerHTML=`${g.icon} ${g.name}`;
        chip.addEventListener('dragstart', e => { geoPicked = g.id; chip.classList.add('selected'); if(e.dataTransfer) e.dataTransfer.setData('text/plain', g.id); });
        chip.addEventListener('dragend', () => chip.classList.remove('selected'));
        chip.onclick = () => { geoPicked = g.id; document.querySelectorAll('.geo-place-chip.selected').forEach(c=>c.classList.remove('selected')); chip.classList.add('selected'); playSound(520); };
        pool.appendChild(chip);
    });
    geoMatchRound.forEach(g => {
        const z = document.createElement('div'); z.className='geo-zone'; z.dataset.continent=g.continent; z.innerHTML=`<h4>📍 ${g.continent}</h4><div class="geo-zone-drop"></div>`;
        z.addEventListener('dragover', e => { e.preventDefault(); z.classList.add('over'); }); z.addEventListener('dragleave', ()=>z.classList.remove('over'));
        z.addEventListener('drop', e => { e.preventDefault(); z.classList.remove('over'); dropGeoPlace(g.continent, z); }); z.onclick=()=>dropGeoPlace(g.continent,z);
        zones.appendChild(z);
    });
    if (box) box.scrollIntoView({behavior:'smooth', block:'center'});
}
window.startGeoMatch = startGeoMatch;
function closeGeoMatch() { const box = document.getElementById('geoMatch'); if (box) box.style.display='none'; }
window.closeGeoMatch = closeGeoMatch;
function dropGeoPlace(continent, zone) {
    if (!geoPicked) return; const g = getGeoTopic(geoPicked); const chip = document.querySelector(`.geo-place-chip[data-place="${geoPicked}"]`); if (!g || !chip || chip.classList.contains('placed')) return;
    const ok = g.continent === continent; recordAnswer('geomatch', ok, `${g.name} → ${continent}`);
    if (ok) {
        chip.classList.add('placed'); chip.classList.remove('selected'); chip.draggable=false; geoMatchDone++;
        const drop = zone.querySelector('.geo-zone-drop'); if (drop) { const t=document.createElement('span'); t.className='geo-zone-token'; t.innerText=g.icon; t.title=g.name; drop.appendChild(t); }
        playSound(880,'sine',.2); launchConfetti(7); speakText(`Correct! ${g.name} is in ${continent}.`);
        const score = document.getElementById('geoMatchScore'); if (score) score.innerText = `${geoMatchDone} / ${geoMatchRound.length}`;
        if (geoMatchDone === geoMatchRound.length) { unlockBadge('geoMatcher'); addStars(15); recordRoundScore('geomatch', geoMatchDone, geoMatchRound.length); launchConfetti(45); showToast('All places matched! 🗺️', '🎉', 3500); }
    } else { zone.classList.add('shake'); setTimeout(()=>zone.classList.remove('shake'),500); playSound(200,'sawtooth',.25); speakText(`Try again. ${g.name} is not in ${continent}.`); }
    geoPicked = null; document.querySelectorAll('.geo-place-chip.selected').forEach(c=>c.classList.remove('selected'));
}


// ============================================================
// WORLD HISTORY TIME MACHINE
// Kid-friendly world history: eras, videos, timeline, and quiz
// ============================================================
const HISTORY_ERAS = {
    ancient:      { icon: '🏺', name: 'Ancient World',      color: '#a16207' },
    classical:    { icon: '🏛️', name: 'Classical World',    color: '#7c3aed' },
    medieval:     { icon: '🏰', name: 'Medieval World',     color: '#2563eb' },
    earlymodern:  { icon: '🧭', name: 'Early Modern World', color: '#0891b2' },
    modern:       { icon: '🚂', name: 'Modern World',       color: '#dc2626' },
    contemporary: { icon: '💻', name: 'Our World Today',    color: '#16a34a' }
};

const WORLD_HISTORY = [
    {
        id: 'early-humans', era: 'ancient', year: 'c. 200,000 BCE', icon: '🦣',
        title: 'Early Humans Learn to Survive', short: 'People made tools, shared food, told stories, and learned to live in many climates.',
        body: 'Long before cities existed, early humans lived as hunters and gatherers. They made stone tools, learned to use fire, painted caves, cared for families, and slowly spread across the world. Their biggest superpower was teamwork: people shared knowledge so the next generation could do even better.',
        why: 'It shows that learning, cooperation, and imagination helped humans survive and build every later civilization.',
        videoId: 'KFojGxkCKJI'
    },
    {
        id: 'farming', era: 'ancient', year: 'c. 10,000 BCE', icon: '🌾',
        title: 'The Farming Revolution', short: 'People began growing crops and raising animals, so villages could become larger.',
        body: 'In several parts of the world, people discovered that seeds could be planted and animals could be raised. Farming meant families could stay in one place for longer. Villages grew, jobs became more specialized, and people had time to invent pottery, weaving, and new tools.',
        why: 'Farming helped create towns, trade, calendars, leaders, and many of the first civilizations.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'mesopotamia', era: 'ancient', year: 'c. 3500 BCE', icon: '🏙️',
        title: 'Mesopotamia: First Cities', short: 'Sumerians built cities, invented cuneiform writing, and used irrigation.',
        body: 'Between the Tigris and Euphrates rivers, people built some of the world’s first cities. They made canals to water crops, traded goods, built temples called ziggurats, and wrote on clay tablets using wedge-shaped marks called cuneiform.',
        why: 'Writing let people record laws, stories, maths, business, and ideas so knowledge could travel through time.',
        videoId: 'EHkAGKgoyGo'
    },
    {
        id: 'ancient-egypt', era: 'ancient', year: 'c. 3100 BCE', icon: '🔺',
        title: 'Ancient Egypt and the Nile', short: 'The Nile River helped Egyptians farm, build pyramids, and develop hieroglyphs.',
        body: 'Ancient Egypt grew beside the Nile River. Every year the river flooded and left rich soil for crops. Egyptians became famous for pyramids, mummies, pharaohs, papyrus, medicine, maths, and picture writing called hieroglyphs.',
        why: 'Egypt shows how geography, engineering, art, and belief systems can shape a powerful civilization.',
        videoId: '04cs4-BMsHo'
    },
    {
        id: 'indus-china', era: 'ancient', year: 'c. 2500 BCE', icon: '🐉',
        title: 'Indus Valley and Ancient China', short: 'Great river civilizations planned cities, farmed, traded, and invented useful things.',
        body: 'The Indus Valley had carefully planned cities with streets and drainage systems. In ancient China, river valleys supported farming, bronze work, early writing, silk-making, and important inventions. Around the world, rivers helped people build stable communities.',
        why: 'Civilizations did not grow in only one place. Many regions invented clever solutions to local problems.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'ancient-greece', era: 'classical', year: 'c. 800 BCE', icon: '🏛️',
        title: 'Ancient Greece: Ideas and Olympics', short: 'Greek city-states explored democracy, philosophy, theatre, science, and sport.',
        body: 'Ancient Greece was made of many city-states such as Athens and Sparta. Greek thinkers asked big questions about nature, fairness, numbers, and government. The Olympic Games began in Greece, and Greek stories, buildings, theatre, and science influenced many later cultures.',
        why: 'Many words and ideas used in science, art, sport, and government today have roots in ancient Greece.',
        videoId: 'jloEzVh31TE'
    },
    {
        id: 'rome', era: 'classical', year: 'c. 500 BCE–476 CE', icon: '🛣️',
        title: 'Ancient Rome: Roads, Law, and Empire', short: 'Romans connected lands with roads, aqueducts, cities, and shared laws.',
        body: 'Rome began as a small city and grew into a huge empire around the Mediterranean. Romans built roads, aqueducts, bridges, arenas, and cities. Roman law, language, engineering, and citizenship ideas shaped many societies after the empire changed and divided.',
        why: 'Rome reminds us how roads, laws, and shared systems can connect many different people over long distances.',
        videoId: '-uaMjhpi12M'
    },
    {
        id: 'world-religions', era: 'classical', year: 'c. 1500 BCE–700 CE', icon: '🕊️',
        title: 'World Religions and Big Ideas', short: 'Major belief systems taught values, stories, community, and ways to understand life.',
        body: 'Across Asia, the Middle East, Africa, and Europe, major religions and philosophies developed over centuries. They shared stories, music, art, rules for living, celebrations, and ideas about kindness, duty, wisdom, peace, and community.',
        why: 'Understanding beliefs helps kids respect cultures and see why people celebrate, build, write, and live in different ways.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'silk-road', era: 'medieval', year: 'c. 130 BCE–1400 CE', icon: '🐫',
        title: 'The Silk Road Connects Continents', short: 'Trade routes carried silk, spices, inventions, art, stories, and ideas.',
        body: 'The Silk Road was not one road but many land and sea routes linking Asia, the Middle East, Africa, and Europe. Traders carried silk, spices, paper, glass, horses, and knowledge. Cities along the routes became meeting places for languages, foods, music, and ideas.',
        why: 'Trade can move more than objects: it spreads inventions, culture, and new ways of thinking.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'islamic-golden-age', era: 'medieval', year: 'c. 750–1258', icon: '🔭',
        title: 'The Islamic Golden Age', short: 'Scholars advanced maths, medicine, astronomy, geography, libraries, and translation.',
        body: 'In cities such as Baghdad, Cordoba, and Cairo, scholars studied and translated books from many cultures. They improved algebra, hospitals, astronomy, maps, optics, and libraries. People debated ideas and preserved knowledge that later students around the world could use.',
        why: 'It shows how sharing knowledge across languages and cultures can create amazing discoveries.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'medieval-world', era: 'medieval', year: 'c. 500–1500', icon: '🏰',
        title: 'Castles, Kingdoms, and Great Cities', short: 'The medieval world included castles, farms, guilds, universities, and busy trade cities.',
        body: 'The medieval period looked different around the world. In Europe there were castles, knights, farms, guilds, and universities. In Africa, Asia, and the Americas, powerful kingdoms and cities traded gold, salt, books, textiles, and ideas. Many ordinary people worked as farmers, craftspeople, merchants, and builders.',
        why: 'History is richer when we look beyond one region and notice many civilizations at the same time.',
        videoId: 'KFojGxkCKJI'
    },
    {
        id: 'renaissance', era: 'earlymodern', year: 'c. 1400–1600', icon: '🎨',
        title: 'The Renaissance: Art and Questions', short: 'Artists, scientists, writers, and inventors studied the world in new ways.',
        body: 'Renaissance means rebirth. Many artists and thinkers studied nature, the human body, old books, light, machines, and perspective. Printing helped books spread faster, so more people could learn, debate, and build on each other’s ideas.',
        why: 'Curiosity and access to books helped art, science, and education grow quickly.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'exploration-exchange', era: 'earlymodern', year: 'c. 1450–1700', icon: '🧭',
        title: 'Exploration and the Columbian Exchange', short: 'Ocean voyages connected continents, but also brought unfairness, disease, and colonization.',
        body: 'Improved ships and navigation connected the Americas, Africa, Europe, and Asia more closely. Plants like potatoes, maize, tomatoes, and cacao spread around the world. But this age also included colonization, forced labour, and diseases that harmed many Indigenous peoples.',
        why: 'It teaches that discoveries can have both benefits and serious consequences, so fairness matters.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'printing', era: 'earlymodern', year: 'c. 1450', icon: '📚',
        title: 'The Printing Press Spreads Ideas', short: 'Movable type made books faster and cheaper to copy.',
        body: 'Before printing, many books had to be copied by hand. Printing presses could produce pages much faster. More books meant more readers, more schools, and faster sharing of discoveries, maps, music, news, and different opinions.',
        why: 'The printing press was like an early information revolution: ideas could travel farther and faster.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'scientific-revolution', era: 'earlymodern', year: 'c. 1500–1700', icon: '🔬',
        title: 'The Scientific Revolution', short: 'Scientists used observation, experiments, maths, and evidence to explain nature.',
        body: 'Thinkers studied the sky, motion, magnets, the human body, and tiny living things. They learned to test ideas with evidence instead of guessing. Telescopes, microscopes, careful notes, and maths helped people understand the universe in new ways.',
        why: 'Science grows when people ask questions, test fairly, share results, and change their minds when evidence improves.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'industrial-revolution', era: 'modern', year: 'c. 1750–1900', icon: '🚂',
        title: 'The Industrial Revolution', short: 'Machines, factories, steam engines, and railways changed work and cities.',
        body: 'New machines made cloth, pumped water, and powered trains and ships. Factories produced goods quickly, and many people moved to cities for work. The changes brought inventions and cheaper products, but also pollution and difficult factory conditions that reformers worked to improve.',
        why: 'It explains why modern cities, transport, jobs, and environmental challenges changed so quickly.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'rights-democracy', era: 'modern', year: 'c. 1700–1900', icon: '⚖️',
        title: 'Rights, Revolutions, and Democracy', short: 'People debated freedom, voting, education, slavery, and fair government.',
        body: 'Across the world, people challenged old systems and asked who should have rights and a voice. Revolutions, independence movements, abolition campaigns, and reformers pushed societies to rethink slavery, citizenship, voting, workers’ rights, and education.',
        why: 'Many freedoms people value today were won because people spoke up, organized, and demanded fairness.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'world-wars', era: 'modern', year: '1914–1945', icon: '🕯️',
        title: 'World Wars and Peace Lessons', short: 'Two world wars caused great harm and led many countries to work harder for peace.',
        body: 'The 20th century included two terrible world wars. Millions of people were affected, and many families had to rebuild their lives. Afterward, countries created new groups and agreements to prevent future wars and protect human rights.',
        why: 'It helps us value peace, cooperation, kindness, and solving disagreements before they become dangerous.',
        videoId: 'plup3xkpVk8'
    },
    {
        id: 'space-race', era: 'contemporary', year: '1957–1969', icon: '🚀',
        title: 'The Space Race and Moon Landing', short: 'Satellites, astronauts, and the Moon landing showed what science teams can achieve.',
        body: 'During the Space Race, scientists and engineers launched satellites, sent people into orbit, and landed astronauts on the Moon in 1969. Space exploration led to new technology, better communication, weather satellites, and a bigger view of Earth as one shared home.',
        why: 'It shows how maths, science, courage, and teamwork can make impossible dreams become real.',
        videoId: 'Qd6nLM2QlWw'
    },
    {
        id: 'digital-age', era: 'contemporary', year: 'c. 1970–Today', icon: '💻',
        title: 'The Digital Age', short: 'Computers, the internet, phones, and AI changed how people learn and communicate.',
        body: 'Computers became smaller and more powerful. The internet connected schools, families, scientists, businesses, and friends across the world. Today, phones, robots, satellites, and artificial intelligence help people learn, create, translate, explore, and solve problems.',
        why: 'Kids are growing up in a connected world, so digital kindness, safety, creativity, and critical thinking are important.',
        videoId: 'plup3xkpVk8'
    }
];

let historyFilter = 'all';
let currentHistoryIndex = 0;
let historyBuilt = false;
let historyQuizQuestions = [];
let historyQuizIndex = 0;
let historyQuizScore = 0;
let historyQuizLocked = false;

function getHistoryTopic(id) { return WORLD_HISTORY.find(h => h.id === id); }
function getHistoryEraMeta(key) { return HISTORY_ERAS[key] || { icon: '🌍', name: 'World History', color: '#7c3aed' }; }

function buildWorldHistory() {
    renderHistory();
    historyBuilt = true;
}

function renderHistory() {
    const grid = document.getElementById('historyGrid');
    const timeline = document.getElementById('historyTimeline');
    if (!grid || !timeline) return;

    const term = (document.getElementById('historySearch') || {}).value || '';
    const q = term.trim().toLowerCase();

    const list = WORLD_HISTORY.filter(h => {
        const eraOk = q ? true : (historyFilter === 'all' || h.era === historyFilter);
        const textOk = !q || h.title.toLowerCase().includes(q) || h.short.toLowerCase().includes(q) ||
            h.body.toLowerCase().includes(q) || h.year.toLowerCase().includes(q) ||
            getHistoryEraMeta(h.era).name.toLowerCase().includes(q);
        return eraOk && textOk;
    });

    const countEl = document.getElementById('historyCount');
    if (countEl) countEl.innerText = list.length
        ? `${list.length} history stop${list.length === 1 ? '' : 's'} ready — tap a card or timeline dot!`
        : 'No history stops found — try another search.';

    timeline.innerHTML = list.map(h => `
        <button class="history-node" onclick="openHistoryTopic('${h.id}')" title="${escapeHtml(h.title)}">
            <span class="hn-icon">${h.icon}</span>
            <span class="hn-year">${escapeHtml(h.year)}</span>
            <span class="hn-title">${escapeHtml(h.title)}</span>
        </button>`).join('');

    grid.innerHTML = list.map(h => {
        const era = getHistoryEraMeta(h.era);
        return `
            <div class="history-card" role="button" tabindex="0" onclick="openHistoryTopic('${h.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openHistoryTopic('${h.id}');}">
                <div class="card-badge">${era.icon} ${era.name}</div>
                <div class="history-card-icon" aria-hidden="true">${h.icon}</div>
                <h3>${escapeHtml(h.title)}</h3>
                <p>${escapeHtml(h.short)}</p>
                <span class="history-year-tag">${escapeHtml(h.year)}</span>
            </div>`;
    }).join('');
}
window.renderHistory = renderHistory;

function filterHistoryEra(era, evt) {
    historyFilter = era;
    playSound(480);
    document.querySelectorAll('.history-chip').forEach(c => c.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
    renderHistory();
}
window.filterHistoryEra = filterHistoryEra;

function openHistoryTopic(id) {
    const h = getHistoryTopic(id);
    if (!h) return;
    currentHistoryIndex = WORLD_HISTORY.findIndex(x => x.id === id);
    const era = getHistoryEraMeta(h.era);

    playSound(660);
    stopSpeech();

    const setText = (elId, val) => { const e = document.getElementById(elId); if (e) e.innerText = val; };
    setText('historyModalIcon', h.icon);
    setText('historyModalTitle', h.title);
    setText('historyModalYear', h.year);
    setText('historyModalEra', `${era.icon} ${era.name}`);
    setText('historyModalBody', h.body);
    setText('historyModalWhy', h.why);

    const top = document.getElementById('historyModalTop');
    if (top) top.style.background = `linear-gradient(135deg, ${era.color}22, #e0f2fe)`;
    const pill = document.getElementById('historyModalEra');
    if (pill) pill.style.background = era.color;
    const video = document.getElementById('historyVideoBox');
    if (video) { video.style.display = 'none'; video.innerHTML = ''; }

    const modal = document.getElementById('historyModal');
    if (modal) modal.style.display = 'flex';

    if (!factsViewed.has('history-' + h.id)) {
        factsViewed.add('history-' + h.id);
        addStars(4);
        const seen = WORLD_HISTORY.filter(x => factsViewed.has('history-' + x.id)).length;
        if (seen === 1) unlockBadge('historyStarter');
        if (seen >= 8) unlockBadge('historyExplorer');
        if (seen === WORLD_HISTORY.length) { unlockBadge('historyMaster'); launchConfetti(55); }
        saveProgress();
    }
}
window.openHistoryTopic = openHistoryTopic;

function closeHistoryModal() {
    const m = document.getElementById('historyModal');
    if (m) m.style.display = 'none';
    const video = document.getElementById('historyVideoBox');
    if (video) video.innerHTML = '';
    stopSpeech();
    playSound(400);
}
window.closeHistoryModal = closeHistoryModal;

function closeHistoryModalOnBg(e) {
    if (e.target.id === 'historyModal') closeHistoryModal();
}
window.closeHistoryModalOnBg = closeHistoryModalOnBg;

function nextHistoryTopic() {
    currentHistoryIndex = (currentHistoryIndex + 1) % WORLD_HISTORY.length;
    openHistoryTopic(WORLD_HISTORY[currentHistoryIndex].id);
}
window.nextHistoryTopic = nextHistoryTopic;

function prevHistoryTopic() {
    currentHistoryIndex = (currentHistoryIndex - 1 + WORLD_HISTORY.length) % WORLD_HISTORY.length;
    openHistoryTopic(WORLD_HISTORY[currentHistoryIndex].id);
}
window.prevHistoryTopic = prevHistoryTopic;

function speakHistoryTopic() {
    const h = WORLD_HISTORY[currentHistoryIndex];
    if (h) speakText(`${h.title}. ${h.year}. ${h.short} ${h.why}`);
}
window.speakHistoryTopic = speakHistoryTopic;

function loadHistoryVideo() {
    const h = WORLD_HISTORY[currentHistoryIndex];
    const box = document.getElementById('historyVideoBox');
    if (!h || !box) return;
    stopSpeech();
    box.style.display = 'block';
    box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${h.videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1"
        title="${escapeHtml(h.title)} video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen loading="lazy"></iframe>`;
    showToast('Loading kid-friendly history video…', '🎬', 2200);
}
window.loadHistoryVideo = loadHistoryVideo;

function historySurprise() {
    const h = WORLD_HISTORY[Math.floor(Math.random() * WORLD_HISTORY.length)];
    launchConfetti(14);
    openHistoryTopic(h.id);
}
window.historySurprise = historySurprise;

function startHistoryQuiz() {
    historyQuizQuestions = shuffleArray(WORLD_HISTORY).slice(0, 8).map(h => {
        const type = Math.random() < 0.5 ? 'era' : 'why';
        if (type === 'era') {
            const correct = getHistoryEraMeta(h.era).name;
            const wrong = shuffleArray(Object.keys(HISTORY_ERAS).filter(k => k !== h.era)).slice(0, 3).map(k => HISTORY_ERAS[k].name);
            return { q: `Which era does “${h.title}” belong to?`, icon: h.icon, correct, options: shuffleArray([correct, ...wrong]) };
        }
        const correct = h.title;
        const wrong = shuffleArray(WORLD_HISTORY.filter(x => x.id !== h.id)).slice(0, 3).map(x => x.title);
        return { q: `Which history stop matches this clue: ${h.short}`, icon: '🧩', correct, options: shuffleArray([correct, ...wrong]) };
    });
    historyQuizIndex = 0;
    historyQuizScore = 0;
    historyQuizLocked = false;
    const box = document.getElementById('historyQuiz');
    if (box) box.style.display = 'block';
    playSound(700);
    renderHistoryQuizQuestion();
    if (box && typeof box.scrollIntoView === 'function') box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
window.startHistoryQuiz = startHistoryQuiz;

function closeHistoryQuiz() {
    const box = document.getElementById('historyQuiz');
    if (box) box.style.display = 'none';
    playSound(350);
}
window.closeHistoryQuiz = closeHistoryQuiz;

function renderHistoryQuizQuestion() {
    const qEl = document.getElementById('historyQuizQuestion');
    const optEl = document.getElementById('historyQuizOptions');
    const progEl = document.getElementById('historyQuizProgress');
    const scoreEl = document.getElementById('historyQuizScore');
    if (!qEl || !optEl) return;

    if (historyQuizIndex >= historyQuizQuestions.length) {
        qEl.innerText = `🎉 Time trip complete! You scored ${historyQuizScore} out of ${historyQuizQuestions.length}!`;
        optEl.innerHTML = '<button class="pq-opt" onclick="startHistoryQuiz()">🔄 Play Again</button>';
        if (progEl) progEl.innerText = 'Finished!';
        if (scoreEl) scoreEl.innerText = historyQuizScore;
        recordRoundScore('historyquiz', historyQuizScore, historyQuizQuestions.length);
        addStars(historyQuizScore * 3);
        if (historyQuizScore === historyQuizQuestions.length) { unlockBadge('historyQuizAce'); launchConfetti(55); }
        speakText(`History quiz complete! You scored ${historyQuizScore} out of ${historyQuizQuestions.length}.`);
        return;
    }

    const cur = historyQuizQuestions[historyQuizIndex];
    qEl.innerText = `${cur.icon} ${cur.q}`;
    if (progEl) progEl.innerText = `Question ${historyQuizIndex + 1} / ${historyQuizQuestions.length}`;
    if (scoreEl) scoreEl.innerText = historyQuizScore;
    optEl.innerHTML = '';
    cur.options.forEach(opt => {
        const b = document.createElement('button');
        b.className = 'pq-opt';
        b.innerText = opt;
        b.onclick = () => answerHistoryQuiz(opt, b, cur.correct, cur.q);
        optEl.appendChild(b);
    });
    historyQuizLocked = false;
    speakText(cur.q);
}

function answerHistoryQuiz(choice, btn, correct, questionText) {
    if (historyQuizLocked) return;
    historyQuizLocked = true;
    const all = [...document.querySelectorAll('#historyQuizOptions .pq-opt')];
    all.forEach(b => b.disabled = true);
    const ok = choice === correct;
    recordAnswer('historyquiz', ok, questionText || 'World history question');
    if (ok) {
        btn.classList.add('correct');
        historyQuizScore++;
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
    const scoreEl = document.getElementById('historyQuizScore');
    if (scoreEl) scoreEl.innerText = historyQuizScore;
    setTimeout(() => { historyQuizIndex++; renderHistoryQuizQuestion(); }, 1900);
}
window.answerHistoryQuiz = answerHistoryQuiz;



// ============================================================
// KIDS DOCUMENTARY CINEMA
// Every video ID below was verified live via YouTube oEmbed and
// confirmed embeddable. Players use youtube-nocookie.com and only
// load after the child taps play (no tracking before that).
// ============================================================
const DOC_CATS = {
    "animals": {
        "icon": "🦁",
        "name": "Animals"
    },
    "space": {
        "icon": "🪐",
        "name": "Space"
    },
    "ocean": {
        "icon": "🌊",
        "name": "Ocean"
    },
    "dinos": {
        "icon": "🦖",
        "name": "Dinosaurs"
    },
    "earth": {
        "icon": "🌋",
        "name": "Our Earth"
    },
    "body": {
        "icon": "🧍",
        "name": "Human Body"
    }
};

const DOCUMENTARIES = [
    {
        "id": "eUunYTYia3I",
        "title": "AMAZING ANIMALS!",
        "fullTitle": "AMAZING ANIMALS! | 1 Hour | Nat Geo Kids Compilation | Nat Geo Kids",
        "channel": "Nat Geo Kids",
        "cat": "animals",
        "desc": "A whole hour of amazing animals from around the world - tree kangaroos, blue whales, sloths, tigers and dozens more!",
        "age": "4+"
    },
    {
        "id": "rHhSCO5-3Pg",
        "title": "Gorilla",
        "fullTitle": "Gorilla | Amazing Animals",
        "channel": "Nat Geo Kids",
        "cat": "animals",
        "desc": "Meet the mighty gorilla! Discover what they eat, how families live together, and why they thump their chests.",
        "age": "4+"
    },
    {
        "id": "8qdYCpSW2eY",
        "title": "The Biggest Volcano Ever is in Space!",
        "fullTitle": "The Biggest Volcano Ever is in Space! | SciShow Kids",
        "channel": "SciShow Kids",
        "cat": "space",
        "desc": "Olympus Mons on Mars is the biggest volcano we know of anywhere - about three times taller than Mount Everest!",
        "age": "5+"
    },
    {
        "id": "YR4wtGWK7eE",
        "title": "Hawai’i: Land of Volcanoes",
        "fullTitle": "Hawai’i: Land of Volcanoes | SciShow Kids",
        "channel": "SciShow Kids",
        "cat": "earth",
        "desc": "Hawaii is made of volcanoes! Find out how hot lava built a whole chain of islands in the middle of the ocean.",
        "age": "5+"
    },
    {
        "id": "0jKoOUZ1GBM",
        "title": "Every Kind of Volcano",
        "fullTitle": "Every Kind of Volcano | SciShow Kids",
        "channel": "SciShow Kids",
        "cat": "earth",
        "desc": "Not all volcanoes are the same. Some blow their tops, some ooze slowly, and some have been asleep for ages.",
        "age": "5+"
    },
    {
        "id": "libKVRa01L8",
        "title": "Solar System 101",
        "fullTitle": "Solar System 101 | National Geographic",
        "channel": "National Geographic",
        "cat": "space",
        "desc": "A tour of all eight planets, the Sun, and how our whole solar system came to be.",
        "age": "7+"
    },
    {
        "id": "GoW8Tf7hTGA",
        "title": "Star Size Comparison 2",
        "fullTitle": "Star Size Comparison 2",
        "channel": "morn1415",
        "cat": "space",
        "desc": "See how tiny Earth is next to Jupiter, the Sun, and the truly gigantic stars out in the galaxy.",
        "age": "7+"
    },
    {
        "id": "hFZFjoX2cGg",
        "title": "Backyard Squirrel Maze 1.0- Ninja Warrior Course",
        "fullTitle": "Backyard Squirrel Maze 1.0- Ninja Warrior Course",
        "channel": "Mark Rober",
        "cat": "animals",
        "desc": "An engineer builds a hilarious ninja obstacle course to test just how clever backyard squirrels really are.",
        "age": "6+"
    },
    {
        "id": "Qd6nLM2QlWw",
        "title": "Exploring Our Solar System: Planets and Space for Kids - FreeSchool",
        "fullTitle": "Exploring Our Solar System: Planets and Space for Kids - FreeSchool",
        "channel": "Free School",
        "cat": "space",
        "desc": "A friendly guided tour of every planet, with clear explanations made just for kids.",
        "age": "5+"
    },
    {
        "id": "65E1S2lFK44",
        "title": "Coral Kingdom",
        "fullTitle": "Coral Kingdom | What Sam Sees | Nat Geo Kids",
        "channel": "Nat Geo Kids",
        "cat": "ocean",
        "desc": "Dive into a coral reef and meet the colourful fish, turtles and tiny creatures that call it home.",
        "age": "4+"
    },
    {
        "id": "hGAi96LJQ0w",
        "title": "Everything you wanted to learn about sharks!",
        "fullTitle": "Everything you wanted to learn about sharks! | National Geographic Kids",
        "channel": "Nat Geo Kids",
        "cat": "ocean",
        "desc": "Everything you ever wanted to know about sharks - and why these ocean hunters need our protection.",
        "age": "6+"
    },
    {
        "id": "ly8K257P2BI",
        "title": "5 Famous Dinosaurs That Aren't Actually Dinosaurs",
        "fullTitle": "5 Famous Dinosaurs That Aren't Actually Dinosaurs",
        "channel": "SciShow",
        "cat": "dinos",
        "desc": "Surprise! Some of the most famous \"dinosaurs\" were not dinosaurs at all. Find out which ones.",
        "age": "8+"
    },
    {
        "id": "Y5QGMSC869w",
        "title": "The Human Body",
        "fullTitle": "The Human Body | Science for Kids",
        "channel": "Little School",
        "cat": "body",
        "desc": "A colourful tour of the human body - your heart, lungs, brain, bones and how they all work together.",
        "age": "4+"
    },
    {
        "id": "A9n0Nfh-G2c",
        "title": "How the Human Body Works - Kids Animation Learn Series",
        "fullTitle": "How the Human Body Works - Kids Animation Learn Series",
        "channel": "APPUSERIES",
        "cat": "body",
        "desc": "Animated guide to how your body works, from breathing and digestion to how blood travels around.",
        "age": "5+"
    },
    {
        "id": "3MN-M4gsDX0",
        "title": "Bones for Kids",
        "fullTitle": "Bones for Kids | Learn about the Skeletal System for Kids",
        "channel": "Learn Bright",
        "cat": "body",
        "desc": "All about your skeleton! Learn what bones are made of and why you have 206 of them.",
        "age": "5+"
    },
    {
        "id": "tQ8lpaY8Cgc",
        "title": "Dinosaurs and the Food Chain",
        "fullTitle": "Dinosaurs and the Food Chain | Full Episodes | Science for Kids | The Magic School Bus",
        "channel": "The Magic School Bus",
        "cat": "dinos",
        "desc": "Ride the Magic School Bus back to the age of dinosaurs and learn about the prehistoric food chain.",
        "age": "4+"
    }
];


let docFilter = 'all';
let currentDocIndex = 0;
let docsBuilt = false;

function buildDocumentaries() {
    if (!docsBuilt) { renderDocs(); docsBuilt = true; }
}

function getDocumentary(id) { return DOCUMENTARIES.find(d => d.id === id); }

function renderDocs() {
    const grid = document.getElementById('docsGrid');
    if (!grid) return;

    const term = (document.getElementById('docSearch') || {}).value || '';
    const q = term.trim().toLowerCase();

    const list = DOCUMENTARIES.filter(d => {
        const catOk = q ? true : (docFilter === 'all' || d.cat === docFilter);
        const textOk = !q || d.title.toLowerCase().includes(q) ||
                       d.channel.toLowerCase().includes(q) ||
                       d.desc.toLowerCase().includes(q) ||
                       (DOC_CATS[d.cat] && DOC_CATS[d.cat].name.toLowerCase().includes(q));
        return catOk && textOk;
    });

    const countEl = document.getElementById('docCount');
    if (countEl) {
        countEl.innerText = list.length
            ? `${list.length} film${list.length === 1 ? '' : 's'} ready to watch \u2014 tap a poster to play!`
            : 'No films found \u2014 try another search!';
    }

    grid.innerHTML = '';
    list.forEach(d => {
        const meta = DOC_CATS[d.cat] || { icon: '\ud83c\udfac', name: '' };
        const card = document.createElement('div');
        card.className = 'doc-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.onclick = () => openDoc(d.id);
        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDoc(d.id); }
        };
        // Thumbnail is a plain image - no YouTube script loads until play is tapped.
        card.innerHTML = `
            <div class="doc-thumb">
                <img src="https://i.ytimg.com/vi/${d.id}/hqdefault.jpg" alt="${d.title}" loading="lazy">
                <span class="doc-play" aria-hidden="true">\u25b6</span>
                <span class="doc-cat-tag">${meta.icon} ${meta.name}</span>
                <span class="doc-age">${d.age}</span>
            </div>
            <div class="doc-body">
                <h4>${d.title}</h4>
                <span class="doc-channel">${d.channel}</span>
                <p>${d.desc}</p>
            </div>`;
        grid.appendChild(card);
    });
}
window.renderDocs = renderDocs;

function filterDocs(cat, evt) {
    docFilter = cat;
    playSound(480);
    document.querySelectorAll('.doc-chip').forEach(c => c.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
    renderDocs();
}
window.filterDocs = filterDocs;

function randomDoc() {
    const d = DOCUMENTARIES[Math.floor(Math.random() * DOCUMENTARIES.length)];
    launchConfetti(12);
    openDoc(d.id);
}
window.randomDoc = randomDoc;

function openDoc(id) {
    const d = getDocumentary(id);
    if (!d) return;
    currentDocIndex = DOCUMENTARIES.findIndex(x => x.id === id);

    playSound(660);
    stopSpeech();
    if (typeof stopAnimalAudio === 'function') stopAnimalAudio();

    const set = (elId, val) => { const e = document.getElementById(elId); if (e) e.innerText = val; };
    set('docModalTitle', d.title);
    set('docModalChannel', `${DOC_CATS[d.cat].icon} ${DOC_CATS[d.cat].name}  \u00b7  ${d.channel}  \u00b7  Ages ${d.age}`);
    set('docModalDesc', d.desc);

    // Build the iframe only now, so nothing from YouTube loads until the
    // child actually chooses to watch. nocookie + rel=0 keeps it clean.
    const player = document.getElementById('docPlayer');
    if (player) {
        player.innerHTML =
            `<iframe src="https://www.youtube-nocookie.com/embed/${d.id}?rel=0&modestbranding=1&playsinline=1&autoplay=1"
                     title="${d.title}"
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     referrerpolicy="strict-origin-when-cross-origin"
                     allowfullscreen loading="lazy"></iframe>`;
    }

    const modal = document.getElementById('docModal');
    if (modal) modal.style.display = 'flex';

    if (!factsViewed.has('doc-' + d.id)) {
        factsViewed.add('doc-' + d.id);
        addStars(3);
        const seen = DOCUMENTARIES.filter(x => factsViewed.has('doc-' + x.id)).length;
        if (seen === 1) unlockBadge('firstFilm');
        if (seen >= 8) unlockBadge('filmFan');
        if (seen === DOCUMENTARIES.length) { unlockBadge('documentarian'); launchConfetti(50); }
        saveProgress();
    }
}
window.openDoc = openDoc;

function closeDocModal() {
    const m = document.getElementById('docModal');
    if (m) m.style.display = 'none';
    // Clearing the iframe stops playback immediately.
    const player = document.getElementById('docPlayer');
    if (player) player.innerHTML = '';
    playSound(400);
}
window.closeDocModal = closeDocModal;

function closeDocModalOnBg(e) {
    if (e.target.id === 'docModal') closeDocModal();
}
window.closeDocModalOnBg = closeDocModalOnBg;

function nextDoc() {
    currentDocIndex = (currentDocIndex + 1) % DOCUMENTARIES.length;
    openDoc(DOCUMENTARIES[currentDocIndex].id);
}
window.nextDoc = nextDoc;

function prevDoc() {
    currentDocIndex = (currentDocIndex - 1 + DOCUMENTARIES.length) % DOCUMENTARIES.length;
    openDoc(DOCUMENTARIES[currentDocIndex].id);
}
window.prevDoc = prevDoc;

function speakDocInfo() {
    const d = DOCUMENTARIES[currentDocIndex];
    if (d) speakText(`${d.title}. ${d.desc}`);
}
window.speakDocInfo = speakDocInfo;


// ============================================================
// ANIMAL KINGDOM EXPLORER
// ============================================================
const HABITATS = {
    savanna:  { icon: '🌾', name: 'Savanna',   bg: 'linear-gradient(160deg,#ffe9a8,#e0a83d)' },
    jungle:   { icon: '🌴', name: 'Jungle',    bg: 'linear-gradient(160deg,#a8e6a1,#2f8f4e)' },
    ocean:    { icon: '🌊', name: 'Ocean',     bg: 'linear-gradient(160deg,#a8dcff,#1c6fb8)' },
    arctic:   { icon: '❄️', name: 'Arctic',    bg: 'linear-gradient(160deg,#e8f7ff,#7fb8d8)' },
    forest:   { icon: '🌲', name: 'Forest',    bg: 'linear-gradient(160deg,#c3e6b4,#4a7c3f)' },
    desert:   { icon: '🏜️', name: 'Desert',    bg: 'linear-gradient(160deg,#ffdfa8,#d18b3c)' },
    farm:     { icon: '🚜', name: 'Farm',      bg: 'linear-gradient(160deg,#fff0b8,#b8a13d)' },
    mountain: { icon: '⛰️', name: 'Mountains', bg: 'linear-gradient(160deg,#dfe6ef,#7a8ba3)' }
};


const ANIMAL_SOUND_FILES = {
    "tiger": {
        "file": "sounds/tiger.ogg",
        "author": "schots",
        "license": "CC0",
        "page": "https://commons.wikimedia.org/wiki/File%3A439280_schots_angry-tiger.wav"
    },
    "elephant": {
        "file": "sounds/elephant.ogg",
        "author": "தகவலுழவன்",
        "license": "CC0",
        "page": "https://commons.wikimedia.org/wiki/File%3AElephant_voice_-_trumpeting.ogg"
    },
    "wolf": {
        "file": "sounds/wolf.ogg",
        "author": "Wikimedia contributor",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File%3AWolf_howls.ogg"
    },
    "monkey": {
        "file": "sounds/monkey.ogg",
        "author": "Wikimedia contributor",
        "license": "CC BY 4.0",
        "page": "https://commons.wikimedia.org/wiki/File%3AMantled_Howler_Monkey_%28Alouatta_palliata%29_%28W_ALOUATTA_PALLIATA_R1_C2%29.ogg"
    },
    "cow": {
        "file": "sounds/cow.ogg",
        "author": "MichaeltheFox8621",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File%3ASingle_Cow_Moo.ogg"
    },
    "owl": {
        "file": "sounds/owl.ogg",
        "author": "عثمان",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File%3AMaghreb_owl_hooting.wav"
    },
    "penguin": {
        "file": "sounds/penguin.ogg",
        "author": "Mikeybear",
        "license": "CC BY 3.0",
        "page": "https://commons.wikimedia.org/wiki/File%3A20091121_Little_Penguin_calls_at_St_Kilda_Breakwater.ogg"
    },
    "peacock": {
        "file": "sounds/peacock.ogg",
        "author": "Perlscrypt",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File%3AMalePeacockCall.ogg"
    },
    "duck": {
        "file": "sounds/duck.ogg",
        "author": "Commander Keane",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File%3AEn-au-quack_like_a_duck.ogg"
    },
    "frog": {
        "file": "sounds/frog.ogg",
        "author": "MichaeltheFox8621",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File%3ASingle_Frog_Croak.oga"
    },
    "bee": {
        "file": "sounds/bee.ogg",
        "author": "Free Sounds Library User Spanac",
        "license": "CC BY 3.0",
        "page": "https://commons.wikimedia.org/wiki/File%3ABee_buzzing_sound_%28animal_noises%29.opus"
    },
    "polarbear": {
        "file": "sounds/bear.ogg",
        "author": "Shizhao",
        "license": "CC BY 3.0",
        "page": "https://commons.wikimedia.org/wiki/File%3ABear_growl.ogg"
    },
    "cat": {
        "file": "sounds/cat.ogg",
        "author": "Smser",
        "license": "GFDL",
        "page": "https://commons.wikimedia.org/wiki/File%3AMeow_domestic_cat.ogg"
    },
    "dog": {
        "file": "sounds/dog.ogg",
        "author": "Amada44",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File%3ABarking_of_a_dog.ogg"
    },
    "sheep": {
        "file": "sounds/sheep.ogg",
        "author": "Eviatar Bach",
        "license": "CC0",
        "page": "https://commons.wikimedia.org/wiki/File%3ASheep_bleat.ogg"
    },
    "goat": {
        "file": "sounds/goat.ogg",
        "author": "stephan",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File%3AHerd_of_goats_bleating.ogg"
    },
    "chicken": {
        "file": "sounds/chicken.ogg",
        "author": "alys",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File%3AHen_announcing_shes_lain_an_egg.ogg"
    },
    "rooster": {
        "file": "sounds/rooster.ogg",
        "author": "Filo gèn'",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File%3ARooster_crowing.ogg"
    },
    "horse": {
        "file": "sounds/horse.ogg",
        "author": "Hü.",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File%3AWiehern.ogg"
    },
    "donkey": {
        "file": "sounds/donkey.ogg",
        "author": "Troll Control",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File%3AEn-uk-donkey.ogg"
    },
    "crow": {
        "file": "sounds/crow.ogg",
        "author": "Vis M",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File%3ACrow_01a.wav"
    },
    "seagull": {
        "file": "sounds/seagull.ogg",
        "author": "Wikimedia contributor",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File%3AHerring_Gull_%28Larus_argentatus%29_%28W1CDR0001420_BD12%29.ogg"
    },
    "turkey": {
        "file": "sounds/turkey.ogg",
        "author": "Jonathon Jongsma",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File%3AMeleagris_gallopavo_-_Wild_Turkey_XC134155.ogg"
    },
    "cricket": {
        "file": "sounds/cricket.ogg",
        "author": "Rickjpelleg",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File%3ACricket_Gryllus_bimaculatus_Chirps.oga"
    }
};

const ANIMALS = [
    // ---------- MAMMALS ----------
    { id:'lion', name:'Lion', emoji:'🦁', group:'mammal', habitat:'savanna', sound:'Roar!', soundWord:'roars',
      tagline:'King of the savanna!', diet:'Carnivore', size:'Up to 250 kg', speed:'80 km/h', life:'15 years', baby:'Cub',
      fact:'A lion\u2019s roar can be heard 8 kilometres away! Lions are the only cats that live together in family groups called prides.' },
    { id:'elephant', name:'Elephant', emoji:'🐘', group:'mammal', habitat:'savanna', sound:'Trumpet!', soundWord:'trumpets',
      tagline:'The biggest land animal!', diet:'Herbivore', size:'Up to 6,000 kg', speed:'40 km/h', life:'70 years', baby:'Calf',
      fact:'An elephant\u2019s trunk has over 40,000 muscles \u2014 that is more than your whole body! They use it to drink, smell and hug.' },
    { id:'tiger', name:'Tiger', emoji:'🐅', group:'mammal', habitat:'jungle', sound:'Growl!', soundWord:'growls',
      tagline:'The stripey stealth hunter!', diet:'Carnivore', size:'Up to 300 kg', speed:'65 km/h', life:'20 years', baby:'Cub',
      fact:'Every tiger has its own stripe pattern, just like your fingerprints! Their skin is striped too, not only their fur.' },
    { id:'giraffe', name:'Giraffe', emoji:'🦒', group:'mammal', habitat:'savanna', sound:'Hum!', soundWord:'hums',
      tagline:'The tallest animal on Earth!', diet:'Herbivore', size:'Up to 1,900 kg', speed:'60 km/h', life:'25 years', baby:'Calf',
      fact:'A giraffe\u2019s neck is 2 metres long but has exactly 7 bones \u2014 the same number as in your neck! Their tongue is purple-blue.' },
    { id:'monkey', name:'Monkey', emoji:'🐒', group:'mammal', habitat:'jungle', sound:'Ooh ooh ah ah!', soundWord:'chatters',
      tagline:'The clever climber!', diet:'Omnivore', size:'Up to 35 kg', speed:'55 km/h', life:'20 years', baby:'Infant',
      fact:'Monkeys use tools, solve puzzles, and some even wash their food before eating. They greet each other with hugs!' },
    { id:'panda', name:'Giant Panda', emoji:'🐼', group:'mammal', habitat:'forest', sound:'Bleat!', soundWord:'bleats',
      tagline:'The bamboo muncher!', diet:'Herbivore', size:'Up to 120 kg', speed:'32 km/h', life:'20 years', baby:'Cub',
      fact:'Pandas eat bamboo for 14 hours a day \u2014 about 12 kilos! A newborn panda is smaller than a mouse and totally pink.' },
    { id:'polarbear', name:'Polar Bear', emoji:'🐻‍❄️', group:'mammal', habitat:'arctic', sound:'Growl!', soundWord:'growls',
      tagline:'The ice-cold giant!', diet:'Carnivore', size:'Up to 700 kg', speed:'40 km/h', life:'25 years', baby:'Cub',
      fact:'Polar bear fur looks white but is actually see-through, and their skin underneath is black to soak up the sun\u2019s warmth!' },
    { id:'kangaroo', name:'Kangaroo', emoji:'🦘', group:'mammal', habitat:'desert', sound:'Chortle!', soundWord:'chortles',
      tagline:'The champion jumper!', diet:'Herbivore', size:'Up to 90 kg', speed:'70 km/h', life:'23 years', baby:'Joey',
      fact:'A kangaroo can leap 9 metres in one hop \u2014 longer than a bus! Baby joeys ride in mum\u2019s pouch for 8 months.' },
    { id:'wolf', name:'Wolf', emoji:'🐺', group:'mammal', habitat:'forest', sound:'Howwwl!', soundWord:'howls',
      tagline:'The pack leader!', diet:'Carnivore', size:'Up to 80 kg', speed:'60 km/h', life:'13 years', baby:'Pup',
      fact:'Wolves howl to talk to their family from far away \u2014 a howl carries up to 16 kilometres through the forest!' },
    { id:'zebra', name:'Zebra', emoji:'🦓', group:'mammal', habitat:'savanna', sound:'Bark-neigh!', soundWord:'brays',
      tagline:'The stripey horse!', diet:'Herbivore', size:'Up to 450 kg', speed:'65 km/h', life:'25 years', baby:'Foal',
      fact:'No two zebras have the same stripes. Scientists think the stripes confuse biting flies and keep zebras cooler!' },
    { id:'cow', name:'Cow', emoji:'🐄', group:'mammal', habitat:'farm', sound:'Mooooo!', soundWord:'moos',
      tagline:'The friendly milk maker!', diet:'Herbivore', size:'Up to 750 kg', speed:'40 km/h', life:'20 years', baby:'Calf',
      fact:'Cows have best friends and get stressed when apart! They have four stomach chambers to digest all that grass.' },
    { id:'bat', name:'Bat', emoji:'🦇', group:'mammal', habitat:'forest', sound:'Screech!', soundWord:'screeches',
      tagline:'The only flying mammal!', diet:'Omnivore', size:'Up to 1.5 kg', speed:'160 km/h', life:'30 years', baby:'Pup',
      fact:'Bats "see" with sound using echolocation \u2014 just like dolphins! One little bat can eat 1,000 mosquitoes in an hour.' },

    { id:'cat', name:'Cat', emoji:'🐱', group:'mammal', habitat:'farm', sound:'Meow!', soundWord:'meows',
      tagline:'The purring house tiger!', diet:'Carnivore', size:'Up to 5 kg', speed:'48 km/h', life:'16 years', baby:'Kitten',
      fact:'Cats sleep up to 16 hours a day and purr at a frequency that can help their own bones heal faster!' },
    { id:'dog', name:'Dog', emoji:'🐶', group:'mammal', habitat:'farm', sound:'Woof woof!', soundWord:'barks',
      tagline:'Our best friend!', diet:'Omnivore', size:'Up to 90 kg', speed:'70 km/h', life:'13 years', baby:'Puppy',
      fact:'A dog’s sense of smell is 10,000 times better than yours — they can even smell how you are feeling!' },
    { id:'sheep', name:'Sheep', emoji:'🐑', group:'mammal', habitat:'farm', sound:'Baaaa!', soundWord:'bleats',
      tagline:'The woolly cloud!', diet:'Herbivore', size:'Up to 100 kg', speed:'40 km/h', life:'12 years', baby:'Lamb',
      fact:'Sheep can remember up to 50 different faces for years, and they see almost all the way around without turning their head!' },
    { id:'goat', name:'Goat', emoji:'🐐', group:'mammal', habitat:'mountain', sound:'Maaaa!', soundWord:'bleats',
      tagline:'The champion climber!', diet:'Herbivore', size:'Up to 140 kg', speed:'25 km/h', life:'18 years', baby:'Kid',
      fact:'Goats can climb almost vertical cliffs and even trees! Their rectangular pupils let them see nearly all around.' },
    { id:'horse', name:'Horse', emoji:'🐴', group:'mammal', habitat:'farm', sound:'Neigh!', soundWord:'neighs',
      tagline:'The graceful galloper!', diet:'Herbivore', size:'Up to 1,000 kg', speed:'88 km/h', life:'30 years', baby:'Foal',
      fact:'Horses can sleep standing up AND lying down, and baby foals can walk within just two hours of being born!' },
    { id:'donkey', name:'Donkey', emoji:'🐎', group:'mammal', habitat:'farm', sound:'Hee-haw!', soundWord:'brays',
      tagline:'The sure-footed helper!', diet:'Herbivore', size:'Up to 500 kg', speed:'50 km/h', life:'40 years', baby:'Foal',
      fact:'A donkey’s bray can be heard 3 kilometres away! They have amazing memories and recognise friends after 25 years.' },
    { id:'chicken', name:'Chicken', emoji:'🐔', group:'bird', habitat:'farm', sound:'Cluck cluck!', soundWord:'clucks',
      tagline:'The busy egg layer!', diet:'Omnivore', size:'Up to 4 kg', speed:'14 km/h', life:'8 years', baby:'Chick',
      fact:'Chickens remember over 100 different faces and they talk to their chicks while the chicks are still inside the egg!' },
    { id:'rooster', name:'Rooster', emoji:'🐓', group:'bird', habitat:'farm', sound:'Cock-a-doodle-doo!', soundWord:'crows',
      tagline:'The morning alarm clock!', diet:'Omnivore', size:'Up to 5 kg', speed:'14 km/h', life:'8 years', baby:'Chick',
      fact:'Roosters have a built-in body clock and start crowing before sunrise — even in a totally dark room!' },
    { id:'crow', name:'Crow', emoji:'🐦', group:'bird', habitat:'forest', sound:'Caw! Caw!', soundWord:'caws',
      tagline:'The feathered genius!', diet:'Omnivore', size:'Up to 1.5 kg', speed:'70 km/h', life:'20 years', baby:'Chick',
      fact:'Crows make tools, recognise human faces, and even hold grudges! They solve puzzles as well as a 7-year-old child.' },
    { id:'seagull', name:'Seagull', emoji:'🕊️', group:'bird', habitat:'ocean', sound:'Ah-ah-ah!', soundWord:'calls',
      tagline:'The seaside squawker!', diet:'Omnivore', size:'Up to 1.8 kg', speed:'45 km/h', life:'20 years', baby:'Chick',
      fact:'Seagulls can drink salty sea water! Special glands above their eyes squeeze all the salt back out.' },
    { id:'turkey', name:'Turkey', emoji:'🦃', group:'bird', habitat:'farm', sound:'Gobble gobble!', soundWord:'gobbles',
      tagline:'The fan-tailed gobbler!', diet:'Omnivore', size:'Up to 11 kg', speed:'88 km/h flying', life:'10 years', baby:'Poult',
      fact:'Wild turkeys can fly at 88 km/h in short bursts and sleep up in trees to stay safe from foxes!' },
    { id:'cricket', name:'Cricket', emoji:'🦗', group:'insect', habitat:'forest', sound:'Chirp chirp!', soundWord:'chirps',
      tagline:'The night-time musician!', diet:'Omnivore', size:'Up to 2 g', speed:'5 km/h', life:'1 year', baby:'Nymph',
      fact:'Crickets chirp by rubbing their wings together, and they hear through their KNEES! Count the chirps to guess the temperature.' },
    // ---------- BIRDS ----------
    { id:'eagle', name:'Bald Eagle', emoji:'🦅', group:'bird', habitat:'mountain', sound:'Screech!', soundWord:'screeches',
      tagline:'The sharp-eyed hunter!', diet:'Carnivore', size:'Up to 6 kg', speed:'160 km/h', life:'25 years', baby:'Eaglet',
      fact:'An eagle can spot a rabbit from 3 kilometres away \u2014 their eyesight is 8 times sharper than yours!' },
    { id:'penguin', name:'Penguin', emoji:'🐧', group:'bird', habitat:'arctic', sound:'Squawk!', soundWord:'squawks',
      tagline:'The bird that swims!', diet:'Carnivore', size:'Up to 40 kg', speed:'35 km/h swimming', life:'20 years', baby:'Chick',
      fact:'Penguins cannot fly in the air, but they "fly" underwater at 35 km/h! Emperor dads balance the egg on their feet all winter.' },
    { id:'owl', name:'Owl', emoji:'🦉', group:'bird', habitat:'forest', sound:'Hoo hoo!', soundWord:'hoots',
      tagline:'The silent night flyer!', diet:'Carnivore', size:'Up to 4 kg', speed:'60 km/h', life:'25 years', baby:'Owlet',
      fact:'Owls can turn their heads 270 degrees! Special soft feathers make their wings completely silent when hunting.' },
    { id:'parrot', name:'Parrot', emoji:'🦜', group:'bird', habitat:'jungle', sound:'Squawk! Hello!', soundWord:'squawks',
      tagline:'The talking rainbow!', diet:'Herbivore', size:'Up to 1.5 kg', speed:'40 km/h', life:'60 years', baby:'Chick',
      fact:'Parrots can copy human words and even understand some of them! Some African Greys learn over 1,000 words.' },
    { id:'flamingo', name:'Flamingo', emoji:'🦩', group:'bird', habitat:'ocean', sound:'Honk!', soundWord:'honks',
      tagline:'The pink one-leg stander!', diet:'Omnivore', size:'Up to 4 kg', speed:'60 km/h', life:'40 years', baby:'Chick',
      fact:'Flamingos are born grey! They turn pink from eating shrimp and algae. They stand on one leg to stay warm.' },
    { id:'peacock', name:'Peacock', emoji:'🦚', group:'bird', habitat:'jungle', sound:'Meow-cry!', soundWord:'calls',
      tagline:'The showiest tail ever!', diet:'Omnivore', size:'Up to 6 kg', speed:'16 km/h', life:'20 years', baby:'Peachick',
      fact:'A peacock\u2019s tail has 200 feathers with eye-spots and can be wider than a door \u2014 he shakes it to impress peahens!' },
    { id:'duck', name:'Duck', emoji:'🦆', group:'bird', habitat:'farm', sound:'Quack quack!', soundWord:'quacks',
      tagline:'The waterproof swimmer!', diet:'Omnivore', size:'Up to 1.6 kg', speed:'95 km/h', life:'10 years', baby:'Duckling',
      fact:'Duck feathers are totally waterproof \u2014 water rolls right off! Ducklings follow the first thing they see as mum.' },

    // ---------- REPTILES & AMPHIBIANS ----------
    { id:'crocodile', name:'Crocodile', emoji:'🐊', group:'reptile', habitat:'jungle', sound:'Hisss!', soundWord:'hisses',
      tagline:'The ancient snapper!', diet:'Carnivore', size:'Up to 1,000 kg', speed:'35 km/h', life:'70 years', baby:'Hatchling',
      fact:'Crocodiles have the strongest bite on Earth, but the muscles to OPEN their jaws are so weak you could hold them shut!' },
    { id:'snake', name:'Snake', emoji:'🐍', group:'reptile', habitat:'desert', sound:'Sssssss!', soundWord:'hisses',
      tagline:'The legless slitherer!', diet:'Carnivore', size:'Up to 250 kg', speed:'20 km/h', life:'25 years', baby:'Snakelet',
      fact:'Snakes smell with their tongue! They flick it out to taste the air and find dinner. They can swallow food bigger than their head.' },
    { id:'turtle', name:'Sea Turtle', emoji:'🐢', group:'reptile', habitat:'ocean', sound:'Grunt!', soundWord:'grunts',
      tagline:'The ancient ocean traveller!', diet:'Omnivore', size:'Up to 900 kg', speed:'35 km/h', life:'100 years', baby:'Hatchling',
      fact:'Sea turtles swim thousands of kilometres but always return to the very same beach where they hatched to lay their own eggs!' },
    { id:'chameleon', name:'Chameleon', emoji:'🦎', group:'reptile', habitat:'jungle', sound:'Hiss!', soundWord:'hisses',
      tagline:'The colour-changing sneak!', diet:'Carnivore', size:'Up to 2 kg', speed:'34 km/h', life:'7 years', baby:'Hatchling',
      fact:'Chameleons change colour to show feelings, not just to hide! Each eye moves separately so they see two things at once.' },
    { id:'frog', name:'Frog', emoji:'🐸', group:'reptile', habitat:'jungle', sound:'Ribbit ribbit!', soundWord:'croaks',
      tagline:'The hopping singer!', diet:'Carnivore', size:'Up to 3 kg', speed:'8 km/h', life:'10 years', baby:'Tadpole',
      fact:'Frogs drink water through their skin instead of their mouth! Baby frogs are tadpoles with tails and no legs at all.' },

    // ---------- SEA LIFE ----------
    { id:'dolphin', name:'Dolphin', emoji:'🐬', group:'sea', habitat:'ocean', sound:'Eee-eee-click!', soundWord:'clicks',
      tagline:'The ocean genius!', diet:'Carnivore', size:'Up to 200 kg', speed:'60 km/h', life:'50 years', baby:'Calf',
      fact:'Dolphins call each other by name using special whistles! They sleep with one half of the brain awake so they keep breathing.' },
    { id:'whale', name:'Blue Whale', emoji:'🐋', group:'sea', habitat:'ocean', sound:'Wooooo!', soundWord:'sings',
      tagline:'The biggest animal ever!', diet:'Carnivore', size:'Up to 150,000 kg', speed:'50 km/h', life:'90 years', baby:'Calf',
      fact:'A blue whale\u2019s heart is the size of a small car, and its tongue weighs as much as an elephant! Its song travels 1,600 km.' },
    { id:'shark', name:'Shark', emoji:'🦈', group:'sea', habitat:'ocean', sound:'Swoosh!', soundWord:'swooshes',
      tagline:'The ocean\u2019s oldest hunter!', diet:'Carnivore', size:'Up to 2,000 kg', speed:'50 km/h', life:'70 years', baby:'Pup',
      fact:'Sharks have been swimming for 400 million years \u2014 longer than trees have existed! They lose 30,000 teeth in a lifetime.' },
    { id:'octopus', name:'Octopus', emoji:'🐙', group:'sea', habitat:'ocean', sound:'Blub!', soundWord:'blubs',
      tagline:'The eight-armed genius!', diet:'Carnivore', size:'Up to 50 kg', speed:'40 km/h', life:'5 years', baby:'Larva',
      fact:'An octopus has three hearts, blue blood and nine brains! It can squeeze through any hole bigger than its beak.' },
    { id:'crab', name:'Crab', emoji:'🦀', group:'sea', habitat:'ocean', sound:'Click-clack!', soundWord:'clicks',
      tagline:'The sideways walker!', diet:'Omnivore', size:'Up to 20 kg', speed:'12 km/h', life:'8 years', baby:'Larva',
      fact:'Crabs walk sideways because of how their knees bend! They taste with their feet and can regrow a lost claw.' },
    { id:'seahorse', name:'Seahorse', emoji:'🐠', group:'sea', habitat:'ocean', sound:'Click!', soundWord:'clicks',
      tagline:'The dad who has the babies!', diet:'Carnivore', size:'Up to 200 g', speed:'1.5 km/h', life:'5 years', baby:'Fry',
      fact:'Seahorse dads carry the eggs in a pouch and give birth to up to 1,000 babies! They are the slowest fish in the sea.' },

    // ---------- BUGS ----------
    { id:'butterfly', name:'Butterfly', emoji:'🦋', group:'insect', habitat:'forest', sound:'Flutter!', soundWord:'flutters',
      tagline:'The flying flower!', diet:'Herbivore', size:'Up to 3 g', speed:'20 km/h', life:'1 year', baby:'Caterpillar',
      fact:'Butterflies taste with their FEET! They start life as a caterpillar and completely rebuild themselves inside a chrysalis.' },
    { id:'bee', name:'Honey Bee', emoji:'🐝', group:'insect', habitat:'farm', sound:'Bzzzzz!', soundWord:'buzzes',
      tagline:'The busy honey maker!', diet:'Herbivore', size:'Up to 0.1 g', speed:'25 km/h', life:'1 year', baby:'Larva',
      fact:'Bees dance to tell friends where flowers are! One bee makes just a twelfth of a teaspoon of honey in her whole life.' },
    { id:'ant', name:'Ant', emoji:'🐜', group:'insect', habitat:'forest', sound:'Tiny scritch!', soundWord:'scritches',
      tagline:'The tiny strongman!', diet:'Omnivore', size:'Up to 0.02 g', speed:'0.9 km/h', life:'3 years', baby:'Larva',
      fact:'An ant can lift 50 times its own weight \u2014 like you lifting a car! Ant colonies can have millions of workers.' },
    { id:'ladybug', name:'Ladybug', emoji:'🐞', group:'insect', habitat:'farm', sound:'Tiny flutter!', soundWord:'flutters',
      tagline:'The spotty garden helper!', diet:'Carnivore', size:'Up to 0.05 g', speed:'24 km/h', life:'1 year', baby:'Larva',
      fact:'Ladybugs eat up to 5,000 aphids in their life, protecting plants! Their bright spots warn birds they taste horrible.' },
    { id:'spider', name:'Spider', emoji:'🕷️', group:'insect', habitat:'forest', sound:'Silent!', soundWord:'creeps',
      tagline:'The eight-legged weaver!', diet:'Carnivore', size:'Up to 175 g', speed:'8 km/h', life:'2 years', baby:'Spiderling',
      fact:'Spider silk is stronger than steel of the same thickness! Most spiders have 8 eyes but still see quite badly.' }
];

let animalGroupFilter = 'all';
let animalMode = 'explore';
let currentAnimalIndex = 0;
let animalsBuilt = false;


// ------------------------------------------------------------
// REAL ANIMAL SOUND PLAYER
// Plays genuine recordings from the sounds/ folder when we have
// one, and falls back to the spoken sound word when we do not.
// ------------------------------------------------------------
const animalAudioCache = {};
let currentAnimalAudio = null;

function hasRealSound(animalId) {
    return !!(typeof ANIMAL_SOUND_FILES !== 'undefined' && ANIMAL_SOUND_FILES[animalId]);
}

function stopAnimalAudio() {
    if (currentAnimalAudio) {
        try { currentAnimalAudio.pause(); currentAnimalAudio.currentTime = 0; } catch (e) {}
        currentAnimalAudio = null;
    }
    document.querySelectorAll('.sound-playing').forEach(el => el.classList.remove('sound-playing'));
}
window.stopAnimalAudio = stopAnimalAudio;

function playRealAnimalSound(animalId, onDone) {
    const entry = hasRealSound(animalId) ? ANIMAL_SOUND_FILES[animalId] : null;
    if (!entry) { if (onDone) onDone(false); return false; }

    stopSpeech();
    stopAnimalAudio();

    let audio = animalAudioCache[animalId];
    if (!audio) {
        audio = new Audio(entry.file);
        audio.preload = 'auto';
        animalAudioCache[animalId] = audio;
    }
    try { audio.currentTime = 0; } catch (e) {}
    audio.volume = 1;
    currentAnimalAudio = audio;

    audio.onended = () => { stopAnimalAudio(); if (onDone) onDone(true); };
    audio.onerror = () => {
        console.warn('[KidZone] could not load', entry.file, '- using voice instead');
        stopAnimalAudio();
        if (onDone) onDone(false);
    };

    const p = audio.play();
    if (p && typeof p.catch === 'function') {
        p.catch(err => {
            console.warn('[KidZone] audio blocked:', err && err.name);
            stopAnimalAudio();
            if (onDone) onDone(false);
        });
    }
    return true;
}
window.playRealAnimalSound = playRealAnimalSound;

function playAnimalCry(animalId, spokenFallback) {
    let spoke = false;
    const ok = playRealAnimalSound(animalId, (played) => {
        if (!played && spokenFallback && !spoke) { spoke = true; speakText(spokenFallback); }
    });
    if (!ok && spokenFallback && !spoke) { spoke = true; speakText(spokenFallback); }
    return ok;
}
window.playAnimalCry = playAnimalCry;


function getAnimal(id) { return ANIMALS.find(a => a.id === id); }

// "An octopus" vs "A lion"
function articleFor(word) {
    return /^[aeiou]/i.test(String(word).trim()) ? 'An' : 'A';
}

function buildAnimalKingdom() {
    if (!animalsBuilt) {
        renderAnimalGrid();
        animalsBuilt = true;
    }
}

// ---------- EXPLORE ----------
function renderAnimalGrid() {
    const grid = document.getElementById('animalGrid');
    if (!grid) return;

    const term = (document.getElementById('animalSearch') || {}).value || '';
    const q = term.trim().toLowerCase();

    const list = ANIMALS.filter(a => {
        // When the child is typing a search, ignore the group filter so they
        // always find the animal they are looking for.
        const groupOk = q ? true : (animalGroupFilter === 'all' || a.group === animalGroupFilter);
        const textOk = !q || a.name.toLowerCase().includes(q) ||
                       a.tagline.toLowerCase().includes(q) ||
                       (HABITATS[a.habitat] && HABITATS[a.habitat].name.toLowerCase().includes(q));
        return groupOk && textOk;
    });

    const countEl = document.getElementById('animalCount');
    if (countEl) {
        countEl.innerText = list.length
            ? `Showing ${list.length} animal${list.length === 1 ? '' : 's'} — tap one to meet it!`
            : 'No animals found — try another search!';
    }

    grid.innerHTML = '';
    list.forEach(a => {
        const hab = HABITATS[a.habitat] || { icon: '🌍', name: '' };
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.dataset.animal = a.id;
        card.onclick = () => openAnimal(a.id);
        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openAnimal(a.id); }
        };
        card.innerHTML = `
            <span class="ac-habitat">${hab.icon}</span>
            <span class="ac-emoji">${a.emoji}</span>
            <h4>${a.name}</h4>
            <p>${a.tagline}</p>
            <span class="ac-sound${hasRealSound(a.id) ? ' has-real' : ''}">${hasRealSound(a.id) ? '\ud83c\udf99\ufe0f' : '\ud83d\udd0a'} ${a.sound}</span>`;
        grid.appendChild(card);
    });
}

function filterAnimals() { renderAnimalGrid(); }
window.filterAnimals = filterAnimals;

function filterAnimalGroup(group, evt) {
    animalGroupFilter = group;
    playSound(480);
    document.querySelectorAll('.animal-chip').forEach(c => c.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
    renderAnimalGrid();
}
window.filterAnimalGroup = filterAnimalGroup;

function randomAnimal() {
    const a = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
    launchConfetti(12);
    openAnimal(a.id);
}
window.randomAnimal = randomAnimal;

function setAnimalMode(mode, evt) {
    animalMode = mode;
    playSound(450);
    document.querySelectorAll('.animal-mode-btn').forEach(b => b.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');

    const panels = {
        explore: 'animalExplore', sound: 'animalSound',
        habitat: 'animalHabitat', quiz: 'animalQuiz'
    };
    Object.entries(panels).forEach(([k, id]) => {
        const el = document.getElementById(id);
        if (el) el.style.display = (k === mode) ? 'block' : 'none';
    });

    if (mode === 'explore') renderAnimalGrid();
    if (mode === 'sound') startSoundGame();
    if (mode === 'habitat') startHabitatGame();
    if (mode === 'quiz') startAnimalQuiz();
}
window.setAnimalMode = setAnimalMode;

// ---------- ANIMAL MODAL ----------
function openAnimal(id) {
    const a = getAnimal(id);
    if (!a) return;
    currentAnimalIndex = ANIMALS.findIndex(x => x.id === id);
    playSound(640);

    const hab = HABITATS[a.habitat] || { icon: '🌍', name: 'Everywhere', bg: '#eee' };
    const set = (elId, val) => { const e = document.getElementById(elId); if (e) e.innerText = val; };

    const hero = document.getElementById('animalModalHero');
    if (hero) hero.style.background = hab.bg;
    set('animalBigEmoji', a.emoji);
    set('animalModalTitle', a.name);
    set('animalTagline', a.tagline);
    set('animalFactText', a.fact);
    set('animalSoundWord', `${articleFor(a.name)} ${a.name.toLowerCase()} ${a.soundWord}: "${a.sound}"`);

    // CC BY-SA requires crediting the recording's author.
    const creditEl = document.getElementById('animalSoundCredit');
    const snd = hasRealSound(a.id) ? ANIMAL_SOUND_FILES[a.id] : null;
    if (creditEl) {
        if (snd) {
            creditEl.innerHTML = 'Real recording \u00b7 <a href="' + snd.page +
                '" target="_blank" rel="noopener">' + snd.author + '</a> \u00b7 ' + snd.license;
            creditEl.style.display = 'block';
        } else {
            creditEl.style.display = 'none';
        }
    }
    const soundBtn = document.querySelector('.animal-sound-btn');
    if (soundBtn) {
        soundBtn.innerHTML = snd ? '\ud83c\udf99\ufe0f Hear the REAL sound!' : '\ud83d\udd0a Hear the sound!';
    }

    const groupNames = { mammal:'🐘 Mammal', bird:'🦜 Bird', reptile:'🐊 Reptile', sea:'🐠 Sea Life', insect:'🦋 Bug' };
    const badges = document.getElementById('animalBadgesRow');
    if (badges) {
        badges.innerHTML =
            `<span class="a-badge">${groupNames[a.group] || a.group}</span>
             <span class="a-badge">${hab.icon} ${hab.name}</span>
             <span class="a-badge diet-${a.diet.toLowerCase()}">${a.diet}</span>`;
    }

    const stats = document.getElementById('animalStatsGrid');
    if (stats) {
        const rows = [
            ['⚖️', 'Weight', a.size], ['🏃', 'Top speed', a.speed],
            ['🎂', 'Lives about', a.life], ['👶', 'Baby is called', a.baby]
        ];
        stats.innerHTML = rows.map(([i, l, v]) =>
            `<div class="a-stat"><span class="a-stat-icon">${i}</span>
             <span class="a-stat-label">${l}</span><span class="a-stat-val">${v}</span></div>`).join('');
    }

    const modal = document.getElementById('animalModal');
    if (modal) modal.style.display = 'flex';

    if (!factsViewed.has('animal-' + a.id)) {
        factsViewed.add('animal-' + a.id);
        addStars(3);
        const seen = ANIMALS.filter(x => factsViewed.has('animal-' + x.id)).length;
        if (seen === 1) unlockBadge('animalFriend');
        if (seen >= 20) unlockBadge('zooKeeper');
        if (seen === ANIMALS.length) { unlockBadge('zoologist'); launchConfetti(50); }
        saveProgress();
    }
}
window.openAnimal = openAnimal;

function closeAnimalModal() {
    const m = document.getElementById('animalModal');
    if (m) m.style.display = 'none';
    stopAnimalAudio();
    stopSpeech();
    playSound(400);
}
window.closeAnimalModal = closeAnimalModal;

function closeAnimalModalOnBg(e) {
    if (e.target.id === 'animalModal') closeAnimalModal();
}
window.closeAnimalModalOnBg = closeAnimalModalOnBg;

function nextAnimal() {
    currentAnimalIndex = (currentAnimalIndex + 1) % ANIMALS.length;
    openAnimal(ANIMALS[currentAnimalIndex].id);
}
window.nextAnimal = nextAnimal;

function prevAnimal() {
    currentAnimalIndex = (currentAnimalIndex - 1 + ANIMALS.length) % ANIMALS.length;
    openAnimal(ANIMALS[currentAnimalIndex].id);
}
window.prevAnimal = prevAnimal;

function speakAnimalFact() {
    const a = ANIMALS[currentAnimalIndex];
    if (a) speakText(`${a.name}. ${a.tagline} ${a.fact}`);
}
window.speakAnimalFact = speakAnimalFact;

function speakAnimalSound() {
    const a = ANIMALS[currentAnimalIndex];
    if (!a) return;
    const btn = document.querySelector('.animal-sound-btn');
    if (btn) {
        btn.classList.add('sound-playing');
        setTimeout(() => btn.classList.remove('sound-playing'), 3200);
    }
    playAnimalCry(a.id, `${a.name} says ${a.sound}`);
}
window.speakAnimalSound = speakAnimalSound;

// ---------- GAME: GUESS THE SOUND ----------
let soundRounds = [], soundIdx = 0, soundScore = 0, soundLocked = false;

function startSoundGame() {
    // Prefer animals with a genuine recording so the game is really
    // about listening rather than a voice reading a word aloud.
    const withReal = ANIMALS.filter(a => hasRealSound(a.id));
    const pool = withReal.length >= 8 ? withReal : ANIMALS;
    soundRounds = shuffleArray(pool).slice(0, 8);
    soundIdx = 0; soundScore = 0; soundLocked = false;
    renderSoundRound();
}
window.startSoundGame = startSoundGame;

function renderSoundRound() {
    const promptEl = document.getElementById('soundPrompt');
    const optsEl = document.getElementById('soundOptions');
    const scoreEl = document.getElementById('soundScore');
    const roundEl = document.getElementById('soundRound');
    if (!optsEl) return;

    if (scoreEl) scoreEl.innerText = soundScore;

    if (soundIdx >= soundRounds.length) {
        if (roundEl) roundEl.innerText = 'Done!';
        if (promptEl) promptEl.innerText = `🎉 You scored ${soundScore} out of ${soundRounds.length}!`;
        optsEl.innerHTML = '<button class="sound-opt" onclick="startSoundGame()">🔄 Play Again</button>';
        recordRoundScore('animalsound', soundScore, soundRounds.length);
        addStars(soundScore * 2);
        if (soundScore === soundRounds.length) { unlockBadge('soundMaster'); launchConfetti(45); }
        speakText(`Great job! You scored ${soundScore} out of ${soundRounds.length}.`);
        return;
    }

    if (roundEl) roundEl.innerText = `${soundIdx + 1} / ${soundRounds.length}`;
    if (promptEl) promptEl.innerText = 'Press the speaker, then pick who made that sound!';

    const target = soundRounds[soundIdx];
    const others = shuffleArray(ANIMALS.filter(a => a.id !== target.id)).slice(0, 3);
    const opts = shuffleArray([target, ...others]);

    optsEl.innerHTML = '';
    opts.forEach(a => {
        const b = document.createElement('button');
        b.className = 'sound-opt';
        b.innerHTML = `<span class="so-emoji">${a.emoji}</span><span>${a.name}</span>`;
        b.onclick = () => answerSound(a.id, b, target);
        optsEl.appendChild(b);
    });

    soundLocked = false;
    setTimeout(playAnimalSound, 350);
}

function playAnimalSound() {
    const target = soundRounds[soundIdx];
    if (!target) return;
    const btn = document.getElementById('bigSpeaker');
    if (btn) {
        btn.classList.add('playing');
        setTimeout(() => btn.classList.remove('playing'), 1200);
    }
    playAnimalCry(target.id, target.sound);
}
window.playAnimalSound = playAnimalSound;

function answerSound(chosenId, btn, target) {
    if (soundLocked) return;
    soundLocked = true;

    const all = [...document.querySelectorAll('#soundOptions .sound-opt')];
    all.forEach(b => b.disabled = true);

    const correct = chosenId === target.id;
    recordAnswer('animalsound', correct, `Sound: ${target.sound}`);

    if (correct) {
        btn.classList.add('correct');
        soundScore++;
        playSound(880, 'sine', 0.2);
        launchConfetti(10);
        speakText(`Yes! That was the ${target.name}.`);
    } else {
        btn.classList.add('wrong');
        const right = all.find(b => b.textContent.includes(target.name));
        if (right) right.classList.add('correct');
        playSound(200, 'sawtooth', 0.25);
        speakText(`That was the ${target.name}.`);
    }

    const scoreEl = document.getElementById('soundScore');
    if (scoreEl) scoreEl.innerText = soundScore;
    setTimeout(() => { soundIdx++; renderSoundRound(); }, 2000);
}

// ---------- GAME: HABITAT MATCH ----------
let habitatRound = [], habitatDone = 0, habitatPicked = null;

function startHabitatGame() {
    habitatDone = 0;
    habitatPicked = null;
    habitatRound = shuffleArray(ANIMALS).slice(0, 8);

    const usedHabitats = [...new Set(habitatRound.map(a => a.habitat))];
    const pool = document.getElementById('habitatPool');
    const zones = document.getElementById('habitatZones');
    if (!pool || !zones) return;

    const matchEl = document.getElementById('habitatMatched');
    if (matchEl) matchEl.innerText = `0 / ${habitatRound.length}`;

    pool.innerHTML = '';
    shuffleArray(habitatRound).forEach(a => {
        const chip = document.createElement('button');
        chip.className = 'hab-animal';
        chip.type = 'button';
        chip.draggable = true;
        chip.dataset.animal = a.id;
        chip.dataset.habitat = a.habitat;
        chip.innerHTML = `<span class="ha-emoji">${a.emoji}</span><span class="ha-name">${a.name}</span>`;

        chip.addEventListener('dragstart', (e) => {
            habitatPicked = a.id;
            chip.classList.add('dragging');
            if (e.dataTransfer) e.dataTransfer.setData('text/plain', a.id);
        });
        chip.addEventListener('dragend', () => chip.classList.remove('dragging'));
        // tap-to-select for touch screens
        chip.addEventListener('click', () => {
            if (chip.classList.contains('placed')) return;
            playSound(560);
            document.querySelectorAll('.hab-animal.selected').forEach(c => c.classList.remove('selected'));
            habitatPicked = a.id;
            chip.classList.add('selected');
        });
        pool.appendChild(chip);
    });

    zones.innerHTML = '';
    usedHabitats.forEach(hKey => {
        const h = HABITATS[hKey];
        const zone = document.createElement('div');
        zone.className = 'hab-zone';
        zone.dataset.habitat = hKey;
        zone.style.background = h.bg;
        zone.innerHTML = `<span class="hz-icon">${h.icon}</span><span class="hz-name">${h.name}</span>
                          <div class="hz-drop" aria-label="${h.name} drop area"></div>`;

        zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('over'); });
        zone.addEventListener('dragleave', () => zone.classList.remove('over'));
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('over');
            dropAnimal(hKey, zone);
        });
        zone.addEventListener('click', () => dropAnimal(hKey, zone));
        zones.appendChild(zone);
    });
}
window.startHabitatGame = startHabitatGame;

function dropAnimal(habitatKey, zone) {
    if (!habitatPicked) return;
    const a = getAnimal(habitatPicked);
    const chip = document.querySelector(`.hab-animal[data-animal="${habitatPicked}"]`);
    if (!a || !chip || chip.classList.contains('placed')) return;

    const correct = a.habitat === habitatKey;
    recordAnswer('habitat', correct, `${a.name} → ${HABITATS[habitatKey].name}`);

    if (correct) {
        chip.classList.add('placed');
        chip.classList.remove('selected');
        chip.draggable = false;
        const drop = zone.querySelector('.hz-drop');
        if (drop) {
            const tag = document.createElement('span');
            tag.className = 'hz-animal';
            tag.innerText = a.emoji;
            tag.title = a.name;
            drop.appendChild(tag);
        }
        habitatDone++;
        playSound(880, 'sine', 0.2);
        launchConfetti(8);
        speakText(`Yes! The ${a.name} lives in the ${HABITATS[habitatKey].name}.`);

        const matchEl = document.getElementById('habitatMatched');
        if (matchEl) matchEl.innerText = `${habitatDone} / ${habitatRound.length}`;

        if (habitatDone === habitatRound.length) {
            unlockBadge('habitatHero');
            addStars(15);
            launchConfetti(50);
            showToast('All animals are home! 🏞️', '🎉', 4000);
            speakText('Fantastic! Every animal found its home!');
        }
    } else {
        zone.classList.add('shake');
        setTimeout(() => zone.classList.remove('shake'), 500);
        playSound(200, 'sawtooth', 0.25);
        speakText(`The ${a.name} does not live in the ${HABITATS[habitatKey].name}. Try again!`);
    }
    habitatPicked = null;
    document.querySelectorAll('.hab-animal.selected').forEach(c => c.classList.remove('selected'));
}

// ---------- GAME: ANIMAL QUIZ ----------
let aqRounds = [], aqIdx = 0, aqScore = 0, aqLocked = false;

function buildAnimalQuestions() {
    const pool = [];
    shuffleArray(ANIMALS).slice(0, 14).forEach(a => {
        const hab = HABITATS[a.habitat];
        pool.push({
            q: `Where does the ${a.name} live?`, icon: a.emoji,
            correct: hab.name,
            options: shuffleArray([hab.name,
                ...shuffleArray(Object.values(HABITATS).filter(h => h.name !== hab.name)).slice(0, 3).map(h => h.name)])
        });
        pool.push({
            q: `What does a ${a.name} eat?`, icon: a.emoji,
            correct: a.diet,
            options: shuffleArray([...new Set([a.diet, 'Carnivore', 'Herbivore', 'Omnivore'])]).slice(0, 3)
        });
        pool.push({
            q: `What is a baby ${a.name} called?`, icon: a.emoji,
            correct: a.baby,
            options: shuffleArray([a.baby,
                ...shuffleArray([...new Set(ANIMALS.map(x => x.baby))].filter(b => b !== a.baby)).slice(0, 3)])
        });
    });
    return shuffleArray(pool).slice(0, 10);
}

function startAnimalQuiz() {
    aqRounds = buildAnimalQuestions();
    aqIdx = 0; aqScore = 0; aqLocked = false;
    renderAnimalQuestion();
}
window.startAnimalQuiz = startAnimalQuiz;

function renderAnimalQuestion() {
    const box = document.getElementById('aqContainer');
    const scoreEl = document.getElementById('aqScore');
    const progEl = document.getElementById('aqProgress');
    if (!box) return;
    if (scoreEl) scoreEl.innerText = aqScore;

    if (aqIdx >= aqRounds.length) {
        if (progEl) progEl.innerText = 'Finished!';
        box.innerHTML = `
            <div class="quiz-result">
                <div class="quiz-result-icon">${aqScore === aqRounds.length ? '🏆' : '🎉'}</div>
                <h3>You scored ${aqScore} / ${aqRounds.length}!</h3>
                <button class="restart-btn" onclick="startAnimalQuiz()">🔄 Play Again</button>
            </div>`;
        recordRoundScore('animalquiz', aqScore, aqRounds.length);
        addStars(aqScore * 2);
        if (aqScore === aqRounds.length) { unlockBadge('animalExpert'); launchConfetti(50); }
        speakText(`Quiz finished! You scored ${aqScore} out of ${aqRounds.length}.`);
        return;
    }

    const cur = aqRounds[aqIdx];
    if (progEl) progEl.innerText = `${aqIdx + 1} / ${aqRounds.length}`;

    box.innerHTML = `
        <div class="quiz-question">
            <div class="quiz-question-icon">${cur.icon}</div>
            <h3>${cur.q}</h3>
        </div>
        <div class="quiz-options" id="aqOptions"></div>`;

    const optBox = document.getElementById('aqOptions');
    cur.options.forEach(opt => {
        const b = document.createElement('button');
        b.className = 'quiz-option';
        b.innerText = opt;
        b.onclick = () => answerAnimalQuiz(opt, b, cur.correct);
        optBox.appendChild(b);
    });

    aqLocked = false;
    speakText(cur.q);
}

function answerAnimalQuiz(choice, btn, correct) {
    if (aqLocked) return;
    aqLocked = true;

    const all = [...document.querySelectorAll('#aqOptions .quiz-option')];
    all.forEach(b => b.onclick = null);

    const isRight = choice === correct;
    recordAnswer('animalquiz', isRight, aqRounds[aqIdx] ? aqRounds[aqIdx].q : '');

    if (isRight) {
        btn.classList.add('correct');
        aqScore++;
        playSound(880, 'sine', 0.2);
        launchConfetti(8);
    } else {
        btn.classList.add('incorrect');
        const right = all.find(b => b.innerText === correct);
        if (right) right.classList.add('correct');
        playSound(200, 'sawtooth', 0.25);
        speakText(`The answer is ${correct}.`);
    }

    const scoreEl = document.getElementById('aqScore');
    if (scoreEl) scoreEl.innerText = aqScore;
    setTimeout(() => { aqIdx++; renderAnimalQuestion(); }, 1600);
}
window.answerAnimalQuiz = answerAnimalQuiz;


// ============================================================
// EARTH & MOON PHASE SIMULATOR
// ============================================================
const MOON_PHASES = [
    { emoji: '🌑', name: 'New Moon', hint: 'The Moon is between Earth and the Sun, so the bright side faces away from us.', lightX: '92%' },
    { emoji: '🌒', name: 'Waxing Crescent', hint: 'A small bright slice appears. Waxing means the lit part is growing.', lightX: '75%' },
    { emoji: '🌓', name: 'First Quarter', hint: 'We see half of the Moon lit up from Earth.', lightX: '62%' },
    { emoji: '🌔', name: 'Waxing Gibbous', hint: 'More than half is bright, and it is still growing toward full moon.', lightX: '42%' },
    { emoji: '🌕', name: 'Full Moon', hint: 'Earth is between the Sun and Moon, so we see the whole bright face.', lightX: '12%' },
    { emoji: '🌖', name: 'Waning Gibbous', hint: 'The bright part starts shrinking. Waning means getting smaller.', lightX: '28%' },
    { emoji: '🌗', name: 'Last Quarter', hint: 'Again we see half lit, but the opposite side is bright.', lightX: '38%' },
    { emoji: '🌘', name: 'Waning Crescent', hint: 'Only a thin bright slice remains before the next new moon.', lightX: '55%' }
];

let moonDanceBuilt = false;
let moonDanceRunning = true;
let moonPhaseIndex = 0;
let moonDanceTimer = null;

function buildMoonDance() {
    if (moonDanceBuilt) return;
    moonDanceBuilt = true;
    updateMoonPhaseUI();
    startMoonDanceTimer();
}
window.buildMoonDance = buildMoonDance;

function startMoonDanceTimer() {
    if (moonDanceTimer) clearInterval(moonDanceTimer);
    moonDanceTimer = setInterval(() => {
        if (!moonDanceRunning) return;
        moonPhaseIndex = (moonPhaseIndex + 1) % MOON_PHASES.length;
        updateMoonPhaseUI();
    }, 2300);
}

function updateMoonPhaseUI() {
    const phase = MOON_PHASES[moonPhaseIndex];
    const emoji = document.getElementById('moonPhaseEmoji');
    const name = document.getElementById('moonPhaseName');
    const hint = document.getElementById('moonPhaseHint');
    const moon = document.getElementById('moonDemoBody');
    const spinner = document.getElementById('moonDemoSpinner');
    if (emoji) emoji.innerText = phase.emoji;
    if (name) name.innerText = phase.name;
    if (hint) hint.innerText = phase.hint;
    if (moon) moon.style.setProperty('--phase-light-x', phase.lightX);

    document.querySelectorAll('.phase-label').forEach(el => el.classList.remove('active'));
    const activeClasses = ['phase-new','phase-waxcres','phase-first','phase-waxgib','phase-full','phase-wangib','phase-last','phase-wancres'];
    const active = document.querySelector('.' + activeClasses[moonPhaseIndex]);
    if (active) active.classList.add('active');

    // When paused or stepping, place the moon exactly beside the matching phase label.
    if (spinner && !moonDanceRunning) {
        spinner.style.animation = 'none';
        spinner.style.transform = `rotate(${moonPhaseIndex * 45}deg)`;
    }
}

function toggleMoonDance() {
    moonDanceRunning = !moonDanceRunning;
    const panel = document.getElementById('moonDancePanel');
    const btn = document.getElementById('moonOrbitToggleBtn');
    const spinner = document.getElementById('moonDemoSpinner');
    if (panel) panel.classList.toggle('paused', !moonDanceRunning);
    if (btn) {
        btn.innerHTML = moonDanceRunning ? '⏸️ Pause Moon' : '▶️ Start Moon';
        btn.classList.toggle('active', moonDanceRunning);
    }
    if (spinner && moonDanceRunning) {
        spinner.style.animation = '';
        spinner.style.transform = '';
    }
    playSound(moonDanceRunning ? 620 : 320);
    updateMoonPhaseUI();
}
window.toggleMoonDance = toggleMoonDance;

function stepMoonPhase() {
    if (moonDanceRunning) toggleMoonDance();
    moonPhaseIndex = (moonPhaseIndex + 1) % MOON_PHASES.length;
    updateMoonPhaseUI();
    playSound(560, 'triangle', 0.18);
}
window.stepMoonPhase = stepMoonPhase;

function speakMoonPhase() {
    const phase = MOON_PHASES[moonPhaseIndex];
    speakText(`${phase.name}. ${phase.hint} The Moon does not make its own light. It reflects sunlight as it orbits around Earth.`);
}
window.speakMoonPhase = speakMoonPhase;


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
        parent: 'earth', moonOrbit: 62, moonSpeed: 7,
        colors: ['#f8f7f2', '#c9c6bc', '#77736b'],
        size: 24, orbit: 0, speed: 0, tagline: 'Our closest neighbour in space!',
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
    listenToHomework();
    listenToSafeZone();
    watchAdminAuth();      // signs out any old remembered admin token; admin must type password each visit
    checkLoginSession();
    renderStoryPage();
    // Pac-Man now starts itself (see showGame) once its tab is opened,
    // instead of running in the background from page load.
});

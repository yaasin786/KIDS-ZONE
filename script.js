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

function speakText(customText = null, lang = 'en-US') {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const text = customText || (stories[currentStoryKey] ? stories[currentStoryKey].pages[currentStoryPage].text : '');
        if (!text) return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.pitch = 1.2;
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

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
        console.log(`🎉 Launched ${count} confetti particles!`);
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
    const avatarElem = document.getElementById('activeAvatar');
    const nameElem = document.getElementById('activeName');

    if (currentRole === 'admin') {
        if (addKidBtn) addKidBtn.style.display = 'inline-block';
        if (manageProfilesBtn) manageProfilesBtn.style.display = 'inline-block';
        if (avatarElem) avatarElem.innerText = '🛠️';
        if (nameElem) nameElem.innerText = 'Admin (Yaasin)';
    } else {
        if (addKidBtn) addKidBtn.style.display = 'none';
        if (manageProfilesBtn) manageProfilesBtn.style.display = 'none';
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
    superstar:    { icon: '🌟', name: 'Superstar Explorer',  desc: 'Collected 100 stars!' }
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
            userStars = 0;
            level = 1;
            unlockedBadges = new Set();
            factsViewed = new Set();
            finishedStories = new Set();
            completedExperiments = new Set();
            updateStatsDisplay();
            return;
        }
        
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
    playSound(440);

    if (tabId !== 'games') {
        pausePacmanGame();
    }

    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add('active');
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');

    if (tabId === 'games') {
        initDuoGame();
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

    if (gameId !== 'pacman-game') {
        pausePacmanGame();
    }

    // Modern Hub Views & Legacy Views Toggle
    const duo = document.getElementById('duo-game');
    const math = document.getElementById('math-game');
    const quiz = document.getElementById('quiz-game');
    const pacman = document.getElementById('pacman-game');
    const memory = document.getElementById('memory-match');
    const trivia = document.getElementById('trivia-game');
    const mauritius = document.getElementById('mauritius-game');

    if (duo) duo.style.display = (gameId === 'duo-game') ? 'block' : 'none';
    if (math) math.style.display = (gameId === 'math-game') ? 'block' : 'none';
    if (quiz) quiz.style.display = (gameId === 'quiz-game') ? 'block' : 'none';
    if (pacman) pacman.style.display = (gameId === 'pacman-game') ? 'block' : 'none';
    if (memory) memory.style.display = (gameId === 'memory-match') ? 'block' : 'none';
    if (trivia) trivia.style.display = (gameId === 'trivia-game') ? 'block' : 'none';
    if (mauritius) mauritius.style.display = (gameId === 'mauritius-game') ? 'block' : 'none';

    // Game initializations
    if (gameId === 'duo-game') initDuoGame();
    if (gameId === 'math-game') initMathGame();
    if (gameId === 'quiz-game') initQuiz();
    if (gameId === 'memory-match') initMemoryGame();
    if (gameId === 'pacman-game' && !pacInterval) initPacmanGame();
    if (gameId === 'trivia-game') initTriviaGame();
    if (gameId === 'mauritius-game') initMauritiusGame();
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
            { page: 3, img: '📜', text: "The elder sea turtle, Barnaby, swam up to Mira and unrolled an ancient kelp parchment map. 'The heart of our reef can only be restored by the legendary Pearl of Lumina,' he explained, 'hidden deep inside the Sunken Sea Cave across the trench.'" },
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

function selectStory(key, evt) {
    playSound(580);
    currentStoryKey = key;
    currentStoryPage = 0;
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
}

function changePage(delta) {
    playSound(500);
    currentStoryPage += delta;
    
    if (currentStoryKey === 'snowwhite') {
        if (currentStoryPage === 5 && delta === 1) currentStoryPage = 6;
        if (currentStoryPage === 12 && delta === 1) currentStoryPage = 13;
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

    updateDuoStats();

    setTimeout(() => {
        duoIndex++;
        renderDuoQuestion();
    }, 1000);
}
window.answerDuo = answerDuo;

// ============================================================
// GAME 1: MATH WIZARD (500 Dynamic Questions Pool)
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

    setTimeout(() => {
        mathIndex++;
        renderMathQuestion();
    }, 900);
}
window.answerMath = answerMath;

// ============================================================
// GAME 2: TRIVIA QUIZ ENGINE & GENERAL TRIVIA
// ============================================================
const quizTopics = [
    { cat: "Space", icon: "🪐", items: [
        { q: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], a: 0 },
        { q: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Saturn", "Neptune"], a: 1 },
        { q: "What shines at the center of our Solar System?", options: ["The Moon", "The Sun", "Mars", "Polaris"], a: 1 },
        { q: "How many planets are in our Solar System?", options: ["7", "8", "9", "10"], a: 1 },
        { q: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], a: 0 }
    ]},
    { cat: "Animals", icon: "🦁", items: [
        { q: "What is the fastest land animal in the world?", options: ["Cheetah", "Lion", "Horse", "Leopard"], a: 0 },
        { q: "Which animal is the largest living mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"], a: 1 },
        { q: "How many legs does a spider have?", options: ["6", "8", "10", "12"], a: 1 },
        { q: "What do giant pandas eat almost exclusively?", options: ["Bamboo", "Grass", "Eucalyptus", "Fish"], a: 0 },
        { q: "Which bird is famous for being unable to fly?", options: ["Eagle", "Penguin", "Parrot", "Robin"], a: 1 }
    ]}
];

const triviaQuestions = [
    { q: "What color do you get when you mix Red and Yellow?", options: ["Green", "Orange", "Purple", "Brown"], a: 1, icon: "🎨" },
    { q: "How many legs does a spider have?", options: ["6", "8", "10", "4"], a: 1, icon: "🕷️" },
    { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], a: 1, icon: "🪐" },
    { q: "What is the largest land animal?", options: ["Giraffe", "Blue Whale", "Elephant", "Hippo"], a: 2, icon: "🐘" },
    { q: "Which animal produces milk and lays eggs?", options: ["Platypus", "Kangaroo", "Ostrich", "Bat"], a: 0, icon: "🦫" }
];

let triviaIndex = 0, triviaScore = 0;

function initTriviaGame() {
    triviaIndex = 0;
    triviaScore = 0;
    renderTriviaQuestion();
}
window.initTriviaGame = initTriviaGame;

function renderTriviaQuestion() {
    const container = document.getElementById('triviaContainer');
    if (!container) return;
    const total = triviaQuestions.length;

    const progElem = document.getElementById('triviaProgress');
    const scoreElem = document.getElementById('triviaScoreDisplay');

    if (triviaIndex >= total) {
        if (progElem) progElem.innerText = `${total} / ${total}`;
        if (scoreElem) scoreElem.innerText = triviaScore;

        const earnedStars = triviaScore * 5;
        addStars(earnedStars);
        launchConfetti(30);

        container.innerHTML = `
            <div class="quiz-result">
                <div class="quiz-result-icon">🏆</div>
                <h3>Trivia Completed!</h3>
                <p>You scored ${triviaScore} / ${total} and won ${earnedStars} stars ⭐!</p>
                <button class="restart-btn" onclick="initTriviaGame()">🔄 Play Again</button>
            </div>
        `;
        playChime([523, 659, 784, 1046]);
        return;
    }

    if (progElem) progElem.innerText = `${triviaIndex + 1} / ${total}`;
    if (scoreElem) scoreElem.innerText = triviaScore;

    const q = triviaQuestions[triviaIndex];
    container.innerHTML = `
        <div class="quiz-question">
            <div class="quiz-question-icon">${q.icon}</div>
            <h3>${q.q}</h3>
            <button class="book-btn audio-btn" style="margin-bottom: 12px;" onclick="speakText('${q.q}')">🔊 Read Question</button>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `<button class="quiz-option" onclick="answerTrivia(${i})">${opt}</button>`).join('')}
            </div>
        </div>
    `;
}

function answerTrivia(choice) {
    const q = triviaQuestions[triviaIndex];
    const buttons = document.querySelectorAll('#triviaContainer .quiz-option');
    buttons.forEach(btn => btn.onclick = null);

    if (buttons[q.a]) buttons[q.a].classList.add('correct');
    if (choice === q.a) {
        playSound(800, 'sine', 0.2);
        triviaScore++;
    } else {
        playSound(200, 'sawtooth', 0.3);
        if (buttons[choice]) buttons[choice].classList.add('incorrect');
    }

    setTimeout(() => {
        triviaIndex++;
        renderTriviaQuestion();
    }, 1000);
}
window.answerTrivia = answerTrivia;

function generate500TriviaQuestions() {
    const list = [];
    quizTopics.forEach(topic => {
        topic.items.forEach(item => {
            list.push({ q: item.q, options: item.options, answer: item.a, icon: topic.icon });
        });
    });

    const dynamicFacts = [
        { q: "What is the capital city of France?", correct: "Paris", wrong: ["London", "Berlin", "Rome"], icon: "🏰" },
        { q: "Which color do you get when you mix Red and Yellow?", correct: "Orange", wrong: ["Purple", "Green", "Brown"], icon: "🎨" },
        { q: "How many days are in a leap year?", correct: "366", wrong: ["365", "360", "300"], icon: "📅" },
        { q: "What is the main ingredient in bread?", correct: "Flour", wrong: ["Rice", "Sugar", "Corn"], icon: "🍞" },
        { q: "Which instrument has 88 black and white keys?", correct: "Piano", wrong: ["Guitar", "Flute", "Drum"], icon: "🎹" }
    ];

    let i = list.length;
    while (list.length < 500) {
        const fact = dynamicFacts[i % dynamicFacts.length];
        const allOpts = shuffleArray([fact.correct, ...fact.wrong]);
        list.push({
            q: `Question #${i + 1}: ${fact.q}`,
            options: allOpts,
            answer: allOpts.indexOf(fact.correct),
            icon: fact.icon
        });
        i++;
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
    filteredMruQuestions = mauritiusQuestions.filter(q => q.level === currentMruLevel);
    mruIndex = 0;
    mruScore = 0;
    renderMauritiusQuestion();
}
window.initMauritiusGame = initMauritiusGame;

function renderMauritiusQuestion() {
    const container = document.getElementById('mruContainer');
    if (!container) return;
    const total = filteredMruQuestions.length;

    const progElem = document.getElementById('mruProgress');
    const scoreElem = document.getElementById('mruScoreDisplay');

    if (mruIndex >= total) {
        if (progElem) progElem.innerText = `${total} / ${total}`;
        if (scoreElem) scoreElem.innerText = mruScore;

        const percentage = Math.round((mruScore / total) * 100);
        const passed = percentage >= 80;
        const earnedStars = mruScore * 2;
        addStars(earnedStars);

        if (passed && currentMruLevel === unlockedMruLevel && unlockedMruLevel < 3) {
            unlockedMruLevel++;
        }

        if (passed) launchConfetti(30);

        container.innerHTML = `
            <div class="quiz-result">
                <div class="quiz-result-icon">${passed ? '🏆' : '🔒'}</div>
                <h3>Level ${currentMruLevel} ${passed ? 'Completed!' : 'Failed!'}</h3>
                <p>Score: ${mruScore} / ${total} (${percentage}%)</p>
                <p>${passed ? `Great job! You earned ${earnedStars} stars ⭐!` : 'You need at least 80% (24/30) to unlock the next level.'}</p>
                <div style="margin-top: 15px; display: flex; gap: 10px; justify-content: center;">
                    <button class="restart-btn" onclick="initMauritiusGame()">🔄 Try Again</button>
                    ${unlockedMruLevel > currentMruLevel ? `<button class="restart-btn" style="background: #22c55e;" onclick="setMruLevel(${currentMruLevel + 1})">🚀 Next Level</button>` : ''}
                </div>
            </div>
        `;
        playChime(passed ? [523, 659, 784, 1046] : [300, 250, 200]);
        return;
    }

    if (progElem) progElem.innerText = `${mruIndex + 1} / ${total}`;
    if (scoreElem) scoreElem.innerText = mruScore;

    const q = filteredMruQuestions[mruIndex];
    container.innerHTML = `
        <div style="margin-bottom: 12px; display: flex; gap: 8px; justify-content: center;">
            <button id="mruLvl1Btn" class="filter-btn lvl-btn ${currentMruLevel === 1 ? 'active' : ''}" onclick="setMruLevel(1)">Level 1</button>
            <button id="mruLvl2Btn" class="filter-btn lvl-btn ${currentMruLevel === 2 ? 'active' : ''} ${unlockedMruLevel < 2 ? 'locked' : ''}" onclick="setMruLevel(2)">
                ${unlockedMruLevel < 2 ? '🔒 ' : ''}Level 2
            </button>
            <button id="mruLvl3Btn" class="filter-btn lvl-btn ${currentMruLevel === 3 ? 'active' : ''} ${unlockedMruLevel < 3 ? 'locked' : ''}" onclick="setMruLevel(3)">
                ${unlockedMruLevel < 3 ? '🔒 ' : ''}Level 3
            </button>
        </div>
        <div class="quiz-question">
            <div class="quiz-question-icon">${q.icon}</div>
            <h3>${q.q}</h3>
            <button class="book-btn audio-btn" style="margin-bottom: 12px;" onclick="speakText('${q.q}')">🔊 Read Question</button>
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

    setTimeout(() => {
        mruIndex++;
        renderMauritiusQuestion();
    }, 1000);
}
window.answerMauritius = answerMauritius;

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ============================================================
// GAME 3: PAC-MAN ENGINE
// ============================================================
let canvas, ctx, pacman, ghosts, map, pacScore, pacLives, pacInterval, mouthAngle = 0.2, mouthSpeed = 0.02;
let frightenedTicks = 0;
let isPacmanPaused = false;
const tileSize = 40;

const initialMap = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,3,0,1],
    [1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,2,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,0,1],
    [1,0,1,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,1,1,0,1,0,1],
    [1,3,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1]
];

function initPacmanGame() {
    canvas = document.getElementById('pacmanCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    map = JSON.parse(JSON.stringify(initialMap));
    pacScore = 0;
    pacLives = 3;
    frightenedTicks = 0;
    isPacmanPaused = false;
    
    const pauseBtn = document.getElementById('pausePacmanBtn');
    if (pauseBtn) pauseBtn.innerText = '⏸️ Pause';

    const scoreElem = document.getElementById('score');
    if (scoreElem) scoreElem.innerText = pacScore;
    updateLivesDisplay();

    pacman = { x: 5, y: 5, dirX: 0, dirY: 0, nextDirX: 0, nextDirY: 0 };
    ghosts = [
        { x: 1, y: 1, startX: 1, startY: 1, color: 'red', dirX: 1, dirY: 0, frightened: false },
        { x: 9, y: 9, startX: 9, startY: 9, color: 'pink', dirX: -1, dirY: 0, frightened: false }
    ];

    clearInterval(pacInterval);
    pacInterval = setInterval(updatePacmanGame, 200);

    window.removeEventListener('keydown', handlePacmanKeys);
    window.addEventListener('keydown', handlePacmanKeys);
}
window.initPacmanGame = initPacmanGame;

function pausePacmanGame() {
    if (pacInterval) {
        clearInterval(pacInterval);
        pacInterval = null;
        isPacmanPaused = true;
        const pauseBtn = document.getElementById('pausePacmanBtn');
        if (pauseBtn) pauseBtn.innerText = '▶️ Resume';
    }
}

function resumePacmanGame() {
    if (isPacmanPaused) {
        isPacmanPaused = false;
        clearInterval(pacInterval);
        pacInterval = setInterval(updatePacmanGame, 200);
        const pauseBtn = document.getElementById('pausePacmanBtn');
        if (pauseBtn) pauseBtn.innerText = '⏸️ Pause';
    }
}

function togglePausePacman() {
    playSound(400);
    if (isPacmanPaused) resumePacmanGame(); else pausePacmanGame();
}
window.togglePausePacman = togglePausePacman;

function handlePacmanKeys(e) {
    if (e.key === 'ArrowUp') setPacmanDir(0, -1);
    if (e.key === 'ArrowDown') setPacmanDir(0, 1);
    if (e.key === 'ArrowLeft') setPacmanDir(-1, 0);
    if (e.key === 'ArrowRight') setPacmanDir(1, 0);
}

function setPacmanDir(dx, dy) {
    if (isPacmanPaused) resumePacmanGame();
    pacman.nextDirX = dx;
    pacman.nextDirY = dy;
}
window.setPacmanDir = setPacmanDir;

function updatePacmanGame() {
    if (isPacmanPaused) return;

    if (map[pacman.y + pacman.nextDirY][pacman.x + pacman.nextDirX] !== 1) {
        pacman.dirX = pacman.nextDirX;
        pacman.dirY = pacman.nextDirY;
    }

    if (map[pacman.y + pacman.dirY][pacman.x + pacman.dirX] !== 1) {
        pacman.x += pacman.dirX;
        pacman.y += pacman.dirY;
    }

    if (map[pacman.y][pacman.x] === 0) {
        map[pacman.y][pacman.x] = 2;
        pacScore += 10;
        playSound(600, 'sine', 0.05);
        const scoreElem = document.getElementById('score');
        if (scoreElem) scoreElem.innerText = pacScore;
        if (pacScore >= 100) unlockBadge('gamer');
    }

    if (map[pacman.y][pacman.x] === 3) {
        map[pacman.y][pacman.x] = 2;
        pacScore += 50;
        frightenedTicks = 25;
        ghosts.forEach(g => g.frightened = true);
        playChime([400, 300, 200], 'square');
        const scoreElem = document.getElementById('score');
        if (scoreElem) scoreElem.innerText = pacScore;
        if (pacScore >= 100) unlockBadge('gamer');
    }

    if (frightenedTicks > 0) {
        frightenedTicks--;
        if (frightenedTicks === 0) ghosts.forEach(g => g.frightened = false);
    }

    ghosts.forEach(ghost => {
        const possibleDirs = [];
        [[0,-1],[0,1],[-1,0],[1,0]].forEach(([dx, dy]) => {
            if (map[ghost.y + dy][ghost.x + dx] !== 1) possibleDirs.push([dx, dy]);
        });
        if (possibleDirs.length > 0) {
            const [dx, dy] = possibleDirs[Math.floor(Math.random() * possibleDirs.length)];
            ghost.x += dx;
            ghost.y += dy;
        }

        if (ghost.x === pacman.x && ghost.y === pacman.y) {
            if (ghost.frightened) {
                playChime([500, 700, 900]);
                pacScore += 100;
                const scoreElem = document.getElementById('score');
                if (scoreElem) scoreElem.innerText = pacScore;
                ghost.x = ghost.startX;
                ghost.y = ghost.startY;
                ghost.frightened = false;
            } else {
                playSound(150, 'sawtooth', 0.3);
                pacLives--;
                updateLivesDisplay();
                pacman.x = 5; pacman.y = 5;
                if (pacLives === 0) {
                    showToast(`Game Over! Final score: ${pacScore}`, '💥', 3500);
                    initPacmanGame();
                }
            }
        }
    });

    drawPacmanBoard();
}

function drawPacmanBoard() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let r = 0; r < map.length; r++) {
        for (let c = 0; c < map[r].length; c++) {
            if (map[r][c] === 1) {
                ctx.fillStyle = '#1e3a8a';
                ctx.fillRect(c * tileSize, r * tileSize, tileSize - 2, tileSize - 2);
            } else if (map[r][c] === 0) {
                ctx.fillStyle = '#FFE74C';
                ctx.beginPath();
                ctx.arc(c * tileSize + tileSize / 2, r * tileSize + tileSize / 2, 4, 0, Math.PI * 2);
                ctx.fill();
            } else if (map[r][c] === 3) {
                const pulse = 6 + Math.sin(Date.now() / 150) * 2;
                ctx.fillStyle = '#FFD700';
                ctx.shadowColor = '#FFD700';
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.arc(c * tileSize + tileSize / 2, r * tileSize + tileSize / 2, pulse, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }
    }

    mouthAngle += mouthSpeed;
    if (mouthAngle > 0.4 || mouthAngle < 0.05) mouthSpeed = -mouthSpeed;

    ctx.fillStyle = '#FFE74C';
    ctx.beginPath();
    let rotation = 0;
    if (pacman.dirX === 1) rotation = 0;
    if (pacman.dirX === -1) rotation = Math.PI;
    if (pacman.dirY === -1) rotation = 1.5 * Math.PI;
    if (pacman.dirY === 1) rotation = 0.5 * Math.PI;

    ctx.arc(
        pacman.x * tileSize + tileSize / 2,
        pacman.y * tileSize + tileSize / 2,
        15,
        rotation + mouthAngle,
        rotation + Math.PI * 2 - mouthAngle
    );
    ctx.lineTo(pacman.x * tileSize + tileSize / 2, pacman.y * tileSize + tileSize / 2);
    ctx.fill();

    ghosts.forEach(ghost => {
        ctx.font = '24px serif';
        ctx.fillText(ghost.frightened ? '😨' : '👻', ghost.x * tileSize + 8, ghost.y * tileSize + 28);
    });
}

function updateLivesDisplay() {
    const livesElem = document.getElementById('lives');
    if (livesElem) livesElem.innerText = '❤️'.repeat(pacLives);
}

function resetPacmanGame() {
    playSound(400);
    initPacmanGame();
}
window.resetPacmanGame = resetPacmanGame;

// ============================================================
// GAME 4: MEMORY MATCH
// ============================================================
const emojis = ['🐶', '🐱', '🐸', '🦁', '🐵', '🦄'];
let memoryCards = [], flippedCards = [], moves = 0, matches = 0;

function initMemoryGame() {
    const grid = document.getElementById('memoryGrid');
    if (!grid) return;
    grid.innerHTML = '';
    moves = 0; matches = 0;
    flippedCards = [];

    const movesElem = document.getElementById('memoryMoves');
    const matchesElem = document.getElementById('memoryMatches');
    
    if (movesElem) movesElem.innerText = moves;
    if (matchesElem) matchesElem.innerText = `${matches} / ${emojis.length}`;

    memoryCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

    memoryCards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        card.innerText = emoji;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.onclick = () => flipMemoryCard(card);
        card.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') flipMemoryCard(card); };
        grid.appendChild(card);
    });
}
window.initMemoryGame = initMemoryGame;

function flipMemoryCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
        playSound(500);
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            moves++;
            const movesElem = document.getElementById('memoryMoves');
            if (movesElem) movesElem.innerText = moves;
            checkMemoryMatch();
        }
    }
}

function checkMemoryMatch() {
    const [c1, c2] = flippedCards;
    if (c1.dataset.emoji === c2.dataset.emoji) {
        playSound(800, 'sine', 0.3);
        c1.classList.add('matched');
        c2.classList.add('matched');
        matches++;
        
        const matchesElem = document.getElementById('memoryMatches');
        if (matchesElem) matchesElem.innerText = `${matches} / ${emojis.length}`;
        
        flippedCards = [];
        if (matches === emojis.length) {
            setTimeout(() => {
                playChime([700, 900, 1100], 'triangle');
                launchConfetti(35);
                addStars(15);
                unlockBadge('memoryMaster');
                showToast(`All matched in ${moves} moves!`, '🧩', 3500);
            }, 300);
        }
    } else {
        setTimeout(() => {
            playSound(250);
            c1.classList.remove('flipped');
            c2.classList.remove('flipped');
            flippedCards = [];
        }, 800);
    }
}

// ============================================================
// SCIENCE LAB
// ============================================================
function toggleStep(el) {
    playSound(400);
    el.classList.toggle('completed');
    checkExperimentComplete(el.closest('.experiment-card'));
}
window.toggleStep = toggleStep;

function checkExperimentComplete(card) {
    if (!card) return;
    
    const totalSteps = card.querySelectorAll('.steps-interactive li').length;
    const done = card.querySelectorAll('.steps-interactive li.completed').length;
    
    if (totalSteps > 0 && totalSteps === done) {
        const titleElem = card.querySelector('h3');
        const key = titleElem ? titleElem.innerText : 'Experiment';
        
        if (!completedExperiments.has(key)) {
            completedExperiments.add(key);
            addStars(10);
            unlockBadge('scientist');
            launchConfetti(30);
            showToast(`Experiment complete: ${key}!`, '🔬', 3500);
            saveProgress();
        }
    }
}

// Global expose functions for explicit window calls
window.showGame = showGame;
window.initTriviaGame = initTriviaGame;

// ============================================================
// INITIALIZATION ON DOM READY
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
    listenToKidProfiles();
    checkLoginSession();
    renderStoryPage();
    initTriviaGame();
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) pausePacmanGame();
});

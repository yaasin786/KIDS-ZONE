// ============================================================
// SOUND EFFECTS ENGINE
// ============================================================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(freq, type = 'sine', duration = 0.1) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function playChime(notes, type = 'triangle') {
    notes.forEach((freq, i) => {
        setTimeout(() => playSound(freq, type, 0.25), i * 120);
    });
}

// ============================================================
// STRICT LOGIN & AUTHENTICATION SYSTEM
// ============================================================
const ALLOWED_EMAIL = "yaasin@gmail.com";
const ALLOWED_PASS = "yaasin786";

function checkLoginSession() {
    // Requires login on every new session/visit
    const isLoggedIn = sessionStorage.getItem('kidzone_logged_in');
    const loginOverlay = document.getElementById('loginScreen');
    
    if (isLoggedIn === 'true') {
        loginOverlay.classList.add('hidden');
        loadProgress(); // Restore badges, stars, and levels upon valid session
    } else {
        loginOverlay.classList.remove('hidden');
    }
}

function handleKidLogin(event) {
    event.preventDefault();
    const emailInput = document.getElementById('kidEmail').value.trim().toLowerCase();
    const passwordInput = document.getElementById('kidPassword').value.trim();
    const errorMsg = document.getElementById('loginErrorMsg');

    // Strict credential check
    if (emailInput === ALLOWED_EMAIL && passwordInput === ALLOWED_PASS) {
        sessionStorage.setItem('kidzone_logged_in', 'true');
        localStorage.setItem('kidzone_user_email', emailInput);

        errorMsg.style.display = "none";
        document.getElementById('loginScreen').classList.add('hidden');
        
        loadProgress(); // Load saved progress for this specific email
        
        playChime([523, 659, 784, 1046]);
        launchConfetti(40);
        showToast(`Welcome back, Explorer! 🚀`, '✨', 3500);
    } else {
        playSound(150, 'sawtooth', 0.3);
        errorMsg.innerText = "❌ Access Denied! Invalid email or password.";
        errorMsg.style.display = "block";
    }
}

function handleKidLogout() {
    playSound(300);
    sessionStorage.removeItem('kidzone_logged_in');
    document.getElementById('kidPassword').value = '';
    document.getElementById('loginScreen').classList.remove('hidden');
    showToast('Logged out! Access locked. 👋', '🔒', 3000);
}

// ============================================================
// REWARDS & SAVE SYSTEM
// ============================================================
let stars = 0;
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
    superstar:    { icon: '🌟', name: 'Superstar Explorer',  desc: 'Collected 100 stars!' }
};

function saveProgress() {
    try {
        const userEmail = localStorage.getItem('kidzone_user_email') || 'default_explorer';
        const data = {
            stars,
            level,
            badges: [...unlockedBadges],
            factsViewed: [...factsViewed],
            finishedStories: [...finishedStories],
            completedExperiments: [...completedExperiments]
        };
        localStorage.setItem(`kidzone_progress_${userEmail}`, JSON.stringify(data));
    } catch (e) {
        console.error("Save error:", e);
    }
}

function loadProgress() {
    try {
        const userEmail = localStorage.getItem('kidzone_user_email') || 'default_explorer';
        const raw = localStorage.getItem(`kidzone_progress_${userEmail}`);
        if (!raw) {
            updateStatsDisplay();
            return;
        }
        const d = JSON.parse(raw);
        stars = d.stars || 0;
        level = d.level || 1;
        unlockedBadges = new Set(d.badges || []);
        factsViewed = new Set(d.factsViewed || []);
        finishedStories = new Set(d.finishedStories || []);
        completedExperiments = new Set(d.completedExperiments || []);

        updateStatsDisplay();
    } catch (e) {
        console.error("Load error:", e);
    }
}

function updateStatsDisplay() {
    document.getElementById('starCount').innerText = stars;
    document.getElementById('levelCount').innerText = level;
    document.getElementById('badgeCount').innerText = unlockedBadges.size;

    const starsIntoLevel = stars % 50;
    document.getElementById('xpBarFill').style.width = `${(starsIntoLevel / 50) * 100}%`;
}

function addStars(amount) {
    stars += amount;
    checkLevelUp();
    if (stars >= 100) unlockBadge('superstar');
    updateStatsDisplay();
    saveProgress();
}

function checkLevelUp() {
    const newLevel = Math.floor(stars / 50) + 1;
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

// --- Toasts & Confetti ---
function showToast(message, icon = '🎉', duration = 3000) {
    const container = document.getElementById('toastContainer');
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
function launchConfetti(count = 30) {
    const container = document.getElementById('confettiContainer');
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

function renderBadgesGrid() {
    const grid = document.getElementById('badgesGrid');
    grid.innerHTML = '';
    Object.keys(BADGES).forEach(id => {
        const b = BADGES[id];
        const unlocked = unlockedBadges.has(id);
        const slot = document.createElement('div');
        slot.className = `badge-slot ${unlocked ? 'unlocked' : 'locked'}`;
        slot.innerHTML = `
            <div class="badge-icon">${unlocked ? b.icon : '❔'}</div>
            <div class="badge-name">${unlocked ? b.name : '???'}</div>
            <div class="badge-desc">${unlocked ? b.desc : 'Keep exploring to unlock!'}</div>
        `;
        grid.appendChild(slot);
    });
}

function openBadgesModal() {
    playSound(600);
    renderBadgesGrid();
    document.getElementById('badgesModal').style.display = 'flex';
}
function closeBadgesModal() {
    playSound(300);
    document.getElementById('badgesModal').style.display = 'none';
}
function closeBadgesModalOnBg(e) {
    if (e.target.id === 'badgesModal') closeBadgesModal();
}

// --- Mascot Buddy ---
const MASCOT_TIPS = [
    "Did you know? Try the Surprise Me button for a random fact! 🎲",
    "Try out the Math Wizard game to practice 500 different math problems! 🔢",
    "Reading a whole storybook earns you a special badge! 📖",
    "Finish a science experiment to become a Junior Scientist! 🔬",
    "Test your skills with the 500-question Trivia Quiz! 🧠",
    "Collect 100 stars to become a Superstar Explorer! 🌟"
];
function mascotSpeak() {
    const bubble = document.getElementById('mascotBubble');
    bubble.innerText = MASCOT_TIPS[Math.floor(Math.random() * MASCOT_TIPS.length)];
    bubble.classList.add('show');
    playSound(700, 'sine', 0.15);
    clearTimeout(window._mascotTimer);
    window._mascotTimer = setTimeout(() => bubble.classList.remove('show'), 4000);
}

// ============================================================
// TAB SWITCHING
// ============================================================
function switchTab(tabId, evt) {
    playSound(440);

    if (tabId !== 'games') {
        pausePacmanGame();
    }

    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    if (evt) evt.currentTarget.classList.add('active');

    if (tabId === 'games') {
        initMathGame();
    }
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) pausePacmanGame();
});

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
        document.getElementById('encyModal').style.display = 'flex';

        if (!factsViewed.has(id)) {
            factsViewed.add(id);
            addStars(5);
            if (factsViewed.size === 1) unlockBadge('factFinder');
            if (factsViewed.size === Object.keys(encycloData).length) unlockBadge('factMaster');
            saveProgress();
        }
    }
}

function closeModal() {
    playSound(300);
    document.getElementById('encyModal').style.display = 'none';
}

function closeModalOnBg(e) {
    if (e.target.id === 'encyModal') closeModal();
}

function filterEncyclopedia() {
    const query = document.getElementById('encySearch').value.toLowerCase();
    const cards = document.querySelectorAll('#encyGrid .card');
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
}

function filterCategory(cat, evt) {
    playSound(520);
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (evt) evt.currentTarget.classList.add('active');

    const cards = document.querySelectorAll('#encyGrid .card');
    cards.forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.category === cat) ? 'block' : 'none';
    });
}

function surpriseMe() {
    playSound(660, 'triangle', 0.2);
    const ids = Object.keys(encycloData);
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn').classList.add('active');
    document.querySelectorAll('#encyGrid .card').forEach(card => card.style.display = 'block');
    openModal(randomId);
}

// ============================================================
// STORYBOOKS
// ============================================================
const stories = {
    snowwhite: [
        { page: 1, img: '👑', text: "Once upon a time, in a kingdom far away, lived a sweet princess named Snow White. Her skin was as white as snow, and her hair as dark as night." },
        { page: 2, img: '🪞', text: "The jealous Queen looked into her Magic Mirror and asked, 'Who is the fairest of them all?' The mirror answered: 'Snow White!' Furious, the Queen sent Snow White deep into the enchanted forest." },
        { page: 3, img: '🌲', text: "Snow White ran into the mysterious forest. She came to a fork in the path. Which path should she take?",
            choices: [
                { text: "🏡 Take Cozy Cottage Path", nextPage: 3 },
                { text: "🌲 Enter Whispering Woods", nextPage: 4 }
            ]
        },
        { page: 4, img: '🏡', text: "Snow White found a cozy tiny cottage! Inside were 7 small beds. The Seven Dwarfs welcomed her warmly and offered her a safe place to stay." },
        { page: 4, img: '🦊', text: "Snow White entered the Whispering Woods. Friendly woodland creatures guided her through the trees and led her safely to a warm cottage nearby!" },
        { page: 5, img: '🍎', text: "One afternoon, an old woman disguised in a cloak knocked on the cottage door, offering Snow White a shiny, red apple. What should she do?",
            choices: [
                { text: "❌ Politely Refuse the Apple", nextPage: 5 },
                { text: "🍎 Take a Bite of the Apple", nextPage: 6 }
            ]
        },
        { page: 6, img: '🛡️', text: "Snow White remembered the dwarfs' advice and gently refused! The disguised Wicked Queen gasped in defeat and ran away into the forest forever." },
        { page: 6, img: '💤', text: "Snow White took a bite and fell into a deep, magical sleep. Luckily, a handsome Prince arrived with a magical cure and broke the spell with love!" },
        { page: 7, img: '🏰', text: "Snow White returned to the kingdom alongside her friends and lived happily ever after! The end!" }
    ],
    pip: [
        { page: 1, img: '🛸', text: "Once upon a time, in a small launchpad near the sparkling Milky Way, lived Pip—a tiny rocket with big bright dreams of visiting the Golden Nebula." },
        { page: 2, img: '🌟', text: "Pip zoomed past glowing asteroids and playful space butterflies. 'Higher and higher!' Pip cheered, blasting colorful rocket bubbles into the dark sky." },
        { page: 3, img: '🪐', text: "Finally, Pip arrived at the Golden Nebula! Friendly space aliens waved and invited Pip for a stellar star-berry picnic. The end!" }
    ],
    leo: [
        { page: 1, img: '🦁', text: "Deep in the sunny savannah, Leo the little lion loved to make music! But instead of roaring, he loved playing rhythmic beats on wooden drums." },
        { page: 2, img: '🎵', text: "One day, the jungle held a grand talent show. Leo tapped out a magical melody, and all the monkeys and elephants began dancing happily!" },
        { page: 3, img: '👑', text: "Leo was crowned the Rhythm King of the Jungle, showing everyone that it's great to follow your own beat!" }
    ],
    mira: [
        { page: 1, img: '🧜', text: "Far beneath the waves, Mira the mermaid guarded the brightest coral reef in the whole ocean, full of swirling fish and glowing shells." },
        { page: 2, img: '🐠', text: "One day the coral began to fade. Mira gathered her friends—a wise octopus and a playful dolphin—to find the magic pearl that could bring the colors back." },
        { page: 3, img: '🪸', text: "Together they found the pearl deep in a sunken cave. The reef burst back into rainbow colors, and Mira's whole ocean family celebrated. The end!" }
    ]
};

let currentStoryKey = 'snowwhite';
let currentStoryPage = 0;

function selectStory(key, evt) {
    playSound(580);
    currentStoryKey = key;
    currentStoryPage = 0;
    document.querySelectorAll('.story-btn').forEach(btn => btn.classList.remove('active'));
    if (evt) evt.currentTarget.classList.add('active');
    renderStoryPage();
}

function renderStoryPage() {
    const list = stories[currentStoryKey];
    const p = list[currentStoryPage];
    const isLastPage = currentStoryPage === list.length - 1;

    document.getElementById('pageNumber').innerText = `Page ${p.page}`;
    document.getElementById('bookImg').innerText = p.img;
    document.getElementById('bookText').innerText = p.text;

    const choicesContainer = document.getElementById('storyChoices');
    choicesContainer.innerHTML = '';

    if (p.choices) {
        choicesContainer.style.display = 'flex';
        document.getElementById('nextPageBtn').style.display = 'none';

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
        document.getElementById('nextPageBtn').style.display = 'inline-block';
    }

    document.getElementById('prevPageBtn').disabled = (currentStoryPage === 0);
    document.getElementById('nextPageBtn').disabled = isLastPage;

    const endBanner = document.getElementById('theEndBanner');
    endBanner.style.display = isLastPage ? 'block' : 'none';

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
        if (currentStoryPage === 4 && delta === 1) currentStoryPage = 5;
        if (currentStoryPage === 6 && delta === 1) currentStoryPage = 7;
    }
    
    renderStoryPage();
}

function speakText() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const text = stories[currentStoryKey][currentStoryPage].text;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = 1.2;
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

// ============================================================
// GAME SELECTOR
// ============================================================
function showGame(gameId, evt) {
    playSound(450);
    document.querySelectorAll('.game-tab-btn').forEach(b => b.classList.remove('active'));
    if (evt) evt.currentTarget.classList.add('active');

    if (gameId !== 'pacman-game') {
        pausePacmanGame();
    }

    document.getElementById('math-game').style.display = (gameId === 'math-game') ? 'block' : 'none';
    document.getElementById('quiz-game').style.display = (gameId === 'quiz-game') ? 'block' : 'none';
    document.getElementById('pacman-game').style.display = (gameId === 'pacman-game') ? 'block' : 'none';
    document.getElementById('memory-match').style.display = (gameId === 'memory-match') ? 'block' : 'none';

    if (gameId === 'math-game') initMathGame();
    if (gameId === 'quiz-game') initQuiz();
    if (gameId === 'memory-match') initMemoryGame();
    if (gameId === 'pacman-game' && !pacInterval) initPacmanGame();
}

// ============================================================
// GAME 1: KIDS MATH WIZARD GAME (500 Dynamic Questions)
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
        } else { // Division
            num2 = Math.floor(Math.random() * 10) + 1;
            ans = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * ans;
            qText = `What is ${num1} ÷ ${num2}?`;
        }

        // Generate choices
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
    // Generates a round using the math pool questions
    mathRoundQuestions = shuffleArray([...mathQuestionsPool]).slice(0, 5);
    mathIndex = 0;
    mathScore = 0;
    renderMathQuestion();
}

function renderMathQuestion() {
    const container = document.getElementById('mathContainer');
    const total = mathRoundQuestions.length;

    if (mathIndex >= total) {
        document.getElementById('mathProgress').innerText = `${total} / ${total}`;
        document.getElementById('mathScoreDisplay').innerText = mathScore;

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

    document.getElementById('mathProgress').innerText = `${mathIndex + 1} / ${total}`;
    document.getElementById('mathScoreDisplay').innerText = mathScore;

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

    buttons[q.answer].classList.add('correct');
    if (choice === q.answer) {
        playSound(800, 'sine', 0.2);
        mathScore++;
    } else {
        playSound(200, 'sawtooth', 0.3);
        buttons[choice].classList.add('incorrect');
    }

    setTimeout(() => {
        mathIndex++;
        renderMathQuestion();
    }, 900);
}

// ============================================================
// GAME 2: 500 DYNAMIC TRIVIA QUIZ (No Repeats Engine)
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
    ]},
    { cat: "Geography & Earth", icon: "🌍", items: [
        { q: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"], a: 1 },
        { q: "Which is the tallest mountain above sea level?", options: ["K2", "Mount Everest", "Kilimanjaro", "Mount Fuji"], a: 1 },
        { q: "What gas do trees produce that humans need to breathe?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"], a: 1 },
        { q: "Which continent is the South Pole located on?", options: ["Asia", "Australia", "Antarctica", "Europe"], a: 2 },
        { q: "What primary substance makes up clouds?", options: ["Cotton", "Water droplets / Ice", "Gasoline", "Smoke"], a: 1 }
    ]},
    { cat: "Science & Nature", icon: "🔬", items: [
        { q: "What temperature does water boil at (Celsius)?", options: ["50°C", "100°C", "150°C", "200°C"], a: 1 },
        { q: "How many teeth do adult humans normally have?", options: ["20", "28", "32", "40"], a: 2 },
        { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Granite"], a: 2 },
        { q: "Which part of the plant absorbs water from the soil?", options: ["Leaves", "Roots", "Flowers", "Stem"], a: 1 },
        { q: "What force pulls objects toward the center of the Earth?", options: ["Magnetism", "Gravity", "Friction", "Electricity"], a: 1 }
    ]}
];

function generate500TriviaQuestions() {
    const list = [];
    
    // 1. Load base curated questions
    quizTopics.forEach(topic => {
        topic.items.forEach(item => {
            list.push({ q: item.q, options: item.options, answer: item.a, icon: topic.icon });
        });
    });

    // 2. Dynamic knowledge pool to reach 500 unique entries
    const dynamicFacts = [
        { q: "What is the capital city of France?", correct: "Paris", wrong: ["London", "Berlin", "Rome"], icon: "🏰" },
        { q: "Which color do you get when you mix Red and Yellow?", correct: "Orange", wrong: ["Purple", "Green", "Brown"], icon: "🎨" },
        { q: "How many days are in a leap year?", correct: "366", wrong: ["365", "360", "300"], icon: "📅" },
        { q: "What is the main ingredient in bread?", correct: "Flour", wrong: ["Rice", "Sugar", "Corn"], icon: "🍞" },
        { q: "Which instrument has 88 black and white keys?", correct: "Piano", wrong: ["Guitar", "Flute", "Drum"], icon: "🎹" },
        { q: "What shape has 3 sides?", correct: "Triangle", wrong: ["Square", "Circle", "Pentagon"], icon: "📐" },
        { q: "How many primary colors are there?", correct: "3", wrong: ["2", "5", "7"], icon: "🎨" },
        { q: "Which insect makes honey?", correct: "Honeybee", wrong: ["Ant", "Butterfly", "Beetle"], icon: "🐝" },
        { q: "What is the frozen form of water?", correct: "Ice", wrong: ["Steam", "Cloud", "Juice"], icon: "🧊" },
        { q: "Which season comes after Winter?", correct: "Spring", wrong: ["Summer", "Autumn", "Winter"], icon: "🌸" }
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

// Deck tracking so questions never repeat until deck empties
let availableQuizIndices = [];
let quizOrder = [];
let quizIndex = 0;
let quizScore = 0;

function initQuiz() {
    // Refill deck when full round of 500 questions completes
    if (!availableQuizIndices || availableQuizIndices.length < 5) {
        availableQuizIndices = shuffleArray([...Array(all500Questions.length).keys()]);
    }

    // Pull next 5 unplayed questions
    quizOrder = availableQuizIndices.splice(0, 5);
    quizIndex = 0;
    quizScore = 0;
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById('quizContainer');
    const total = quizOrder.length;

    if (quizIndex >= total) {
        document.getElementById('quizProgress').innerText = `${total} / ${total}`;
        document.getElementById('quizScoreDisplay').innerText = quizScore;

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
                <p><strong>${availableQuizIndices.length}</strong> new questions remaining in the deck!</p>
                <p>Earned ${earnedStars} stars ⭐</p>
                <button class="restart-btn" onclick="initQuiz()">🔄 Play Next Round</button>
            </div>
        `;
        playChime(perfect ? [523, 659, 784, 1046] : [523, 659]);
        return;
    }

    document.getElementById('quizProgress').innerText = `${quizIndex + 1} / ${total}`;
    document.getElementById('quizScoreDisplay').innerText = quizScore;

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

    buttons[q.answer].classList.add('correct');
    if (choice === q.answer) {
        playSound(800, 'sine', 0.2);
        quizScore++;
    } else {
        playSound(200, 'sawtooth', 0.3);
        buttons[choice].classList.add('incorrect');
    }

    setTimeout(() => {
        quizIndex++;
        renderQuizQuestion();
    }, 900);
}

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

    document.getElementById('score').innerText = pacScore;
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
        document.getElementById('score').innerText = pacScore;
        if (pacScore >= 100) unlockBadge('gamer');
    }

    if (map[pacman.y][pacman.x] === 3) {
        map[pacman.y][pacman.x] = 2;
        pacScore += 50;
        frightenedTicks = 25;
        ghosts.forEach(g => g.frightened = true);
        playChime([400, 300, 200], 'square');
        document.getElementById('score').innerText = pacScore;
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
                document.getElementById('score').innerText = pacScore;
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
    document.getElementById('lives').innerText = '❤️'.repeat(pacLives);
}

function resetPacmanGame() {
    playSound(400);
    initPacmanGame();
}

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
    document.getElementById('memoryMoves').innerText = moves;
    document.getElementById('memoryMatches').innerText = `${matches} / ${emojis.length}`;

    memoryCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

    memoryCards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        card.innerText = emoji;
        card.onclick = () => flipMemoryCard(card);
        grid.appendChild(card);
    });
}

function flipMemoryCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
        playSound(500);
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            moves++;
            document.getElementById('memoryMoves').innerText = moves;
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
        document.getElementById('memoryMatches').innerText = `${matches} / ${emojis.length}`;
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

function checkExperimentComplete(card) {
    if (!card) return;
    const steps = card.querySelectorAll('.steps-interactive li');
    const done = card.querySelectorAll('.steps-interactive li.completed');
    if (steps.length > 0 && steps.length === done.length) {
        const key = card.querySelector('h3').innerText;
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

// ============================================================
// INITIAL LOAD
// ============================================================
window.onload = () => {
    checkLoginSession();
    renderStoryPage();
};
// ============================================
// EDITABLE CONFIGURATION - Easy Customization
// ============================================

const CONFIG = {
    // Page Settings
    pageTitle: "NewBoroughs NYC - Ultimate New York Roleplay",
    
    // Logo
    logoUrl: "src/logo.png", // Replace with your logo file path
    
    // Music Player
    musicUrl: "src/music.mp3", // Replace with your music file path
    songTitle: "NewBoroughs NYC Theme",
    autoplay: false, // Set to true for autoplay
    loop: false, // Set to true for autoplay loop
    
    // Discord
    discordInviteLink: "https://discord.gg/your-invite-code", // Replace with your Discord invite link
    
    // Roblox
    robloxGameLink: "https://www.roblox.com/games/your-game-id", // Replace with your Roblox game link
    
    // Description
    gameDescription: "Welcome to NewBoroughs NYC, where every street tells a story. Build your legacy, earn your reputation, and experience the ultimate New York roleplay adventure. Explore bustling boroughs, own businesses, customize your character, and create unforgettable moments with friends."
};

// Apply Configuration
document.addEventListener('DOMContentLoaded', () => {
    // Set page title
    document.title = CONFIG.pageTitle;
    
    // Set logo
    const logoImg = document.getElementById('gamelogo');
    if (logoImg) {
        logoImg.src = CONFIG.logoUrl;
    }
    
    // Set music source
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.src = CONFIG.musicUrl;
        audioPlayer.loop = CONFIG.loop;
        if (CONFIG.autoplay) {
            audioPlayer.autoplay = true;
        }
    }
    
    // Set song title
    const songTitleEl = document.getElementById('songTitle');
    if (songTitleEl) {
        songTitleEl.textContent = CONFIG.songTitle;
    }
    
    // Set Discord link
    const discordBtn = document.getElementById('discordBtn');
    if (discordBtn) {
        discordBtn.href = CONFIG.discordInviteLink;
        discordBtn.target = '_blank';
        discordBtn.rel = 'noopener noreferrer';
    }
    
    // Set Roblox link
    const robloxBtn = document.getElementById('robloxBtn');
    if (robloxBtn) {
        robloxBtn.href = CONFIG.robloxGameLink;
        robloxBtn.target = '_blank';
        robloxBtn.rel = 'noopener noreferrer';
    }
    
    // Set description
    const introText = document.querySelector('.intro-text');
    if (introText) {
        introText.textContent = CONFIG.gameDescription;
    }
});
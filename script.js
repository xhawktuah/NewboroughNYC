// ============================================
// NEWBOROUGHS NYC - INTERACTIVE FUNCTIONALITY
// ============================================

// ============================================
// PARTICLE SYSTEM
// ============================================

function createParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = window.innerWidth > 768 ? 30 : 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 2;
        const xPos = Math.random() * 100;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = xPos + '%';
        particle.style.bottom = '-10px';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';

        container.appendChild(particle);

        // Recreate particle after animation ends
        setTimeout(() => {
            particle.remove();
            createParticles();
        }, (duration + delay) * 1000);
    }
}

// Initialize particles on load
window.addEventListener('load', createParticles);
window.addEventListener('resize', () => {
    document.querySelector('.particles-container').innerHTML = '';
    createParticles();
});

// ============================================
// AUDIO PLAYER FUNCTIONALITY
// ============================================

class AudioPlayer {
    constructor() {
        this.audioPlayer = document.getElementById('audioPlayer');
        this.playBtn = document.getElementById('playBtn');
        this.loopBtn = document.getElementById('loopBtn');
        this.volumeSlider = document.getElementById('volumeSlider');
        this.playerContainer = document.querySelector('.audio-player');

        this.isPlaying = false;
        this.isLooping = false;

        this.init();
    }

    init() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.loopBtn.addEventListener('click', () => this.toggleLoop());
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        this.audioPlayer.addEventListener('play', () => this.onPlay());
        this.audioPlayer.addEventListener('pause', () => this.onPause());
        this.audioPlayer.addEventListener('ended', () => this.onEnded());

        // Set initial volume
        this.audioPlayer.volume = 0.7;
    }

    togglePlay() {
        if (this.isPlaying) {
            this.audioPlayer.pause();
        } else {
            this.audioPlayer.play().catch(() => {
                console.log('Autoplay prevented. User interaction required.');
            });
        }
    }

    toggleLoop() {
        this.isLooping = !this.isLooping;
        this.audioPlayer.loop = this.isLooping;
        this.loopBtn.classList.toggle('active', this.isLooping);
    }

    setVolume(value) {
        this.audioPlayer.volume = value / 100;
    }

    onPlay() {
        this.isPlaying = true;
        this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        this.playerContainer.classList.add('playing');
    }

    onPause() {
        this.isPlaying = false;
        this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
        this.playerContainer.classList.remove('playing');
    }

    onEnded() {
        if (!this.isLooping) {
            this.isPlaying = false;
            this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
            this.playerContainer.classList.remove('playing');
            this.audioPlayer.currentTime = 0;
        }
    }
}

// Initialize audio player when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AudioPlayer();
});

// ============================================
// BUTTON INTERACTIONS
// ============================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    // Ripple effect on click
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes rippleEffect {
        from {
            width: 0;
            height: 0;
            opacity: 1;
        }
        to {
            width: 500px;
            height: 500px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SCROLL ANIMATIONS (Parallax-like effect)
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const skyline = document.querySelector('.skyline');
    const overlay = document.querySelector('.overlay');

    if (scrolled < window.innerHeight) {
        // Subtle parallax effect
        skyline.style.transform = `translateY(${scrolled * 0.05}px)`;
        overlay.style.opacity = 0.8 + (scrolled / window.innerHeight) * 0.2;
    }
});

// ============================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// HANDLE MOBILE OPTIMIZATION
// ============================================

// Detect touch device
function isTouchDevice() {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
}

// Adjust particle count for better performance on mobile
if (isTouchDevice()) {
    document.documentElement.style.setProperty('--particle-count', '10');
}

// ============================================
// PAGE VISIBILITY
// ============================================

// Pause audio when page is hidden, resume when visible
document.addEventListener('visibilitychange', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    if (document.hidden) {
        audioPlayer.pause();
    }
});

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================

// Spacebar to toggle audio playback
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
        const audioPlayer = document.getElementById('audioPlayer');
        const playBtn = document.getElementById('playBtn');

        e.preventDefault();
        playBtn.click();
    }
});

// ============================================
// PRELOAD IMAGES
// ============================================

function preloadImages() {
    const logo = document.getElementById('gamelogo');
    if (logo && logo.src && logo.src !== 'src/logo.png') {
        const img = new Image();
        img.src = logo.src;
        img.onerror = () => {
            console.warn('Failed to load logo from: ' + logo.src);
        };
    }
}

window.addEventListener('load', preloadImages);

// ============================================
// LOGGING
// ============================================

console.log('NewBoroughs NYC - Landing Page Loaded Successfully');
console.log('Assets folder: src/');
console.log('- Logo: src/logo.png');
console.log('- Music: src/music.mp3');
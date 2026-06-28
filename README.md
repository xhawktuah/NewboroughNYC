# NewBoroughs NYC - Premium Landing Page

A modern, premium one-page landing page inspired by New York City's nightlife and skyline. Features a cinematic, immersive design with dark colors accented by glowing blue, white, and subtle gold lighting.

## 🎨 Features

- **Animated Logo**: Floating, glowing logo with scale animations
- **Animated Title**: "NewBoroughs NYC" with smooth glowing gradient effect
- **NYC Skyline Background**: Full-screen background with parallax effect and particle system
- **Audio Player Widget**: 
  - Play/Pause controls
  - Volume slider
  - Song title display
  - Animated music visualizer bars
  - Loop toggle
  - Auto-play support
- **Premium Buttons**:
  - Join Discord button with hover glow animation
  - Play on Roblox button with premium shine animation
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Accessibility**: Keyboard controls, focus styles, and reduced motion support

## 📋 Easy Customization

All editable values are grouped in `config.js` for easy customization:

```javascript
const CONFIG = {
    pageTitle: "NewBoroughs NYC - Ultimate New York Roleplay",
    logoUrl: "https://your-logo-url.com/logo.png",
    musicUrl: "https://your-music-url.com/song.mp3",
    songTitle: "NewBoroughs NYC Theme",
    autoplay: false,
    loop: false,
    discordInviteLink: "https://discord.gg/your-invite-code",
    robloxGameLink: "https://www.roblox.com/games/your-game-id",
    gameDescription: "Your game description here..."
};
```

## 🚀 Quick Start

1. Open the repository files in your web server or code editor
2. Update `config.js` with your custom values:
   - Logo URL
   - Music Source URL
   - Discord Invite Link
   - Roblox Game Link
   - Game Description
   - Auto-play and Loop settings
3. Deploy to your hosting platform

## 📁 File Structure

```
NewboroughNYC/
├── index.html      # Main HTML structure
├── styles.css      # Premium styling and animations
├── script.js       # Interactive functionality
├── config.js       # Easy customization
└── README.md       # Documentation
```

## 🎮 Features Breakdown

### Visual Effects
- **Glowing Elements**: Blue glow effects on logo, title, and buttons
- **Particle System**: Floating particles creating depth
- **Parallax Effect**: Subtle movement based on scroll position
- **Animated Transitions**: Smooth fade and slide animations
- **Hover Effects**: Premium shine and glow animations

### Audio Player
- **Play/Pause**: Toggle music playback
- **Volume Control**: Slider for volume adjustment
- **Visualizer**: Animated bars that respond to playback
- **Loop Toggle**: Enable/disable looping
- **Song Display**: Shows current song title
- **Auto-play**: Optional auto-play on page load

### Interactivity
- **Button Ripple Effect**: Click animations on buttons
- **Keyboard Support**: Spacebar to toggle audio
- **Mobile Optimized**: Touch-friendly controls
- **Performance**: Reduced particles on mobile devices

## 🎯 Customization Guide

### Change the Logo
Open `config.js` and update:
```javascript
logoUrl: "https://your-image-url.com/your-logo.png"
```

### Change Music
Update the music URL in `config.js`:
```javascript
musicUrl: "https://your-audio-url.com/your-song.mp3",
songTitle: "Your Song Title"
```

### Change Links
Update Discord and Roblox links:
```javascript
discordInviteLink: "https://discord.gg/your-code",
robloxGameLink: "https://www.roblox.com/games/12345678"
```

### Change Description
Update the game description:
```javascript
gameDescription: "Your custom description here..."
```

### Enable Auto-play
```javascript
autoplay: true  // Music will play automatically on page load
```

## 🎨 Color Customization

Colors are defined as CSS variables in `styles.css`:

```css
:root {
    --primary-dark: #0d1b2a;      /* Main background */
    --secondary-dark: #1a2f4a;    /* Secondary background */
    --accent-blue: #00d4ff;       /* Primary accent */
    --accent-gold: #d4af37;       /* Secondary accent */
    --text-white: #ffffff;        /* Main text */
    --text-light: #e0e0e0;        /* Light text */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: Full experience with all effects
- **Tablet (768px)**: Optimized layout with adjusted sizing
- **Mobile (480px)**: Compact layout with simplified controls

## ♿ Accessibility

- Full keyboard navigation support
- ARIA-compliant focus styles
- Reduced motion support for users with motion sensitivity
- Semantic HTML structure
- Color contrast compliance

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## ⚡ Performance Optimization

- Hardware-accelerated animations
- Optimized particle system
- Lazy loading support
- Minimal JavaScript dependencies
- CSS-based animations for better performance

## 📝 License

© NewBoroughs NYC — All Rights Reserved

## 🤝 Support

For issues or customization help, please refer to the configuration section above or check the inline code comments.

---

**Created with ❤️ for NewBoroughs NYC**
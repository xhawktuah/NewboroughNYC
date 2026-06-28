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

## 📋 Project Structure

```
NewboroughNYC/
├── src/
│   ├── logo.png          # Your game logo (replace with your logo)
│   └── music.mp3         # Background music file (replace with your music)
├── index.html            # Main HTML structure
├── styles.css            # Premium styling and animations
├── script.js             # Interactive functionality
├── config.js             # Easy customization
└── README.md             # Documentation
```

## 🚀 Quick Start

### 1. Add Your Assets

Place your media files in the `src/` folder:
- **Logo**: `src/logo.png` (recommended: 180x180px or larger)
- **Music**: `src/music.mp3` (or other audio format supported by HTML5 audio)

### 2. Configure Settings

Edit `config.js` with your custom values:

```javascript
const CONFIG = {
    // Page Settings
    pageTitle: "NewBoroughs NYC - Ultimate New York Roleplay",
    
    // Logo - path to your logo file
    logoUrl: "src/logo.png",
    
    // Music Player - path to your music file
    musicUrl: "src/music.mp3",
    songTitle: "Your Song Title",
    autoplay: false,  // Set to true for autoplay
    loop: false,      // Set to true to loop music
    
    // Discord
    discordInviteLink: "https://discord.gg/your-invite-code",
    
    // Roblox
    robloxGameLink: "https://www.roblox.com/games/your-game-id",
    
    // Description
    gameDescription: "Your custom description here..."
};
```

### 3. Deploy

Push all files to your repository or hosting platform and open `index.html` in a browser.

## 📁 Asset Requirements

### Logo (`src/logo.png`)
- **Format**: PNG, JPG, or WebP
- **Recommended Size**: 180x180px or larger
- **Aspect Ratio**: Square (1:1) recommended
- **Background**: Transparent background recommended for best effect

### Music (`src/music.mp3`)
- **Format**: MP3, OGG, WAV, or FLAC (HTML5 supported formats)
- **Recommended**: MP3 for best browser compatibility
- **Quality**: 128-320 kbps for balance between quality and file size

## ⚙️ Easy Customization

### Change Logo
Simply replace `src/logo.png` with your logo file, or update the path in `config.js`:
```javascript
logoUrl: "src/your-logo.png"
```

### Change Music
Replace `src/music.mp3` with your music file, or update the path in `config.js`:
```javascript
musicUrl: "src/your-music.mp3",
songTitle: "Your Song Title"
```

### Change Links
Update Discord and Roblox links in `config.js`:
```javascript
discordInviteLink: "https://discord.gg/your-code",
robloxGameLink: "https://www.roblox.com/games/12345678"
```

### Change Description
Update the game description in `config.js`:
```javascript
gameDescription: "Your custom description here..."
```

### Enable Auto-play
```javascript
autoplay: true  // Music will play automatically on page load
```

### Enable Loop
```javascript
loop: true  // Music will loop when it ends
```

## 🎨 Color Customization

Colors are defined as CSS variables in `styles.css`. Edit the `:root` section to customize:

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

## 🎮 Features Breakdown

### Visual Effects
- **Glowing Elements**: Blue glow effects on logo, title, and buttons
- **Particle System**: Floating particles creating depth
- **Parallax Effect**: Subtle movement based on scroll position
- **Animated Transitions**: Smooth fade and slide animations
- **Hover Effects**: Premium shine and glow animations

### Audio Player
- **Play/Pause**: Toggle music playback
- **Volume Control**: Slider for volume adjustment (default 70%)
- **Visualizer**: Animated bars that respond to playback
- **Loop Toggle**: Enable/disable looping
- **Song Display**: Shows current song title
- **Auto-play**: Optional auto-play on page load

### Interactivity
- **Button Ripple Effect**: Click animations on buttons
- **Keyboard Support**: Spacebar to toggle audio
- **Mobile Optimized**: Touch-friendly controls
- **Performance**: Reduced particles on mobile devices

## 📱 Responsive Breakpoints

- **Desktop (1024px+)**: Full experience with all effects
- **Tablet (768px - 1023px)**: Optimized layout with adjusted sizing
- **Mobile (480px - 767px)**: Compact layout with simplified controls
- **Small Mobile (< 480px)**: Minimal layout for small screens

## ♿ Accessibility

- Full keyboard navigation support
  - **Spacebar**: Toggle audio playback
  - **Tab**: Navigate between buttons
  - **Enter**: Activate buttons
- ARIA-compliant focus styles (blue outline)
- Reduced motion support for users with motion sensitivity
- Semantic HTML structure
- Color contrast compliance (WCAG AA)

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## ⚡ Performance Optimization

- Hardware-accelerated animations
- Optimized particle system (30 particles on desktop, 15 on mobile)
- Lazy loading support for images
- Minimal JavaScript dependencies
- CSS-based animations for better performance
- Automatic audio pause when page is hidden
- Efficient scroll event handling

## 📝 Local Development

To test locally:

1. Clone the repository
2. Add your media files to the `src/` folder
3. Update `config.js` with your settings
4. Open `index.html` in a web browser

For local testing, you may need to run a simple HTTP server due to browser security restrictions:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server package)
http-server
```

Then visit `http://localhost:8000` in your browser.

## 🚀 Deployment

### GitHub Pages
1. Push all files to your GitHub repository
2. Go to Repository Settings → Pages
3. Select the branch to deploy from (usually `main`)
4. Your site will be live at `https://username.github.io/NewboroughNYC`

### Other Hosting
Upload all files (including the `src/` folder) to your web hosting platform.

## 📝 License

© NewBoroughs NYC — All Rights Reserved

## 🤝 Support & Troubleshooting

### Logo not showing?
- Ensure `src/logo.png` exists in your project
- Check that the file path in `config.js` is correct
- Verify the image format is supported (PNG, JPG, WebP)

### Music not playing?
- Ensure `src/music.mp3` exists in your project
- Check that the audio format is supported by your browser
- Verify the file path in `config.js` is correct
- Check browser console for CORS errors if hosting remotely

### Animations not smooth?
- Check that hardware acceleration is enabled in your browser
- Try disabling browser extensions
- Clear browser cache
- Test in a different browser

For more help, refer to the inline code comments in the files.

---

**Created with ❤️ for NewBoroughs NYC**
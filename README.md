# Krish Desai - Modern Portfolio Website

A stunning, modern portfolio website built with React, Framer Motion, and Tailwind CSS. Features animated particles, smooth transitions, and a professional design that showcases skills and projects effectively.

## ✨ Features

- **Modern Design**: Clean, futuristic dark theme with gradient accents
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Particles**: tsParticles background for dynamic visual appeal
- **Custom Cursor**: Interactive cursor that responds to hover states
- **Responsive Design**: Fully responsive across all devices
- **Scroll Animations**: Intersection Observer for scroll-triggered animations
- **Contact Form**: Functional contact form with validation
- **Professional Sections**: Hero, About, Experience, Projects, Contact

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **tsParticles** - Interactive particle system
- **Lucide React** - Beautiful icons
- **React Intersection Observer** - Scroll animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Hero.js            # Hero section with animated text
│   ├── About.js           # About section with skills
│   ├── Experience.js      # Timeline experience section
│   ├── Projects.js        # Project cards with hover effects
│   ├── Contact.js         # Contact form and info
│   ├── ParticlesBackground.js  # Interactive particles
│   ├── CustomCursor.js    # Custom cursor component
│   └── EmailSidebar.js    # Vertical email sidebar
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: Blue gradient (`#0ea5e9` to `#0284c7`)
- Accent: Cyan (`#06b6d4`)
- Dark: Dark grays (`#0f172a` to `#475569`)

### Content
Update the content in each component:
- Personal information in `Hero.js`
- Skills and stats in `About.js`
- Experience timeline in `Experience.js`
- Projects in `Projects.js`
- Contact information in `Contact.js`

### Animations
Customize animations in the component files using Framer Motion variants.

## 🌟 Key Features Explained

### 1. Animated Hero Section
- Typewriter effect for taglines
- Staggered animations for content
- Floating background elements
- Social media links with hover effects

### 2. Interactive Particles
- Configurable particle system
- Mouse interaction (repulse on hover)
- Click to add particles
- Optimized performance

### 3. Custom Cursor
- Follows mouse movement
- Scales on interactive elements
- Smooth spring animations
- Blend mode effects

### 4. Scroll Animations
- Intersection Observer for performance
- Staggered children animations
- Smooth fade-in effects
- Trigger once for efficiency

### 5. Responsive Design
- Mobile-first approach
- Flexible grid systems
- Touch-friendly interactions
- Optimized typography scaling

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Import the project
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder
3. Configure redirects for React Router

### GitHub Pages
1. Add `homepage` to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`
4. Run `npm run deploy`

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:
```
REACT_APP_EMAIL_SERVICE=your_email_service
REACT_APP_EMAIL_TEMPLATE=your_template_id
```

### Contact Form
The contact form is currently set up for demonstration. To make it functional:
1. Set up an email service (EmailJS, Formspree, etc.)
2. Update the form submission logic in `Contact.js`
3. Add proper error handling and validation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: krishhsdesai@gmail.com
- **Phone**: +1-647-458-9009
- **Location**: Ontario, Canada

---

Built with ❤️ by Krish Desai
# Investigative Reporting

A professional cybercrime investigation platform exploring Malaysia's digital security landscape through in-depth articles, data visualization, and expert interviews.

## 🌐 Live Website

**Production:** https://digitalforensichq.netlify.app

**GitHub Repository:** https://github.com/malsaaaa/investigativereporting.git

## 📋 Overview

Investigative Reporting is a cyberpunk-themed news and research platform dedicated to investigating cybercrime, data breaches, and online scams in Malaysia. The site combines professional journalism with interactive data visualization to educate readers about digital threats and security best practices.

### Key Focus Areas
- **Data Breaches:** Understanding how personal information is compromised and weaponized
- **Online Scams:** Systemic analysis of scam operations and victim targeting patterns
- **Cybersecurity:** Role of organizations and authorities in victim protection
- **Mobile Security:** APK attacks, malware threats, and app-based vulnerabilities
- **Digital Trust:** Impact of cybercrime on user confidence in digital services

## 🎨 Design & Branding

**Theme:** Cyberpunk Neon  
**Color Palette:**
- Primary Dark: `#0a0e27` (Deep navy background)
- Accent Cyan: `#00d4ff` (Glowing blue)
- Accent Magenta: `#ff006e` (Electric pink)
- Supporting: Gradient overlays and glowing effects

**Typography:** Modern sans-serif with uppercase titles and gradient text effects

## 📰 Content Structure

### Main Pages

| Page | Purpose | Status |
|------|---------|--------|
| **Home (index.html)** | Landing page with featured article, teaser video, navigation | ✅ Live |
| **About Us** | Organization mission and credentials | ✅ Live |
| **Articles** | Hub displaying all 4 investigation articles | ✅ Live |
| **Series** | 3 embedded video episodes on cybersecurity topics | ✅ Live |
| **Data Illustration** | Interactive charts and statistics on cybercrime trends | ✅ Live |
| **Cases** | Real-world case studies of major data breaches | ✅ Live |

### Investigation Articles

#### Article 1: One Click Away
**"How Data Breaches Turn Users into Scam Victims"**  
*By: Yasmin Damia | Featuring: Ahmad Azman Azlan, Ethical Hacker*

Explores the direct pipeline from data breaches to targeted scam attacks, including:
- How stolen data is monetized on dark web marketplaces
- Phishing-to-scam attack workflows
- APK file attacks on Android devices
- WhatsApp/Telegram account hijacking tactics
- Account recovery challenges
- Cybersecurity best practices

#### Article 2: Scammed by Fear
**"How Phone Phishing Preys on Authority"**  
*By: Nur Amani Izran*

Deep dive into psychological manipulation tactics used by scammers, featuring victim testimony and expert analysis on authority exploitation and social engineering.

#### Article 3: Cybersecurity's Role
**"Victim Protection and Recovery"**  
*By: Syamilah Yusman & Farzana Rozaidee*

Examines Malaysia's cybersecurity infrastructure, including:
- CyberSecurity Malaysia's Cyber999 response team
- AI-driven defense mechanisms
- The Personal Data Protection Act (PDPA)
- Multi-Factor Authentication (MFA) strategies
- "Golden Hour" incident response protocols

#### Article 4: Scams Are Not a System
**"Not Isolated Crimes - Systemic Analysis"**  
*By: Annisa' Azlan*

Comprehensive systemic analysis of scam operations in Malaysia with interactive charts showing:
- Autofill password vulnerability statistics (67.6% usage rate)
- Trust erosion in digital services (92% affected)
- Responsibility attribution for data breaches
- Organizational data protection assessment

## 📊 Interactive Data Visualization

### Featured Charts

**Data Illustration Page:**
- Autofill password usage vulnerability analysis
- Data breach incident trends (Q1-Q2 2025)
- Platform attack frequency by communication channel

**Article 4 - Survey Results:**
1. **Scam Impact** - 78.4% of Malaysians affected
2. **Trust in Digital Services** - 92% erosion
3. **Responsibility Attribution** - 46.4% believe all parties responsible
4. **Organizational Data Protection** - 62.5% believe insufficient protection
5. **Autofill Vulnerability** - 67.6% rely on autofill feature

All charts are interactive doughnut/pie visualizations with hover effects using Chart.js 3.9.1

## 🎬 Video Content

**Series Page - 3 Episodes:**

1. **Episode 1:** "Understanding Data Breaches and the role of Cyber999"
   - Overview of data breach mechanisms and response procedures
   - Embedded: Google Drive video

2. **Episode 2:** "The Black Market - Data For Sale"
   - How stolen data is traded on criminal marketplaces
   - Embedded: Google Drive video

3. **Episode 3:** "Coming Soon"
   - Placeholder for future content

**Homepage Teaser:**
- Featured Episode 1 video with description
- Positioned between hero section and main content

## 🛠️ Technical Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - 1400+ lines with CSS variables and gradients
  - `styles.css` - Global styles
  - `investigation-styles.css` - Article page styles (800+ lines)
  - `data-illustration-styles.css` - Data viz page styles (650+ lines)
- **Vanilla JavaScript** - ES6 modules
  - `script.js` - Navigation and mobile menu
  - `articles/article1.js` through `articles/article4.js` - Article content modules

### Libraries
- **Chart.js 3.9.1** - Interactive data visualization
- **Google Drive iframes** - Video embedding

### Design System
- CSS Custom Properties (variables) for theming
- Responsive breakpoints: 480px, 768px, 1024px, 1400px+
- Gradient overlays and glow effects
- Mobile-first responsive design

## 📱 Responsive Design

**Breakpoints:**
- **Mobile:** 480px and below
- **Tablet:** 481px - 768px
- **Desktop:** 769px - 1024px
- **Large Desktop:** 1025px+

**Features:**
- Hamburger menu for mobile navigation
- Adaptive chart sizing (350px mobile → 450px desktop)
- Flexible grid layouts
- Touch-friendly button sizing

## 🔐 Features

### Article Features
- Professional header with badge, gradient title, and author byline
- Share button with Web Share API and clipboard fallback
- Responsive featured images with gradient overlay
- Justified body text for readability
- Dark mode compatible color scheme

### Navigation
- Fixed navbar with logo
- Dropdown menu for 4 articles
- Mobile hamburger menu
- Back-to-articles/home links
- Active state indicators

### Data Visualization
- Interactive doughnut charts with hover effects
- Color-coded stat badges
- Response counts and survey metadata
- Side-by-side chart layouts for comparison
- Responsive canvas sizing

### Interactive Elements
- Share buttons with native OS integration
- Mobile menu toggle
- Chart hover animations
- Video fullscreen support
- Link highlighting

## 📂 File Structure

```
digitalforensichq/
├── index.html                 # Homepage
├── about.html                 # About page
├── articles.html              # Articles hub
├── article1.html - article4.html
├── series.html                # Video series
├── data-illustration.html     # Data visualization
├── cases.html                 # Case studies
├── styles.css                 # Global styles (1400+ lines)
├── investigation-styles.css   # Article styles (800+ lines)
├── data-illustration-styles.css
├── script.js                  # Navigation logic
├── articles/
│   ├── article1.js           # Article 1 content module
│   ├── article2.js           # Article 2 content module
│   ├── article3.js           # Article 3 content module
│   └── article4.js           # Article 4 content module
├── assets/                    # Images and media
│   ├── Article 1_image1.png
│   ├── Article 2_image1.jpg
│   ├── Article 3_image1.png
│   ├── data_illustration*.png
│   └── case*.png
├── netlify.toml              # Netlify deployment config
├── README.md                 # This file
└── .gitignore

```

## 🚀 Deployment

### GitHub
- **Repository:** https://github.com/malsaaaa/investigativereporting.git
- **Branch:** main
- **Commits:** 40+

### Netlify
- **Site:** digitalforensichq.netlify.app
- **Deployment:** Auto-deploys on Git push
- **Build:** Static site (no build step required)
- **Status:** ✅ Live and active

### Deployment Process
```bash
# Make changes locally
git add -A
git commit -m "Description of changes"
git push origin main

# Netlify automatically deploys
# Check status at: https://app.netlify.com
```

## 📊 Performance & Analytics

**Optimization:**
- Static HTML/CSS/JS (minimal HTTP requests)
- Lazy-loaded iframes for videos
- Optimized PNG/JPG images
- CSS variables for reduced file size
- Minimal dependencies

**Accessibility:**
- Semantic HTML structure
- Color contrast compliance
- Responsive design
- Keyboard navigation support
- Alt text for all images

## 🔗 External Resources

**Cyber Authorities:**
- CyberSecurity Malaysia: https://www.cybersecurity.my
- Cyber999 Hotline: 997
- PDRM Scam Alert: https://www.rmp.gov.my/scam-alert
- Bank Negara Malaysia: https://www.bnm.gov.my

**Security Tools:**
- Have I Been Pwned: https://haveibeenpwned.com
- Multi-Factor Authentication (MFA) enablement

**Legal Framework:**
- Personal Data Protection Act (PDPA)
- National Critical Information Infrastructure (NCII)

## 📝 Content Guidelines

### Articles
- Investigative journalism format
- Expert interviews and quotes
- Real-world case references
- Statistical data with sources
- Cybersecurity best practices
- Professional imagery

### Data Visualization
- Survey-based statistics (112 respondents typical)
- Official government/institutional data
- Clear labeling and legends
- Responsive design for all charts
- Interactive hover effects

### Captions
- Descriptive image captions
- Expert attribution
- Italic formatting for emphasis

## 🎯 Future Roadmap

- [ ] Episode 3 video production and embedding
- [ ] Additional article series (5-8 total)
- [ ] Advanced analytics dashboard
- [ ] Newsletter subscription
- [ ] Social media integration
- [ ] Multi-language support
- [ ] PDF export for articles
- [ ] Dark/Light mode toggle

## 👥 Contributors

- **Investigative Reporting Team** - Content creation and research
- **Ahmad Azman Azlan** - Cybersecurity expert
- **Syamilah Yusman & Farzana Rozaidee** - Security analysis
- **Nur Amani Izran** - Social engineering research
- **Annisa' Azlan** - Systemic analysis

## 📞 Contact & Support

For inquiries or collaboration:
- GitHub: https://github.com/malsaaaa
- Website: https://digitalforensichq.netlify.app

## ⚖️ License & Attribution

**Content:** All articles and research are original investigative journalism.

**Images:** Original and licensed photography with proper attribution.

**Chart.js:** Used under MIT license (https://www.chartjs.org)

**Data Sources:** CyberSecurity Malaysia, PDRM, official government statistics, survey data

## 📌 Version History

**Current Version:** 1.0.0 (January 2026)

**Recent Updates:**
- Article 1 restored with APK attack focus
- Article 4 systemic scam analysis with 5 interactive charts
- Video series with 2 embedded episodes
- Data illustration with vulnerability analysis
- Full responsive design implementation
- Share functionality with Web Share API

---

**Last Updated:** January 19, 2026  
**Status:** Active and maintained  
**Visitors:** Growing monthly engagement from Malaysia cybersecurity community


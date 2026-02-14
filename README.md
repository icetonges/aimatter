# AI Matter - Federal Budget Process Education

A modern, interactive web application built to help people understand the U.S. federal budget process. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack (2026)**: Next.js 15 with App Router, React 19, TypeScript, Tailwind CSS
- **Three Main Phases**: Comprehensive coverage of Formulation, Enactment, and Execution
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Static Site Generation**: Optimized for GitHub Pages deployment
- **Type-Safe**: Full TypeScript implementation
- **Fast & Performant**: Server Components, optimized bundling

## 📋 Pages

- **Homepage**: Overview of the three budget phases with interactive timeline
- **Formulation**: Detailed explanation of budget planning and agency requests
- **Enactment**: Congressional review and appropriation bill process
- **Execution**: Agency spending and financial management
- **About**: Mission, resources, and technology information

## 🛠️ Technology Stack

### Core
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with Server Components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling

### Icons
- **Lucide React**: Beautiful, consistent icon set

### Deployment
- **GitHub Pages**: Free hosting with custom domain support
- **Static Export**: Pre-rendered HTML/CSS/JS

## 📦 Installation

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/icetonges/aimatter.git
cd aimatter
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/aimatter](http://localhost:3000/aimatter) in your browser

## 🚢 Deployment to GitHub Pages

### Method 1: Automated Deployment (Recommended)

1. Create a `.github/workflows/deploy.yml` file:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

2. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root
   - Save

### Method 2: Manual Deployment

1. Build the static site:
```bash
npm run build
```

2. The output will be in the `out/` directory

3. Deploy the `out/` directory to your hosting provider or GitHub Pages

## 🏗️ Project Structure

```
aimatter/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── formulation/
│   │   └── page.tsx        # Formulation phase
│   ├── enactment/
│   │   └── page.tsx        # Enactment phase
│   ├── execution/
│   │   └── page.tsx        # Execution phase
│   └── about/
│       └── page.tsx        # About page
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Content
All content is in the respective page files under `app/`. Edit the TypeScript files to update content.

### Base Path
If deploying to a different path, update `next.config.js`:

```javascript
const nextConfig = {
  basePath: '/your-path',
  // ...
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### next.config.js
- **output**: 'export' for static site generation
- **basePath**: '/aimatter' for GitHub Pages deployment
- **images**: unoptimized: true for static export

### TypeScript
Strict mode enabled with all recommended checks

### Tailwind CSS
Custom color scheme with utility classes for consistent design

## 📚 Resources

Official government resources linked in the About page:
- Office of Management and Budget (OMB)
- Congressional Budget Office (CBO)
- Government Accountability Office (GAO)
- House and Senate Appropriations Committees

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for educational purposes.

## 🙏 Acknowledgments

- Built with modern web technologies from 2026
- Inspired by the need to make government processes more accessible
- Content based on official federal budget documentation

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Built with ❤️ using Next.js 15, React 19, and TypeScript**

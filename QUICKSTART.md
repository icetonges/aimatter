# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000/aimatter

### 3. Build for Production

```bash
npm run build
```

The static site will be in the `out/` directory.

### 4. Deploy to GitHub

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📁 Project Structure

```
aimatter/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── formulation/       # Formulation phase page
│   ├── enactment/         # Enactment phase page
│   ├── execution/         # Execution phase page
│   └── about/             # About page
├── public/                # Static files
├── .github/workflows/     # GitHub Actions
├── next.config.js         # Next.js config
├── tailwind.config.js     # Tailwind config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

## 🎨 Tech Stack

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with Server Components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library

## ✨ Features

- ✅ Fully responsive design
- ✅ Static site generation
- ✅ Type-safe with TypeScript
- ✅ Optimized for performance
- ✅ SEO friendly
- ✅ GitHub Pages ready

## 🛠️ Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - Run linter

## 📝 Making Changes

1. Edit files in `app/` directory
2. Changes auto-reload in dev mode
3. Build and test before deploying
4. Push to GitHub to auto-deploy

## 🐛 Troubleshooting

### Port 3000 in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Type errors
```bash
npx tsc --noEmit
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## 🎉 You're Ready!

Your modern budget education app is ready to use and deploy!

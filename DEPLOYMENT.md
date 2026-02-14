# Deployment Guide for AI Matter

This guide will help you deploy the AI Matter application to GitHub Pages at `https://icetonges.github.io/aimatter/`

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 20+ installed

## Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to https://github.com
2. Click "New repository"
3. Name it: `aimatter`
4. Make it public
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### 2. Push Your Code to GitHub

Open a terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Modern Next.js 15 budget education app"

# Add your GitHub repository as remote
git remote add origin https://github.com/icetonges/aimatter.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub: `https://github.com/icetonges/aimatter`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. The workflow will automatically run and deploy your site

### 4. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live!

### 5. Access Your Site

Your site will be available at:
```
https://icetonges.github.io/aimatter/
```

## Troubleshooting

### Build Fails

If the build fails, check:
- All dependencies are listed in package.json
- No TypeScript errors
- All imports are correct

### 404 Error

If you get a 404 error:
- Make sure GitHub Pages is enabled in Settings > Pages
- Check that the basePath in next.config.js matches your repository name
- Wait a few minutes - deployment can take time to propagate

### Styling Issues

If styles don't load:
- Clear your browser cache
- Check that all CSS imports are correct
- Verify Tailwind is properly configured

## Making Updates

After making changes to your code:

```bash
# Add changes
git add .

# Commit with a descriptive message
git commit -m "Update: description of your changes"

# Push to GitHub
git push

# The workflow will automatically rebuild and redeploy
```

## Local Testing

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000/aimatter
```

Test the production build:

```bash
# Build the site
npm run build

# The output will be in the 'out' directory
# You can serve it with any static server
```

## Advanced Configuration

### Custom Domain

To use a custom domain:

1. Buy a domain from a registrar
2. Add a CNAME file to the public directory:
   ```
   yourdomain.com
   ```
3. Configure DNS settings at your registrar:
   - Add a CNAME record pointing to `icetonges.github.io`
4. Enable custom domain in GitHub Pages settings

### Environment Variables

For environment-specific configs:

1. Create `.env.local` file (not committed to git)
2. Add variables with `NEXT_PUBLIC_` prefix
3. Access in code: `process.env.NEXT_PUBLIC_YOUR_VAR`

## Performance Optimization

The app is already optimized with:
- Static site generation
- Server Components (where applicable)
- Optimized images
- Minimal JavaScript
- Tailwind CSS purging

## Monitoring

Monitor your deployment:
- **GitHub Actions**: See build logs
- **GitHub Insights**: Track traffic
- **Lighthouse**: Test performance, SEO, accessibility

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Review the error messages
3. Ensure all files are committed
4. Check that node_modules is in .gitignore

## Success Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] Workflow completed successfully
- [ ] Site accessible at https://icetonges.github.io/aimatter/
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Styling is correct
- [ ] Mobile responsive

Congratulations! Your site is now live! 🎉

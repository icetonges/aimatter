# 📋 Deployment Checklist for AI Matter

Use this checklist to ensure smooth deployment to GitHub Pages.

## Pre-Deployment

- [ ] All files are created and in correct locations
- [ ] Node.js 20+ is installed on your system
- [ ] Git is installed on your system
- [ ] You have a GitHub account
- [ ] You have write access to the repository

## Local Testing

- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and test at http://localhost:3000/aimatter
- [ ] All pages load correctly:
  - [ ] Homepage (/)
  - [ ] Formulation (/formulation)
  - [ ] Enactment (/enactment)
  - [ ] Execution (/execution)
  - [ ] About (/about)
- [ ] Navigation works between all pages
- [ ] Styling looks correct
- [ ] Mobile responsiveness works
- [ ] Run `npm run build` successfully
- [ ] Check `out/` directory was created

## GitHub Setup

- [ ] Create repository: https://github.com/icetonges/aimatter
- [ ] Repository is set to public
- [ ] Initialize git: `git init`
- [ ] Add files: `git add .`
- [ ] Commit: `git commit -m "Initial commit"`
- [ ] Add remote: `git remote add origin https://github.com/icetonges/aimatter.git`
- [ ] Push code: `git push -u origin main`

## GitHub Pages Configuration

- [ ] Go to repository Settings
- [ ] Navigate to Pages section
- [ ] Set Source to "GitHub Actions"
- [ ] Workflow file exists at `.github/workflows/deploy.yml`

## Deployment Verification

- [ ] Go to Actions tab
- [ ] Workflow "Deploy to GitHub Pages" is running
- [ ] Wait for workflow to complete (green checkmark)
- [ ] Check deployment succeeded
- [ ] Visit https://icetonges.github.io/aimatter/
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] No 404 errors
- [ ] Styles load properly
- [ ] Links work correctly

## Post-Deployment

- [ ] Test on desktop browser
- [ ] Test on mobile browser
- [ ] Test all navigation links
- [ ] Test external resource links
- [ ] Check browser console for errors
- [ ] Test with different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

## Optional Enhancements

- [ ] Add custom domain (if desired)
- [ ] Set up Google Analytics (if desired)
- [ ] Add meta tags for social sharing
- [ ] Create favicon variations
- [ ] Add sitemap.xml

## Maintenance

- [ ] Document any custom changes
- [ ] Set up backup of repository
- [ ] Plan content updates
- [ ] Monitor GitHub Actions for build failures
- [ ] Check site periodically for broken links

## Troubleshooting Checklist

If deployment fails:

- [ ] Check GitHub Actions logs for errors
- [ ] Verify all files are committed
- [ ] Check node_modules is in .gitignore
- [ ] Verify next.config.js basePath is correct
- [ ] Test build locally: `npm run build`
- [ ] Clear GitHub Actions cache
- [ ] Try manual deployment

If 404 errors occur:

- [ ] Check basePath in next.config.js matches repo name
- [ ] Verify GitHub Pages is enabled
- [ ] Wait 5-10 minutes for propagation
- [ ] Clear browser cache
- [ ] Check .nojekyll file exists in public/

If styles don't load:

- [ ] Check all imports in CSS files
- [ ] Verify Tailwind config is correct
- [ ] Check public assets path
- [ ] Clear browser cache
- [ ] Check network tab in browser devtools

## Success Criteria

✅ Site is live at https://icetonges.github.io/aimatter/
✅ All pages load without errors
✅ Navigation works smoothly
✅ Design is responsive on mobile
✅ No console errors
✅ Links work correctly
✅ Performance is good (fast load times)

## Support

If you encounter issues:

1. Review GitHub Actions logs
2. Check the troubleshooting section above
3. Review README.md and DEPLOYMENT.md
4. Check Next.js documentation
5. Verify all prerequisites are met

---

**When all items are checked, your deployment is complete! 🎉**

Date Deployed: _______________
Deployed By: _______________

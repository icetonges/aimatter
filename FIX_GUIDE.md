# 🐛 Bug Fixes: Images & Text Not Rendering

## Root Cause Analysis

There were **4 compounding bugs** preventing images and content from rendering correctly:

---

### Bug 1 — `basePath: '/aimatter'` in `next.config.js` (CRITICAL)

The config was set up for GitHub Pages deployment but the site is hosted on **Vercel**, which serves from the root `/`. This single setting broke **all** asset paths.

**Fix:** Remove (or comment out) the `basePath` in `next.config.js`:

```js
// BEFORE (broken on Vercel):
const nextConfig = {
  basePath: '/aimatter',   // ← REMOVE THIS
  output: 'export',        // ← REMOVE THIS (not needed for Vercel)
  images: { unoptimized: true },
};

// AFTER (fixed):
const nextConfig = {
  images: {
    unoptimized: false,    // Vercel's image optimization works now
  },
};
```

---

### Bug 2 — Relative image paths (no leading `/`)

All `<img>` and `<Image>` `src` values were missing the leading slash, making them relative to the current route instead of absolute from the server root.

**Fix:** Add `/` prefix to every image path:

```tsx
// BEFORE (broken):
<img src="img/tableau-1-citibike.JPG" />
<Image src="project7/Spend Plan Demo.gif" />

// AFTER (fixed):
<Image src="/img/tableau-1-citibike.jpg" />
<Image src="/project7/spend-plan-demo.gif" />
```

---

### Bug 3 — Spaces in filenames

`public/project7/Spend Plan Demo.gif` has spaces that break URL parsing.

**Fix:** Run the provided script once:
```bash
bash fix-public-assets.sh
```
This renames `Spend Plan Demo.gif` → `spend-plan-demo.gif`

---

### Bug 4 — Uppercase file extensions (`.JPG`, `.PNG`)

Vercel runs on Linux, which is **case-sensitive**. Files named `.JPG` or `.PNG` won't be found when the code references `.jpg` or `.png`.

**Fix:** The `fix-public-assets.sh` script handles this automatically by lowercasing all `.JPG` and `.PNG` extensions in the `public/` folder.

---

## How to Apply All Fixes

```bash
# 1. Clone / pull latest
git clone https://github.com/icetonges/aimatter.git
cd aimatter

# 2. Run the asset rename script
bash fix-public-assets.sh

# 3. Copy the fixed source files (from this zip) over the originals:
#    - next.config.js
#    - app/layout.tsx
#    - app/page.tsx
#    - app/globals.css
#    - components/Navigation.tsx

# 4. Commit and push
git add .
git commit -m "fix: correct image paths, remove GitHub Pages basePath, rename assets"
git push origin main
```

Vercel will auto-deploy on push. ✅

---

## File Changes Summary

| File | Change |
|------|--------|
| `next.config.js` | Removed `basePath: '/aimatter'` and `output: 'export'` |
| `app/page.tsx` | Fixed all image paths with leading `/`, added `.gif` unoptimized flag, used Next.js `<Image fill>` for proper rendering |
| `app/layout.tsx` | Cleaned up imports and metadata |
| `app/globals.css` | Added Inter font, fixed base styles |
| `components/Navigation.tsx` | Created proper sticky nav component |
| `public/project7/spend-plan-demo.gif` | Renamed from `Spend Plan Demo.gif` (spaces removed) |
| `public/**/*.JPG` → `.jpg` | Lowercased for Linux/Vercel compatibility |
| `public/**/*.PNG` → `.png` | Lowercased for Linux/Vercel compatibility |

---

## After Fix — Image Paths Reference

All images in `app/page.tsx` now use these corrected paths:

```
/img/tableau-1-citibike.jpg        ← was: img/tableau-1-citibike.JPG
/project7/spend-plan-demo.gif      ← was: project7/Spend Plan Demo.gif
/project10/book.gif                ← ✓ was already correct (except leading /)
/project11/compare.gif             ← ✓ was already correct
/project6/project6.png             ← was: project6/project6.PNG
/project9/vba.jpg                  ← ✓ was already correct
/project13/project13.png           ← was: project13/project13.PNG
/project14/project14.png           ← was: project14/project14.PNG
/project15/sqlalchemy.png          ← ✓ was already correct
/project8/project8.png             ← was: project8/project8.PNG
/img/tableau-3-covid19.jpg         ← was: img/tableau-3-covid19.JPG
/img/tableau-2-fed-avg-salary.jpg  ← was: img/tableau-2-fed-avg-salary.JPG
/img/project5.png                  ← was: img/project5.PNG
/img/project4.png                  ← was: img/project4.PNG
/project12/text.gif                ← ✓ was already correct
```

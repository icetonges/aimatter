# 🚀 Budget Matter - Complete Rebuild Instructions

## What You Have

A professional Next.js 15 + React 18 + TypeScript clone of your budgetmatter.github.io site with:

✅ **Complete Homepage** - All 15 projects listed
✅ **Exact Navigation** - Same menu structure  
✅ **Modern Tech Stack** - Next.js 15, React 18.3, TypeScript, Tailwind
✅ **Template System** - Easy to add content
✅ **GitHub Pages Ready** - Configured for deployment

## Quick Start

```bash
# 1. Extract ZIP
unzip budgetmatter-pro.zip
cd budgetmatter-pro

# 2. Install dependencies  
npm install --legacy-peer-deps

# 3. Run development server
npm run dev

# 4. Open browser
# Visit: http://localhost:3000/aimatter
```

## Step-by-Step Content Migration

### Phase 1: Copy Images (30 minutes)

From your `C:\Users\Peter-HP\budgetmatter.github.io\` folder:

1. Copy ALL `.PNG` files → `public/images/`
2. Copy ALL `.jpg` files → `public/images/`  
3. Copy ALL `.gif` files → `public/images/`
4. Copy `img/` folder contents → `public/images/img/`
5. Copy project images:
   - `project4/` images → `public/images/project4/`
   - `project5/` images → `public/images/project5/`
   - ... (repeat for all projects)

**Total:** ~50-100 image files

### Phase 2: Create Main Pages (2 hours)

For each page, follow this pattern:

#### Example: Budget Formulation Page

1. **Create the file:**
   ```bash
   cp PAGE_TEMPLATE.tsx app/formulation/page.tsx
   ```

2. **Open your original:**
   - Go to `https://budgetmatter.github.io/formulation.html`
   - Right-click → View Page Source
   - Find the main content (between `<main>` tags or similar)

3. **Copy content:**
   - Copy the text and structure
   - Paste into `app/formulation/page.tsx` in the marked section

4. **Convert HTML to JSX:**
   - Change `class="..."` to `className="..."`
   - Change `<img src="image.png"` to `<img src="/aimatter/images/image.png"`
   - Close self-closing tags: `<br>` → `<br />`

5. **Update page specifics:**
   - Change function name: `export default function Formulation()`
   - Update hero image: `backgroundImage: 'url(/aimatter/images/formulation.png)'`
   - Update title: `<h1>Budget Formulation</h1>`

#### Repeat for All Pages:

- [ ] `app/formulation/page.tsx` → from `formulation.html`
- [ ] `app/enactment/page.tsx` → from `enactment.html`
- [ ] `app/execution/page.tsx` → from `execution.html`
- [ ] `app/process/page.tsx` → from `process.html`
- [ ] `app/policy/page.tsx` → from `policy.html`
- [ ] `app/portfolio/page.tsx` → from `portfolio-1-col.html`
- [ ] `app/about/page.tsx` → from `about.html`

### Phase 3: Create Project Pages (3 hours)

For EACH of your 15 projects:

1. **Create folder:**
   ```bash
   mkdir -p app/projects/project13
   ```

2. **Copy template:**
   ```bash
   cp PAGE_TEMPLATE.tsx app/projects/project13/page.tsx
   ```

3. **Get original content:**
   - Open `https://budgetmatter.github.io/project13/project13.html`
   - Copy the content

4. **Paste and convert:**
   - Update function name
   - Add project description
   - Add images
   - Add any Tableau embeds or links

#### All Projects to Create:

- [ ] `app/projects/tableau-citibike/page.tsx`
- [ ] `app/projects/project4/page.tsx`
- [ ] `app/projects/project5/page.tsx`
- [ ] `app/projects/project6/page.tsx`
- [ ] `app/projects/project7/page.tsx`
- [ ] `app/projects/project8/page.tsx`
- [ ] `app/projects/project9/page.tsx`
- [ ] `app/projects/project10/page.tsx`
- [ ] `app/projects/project11/page.tsx`
- [ ] `app/projects/project12/page.tsx`
- [ ] `app/projects/project13/page.tsx`
- [ ] `app/projects/project14/page.tsx`
- [ ] `app/projects/project15/page.tsx`
- [ ] `app/projects/tableau-covid19/page.tsx`
- [ ] `app/projects/tableau-federal-employment/page.tsx`

## Testing

After adding content:

```bash
# Check for errors
npm run build

# If build succeeds, test locally
npm run dev

# Visit each page:
# http://localhost:3000/aimatter/
# http://localhost:3000/aimatter/formulation
# http://localhost:3000/aimatter/enactment
# etc.
```

## Deployment

Once everything looks good:

```bash
# Build for production
npm run build

# Push to GitHub
git init
git add .
git commit -m "Complete site rebuild"
git remote add origin https://github.com/icetonges/aimatter.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## HTML to JSX Cheat Sheet

| HTML | JSX |
|------|-----|
| `<div class="btn">` | `<div className="btn">` |
| `<img src="image.jpg">` | `<img src="/aimatter/images/image.jpg" />` |
| `<br>` | `<br />` |
| `<input>` | `<input />` |
| `onclick="..."` | `onClick={...}` |
| `style="color: red"` | `style={{color: 'red'}}` |
| `<!-- comment -->` | `{/* comment */}` |
| `for="id"` | `htmlFor="id"` |

## Common Issues

**Images not loading?**
- Check path: `/aimatter/images/filename.png`
- Check file exists in `public/images/`
- Check case sensitivity (Image.PNG vs image.png)

**Build errors?**
- Check all JSX is valid
- Check all tags are closed
- Check all `className` not `class`

**Navigation not working?**
- Links should use `/formulation` not `/formulation.html`
- Links are relative to `/aimatter/` base path

## File Structure Reference

```
budgetmatter-pro/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx  ← Navbar (used on all pages)
│   │   └── Footer.tsx      ← Footer (used on all pages)
│   │
│   ├── page.tsx            ← Homepage (COMPLETE)
│   ├── layout.tsx          ← Root layout (COMPLETE)
│   ├── globals.css         ← Styles (COMPLETE)
│   │
│   ├── formulation/
│   │   └── page.tsx        ← Add content here
│   ├── enactment/
│   │   └── page.tsx        ← Add content here
│   ├── execution/
│   │   └── page.tsx        ← Add content here
│   ├── process/
│   │   └── page.tsx        ← Add content here
│   ├── policy/
│   │   └── page.tsx        ← Add content here
│   ├── portfolio/
│   │   └── page.tsx        ← Add content here
│   ├── about/
│   │   └── page.tsx        ← Add content here
│   │
│   └── projects/
│       ├── project4/page.tsx     ← Create & add content
│       ├── project5/page.tsx     ← Create & add content
│       └── ... (all 15 projects)
│
├── public/
│   └── images/              ← COPY ALL YOUR IMAGES HERE
│       ├── Congress.jpg
│       ├── formulation.png
│       ├── project4/
│       ├── project5/
│       └── img/
│
├── PAGE_TEMPLATE.tsx        ← Copy this for each page
├── package.json             ← Dependencies (READY)
├── next.config.js           ← Configuration (READY)
└── README.md                ← Documentation

```

## Tips for Success

1. **Start Small**: Do homepage images first, test
2. **One Page at a Time**: Complete formulation page, test, then next
3. **Save Often**: Commit to git after each page
4. **Test Frequently**: Run `npm run dev` to see changes
5. **Use Template**: Always start with PAGE_TEMPLATE.tsx

## Estimated Time

- **Images**: 30 minutes (copy/paste)
- **Main Pages (7)**: 2 hours (copy content + convert)
- **Project Pages (15)**: 3 hours (copy content + convert)
- **Testing**: 1 hour
- **Total**: ~6-7 hours of work

But you can do it in chunks! Do 2-3 pages per day.

## Need Help?

Check these files:
- `PROJECT_STATUS.md` - What's done and what's needed
- `CREATE_PAGES_GUIDE.md` - How to create pages
- `PAGE_TEMPLATE.tsx` - Template to copy

## You Got This! 🚀

Your content + Modern tech stack = Perfect site!

The structure is ready. Just add your content and deploy!

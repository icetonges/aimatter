# Adding Your Original Content & Images

This guide explains how to add all your original images, Tableau dashboards, and project content from budgetmatter.github.io to this new modern app.

## 📁 Folder Structure

```
aimatter/
├── public/
│   └── images/          # All your original images go here
│       ├── Accountingcycle.PNG
│       ├── Budgettype.PNG
│       ├── Congress.jpg
│       ├── Constitution.jpg
│       ├── DAU DoD Budget Cycle.png
│       ├── Federal Agencies.PNG
│       ├── budgetlaws.jpg
│       ├── formulation a.PNG
│       ├── enactment.PNG
│       ├── execution.PNG
│       └── ... (all other images)
│
└── app/
    ├── projects/        # Project portfolio pages
    │   ├── 4/page.tsx
    │   ├── 5/page.tsx
    │   ├── ...
    │   └── 15/page.tsx
    └── ...
```

## 🖼️ Step 1: Copy All Images

### From Your Original Repository:

1. **Navigate to your original budgetmatter.github.io folder**
   ```bash
   cd C:\Users\Peter-HP\budgetmatter.github.io
   ```

2. **Copy ALL images to the new public/images folder**
   ```bash
   # Copy all PNG files
   copy *.PNG C:\Users\Peter-HP\git\aimatter\public\images\

   # Copy all JPG files
   copy *.jpg C:\Users\Peter-HP\git\aimatter\public\images\

   # Copy all GIF files
   copy *.gif C:\Users\Peter-HP\git\aimatter\public\images\

   # Copy all PNG (lowercase) files
   copy *.png C:\Users\Peter-HP\git\aimatter\public\images\
   ```

### Images to Copy:

✅ **Budget Process Diagrams:**
- Accountingcycle.PNG
- Budgettype.PNG
- budgetprocessoverview.PNG
- budgettaryaccountingprocess.PNG
- budgettimelineDoD.PNG
- formulation.png
- formulation a.PNG through formulation a7.png
- enactment.PNG
- enactment 1.PNG
- congressenactdetail.PNG
- congressenactoverview.PNG
- congressenacttimeline.PNG
- execution.PNG
- executionoverview.PNG
- executionroles.png
- executionspending.jpg

✅ **Agency Images:**
- Federal Agencies.PNG
- Federal Agencies 1.PNG
- Federal Agencies 2.PNG
- dod.png
- doe.png
- doj.gif
- dol.gif
- dot.jpg

✅ **General Images:**
- Congress.jpg
- Congress1.jpg
- Constitution.jpg
- budgetlaws.jpg
- ComingSoon.jpg
- header0.jpg through header3.jpg
- favicon images

✅ **Other Diagrams:**
- DAU DoD Budget Cycle.png
- DAU DoD Budget Process Map.PNG
- DoD FM.PNG
- NASA Budget Process Map.png
- OMB Budget Schedule.PNG
- Federal Budget Process R Street.jpg
- federal_budget_process_graph_congress_appropriations2.jpg
- apportionmentschdule.png

## 📝 Step 2: Add Images to Pages

### Using Images in Next.js

Once images are in `public/images/`, reference them like this:

```tsx
// In any page component
<img 
  src="/aimatter/images/Accountingcycle.PNG" 
  alt="Accounting Cycle" 
  className="w-full rounded-lg shadow-lg"
/>
```

**Note:** The `/aimatter/` prefix is required because of the basePath configuration.

### Example: Adding to Formulation Page

Edit `/app/formulation/page.tsx`:

```tsx
{/* Add after the overview section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">
      Formulation Process Diagram
    </h2>
    <img 
      src="/aimatter/images/formulation.png" 
      alt="Budget Formulation Process" 
      className="w-full rounded-lg shadow-xl"
    />
  </div>
</section>
```

## 🎨 Step 3: Add Project Content

### For Each Project (4-15):

1. **Open the project folder** (e.g., `project10` in your original repo)
2. **Find the HTML file** (e.g., `index.html`)
3. **Copy the content text**
4. **Edit the corresponding page** in `app/projects/10/page.tsx`
5. **Paste content** and format it in React/TypeScript

### Example Template for Each Project:

Create similar pages for projects 4-14 following the pattern in `/app/projects/15/page.tsx`.

## 📊 Step 4: Embed Tableau Dashboards

### Option A: Tableau Public Embed

If you have dashboards on Tableau Public:

```tsx
<div className="tableau-container">
  <iframe 
    src="https://public.tableau.com/views/YourDashboard/Dashboard1?:embed=yes&:display_count=yes"
    width="100%"
    height="800px"
    frameBorder="0"
  />
</div>
```

### Option B: Screenshot Images

If using screenshots:

```tsx
<img 
  src="/aimatter/images/tableau-dashboard-15.png" 
  alt="Federal Budget Dashboard" 
  className="w-full rounded-lg shadow-xl border-2 border-gray-200"
/>
```

## 🔗 Step 5: Update Navigation Links

The navigation already includes:
- Home
- Formulation
- Enactment
- Execution
- **Projects** (NEW!)
- **Contact** (NEW!)
- About

All navigation is consistent across pages.

## 📄 Step 6: Add Sub-Pages from Original Site

Your original site had many sub-pages. Here's how to add them:

### Formulation Sub-Pages:
- f1_planning.html → /app/formulation/planning/page.tsx
- f2_guidance.html → /app/formulation/guidance/page.tsx
- f3_internal.html → /app/formulation/internal/page.tsx
- etc.

### Enactment Sub-Pages:
- e8_resolution.html → /app/enactment/resolution/page.tsx
- e9_authorization.html → /app/enactment/authorization/page.tsx
- e10_appropriation.html → /app/enactment/appropriation/page.tsx
- etc.

### Execution Sub-Pages:
- b16_apportionments.html → /app/execution/apportionments/page.tsx
- b17_report.html → /app/execution/report/page.tsx
- etc.

### Create Sub-Page Template:

```bash
mkdir app/formulation/planning
```

Then create `app/formulation/planning/page.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Planning() {
  return (
    <div>
      <Link href="/formulation">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Formulation
      </Link>
      
      <h1>Budget Planning</h1>
      {/* Add your original content here */}
    </div>
  )
}
```

## 🎯 Quick Checklist

### Images:
- [ ] Copy all .PNG files to public/images/
- [ ] Copy all .jpg files to public/images/
- [ ] Copy all .gif files to public/images/
- [ ] Verify images load in browser

### Projects:
- [ ] Review project 4 content and update page
- [ ] Review project 5 content and update page
- [ ] Review project 6 content and update page
- [ ] ... (continue for all projects)
- [ ] Add Tableau dashboard embeds or screenshots
- [ ] Test all project links work

### Sub-Pages:
- [ ] Create formulation sub-pages (f1-f7)
- [ ] Create enactment sub-pages (e8-e15)
- [ ] Create execution sub-pages (b16-b22)
- [ ] Add navigation between sub-pages

### Testing:
- [ ] All images load correctly
- [ ] All project pages work
- [ ] Navigation links work
- [ ] Mobile responsive
- [ ] Build succeeds: `npm run build`

## 💡 Tips

### Image Optimization:
Images in `public/images/` are served as-is. For better performance, consider:
- Compressing large images
- Converting to WebP format
- Using appropriate dimensions

### Content Organization:
- Keep original text content
- Update links to point to new routes
- Maintain your personal writing style
- Add more details where helpful

### Tableau Integration:
- Use Tableau Public for free hosting
- Or include high-quality screenshots
- Add links to live dashboards
- Include interactive features

## 🚀 After Adding Content

Once you've added your content:

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy to GitHub
git add .
git commit -m "Added all original content and images"
git push
```

## 📞 Need Help?

If you encounter issues:
1. Check file paths are correct
2. Verify images are in public/images/
3. Ensure all imports use correct case
4. Test build before deploying

---

Your original content is valuable! This modern framework will make it shine even more. 🌟

# How to Complete Your Pages

Each page template below has the structure ready. Just copy your HTML content and paste it into the marked sections.

## Template Structure

Every page follows this pattern:

```tsx
'use client'

import Link from 'next/link'

export default function PageName() {
  return (
    <div>
      {/* Navigation - SAME ON ALL PAGES */}
      
      {/* Hero Section - WITH YOUR IMAGE */}
      
      {/* Content Section - PASTE YOUR HTML CONTENT HERE */}
      
      {/* Footer - SAME ON ALL PAGES */}
    </div>
  )
}
```

## How to Add Content

### Example: Formulation Page

1. Open `budgetmatter.github.io/formulation.html` in browser
2. View source or inspect element
3. Find the main content section
4. Copy the text content
5. Open `app/formulation/page.tsx`
6. Paste into the content section
7. Convert HTML to JSX (className instead of class, etc.)

### Quick HTML to JSX Conversions

- `class=` → `className=`
- `<img src=` → `<img src="/aimatter/images/..."`
- Single tags: `<br>` → `<br />`
- Close all tags: `<img>` → `<img />`

## Pages to Complete

- [ ] app/formulation/page.tsx
- [ ] app/enactment/page.tsx
- [ ] app/execution/page.tsx
- [ ] app/process/page.tsx
- [ ] app/policy/page.tsx
- [ ] app/portfolio/page.tsx
- [ ] app/about/page.tsx

## Project Pages to Create

Create a folder for each project in `app/projects/`:

```
app/projects/
  ├── tableau-citibike/page.tsx
  ├── project4/page.tsx
  ├── project5/page.tsx
  ├── project6/page.tsx
  ├── project7/page.tsx
  ├── project8/page.tsx
  ├── project9/page.tsx
  ├── project10/page.tsx
  ├── project11/page.tsx
  ├── project12/page.tsx
  ├── project13/page.tsx
  ├── project14/page.tsx
  ├── project15/page.tsx
  ├── tableau-covid19/page.tsx
  └── tableau-federal-employment/page.tsx
```

Copy the project page template for each one!


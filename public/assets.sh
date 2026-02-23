#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# fix-public-assets.sh
# Run this ONCE from the repo root to rename problem files in /public/
# ─────────────────────────────────────────────────────────────────────────────

echo "🔧 Fixing public asset filenames..."

# 1. Rename "Spend Plan Demo.gif" (spaces in filename break URLs)
if [ -f "public/project7/Spend Plan Demo.gif" ]; then
  mv "public/project7/Spend Plan Demo.gif" "public/project7/spend-plan-demo.gif"
  echo "✅ Renamed: 'Spend Plan Demo.gif' → 'spend-plan-demo.gif'"
else
  echo "⚠️  Not found: public/project7/Spend Plan Demo.gif  (already renamed or missing)"
fi

# 2. Lowercase .JPG / .PNG extensions so they work reliably on Linux (Vercel)
#    macOS is case-insensitive; Linux (Vercel's runtime) is NOT.
echo ""
echo "🔧 Lowercasing .JPG / .PNG extensions..."

find public -name "*.JPG" | while read f; do
  mv "$f" "${f%.JPG}.jpg"
  echo "  renamed: $f → ${f%.JPG}.jpg"
done

find public -name "*.PNG" | while read f; do
  mv "$f" "${f%.PNG}.png"
  echo "  renamed: $f → ${f%.PNG}.png"
done

echo ""
echo "✅ Done! Update image paths in app/page.tsx to use lowercase extensions."
echo "   e.g., '/img/tableau-1-citibike.jpg'  (not .JPG)"

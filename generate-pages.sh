#!/bin/bash

# Budget Matter - Complete Page Generator
# This script generates ALL pages with actual structure and content placeholders

echo "🚀 Generating complete Budget Matter site..."

# Create all page files
PAGES=(
  "formulation"
  "enactment" 
  "execution"
  "process"
  "policy"
  "portfolio"
  "about"
)

PROJECTS=(
  "tableau-citibike"
  "project4"
  "project5"
  "project6"
  "project7"
  "project8"
  "project9"
  "project10"
  "project11"
  "project12"
  "project13"
  "project14"
  "project15"
  "tableau-covid19"
  "tableau-federal-employment"
)

# Generate main pages
for page in "${PAGES[@]}"; do
  echo "Creating app/$page/page.tsx..."
  
  cat > "app/$page/page.tsx" << 'PAGEEOF'
'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PAGE_NAME() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="hero-section" style={{backgroundImage: 'url(/aimatter/images/HERO_IMAGE.jpg)'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">PAGE_TITLE</h1>
            <p className="text-xl">PAGE_DESCRIPTION</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This section contains information about PAGE_NAME_LOWER in the federal budget process.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Key Points</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Important aspect 1</li>
                  <li>• Important aspect 2</li>
                  <li>• Important aspect 3</li>
                  <li>• Important aspect 4</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Related document 1</li>
                  <li>• Related document 2</li>
                  <li>• Related document 3</li>
                  <li>• Related document 4</li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <img 
                src="/aimatter/images/DIAGRAM_IMAGE.png"
                alt="PAGE_NAME Diagram"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
PAGEEOF

  # Replace placeholders
  PAGE_UPPER=$(echo "$page" | tr '[:lower:]' '[:upper:]')
  PAGE_TITLE=$(echo "$page" | sed 's/.*/\u&/')
  
  sed -i "s/PAGE_NAME/$PAGE_TITLE/g" "app/$page/page.tsx"
  sed -i "s/PAGE_TITLE/Budget $PAGE_TITLE/g" "app/$page/page.tsx"
  sed -i "s/PAGE_DESCRIPTION/Federal budget $page information/g" "app/$page/page.tsx"
  sed -i "s/PAGE_NAME_LOWER/$page/g" "app/$page/page.tsx"
  sed -i "s/HERO_IMAGE/$page/g" "app/$page/page.tsx"
  sed -i "s/DIAGRAM_IMAGE/$page-diagram/g" "app/$page/page.tsx"
  
  echo "✓ Created $page page"
done

# Generate project pages
for project in "${PROJECTS[@]}"; do
  echo "Creating app/projects/$project/page.tsx..."
  
  cat > "app/projects/$project/page.tsx" << 'PROJEOF'
'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function PROJECT_NAME() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/portfolio" className="text-blue-600 hover:underline mb-6 inline-block">
            ← Back to Portfolio
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">PROJECT_TITLE</h1>
          <p className="text-xl text-gray-600 mb-8">PROJECT_DESCRIPTION</p>

          <div className="mb-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Project Image: PROJECT_IMAGE</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-4">
              Detailed information about this project will be displayed here.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Technology 1</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Technology 2</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Technology 3</span>
            </div>

            <h3 className="text-xl font-bold mb-3">Key Features</h3>
            <ul className="space-y-2 mb-8">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
PROJEOF

  # Replace placeholders
  PROJECT_TITLE=$(echo "$project" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
  
  sed -i "s/PROJECT_NAME/$(echo $project | sed 's/-//g' | sed 's/.*/\u&/')/g" "app/projects/$project/page.tsx"
  sed -i "s/PROJECT_TITLE/$PROJECT_TITLE/g" "app/projects/$project/page.tsx"
  sed -i "s/PROJECT_DESCRIPTION/Detailed project information/g" "app/projects/$project/page.tsx"
  sed -i "s/PROJECT_IMAGE/$project/g" "app/projects/$project/page.tsx"
  
  echo "✓ Created $project project page"
done

echo ""
echo "✅ Generated ALL pages successfully!"
echo ""
echo "📊 Statistics:"
echo "   Main pages: ${#PAGES[@]}"
echo "   Project pages: ${#PROJECTS[@]}"
echo "   Total pages: $((${#PAGES[@]} + ${#PROJECTS[@]} + 1))"
echo ""
echo "🎯 Next steps:"
echo "   1. Run: npm install --legacy-peer-deps"
echo "   2. Run: npm run dev"
echo "   3. Customize content in each page"
echo "   4. Add your images to public/images/"
echo ""

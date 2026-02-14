#!/bin/bash

echo "🧪 Running AI Matter Tests & Checks..."
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js version
echo "📦 Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "Node version: $NODE_VERSION"
if [[ "$NODE_VERSION" < "v20" ]]; then
    echo -e "${RED}❌ Node.js 20+ required${NC}"
    exit 1
else
    echo -e "${GREEN}✅ Node.js version OK${NC}"
fi
echo ""

# Check if package.json exists
echo "📄 Checking package.json..."
if [ -f "package.json" ]; then
    echo -e "${GREEN}✅ package.json found${NC}"
else
    echo -e "${RED}❌ package.json not found${NC}"
    exit 1
fi
echo ""

# Check if node_modules exists
echo "📚 Checking dependencies..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✅ node_modules found${NC}"
else
    echo -e "${YELLOW}⚠️  node_modules not found, installing...${NC}"
    npm install
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Dependencies installed${NC}"
    else
        echo -e "${RED}❌ Failed to install dependencies${NC}"
        exit 1
    fi
fi
echo ""

# Type check
echo "🔍 Running TypeScript type check..."
npx tsc --noEmit
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ No TypeScript errors${NC}"
else
    echo -e "${RED}❌ TypeScript errors found${NC}"
    exit 1
fi
echo ""

# Build check
echo "🏗️  Testing production build..."
npm run build
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful${NC}"
    
    # Check if out directory was created
    if [ -d "out" ]; then
        echo -e "${GREEN}✅ Static files generated in 'out' directory${NC}"
        
        # Count HTML files
        HTML_COUNT=$(find out -name "*.html" | wc -l)
        echo "   Generated $HTML_COUNT HTML files"
    else
        echo -e "${RED}❌ 'out' directory not created${NC}"
        exit 1
    fi
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
echo ""

# Check required files
echo "📋 Checking required files..."
REQUIRED_FILES=(
    "next.config.js"
    "tsconfig.json"
    "tailwind.config.js"
    "postcss.config.js"
    "app/layout.tsx"
    "app/page.tsx"
    "app/globals.css"
    ".github/workflows/deploy.yml"
)

ALL_FILES_OK=true
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
    else
        echo -e "${RED}❌ $file not found${NC}"
        ALL_FILES_OK=false
    fi
done
echo ""

# Check required pages
echo "📄 Checking required pages..."
REQUIRED_PAGES=(
    "app/formulation/page.tsx"
    "app/enactment/page.tsx"
    "app/execution/page.tsx"
    "app/about/page.tsx"
)

for page in "${REQUIRED_PAGES[@]}"; do
    if [ -f "$page" ]; then
        echo -e "${GREEN}✅ $page${NC}"
    else
        echo -e "${RED}❌ $page not found${NC}"
        ALL_FILES_OK=false
    fi
done
echo ""

# Summary
echo "================================================"
if [ "$ALL_FILES_OK" = true ]; then
    echo -e "${GREEN}✅ All checks passed!${NC}"
    echo ""
    echo "🚀 Your app is ready to deploy!"
    echo ""
    echo "Next steps:"
    echo "1. git add ."
    echo "2. git commit -m 'Initial commit'"
    echo "3. git push origin main"
    echo ""
    echo "Your site will be live at:"
    echo "https://icetonges.github.io/aimatter/"
else
    echo -e "${RED}❌ Some checks failed${NC}"
    exit 1
fi
echo "================================================"

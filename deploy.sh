#!/usr/bin/env sh

# Exit immediately if any command fails
set -e

echo "🚀 Starting deployment for gaming_portfolio..."

# Ensure we are in repo root
if [ ! -f "vite.config.ts" ]; then
  echo "❌ Error: vite.config.ts not found. Run this script from the repo root."
  exit 1
fi

# Build the project
echo "📦 Building project..."
npm run build

# Replace docs folder
echo "🧹 Updating docs/ folder..."
rm -rf docs
mkdir docs
cp -r dist/* docs/

# Basic verification
if [ ! -f "docs/index.html" ]; then
  echo "❌ Build failed: docs/index.html not found."
  exit 1
fi

echo "✅ Build copied to docs/ successfully."

echo ""
echo "👉 Next steps:"
echo "1. Open GitHub Desktop"
echo "2. Commit changes in docs/"
echo "3. Push to main branch"
echo "4. Wait 1–3 minutes for GitHub Pages to update"
echo ""
echo "🌐 Live URL:"
echo "https://anirudhgkulkarni.github.io/gaming_portfolio/"

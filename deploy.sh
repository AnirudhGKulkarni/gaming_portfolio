#!/usr/bin/env bash

# Exit immediately if a command exits with an error
set -euo pipefail

echo "📦 Building the project..."
npm run build

cd dist

echo "⚙️ Creating .nojekyll to avoid ignoring files/folders starting with _"
touch .nojekyll

echo "🔧 Initializing Git in dist folder..."
git init
git checkout -b main
git add .
git commit -m "Deploy to GitHub Pages"

echo "🚀 Pushing to GitHub Pages repo..."
# Override the remote URL below if needed
REMOTE_REPO="${REMOTE_REPO:-https://github.com/AnirudhGKulkarni/anirudhgkulkarni.github.io.git}"
git remote add origin "$REMOTE_REPO"
git push -f origin main

cd ..

echo "✅ Deployed Successfully! Visit https://anirudhgkulkarni.github.io"

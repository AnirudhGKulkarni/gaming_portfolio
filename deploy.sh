#!/usr/bin/env bash

# Build and deploy to GitHub Pages as a project page under /gaming_portfolio/
# This script builds with the correct base and copies the output into `docs/` on `main`.

set -euo pipefail

BRANCH="${1:-main}"
REMOTE="${2:-origin}"
BASE="${BASE:-/gaming_portfolio/}"
COMMIT_MSG="chore: deploy docs (build with base ${BASE})"

echo "📦 Building the project with base=${BASE}..."
# Pass base via CLI to ensure build uses the project subpath regardless of vite.config
npm run build -- --base "$BASE"

BUILD_DIR="dist"
DOCS_DIR="docs"

if [ ! -d "$BUILD_DIR" ]; then
	echo "Build directory '$BUILD_DIR' not found. Exiting." >&2
	exit 1
fi

echo "🔁 Replacing '$DOCS_DIR' with built output..."
rm -rf "$DOCS_DIR"
mkdir -p "$DOCS_DIR"
cp -r "$BUILD_DIR"/. "$DOCS_DIR"/

echo "⚙️ Creating .nojekyll to avoid ignoring files/folders starting with _"
touch "$DOCS_DIR/.nojekyll"

echo "📁 Staging '$DOCS_DIR'..."
git add -A "$DOCS_DIR"

if git diff --staged --quiet; then
	echo "No changes detected in '$DOCS_DIR'. Nothing to commit."
else
	git commit -m "$COMMIT_MSG"
	echo "Pushing '$DOCS_DIR' to $REMOTE/$BRANCH..."
	git push "$REMOTE" "HEAD:$BRANCH"
	echo "✅ Deployed docs to $REMOTE/$BRANCH"
fi

echo "Done. If Pages is set to 'main /docs', visit: https://anirudhgkulkarni.github.io/gaming_portfolio/"

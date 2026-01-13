#!/usr/bin/env bash
set -euo pipefail

# Build and deploy the site to the repository root (for user-site: username.github.io)
# Usage: ./deploy_root.sh [branch] [remote]
# Defaults: branch=main remote=origin

BRANCH="${1:-main}"
REMOTE="${2:-origin}"
COMMIT_MSG="chore: deploy site to root"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm not found. Install Node.js/npm." >&2
  exit 1
fi

if ! command -v git >/dev/null 2>&1; then
  echo "git not found. Install git." >&2
  exit 1
fi

echo "Building project..."
npm run build

BUILD_DIR="dist"

if [ ! -d "$BUILD_DIR" ]; then
  echo "Build directory '$BUILD_DIR' not found. Exiting." >&2
  exit 1
fi

echo "Copying build output into repository root (will overwrite existing files)..."
cp -r "$BUILD_DIR"/. ./

echo "Staging all changes..."
git add -A

if git diff --cached --quiet; then
  echo "No changes detected. Nothing to commit."
else
  git commit -m "$COMMIT_MSG - $(date -u +'%Y-%m-%dT%H:%M:%SZ')"
  echo "Pushing to $REMOTE/$BRANCH..."
  git push "$REMOTE" "HEAD:$BRANCH"
  echo "Pushed root build to $REMOTE/$BRANCH"
fi

echo "Deployment to repository root complete."

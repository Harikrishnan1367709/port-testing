#!/bin/bash

set -e  # Exit immediately if a command fails

IMAGE_NAME="goosedeploy"

echo "🔍 Checking for .env file..."
if [ ! -f ".env" ]; then
  echo "❌ ERROR: .env file not found in project root!"
  echo "Please create a .env file before building."
  exit 1
fi

echo "✅ .env file found. Preview of contents:"
echo "-------------------------------------"
cat .env
echo "-------------------------------------"

echo "🚀 Building Docker image: $IMAGE_NAME"
docker build --no-cache -t $IMAGE_NAME .

echo "✅ Build complete!"
echo "➡️  Run with: docker run -p 3000:3000 $IMAGE_NAME"

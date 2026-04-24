#!/usr/bin/env bash
# Complete cleanup and restart script for React + Vite + Tailwind project

echo "🧹 Cleaning up caches and temporary files..."
rm -rf node_modules/.vite
rm -rf obj .next dist build

echo "🔧 Clearing Vite cache..."
rm -rf .vite

echo "📦 Verifying dependencies..."
pnpm list @tailwindcss/postcss tailwindcss postcss 2>/dev/null | head -20

echo "✅ Pre-flight checks complete!"
echo ""
echo "Next steps:"
echo "1. Run: pnpm run dev"
echo "2. Open browser to http://localhost:5173"
echo "3. Verify UI is centered and styled properly"
echo ""

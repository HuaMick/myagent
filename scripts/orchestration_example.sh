#!/bin/bash
# =============================================================================
# Orchestration Script Example
# =============================================================================
# This is an example of a complex orchestration script that performs multiple
# steps in sequence. It demonstrates how to handle environment setup, building,
# and testing with proper error handling.
#
# HOW TO INTEGRATE WITH PACKAGE.JSON:
# Add the following to your package.json scripts section:
#
# "scripts": {
#   "orchestrate": "./scripts/orchestration_example.sh"
# }
#
# Then run it with: npm run orchestrate -- arg1 arg2
# The -- is important as it passes all arguments after it to the script.
# =============================================================================

# Exit immediately if a command exits with a non-zero status
set -e

# Print commands before executing them (useful for debugging)
set -x

# ==== STEP 1: Environment Setup ====
echo "🔧 Setting up environment..."
# Create any necessary directories
mkdir -p .temp/build

# ==== STEP 2: Pre-build Validation ====
echo "✅ Validating source code..."
# Run linter to check for code issues
npm run lint

# ==== STEP 3: Build Process ====
echo "🔨 Building project..."
# Compile TypeScript code
npm run compile

# ==== STEP 4: Test Execution ====
echo "🧪 Running tests..."
# The $1 parameter represents the first argument passed to this script
# Example: ./scripts/orchestration_example.sh "MyTestPattern"
if [ -n "$1" ]; then
  echo "Running tests matching pattern: $1"
  npx vscode-test --grep "$1"
else
  echo "Running all tests"
  npm test
fi

# ==== STEP 5: Cleanup ====
echo "🧹 Cleaning up..."
# Remove temporary files
rm -rf .temp

echo "✨ Orchestration complete!" 
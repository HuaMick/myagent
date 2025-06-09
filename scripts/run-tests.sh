#!/bin/bash

# Script to run integration tests
# Usage: 
#   ./scripts/run-tests.sh                     # Run all tests
#   ./scripts/run-tests.sh <test-file-path>    # Run a specific test file
#   ./scripts/run-tests.sh --pattern "example" # Run tests matching a pattern

# Navigate to project root (assuming script is in scripts/ directory)
cd "$(dirname "$0")/.."

# Check if a specific test file or pattern was provided
if [ "$1" == "--pattern" ] && [ -n "$2" ]; then
  # Run tests matching a pattern
  echo "Running tests matching pattern: $2"
  npx vscode-test --pattern "src/tests/**/*$2*.test.ts"
elif [ -n "$1" ]; then
  # Run a specific test file
  echo "Running test file: $1"
  npx vscode-test --file "$1"
else
  # Run all tests
  echo "Running all tests..."
  npx vscode-test
fi

echo "Tests completed." 
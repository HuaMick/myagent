import * as assert from 'assert';
import * as vscode from 'vscode';
import { createMockDocument, createTestWorkspace } from './fixtures/vscode.fixture';

/**
 * Example test demonstrating how to use fixtures with Mocha
 */
describe('Fixtures Example Test', function() {
  // Setup test data using fixtures
  let mockDocument: vscode.TextDocument;
  let testWorkspace: vscode.WorkspaceFolder;
  
  before(function() {
    // Create test fixtures before tests run
    mockDocument = createMockDocument('const test = "Hello World";', 'typescript');
    testWorkspace = createTestWorkspace('/tmp/test-workspace');
    
    console.log('Test fixtures created');
  });
  
  // Test using the fixtures
  it('should have correct properties in mock document', function() {
    assert.strictEqual(mockDocument.languageId, 'typescript');
    assert.strictEqual(mockDocument.lineCount, 1);
    assert.strictEqual(mockDocument.getText(), 'const test = "Hello World";');
  });
  
  it('should have correct line information', function() {
    const line = mockDocument.lineAt(0);
    assert.strictEqual(line.text, 'const test = "Hello World";');
    assert.strictEqual(line.isEmptyOrWhitespace, false);
  });
  
  it('should have correct workspace folder properties', function() {
    assert.strictEqual(testWorkspace.name, 'Test Workspace');
    assert.strictEqual(testWorkspace.index, 0);
    assert.strictEqual(testWorkspace.uri.scheme, 'file');
  });
}); 
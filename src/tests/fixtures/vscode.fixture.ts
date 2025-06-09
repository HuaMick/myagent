import * as vscode from 'vscode';

/**
 * VSCode fixture for integration tests
 * Provides common VSCode objects and utilities for testing
 */

/**
 * Creates a workspace folder setup for testing
 * @param folderPath Path to use for the test workspace
 */
export function createTestWorkspace(folderPath: string): vscode.WorkspaceFolder {
  return {
    uri: vscode.Uri.file(folderPath),
    name: 'Test Workspace',
    index: 0
  };
}

/**
 * Creates a mock document for testing
 * @param content Document content
 * @param language Document language ID
 */
export function createMockDocument(content: string, language: string = 'typescript'): vscode.TextDocument {
  const uri = vscode.Uri.parse(`untitled:test-${Date.now()}.${language}`);
  
  // This is a mock that implements just enough of TextDocument interface for testing
  const mockDocument = {
    uri,
    fileName: uri.fsPath,
    isUntitled: true,
    languageId: language,
    version: 1,
    isDirty: false,
    isClosed: false,
    encoding: 'utf8',
    save: () => Promise.resolve(true),
    eol: vscode.EndOfLine.LF,
    lineCount: content.split('\n').length,
    lineAt: (line: number) => {
      const lines = content.split('\n');
      const text = lines[line];
      return {
        lineNumber: line,
        text,
        range: new vscode.Range(line, 0, line, text.length),
        rangeIncludingLineBreak: new vscode.Range(line, 0, line, text.length + 1),
        firstNonWhitespaceCharacterIndex: text.search(/\S/),
        isEmptyOrWhitespace: text.trim().length === 0
      };
    },
    getText: () => content,
    getWordRangeAtPosition: () => undefined,
    positionAt: () => new vscode.Position(0, 0),
    offsetAt: () => 0,
    validateRange: (range: vscode.Range) => range,
    validatePosition: (position: vscode.Position) => position
  };
  
  return mockDocument as unknown as vscode.TextDocument;
} 
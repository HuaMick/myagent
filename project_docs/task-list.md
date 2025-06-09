# Task List: PRD Generator Extension

This document breaks down the work required to build the PRD Generator extension, as specified in the `prd.md`.

## Functions

-   **`getConfig()`**
    -   description: Reads and validates the `myagent.config.json` file from the workspace root.
    -   parameters: none
    -   returns: `Promise<Config | null>` - A configuration object or null if not found/invalid.
-   **`readFileContent(filePath: string)`**
    -   description: Reads the text content of a file at a given path.
    -   parameters: `filePath` (string)
    -   returns: `Promise<string>`
-   **`callApi(requirementsContent: string, instructionsContent: string)`**
    -   description: Mocks the API call to the backend, returning a hardcoded PRD content string.
    -   parameters: `requirementsContent` (string), `instructionsContent` (string)
    -   returns: `Promise<{ prd_content: string }>`
-   **`saveFile(filePath: string, content: string)`**
    -   description: Saves content to a specified file path, creating it if it doesn't exist or overwriting it if it does.
    -   parameters: `filePath` (string), `content` (string)
    -   returns: `Promise<void>`
-   **`showInformationMessage(message: string)`**
    -   description: A thin wrapper around the VS Code `showInformationMessage` API to display a non-blocking message to the user.
    -   parameters: `message` (string)
    -   returns: `void`
-   **`showErrorMessage(message: string)`**
    -   description: A thin wrapper around the VS Code `showErrorMessage` API to display an error message to the user.
    -   parameters: `message` (string)
    -   returns: `void`

## Milestones

-   [ ] **1. Project Setup & Configuration**
    -   [x] 1.0 **Task:** Initialize a new TypeScript VS Code extension project.
    -   [ ] 1.1 **Task:** Create the `myagent.config.json` file in the root with `inputFile`, `instructionsFile`, and `outputFile` keys.
    -   [ ] 1.2 **Node: `Configuration Handling`** - Implement the logic for reading and validating the config file.
        -   [ ] 1.2.0 **Function:** Implement `getConfig()` to read and parse `myagent.config.json`.
        -   [ ] 1.2.1 **Function:** Leverage `showErrorMessage()` within `getConfig` to inform the user of errors.

-   [ ] **2. Core Application Logic**
    -   [ ] 2.0 **Node: `PRD Generation Orchestrator`** - The main node that runs the end-to-end process when the user executes the command.
        -   [ ] 2.0.0 **Function:** Implement `readFileContent(filePath)` to read the input files.
        -   [ ] 2.0.1 **Function:** Implement `saveFile(filePath, content)` to write the output file.
        -   [ ] 2.0.2 **Function:** Implement the UI feedback functions `showInformationMessage()` and `showErrorMessage()`.
        -   [ ] 2.0.3 **Leverage:** Use `getConfig()` to get file paths.
        -   [ ] 2.0.4 **Leverage:** Call `readFileContent()` twice for the two input files.
        -   [ ] 2.0.5 **Leverage:** Call `saveFile()` to store the result.
        -   [ ] 2.0.6 **Leverage:** Use `showInformationMessage()` on success and `showErrorMessage()` on failure.

-   [ ] **3. API Integration (Mocked)**
    -   [ ] 3.0 **Task:** Define the structure of the mocked API response.
        > ⚠️ **TBC:** The exact structure of the JSON payload for the request needs to be finalized (e.g., `{"requirements_content": "...", "instructions_content": "..."}`). We will proceed with this structure for the mock.
    -   [ ] 3.1 **Node: `API Interaction`** - Implement the mocked API call.
        -   [ ] 3.1.0 **Function:** Implement `callApi()` to return a hardcoded, structured PRD string. This function will simulate the network request.
        -   [ ] 3.1.1 **Leverage:** The `PRD Generation Orchestrator` node will call this function after reading the input files.

-   [ ] **4. Final Extension Integration**
    -   [ ] 4.0 **Task:** Register the command (e.g., `myagent.generatePrd`) in `package.json`.
    -   [ ] 4.1 **Task:** In the main `extension.ts` file, link the registered command to the `PRD Generation Orchestrator` node.
    -   [ ] 4.2 **Task:** Perform a final end-to-end test of the command within the VS Code development host. 
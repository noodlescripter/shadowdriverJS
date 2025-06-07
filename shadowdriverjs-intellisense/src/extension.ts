import * as vscode from 'vscode';

import element_commands from './element_commands';
import browser_commands from './browser_commands';
import by_commands from './by_commands';

// Define the completion items for ShadowdriverJS
// const browserCompletions = [
//     {
//         label: 'get',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Navigates to URL',
//         documentation: 'Navigates to the specified URL',
//         insertText: 'get("${1:url}")',
//         insertTextFormat: 2
//     },
//     {
//         label: 'sleep',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Waits for specified milliseconds',
//         documentation: 'Pauses execution for the specified number of milliseconds',
//         insertText: 'sleep(${1:milliseconds})',
//         insertTextFormat: 2
//     },
//     {
//         label: 'actions',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Returns action sequence',
//         documentation: 'Creates a new action sequence for complex interactions',
//         insertText: 'actions()',
//         insertTextFormat: 2
//     },
//     {
//         label: 'getTitle',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Gets the page title',
//         documentation: 'Returns the title of the current page',
//         insertText: 'getTitle()',
//         insertTextFormat: 2
//     },
//     {
//         label: 'getUrl',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Gets the current URL',
//         documentation: 'Returns the URL of the current page',
//         insertText: 'getUrl()',
//         insertTextFormat: 2
//     },
//     {
//         label: 'getPageSource',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Gets the page source',
//         documentation: 'Returns the HTML source of the current page',
//         insertText: 'getPageSource()',
//         insertTextFormat: 2
//     }
// ];

const browser_completions = browser_commands.map(command => ({
    label: command.label,
    kind: vscode.CompletionItemKind.Method,
    detail: command.detail,
    documentation: command.documentation,
    insertText: `${command.label}()`,
    insertTextFormat: 2
}));

const element_completions = element_commands.map(command => ({
    label: command.label,
    kind: vscode.CompletionItemKind.Method,
    detail: command.detail,
    documentation: command.documentation,
    insertText: `${command.label}()`,
    insertTextFormat: 2
}));




// const elementCompletions = [
//     {
//         label: 'sendKeys',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Sends keys to the element',
//         documentation: 'Types the specified text into the element',
//         insertText: 'sendKeys("${1:text}")',
//         insertTextFormat: 2
//     },
//     {
//         label: 'click',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Clicks the element',
//         documentation: 'Clicks the element',
//         insertText: 'click()',
//         insertTextFormat: 2
//     },
//     {
//         label: 'getText',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Gets the element\'s text',
//         documentation: 'Returns the text content of the element',
//         insertText: 'getText()',
//         insertTextFormat: 2
//     },
//     {
//         label: 'getAttribute',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Gets the element\'s attribute',
//         documentation: 'Returns the value of the specified attribute',
//         insertText: 'getAttribute("${1:attribute}")',
//         insertTextFormat: 2
//     },
//     {
//         label: 'getAttribute',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Gets the element\'s attribute value',
//         documentation: 'Returns the value of the specified attribute',
//         insertText: 'getAttribute("${1:attribute}")'
//     }
// ];

// const byCompletions = [
//     {
//         label: 'css',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Locates by CSS selector',
//         documentation: 'Finds element using CSS selector',
//         insertText: 'css("${1:selector}")',
//         insertTextFormat: 2
//     },
//     {
//         label: 'xpath',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Locates by XPath',
//         documentation: 'Finds element using XPath',
//         insertText: 'xpath("${1:xpath}")',
//         insertTextFormat: 2
//     },
//     {
//         label: 'id',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Locates by ID',
//         documentation: 'Finds element by ID',
//         insertText: 'id("${1:id}")',
//         insertTextFormat: 2
//     },
//     {
//         label: 'text',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Locates by Text',
//         documentation: 'Finds element using Text',
//         insertText: 'text("${1:text}")',
//         insertTextFormat: 2
//     },
//     {
//         label: 'linkText',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Locates by Link Text',
//         documentation: 'Finds element using Link Text',
//         insertText: 'linkText("${1:text}")',
//         insertTextFormat: 2
//     },
//     {
//         label: 'partialText',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Locates by Partial Text',
//         documentation: 'Finds element using Partial Text',
//         insertText: 'partialText("${1:text}")',
//         insertTextFormat: 2
//     },
//     {
//         label: 'buttonText',
//         kind: vscode.CompletionItemKind.Method,
//         detail: 'Locates by Button Text',
//         documentation: 'Finds element using Button Text',
//         insertText: 'buttonText("${1:text}")',
//         insertTextFormat: 2
//     }
// ];

const keyCompletions = [
    {
        label: 'Shift',
        kind: vscode.CompletionItemKind.Constant,
        detail: 'Shift key',
        documentation: 'Represents the Shift key'
    },
    {
        label: 'Control',
        kind: vscode.CompletionItemKind.Constant,
        detail: 'Control key',
        documentation: 'Represents the Control key'
    },
    {
        label: 'Enter',
        kind: vscode.CompletionItemKind.Constant,
        detail: 'Enter key',
        documentation: 'Represents the Enter key'
    }
];

export function activate(context: vscode.ExtensionContext) {
    // Register completion provider
    const provider = vscode.languages.registerCompletionItemProvider(
        ['javascript', 'typescript'],
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                const linePrefix = document.lineAt(position).text.substr(0, position.character);

                // Check if we're completing after 'browser.'
                if (linePrefix.endsWith('browser.')) {
                    return browser_completions.map(item => {
                        const completion = new vscode.CompletionItem(item.label, item.kind);
                        completion.detail = item.detail;
                        completion.documentation = new vscode.MarkdownString(item.documentation);
                        completion.insertText = new vscode.SnippetString(item.insertText);
                        return completion;
                    });
                }

                // Check if we're completing after 'element(by.'
                if (linePrefix.endsWith('by.')) {
                    return by_commands.map(item => {
                        const completion = new vscode.CompletionItem(item.label, vscode.CompletionItemKind.Method);
                        completion.detail = item.detail;
                        completion.documentation = new vscode.MarkdownString(item.documentation);
                        completion.insertText = new vscode.SnippetString(item.insertText);
                        return completion;
                    });
                }

                // Check if we're completing after 'element('
                if (linePrefix.endsWith('element')) {
                    return by_commands.map(item => {
                        const completion = new vscode.CompletionItem(item.label, vscode.CompletionItemKind.Method);
                        completion.detail = item.detail;
                        completion.documentation = new vscode.MarkdownString(item.documentation);
                        completion.insertText = new vscode.SnippetString(item.insertText);
                        return completion;
                    });
                }

                // Check if we're completing after 'key.'
                if (linePrefix.endsWith('key.')) {
                    return keyCompletions.map(item => {
                        const completion = new vscode.CompletionItem(item.label, item.kind);
                        completion.detail = item.detail;
                        completion.documentation = new vscode.MarkdownString(item.documentation);
                        return completion;
                    });
                }

                // Check if we're completing after an element method
                if (linePrefix.match(/\.\s*$/)) {
                    return element_completions.map(item => {
                        const completion = new vscode.CompletionItem(item.label, item.kind);
                        completion.detail = item.detail;
                        completion.documentation = new vscode.MarkdownString(item.documentation);
                        completion.insertText = new vscode.SnippetString(item.insertText);
                        return completion;
                    });
                }

                return undefined;
            }
        },
        '.', // Trigger completion on dot
        '('  // Trigger completion on parenthesis
    );

    context.subscriptions.push(provider);
}

export function deactivate() { } 
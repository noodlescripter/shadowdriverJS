const byCompletions = [
    {
        label: 'css',

        detail: 'Locates by CSS selector',
        documentation: 'Finds element using CSS selector',
        insertText: 'css("${1:selector}")',
        insertTextFormat: 2
    },
    {
        label: 'xpath',

        detail: 'Locates by XPath',
        documentation: 'Finds element using XPath',
        insertText: 'xpath("${1:xpath}")',
        insertTextFormat: 2
    },
    {
        label: 'id',

        detail: 'Locates by ID',
        documentation: 'Finds element by ID',
        insertText: 'id("${1:id}")',
        insertTextFormat: 2
    },
    {
        label: 'text',

        detail: 'Locates by Text',
        documentation: 'Finds element using Text',
        insertText: 'text("${1:text}")',
        insertTextFormat: 2
    },
    {
        label: 'linkText',

        detail: 'Locates by Link Text',
        documentation: 'Finds element using Link Text',
        insertText: 'linkText("${1:text}")',
        insertTextFormat: 2
    },
    {
        label: 'partialText',

        detail: 'Locates by Partial Text',
        documentation: 'Finds element using Partial Text',
        insertText: 'partialText("${1:text}")',
        insertTextFormat: 2
    },
    {
        label: 'buttonText',

        detail: 'Locates by Button Text',
        documentation: 'Finds element using Button Text',
        insertText: 'buttonText("${1:text}")',
        insertTextFormat: 2
    }
];

export default byCompletions;
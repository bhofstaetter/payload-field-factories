# Payload Field Factories

Opinionated factory functions for Payload CMS field configurations. Type-safe, concise, and composable.

## Installation

```bash
npm install payload-field-factories
```

## Usage

```ts
import {textField, groupField, tabsField, tab} from 'payload-field-factories';

const fields = [
    textField('title', {required: true, localized: true}),
    textField('tags', {hasMany: true}),
    relationshipField('author', 'users'),
    dateField('publishedAt'),
    groupField('address', [
        textField('street'),
        textField('city'),
    ]),
    tabsField([
        tab('Content', [richTextField('body')]),
        tab('meta', 'Meta', [textField('slug')]),  // named tab
    ]),
];
```

Every factory takes its required args and an optional `overrides` object as the last argument. The override type is
derived from the Payload field type with required args omitted, giving you full type safety and autocompletion.

## Available factories

`textField` `textareaField` `emailField` `numberField` `checkboxField` `dateField` `codeField` `jsonField`
`richTextField` `pointField` `radioField` `selectField` `uploadField` `relationshipField` `joinField` `arrayField`
`blocksField` `rowField` `groupField` `collapsibleField` `tabsField` `tab` `uiField`

## License

MIT

## Todo

- [ ] Github Actions

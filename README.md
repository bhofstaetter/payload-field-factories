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
        tab('content', [richTextField('body')]),    // named tab
        tab({en: 'Meta'}, [textField('slug')]),      // unnamed tab
    ]),
];
```

The override type is derived from the Payload field type with required args omitted, giving you full type safety and
autocompletion. There are two calling patterns:

**Fields identified by just a name** take the name as their only required argument, followed by an optional `overrides`
object:

```ts
textField('title', {required: true, localized: true});
numberField('price');
```

**Fields that also need child fields or options** take that content as their second argument (or as the only argument
for `rowField`, `tabsField`, and unnamed `groupField`). Pass it directly as a shortcut, or pass an object with the
content plus `overrides` when you need to tweak the field:

```ts
// array — name + fields
arrayField('items', [textField('label')]);
arrayField('items', {fields: [textField('label')], overrides: {minRows: 1}});

// blocks — name + block references
blocksField('content', ['hero', 'cta']);
blocksField('content', {blockReferences: ['hero', 'cta'], overrides: {minRows: 1}});

// radio — name + options
radioField('size', ['sm', 'md', 'lg']);
radioField('size', {options: ['sm', 'md', 'lg'], overrides: {defaultValue: 'md'}});

// select — name + options
selectField('status', ['draft', 'published']);
selectField('tags', {options: ['news', 'blog'], overrides: {hasMany: true}});

// group — name + fields (name optional)
groupField('address', [textField('street'), textField('city')]);
groupField('address', {fields: [textField('street')], overrides: {localized: true}});
groupField([textField('street')]); // unnamed

// ui — name + components
uiField('preview', {Field: '/components/Preview'});
uiField('preview', {components: {Field: '/components/Preview'}, overrides: {admin: {position: 'sidebar'}}});

// collapsible — label + fields
collapsibleField('Advanced', [textField('slug')]);
collapsibleField('Advanced', {fields: [textField('slug')], overrides: {admin: {initCollapsed: true}}});

// row — fields only
rowField([textField('firstName'), textField('lastName')]);
rowField({fields: [textField('firstName'), textField('lastName')], overrides: {admin: {readOnly: true}}});

// tabs — tabs only
tabsField([tab('content', [richTextField('body')])]);
tabsField({tabs: [tab('content', [richTextField('body')])], overrides: {label: 'Sections'}});

// tab — name + fields (named, label goes in overrides) or label + fields (unnamed)
tab('content', [richTextField('body')]);
tab('content', {fields: [richTextField('body')], overrides: {label: 'Content'}});
tab({en: 'Meta', de: 'Meta'}, [textField('slug')]); // unnamed
```

## Available factories

`textField` `textareaField` `emailField` `numberField` `checkboxField` `dateField` `codeField` `jsonField`
`richTextField` `pointField` `radioField` `selectField` `uploadField` `relationshipField` `joinField` `arrayField`
`blocksField` `rowField` `groupField` `collapsibleField` `tabsField` `tab` `uiField`

## License

MIT

## Todo

- [ ] Github Actions

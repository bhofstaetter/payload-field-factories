import {expect, it} from 'vitest';
import {groupField} from '@/groupField';

it('creates a named group field', () => {
    const fields = [{type: 'text' as const, name: 'title'}];
    const result = groupField('settings', fields);

    expect(result).toEqual({type: 'group', name: 'settings', fields});
});

it('creates a named group field with overrides', () => {
    const fields = [{type: 'text' as const, name: 'title'}];
    const result = groupField('settings', {fields, overrides: {label: 'Settings'}});

    expect(result).toEqual({type: 'group', name: 'settings', fields, label: 'Settings'});
});

it('creates an unnamed group field', () => {
    const fields = [{type: 'text' as const, name: 'title'}];
    const result = groupField(fields);

    expect(result).toEqual({type: 'group', fields});
});

it('creates an unnamed group field with overrides', () => {
    const fields = [{type: 'text' as const, name: 'title'}];
    const result = groupField({fields, overrides: {label: {en: 'Content', de: 'Inhalt'}}});

    expect(result).toEqual({type: 'group', fields, label: {en: 'Content', de: 'Inhalt'}});
});

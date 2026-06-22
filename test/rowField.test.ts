import {expect, it} from 'vitest';
import {rowField} from '@/rowField';

it('creates a row field from a fields shortcut', () => {
    const fields = [{type: 'text' as const, name: 'firstName'}];
    const result = rowField(fields);

    expect(result).toEqual({type: 'row', fields});
});

it('creates a row field with overrides', () => {
    const fields = [{type: 'text' as const, name: 'firstName'}];
    const result = rowField({fields, overrides: {admin: {readOnly: true}}});

    expect(result).toEqual({type: 'row', fields, admin: {readOnly: true}});
});

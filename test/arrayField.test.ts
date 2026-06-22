import {expect, it} from 'vitest';
import {arrayField} from '@/arrayField';

it('creates an array field from a fields shortcut', () => {
    const fields = [{type: 'text' as const, name: 'label'}];
    const result = arrayField('items', fields);

    expect(result).toEqual({type: 'array', name: 'items', fields});
});

it('creates an array field with overrides', () => {
    const fields = [{type: 'text' as const, name: 'label'}];
    const result = arrayField('items', {fields, overrides: {minRows: 1, maxRows: 10}});

    expect(result).toEqual({type: 'array', name: 'items', fields, minRows: 1, maxRows: 10});
});

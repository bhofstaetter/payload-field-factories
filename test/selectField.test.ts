import {expect, it} from 'vitest';
import {selectField} from '@/selectField';

it('creates a single select field from an options shortcut', () => {
    const result = selectField('status', ['draft', 'published']);

    expect(result).toEqual({type: 'select', name: 'status', options: ['draft', 'published']});
});

it('creates a single select field with overrides', () => {
    const result = selectField('status', {options: ['draft', 'published'], overrides: {defaultValue: 'draft'}});

    expect(result).toEqual({type: 'select', name: 'status', options: ['draft', 'published'], defaultValue: 'draft'});
});

it('creates a hasMany select field', () => {
    const result = selectField('tags', {options: ['a', 'b'], overrides: {hasMany: true}});

    expect(result).toEqual({type: 'select', name: 'tags', options: ['a', 'b'], hasMany: true});
});

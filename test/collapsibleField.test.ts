import {expect, it} from 'vitest';
import {collapsibleField} from '@/collapsibleField';

it('creates a collapsible field from a fields shortcut', () => {
    const fields = [{type: 'text' as const, name: 'slug'}];
    const result = collapsibleField('Advanced', fields);

    expect(result).toEqual({type: 'collapsible', label: 'Advanced', fields});
});

it('creates a collapsible field with overrides', () => {
    const fields = [{type: 'text' as const, name: 'slug'}];
    const result = collapsibleField('Advanced', {fields, overrides: {admin: {initCollapsed: true}}});

    expect(result).toEqual({type: 'collapsible', label: 'Advanced', fields, admin: {initCollapsed: true}});
});

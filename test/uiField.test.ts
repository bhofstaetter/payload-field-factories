import {expect, it} from 'vitest';
import {uiField} from '@/uiField';

it('creates a ui field from a components shortcut', () => {
    const result = uiField('preview', {Field: '/components/Preview'});

    expect(result).toEqual({
        type: 'ui',
        name: 'preview',
        admin: {components: {Field: '/components/Preview'}},
    });
});

it('creates a ui field with overrides and merges admin', () => {
    const result = uiField('preview', {
        components: {Field: '/components/Preview'},
        overrides: {admin: {position: 'sidebar'}},
    });

    expect(result).toEqual({
        type: 'ui',
        name: 'preview',
        admin: {components: {Field: '/components/Preview'}, position: 'sidebar'},
    });
});

import {expect, it} from 'vitest';
import {radioField} from '@/radioField';

it('creates a radio field from an options shortcut', () => {
    const result = radioField('size', ['sm', 'md', 'lg']);

    expect(result).toEqual({type: 'radio', name: 'size', options: ['sm', 'md', 'lg']});
});

it('creates a radio field with overrides', () => {
    const result = radioField('size', {options: ['sm', 'md'], overrides: {defaultValue: 'sm'}});

    expect(result).toEqual({type: 'radio', name: 'size', options: ['sm', 'md'], defaultValue: 'sm'});
});

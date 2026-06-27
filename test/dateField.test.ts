import {expect, it} from 'vitest';
import {dateField} from '@/dateField';

it('creates a date-only field with default picker config', () => {
    const result = dateField('publishedAt');

    expect(result).toEqual({
        type: 'date',
        name: 'publishedAt',
        admin: {
            date: {
                pickerAppearance: 'dayOnly',
                displayFormat: 'dd.MM.yyyy',
            },
        },
    });
});

it('merges date overrides over the defaults', () => {
    const result = dateField('publishedAt', {admin: {date: {displayFormat: 'yyyy-MM-dd'}}});

    expect(result).toEqual({
        type: 'date',
        name: 'publishedAt',
        admin: {
            date: {
                pickerAppearance: 'dayOnly',
                displayFormat: 'yyyy-MM-dd',
            },
        },
    });
});

it('keeps other admin and top-level overrides', () => {
    const result = dateField('publishedAt', {required: true, admin: {position: 'sidebar'}});

    expect(result).toEqual({
        type: 'date',
        name: 'publishedAt',
        required: true,
        admin: {
            date: {
                pickerAppearance: 'dayOnly',
                displayFormat: 'dd.MM.yyyy',
            },
            position: 'sidebar',
        },
    });
});

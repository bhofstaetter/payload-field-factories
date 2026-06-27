import {expect, it} from 'vitest';
import {timeField} from '@/timeField';

it('creates a time-only field with default picker config', () => {
    const result = timeField('opensAt');

    expect(result).toEqual({
        type: 'date',
        name: 'opensAt',
        admin: {
            date: {
                pickerAppearance: 'timeOnly',
                displayFormat: 'HH:mm',
                timeFormat: 'HH:mm',
                timeIntervals: 5,
            },
        },
    });
});

it('merges date overrides over the defaults', () => {
    const result = timeField('opensAt', {admin: {date: {timeFormat: 'HH:mm:ss', timeIntervals: 1}}});

    expect(result).toEqual({
        type: 'date',
        name: 'opensAt',
        admin: {
            date: {
                pickerAppearance: 'timeOnly',
                displayFormat: 'HH:mm',
                timeFormat: 'HH:mm:ss',
                timeIntervals: 1,
            },
        },
    });
});

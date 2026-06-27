import {expect, it} from 'vitest';
import {dateTimeField} from '@/dateTimeField';

it('creates a date-and-time field with default picker config', () => {
    const result = dateTimeField('startsAt');

    expect(result).toEqual({
        type: 'date',
        name: 'startsAt',
        admin: {
            date: {
                pickerAppearance: 'dayAndTime',
                displayFormat: 'dd.MM.yyyy HH:mm',
                timeFormat: 'HH:mm',
                timeIntervals: 5,
            },
        },
    });
});

it('merges date overrides over the defaults', () => {
    const result = dateTimeField('startsAt', {admin: {date: {timeIntervals: 15}}});

    expect(result).toEqual({
        type: 'date',
        name: 'startsAt',
        admin: {
            date: {
                pickerAppearance: 'dayAndTime',
                displayFormat: 'dd.MM.yyyy HH:mm',
                timeFormat: 'HH:mm',
                timeIntervals: 15,
            },
        },
    });
});

import type {DateField} from 'payload';

type Overrides = Partial<Omit<DateField, 'type' | 'name'>>;

export function dateField(name: string, overrides: Overrides = {}): DateField {
    const {admin, ...otherOverrides} = overrides;
    const {date, ...otherAdmin} = admin ?? {};

    return {
        type: 'date',
        name,
        admin: {
            date: {
                pickerAppearance: 'dayAndTime',
                displayFormat: 'dd.MM.yyyy HH:mm',
                timeFormat: 'HH:mm',
                timeIntervals: 5,
                ...date,
            },
            ...otherAdmin,
        },
        ...otherOverrides,
    } as DateField;
}

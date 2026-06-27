import type {DateField} from 'payload';

type DateConfig = NonNullable<NonNullable<DateField['admin']>['date']>;
type Overrides = Partial<Omit<DateField, 'type' | 'name' | 'admin'>> & {
    admin?: Omit<NonNullable<DateField['admin']>, 'date'> & {date?: DateConfig & {pickerAppearance?: never}};
};

export function dateTimeField(name: string, overrides: Overrides = {}): DateField {
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

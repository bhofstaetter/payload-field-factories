import type {RadioField} from 'payload';

type Overrides = Partial<Omit<RadioField, 'type' | 'name' | 'options'>>;
type Options = RadioField['options'];

type Args = {
    options: Options;
    overrides?: Overrides;
};

export function radioField(name: string, argsOrOptions: Args | Options): RadioField {
    const {options, overrides = {}} = Array.isArray(argsOrOptions) ? {options: argsOrOptions} : argsOrOptions;

    return {
        type: 'radio',
        name,
        options,
        ...overrides,
    } as RadioField;
}

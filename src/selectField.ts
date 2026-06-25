import type {SelectField} from 'payload';

type SelectFieldSingle = Extract<SelectField, {hasMany?: false | undefined}>;
type SelectFieldMany = Extract<SelectField, {hasMany: true}>;

type OverridesSingle = Partial<Omit<SelectFieldSingle, 'type' | 'name' | 'options'>>;
type OverridesMany = Partial<Omit<SelectFieldMany, 'type' | 'name' | 'options'>>;
type Overrides = OverridesSingle | OverridesMany;

type Options = SelectField['options'];

type ArgsMany = {options: Options; overrides: OverridesMany & {hasMany: true}};
type ArgsSingle = {options: Options; overrides?: OverridesSingle};
type ArgsAny = {options: Options; overrides?: Overrides};

export function selectField(name: string, args: ArgsMany): SelectFieldMany;
export function selectField(name: string, args: ArgsSingle | Options): SelectFieldSingle;
export function selectField(name: string, args: ArgsAny | Options): SelectField;
export function selectField(name: string, argsOrOptions: ArgsAny | Options): SelectField {
    const {options, overrides = {}} = Array.isArray(argsOrOptions) ? {options: argsOrOptions} : argsOrOptions;

    return {
        type: 'select',
        name,
        options,
        ...overrides,
    } as SelectField;
}

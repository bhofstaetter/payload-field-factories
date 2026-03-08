import type {NumberField} from 'payload';

type NumberFieldSingle = Extract<NumberField, {hasMany?: false | undefined}>;
type NumberFieldMany = Extract<NumberField, {hasMany: true}>;

type OverridesSingle = Partial<Omit<NumberFieldSingle, 'type' | 'name'>>;
type OverridesMany = Partial<Omit<NumberFieldMany, 'type' | 'name' | 'hasMany'>> & {hasMany: true};

export function numberField(name: string, overrides: OverridesMany): NumberFieldMany;
export function numberField(name: string, overrides?: OverridesSingle): NumberFieldSingle;
export function numberField(name: string, overrides: OverridesMany | OverridesSingle = {}): NumberField {
    return {
        type: 'number',
        name,
        ...overrides,
    } as NumberField;
}

import type {RelationshipField} from 'payload';

type RelationshipFieldSingle = Extract<RelationshipField, {hasMany?: false | undefined}>;
type RelationshipFieldMany = Extract<RelationshipField, {hasMany: true}>;

type OverridesSingle = Partial<Omit<RelationshipFieldSingle, 'type' | 'name' | 'relationTo'>>;
type OverridesMany = Partial<Omit<RelationshipFieldMany, 'type' | 'name' | 'relationTo'>>;
type Overrides = OverridesSingle | OverridesMany;

type RelationTo = RelationshipField['relationTo'];

export function relationshipField(
    name: string,
    relationTo: RelationTo,
    overrides: OverridesMany & {hasMany: true},
): RelationshipFieldMany;
export function relationshipField(
    name: string,
    relationTo: RelationTo,
    overrides?: OverridesSingle,
): RelationshipFieldSingle;
export function relationshipField(name: string, relationTo: RelationTo, overrides: Overrides): RelationshipField;
export function relationshipField(name: string, relationTo: RelationTo, overrides: Overrides = {}): RelationshipField {
    return {
        type: 'relationship',
        name,
        relationTo,
        ...overrides,
    } as RelationshipField;
}

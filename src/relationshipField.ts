import type {RelationshipField} from 'payload';

type RelationshipFieldSingle = Extract<RelationshipField, {hasMany?: false | undefined}>;
type RelationshipFieldMany = Extract<RelationshipField, {hasMany: true}>;

type OverridesSingle = Partial<Omit<RelationshipFieldSingle, 'type' | 'name'>>;
type OverridesMany = Partial<Omit<RelationshipFieldMany, 'type' | 'name' | 'hasMany'>> & {hasMany: true};

type RelationToSingle = RelationshipFieldSingle['relationTo'];
type RelationToMany = RelationshipFieldMany['relationTo'];

export function relationshipField(
    name: string,
    relationTo: RelationToSingle,
    overrides: OverridesMany,
): RelationshipFieldMany;
export function relationshipField(
    name: string,
    relationTo: RelationToSingle,
    overrides?: OverridesSingle,
): RelationshipFieldSingle;
export function relationshipField(
    name: string,
    relationTo: RelationToMany,
    overrides: OverridesMany | OverridesSingle = {},
): RelationshipField {
    return {
        type: 'relationship',
        name,
        relationTo,
        ...overrides,
    } as RelationshipField;
}

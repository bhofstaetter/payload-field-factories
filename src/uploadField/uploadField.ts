import type {UploadField} from 'payload';

type UploadFieldSingle = Extract<UploadField, {hasMany?: false | undefined}>;
type UploadFieldMany = Extract<UploadField, {hasMany: true}>;

type OverridesSingle = Partial<Omit<UploadFieldSingle, 'type' | 'name' | 'relationTo'>>;
type OverridesMany = Partial<Omit<UploadFieldMany, 'type' | 'name' | 'relationTo' | 'hasMany'>> & {hasMany: true};

type RelationTo = UploadField['relationTo'];

export function uploadField(name: string, relationTo: RelationTo, overrides: OverridesMany): UploadFieldMany;
export function uploadField(name: string, relationTo: RelationTo, overrides?: OverridesSingle): UploadFieldSingle;
export function uploadField(
    name: string,
    relationTo: RelationTo,
    overrides: OverridesMany | OverridesSingle = {},
): UploadField {
    return {
        type: 'upload',
        name,
        relationTo,
        ...overrides,
    } as UploadField;
}

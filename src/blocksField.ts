import type {BlocksField} from 'payload';

type BlockReferences = NonNullable<BlocksField['blockReferences']>;
type Overrides = Partial<Omit<BlocksField, 'type' | 'name' | 'blocks' | 'blockReferences'>>;

type Args = {
    blockReferences: BlockReferences;
    overrides?: Overrides;
};

export function blocksField(name: string, argsOrReferences: Args | BlockReferences): BlocksField {
    const {blockReferences, overrides = {}} = Array.isArray(argsOrReferences)
        ? {blockReferences: argsOrReferences}
        : argsOrReferences;

    return {
        type: 'blocks',
        name,
        blocks: [],
        blockReferences,
        ...overrides,
    } as BlocksField;
}

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);

export const removeUndefinedDeep = <T>(value: T): T => {
    if (Array.isArray(value)) {
        return value.map(item => removeUndefinedDeep(item)) as T;
    }

    if (!isPlainObject(value)) {
        return value;
    }

    const result: Record<string, unknown> = {};
    for (const [key, entry] of Object.entries(value)) {
        if (entry === undefined) {
            continue;
        }
        result[key] = removeUndefinedDeep(entry);
    }

    return result as T;
};

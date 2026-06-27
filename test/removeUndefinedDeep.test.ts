import {expect, it} from 'vitest';
import {removeUndefinedDeep} from '@/utils/removeUndefinedDeep';

it('removes top-level keys whose value is undefined', () => {
    const result = removeUndefinedDeep({a: 1, b: undefined, c: 'x'});

    expect(result).toEqual({a: 1, c: 'x'});
    expect('b' in result).toBe(false);
});

it('keeps falsy values that are not undefined', () => {
    const result = removeUndefinedDeep({a: null, b: false, c: 0, d: '', e: Number.NaN});

    expect(result).toEqual({a: null, b: false, c: 0, d: '', e: Number.NaN});
});

it('removes undefined keys inside nested objects', () => {
    const result = removeUndefinedDeep({
        admin: {date: {displayFormat: undefined, timeFormat: 'HH:mm'}},
    });

    expect(result).toEqual({admin: {date: {timeFormat: 'HH:mm'}}});
});

it('removes undefined keys inside objects nested in arrays', () => {
    const result = removeUndefinedDeep({
        options: [
            {label: 'A', value: 'a', extra: undefined},
            {label: 'B', value: 'b'},
        ],
    });

    expect(result).toEqual({
        options: [
            {label: 'A', value: 'a'},
            {label: 'B', value: 'b'},
        ],
    });
});

it('keeps undefined elements inside arrays (only object keys are dropped)', () => {
    const result = removeUndefinedDeep({list: [1, undefined, 2]});

    expect(result).toEqual({list: [1, undefined, 2]});
});

it('returns primitives unchanged', () => {
    expect(removeUndefinedDeep(42)).toBe(42);
    expect(removeUndefinedDeep('text')).toBe('text');
    expect(removeUndefinedDeep(null)).toBe(null);
    expect(removeUndefinedDeep(undefined)).toBe(undefined);
});

it('does not recurse into non-plain objects', () => {
    const date = new Date('2026-06-27T00:00:00.000Z');
    const regex = /abc/g;
    const fn = () => 'noop';

    const result = removeUndefinedDeep({date, regex, fn});

    expect(result.date).toBe(date);
    expect(result.regex).toBe(regex);
    expect(result.fn).toBe(fn);
});

it('recurses into null-prototype objects', () => {
    const input = Object.create(null) as Record<string, unknown>;
    input.a = 1;
    input.b = undefined;

    const result = removeUndefinedDeep(input);

    expect(result).toEqual({a: 1});
});

it('does not mutate the input object', () => {
    const input = {a: 1, b: undefined, nested: {c: undefined, d: 2}};
    const result = removeUndefinedDeep(input);

    expect(input).toEqual({a: 1, b: undefined, nested: {c: undefined, d: 2}});
    expect(result).not.toBe(input);
    expect(result.nested).not.toBe(input.nested);
});

it('returns a new array instance rather than mutating', () => {
    const input = [{a: undefined, b: 1}];
    const result = removeUndefinedDeep(input);

    expect(result).toEqual([{b: 1}]);
    expect(result).not.toBe(input);
});

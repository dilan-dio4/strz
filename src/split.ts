import type { Concat } from './utils/arr';

type Split<S extends string, D extends string, L extends number | undefined, A extends unknown[] = []> = A['length'] extends L
    ? A
    : S extends `${infer T}${D}${infer R}`
    ? Split<R, D, L, Concat<A, [T]>>
    : Concat<A, [S]>;

export function split<S extends string, D extends string, L extends number | undefined = undefined>(str: S, separator: D, limit?: L): Split<S, D, L> {
    return str.split(separator, limit) as unknown as Split<S, D, L>;
}

import type { SafeSubtract } from './utils/arithmetic';
import type { StrLength } from './utils/arr';

type SliceResult<T extends string, S extends number, E extends number> = T extends `${infer C}${infer Rest}`
    ? S extends 0
        ? E extends 0
            ? ''
            : `${C}${SliceResult<Rest, 0, E extends -1 ? -1 : SafeSubtract<E, 1>>}`
        : `${SliceResult<Rest, S extends -1 ? -1 : SafeSubtract<S, 1>, E extends -1 ? -1 : SafeSubtract<E, 1>>}`
    : '';

export function slice<
    Str extends string,
    I1 extends number,
    I2Fallback extends I2 extends undefined ? StrLength<Str> : I2,
    I2 extends number | undefined = undefined,
>(str: Str, start: I1, end?: I2): SliceResult<Str, I1, I2Fallback> {
    return str.slice(start, end) as SliceResult<Str, I1, I2Fallback>;
}

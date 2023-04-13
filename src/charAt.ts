import type { StringToArray } from './utils/arr';

export function charAt<S extends string, I extends keyof S & number>(str: S, index: I): StringToArray<S>[I] {
    return str.charAt(index) as StringToArray<S>[I];
}

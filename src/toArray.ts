import type { StringToArray } from './utils/arr';

export function toArray<S extends string>(str: S): StringToArray<S> {
    return str.split('') as StringToArray<S>;
}

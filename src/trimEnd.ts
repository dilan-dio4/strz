import type { TrimEnd } from './utils/trim';

export function trimEnd<S extends string>(str: S): TrimEnd<S> {
    return str.trimEnd() as TrimEnd<S>;
}

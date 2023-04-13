import type { Trimmed } from './utils/trim';

export function trim<S extends string>(str: S): Trimmed<S> {
    return str.trim() as Trimmed<S>;
}

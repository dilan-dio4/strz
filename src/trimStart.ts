import type { TrimStart } from './utils/trim';

export function trimStart<S extends string>(str: S): TrimStart<S> {
    return str.trimStart() as TrimStart<S>;
}

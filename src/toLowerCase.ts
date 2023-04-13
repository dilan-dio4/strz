export function toLowerCase<S extends string>(str: S): Lowercase<S> {
    return str.toLowerCase() as Lowercase<S>;
}

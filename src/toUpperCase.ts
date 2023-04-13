export function toUpperCase<S extends string>(str: S): Uppercase<S> {
    return str.toUpperCase() as Uppercase<S>;
}

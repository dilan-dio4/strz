export function uncapitalize<S extends string>(str: S): Uncapitalize<S> {
    return (str.charAt(0).toLowerCase() + str.slice(1)) as Uncapitalize<S>;
}

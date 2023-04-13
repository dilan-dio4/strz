export function prefix<S extends string, P extends string>(str: S, prefix: P): `${P}${S}` {
    return `${prefix}${str}` as `${P}${S}`;
}

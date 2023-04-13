export function suffix<S extends string, P extends string>(str: S, suffix: P): `${S}${P}` {
    return `${str}${suffix}` as `${S}${P}`;
}

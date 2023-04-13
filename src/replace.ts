type ReplaceFirst<Str extends string, Search extends string, Replace extends string> = Str extends `${infer Start}${Search}${infer End}`
    ? `${Start}${Replace}${End}`
    : Str;

export function replace<Str extends string, Search extends string, Replace extends string>(
    str: Str,
    search: Search,
    replace: Replace,
): ReplaceFirst<Str, Search, Replace> {
    const replaced = str.replace(search, replace);
    return replaced as ReplaceFirst<Str, Search, Replace>;
}

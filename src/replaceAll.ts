type ReplaceAll<Str extends string, Search extends string, Replace extends string> = Str extends `${infer Start}${Search}${infer End}`
    ? `${Start}${Replace}${ReplaceAll<End, Search, Replace>}`
    : Str;

export function replaceAll<Str extends string, Search extends string, Replace extends string>(
    str: Str,
    search: Search,
    replace: Replace,
): ReplaceAll<Str, Search, Replace> {
    return str.replaceAll(search, replace) as ReplaceAll<Str, Search, Replace>;
}

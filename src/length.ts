import { StrLength } from "./utils/arr";

export function length<Str extends string>(str: Str): StrLength<Str> {
    return str.length as StrLength<Str>;
}
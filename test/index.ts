import {
    charAt,
    toLowerCase,
    toUpperCase,
    toArray,
    slice,
    uncapitalize,
    capitalize,
    prefix,
    suffix,
    split,
    trim,
    trimStart,
    trimEnd,
    replaceAll,
    replace,
    length,
} from "../src";

const exampleStr = "The quick brown fox jumps over the lazy dog";

const _char = charAt(exampleStr, 0);
const _lower = toLowerCase(exampleStr);
const _upper = toUpperCase(exampleStr);
const _array = toArray(exampleStr);
const _slice1 = slice(exampleStr, 4, 19);
const _slice2 = slice(exampleStr, 31, 33);
const _slice3 = slice(exampleStr, 31, undefined);
const _slice4 = slice(exampleStr, 31);
const _uncapitalize = uncapitalize(exampleStr);
const _capitalize = capitalize(exampleStr);
const _prefix = prefix(exampleStr, "Well, ");
const _suffix = suffix(exampleStr, "!");
const _split = split(exampleStr, " ", 4);
const _trim = trim(" \n nice \n ");
const _trimStart = trimStart(" \n nice \n ");
const _trimEnd = trimEnd(" \n nice \n ");
const _replaceAll = replaceAll(exampleStr, " ", "_");
const _replace = replace(exampleStr, " ", "_");
const _length = length(exampleStr);
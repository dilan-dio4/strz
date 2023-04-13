type WhiteSpace = ' ' | '\n' | '\r' | '\t';

export type TrimStart<S extends string> = S extends `${WhiteSpace}${infer R}` ? TrimStart<R> : S;
export type TrimEnd<S extends string> = S extends `${infer R}${WhiteSpace}` ? TrimEnd<R> : S;
export type Trimmed<S extends string> = TrimEnd<TrimStart<S>>;

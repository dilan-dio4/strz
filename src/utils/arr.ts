import { SafeAdd } from './arithmetic';

export type StringToArray<T extends string> = T extends `${infer C}${infer Rest}` ? [C, ...StringToArray<Rest>] : [];
export type StrLength<T extends string> = T extends `${infer C}${infer Rest}` ? SafeAdd<1, StrLength<Rest>> : 0;
export type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

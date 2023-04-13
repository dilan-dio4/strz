// Utility types
type Length<T extends any[]> = T extends { length: infer L } ? L : never;

type BuildTuple<L extends number, T extends any[] = []> = T extends { length: L } ? T : BuildTuple<L, [...T, any]>;

type MultiAdd<N extends number, A extends number, I extends number> = I extends 0
    ? A
    : Add<N, A> extends number
    ? MultiAdd<N, Add<N, A>, Subtract<I, 1>>
    : never;

type AtTerminus<A extends number, B extends number> = A extends 0 ? true : B extends 0 ? true : false;

type EQ<A, B> = A extends B ? (B extends A ? true : false) : false;

type LT<A extends number, B extends number> = AtTerminus<A, B> extends true
    ? EQ<A, B> extends true
        ? false
        : A extends 0
        ? true
        : false
    : LT<Subtract<A, 1>, Subtract<B, 1>>;

type MultiSub<N extends number, D extends number, Q extends number> = LT<N, D> extends true
    ? Q
    : Add<Q, 1> extends number
    ? MultiSub<Subtract<N, D>, D, Add<Q, 1>>
    : never;

type IsPositive<N extends number> = `${N}` extends `-${number}` ? false : true;

type IsWhole<N extends number> = `${N}` extends `${number}.${number}` ? false : true;

type IsValid<N extends number> = IsPositive<N> extends true ? (IsWhole<N> extends true ? true : false) : false;

type AreValid<A extends number, B extends number> = IsValid<A> extends true ? (IsValid<B> extends true ? true : false) : false;

// Arithmetical types
type Add<A extends number, B extends number> = Length<[...BuildTuple<A>, ...BuildTuple<B>]>;

type Subtract<A extends number, B extends number> = BuildTuple<A> extends [...infer U, ...BuildTuple<B>] ? Length<U> : never;

type Multiply<A extends number, B extends number> = MultiAdd<A, 0, B>;

type Divide<A extends number, B extends number> = MultiSub<A, B, 0>;

type Modulo<A extends number, B extends number> = LT<A, B> extends true ? A : Modulo<Subtract<A, B>, B>;

// Safeguarded arithmetical types
export type SafeAdd<A extends number, B extends number> = AreValid<A, B> extends true ? Add<A, B> : never;

export type SafeSubtract<A extends number, B extends number> = AreValid<A, B> extends true ? Subtract<A, B> : never;

export type SafeMultiply<A extends number, B extends number> = AreValid<A, B> extends true ? Multiply<A, B> : never;

export type SafeDivide<A extends number, B extends number> = AreValid<A, B> extends true ? Divide<A, B> : never;

export type SafeModulo<A extends number, B extends number> = AreValid<A, B> extends true ? Modulo<A, B> : never;

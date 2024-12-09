// AdvancedPipe.ts

// Define a generic function type
type Fn<A, B> = (arg: A) => B;

// Recursive type to enforce function chaining
type PipeFunctions<T extends any[], R> = T extends [
  Fn<infer A, infer B>,
  ...infer Rest,
]
  ? Rest extends [Fn<B, infer C>, ...infer RRest]
    ? PipeFunctions<[...Rest], C>
    : B
  : R;

// Pipe function with variadic tuple types
export function pipe<T extends any[], R>(
  ...fns: T
): (input: Parameters<T[0]>[0]) => PipeFunctions<T, R> {
  return (initialValue: any) =>
    fns.reduce((value, fn) => fn(value), initialValue);
}

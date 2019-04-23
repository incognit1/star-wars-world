export const compose = (...functions) => (component) =>
    functions.reduceRight(((wrapped, fn) => fn(wrapped)), component);

const Format = (() => {
  const tags = ['div', 'h1', 'p', 'span'];
​
  const create = (chain = []) =>
    new Proxy(
      (...args) =>
        chain.reduceRight(
          (acc, tag) => `<${tag}>${acc}</${tag}>`,
          args.join('')
        ),
      {
        get(_, tag) {
          if (!tags.includes(tag)) return undefined;
          return create([...chain, tag]);
        }
      }
    );
​
  return create();
})();
​
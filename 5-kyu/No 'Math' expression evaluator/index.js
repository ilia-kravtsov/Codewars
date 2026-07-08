function evaluate(expr, context = {}) {
  const scope = {};

  Object.getOwnPropertyNames(Math).forEach(key => {
    scope[key] = Math[key];
  });

  scope.PI2 = Math.PI ** 2;
  scope.cos2 = x => Math.cos(x) ** 2;
  scope.sin2 = x => Math.sin(x) ** 2;

  Object.assign(scope, context);

  return Function(
    ...Object.keys(scope),
    `return ${expr}`
  )(...Object.values(scope));
}
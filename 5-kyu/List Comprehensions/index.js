function listComprehension(str) {
    const m = str.match(/^\s*\[(.+)\s+for\s+([A-Za-z_$][\w$]*)\s+in\s+(.+)\]\s*$/);

    if (!m) throw new Error("Invalid list comprehension");

    const [, expr, variable, iterableExpr] = m;

    let iterable;
    try {
        iterable = Function(`return (${iterableExpr})`)();
    } catch {
        throw new Error("Invalid list comprehension");
    }

    if (!Array.isArray(iterable))
        throw new Error("Invalid list comprehension");

    return iterable.map(value =>
        Function(variable, `return (${expr})`)(value)
    );
}
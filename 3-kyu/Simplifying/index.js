/*
In this example:

"c + a + b" = "2a"
so the output is "2a".

Notes:

Variables names are case sensitive.
There might be whitespaces between the different characters. Or not...
There should be support for parentheses and their coefficient. Example: a + 3 (6b - c).
You may encounter several imbricated levels of parentheses, but you'll get only constant terms for the accompanying coefficients (never variables).
All equations will be linear.
In your final answer, include a leading 1 when the coefficient is 1 (e.g. 1j instead of just j).
There are no floating-point numbers.
See the sample tests for clarification on what exactly the input/ouput formatting should be.

Without giving away too many hints, the idea is to substitute the examples into the formula and reduce the resulting equation to one unique term. Look carefully at the example tests: you'll have to identify the pattern used to replace variables in the formula/other equations. Using this pattern, only one solution is possible for each test, so if you keep asking yourself "but what if instead of that I do...", then you've missed the pattern.
*/

function simplify(equalities, formula) {
  function tokenize(s) {
    let regex = /\s*([0-9]+|[a-zA-Z]+|\(|\)|\+|\-)/g,
      tokens = [],
      m;
    while ((m = regex.exec(s)) !== null) tokens.push(m[1]);
    return tokens;
  }

  function parseExpression(tokens) {
    let pos = 0;
    function parseExpr() {
      let expr = parseTerm();
      while (
        pos < tokens.length &&
        (tokens[pos] === "+" || tokens[pos] === "-")
      ) {
        let sign = tokens[pos++];
        let term = parseTerm();
        expr = add(
          expr,
          sign === "-" ? mul(term, { const: -1, terms: {} }) : term
        );
      }
      return expr;
    }
    function parseTerm() {
      let term = parseFactor();
      while (pos < tokens.length && /^[0-9a-zA-Z(]$/.test(tokens[pos][0])) {
        let factor = parseFactor();
        if (isNonZero(term) && !hasTerms(term))
          term = mul(factor, { const: term.const, terms: {} });
        else if (isNonZero(factor) && !hasTerms(factor))
          term = mul(term, { const: factor.const, terms: {} });
        else throw new Error("Non-linear multiplication encountered");
      }
      return term;
    }
    function parseFactor() {
      let token = tokens[pos++];
      if (/^[0-9]+$/.test(token))
        return { const: parseInt(token, 10), terms: {} };
      else if (/^[a-zA-Z]+$/.test(token))
        return { const: 0, terms: { [token]: 1 } };
      else if (token === "(") {
        let expr = parseExpr();
        pos++;
        return expr;
      } else if (token === "-") {
        return mul(parseFactor(), { const: -1, terms: {} });
      }
      throw new Error("Unexpected token " + token);
    }
    return parseExpr();
  }

  function add(e1, e2) {
    let res = { const: e1.const + e2.const, terms: {} };
    for (let v in e1.terms) res.terms[v] = (res.terms[v] || 0) + e1.terms[v];
    for (let v in e2.terms) res.terms[v] = (res.terms[v] || 0) + e2.terms[v];
    return res;
  }

  function mul(e, factor) {
    if (!hasTerms(factor)) {
      let k = factor.const;
      let res = { const: e.const * k, terms: {} };
      for (let v in e.terms) res.terms[v] = e.terms[v] * k;
      return res;
    } else if (!hasTerms(e)) {
      let k = e.const;
      let res = { const: factor.const * k, terms: {} };
      for (let v in factor.terms) res.terms[v] = factor.terms[v] * k;
      return res;
    }
    throw new Error("Multiplication of two non-constants is not allowed");
  }

  function hasTerms(expr) {
    return Object.keys(expr.terms).length > 0;
  }

  function isNonZero(expr) {
    return expr.const !== 0 || hasTerms(expr);
  }

  function exprToString(expr, freeVar) {
    let coef = expr.terms[freeVar] || 0;
    let c = expr.const;
    if (c !== 0) coef += c;
    return coef + freeVar;
  }

  let definitions = {};
  let defined = new Set(),
    allVars = new Set();
  equalities.forEach((eq) => {
    let parts = eq.split("=");
    let left = parts[0].trim(),
      right = parts[1].trim();
    definitions[right] = parseExpression(tokenize(left));
    defined.add(right);
    Object.keys(definitions[right].terms).forEach((v) => allVars.add(v));
    allVars.add(right);
  });

  let freeCandidates = Array.from(allVars).filter((v) => !defined.has(v));
  freeCandidates.sort();
  let freeVar = freeCandidates[0];

  function substitute(expr) {
    let changed = true;
    while (changed) {
      changed = false;
      for (let v in expr.terms) {
        if (v !== freeVar && definitions[v]) {
          let coeff = expr.terms[v];
          delete expr.terms[v];
          let sub = definitions[v];
          let subMul = mul(sub, { const: coeff, terms: {} });
          expr = add(expr, subMul);
          changed = true;
          break;
        }
      }
    }
    return expr;
  }

  let formulaExpr = parseExpression(tokenize(formula));
  formulaExpr = substitute(formulaExpr);
  return exprToString(formulaExpr, freeVar);
}

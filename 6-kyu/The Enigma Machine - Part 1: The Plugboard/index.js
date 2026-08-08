function Plugboard(wires = "") {
​
  if (wires.length > 20) {
    throw new Error("Too many wires");
  }
​
  if (wires.length % 2 !== 0) {
    throw new Error("Not enough wire ends");
  }
​
  const connections = {};
​
  for (let i = 0; i < wires.length; i += 2) {
    const a = wires[i];
    const b = wires[i + 1];
​
    if (
      !/[A-Z]/.test(a) ||
      !/[A-Z]/.test(b) ||
      connections[a] ||
      connections[b]
    ) {
      throw new Error("Invalid wires");
    }
​
    connections[a] = b;
    connections[b] = a;
  }
​
  function process(wire) {
    return connections[wire] || wire;
  }
​
  return { process };
}
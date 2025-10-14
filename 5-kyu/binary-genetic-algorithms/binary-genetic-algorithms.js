var GeneticAlgorithm = function () {};
​
GeneticAlgorithm.prototype.generate = function(length) {
  let res = "";
  for (let i = 0; i < length; i++) res += Math.random() < 0.5 ? "0" : "1";
  return res;
};
​
GeneticAlgorithm.prototype.select = function(population, fitnesses) {
  const sum = fitnesses.reduce((a, b) => a + b, 0);
  const pick = () => {
    let r = Math.random() * sum;
    for (let i = 0; i < population.length; i++) {
      r -= fitnesses[i];
      if (r <= 0) return population[i];
    }
    return population[population.length - 1];
  };
  return [pick(), pick()];
};
​
GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
  return chromosome
    .split("")
    .map(bit => (Math.random() < p ? (bit === "0" ? "1" : "0") : bit))
    .join("");
};
​
GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
  const point = Math.floor(Math.random() * chromosome1.length);
  return [
    chromosome1.slice(0, point) + chromosome2.slice(point),
    chromosome2.slice(0, point) + chromosome1.slice(point)
  ];
};
​
GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, iterations = 100) {
  let popSize = 100;
  let population = Array.from({ length: popSize }, () => this.generate(length));
  for (let it = 0; it < iterations; it++) {
    const fitnesses = population.map(fitness);
    const newPop = [];
    while (newPop.length < popSize) {
      let [p1, p2] = this.select(population, fitnesses);
      if (Math.random() < p_c) [p1, p2] = this.crossover(p1, p2);
      p1 = this.mutate(p1, p_m);
      p2 = this.mutate(p2, p_m);
      newPop.push(p1, p2);
    }
    population = newPop.slice(0, popSize);
  }
  return population.reduce((best, curr) =>
    fitness(curr) > fitness(best) ? curr : best
  );
};
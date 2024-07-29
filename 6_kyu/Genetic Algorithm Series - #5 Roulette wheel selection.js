/*
The "Roulette wheel selection", also known as "Fitness proportionate selection", is a genetic operator used in genetic algorithms for selecting potentially useful solutions for recombination.

Your task is to implement it.

roulette

You throw a coin in and has a chance to fall in one of the slots, the higher the fitness the higher the chance the element has to be selected.

Given the population and fitnesses, your task is to run the roulette to return one element.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.
*/

const select = (population, fitnesses) => {
  const totalFitness = fitnesses.reduce((sum, fitness) => sum + fitness, 0);
  const probabilities = fitnesses.map((fitness) => fitness / totalFitness);
  const random = Math.random();

  let accumulatedProbability = 0;
  for (let i = 0; i < population.length; i++) {
    accumulatedProbability += probabilities[i];
    if (random <= accumulatedProbability) {
      return population[i];
    }
  }

  return population[population.length - 1];
};

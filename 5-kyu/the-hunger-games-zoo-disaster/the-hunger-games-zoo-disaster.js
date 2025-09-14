var whoEatsWho = function(zoo) {
  const rules = {
    antelope: ["grass"],
    "big-fish": ["little-fish"],
    bug: ["leaves"],
    bear: ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
    chicken: ["bug"],
    cow: ["grass"],
    fox: ["chicken", "sheep"],
    giraffe: ["leaves"],
    lion: ["antelope", "cow"],
    panda: ["leaves"],
    sheep: ["grass"]
  }
​
  let result = [zoo]
  let animals = zoo.split(",")
​
  let eaten = true
  while (eaten) {
    eaten = false
    for (let i = 0; i < animals.length; i++) {
      let predator = animals[i]
      if (!rules[predator]) continue
      if (i > 0 && rules[predator].includes(animals[i - 1])) {
        result.push(predator + " eats " + animals[i - 1])
        animals.splice(i - 1, 1)
        eaten = true
        break
      }
      if (i < animals.length - 1 && rules[predator].includes(animals[i + 1])) {
        result.push(predator + " eats " + animals[i + 1])
        animals.splice(i + 1, 1)
        eaten = true
        break
      }
    }
  }
  result.push(animals.join(","))
  return result
}
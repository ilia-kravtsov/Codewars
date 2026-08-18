function sortAnimal(animals) {
  if (!animals || animals.length === 0) {
    return [];
  }
  
  return [...animals].sort((a, b) => {
    if (a.numberOfLegs !== b.numberOfLegs) {
      return a.numberOfLegs - b.numberOfLegs;
    }
    
    return a.name.localeCompare(b.name);
  });
}
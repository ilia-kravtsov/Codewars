function fight(robot1, robot2, tactics) {
  let first, second;
  if (robot2.speed > robot1.speed) {
    first = robot2;
    second = robot1;
  } else {
    first = robot1;
    second = robot2;
  }
​
  let r1 = { health: robot1.health, tactics: [...robot1.tactics], name: robot1.name };
  let r2 = { health: robot2.health, tactics: [...robot2.tactics], name: robot2.name };
​
  let robots = first === robot1 ? [r1, r2] : [r2, r1];
​
  let turn = 0;
  
  while (true) {
    let attacker = robots[turn % 2];
    let defender = robots[(turn + 1) % 2];
​
    if (attacker.tactics.length > 0) {
      let move = attacker.tactics.shift(); 
      let damage = tactics[move] || 0;
      defender.health -= damage;
    }
​
    if (defender.health <= 0) {
      return `${attacker.name} has won the fight.`;
    }
​
    if (r1.tactics.length === 0 && r2.tactics.length === 0) {
      if (r1.health > r2.health) return `${r1.name} has won the fight.`;
      if (r2.health > r1.health) return `${r2.name} has won the fight.`;
      return "The fight was a draw.";
    }
​
    turn++;
  }
}
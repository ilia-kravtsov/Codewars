Position = {
  high: 'h',
  low: 'l'
}
​
Warrior = function(name){
  this.name = name  
  this.health = 100
  this.deceased = false
  this.zombie = false
  this.block = null
}
​
Warrior.prototype = {
  attack: function(enemy, position){
    if (enemy.block != position){
      var damage = position == Position.high ? 10 : 5
      if (!enemy.block){
        damage += 5
      }
      setHealth.call(enemy, enemy.health - damage)
    }
  }
}
​
function setHealth(value){
  this.health = Math.max(0, value)
  if (this.health == 0){
    if (!this.deceased){
      this.deceased = true
      this.zombie = false
    } else {
      this.zombie = true
    }
  }
}
function State(name) {
  this.name = name;
  this.transitions = {};
}
​
State.prototype.setTransition = function(input, nextState) {
  this.transitions[input] = nextState;
};
​
State.prototype.next = function(input) {
  return this.transitions[input];
};
​
function Automaton() {
  this.q1 = new State('q1');
  this.q2 = new State('q2');
  this.q3 = new State('q3');
​
  this.q1.setTransition("0", this.q1);
  this.q1.setTransition("1", this.q2);
​
  this.q2.setTransition("0", this.q3);
  this.q2.setTransition("1", this.q2);
​
  this.q3.setTransition("0", this.q2);
  this.q3.setTransition("1", this.q2);
​
  this.startState = this.q1;
  this.acceptState = this.q2;
}
​
Automaton.prototype.readCommands = function(commands) {
  let currentState = this.startState;
​
  for (let command of commands) {
    currentState = currentState.next(command);
  }
​
  return currentState === this.acceptState;
};
​
var myAutomaton = new Automaton();
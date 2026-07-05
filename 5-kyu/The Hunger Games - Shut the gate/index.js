var shutTheGate = function(farm) {
  let farmArr = farm.split('');
  let n = farmArr.length;
  let visited = new Array(n).fill(false);
  let components = [];
  
  for (let i = 0; i < n; i++) {
    if (visited[i] || farmArr[i] === '|') continue;
    let queue = [i];
    visited[i] = true;
    let comp = [];
    while (queue.length > 0) {
      let pos = queue.shift();
      comp.push(pos);
      if (pos > 0 && farmArr[pos - 1] !== '|' && !visited[pos - 1]) {
        visited[pos - 1] = true;
        queue.push(pos - 1);
      }
      if (pos < n - 1 && farmArr[pos + 1] !== '|' && !visited[pos + 1]) {
        visited[pos + 1] = true;
        queue.push(pos + 1);
      }
    }
    components.push(comp);
  }
  
  let outsideComps = new Set();
  for (let i = 0; i < components.length; i++) {
    let comp = components[i];
    if (comp.some(pos => pos === 0 || pos === n - 1)) {
      outsideComps.add(i);
    }
  }
  
  let compHasH = components.map(comp => comp.some(pos => farmArr[pos] === 'H'));
  let compHasR = components.map(comp => comp.some(pos => farmArr[pos] === 'R'));
  let compHasC = components.map(comp => comp.some(pos => farmArr[pos] === 'C'));
  let compHasA = components.map(comp => comp.some(pos => farmArr[pos] === 'A'));
  let compHasV = components.map(comp => comp.some(pos => farmArr[pos] === 'V'));
  
  for (let i = 0; i < components.length; i++) {
    let comp = components[i];
    let reachesOutside = outsideComps.has(i);
    
    if (compHasH[i]) {
      let canEat = false;
      let compsToEat = new Set();
      if (reachesOutside) {
        for (let j = 0; j < components.length; j++) {
          if (outsideComps.has(j)) {
            compsToEat.add(j);
          }
        }
      } else {
        compsToEat.add(i);
      }
      for (let j of compsToEat) {
        if (compHasA[j]) {
          for (let pos of components[j]) {
            if (farmArr[pos] === 'A') farmArr[pos] = '.';
          }
          compHasA[j] = false;
        }
        if (compHasV[j]) {
          for (let pos of components[j]) {
            if (farmArr[pos] === 'V') farmArr[pos] = '.';
          }
          compHasV[j] = false;
        }
      }
      if (reachesOutside) {
        for (let pos of comp) {
          if (farmArr[pos] === 'H') farmArr[pos] = '.';
        }
        compHasH[i] = false;
      }
    }
    
    if (compHasR[i]) {
      let canEat = false;
      let compsToEat = new Set();
      if (reachesOutside) {
        for (let j = 0; j < components.length; j++) {
          if (outsideComps.has(j)) {
            compsToEat.add(j);
          }
        }
      } else {
        compsToEat.add(i);
      }
      for (let j of compsToEat) {
        if (compHasV[j]) {
          for (let pos of components[j]) {
            if (farmArr[pos] === 'V') farmArr[pos] = '.';
          }
          compHasV[j] = false;
        }
      }
      if (reachesOutside) {
        for (let pos of comp) {
          if (farmArr[pos] === 'R') farmArr[pos] = '.';
        }
        compHasR[i] = false;
      }
    }
    
    if (compHasC[i] && reachesOutside) {
      for (let pos of comp) {
        if (farmArr[pos] === 'C') farmArr[pos] = '.';
      }
      compHasC[i] = false;
    }
  }
  
  return farmArr.join('');
};
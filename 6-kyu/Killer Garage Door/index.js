function door(events) {
  let position = 0;
  let direction = 0;
  let moving = false;
  let result = '';
​
  for (let e of events) {
    if (e === 'O') {
      if (moving) {
        direction *= -1;
      } else {
        direction = direction === 0 ? 1 : -direction;
        moving = true;
      }
      moving = true;
    } else if (e === 'P') {
      if (moving) {
        moving = false;
      } else {
        if (position === 0) direction = 1;
        else if (position === 5) direction = -1;
        moving = true;
      }
    }
​
    if (moving) {
      position += direction;
      if (position === 0 || position === 5) {
        moving = false;
      }
    }
​
    result += position;
  }
​
  return result;
}
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function Context(first, second) {
  this.first = first;
  this.second = second;
}
​
function alternatingSplit(head) {
  if (!head || !head.next) throw new Error();
​
  let aHead = head;
  let bHead = head.next;
  let a = aHead;
  let b = bHead;
  let current = head.next.next;
  let toggle = true;
​
  while (current) {
    if (toggle) {
      a.next = current;
      a = a.next;
    } else {
      b.next = current;
      b = b.next;
    }
    current = current.next;
    toggle = !toggle;
  }
​
  a.next = null;
  b.next = null;
​
  return new Context(aHead, bHead);
}
​
function Node(data) {
  this.data = data;
  this.next = null;
}
​
function removeDuplicates(head) {
  let current = head;
​
  while (current !== null && current.next !== null) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
​
  return head;
}
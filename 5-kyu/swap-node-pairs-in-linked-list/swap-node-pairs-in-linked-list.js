function swapPairs(head) {
    if (!head || !head.next) return head;
    let dummy = new Node(null, head);
    let prev = dummy;
​
    while (prev.next && prev.next.next) {
        let a = prev.next;
        let b = a.next;
​
        prev.next = b;
        a.next = b.next;
        b.next = a;
​
        prev = a;
    }
​
    return dummy.next;
}
​
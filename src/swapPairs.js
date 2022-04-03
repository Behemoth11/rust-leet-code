var swapPairs = function (head) {
  if (!head?.next) return head;

  let principalNode = head;
  let secondaryNode = head.next;

  let temp = secondaryNode.next;

  secondaryNode.next = principalNode;
  principalNode.next = swapPairs(temp);

  return secondaryNode;
};

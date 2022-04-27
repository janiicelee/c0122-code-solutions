/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  let second = queue.peek();
  if (second === undefined) {
    return first;
  }

  while (first > second) {
    queue.enqueue(first);
    first = queue.dequeue();
    second = queue.peek();
  }
  return first;
}

/*

function takeNextSmallest(numberQueue) {
  let nextSmallest = numberQueue.dequeue();
  while(nextSmallest > numberQueue.peek()) {
    numberQueue.enqueue(nextSmallest);
    nextSmallest = numberQueue.dequeue();
  }
  return nextSmallest;
}
*/

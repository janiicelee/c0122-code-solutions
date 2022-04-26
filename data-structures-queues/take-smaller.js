/* exported takeSmaller */
/*

input: queue
output: the smaller of the first two values in the queue

*/

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const first = queue.dequeue();
    const second = queue.dequeue();
    if (second === undefined) {
      return first;
    } else {
      if (first < second || first === second) {
        queue.enqueue(second);
        return first;
      }

      if (first > second) {
        queue.enqueue(first);
        return second;
      }
    }
  }
}

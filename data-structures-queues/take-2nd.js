/* exported take2nd */

/*
input: queue
output: second value of the queue, the first value is cycled to the "back " of the queue.

*/

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const first = queue.dequeue();
    const second = queue.dequeue();
    queue.enqueue(first);
    if (second === undefined) {
      return first;
    }
    return second;
  }
}

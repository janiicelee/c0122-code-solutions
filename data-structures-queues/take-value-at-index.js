/* exported takeValueAtIndex */
/*

input: queue
output: the value found at index position from the "front" of the queue.

*/

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    let first = queue.dequeue();
    for (let i = 0; i < index; i++) {
      queue.enqueue(first);
      first = queue.dequeue();
    }
    return first;
  }
}

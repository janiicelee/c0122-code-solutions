/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const top = stack.pop();
    const second = stack.peek();
    stack.push(top);
    return second;
  }
}

/*

function get2ndFromTop(stack) {
  const top = stack.pop();
  if (typeof top === 'undefined') return;
  const next = stack.peek();
  stack.push(top);
  return next;
}

*/

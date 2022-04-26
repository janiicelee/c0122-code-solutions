/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const top = stack.pop();
    stack.push(value);
    stack.push(top);
    return stack;
  }
}

/* exported maxValue */
/*

input: stack
output: largest number in stack

initialize a variable for the output
sort the stack ( but this doesnt work)
compare each element in the stack (but stack doesn't have indexes)
then compare it with the peek value

*/

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let maxNum = stack.pop();
    while (stack.peek()) {
      const currentNum = stack.pop();
      if (currentNum > maxNum) {
        maxNum = currentNum;
      }
    }
    return maxNum;
  }
}

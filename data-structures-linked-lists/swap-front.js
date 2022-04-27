/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  let first = list;
  const second = list.next;
  const others = list.next.next;
  first = second;
  first.next = list;
  first.next.next = others;
  return first;
}

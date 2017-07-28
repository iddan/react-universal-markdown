/**
 * @param {Node} node - CommonMark AST Node
 * @yields {Node} - the node's children
 */
export function* getChildren(node) {
  let child = node.firstChild;
  if (!child) {
    return;
  }
  do {
    yield child;
    child = child.next;
  } while (child);
}

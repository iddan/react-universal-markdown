import _regeneratorRuntime from "babel-runtime/regenerator";

var _marked = [getChildren].map(_regeneratorRuntime.mark);

/**
 * @param {Node} node - CommonMark AST Node
 * @yields {Node} - the node's children
 */
export function getChildren(node) {
  var child;
  return _regeneratorRuntime.wrap(function getChildren$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          child = node.firstChild;

          if (child) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return");

        case 3:
          _context.next = 5;
          return child;

        case 5:
          child = child.next;

        case 6:
          if (child) {
            _context.next = 3;
            break;
          }

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
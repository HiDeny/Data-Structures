//TODO: Height - accepts a node and returns its height.
//  - Height is defined as the number of edges in longest path from a given node to a leaf node.

export const heightRecursion = (root) => {
  if (root === null) return -1;

  const leftHeight = heightRecursion(root.left);
  const rightHeight = heightRecursion(root.right);

  if (leftHeight > rightHeight) return leftHeight + 1;
  return rightHeight + 1;
};

//TODO: Depth - accepts a node and returns its depth.
// - Depth is defined as the number of edges in path from a given node to the tree’s root node.

export const depthRecursion = (root, nodeToFind, depth = 0) => {
  if (root === null) return -1;

  if (root === nodeToFind) return depth;

  const leftDepth = depthRecursion(root.left, nodeToFind, depth + 1);
  if (leftDepth !== -1) return leftDepth;

  const rightDepth = depthRecursion(root.right, nodeToFind, depth + 1);
  if (rightDepth !== -1) return rightDepth;

  return -1;
};

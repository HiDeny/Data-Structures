//TODO: isBalanced - checks if the tree is balanced.
// - A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.
export const isBalancedRecursion = (root) => {
  if (root === null) return [true, 0];

  const leftBalance = isBalancedRecursion(root.left);
  const rightBalance = isBalancedRecursion(root.right);
  if (!leftBalance || !rightBalance) return false;

  const balanced = Math.abs(leftBalance[1] - rightBalance[1]) <= 1;
  return [balanced, 1 + Math.max(leftBalance[1], rightBalance[1])];
};

export default isBalancedRecursion;

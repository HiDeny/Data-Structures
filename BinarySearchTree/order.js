//TODO: levelOrder - accepts another function as a parameter.
// - should traverse the tree in breadth-first level order and provide each node as the argument to the provided function.
// - This function can be implemented using either iteration or recursion (try implementing both!).
// - The method should return an array of values if no function is given.
// - Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list

//* Iteration
export const levelOrderIteration = (root, callback) => {
  const queue = [root];
  const result = [];
  let currentNode = null;

  while (queue.length) {
    currentNode = queue.shift();
    if (callback) callback(currentNode);
    result.push(currentNode.data);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return result;
};

//* Recursion
export const levelOrderRecursion = (queue, callback) => {
  if (queue.length === 0) return;

  const root = queue.shift();
  if (callback) callback(root);

  if (root.left) queue.push(root.left);
  if (root.right) queue.push(root.right);

  levelOrderRecursion(queue, callback);
};

//TODO: Preorder, Inorder, and Postorder - accept a function parameter.
// - Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument.
// - The functions should return an array of values if no function is given.

//* Preorder
export const preorderRecursion = (root, callback) => {
  if (root === null) return [];

  const result = [];

  // Root -> Left -> Right
  result.push(root.data);
  if (callback) callback(root);
  if (root.left) result.push(...preorderRecursion(root.left, callback));
  if (root.right) result.push(...preorderRecursion(root.right, callback));

  return result;
};

//* Inorder
export const inorderRecursion = (root, callback) => {
  if (root === null) return [];

  const result = [];

  // Left -> Root -> Right
  if (root.left) result.push(...inorderRecursion(root.left, callback));
  result.push(root.data);
  if (callback) callback(root);
  if (root.right) result.push(...inorderRecursion(root.right, callback));

  return result;
};

//* Postorder
export const postorderRecursion = (root, callback) => {
  if (root === null) return [];

  const result = [];

  // Left -> Right -> Root
  if (root.left) result.push(...postorderRecursion(root.left, callback));
  if (root.right) result.push(...postorderRecursion(root.right, callback));
  result.push(root.data);
  if (callback) callback(root);

  return result;
};

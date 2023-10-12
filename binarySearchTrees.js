const Node = (data) => {
  return {
    data,
    left: null,
    right: null,
  };
};

const buildTree = (arr) => {
  if (arr.length === 0) return null;

  const middle = Math.floor(arr.length / 2);

  const root = Node(arr[middle]);
  root.left = buildTree(arr.slice(0, middle));
  root.right = buildTree(arr.slice(middle + 1));

  return root;
};

//TODO: Insert - accepts a value to insert
const insertRecursive = (newData, root) => {
  if (root === null) return Node(newData);
  if (newData === root.data) return root;

  if (newData < root.data) {
    root.left = insertRecursive(newData, root.left);
  }
  if (newData > root.data) {
    root.right = insertRecursive(newData, root.right);
  }

  return root;
};

//TODO:  Delete - accepts a value to delete
// - you’ll have to deal with several cases for delete such as when a node has children or not
const deleteRecursive = (dataToDelete, root) => {
  if (root === null) {
    console.error('Delete: Data not found');
    return root;
  }

  if (dataToDelete < root.data) {
    root.left = deleteRecursive(dataToDelete, root.left);
    return root;
  }
  if (dataToDelete > root.data) {
    root.right = deleteRecursive(dataToDelete, root.right);
    return root;
  }

  if (!root.left && !root.right) return null;
  if (!root.left) return root.right;
  if (!root.right) return root.left;

  let tempNode = root.right;
  while (tempNode.left !== null) tempNode = tempNode.left;

  root.data = tempNode.data;
  root.right = deleteRecursive(tempNode.data, root.right);
  return root;
};

//TODO: Find function - accepts a value and returns the node with the given value.
const findRecursive = (dataToFind, root) => {
  if (root === null) {
    console.error('Find: Data not found');
    return root;
  }

  if (dataToFind < root.data) {
    return findRecursive(dataToFind, root.left);
  }
  if (dataToFind > root.data) {
    return findRecursive(dataToFind, root.right);
  }

  return root;
};

//TODO: levelOrder - accepts another function as a parameter.
// - should traverse the tree in breadth-first level order and provide each node as the argument to the provided function.
// - This function can be implemented using either iteration or recursion (try implementing both!).
// - The method should return an array of values if no function is given.
// - Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list

//* Iteration
const levelOrderIteration = (callback, root) => {
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
const levelOrderRecursion = (callback, queue) => {
  if (queue.length === 0) return;

  const root = queue.shift();
  if (callback) callback(root);

  if (root.left) queue.push(root.left);
  if (root.right) queue.push(root.right);

  levelOrderRecursion(callback, queue);
};

//TODO: Preorder, Inorder, and Postorder - accept a function parameter.
// - Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument.
// - The functions should return an array of values if no function is given.
const preorderRecursion = (callback, root) => {
  if (root === null) return [];

  const result = [];

  // Root -> Left -> Right
  result.push(root.data);
  if (callback) callback(root);
  if (root.left) result.push(...preorderRecursion(callback, root.left));
  if (root.right) result.push(...preorderRecursion(callback, root.right));

  return result;
};

const inorderRecursion = (callback, root) => {
  if (root === null) return [];

  const result = [];

  // Left -> Root -> Right
  if (root.left) result.push(...inorderRecursion(callback, root.left));
  result.push(root.data);
  if (callback) callback(root);
  if (root.right) result.push(...inorderRecursion(callback, root.right));

  return result;
};

const postorderRecursion = (callback, root) => {
  if (root === null) return [];

  const result = [];

  // Left -> Right -> Root
  if (root.left) result.push(...postorderRecursion(callback, root.left));
  if (root.right) result.push(...postorderRecursion(callback, root.right));
  result.push(root.data);
  if (callback) callback(root);

  return result;
};

//TODO: Height - accepts a node and returns its height.
//  - Height is defined as the number of edges in longest path from a given node to a leaf node.
const heightRecursion = (data, root) => {
  if (root === null) {
    console.error('Height: Data not found.');
    return 0;
  }

  if (data < root.data) return heightRecursion(data, root.left) + 1;
  if (data > root.data) return heightRecursion(data, root.right) + 1;

  return 1;
};

const Tree = (arr) => {
  const cleanArr = [...new Set(arr.sort((a, b) => a - b))];
  let root = buildTree(cleanArr);

  return {
    get root() {
      return root;
    },

    insert(newData) {
      root = insertRecursive(newData, root);
    },

    delete(dataToDelete) {
      root = deleteRecursive(dataToDelete, root);
    },

    find(dataToFind) {
      return findRecursive(dataToFind, root);
    },

    levelOrder(callback) {
      return levelOrderIteration(callback, root);
      // return levelOrderRecursion(callback, [root]);
    },

    preorder(callback) {
      return preorderRecursion(callback, root);
    },

    inorder(callback) {
      return inorderRecursion(callback, root);
    },

    postorder(callback) {
      return postorderRecursion(callback, root);
    },

    height(data) {
      return heightRecursion(data, root);
    },

    //TODO: Depth - accepts a node and returns its depth.
    // - Depth is defined as the number of edges in path from a given node to the tree’s root node.

    //TODO: isBalanced - checks if the tree is balanced.
    // - A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.

    //TODO: Rebalance - rebalances an unbalanced tree.
    // Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
  };
};

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

//?
const randomArray = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 100) + 1
);

const testArray = [11, 21, 25, 31, 34, 44, 55];

// const newTree = Tree(randomArray);
const newTree = Tree(testArray);
// prettyPrint(newTree.root);

newTree.insert(21);
newTree.insert(22);
newTree.insert(31);
newTree.insert(33);
newTree.insert(10);
prettyPrint(newTree.root);

newTree.delete(21);
newTree.delete(31);
prettyPrint(newTree.root);

// console.log(newTree.find(22));
// console.log(newTree.find(10));

const logData = (node) => console.log(node.data);

// newTree.levelOrder(logData);
console.log(newTree.preorder());
console.log(newTree.inorder(logData));
console.log(newTree.postorder());

console.log(newTree.height(10));

// Tie it all together
// Write a simple driver script that does the following:

// 1. Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it, if you wish.
// 2. Confirm that the tree is balanced by calling isBalanced.
// 3. Print out all elements in level, pre, post, and in order.
// 4. Unbalance the tree by adding several numbers > 100.
// 5. Confirm that the tree is unbalanced by calling isBalanced.
// 6. Balance the tree by calling rebalance.
// 7. Confirm that the tree is balanced by calling isBalanced.
// 8. Print out all elements in level, pre, post, and in order.
import prettyPrint from './prettyPrint';
import { insertRecursive, deleteRecursive } from './insertANDdelete';
import { findRecursive } from './find';
import {
  levelOrderIteration,
  preorderRecursion,
  inorderRecursion,
  postorderRecursion,
} from './order';
import { heightRecursion, depthRecursion } from './heightANDdepth';
import isBalancedRecursion from './isBalanced';

//TODO: Build a Node class / factory.
// - It should have an attribute for the data it stores as well as its left and right children.
export const Node = (data) => {
  return {
    data,
    left: null,
    right: null,
  };
};

//TODO: Write a buildTree - takes an array of data and turns it into a balanced binary tree full of Node objects appropriately placed.
// - The buildTree function should return the level-0 root node.
// - Sort and remove duplicates!). The buildTree function should return the level-0 root node.
// - Remove duplicates.
const buildTree = (arr) => {
  if (arr.length === 0) return null;

  const middle = Math.floor(arr.length / 2);

  const root = Node(arr[middle]);
  root.left = buildTree(arr.slice(0, middle));
  root.right = buildTree(arr.slice(middle + 1));

  return root;
};

//TODO: Rebalance - rebalances an unbalanced tree.
// Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
const rebalance = (root) => buildTree(inorderRecursion(root));

//TODO: Build a Tree class / factory which accepts an array when initialized.
// - The Tree class should have a root attribute which uses the return value of buildTree.
const Tree = (arr) => {
  const cleanArr = [...new Set(arr.sort((a, b) => a - b))];
  let root = buildTree(cleanArr);

  return {
    get root() {
      return root;
    },

    insert(newData) {
      root = insertRecursive(root, newData);
    },

    delete(dataToDelete) {
      root = deleteRecursive(root, dataToDelete);
    },

    find(dataToFind) {
      return findRecursive(root, dataToFind);
    },

    levelOrder(callback) {
      return levelOrderIteration(root, callback);
      // return levelOrderRecursion(callback, [root]);
    },

    preorder(callback) {
      return preorderRecursion(root, callback);
    },

    inorder(callback) {
      return inorderRecursion(root, callback);
    },

    postorder(callback) {
      return postorderRecursion(root, callback);
    },

    height(data) {
      return heightRecursion(this.find(data));
    },

    depth(data) {
      return depthRecursion(root, this.find(data));
    },

    isBalanced() {
      return isBalancedRecursion(root)[0];
    },

    rebalance() {
      if (this.isBalanced()) return;
      root = rebalance(root);
    },
  };
};

export default Tree;

// //! Testing
// const testArray = [11, 21, 25, 31, 34, 44, 55];
// const newTree = Tree(testArray);

// //? Insert
// newTree.insert(21);
// newTree.insert(22);
// newTree.insert(31);
// newTree.insert(33);
// // newTree.insert(10);
// newTree.insert(12);
// newTree.insert(13);
// prettyPrint(newTree.root);

// //? Delete
// newTree.delete(21);
// newTree.delete(31);
// prettyPrint(newTree.root);

// //? Find function
// console.log(newTree.find(22));
// console.log(newTree.find(10));

// const logData = (node) => console.log(node.data);

// //? levelOrder
// newTree.levelOrder(logData);

// //? Preorder, Inorder, and Postorder
// console.log(newTree.preorder());
// console.log(newTree.inorder(logData));
// console.log(newTree.postorder());

// //? Height
// console.log(newTree.height(22));

// //? Depth
// console.log(newTree.depth(22));
// prettyPrint(newTree.root);

// //? isBalanced
// console.log(newTree.isBalanced());

// //? rebalance
// newTree.rebalance();
// prettyPrint(newTree.root);
// console.log(newTree.isBalanced());

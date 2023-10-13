import { Node } from './treeCore';

//TODO: Insert - accepts a value to insert
export const insertRecursive = (root, newData) => {
  if (root === null) return Node(newData);
  if (newData === root.data) return root;

  if (newData < root.data) {
    root.left = insertRecursive(root.left, newData);
  }
  if (newData > root.data) {
    root.right = insertRecursive(root.right, newData);
  }

  return root;
};

//TODO:  Delete - accepts a value to delete
// - you’ll have to deal with several cases for delete such as when a node has children or not
export const deleteRecursive = (root, dataToDelete) => {
  if (root === null) {
    console.error('Delete: Data not found');
    return root;
  }

  if (dataToDelete < root.data) {
    root.left = deleteRecursive(root.left, dataToDelete);
    return root;
  }
  if (dataToDelete > root.data) {
    root.right = deleteRecursive(root.right, dataToDelete);
    return root;
  }

  if (!root.left && !root.right) return null;
  if (!root.left) return root.right;
  if (!root.right) return root.left;

  let tempNode = root.right;
  while (tempNode.left !== null) tempNode = tempNode.left;

  root.data = tempNode.data;
  root.right = deleteRecursive(root.right, tempNode.data);
  return root;
};

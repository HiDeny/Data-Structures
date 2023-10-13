//TODO: Find - accepts a value and returns the node with the given value.
export const findRecursive = (root, dataToFind) => {
  if (root === null) {
    console.error('Find: Data not found');
    return root;
  }

  if (dataToFind < root.data) {
    return findRecursive(root.left, dataToFind);
  }
  if (dataToFind > root.data) {
    return findRecursive(root.right, dataToFind);
  }

  return root;
};

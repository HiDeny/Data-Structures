# Data-Structures

## Linked List
- `append(value)` adds a new node containing value to the end of the list or to start if list is empty
- `prepend(value)` adds a new node containing value to the start of the list
- `size()` returns the total number of nodes in the list
- `head()` returns the first node in the list
- `tail()` returns the last node in the list
- `at(index)` returns the node at the given index or error message if there is no node in the requested index
- `pop()` removes the last element from the list
- `contains(value)` returns true if the passed in value is in the list and otherwise returns false
- `find(value)` returns the index of the node containing value, or null if not found
- `toString()` returns your LinkedList objects as strings in the format: ( value ) -> ( value ) -> ( value ) -> null
- `insertAt(value, index)` inserts a new node with the provided value at the given index or at the end of the list if index is bigger than list size
- `removeAt(index)` removes the node at the given index or error message if the list is empty or if the request index is bigger than list size

## Binary Search Trees
- `insert(newData)` insert data
- `delete(dataToDelete)` delete data
- `find(dataToFind)` returns the node with the given value.
- `levelOrder(callback)` traverse the tree in level order and provide each node as the argument to the provided function. (Return an array of values if no function is given)
- `preorder(callback)` traverse the tree in preorder and provide each node as the argument to the provided function. (Return an array of values if no function is given)
- `inorder(callback)` traverse the tree in  inorder and provide each node as the argument to the provided function. (Return an array of values if no function is given)
- `postorder(callback)` traverse the tree in  postorder and provide each node as the argument to the provided function. (Return an array of values if no function is given)
- `height(data)` returns height of data (Largest downwards path from that data to the leaf node)
- `depth(data)` returns depth of data (Largest upwards path from data to tree root)
- `isBalanced()` checks if the tree is balanced
- `rebalance()` rebalances an unbalanced tree
    
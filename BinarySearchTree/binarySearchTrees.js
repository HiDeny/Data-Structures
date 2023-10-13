import Tree from './treeCore';
import prettyPrint from './prettyPrint';

//* Array of random numbers < 100
const randomArray = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 100) + 1
);

//! Tie it all together
//* 1. Create a binary search tree from an
console.log('1. Create a binary search tree');
const finalTree = Tree(randomArray);
prettyPrint(finalTree.root);

// │       ┌── 93
// │   ┌── 90
// │   │   └── 55
// │   │       └── 52
// └── 47
//     │   ┌── 46
//     │   │   └── 40
//     └── 38
//         └── 31
//             └── 13

//* 2. Confirm that the tree is balanced by calling isBalanced.
console.log('2. Confirm that the tree is balanced');
console.log(finalTree.isBalanced());
// true

//* 3. Print out all elements in level, pre, post, and in order.
console.log('3. Print out all elements in level, pre, post, and in order.');
console.log('Preorder');
console.log(finalTree.preorder());
// [ 47, 38, 31, 13, 46, 40, 90, 55, 52, 93 ]

console.log('Postorder');
console.log(finalTree.postorder());
// [ 13, 31, 40, 46, 38, 52, 55, 93, 90, 47 ]

console.log('Inorder');
console.log(finalTree.inorder());
// [ 13, 31, 38, 40, 46, 47, 52, 55, 90, 93 ]

//* 4. Unbalance the tree by adding several numbers > 100.
console.log('4. Unbalance the tree by adding several numbers');
finalTree.insert(55);
finalTree.insert(56);
finalTree.insert(57);
finalTree.insert(70);
finalTree.insert(75);
finalTree.insert(1);
prettyPrint(finalTree.root);

// │       ┌── 93
// │   ┌── 90
// │   │   │               ┌── 75
// │   │   │           ┌── 70
// │   │   │       ┌── 57
// │   │   │   ┌── 56
// │   │   └── 55
// │   │       └── 52
// └── 47
//     │   ┌── 46
//     │   │   └── 40
//     └── 38
//         └── 31
//             └── 13
//                 └── 1

//* 5. Confirm that the tree is unbalanced by calling isBalanced.
console.log('5. Confirm that the tree is unbalanced');
console.log(finalTree.isBalanced());
// false

//* 6. Balance the tree by calling rebalance.
console.log('6. Balance the tree');
finalTree.rebalance();
prettyPrint(finalTree.root);

// │           ┌── 93
// │       ┌── 90
// │       │   └── 75
// │   ┌── 70
// │   │   │   ┌── 57
// │   │   └── 56
// │   │       └── 55
// └── 52
//     │       ┌── 47
//     │   ┌── 46
//     │   │   └── 40
//     └── 38
//         │   ┌── 31
//         └── 13
//             └── 1

//* 7. Confirm that the tree is balanced by calling isBalanced.
console.log('7. Confirm that the tree is balanced');
console.log(finalTree.isBalanced());
// true

//* 8. Print out all elements in level, pre, post, and in order.
console.log('8. Print out all elements in level, pre, post, and in order.');
console.log('Level');
console.log(finalTree.levelOrder());
// [ 52, 38, 70, 13, 46, 56, 90, 1, 31, 40, 47, 55, 57, 75, 93 ]

console.log('Pre');
console.log(finalTree.preorder());
// [ 52, 38, 13, 1, 31, 46, 40, 47, 70, 56, 55, 57, 90, 75, 93 ]

console.log('Post');
console.log(finalTree.postorder());
// [ 1, 31, 13, 40, 47, 46, 38, 55, 57, 56, 75, 93, 90, 70, 52 ]

console.log('In');
console.log(finalTree.inorder());
// [ 1, 13, 31, 38, 40, 46, 47, 52, 55, 56, 57, 70, 75, 90, 93 ]

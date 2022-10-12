const { BinarySearchTree } = require('./src/binary-search-tree.js');
const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
console.log(tree.root())
console.log('_-__-__-__-__-__-__-__-__-__-__-__-_start_-__-__-__-__-__-__-__-__-__-__-__-_')
// console.log(tree.root())
// console.log('_-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-__-_')
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.root())
// console.log(tree.root())
// console.log('_-__-__-__-__-__-__-__-__-__-__-__-_finish_-__-__-__-__-__-__-__-__-__-__-__-_')
console.log(tree.has(14))
console.log(tree.has(8))
console.log(tree.has(9))
console.log(tree.has(2))
console.log(tree.has(6))
console.log(tree.has(128))
console.log(tree.has(31))
console.log(tree.has(54))
console.log(tree.has(1))
// tree.print()
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// console.log(tree.root())
// tree.remove(6);
// console.log('sip',tree.root())
// tree.remove(2);
// console.log(tree.root())
// console.log(tree.min())
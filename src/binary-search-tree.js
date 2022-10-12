const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.tree = new Node(null)
    this.nodeArray = []
  }
  root() {
    if(!this.tree.data) return null
    return this.tree 
  }

  addOld_UNORDER_TREE(valueToAdd) {
    if (!this.tree.data) {
      this.tree = new Node(valueToAdd)
      this.nodeArray.push(this.tree)
    }
    else{
      var temp = null
      while (this.nodeArray.length > 0 && valueToAdd > this.nodeArray[this.nodeArray.length - 1].data){
        temp = this.nodeArray.pop()
      }
      if (temp != null) {
        temp.right = new Node(valueToAdd)
        this.nodeArray.push(temp.right)
      }
      else{
        temp = this.nodeArray[this.nodeArray.length - 1]
        temp.left = new Node(valueToAdd)
        this.nodeArray.push(temp.left)
      }
    }
  }

  addRecursCall(valueToAdd, tree){
    if(tree == null){
      tree = new Node(valueToAdd)
      return tree
    }
    tree.data > valueToAdd ? tree.left = this.addRecursCall(valueToAdd, tree.left) : tree.right = this.addRecursCall(valueToAdd, tree.right)
    return tree
  }

  add(valueToAdd) {
    if (!this.tree.data) {
      this.tree = new Node(valueToAdd)
      return  
    }
    this.tree.data > valueToAdd ? this.tree.left = this.addRecursCall(valueToAdd, this.tree.left) : this.tree.right = this.addRecursCall(valueToAdd, this.tree.right)
  }

  has(valueToFind) {
    return this.find(valueToFind) ? true : false
  }

  find(valueToFind) {
    if(this.tree.data === null) return null
    let current = this.tree
    while (current?.data != valueToFind){
      if(current?.data === undefined) return null
      if(current.data > valueToFind) {
        current = current.left
      }
      else{
        current = current.right
      }
    }
    return current
  }
  findNodeForRemove(valueToFind) {
    if(this.tree.data === null) return null
    let current = this.tree
    while (current?.left != valueToFind && current?.right != valueToFind && current?.left?.data != valueToFind && current?.right?.data != valueToFind){
      if(current?.data === undefined) return null
      if(current.data > valueToFind) {
        current = current.left
      }
      else{
        current = current.right
      }
    }
    return current
  }
  shuffle(nodeLeft, nodeRight){
    let connector = nodeLeft
    while(connector.right != null){
      connector = connector.right
    }
    connector.right = nodeRight
    console.log('connector................')
    console.log( connector)
    console.log('connector................end')
    return nodeLeft
  }
  shuffleS(nodeLeft, nodeRight){
    let connector = nodeLeft
    while(connector.right != null){
      connector = connector.right
    }
    connect = nodeRight
    console.log('connector................')
    console.log( connector)
    console.log('connector................end')
    return nodeLeft
  }
  remove(valueToRemove) {
    //const node = this.find(valueToRemove)
    if(this.tree.data == valueToRemove){
      this.tree = this.shuffle(this.tree.left, this.tree.right)
      return
    }
    const node = this.findNodeForRemove(valueToRemove)
    if(node){
      const nodeRight = node.right
      const nodeLeft = node.left
      if(nodeRight.data == valueToRemove){
        if(nodeRight.left == null && nodeRight.right == null){
          node.right = null
          return
        }
        if(nodeRight.left == null){
          node.right = nodeRight.right
          return
        }
        if(nodeRight.right == null){
          node.right = nodeRight.left
          return
        }
        node.right = this.shuffle(nodeRight.left, nodeRight.right)
      }
      if(nodeLeft.data == valueToRemove){
        if(nodeLeft.left == null && nodeLeft.right == null){
          node.left = null
          return
        }
        if(nodeLeft.left == null){
          node.left = nodeLeft.right 
          return
        }
        if(nodeLeft.right == null){
          node.left = nodeLeft.left 
          return
        }
        node.left = this.shuffle(nodeLeft.left, nodeLeft.right)
      }
      // const nodeRight = node.right
      // const nodeLeft = node.left
      // if(!nodeRight || !nodeLeft){
      //   node.data = nodeLeft || nodeRight || null 
      //   return
      // }
      // let nodeConnector = nodeLeft.right
      // while(nodeConnector != null){
      //   nodeConnector = nodeConnector.right
      // }
      // nodeConnector = nodeRight
      // node.data = nodeLeft
    }
  }

  min() {
    let min = this.tree.left
    while(min.left != null){
      min = min.left
    }
    return min.data
  }

  max() {
    let max = this.tree.right
    while(max.right != null){
      max = max.right
    }
    return max.data
  }
  print(){
    console.log(this.tree.data)
    console.log(this.tree?.left?.data, this.tree?.right?.data)
    console.log(this.tree?.left?.left, this.tree?.left?.right, this.tree?.right?.left, this.tree?.right?.right)

  }
}

module.exports = {
  BinarySearchTree
};
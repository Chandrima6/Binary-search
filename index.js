function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  var node = new BST(value);
  if(value <= this.value) {
    if (!this.left) {
      this.left = node;
    } else {
      this.left.insert(value);
    }
  } else {
    if(!this.right) {
      this.right = node;
    } else {
      this.right.insert(value);
    }
  }
}

BST.prototype.contains = function(value) {
  if (value == this.value) return true;
  else if (value < this.value) {
    if(!this.left) return false;
    return this.left.contains(value);
  } else if (value > this.value){
    if(!this.rigth) return false;
    return this.right.contains(value);
  } else {
    return false;
  }
}

BST.prototype.depthFirstTraversal = function(iteratorFunc) {
  
}


var bst = new BST(50);
bst.insert(49);
bst.insert(20);
bst.insert(79);
// console.log('Binary tree', bst);

console.log('Item Presence', bst.contains(20));
function BinarySearchTree(value) {
  this.value = value; //20
  this.tamaño = 1;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  this.value > value
    ? this.left
      ? this.left.insert(value)
      : (this.left = new BinarySearchTree(value))
    : this.right
      ? this.right.insert(value)
      : (this.right = new BinarySearchTree(value));

  this.tamaño++;
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (this.value > value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  }

  if (this.value < value) {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (fn, str) {
  if (str == "in-order" || str == null) {
    this.left ? this.left.depthFirstForEach(fn, str) : null;
    fn(this.value);
    this.right ? this.right.depthFirstForEach(fn, str) : null;
  }
  if (str == "pre-order") {
    fn(this.value);
    this.left ? this.left.depthFirstForEach(fn, str) : null;
    this.right ? this.right.depthFirstForEach(fn, str) : null;
  }
  if (str == "post-order") {
    this.left ? this.left.depthFirstForEach(fn, str) : null;
    this.right ? this.right.depthFirstForEach(fn, str) : null;
    fn(this.value);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (fn, arr = []) {
  fn(this.value);
  this.left ? arr.push(this.left) : null;
  this.right ? arr.push(this.right) : null;
  arr.length > 0 ? arr.shift().breadthFirstForEach(fn, arr) : null;

};

BinarySearchTree.prototype.size = function () {
  return this.tamaño;
};

//Solución con clases
/*class BinarySearchTree {
    constructor(valor) {
      this.value = valor;
      this.left = null;
      this.right = null;
      this.ac = 0
    }
  
    insert(num) {
      if (num < this.value) {
        this.newLeft(num);
        this.ac++;
      } else {
        this.newRight(num);
        this.ac++;
      }
    }
  
    newLeft(num) {
      if (this.left) {
        this.left.insert(num);
        this.ac++;
      } else {
        this.left = new BinarySearchTree(num);
        this.ac++;
      }
    }
  
    newRight(num) {
      if (this.right) {
        this.right.insert(num);
        this.ac++;
      } else {
        this.right = new BinarySearchTree(num);
        this.ac++;
      }
    }
    size() {
      return this.ac
    }
  
    contains(valor) {
      if (valor === this.value) {
        return true;
      }
      if (valor < this.value) {
        if (this.left) {
          return this.left.contains(valor);
        } else {
          return false;
        }
      }
      if (valor > this.value) {
        if (this.right) {
          return this.right.contains(valor);
        }
      } else {
        return false;
      }
      return false;
    }
    
    depthFirstForEach(fn,str="in-order"){
      if(str=="in-order"){
      if(this.left){
      this.left.depthFirstForEach(fn)
      }

      fn(this.value)

      if(this.right){
        this.right.depthFirstForEach(fn)
        }
      }

      if(str=="pre-order"){
        fn(this.value)
        
        if(this.left){
          this.left.depthFirstForEach(fn,str)
        }
        if(this.right){
          this.right.depthFirstForEach(fn,str)
          }
        }

        if(str == "post-order"){
          
          if(this.left){
            this.left.depthFirstForEach(fn,str)
          }
          if(this.right){
            this.right.depthFirstForEach(fn,str)
            }
            fn(this.value)
        }
    }

    
    breadthFirstForEach(fn, cola =[]){
      
        // proceso value ---> fn()
        fn(this.value)
        if (this.left){
        // proceso izq ----> cola
            cola.push(this.left)
        }
        // proceso der ----> cola
        if (this.right){
            cola.push(this.right)
        }
        cola.length > 0
        ? cola.shift().breadthFirstForEach(fn, cola) : null;
        
    }

}*/

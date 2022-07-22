function HashTable() {
  this.numBuckets = 35;
  this.table = [];
}

HashTable.prototype.hash = function (str) {
  let hashed = 0;
  for (i = 0; i < str.length; i++) {
    hashed += str.charCodeAt(i);
  }
  return hashed % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") {
    throw new TypeError("Keys must be strings");
  }

  let indice = this.hash(key);
  if (!this.table[indice]) new LinkedList();
  this.table[indice] = this.table[indice] || new LinkedList();
  this.table[indice].addToHead({ key, value });
};

HashTable.prototype.get = function (key) {
  let indice = this.hash(key);

  let found = this.table[indice].search(function (obj) {
    return key === obj.key;
  });
  return found && found.value;
};

HashTable.prototype.hasKey = function (key) {
  if (this.get(key)) return true;
  else {
    return false;
  }
};


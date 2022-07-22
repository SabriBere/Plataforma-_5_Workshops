function Node(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function (value) {
  let newNode = new Node(value);

  if (!this.tail) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }
};

LinkedList.prototype.addToHead = function (value) {
  let newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }
};

LinkedList.prototype.removeHead = function () {
  let lostHead;
  if (!this.head) {
    return null;
  }
  lostHead = this.head.value;
  this.head = this.head.next;

  if (this.head) {
    this.head.previous = null;
  } else {
    this.tail = null;
  }
  return lostHead;
};

LinkedList.prototype.removeTail = function () {
  let lostTail;
  if (!this.tail) {
    return null;
  }
  lostTail = this.tail.value;
  this.tail = this.tail.previous;

  if (this.tail) {
    this.tail.next = null;
  }
  return lostTail;
};

LinkedList.prototype.search = function (str) {

  let cabeza = this.head;
  if (typeof str === "function") {
    while (cabeza) {
      if (str(cabeza.value)) {
        return cabeza.value;
      } else {
        cabeza = cabeza.next;
      }
    }
  } else {
    while (cabeza) {
      if (cabeza.value === str) {
        return str;
      } else {
        cabeza = cabeza.next;
      }
    }
    return null;
  }
};



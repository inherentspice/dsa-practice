class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head===null) {
      this.head = new Node(value, null);
      return
    }

    let curr = this.head

    // iterate through linkedlist until we reach the tail
    while (curr.next !== null) {
      curr = curr.next;
    }

    const newNode = new Node(value, null);
    curr.next = newNode;
  }

  prepend(value) {
    if (this.head===null) {
      this.head = new Node(value, null);
      return
    }

    let temp = this.head;
    this.head = new Node(value, temp);
  }

  size() {
    if (this.head===null) {
      return 0;
    }

    let count = 0;
    let curr = this.head;

    while (curr) {
      curr = curr.next;
      count++;
    }
    return count;
  }

  get headvalue() {
    if (!this.head) {
      return null;
    }
    return this.head.value;
  }

  get tailvalue() {
    if (this.head===null) {
      return null;
    }

    let curr = this.head;

    while(curr.next) {
      curr = curr.next;
    }
    return curr.value;
  }

  at(value) {
    let curr = this.head;
    let count = 0;
    while (curr && count < value) {
      if (!curr.next) {
        throw new RangeError("Index is outside the bounds of the Linked List")
      }
      curr = curr.next;
      count++;
    }

    return count===value ? curr.value : null;
  }

  pop() {
    if (!this.head) {
      throw new Error("Linked List has no items to remove");
    }
    if (!this.head.next) {
      this.head = null;
    }

    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }

    curr.next = null;
  }

  contains(value) {
    let curr = this.head;

    while (curr) {
      if (curr.value===value) {
        return true
      }
      curr = curr.next;
    }
    return false
  }

  find(value) {
    let curr = this.head;
    let index = 0;

    while (curr) {
      if (curr.value === value){
        return index;
      }
      curr = curr.next;
      index++;
    }
    return null;
  }

  toString() {
    let curr = this.head;
    let stringified = "";
    while (curr) {
      stringified += `( ${curr.value} ) => `
      curr = curr.next;
    }
    stringified += "null"
    return stringified;
  }

  insertAt(value, index) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      if (count + 1 === index) {
        let newNode = new Node(value, curr.next);
        curr.next = newNode;
        return
      }
      curr = curr.next;
      count++;
    }
  throw new RangeError("Index provided is larger than the size of the Linked List");
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;

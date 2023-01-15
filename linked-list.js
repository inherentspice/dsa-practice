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

    while (curr.next !== null) {
      curr = curr.next;
      count++;
    }
    return count;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


let testList = new LinkedList();
testList.prepend(1)
testList.append(3)
console.log(testList.size())

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(list) {
    list = list.sort((a, b) => a - b);

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    let filteredList = list.filter(onlyUnique);

    function createBst(list, startIndex, endIndex) {
      if (startIndex > endIndex) {
        return null
      }

      const mid = Math.ceil((startIndex + endIndex) / 2);
      let root = new TreeNode(list[mid]);
      root.left = createBst(list, startIndex, mid-1);
      root.right = createBst(list, mid+1, endIndex);
      return root;
    }

    this.root = createBst(filteredList, 0, filteredList.length - 1);
  }

  prettyPrint(node, prefix = '', isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  insert(value) {
    let node = new TreeNode(value);
    let tempRoot = this.root;
    if (!tempRoot) {
      root = node;
      return;
    }

    let prev = null;
    while (tempRoot) {
      if (tempRoot.value > value) {
        prev = tempRoot;
        tempRoot = tempRoot.left;
      } else if (tempRoot.value < value) {
        prev = tempRoot;
        tempRoot = tempRoot.right;
      }
    }
    if (prev.value > value) {
      prev.left = node;
    } else {
      prev.right = node;
    }

  }

  delete(value) {
    // three cases: no children, one child, two children
    let tempRoot = this.root;
    let prev = null;
    while (tempRoot) {
      if (tempRoot.value === value) {
        if (!tempRoot.left && !tempRoot.right) {
          prev.left.value === value ? prev.left = null : prev.right = null;
          tempRoot = null;
          return
        }
      }
      if (tempRoot.value > value) {
        prev = tempRoot;
        tempRoot = tempRoot.left;
      } else if (tempRoot.value < value) {
        prev = tempRoot;
        tempRoot = tempRoot.right;
      }
    }
  }

  find(value) {
    let currRoot = this.root;

    while (currRoot) {
      if (currRoot.value === value) {
        return currRoot
      } else if (currRoot.value > value) {
        currRoot = currRoot.left;
      } else {
        currRoot = currRoot.right;
      }
    }

    return null;
  }
}

let testTree = new BinarySearchTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
testTree.prettyPrint(testTree.root)
console.log(testTree.find(23));
console.log(testTree.insert(6));
console.log(testTree.find(6));
console.log(testTree.delete(1));
testTree.prettyPrint(testTree.root)

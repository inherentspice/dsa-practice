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
}

let testTree = new BinarySearchTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
testTree.prettyPrint(testTree.root)

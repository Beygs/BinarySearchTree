class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root, array) {
    this.root = root;
    this.array = array;
    this.array.forEach(element => this.insert(element));
  }

  insert(value, parentNode = this.root) {
    const node = value instanceof Node ? value : new Node(value);

    if (node.data < parentNode.data) {
      if (parentNode.left !== null) return this.insert(node, parentNode.left);

      parentNode.left = node;
      return this;
    }

    if (parentNode.right !== null) return this.insert(node, parentNode.right);

    parentNode.right = node;
    return this;
  }

  find(value, currentNode = this.root) {
    if (currentNode.data === value) return currentNode;
    if (currentNode.data > value && currentNode.left !== null) return this.find(value, currentNode.left);
    if (currentNode.data < value && currentNode.right !== null) return this.find(value, currentNode.right);
    return "No Node Found!";
  }

  preorder(node = this.root, result = []) {
    if (node === null) return;
    result.push(node.data);
    this.preorder(node.left, result);
    this.preorder(node.right, result);
    return result;
  }

  inorder(node = this.root, result = []) {
    if (node === null) return;
    this.inorder(node.left, result);
    result.push(node.data);
    this.inorder(node.right, result);
    return result;
  }

  postorder(node = this.root, result = []) {
    if (node === null) return;
    this.postorder(node.right, result);
    result.push(node.data);
    this.postorder(node.left, result);
    return result;
  }
}

const tree = new Tree(new Node(10), [9, 4, 11, 3, 28, 21, 13, 1, 0, 2, 15]);

tree.insert(30);

module.exports = { Tree, Node };
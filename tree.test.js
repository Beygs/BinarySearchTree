const { Tree, Node } = require("./tree");

const isBST = (node) => {
  // https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
  if (node === null) return true;

  /* False if left is > than node */
  if (node.left !== null && node.left.data > node.data) return false;

  /* False if right is < than node */
  if (node.right !== null && node.right.data < node.data) return false;

  /* False if, recursively, the left or right is not a BST */
  if (!isBST(node.left) || !isBST(node.right)) return false;

  /* Passing all that, it's a BST */
  return true;
};

describe("Node class", () => {
  it("should create a node with new", () => {
    expect(new Node(10)).toEqual({ data: 10, left: null, right: null });
    expect(new Node(0)).toEqual({ data: 0, left: null, right: null });
    expect(new Node(-10)).toEqual({ data: -10, left: null, right: null });
  });
});

describe("Tree class", () => {
  const tree = new Tree(new Node(10), [9, 4, 11, 3, 28, 21, 13, 1, 0, 2, 15]);
  it("should create a binary search tree", () => {
    const badTree = new Node(10);
    badTree.left = new Node(11);

    expect(isBST(tree.root)).toBe(true);
    expect(isBST(badTree)).toBe(false);
  });

  it("should find if a node is included in a tree", () => {
    expect(tree.find(4).data).toEqual(new Node(4).data);
    expect(tree.find(4).left.data).toBe(3);
    expect(tree.find(4).right).toBe(null);
  });

  it("should insert a new Node in the tree", () => {
    tree.insert(30);
    expect(tree.find(28).right.data).toBe(30);
    expect(tree.find(30)).toEqual(new Node(30));
    expect(tree.find(5)).toBe("No Node Found!");
  });

  it("should return an array of the tree with preorder", () => {
    expect(tree.preorder()).toEqual([
      10, 9, 4, 3, 1, 0, 2, 11, 28, 21, 13, 15, 30,
    ]);
  });

  it("should return a sorted array of the tree with inorder", () => {
    expect(tree.inorder()).toEqual([
      0, 1, 2, 3, 4, 9, 10, 11, 13, 15, 21, 28, 30,
    ]);
  });

  it("should return a reversed sorted array of the tree with postorder", () => {
    expect(tree.postorder()).toEqual([
      30, 28, 21, 15, 13, 11, 10, 9, 4, 3, 2, 1, 0,
    ]);
  });
});

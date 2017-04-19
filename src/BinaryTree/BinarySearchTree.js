// @flow

/**
 * This class is used to represent every nodes on BST.
 */
class Node {
  id: number
  data: any
  left: ? Node
  right: ? Node

  constructor(id: number, data: any) {
    this.id = id;
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * This class is used to represent entire BST with their attributes.
 * 
 * BST Explanation:
 * Binary Search Tree is a data structure which every node can have maximum 2 child nodes.
 * 
 * Example:
 * 
 *                          60
 *                         /  \
 *                       50    75
 *                      /  \     \
 *                     30   55    89
 *                               /
 *                             80
 */
export default class BinarySearchTree {

  root: ? Node

  /**
   * This constructor always called when creating new BST
   */
  constructor() {
    this.root = null;
  }

  /**
   * adding specified data to binary search tree
   * @param {number} id
   * @param {any} data
   */
  add(id: number, data: any) {
    const newNode = new Node(id, data);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.addNodeRecursively(this.root, newNode);
    }
  }

  /**
   * adding specified data to binary search tree.
   * Must conform the BST's insertion method.
   *
   * If new node value is less than subroot's value, then go left recursively
   * If new node value is greater than subroot's value, then go right recursively
   *
   * @param {number} id
   * @param {any} data
   */
  addNodeRecursively(subroot: Node, newNode: Node) {
    if (newNode.id < subroot.id) {
      if (subroot.left === null) {
        subroot.left = newNode; // eslint-disable-line no-param-reassign
      } else {
        // $FlowFixMe
        this.addNodeRecursively(subroot.left, newNode);
      }
    } else if (newNode.id > subroot.id) {
      if (subroot.right === null) {
        subroot.right = newNode; // eslint-disable-line no-param-reassign
      } else {
        // $FlowFixMe
        this.addNodeRecursively(subroot.right, newNode);
      }
    }
  }

  /**
   * Doing level order traversal from BST's root to their leaf
   *
   * @returns any[]
   */
  levelOrderTraversal(): any[] {
    const queue = [];
    const result = [];
    queue.push(this.root);
    while (queue.length !== 0) {
      const n = queue.shift();
      // $FlowFixMe
      result.push(n.data);
      // $FlowFixMe
      if (n.left != null) queue.push(n.left);
      // $FlowFixMe
      if (n.right != null) queue.push(n.right);
    }
    return result;
  }

}

/* eslint-env jest */

import BinarySearchTree from '../../src/BinaryTree/BinarySearchTree';

describe('BST Test', () => {
    it('should return [30, 20, 45, 10, 60] after performing level order traversal', () => {
        const bst = new BinarySearchTree();
        bst.add(30, 30);
        bst.add(20, 20);
        bst.add(45, 45);
        bst.add(10, 10);
        bst.add(60, 60);

        const levelOrderTraversal = bst.levelOrderTraversal();

        expect(levelOrderTraversal).toEqual([30, 20, 45, 10, 60]);
    });
});
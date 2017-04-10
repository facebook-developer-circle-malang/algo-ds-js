/* eslint-env jest */

import SingleLinkedList from '../src/linkedlist/single/SingleLinkedList';

describe('Single linked list test', () => {
  /*
  * assume, when every testcase is being tested, we will create a linked list with 5 elements
  * [1] -> [2] -> [3] -> [4] -> [5]
  */
  it('should return linkedlist size = 5 after adding 5 elements', () => {
    const ll = new SingleLinkedList();
    for (let i = 1; i <= 5; i += 1) {
      ll.add(i);
    }
    expect(ll.size === 5).toBeTruthy();
  });

  it('should return head = 1 after adding 5 elements', () => {
    const ll = new SingleLinkedList();
    for (let i = 1; i <= 5; i += 1) {
      ll.add(i);
    }
    expect(ll.head.data === 1).toBeTruthy();
  });

  it('should return tail = 5 after adding 5 elements', () => {
    const ll = new SingleLinkedList();
    for (let i = 1; i <= 5; i += 1) {
      ll.add(i);
    }
    expect(ll.tail.data === 5).toBeTruthy();
  });

  it('should return a data from list index=3 after adding 5 elements', () => {
    const ll = new SingleLinkedList();
    for (let i = 1; i <= 5; i += 1) {
      ll.add(i);
    }
    expect(ll.get(3) === 4).toBeTruthy();
  });

  it('should return head = 2 after remove old head', () => {
    const ll = new SingleLinkedList();
    for (let i = 1; i <= 5; i += 1) {
      ll.add(i);
    }
    ll.remove(1);
    expect(ll.head.data === 2).toBeTruthy();
  });

  it('should return tail = 4 after remove old tail', () => {
    const ll = new SingleLinkedList();
    for (let i = 1; i <= 5; i += 1) {
      ll.add(i);
    }
    ll.remove(5);
    expect(ll.tail.data === 4).toBeTruthy();
  });

  it('should return list_elements[1]  = 3 after remove element at index = 1', () => {
    const ll = new SingleLinkedList();
    for (let i = 1; i <= 5; i += 1) {
      ll.add(i);
    }
    ll.remove(2);
    expect(ll.get(1) === 3).toBeTruthy();
  });
});

// @flow

/**
 * This class is used to represent every nodes on Single Linked List.
 */
class Node {
  data: any
  next: ?Node

    /**
     * This constructor always called when creating new Node
     *
     * @param {any} data
     * @param {?Node} next
     */
  constructor(data: any, next: ?Node) {
    this.data = data;
    this.next = next;
  }
}

/**
 * This class is used to represent entire Single Linked List with their attributes.
 */
export default class SingleLinkedList {

  head: ?Node
  tail: ?Node
  size: number

    /**
     * This constructor always called when creating new linked list
     */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

    /**
     * This method is used to check the linkedlist is empty or not
     *
     * @returns boolean
     */
  isEmpty(): boolean {
    return this.size === 0;
  }

    /**
     * This method is used to append data to the tail of the linkedlist
     *
     * @param {any} dataToBeAdded
     */
  add(dataToBeAdded: any) {
    const newNode = new Node(dataToBeAdded, null);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // $FlowFixMe
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

    /**
     * This method is used to return an element from specified index from linkedlist
     * Linkedlist index starts from 0
     *
     * @param {number} index
     * @returns any
     */
  get(index: number): any {
    if (index < 0 || index >= this.size) {
      throw new Error("There's no element found");
    }

    let temp = this.head;
    for (let i = 0; i < index; i += 1) {
      // $FlowFixMe
      temp = temp.next;
    }

    // $FlowFixMe
    return temp.data;
  }

    /**
     * This method is used to removing an element from linked list
     *
     * @param {any} dataToBeRemoved
     * @returns boolean
     */
  remove(dataToBeRemoved: any): boolean {
    let temp = this.head;
    while (temp !== null) {
      // $FlowFixMe
      if (temp.data === dataToBeRemoved && temp === this.head) {
        // $FlowFixMe
        this.head = this.head.next;
        this.size -= 1;
        return true;
      }

      // $FlowFixMe
      if (temp.next !== null) {
        // $FlowFixMe
        if (temp.next.data === dataToBeRemoved) {
          if (temp.next === this.tail) {
            this.tail = temp;
            // $FlowFixMe
            this.tail.next = null;
            this.size -= 1;
            return true;
          }

          // $FlowFixMe
          temp.next = temp.next.next;
          this.size -= 1;
          return true;
        }
      }

      temp = temp.next;
    }
    return false;
  }
}

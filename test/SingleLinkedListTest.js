/* eslint-env mocha */

import {assert} from 'chai'
import SingleLinkedList from '../src/linkedlist/single/SingleLinkedList'

describe('Single linked list test', () => {

    /*
     * assume, when every testcase is being tested, we will create a linked list with 5 elements
     * [1] -> [2] -> [3] -> [4] -> [5] 
     */

    it('should return linkedlist size = 5 after adding 5 elements', () => {
        var ll = new SingleLinkedList()
        for (var i = 1 ; i <= 5 ; i++) {
            ll.add(i)
        }
        assert(ll.size == 5)
    })

    it('should return head = 1 after adding 5 elements', () => {
        var ll = new SingleLinkedList()
        for (var i = 1 ; i <= 5 ; i++) {
            ll.add(i)
        }
        assert(ll.head.data == 1)
    })

    it('should return tail = 5 after adding 5 elements', () => {
        var ll = new SingleLinkedList()
        for (var i = 1 ; i <= 5 ; i++) {
            ll.add(i)
        }
        assert(ll.tail.data == 5)
    })

    it('should return a data from list index=3 after adding 5 elements', () => {
        var ll = new SingleLinkedList()
        for (var i = 1 ; i <= 5 ; i++) {
            ll.add(i)
        }
        assert(ll.get(3) == 4)
    })

    it('should return head = 2 after remove old head', () => {
        var ll = new SingleLinkedList()
        for (var i = 1 ; i <= 5 ; i++) {
            ll.add(i)
        }
        ll.remove(1)
        assert(ll.head.data == 2)
    })

    it('should return tail = 4 after remove old tail', () => {
        var ll = new SingleLinkedList()
        for (var i = 1 ; i <= 5 ; i++) {
            ll.add(i)
        }
        ll.remove(5)
        assert(ll.tail.data == 4)
    })

    it('should return list_elements[1]  = 3 after remove element at index = 1', () => {
        var ll = new SingleLinkedList()
        for (var i = 1 ; i <= 5 ; i++) {
            ll.add(i)
        }
        ll.remove(2)
        assert(ll.get(1) == 3)
    })
})
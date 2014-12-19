'use strict';

function Queue() {
  this.queue  = [];
  this.offset = 0;
}

Object.defineProperties(Queue.prototype, {

  length: {
    get: function get_length() {
      return (this.queue.length - this.offset);
    },
    enumerable: true
  },

  isEmpty: {
    get: function get_isEmpty() {
      return (this.queue.length === 0);
    },
    enumerable: true
  },

  enqueue: {
    value: function enqueue(item) {
      this.queue.push(item);
    },
    enumerable: true
  },

  dequeue: {
    value: function dequeue() {
      if (this.queue.length === 0) { return undefined; }
      var item = this.queue[this.offset];
      if (++ this.offset * 2 >= this.queue.length) {
        this.queue  = this.queue.slice(this.offset);
        this.offset = 0;
      }
      return item;
    },
    enumerable: true
  },

  peek: {
    value: function peek() {
      return (this.queue.length > 0 ? this.queue[this.offset] : undefined);
    },
    enumerable: true
  }
});

module.exports = Queue;

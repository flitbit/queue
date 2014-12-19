# queue

A simple but formal javascript queue.

This is a formalized update to [Stephen Moreley's queue implementation](http://code.stephenmorley.org/javascript/queues/), mostly because I needed one that couldn't be monkey-patched.

## Use

```javascript
var Q = require('queue');

var q = new Q();

// obviously empty...
if (q.isEmpty) {
  console.log('oopsy, nobody home');
}

// it has a length...
if (q.length === 0) {
  console.log('still, nobody home');
}

// we can enqueue...
q.enqueue('Phillip');

// we can peek...
if (q.peek()) {
  console.log('' + q.peek() + ' is home');
}

// it knows how many items it has...
if (q.length) {
  console.log('somebody is home!');
}

// we can dequeue...
var someone = q.dequeue();
if (someone) {
  console.log('' + someone + ' is home');
}

// and dequeuing an empty queue is undefined...
if (typeof q.dequeue() === 'undefined') {
  console.log('back to nobody home');
}

```

var Q = require('../');

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

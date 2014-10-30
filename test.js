var stack = require('./index.js');

foo();

function foo() {
  bar();
}

function bar() {
  baz();
}

function baz() {
  qux();
}
function qux(){
  quux();
}
function quux(){
  stack();
}
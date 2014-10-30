#node-trace-func [![Build Status]
===============

A Function stack in node.js using JavaScriptStackTraceApi 

# Install:
  
   npm install trace-func

# Example:

 ```js
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
```

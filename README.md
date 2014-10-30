#node-trace-func 

A Function stack in node.js using JavaScriptStackTraceApi 

# Install:
  
   npm install trace-func

# Example:

 ```js
 var stack = require('trace-func');
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
    stack(); // call stack
  }
```
# Output-format
  Function Name  location  [row,column]


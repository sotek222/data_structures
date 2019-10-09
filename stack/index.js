console.log("%cSTACK IMPLEMENTATIONS:", "background-color: red; color: white; font-size: 25px;");

const stack = new Stack();
stack.push("Procedure 1");
stack.push("Procedure 2");
stack.push("Procedure 3");
stack.push("Procedure 4");
// => stack.data -> ["Procedure 1", "Procedure 2", "Procedure 3", "Procedure 4"];
stack.pop();
// => ["Procedure 1", "Procedure 2", "Procedure 3"]
stack.peek()
// => "Procedure 3"
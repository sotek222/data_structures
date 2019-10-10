// Array implementation:

// class Stack{
//   constructor(){
//     this.data = new Array();
//   }

//   push(ele){
//     this.data.push(ele);
//   }

//   pop(ele){
//     return this.data.pop();
//   }

//   peek(){
//     return this.data[this.data.length -1];
//   }
// }

// LinkedList implementation 
class Stack {
  constructor() {
    this.data = new LinkedList();
  }

  push(ele){
    return this.data.insertFirst(ele);
  }

  pop(){
    return this.data.removeFirst();
  }

  peek(){
    return this.data.getFirst();
  }

}
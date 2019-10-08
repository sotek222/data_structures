// Array implementation:

class Stack{
  constructor(){
    this.data = [];
  }

  push(ele){
    this.data.push(ele);
  }

  pop(ele){
    return this.data.pop();
  }

  peek(){
    return this.data[this.data.length -1];
  }
}

// LinkedList implementation 
// class Stack {
//   constructor() {
//     this = new LinkedList();
//   }
// }
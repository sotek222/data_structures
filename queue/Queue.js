// -> [] ->
// Array implementation: 

// class Queue {
//   constructor(){
//     this.data = new Array();
//   }

//   enqueue(data){
//     return this.data.unshift(data);
//   }

//   dequeue(){
//     return this.data.pop();
//   }

//   isEmpty(){
//     return !this.data.length
//   }
// };

// LinkedList implementation:
class Queue {
  constructor(){
    this.data = new LinkedList();
  }

  enqueue(data){
    this.data.insertFirst(data)
  }

  dequeue(){
    this.data.removeLast();
  }

  isEmpty(){
    return !this.data.size()
  }
}
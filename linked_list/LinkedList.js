class LinkedList {
  constructor(head = null){
    // Set the head of the LL;
    this.head = head;
    // Set the tail of the LL;
    this.tail = head;
    // The length is set when the LL is set up to 0 if there is no head or 1 if there is;
    this.length = this.head ? 1 : 0;
  }

  insertFirst(data){
    const newNode = new Node(data, this.head);
    if (!this.head) this.tail = newNode;
    this.head = newNode
    this.length++;
  }

  size(){
    return this.length;
  }

  // Linear implementation:
  // size(){
  //   let counter = 0;

  //   if(this.head){
  //     let node = this.head;
  //     counter = 1;
  //     while(node) {
  //       node = node.next;
  //       counter++;
  //     }
  //     return counter;
  //   }
  //   return counter;
  // }

  getFirst(){
    return this.head;
  }

  
  // Linear implementation:
  // getLast(){
    //   let node = this.head;
    
    //   while(node.next !== null) {
      //     node = node.next;
      //   }
      //   return node;
      // }

  getLast(){
    return this.tail;
  }
  
  clear(){
    this.head = null, this.tail = null;
    this.length = 0;
    return this.length;
  }
  
  // const ll = {
  //   data: "c",
  //   next: {
  //     data: "b",
  //     next: {
  //       data: "a",
  //       next: null
  //     }
  //   }
  // }
  
  removeFirst(){
    this.head = this.head.next;
    this.length--;
    return this.head;
  }

  // removes the last node in the chain
  removeLast(){
    if(!this.head) return null;

    if(this.head.next) {
      let node = this.head;
  
      // prevents us from getting to the last node, since the 
      // node.next.next will point to null if we are the second to last node
      while(node.next.next !== null){
        node = node.next;
      }
      node.next = null;
      this.tail = node;
      this.length--;
      return node;
    } else {
      this.head = null;
      this.tail = this.head;
      this.length--;
      return this.head;
    }
  }

  insertLast(data){
    let node = this.head;

    while(node !== this.tail){
      node = node.next;
    }

    node.next = new Node(data);
    this.tail = node.next;
    this.length++;
  }	

  // getAt(integer)	(Node)	Returns the node at the provided index
  getAt(index){
    let position = 0;
    let node = this.head;

    while(position < index && node){
      position++;
      node = node.next;
    };
    return node;
  }

  // removeAt(integer)	-	Removes node at the provided index
  removeAt(index){
    if(index === 0){
      this.removeFirst();
    } else if(index === this.length - 1) {
      this.removeLast();
    } else {
      const nodeBefore = this.getAt(index - 1);
      const nextNode = this.getAt(index + 1);
      nodeBefore.next = nextNode; 
      this.length--;
    }
    return this.getAt(index);
  }

// insertAt	(Data, integer)	-	
// Create an insert a new node at provided index. If index is out of bounds, 
// add the node to the end of the list.
  insertAt(data, index = 0){
    if(index <= 0){
      this.insertFirst(data);
    } else if(index >= this.length - 1){
      this.insertLast(data);
    } else {
      // first we need to find the node at before the given index.
      const before = this.getAt(index - 1);
      // we then need the node at the index. 
      const previous = this.getAt(index);
      // we need to set the nodeBefore.next = a new Node(data, next = this.getAt(index))
      before.next = new Node(data, previous);
      // And increase the length
      this.length++;
      return before.next;
    }
  }

  // forEach(function) -	Calls the provided function with every node of the chain
  forEach(cb){
    let node = this.head
    for(let i = 0; i < this.length; i++){
      cb(node);
      node = node.next;
    }
  }

}


class ListIterator {
  constructor(list){
    this.list = list;
    this.member = 0;
  }

  next(){
    let node = this.list.getAt(this.member);
    if(!node) return {done: true};

    let value = node;

    this.member++;

    return { value, done: false }
  }
}

LinkedList.prototype[Symbol.iterator] = function(){
  return new ListIterator(this);
}
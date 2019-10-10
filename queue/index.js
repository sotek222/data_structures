const queue = new Queue();
queue.enqueue({name: "Matt", ticket: 1});
// Back -> ["Matt"] <- Front
queue.enqueue({name: "Tom", ticket: 2});
// Back -> ["Tom", "Matt"] <- Front
queue.enqueue({name: "Sam", ticket: 3});
// Back -> ["Sam", "Tom", "Matt"] <- Front
queue.enqueue({name: "Dom", ticket: 4});
// Back -> ["Dom", "Sam", "Tom", "Matt"] <- Front

queue.dequeue();
// Back -> ["Dom", "Sam", "Tom"] <- Front

queue.isEmpty();
// false;


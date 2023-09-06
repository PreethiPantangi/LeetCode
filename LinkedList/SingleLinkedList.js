var head;

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function push(data) {
    let newNode = new Node(data);
    newNode.next = head; 
    head = newNode;
}

head = new Node(10);
console.log(head);
push(20);
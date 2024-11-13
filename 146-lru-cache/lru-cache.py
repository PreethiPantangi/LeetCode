class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value 
        self.next = None
        self.prev = None 

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.head = Node(-1, 1)
        self.tail = Node(-1, 1) 
        self.head.next = self.tail
        self.tail.prev = self.head

    def addNode(self, node):
        current_node = self.tail.prev 
        current_node.next = node 
        node.prev = current_node 
        node.next = self.tail
        self.tail.prev = node

    def removeNode(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev 

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        node = self.cache[key]
        self.removeNode(node)
        self.addNode(node)
        return node.value        
        
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            self.removeNode(node)
        new_node = Node(key, value)
        self.cache[key] = new_node
        self.addNode(new_node)

        if len(self.cache) > self.capacity:
            delete_node = self.head.next
            self.removeNode(delete_node)
            del self.cache[delete_node.key]




# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
from collections import deque
class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.queue = deque([])
        self.cache = {}

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        value = self.cache[key]
        self.queue.remove(key)
        self.queue.appendleft(key)
        return value
        
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache[key] = value
            self.queue.remove(key)
            self.queue.appendleft(key)
        else:
            if len(self.cache) >= self.capacity:
                lru_key = self.queue.pop()
                del self.cache[lru_key]
            self.cache[key] = value
            self.queue.appendleft(key)



# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
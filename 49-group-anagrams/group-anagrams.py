class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        _map = {}
        for word in strs:
            sorted_word = word
            sorted_word = ''.join(sorted(word))
            if sorted_word in _map:
                _map[sorted_word].append(word)
            else:
                _map[sorted_word] = [word]
        return list(_map.values())
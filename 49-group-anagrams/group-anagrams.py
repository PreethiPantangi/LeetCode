class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        _map = {}
        for s in strs:
            sortedStr = ''.join(sorted(s))
            if sortedStr in _map:
                _map[sortedStr].append(s)
            else:
                _map[sortedStr] = [s]
        return list(_map.values())
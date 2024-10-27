class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        left = 0
        right = 0
        _hash = [-1] * 255
        result = 0

        while right < n:
            if _hash[ord(s[right])] != -1:
                if _hash[ord(s[right])] >= left:
                    left = _hash[ord(s[right])] + 1
            result = max(result, right - left + 1)
            _hash[ord(s[right])] = right 
            right += 1
        return result 
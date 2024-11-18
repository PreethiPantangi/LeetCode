class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0:
            return []
        
        mapping = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        def getCombinations(index, s):
            if len(s) == len(digits):
                result.append("".join(s))
                return
            
            letters = mapping[digits[index]]
            for letter in letters:
                s.append(letter)
                getCombinations(index+1, s)
                s.pop()
        
        result = []
        getCombinations(0, [])
        return result
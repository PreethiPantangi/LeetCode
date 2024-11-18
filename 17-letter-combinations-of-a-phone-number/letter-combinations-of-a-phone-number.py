class Solution:
    def generateCombinations(self, arr1, arr2):
        result = []
        for i in range(len(arr1)):
            for j in range(len(arr2)):
                result.append(arr1[i] + arr2[j])
        return result

    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0:
            return []
        mapping = {
            "2": ["a", 'b', 'c'],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"]
        }

        result = mapping[digits[0]]

        for i in range(1, len(digits)):
            result = self.generateCombinations(result, mapping[digits[i]])
        return result
        
from collections import Counter 

class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        paragraph = ''.join([word.lower() if word.isalnum() else ' ' for word in paragraph])
        words = paragraph.split()
        dic = Counter()
        for word in words:
            if word not in banned:
                if word in dic:
                    dic[word] += 1
                else:
                    dic[word] = 1
        return dic.most_common(1)[0][0]

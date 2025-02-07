class Solution:
    def queryResults(self, limit: int, queries: List[List[int]]) -> List[int]:
        ball_color_mapping = {}
        color_count = defaultdict(int)
        distinct_colors = 0
        result = []
        
        for [ball, color] in queries:
            if ball in ball_color_mapping:
                prev_color = ball_color_mapping[ball]
                color_count[prev_color] -= 1
                if color_count[prev_color] == 0:
                    distinct_colors -= 1
            
            ball_color_mapping[ball] = color
            color_count[color] += 1
            
            if color_count[color] == 1:
                distinct_colors += 1
            result.append(distinct_colors)
        return result
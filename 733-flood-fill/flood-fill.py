class Solution:
    def dfs(self, image, row, col, rows, cols, original_color, color):
        if row < 0 or row >= rows or col < 0 or col >= cols or image[row][col] != original_color:
            return
        image[row][col] = color
        self.dfs(image, row+1, col, rows, cols, original_color, color)
        self.dfs(image, row-1, col, rows, cols, original_color, color)
        self.dfs(image, row, col+1, rows, cols, original_color, color)
        self.dfs(image, row, col-1, rows, cols, original_color, color)
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        if image[sr][sc] == color:
            return image
        self.dfs(image, sr, sc, len(image), len(image[0]), image[sr][sc], color)
        return image
        
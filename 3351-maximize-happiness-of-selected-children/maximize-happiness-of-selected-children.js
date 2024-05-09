/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  let i = 0;
  let max = 0;
  while(k > 0 && i < happiness.length) {
    happiness[i] = Math.max(happiness[i] - i, 0);
    max += happiness[i];
    i += 1;
    k -= 1;
  }
  return max;
};

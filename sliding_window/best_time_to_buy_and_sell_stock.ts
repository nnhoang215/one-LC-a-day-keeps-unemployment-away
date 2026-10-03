class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    // O(n) O(1)
    maxProfit(prices: number[]): number {
        let l = 0,
            r = 1;
        let maxP = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                maxP = Math.max(prices[r] - prices[l], maxP);
            } else {
                l = r;
            }
            r++;
        }

        return maxP;
    }
}

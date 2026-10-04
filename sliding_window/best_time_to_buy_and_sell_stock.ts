class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0, r = 1;
        let max = 0;
        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
            } else if (prices[r] > prices[l]) {
                max = Math.max(prices[r] - prices[l], max);
            }

            r++;
        }

        return max;
    }
}

/**
#1 brute force: loop through all possible price pairs, Math.max for the max. O(n^2) O(1)

#2 sliding window: l,r 

l = 0, r = 1. 

If r < l => l = r, r++
If r > l => Math.max difference

O(N) O(1)
I did this :) 

 */


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

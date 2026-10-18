class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const n = nums.length;
        prefix[0] = 1;

        let product = 1;
        for (let i = 0; i < n - 1; i++) {
            product = product * nums[i];
            prefix[i + 1] = product;
        }

        const suffix = [];
        suffix[n - 1] = 1;
        product = 1;
        for (let i = n - 1; i > 0; i--) {
            product = product * nums[i];
            suffix[i - 1] = product;
        }

        const res = [];
        for (let i = 0; i < n; i++) {
            res.push(prefix[i] * suffix[i]);
        }

        return res;
    }
}

/*
Naive way: O(n^2)
Memoization? 
prefix & suffix O(3n) => O(N) O(N)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }

        return res;
    }
}


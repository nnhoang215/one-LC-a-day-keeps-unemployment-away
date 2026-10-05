class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // O(n) O(n)
    twoSum(nums: number[], target: number): number[] {
        const visited = new Map();
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let invert = target - num;

            if (visited.has(invert)) {
                res[0] = visited.get(invert);
                res[1] = i;
                break;
            } else {
                visited.set(num, i);
            }
        } 

        return res;
    }
}

// Target could be negative, numbers could be negative

// Brute force: try out every pair O(n^2)

// Visited map where it stores the index. O(n)



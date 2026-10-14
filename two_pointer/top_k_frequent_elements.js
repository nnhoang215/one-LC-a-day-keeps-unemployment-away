class Solution {
    
    // O(n log n) O(n)
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const arr = Object.entries(count).map(([num, freq]) => [
            freq,
            parseInt(num),
        ]);
        arr.sort((a, b) => b[0] - a[0]);

        return arr.slice(0, k).map((pair) => pair[1]);
    }
}
// ------------
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        // Better to use minHeap because of memory efficiency
        const heap = new MinPriorityQueue((x) => x[1]);
        for (const [num, cnt] of Object.entries(count)) {
            heap.enqueue([num, cnt]);
            if (heap.size() > k) heap.dequeue();
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            const[num, cnt] = heap.dequeue();
            res.push(num);
        }

        return res;
    }
}


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // O(n log k ) O(n + k)
    topKFrequent(nums, k) {
        const count = {};
        for (let n of nums) {
            count[n] = (count[n] || 0) + 1; 
        }

        const heap = new MinPriorityQueue((x) => x[1]);

        for (let [num, c] of Object.entries(count)) {
            heap.enqueue([num, c]);
            if (heap.size() > k) heap.dequeue();
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            const [num, c] = heap.dequeue();
            res.push(num);
        }

        return res;
    }
}

review #2
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // O(3N) => O(n), space is O(n)
    topKFrequent(nums, k) {
        const count = {};
        // First argument is iterable arg, meaning u can pass in an array-like object -- aka object with non-negative length. 
        // be careful of off-by-1 mistake here.
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (const c in count) {
            freq[count[c]].push(parseInt(c));
        }

        const res = [];

        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);

                if (res.length == k) {
                    return res;
                }
            }
        }
    }
}


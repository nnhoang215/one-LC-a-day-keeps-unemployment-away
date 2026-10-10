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



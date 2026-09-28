class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length === 0) return 0;
        if (s.length === 1) return 1;

        let res = 0;
        let l = 0;
        const map = new Map();
        let count = 0;

        for (let r = 0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);

            while (map.get(s[r]) > 1) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }
            
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}

/**
without duplicate chars
length >= 0
freqCount = 

z: 0
x: 2
y: 1


s contains printable ascii characters 
O(n) O(1) 
 */


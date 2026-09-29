// O (n), O (1)
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0, res = 0;
        const map = new Map();

        for (let r = 0; r < s.length; r++) {
            if (map.has(s[r])) {
                l = Math.max(map.get(s[r]) + 1, l);
            }
            
            map.set(s[r], r);
            res = Math.max(res, r - l + 1);
        } 

        return res;
    }
}

 */


/* 

class Solution {
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

*/

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


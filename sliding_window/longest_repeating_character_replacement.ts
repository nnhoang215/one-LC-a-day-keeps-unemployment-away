/* O (n^2) O(n)
 class Solution {
    characterReplacement(s, k) {
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            let count = new Map();
            let maxf = 0;
            for (let j = i; j < s.length; j++) {
                count.set(s[j], (count.get(s[j]) || 0) + 1);
                maxf = Math.max(maxf, count.get(s[j]));
                if (j - i + 1 - maxf <= k) {
                    res = Math.max(res, j - i + 1);
                }
            }
        }
        return res;
    }
}
*/
// O(n * m) m = unique chars, O (m)
class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     * 
     * AAABABA k = 1
     */
    characterReplacement(s: string, k: number): number {
        const charSet = new Set(s);
        let res = 0;

        for (let c of charSet) {
            let l = 0;
            let count = 0;

            for (let r = 0; r < s.length; r++) {
                if (s[r] === c) count++;

                while (r - l + 1 - count > k) {
                    if (s[l] === c) count--;
                    l++;
                }

                res = Math.max(res, r - l + 1);
            }
        }

        return res;
    }
}

// O (n*m) but then m at maximum just 26 characters in the alphabet => Basically O(n)        

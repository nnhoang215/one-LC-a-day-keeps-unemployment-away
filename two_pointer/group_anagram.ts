class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - a.charCodeAt(0)] += 1;
            }
            const key = count.join(,);
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}


/***
Check if a string is permutation of another string 

brute force: O(n^2)

can we use rolling hash for this? O(n * m) where m is the length of the longest string -> 100 -> O(n)

act 

pots
 */

//Java Solution

class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.length() == 0) {
            return 0;
        }
        
        int n = haystack.length();
        int l = needle.length();
        
        for (int i = 0; i < n - l + 1; i++) {
            if (haystack.substring(i, i + l).equals(needle)) {
                return i;
            }
        }
        
        return -1;
    }
}
const lengthOfLongestSubstring = (s) => {

    const cache = new Map();

    let start = 0;
    let max = 0;

    for (let end = 0; end < s.length; end ++) {
      if (cache.has(s[end]) && cache.get(s[end]) >= start) {

        max = Math.max(res, end - start);
        start = cache.get( s[end] ) + 1;
      }

      cache.set(s[end], end);
    }

    return Math.max(max, s.length - start);
  };

console.log(lengthOfLongestSubstring("au"));

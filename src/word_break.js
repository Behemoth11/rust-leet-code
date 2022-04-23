var wordBreak = function (s, wordDict) {
  let memory = {};

  const main = (s, wordDict) => {
    if (s.length === 0) { return true; }
    if (memory[s] !== undefined) { return memory[s]; }

    for (let i = 0; i < wordDict.length; i++) {
      let word = wordDict[i];

      let len = word.length;

      if (s.slice(0, len) === word && main(s.slice(len), wordDict)) {
        memory[s] = true;
        return true;
      }
    }

    memory[s] = false;
    return false;
  };

  return main(s, wordDict);
};

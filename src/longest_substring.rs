use std::{collections::HashMap, cmp};



pub struct Solution;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {

        let mut cache: HashMap< char, usize > = HashMap::new();
        let mut start: usize = 0;
        let mut  max = 0;

        for (end, letter) in s.chars().enumerate() {
            if cache.contains_key(&letter) && *cache.get(&letter).unwrap() >= start {
                max = cmp::max(max,  end - start );
                start = *cache.get(&letter).unwrap() + 1;
            }

            cache.insert(letter, end);
        }

        return cmp::max(max,  s.len() - start ) as i32;
        
    }
}

#[test]
fn should_word() {

}

use std::collections::HashMap;

pub struct Solution;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut cache: HashMap<i32, usize> = HashMap::new();

        
        for (number_idx, number) in nums.iter().enumerate() {
            
            let pair_idx = cache.get(&(target - number));

            if let Some(pair_idx) = pair_idx {
                return vec![number_idx as i32, *pair_idx as i32];
            }


            cache.insert(*number, number_idx);
        }

        return vec![0, 0];
    }
}

#[test]
fn should_find_correct_match() {

    let result= Solution::two_sum(vec![2,7,11,15], 9);
    assert_eq!(result, vec![1,0]);

    let result= Solution::two_sum(vec![3,2,4], 6);
    assert_eq!(result, vec![2,1]);

    let result= Solution::two_sum(vec![3,3], 6);
    assert_eq!(result, vec![1, 0]);

}

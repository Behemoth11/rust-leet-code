pub struct Solution;


impl Solution {
    pub fn solve(digits: String) -> Vec<String> {
        
    }
}

#[test]
fn should_word() {
    assert_eq!(49, Solution::max_area(vec![1, 8, 6, 2, 5, 4, 8, 3, 7]));
    assert_eq!(1, Solution::max_area(vec![1, 1]));
    assert_eq!(17, Solution::max_area(vec![2, 3, 4, 5, 18, 17, 6]));
}

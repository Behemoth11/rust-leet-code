pub struct Solution;

impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut l = 0;
        let mut r = height.len() - 1;
        let mut max_area = 0;

        while l < r {
            let width = (r - l) as i32;
            if height[l] < height[r] {
                max_area = max(max_area, height[l] * width);
                l += 1;
            } else {
                max_area = max(max_area, height[r] * width);
                r -= 1;
            }
        }
        max_area
    }
}

#[test]
fn should_word() {
    assert_eq!(49, Solution::max_area(vec![1, 8, 6, 2, 5, 4, 8, 3, 7]));
    assert_eq!(17, Solution::max_area(vec![2, 3, 4, 5, 18, 17, 6]));
    assert_eq!(1, Solution::max_area(vec![1, 1]));
}

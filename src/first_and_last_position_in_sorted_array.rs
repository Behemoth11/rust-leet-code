
// This if my own implementation of [first and last position in
// sorted array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

struct Solution;

impl Solution {
    pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
        if nums.len() == 0 { return vec![-1, -1]}
        let mut idx = None;

        // left and right are purposely chosen out of bound range, to not have 
        // check if they are the target. I allows for a more consistent behavior; 

        let mut left_bound : i32 = -1 ;
        let mut right_bound: i32 = nums.len() as i32;


        while left_bound + 1  < right_bound {
            let center = ((right_bound + left_bound) / 2 )as usize;
            if nums[center] < target {
                left_bound = center as i32;
            } else if nums[center] > target {
                right_bound = center as i32;
            }else {
                idx = Some(center);
                break;
            }
        }

        
        if let Some(idx) = idx {
            let mut  first = idx as i32;
            let mut last = idx as i32;

            while left_bound + 1 < first as i32 {
                let center = ((left_bound + first) /2) as usize ;
                if nums[center]  < target { left_bound = center as i32}
                else {first = center as i32};
            }

            while last + 1 < right_bound {
                let center =( (last + right_bound) /2  ) as usize;
                if nums[center] > target { right_bound = center as i32}
                else { last = center as i32};
            }

            return vec![first, last];
        }
        else {return vec![-1,-1]}
    }
}

#[test]
fn should_work(){
    assert_eq!(vec![3,4], Solution::search_range(vec![5,7,7,8,8,10], 8));
    assert_eq!(vec![0,0], Solution::search_range(vec![8], 8));
    assert_eq!(vec![0,1], Solution::search_range(vec![8,8], 8));   
    assert_eq!(vec![-1,-1], Solution::search_range(vec![], 8));   
}
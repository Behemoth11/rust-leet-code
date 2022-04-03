pub struct Solution;

impl Solution {
    pub fn solution(nums: Vec<i32>, target: i32) -> i32 {
        let len = nums.len();

        if len == 1 {
            if nums[0] == target {
                return 0;
            } else {
                return -1;
            }
        }

        let mut center = 1;
        let mut left_bound = 0;
        let mut right_bound = nums.len() - 1;

        let has_been_flipped = nums[right_bound] < nums[0];

        while has_been_flipped {
            center = (left_bound + right_bound) / 2;

            if nums[center] < nums[0] {
                if nums[center - 1] > nums[0] {
                    break;
                } else {
                    right_bound = center
                };
            } else {
                if nums[center + 1] < nums[0] {
                    center += 1;
                    break;
                } else {
                    left_bound = center
                };
            }
        }

        if nums[0] <= target && target <= nums[center - 1] {
            left_bound = 0;
            right_bound = center
        } else if nums[center] <= target && target <= nums[len - 1] {
            left_bound = center;
            right_bound = len
        } else {
            return -1;
        }

        center = 0;
        for idx in left_bound..right_bound {
            center = (left_bound + right_bound) / 2;

            if nums[center] < target {
                left_bound = center
            } else if nums[center] > target {
                right_bound = center
            } else {
                return center as i32;
            };
        }

        -1
    }
}


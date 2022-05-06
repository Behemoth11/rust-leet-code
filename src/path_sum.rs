#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

use std::cell::RefCell;
use std::rc::Rc;

struct Solution {}

impl Solution {
    pub fn has_path_sum(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> bool {
        if let Some(root) = root {
            let main = |root: Rc<RefCell<TreeNode>>, previous_sum: i32| -> bool {

                let root = root.borrow();
                let current_sum = previous_sum + root.val;

                if let ( Some ( left_root ), Some ( right_root )  ) =  ( root.left.as_ref(), root.right.as_ref() ) {

                    
                }


                if current_sum == target_sum { return true } else { return false}
            };

            return main(root, 0);
        }

        return false;
    }
}

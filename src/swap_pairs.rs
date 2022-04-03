use std::rc::Rc;

/**
 * Recursive solution
 */

// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

pub struct Solution;

impl Solution {
    pub fn swap_pairs(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        
        // let head = Rc::new(head);

        if let Some(mut principal_node) = head {
            let nested_node = Rc::get_mut(&mut Rc::new(principal_node.next)).unwrap();
            if let Some(mut secondary_node) = nested_node {
                let temp = secondary_node.next;

                // secondary_node.next = Some(principal_node);

                principal_node.next = Solution::swap_pairs(temp);

                // return Some(secondary_node);
                return None;
            }

            return Some(principal_node);
        }

        return None;
    }
}

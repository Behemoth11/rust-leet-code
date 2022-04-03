use std::rc::Rc;

struct LinkedList<'a, T> {
    val: T,
    next: Option<&'a Box<LinkedList<'a, T>>>,
}

struct Solution;
impl Solution {
    pub fn linked_list_cycle<'a>(head: Option<&'a Box<LinkedList<i32>>>) -> bool {
        let mut fast = Rc::new(&head);
        let mut head = Rc::new(&head);

        while let (Some(current_fast), Some(current_head)) = (**fast, **head) {

            // comparing the raw pointer reference of current_fast and current_head
            if current_fast as *const Box<LinkedList<i32>> == current_head as *const Box<LinkedList<i32>> {
                return true;
            };

            match &current_fast.next {
                Some(intermediate) => {
                    fast = Rc::new(&intermediate.next);
                    head = Rc::new(&current_head.next);
                }
                None => return false,
            }
        }

        return false;
    }
}

#[test]
fn should_return_false_when_there_is_no_cycle() {
    let mut node_1 = Box::new(LinkedList { val: 1, next: None });
    let mut node_2 = Box::new(LinkedList { val: 2, next: None });
    let mut node_3 = Box::new(LinkedList { val: 3, next: None });
    let node_4 = Box::new(LinkedList { val: 4, next: None });

    node_3.next = Some(&node_4);
    node_2.next = Some(&node_3);
    node_1.next = Some(&node_2);

    let result = Solution::linked_list_cycle(Some(&node_1));

    assert_eq!(result, false)
}

#[test]
fn should_return_true_when_there_is_a_cycle() {
    let mut node_1 = Box::new(LinkedList { val: 1, next: None });
    let mut node_2 = Box::new(LinkedList { val: 2, next: None });
    let mut node_3 = Box::new(LinkedList { val: 3, next: None });
    let mut node_4 = Box::new(LinkedList { val: 4, next: None });

    unsafe {
        let node_4 = &mut node_4 as *mut Box<LinkedList<i32>>;
        node_3.next = Some(&*node_4);
        node_2.next = Some(&node_3);
        node_1.next = Some(&node_2);
        (*node_4).next = Some(&node_1);
    }

    let result = Solution::linked_list_cycle(Some(&node_1));

    assert_eq!(result, true)
}

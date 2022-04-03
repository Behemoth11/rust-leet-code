pub struct Solution;

impl Solution {
    pub fn generate_parentheses(n: i32) -> Vec<String> {
        let mut parentheses_tracker: Vec<String> = Vec::new();
        let mut usage_tracker : Vec<(i32, i32)> = Vec::new();

        parentheses_tracker.push(String::from("("));
        usage_tracker.push((n-1, n));

        for _ in 0..n * 2 -1  {
            let len = parentheses_tracker.len();

            for idx in 0..len {

                let parentheses = &parentheses_tracker[idx];
                let (left, right) = &usage_tracker[idx];

                let mut new_adds: Vec<(String, (i32, i32))> = Vec::new();

                if *left > 0 {
                    new_adds.push((parentheses.clone() + "(", (*left -1, *right )));
                }

                if *left < *right {
                    new_adds.push((parentheses.clone() + ")", ( *left , *right -1 )));
                }


                if new_adds.len() == 2 {
                    let (parentheses, usage) = new_adds.remove(0);
                    
                    //adds to parentheses first;
                    parentheses_tracker[idx] = parentheses;
                    usage_tracker[idx] = usage;

                    let (parentheses, usage) = new_adds.remove(0);

                    // add a new items because place has been used;
                    parentheses_tracker.push(parentheses);
                    usage_tracker.push(usage);
                }
                else {
                    let (parentheses, usage) = new_adds.remove(0);

                    parentheses_tracker[idx] = parentheses;
                    usage_tracker[idx] = usage;
                }
            }

        }
        
        parentheses_tracker
    }
}

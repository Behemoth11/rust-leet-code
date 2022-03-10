
#[global_allocator]
static ALLOC: jemallocator::Jemalloc = jemallocator::Jemalloc;


pub struct Solution;

impl Solution {
    fn get_corresponding_characters<'a>(string_number: String) -> Vec<String> {
         match string_number.as_str() {
            "2" => vec![String::from("a"),String::from("b"),String::from("c")],
            "3" => vec![String::from("d"),String::from("e"),String::from("f")],
            "4" => vec![String::from("g"),String::from("h"),String::from("i")],
            "5" => vec![String::from("j"),String::from("k"),String::from("l")],
            "6" => vec![String::from("m"),String::from("n"),String::from("o")],
            "7" => vec![String::from("p"),String::from("q"),String::from("r"),String::from("s")],
            "8" => vec![String::from("t"),String::from("u"),String::from("v")],
            "9" => vec![String::from("w"),String::from("x"),String::from("y"), String::from("z")],

            _ => panic!("Received a number outside of the range"),
        }
    }

    pub fn letter_combinations(digits: String) -> Vec<String> {
        let mut all_letter_combinations: Vec<String> = Vec::new();

        for unit_key_character in digits.chars().map(|x| x.to_string()) {

            let corresponding_characters = Solution::get_corresponding_characters(unit_key_character);
            let len = all_letter_combinations.len();

            // If empty ( first iteration ), the vector is filled with whatever value is mapped to the digit 
            if len == 0 {
                all_letter_combinations = corresponding_characters;
                continue;
            }
            
            // copies the current possibilities contained in the vector and adds new string by adding all possibilities;
            // this must be done before updating the vector first element
            for idx in 0..len {

                for possible_letter in &corresponding_characters[1..] {
                    
                    let mut additional_combination = all_letter_combinations[idx].clone();
                    additional_combination.push_str(&possible_letter);

                    all_letter_combinations.push(additional_combination);
                }

            }
            
            // Update of the array first element after they are no more needed;
            for idx in 0..len {
                all_letter_combinations[idx].push_str(&corresponding_characters[0]);
            }

        }

        all_letter_combinations
    }
}

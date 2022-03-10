

use std::thread;
use std::time::Duration;
use jemalloc_ctl::{stats, epoch};

#[global_allocator]
static ALLOC: jemallocator::Jemalloc = jemallocator::Jemalloc;


fn main() {
    // loop {
    //     // many statistics are cached and only updated when the epoch is advanced.
    //     epoch::advance().unwrap();

    //     let resident = stats::resident::read().unwrap();
    //     println!("{} bytes allocated/{} bytes resident", allocated, resident);
    //     thread::sleep(Duration::from_secs(10));
    // }
    
    let allocated = stats::allocated::read().unwrap();
    leetcode::letter_combinations_of_a_phone_number::Solution::letter_combinations(String::from("23"));
}
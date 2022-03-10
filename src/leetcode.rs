

fn fizzBuzz(max: i32){
    for i in 1..max{

        if i % 3 == 0 {

            if i % 5  == 0 {
                println!("FizzBuzz");
                continue;
            }

            println!("Fizz");
            continue;
        }

        if i % 5 == 0 {
            println!("Buzz");
            continue;
        }

        println!("{}", i);
    }   
}

pub fn fizzbuzz(n: i32, values: Vec<(i32, &str)>) -> String {
    (1..=n)
        .map(|i| {
            let mut result = String::new();
            values.iter().for_each(|&val| {
                if i % val.0 == 0 {
                    result.push_str(val.1);
                }
            });
            return match result {
                x if x.is_empty() => i.to_string(),
                _ => result
            };
        })
        .collect::<Vec<String>>()
        .join("\n")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_fizzbuzz() {
        let n = 16;
        let values = vec![
            (3, "Fizz"),
            (5, "Buzz"),
        ];
        let str = fizzbuzz(n, values);
        let res = str.split("\n").collect::<Vec<&str>>();

        for i in 1..=(n as usize) {
            if i % 3 == 0 && i % 5 == 0 {
                assert_eq!(res[i - 1], "FizzBuzz");
            } else if i % 3 == 0 {
                assert_eq!(res[i - 1], "Fizz");
            } else if i % 5 == 0 {
                assert_eq!(res[i - 1], "Buzz");
            } else {
                assert_eq!(res[i - 1], i.to_string());
            }
        }
    }
}

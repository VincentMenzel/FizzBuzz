export type Rule = [number, string];

export const fizzBuzzExtension = (rules: Rule[], limit: number): void => {
    for (let i = 1; i <= limit; i++) {
        let output = '';

        for (const rule of rules) {
            const [number, word] = rule;

            if (i % number === 0) {
                output += word;
            }
        }

        if (output === '') {
            output = i.toString();
        }

        console.log(output);
    }
}

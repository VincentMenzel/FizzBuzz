import {fizzBuzzExtension, Rule} from "./fizzbuzz";

describe('FizzBuzzExtension', () => {
    it('returns the correct output for a given set of rules and limit', () => {
        const rules: Rule[] = [
            [3, 'Fizz'],
            [5, 'Buzz'],
        ];
        const limit = 16;

        const expectedOutput = [
            '1',
            '2',
            'Fizz',
            '4',
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz',
            '16',
        ];

        const consoleSpy = jest.spyOn(console, 'log');
        const mockLog = jest.fn();
        consoleSpy.mockImplementation(mockLog);

        fizzBuzzExtension(rules, limit);

        expect(mockLog.mock.calls.flat()).toEqual(expectedOutput);

        consoleSpy.mockRestore();
    });
});

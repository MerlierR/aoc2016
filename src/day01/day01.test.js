import { manhattanDistance } from '../Position';
import { followInstructions, parseInput } from './day01';

describe('Day 1: No Time for a Taxicab', () => {

    [
        { input: 'R2, L3', expectedResult: 5 },
        { input: 'R2, R2, R2', expectedResult: 2 },
        { input: 'R5, L5, R5, R3', expectedResult: 12 }
    ].forEach((entry) => it(`can get the end distance for "${entry.input}"`, () => {
        const instructions = parseInput(entry.input);
        const { position } = followInstructions(instructions);

        expect(manhattanDistance(position)).toBe(entry.expectedResult);
    }));

    it('can find the first duplicate position distance', () => {
        const instructions = parseInput('R8, R4, R4, R8');
        const { dupes } = followInstructions(instructions);
        const dupeDistance = Math.min(...[...dupes].map((dupePosition) => manhattanDistance(dupePosition)));

        expect(dupeDistance).toBe(4);
    });
});
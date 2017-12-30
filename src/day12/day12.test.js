import { parseInput } from './day12';

describe('Day 12: Leonardo\'s Monorail', () => {

    const INSTRUCTIONSET = `
cpy 41 a
inc a
inc a
dec a
jnz a 2
dec a`.trim();

    it('can execute instrution sets', () => {
        const proc = parseInput(INSTRUCTIONSET);
        const registers = proc.run();

        expect(registers).toBeDefined();
        expect(registers.get('a').value).toBe(42);
    });
});
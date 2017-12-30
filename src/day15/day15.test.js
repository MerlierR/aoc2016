import { calculateStartTime, getDiscs } from './day15';
import parse from './parse';

const INPUT = `
Disc #1 has 5 positions; at time=0, it is at position 4.
Disc #2 has 2 positions; at time=0, it is at position 1.`.trim();

describe('Day 15: Timing is Everything', () => {

    it('can parse input', () => {
        const result = parse(INPUT);

        expect(result).toHaveLength(2);
        expect(result[0].disc).toBe(1);
        expect(result[0].positions).toBe(5);
        expect(result[0].time).toBe(0);
        expect(result[0].position).toBe(4);

        expect(result[1].disc).toBe(2);
        expect(result[1].positions).toBe(2);
        expect(result[1].time).toBe(0);
        expect(result[1].position).toBe(1);
    });

    it('can check the time the capsule falls trough', () => {
        const discs = getDiscs(parse(INPUT));

        expect(discs.get(1).positionAtTime(0)).toBe(4);
        expect(discs.get(1).positionAtTime(1)).toBe(0);
        expect(discs.get(1).positionAtTime(2)).toBe(1);

        expect(discs.get(2).positionAtTime(0)).toBe(1);
        expect(discs.get(2).positionAtTime(1)).toBe(0);
        expect(discs.get(2).positionAtTime(2)).toBe(1);

        expect(calculateStartTime(discs)).toBe(5);
    });
});
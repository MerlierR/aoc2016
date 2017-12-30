import { checksum, expandInput, partialChecksum, trimInput } from './day16';

describe('Day 16: Dragon Checksum', () => {

    it('can expand the input for "1"', () => {
        expect(expandInput([1])).toEqual([1, 0, 0]);
    });

    it('can expand the input for "0"', () => {
        expect(expandInput([0])).toEqual([0, 0, 1]);
    });

    it('can expand the input for "11111"', () => {
        expect(expandInput([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
    });

    it('can expand the input for "111100001010"', () => {
        expect(expandInput([1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0]))
            .toEqual([1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0]);
        expect(expandInput([1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0]))
            .toEqual([1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0]);
    });

    it('can trim inputs', () => {
        expect(trimInput([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toEqual([0, 1, 2, 3, 4]);
    });

    it('can calculate partial checksums', () => {
        expect(partialChecksum([1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0])).toEqual([1, 1, 0, 1, 0, 1]);
        expect(partialChecksum([1, 1, 0, 1, 0, 1])).toEqual([1, 0, 0]);
    });

    it('can calculate the checksum', () => {
        expect(checksum('10000', 20)).toBe('01100');
    });

});
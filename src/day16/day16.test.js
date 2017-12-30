import { checksum, expandInput, partialChecksum, trimInput } from './day16';

describe('Day 16: Dragon Checksum', () => {

    it('can expand the input for "1"', () => {
        expect(expandInput('1')).toBe('100');
    });

    it('can expand the input for "0"', () => {
        expect(expandInput('0')).toBe('001');
    });

    it('can expand the input for "11111"', () => {
        expect(expandInput('11111')).toBe('11111000000');
    });

    it('can expand the input for "111100001010"', () => {
        expect(expandInput('111100001010')).toBe('1111000010100101011110000');
    });

    it('can trim inputs', () => {
        expect(trimInput('0123456789', 5)).toBe('01234');
    });

    it('can calculate partial checksums', () => {
        expect(partialChecksum('110010110100')).toBe('110101');
        expect(partialChecksum('110101')).toBe('100');
    });

    it('can calculate the checksum', () => {
        expect(checksum('10000', 20)).toBe('01100');
    });

});
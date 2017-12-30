import { countSafeTiles, getGrid } from './day18';

describe('Day 18: Like a Rogue', () => {

    it('can create a grid, based on the first row: "..^^."', () => {
        const grid = getGrid('..^^.', 3);

        expect(grid).toHaveLength(3);
        expect(grid[0]).toEqual([0, 0, 1, 1, 0]);
        expect(grid[1]).toEqual([0, 1, 1, 1, 1]);
        expect(grid[2]).toEqual([1, 1, 0, 0, 1]);
    });

    it('can count the safe tiles in a grid', () => {
        const grid = getGrid('.^^.^.^^^^', 10);
        expect(countSafeTiles(grid)).toBe(38);
    });

});
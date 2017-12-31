import { getSiblings, isWall, shortestPath } from './day13';

describe('Day 13: A Maze of Twisty Little Cubicles', () => {

    it('can check if a position is a wall', () => {
        expect(isWall([0, 0], 10)).toBe(false);
        expect(isWall([1, 0], 10)).toBe(true);
        expect(isWall([2, 0], 10)).toBe(false);
        expect(isWall([3, 0], 10)).toBe(true);
        expect(isWall([4, 0], 10)).toBe(true);
        expect(isWall([5, 0], 10)).toBe(true);
        expect(isWall([6, 0], 10)).toBe(true);
        expect(isWall([7, 0], 10)).toBe(false);
        expect(isWall([8, 0], 10)).toBe(true);
        expect(isWall([9, 0], 10)).toBe(true);

        expect(isWall([2, 1], 10)).toBe(true);
        expect(isWall([3, 2], 10)).toBe(false);
        expect(isWall([4, 3], 10)).toBe(true);
        expect(isWall([5, 4], 10)).toBe(true);
        expect(isWall([6, 5], 10)).toBe(false);
        expect(isWall([7, 6], 10)).toBe(true);
    });

    it('can get all non-wall siblings', () => {
        const siblings = getSiblings([1, 1], 10);

        expect(siblings).toHaveLength(2);
        expect(siblings[0]).toEqual([0, 1]);
        expect(siblings[1]).toEqual([1, 2]);
    });

    it('can calculate the shortest path', () => {
        expect(shortestPath([1, 1], [7, 4], 10).path).toBe(11);
    });
});
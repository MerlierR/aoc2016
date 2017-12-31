/*@flow*/

import Queue from 'double-ended-queue';
import { memoize } from 'lodash';
import type { Position } from '../Position';

export function shortestPath(start: Position, end: Position, constant: number): { path: number, positions: number } {
    const toVisit = new Queue([start]);
    const visited: Map<string, number> = new Map([[hash(start), 0]]);

    let positions = 1;
    let path: number = Infinity;

    while (!isFinite(path) && toVisit.length > 0) {
        const position: Position = toVisit.shift();
        const currentPathLength: number = visited.get(hash(position)) || 0;

        if (isSamePosition(position, end)) path = currentPathLength;

        for (let child of getSiblings(position, constant)) {
            const childHash = hash(child);
            if (visited.has(childHash)) continue;
            if (currentPathLength < 50) positions += 1;

            visited.set(childHash, currentPathLength + 1);
            toVisit.push(child);
        }
    }

    return {
        path,
        positions
    };
}

function hash(position: Position): string {
    return position.join();
}

export function isSamePosition(a: Position, b: Position): boolean {
    return hash(a) === hash(b);
}

export function getSiblings([x, y]: Position, constant: number): Position[] {
    const result = [];

    if (!isWall([x + 1, y], constant)) result.push([x + 1, y]);
    if (!isWall([x - 1, y], constant)) result.push([x - 1, y]);
    if (!isWall([x, y - 1], constant)) result.push([x, y - 1]);
    if (!isWall([x, y + 1], constant)) result.push([x, y + 1]);

    return result;
}

function _isWall([x, y]: Position, constant: number): boolean {
    if (x < 0 || y < 0) return true;
    const sum = (x * x + 3 * x + 2 * x * y + y + y * y) + constant;
    const numberOfBits = sum.toString(2).split('').reduce((sum, bit) => sum + parseInt(bit, 2), 0);

    return numberOfBits % 2 === 1;
}

export const isWall = memoize(_isWall, (position) => hash(position));
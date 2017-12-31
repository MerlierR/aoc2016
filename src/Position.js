/*@flow*/

export type Position = [number, number];

export function manhattanDistance(position: Position) {
    return position.reduce((acc, coord) => acc + Math.abs(coord), 0);
}

export function hashPosition(position: number[]) {
    return [...position].join();
}
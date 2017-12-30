/*@flow*/

export function manhattanDistance(position: number[]) {
    return position.reduce((acc, coord) => acc + Math.abs(coord), 0);
}

export function hashPosition(position: Number[]) {
    return [...position].join();
}
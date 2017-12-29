export function manhattanDistance(position: Number[]) {
    return position.reduce((acc, coord) => acc + Math.abs(coord), 0);
}

export function hashPosition(position: Number[]) {
    return [...position].join();
}
/*@flow*/

import Direction, { walkDirectionGenerator } from '../Direction';
import { hashPosition } from '../Position';

export function parseInput(data: String) {
    return data.split(', ').map(parseInstruction);
}

export function parseInstruction(instruction: String) {
    const [_, direction, distance] = instruction.match(/([a-zA-Z]+)(\d+)/);

    return followInstruction.bind(null, direction, parseInt(distance, 10));
}

export function followInstruction(directionToTurn: String,
                                  distanceToWalk: Number,
                                  currentPosition: Number[],
                                  currentDirection: Direction) {
    let nextDirection;
    if (directionToTurn === 'L') nextDirection = currentDirection.turnCounterClockwise();
    else if (directionToTurn === 'R') nextDirection = currentDirection.turnClockwise();

    const nextPositions = walkDirectionGenerator(currentPosition, nextDirection, distanceToWalk);
    const subPositions = [];
    for (let pos of nextPositions) {
        subPositions.push(pos);
    }

    return {
        subPositions,
        position: subPositions[subPositions.length - 1],
        direction: nextDirection
    };
}

export function followInstructions(instructions: Function[]) {
    const knownPositions = new Set();
    const dupes = new Set();

    const result = instructions.reduce(({ position, direction }, instruction) => {
        const result = instruction(position, direction);

        result.subPositions.forEach((subPosition) => {
            const hash = hashPosition(subPosition);
            if (knownPositions.has(hash)) dupes.add(subPosition);
            knownPositions.add(hash);
        });

        return result;
    }, { position: [0, 0], direction: Direction.NORTH });

    return { ...result, dupes };
}
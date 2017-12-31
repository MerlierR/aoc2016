/*@flow*/

import Direction, { walkDirectionGenerator } from '../Direction';
import type { Position } from '../Position';
import { hashPosition } from '../Position';

export function parseInput(data: string) {
    return data.split(', ').map(parseInstruction);
}

export function parseInstruction(instruction: string) {
    const matches = instruction.match(/([a-zA-Z]+)(\d+)/);
    if (!matches || matches.length < 3) throw new Error(`Could not parse "${instruction}"`);

    const [, direction, distance] = matches;

    return followInstruction.bind(null, direction, parseInt(distance, 10));
}

export function followInstruction(directionToTurn: string,
                                  distanceToWalk: number,
                                  currentPosition: Position,
                                  currentDirection: Direction) {
    const nextDirection = directionToTurn === 'L'
        ? currentDirection.turnCounterClockwise()
        : currentDirection.turnClockwise();

    const nextPositions = walkDirectionGenerator(currentPosition, nextDirection, distanceToWalk);
    const subPositions: Position[] = [];
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
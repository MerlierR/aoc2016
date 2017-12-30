/*@flow*/
type Modifier = { colMod: number; rowMod: number };

const DIRECTION_MODIFIERS: Modifier[] = [
    { colMod: -1, rowMod: 0 },
    { colMod: 0, rowMod: 1 },
    { colMod: 1, rowMod: 0 },
    { colMod: 0, rowMod: -1 }
];

export default class Direction {
    static NORTH = new Direction(0);
    static EAST = new Direction(1);
    static SOUTH = new Direction(2);
    static WEST = new Direction(3);

    internalDirection: number;

    /**@private*/
    constructor(internalDirection: number) {
        this.internalDirection = internalDirection;
    }

    get modifiers(): Modifier {
        return DIRECTION_MODIFIERS[this.internalDirection];
    }

    turnClockwise(): Direction {
        return new Direction((this.internalDirection + 1) % 4);
    }

    turnCounterClockwise(): Direction {
        return new Direction((this.internalDirection + 3) % 4);
    }
}

export function walkDirection(position: number[], direction: Direction, distance: number) {
    const [colMod, rowMod] = direction.modifiers;

    return [
        position[0] + distance * colMod,
        position[1] + distance * rowMod
    ];
}

export function* walkDirectionGenerator(position: number[], direction: Direction, distance: number): Iterable<number[]> {
    const { colMod, rowMod } = direction.modifiers;

    for (let i = 1; i <= distance; i++) {
        yield [
            position[0] + i * colMod,
            position[1] + i * rowMod
        ];
    }
}
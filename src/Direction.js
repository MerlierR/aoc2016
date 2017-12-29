const DIRECTION_MODIFIERS = new Map();
DIRECTION_MODIFIERS.set(0, [-1, 0]);
DIRECTION_MODIFIERS.set(1, [0, 1]);
DIRECTION_MODIFIERS.set(2, [1, 0]);
DIRECTION_MODIFIERS.set(3, [0, -1]);

export default class Direction {
    static NORTH = new Direction(0);
    static EAST = new Direction(1);
    static SOUTH = new Direction(2);
    static WEST = new Direction(3);

    /**@private*/
    constructor(internalDirection: Number) {
        this.internalDirection = internalDirection;
    }

    get modifiers() {
        return DIRECTION_MODIFIERS.get(this.internalDirection);
    }

    turnClockwise() {
        return new Direction((this.internalDirection + 1) % 4);
    }

    turnCounterClockwise() {
        return new Direction((this.internalDirection + 3) % 4);
    }
}

export function walkDirection(position: Number[], direction: Direction, distance: Number) {
    const [colMod, rowMod] = direction.modifiers;

    return [
        position[0] + distance * colMod,
        position[1] + distance * rowMod
    ];
}

export function* walkDirectionGenerator(position: Number[], direction: Direction, distance: Number) {
    const [colMod, rowMod] = direction.modifiers;

    for (let i = 1; i <= distance; i++) {
        yield [
            position[0] + i * colMod,
            position[1] + i * rowMod
        ];
    }
}
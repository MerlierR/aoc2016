export class Disc {
    constructor(numberOfPositions: Number, startPosition: Number, startTime: Number) {
        this.numberOfPositions = numberOfPositions;
        this.startPosition = startPosition;
        this.startTime = startTime;
    }

    positionAtTime(t) {
        return (t + this.startTime + this.startPosition) % this.numberOfPositions;
    }
}

export function getDiscs(input) {
    return input.reduce((discs: Map, { disc, positions, position, time }) => {
        discs.set(disc, new Disc(positions, position, time));

        return discs;
    }, new Map());
}

export function calculateStartTime(discs: Map<Number, Disc>) {
    let startTime = 0;

    while (true) {
        let fallsTrough = true;
        for (let [discNumber, disc] of discs.entries()) {
            const time = discNumber + startTime;
            fallsTrough = disc.positionAtTime(time) === 0;

            if (!fallsTrough) break;
        }

        if (fallsTrough) break;
        else startTime += 1;
    }

    return startTime;
}
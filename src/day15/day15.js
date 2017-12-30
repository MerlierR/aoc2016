/*@flow*/

export class Disc {
    numberOfPositions: number;
    startPosition: number;
    startTime: number;

    constructor(numberOfPositions: number, startPosition: number, startTime: number) {
        this.numberOfPositions = numberOfPositions;
        this.startPosition = startPosition;
        this.startTime = startTime;
    }

    positionAtTime(t: number): number {
        return (t + this.startTime + this.startPosition) % this.numberOfPositions;
    }
}

export function getDiscs(input: Object[], initialDiscs: Map<number, Disc> = new Map()) {
    return input.reduce((discs: Map<number, Disc>, { disc, positions, position, time }) => {
        discs.set(disc, new Disc(positions, position, time));

        return discs;
    }, initialDiscs);
}

export function calculateStartTime(discs: Map<number, Disc>) {
    let startTime = -1;
    let fallsTrough = false;

    while (!fallsTrough) {
        startTime += 1;
        fallsTrough = true;
        for (let [discNumber, disc] of discs.entries()) {
            const time = discNumber + startTime;
            fallsTrough = disc.positionAtTime(time) === 0;

            if (!fallsTrough) break;
        }
    }

    return startTime;
}
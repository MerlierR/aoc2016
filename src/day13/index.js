import { shortestPath } from './day13';

const INPUT = 1358;
const start = process.hrtime();
(async () => {
    try {
        const startPosition = [1, 1];
        const endPosition = [31, 39];

        const result = shortestPath(startPosition, endPosition, INPUT);
        console.log(`Part 1: ${result.path}`);
        console.log(`Part 2: ${result.positions}`);
    } catch (e) {
        console.error(e);
    }

    const end = process.hrtime(start);
    console.info('Process exited in %dms', (end[0] * 1000 + end[1] / 1000000).toPrecision(3));
    process.exit();
})();
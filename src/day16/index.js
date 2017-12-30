import { checksum } from './day16';

const INPUT = '10111100110001111';

const start = process.hrtime();
(async () => {
    console.log(`Part 1: ${checksum(INPUT, 272)}`);
    console.log(`Part 2: ${checksum(INPUT, 35651584)}`);

    const end = process.hrtime(start);
    console.info('Process exited in %dms', (end[0] * 1000 + end[1] / 1000000).toPrecision(3));
    process.exit();
})();

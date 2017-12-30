import fs from 'fs';
import path from 'path';
import { calculateStartTime, Disc, getDiscs } from './day15';
import parse from './parse';

const start = process.hrtime();
(async () => {
    const input = fs.readFileSync(path.join(__dirname, 'day15.txt'), 'utf8');

    const parsedInput = parse(input);
    const discs = getDiscs(parsedInput);
    console.log(`Part 1: ${calculateStartTime(discs)}`);

    discs.set(parsedInput.length + 1, new Disc(11, 0, 0));
    console.log(`Part 2: ${calculateStartTime(discs)}`);

    const end = process.hrtime(start);
    console.info('Process exited in %dms', (end[0] * 1000 + end[1] / 1000000).toPrecision(3));
    process.exit();
})();

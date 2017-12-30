import fs from 'fs';
import path from 'path';
import { parseInput } from './day12';

const start = process.hrtime();
(async () => {
    const file = path.join(__dirname, 'day12.txt');
    const data = fs.readFileSync(file, 'utf8');

    // Part 1
    const process1 = parseInput(data);
    const result1 = process1.run();
    console.log(`Part 1: ${result1.get('a').value}`);

    // Part 2
    const process2 = parseInput(data);
    process2.set('c', 1);
    const result2 = process2.run();
    console.log(`Part 2: ${result2.get('a').value}`);

    const end = process.hrtime(start);
    console.info('Process exited in %dms', (end[0] * 1000 + end[1] / 1000000).toPrecision(3));
    process.exit();
})();

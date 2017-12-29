/*@flow*/

import fs from 'fs';
import path from 'path';
import { manhattanDistance } from '../Position';
import { followInstructions, parseInput } from './day01';

(async () => {
    const file = path.join(__dirname, 'day01.txt');
    const data = fs.readFileSync(file, 'utf8');
    const instructions = parseInput(data);

    const { position, dupes } = followInstructions(instructions);

    const distance = manhattanDistance(position);
    console.log(`Part 1: ${distance}`);

    const dupeDistance = Math.min(...[...dupes].map((dupePosition) => manhattanDistance(dupePosition)));
    console.log(`Part 2: ${dupeDistance}a`);

    process.exit();
})();
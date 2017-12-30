import { countSafeTiles, getGrid } from './day18';

const INPUT = '^.....^.^^^^^.^..^^.^.......^^..^^^..^^^^..^.^^.^.^....^^...^^.^^.^...^^.^^^^..^^.....^.^...^.^.^^.^';
const start = process.hrtime();
(async () => {
    try {
        console.log(`Part 1: ${countSafeTiles(getGrid(INPUT, 40))}`);
        console.log(`Part 2: ${countSafeTiles(getGrid(INPUT, 400000))}`);
    } catch (e) {
        console.error(e);
    }

    const end = process.hrtime(start);
    console.info('Process exited in %dms', (end[0] * 1000 + end[1] / 1000000).toPrecision(3));
    process.exit();
})();
/*@flow*/

export function getGrid(input: string, numberOfRows: number): number[][] {
    const firstRow = input.split('').map((c) => c === '.' ? 0 : 1);
    const numberOfColumns = firstRow.length;
    const grid = [firstRow];

    for (let i = 1; i < numberOfRows; i += 1) {
        grid.push([]);

        for (let j = 0; j < numberOfColumns; j++) {
            const left = grid[i - 1][j - 1] || 0;
            const right = grid[i - 1][j + 1] || 0;

            grid[i][j] = left ^ right;
        }
    }

    return grid;
}

export function countSafeTiles(grid: number[][]) {
    return grid.reduce((total, row) => total + row.reduce((rTotal, item) => rTotal + ((item + 1) % 2), 0), 0);
}
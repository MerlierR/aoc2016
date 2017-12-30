export function checksum(input: string, length: number): string {
    let result = input.split('').map((char) => parseInt(char, 10));

    // expand
    while (result.length <= length) {
        result = expandInput(result);
    }

    // trim
    result = trimInput(result, length);

    // checksum
    while (result.length % 2 === 0) {
        result = partialChecksum(result);
    }

    return result.join('');
}

export function trimInput(input: number[], length: number): number[] {
    return input.slice(0, length);
}

export function expandInput(input: number[]): number[] {
    const b = input.map((char) => (char + 1) % 2).reverse();
    return [...input, 0, ...b];
}

export function partialChecksum(input: number[]): number[] {
    const l = input.length;
    const result = [];
    for (let i = 0; i < l; i += 2) {
        if (input[i] === input[i + 1]) result.push(1);
        else result.push(0);
    }

    return result;
}
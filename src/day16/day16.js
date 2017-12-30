export function checksum(input: string, length: number): string {
    let result = input.split('').map((char) => parseInt(char, 10));

    // expand
    while (result.length <= length) {
        expandInput(result);
    }

    // trim
    trimInput(result, length);

    // checksum
    while (result.length % 2 === 0) {
        result = partialChecksum(result);
    }

    return result.join('');
}

export function trimInput(input: number[], length: number): number[] {
    input.splice(length);

    return input;
}

export function expandInput(input: number[]): number[] {
    input.push(0);

    for (let i = input.length - 2; i >= 0; i--) input.push((input[i] + 1) % 2);

    return input;
}

export function partialChecksum(input: number[]): number[] {
    const l = input.length;
    const result = [];
    for (let i = 0; i < l; i += 2) result.push(~(input[i] ^ input[i + 1]) + 0b10);

    return result;
}
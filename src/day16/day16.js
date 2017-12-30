export function checksum(input: string, length: number): string {
    let result = input;

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

    return result;
}

export function trimInput(input: string, length: number): string {
    return input.substr(0, length);
}

export function expandInput(input: string): string {
    const b = input.split('')
        .map((char) => (parseInt(char, 10) + 1) % 2)
        .reverse()
        .join('');

    return `${input}0${b}`;
}

export function partialChecksum(input: string): string {
    const splitInput = input.split('');

    const l = input.length;
    let result = '';
    for (let i = 0; i < l; i += 2) {
        if (splitInput[i] === splitInput[i + 1]) result += '1';
        else result += '0';
    }

    return result;
}
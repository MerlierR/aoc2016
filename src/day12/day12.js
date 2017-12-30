import Process, { Instruction } from '../Process';

export function parseInput(input: String): Process {
    const proc = new Process(0);

    const instructions = input.split('\n').map((instruction) => {
        const parts = instruction.split(' ');

        if (parts[0] === 'cpy') return new Instruction('cpy', proc.cpy.bind(proc, parts[1], parts[2]));
        if (parts[0] === 'inc') return new Instruction('inc', proc.inc.bind(proc, parts[1]));
        if (parts[0] === 'dec') return new Instruction('dec', proc.dec.bind(proc, parts[1]));
        if (parts[0] === 'jnz') return new Instruction('jnz', proc.jnz.bind(proc, parts[1], parts[2]));
        throw new Error(`Unknown instruction: ${instruction}`);
    });

    proc.setInstructions(instructions);

    return proc;
}
/*@flow*/

import Register from './Register';

export class Instruction {
    name: string;
    fn: Function;

    constructor(name: string, fn: Function) {
        this.name = name;
        this.fn = fn;
    }
}

export default class Process {
    pid: number;
    registers: Map<string, Register>;
    instructions: Instruction[];

    constructor(pid: number) {
        this.pid = pid;
        this.registers = new Map();
        this.instructions = [];
    }

    setInstructions(instructions: Instruction[]) {
        this.instructions = instructions;
    }

    run(): Map<string, Register> {
        const l = this.instructions.length;

        let currentIndex = 0;
        while (currentIndex >= 0 && currentIndex < l) {
            const instruction = this.instructions[currentIndex];

            currentIndex = instruction.fn(currentIndex);
        }

        return this.registers;
    }

    set(register: string, value: string, index: number): number {
        this.getRegister(register).value = this.getValue(value);
        return index + 1;
    }

    inc(register: string, index: number): number {
        this.getRegister(register).inc();
        return index + 1;
    }

    dec(register: string, index: number): number {
        this.getRegister(register).dec();
        return index + 1;
    }

    cpy(value: string, register: string, index: number): number {
        this.getRegister(register).value = this.getValue(value);
        return index + 1;
    }

    jnz(check: string, value: string, index: number): number {
        if (this.getValue(check) !== 0) return index + this.getValue(value);
        else return index + 1;
    }

    /**@private*/
    getRegister(name: string, defaultRegister: () => Register = () => new Register(name, 0)): Register {
        if (!this.registers.has(name)) this.registers.set(name, defaultRegister());

        return this.registers.get(name) || defaultRegister();
    }

    /**@private*/
    getValue(value: string): number {
        const valueAsInt = parseInt(value, 10);

        if (!isNaN(valueAsInt)) return valueAsInt;
        else return this.getRegister(value).value;
    }
}
import Register from './Register';

export class Instruction {
    constructor(name: String, fn: Function) {
        this.name = name;
        this.fn = fn;
    }
}

export default class Process {

    constructor(pid) {
        this.pid = pid;
        this.registers = new Map();
        this.instructions = [];
    }

    setInstructions(instructions: Instruction[]) {
        this.instructions = instructions;
    }

    run(): Map<Register> {
        const l = this.instructions.length;

        let currentIndex = 0;
        while (currentIndex >= 0 && currentIndex < l) {
            const instruction = this.instructions[currentIndex];

            currentIndex = instruction.fn(currentIndex);
        }

        return this.registers;
    }

    set(register, value) {
        this.getRegister(register).value = this.getValue(value);
    }

    inc(register, index) {
        this.getRegister(register).inc();
        return index + 1;
    }

    dec(register, index) {
        this.getRegister(register).dec();
        return index + 1;
    }

    cpy(value, register, index) {
        this.getRegister(register).value = this.getValue(value);
        return index + 1;
    }

    jnz(check, value, index) {
        if (this.getValue(check) !== 0) return index + this.getValue(value);
        else return index + 1;
    }

    /**@private*/
    getRegister(name: String): Register {
        if (!this.registers.has(name)) {
            this.registers.set(name, new Register(name, 0));
        }

        return this.registers.get(name);
    }

    /**@private*/
    getValue(value: Number | String): Number {
        const valueAsInt = parseInt(value, 10);

        if (!isNaN(valueAsInt)) return valueAsInt;
        else return this.getRegister(value).value;
    }
}
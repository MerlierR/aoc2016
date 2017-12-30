/*@flow*/

export default class Register {
    id: string;
    value: number;

    constructor(id: string, value: number) {
        this.id = id;
        this.value = value;
    }

    inc(arg: number = 1) {
        this.value += arg;
    }

    dec(arg: number = 1) {
        this.value -= arg;
    }
}
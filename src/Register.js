export default class Register {
    constructor(id: String, value: Number) {
        this.id = id;
        this.value = value;
    }

    inc(arg: Number = 1) {
        this.value += arg;
    }


    dec(arg: Number = 1) {
        this.value -= arg;
    }
}
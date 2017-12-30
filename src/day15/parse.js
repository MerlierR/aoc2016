export default function parse(input: string) {
    return input.split('\n').map((line) => {

        const matches = line.match(/^.+?#(\d+?).+?(\d.+?).+?(\d.+?).+?(\d.+?)$/);

        return {
            disc: parseInt(matches[1], 10),
            positions: parseInt(matches[2], 10),
            time: parseInt(matches[3], 10),
            position: parseInt(matches[4], 10)
        };

    });
}
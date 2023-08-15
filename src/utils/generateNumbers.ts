import { padWithZero } from "./padWithZero";

export const generateNumbers = (
    max: number,
    options: {
        repeatNTimes?: number;
        padWithZero?: boolean;
        disableInfiniteScroll?: boolean;
        padWithNItems: number;
    }
) => {
    let numbers: string[] = [];
    if (options.padWithZero) {
        for (let i = 0; i <= max; i++) {
            numbers.push(padWithZero(i));
        }
    } else {
        for (let i = 0; i <= max; i++) {
            numbers.push(String(i));
        }
    }
    if ((options.repeatNTimes ?? 1) > 1) {
        numbers = Array(options.repeatNTimes).fill(numbers).flat();
    }
    if (options.disableInfiniteScroll) {
        numbers.push(...Array(options.padWithNItems).fill(""));
        numbers.unshift(...Array(options.padWithNItems).fill(""));
    }
    return numbers;
};
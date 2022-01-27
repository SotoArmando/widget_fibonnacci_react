export default function Fibonacci(n: number): number[] {
    let result: number[] = [0,1];
 
    while (result.length < n) {
        let number = result[result.length - 1] + result[result.length - 2];
        result.push(number)
    }
    return result;
}
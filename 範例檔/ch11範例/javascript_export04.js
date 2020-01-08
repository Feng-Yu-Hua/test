export default function addUp(...rest) {
    let sum = 0
    for (let nbr of rest) {
        sum += nbr
    }
    return sum
}
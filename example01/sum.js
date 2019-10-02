export default (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('The sum function accepts only numbers')
    }
    return a + b
}

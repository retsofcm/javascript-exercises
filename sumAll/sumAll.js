const sumAll = function(a, b) {
    let finalSum = 0;

    if (a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number') return 'ERROR'

    function addTogether(min, max) {
        for (let i=min; i<=max; i++){
            finalSum += i;
        }
    }

    if (a > b) {
        addTogether(b, a)
    } else {
        addTogether(a, b)
    }

    return finalSum;
}

module.exports = sumAll

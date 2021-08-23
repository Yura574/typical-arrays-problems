exports.min = function min(array) {

    return array.reduce(function (p, v) {
        return (p < v ? p : v);
    });

}

exports.max = function max(array) {
    return array.reduce(function (p, v) {
        return (p > v ? p : v);
    });
}

exports.avg = function avg(array) {

    for (let i = 0; i < array.length; i++) {
        let sum = 0
        for (let j = 0; j < array.length; j++) {
            sum += array[j]
        }
        let avr = sum / array.length
        return avr;
    }

}


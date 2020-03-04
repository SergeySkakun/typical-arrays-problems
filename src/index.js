
exports.min = function min (array) {
    if(Array.isArray(array) && array.length) {
        return Math.min(...array);
    }

    return 0;
}

exports.max = function max (array) {
    if(Array.isArray(array) && array.length) {
        return Math.max(...array);
    }

    return 0;
}

exports.avg = function avg (array) {
    if(Array.isArray(array) && array.length) {
        return array.reduce((acc, element) => acc = acc + element) / array.length;
    }
    
    return 0;
}

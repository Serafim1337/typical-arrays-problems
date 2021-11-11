
exports.min = function min (arr) {
if(arguments.length === 0 || arr.length === 0) {
    return 0;
} else {
    let arrToSort = arr.slice();
    arrToSort.sort( (a,b) => (a - b));
    return arrToSort[0];
}
}

exports.max = function max (arr) {
if(arguments.length === 0 || arr.length === 0) {
    return 0;
} else {
    let arrToSort = arr.slice();
    arrToSort.sort( (a,b) => (b - a));
    return arrToSort[0];
    }
}

exports.avg = function avg (arr) {
if(arguments.length === 0 || arr.length === 0) {
    return 0;
} else {
    let sum = +arr.reduce( (previous, current) => {
    return  previous + current;
    },0);
    let avg = sum / arr.length;
    return avg;
}
}

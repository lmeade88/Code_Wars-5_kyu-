function distancesFromAverage(arr) {
    let sum = arr.reduce((a, c) => a + c, 0);
    let average = sum / arr.length;
    let newArr = arr.map(number => {
        return Math.round((number - average) * 100) / 100;
    });
    return newArr;
}
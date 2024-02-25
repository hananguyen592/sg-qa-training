var arr = [10, 11, 12, 13, 14, 15];
var max = arr[0]; 
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);
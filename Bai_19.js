var arr = [10, 11, 12, 13, 14, 15];
var h = -1;
for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 0) {
        h = i;
        break;
    }   
}
if (h >= 0){
    console.log(arr[h])
}
else {
    console.log(-1)
}
//
var arr2 = [1, 3, 5, 7, 9];
var h = -1;
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i]%2 == 0) {
        h = i;
        break;
    }   
}
if (h >= 0){
    console.log(arr2[h])
}
else {
    console.log(-1)
}
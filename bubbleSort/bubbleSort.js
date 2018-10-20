process.stdin.resume();
process.stdin.setEncoding('utf8');
// bubble sort
var arr = [81,14,92,15,23,11,46];

for(var i=0; i<arr.length; i++){
    for(var z=0; z<arr.length-1; z++){
        if(arr[z]> arr[z+1]){
            var tmp = arr[z+1];
            arr[z+1] = arr[z];
            arr[z] = tmp;
        }
    }
}

console.log(arr);

// output -> [ 11, 14, 15, 23, 46, 81, 92 ]

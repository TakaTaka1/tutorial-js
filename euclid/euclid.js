process.stdin.resume();
process.stdin.setEncoding('utf8');

// Euclid 最小公約数
//　必要条件 
// 3つの変数 x y tmp 剰余
// 0になるまで剰余し続ける


function euclid(x, y){
    while(y !== 0){
        var tmp = x%y;
        x = y;
        y = tmp;
        
    }
    return x;
}

console.log(euclid(36,24)); // 12


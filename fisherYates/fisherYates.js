process.stdin.resume();
process.stdin.setEncoding('utf8');
// fisherYates
// jsはオブジェクト型は参照渡しになる
// var a = []; -> var a = new Array();
// 上記からオブジェクト型となるので参照渡しになる

var a =[1,2,3,4,5];
function fisherYates(a){
    var tmp;
    for(var i=a.length-1; i>=1; i--){
        var r = Math.floor(Math.random()* Math.floor(a.length));
        tmp = a[r]; 
        a[r] = a[i];
        a[i] = tmp;
    }
    return a;
}

console.log(fisherYates(a));

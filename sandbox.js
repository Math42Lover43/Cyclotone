var i = 1205n;
var N = cyclotomic(i);
var S = sqrt(N) / i * i - i + 1n;
var old = N ** 2n;
var s;
setInterval(function() {
    S += i;
    s = sqrt(S ** 2n - N);
    while(s % i != 0n) {
        S += i;
        s = sqrt(S ** 2n - N);
    }
    if(S ** 2n - s ** 2n < old) {
        console.log(S, s, (S ** 2n - s ** 2n).toString());
        old = S ** 2n - s ** 2n;
    }
})

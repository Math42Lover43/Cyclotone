// input numbers as strings for ease
function strtolist(num) { // convert a number string into a list of numbers
    var n = 0;
    var returner = [];
    while (n < num.length) {
        returner.push(Number(num[n]));
	    n += 1;
    }
    return returner;
}
function eqlength(l1,l2) {
    if(l1.length < l2.length) {
        while(l1.length < l2.length){
            l1.push(0);
        }
    }
    if(l2.length < l1.length) {
        while(l2.length < l1.length){
            l2.push(0);
        }
    }
}
function add(x,y) { // x + y
    var par1 = strtolist(x);
    var par2 = strtolist(y);
    var preturner = [];
    var returner = "";
    eqlength(par1,par2);
    eqlength(par2,preturner);
    par2.push(0);
    par1.push(0);
    preturner.push(0);
    var n = 0;
    while(n < par1.length) {
        preturner[n] = Math.mod(preturner[n] + par1[n] + par2[n],10);
        preturner[n + 1] = Math.floor(preturner[n] + par1[n] + par2[n] / 10);
        n += 1;
    }
    n = 0;
    while(n < preturner.length) {
        returner = preturner[n].toString() + returner;
        n += 1;
    }
    return returner;
}
alert(add("307693","417583")); // test if add() function is accurate
// input numbers as strings for ease
function strtolist(num) { // convert a number string into a list of numbers
    var n = 0;
    var returner = [];
    while (n < num.length) {
        returner.unshift(Number(num[n]));
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
function add(x, y) {
	var num1 = strtolist(x);
	var num2 = strtolist(y);
	var preturner = [];
	var returner = "";
	num1.push(0);
	eqlength(num1,num2); // ensure same length
	eqlength(num2,preturner);
	// add corresponding digits
	var n = 0;
	while(n < preturner.length) {
		// add corresponding digits
		preturner[n] = num1[n] + num2[n];
		n += 1;
	}
	var n = 0; // push
	while(n < preturner.length) {
		while(preturner[n] >= 10) {
			preturner[n] -= 10;
			preturner[n + 1] += 1;
		}
		n += 1;
	}
	var n = 0; // finalize sum
	while(n < preturner.length) {
		returner = preturner[n].toString() + returner;
		n += 1;
	}
	if(returner[0] == "0") {
		returner = returner.slice(1,returner.length); // remove trailing zero
	}
	return returner;
}

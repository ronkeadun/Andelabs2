function findMinMax (n){
	var Arr = [];
	for (var x in n) {
		if ( n[x] < n[x + 1]){

			Arr.push(n[x],  n[x + 1]);

		}
		
	}

	return Arr;
}

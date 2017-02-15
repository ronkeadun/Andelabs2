'use strict'
const check = {

findMinMax: function(arr){
 	if(Array.isArray(arr)) {
 		if(arr.length > 0){
 			var sort_arr = arr.sort(function(x, y){
 				return x - y;
 			});
 			var result = [];
 			var Min = sort_arr[0];
 			var Max = sort_arr[arr.length-1];
 			if(Min === Max) {
 				result.push(Min);
 				return result;
 			} else {
 				result.push(Min);
 				result.push(Max);
 				return result;
 			}
 		} else {
 			return [];
 		}
 	} 
}
}

module.exports = check;
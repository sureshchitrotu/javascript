//* Array class is global object that is used in construction of arrays
//Array's can change at any time. data can be stored at non contiguous locations

//*Array Sorting Method
let arr = [7,8,9,null,1,undefined,2,3];
let sorted = arr.sort(function(a,b){
return a-b;
})
console.log(sorted);

//* Deleting array elements
let arr2 = [3,4,5,6,7]
arr2.length = 3; 
console.log(arr2);

let arr3 =[1,22,2,2,2,3,4,5,6,7,8];
//* remove duplicates array.
var filtered = arr3.filter((value,index,ar)=> ar.lastIndexOf(value) == index);
//return index != 4;
console.log(filtered.sort());

//* add/delete/update new elements in middle using index
var arr4 = [1,2,3,4,5,6];
arr4.splice(3,2,40,50); 
console.log(arr4);
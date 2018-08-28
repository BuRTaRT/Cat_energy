let arr =['hello','bye'];
for(let i of arr){
	document.write(i)
};
function func(arr){
	let sum;
   for(let i of arr){
	 sum+=i;
   };
	return sum;
};
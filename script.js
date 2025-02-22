//your JS code here. If required.
let output=document.getElementById("output")
async function EvenArr(array){
	
	let promise=new Promise((resolve)=>{
		setTimeout(()=>{
			let arr=[]
			 for(let t of array){
				if (t%2==0){
					arr.push(t)
				}
			}
			resolve(arr)
		}, 1000)
	})
let evens= await promise
	output.innerText=evens.join(", ")
	return evens
	
}
async function multiplyEvens(arr){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let mul=[]
			for(let t of arr){
				 t=t*2
				mul.push(t)
			}
			resolve(mul)
		}, 3000)
		
	}) 

	
}
async function processArray() {
    const evens = await EvenArr([1, 2, 3, 4]);
    const multiplied = await multiplyEvens(evens);
    output.innerText = multiplied.join(", "); 
}

processArray();



  





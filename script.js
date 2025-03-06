document.addEventListener("DOMContentLoaded", () => {
let output=document.querySelector("output")
let promise=new promise((resolve){
	 setTimeout(() => resolve([1, 2, 3, 4]), 3000);
})
.then((array)=>{
	 return new Promise((resolve) => {
            setTimeout(() => {
                let evens = array.filter(num => num % 2 === 0); // Step 1: Filter even numbers
                outputDiv.textContent = evens.join(","); // Update DOM
                resolve(evens);
            }, 1000);
        });
})
promise.then(result){
	console.log(result)
}
.then((evens){=>
	return new promise((resolve){
		 setTimeout(() => {
                let doubled = evens.map(num => num * 2); // Step 2: Multiply by 2
                outputDiv.textContent = doubled.join(","); // Update DOM
                resolve(doubled);
            }, 2000);
		
	})
	  })
})


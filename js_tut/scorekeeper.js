var p1= document.querySelector("#p1");
var p2= document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var limit = Number(document.querySelector("#Displaylimit").textContent);
var Displaylimit= document.querySelector("#Displaylimit");
// var p1Score = 0;
// var p2Score = 0;
// var gameOver = false;
// var winningScore = 5;

console.log(reset);
console.log(p1Display);
console.log(limit);
console.log(p1);
console.log(numInput);

p1.addEventListener("click", function(){
	var a= Number(p1Display.textContent);
	var b= Number(p2Display.textContent);

	if(b!=limit)
	{	
		console.log("p1: "+a);

		if(a<limit)
		{	a++;
			p1Display.textContent= a;
		}

		if(a===limit)
			p1Display.classList.add("winner");
	}
});

function p2click(){
	var a= Number(p1Display.textContent);
	var b= Number(p2Display.textContent);

	if(a!=limit)
	{	
		console.log("p2: "+b);

		if(b<limit)
		{	b++;
			p2Display.textContent= b;
		}

		if(a!==limit && b===limit)
			p2Display.classList.add("winner");
	}
}

p2.addEventListener("click", p2click);

function resetter(){

	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.textContent="0";
	p2Display.textContent="0";
}

reset.addEventListener("click", resetter);

numInput.addEventListener("change", function(){
	Displaylimit.textContent= this.value;
	limit = Number(this.value);
	resetter();
});
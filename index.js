let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function random(){
	let first= who[Math.floor(Math.random()*who.length)];
	let second= action[Math.floor(Math.random()*action.length)];
	let third= what[Math.floor(Math.random()*what.length)];
	let fourth= when[Math.floor(Math.random()*when.length)];
	document.getElementById("excuse").innerHTML= first + " " + second + " " + third + " " + fourth;
}
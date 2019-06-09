// var age = prompt("What is your age?");

// if(age < 0)
// 	console.log("The age entered doesn't exist.");
// else{
// 	if(age == 21)
// 		console.log("Happy 21st Birthday!!");
// 	if(age % 2 != 0)
// 		console.log("Your age is odd!!");
// 	if((age%Math.sqrt(age)) == 0)
// 		console.log("PERFECT SQUARE!!");
// }

//While loops excercises

// console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
// var counter = -10;
// while(counter <= 19)
// {
// 	console.log(counter);
// 	counter++;
// }

// console.log("\nPRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
// counter = 10;
// while(counter <= 40)
// {
// 	console.log(counter);
// 	counter += 2;
// }

// console.log("\nPRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
// counter = 301
// while(counter <= 333)
// {
// 	console.log(counter);
// 	counter += 2;
// }

// console.log("\nPRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
// counter = 5;
// while(counter <= 50)
// {
// 	if(counter%3 === 0 && counter%5 === 0)
// 		console.log(counter);
// 	counter++;
// }

// console.log("Annoy-Omatic");

// var answer = "no";

// while(answer.indexOf("yes") === -1)
// {
// 	answer = prompt("Are we there yet?");
// }
// alert("Yay, we finally made it!!");

//--------------------FUNCTIONS----------------------

// function isEven(x)
// {
// 	if(x%2 === 0)
// 		return true;
	
// 		return false;
// }

// var wat = isEven(15);
// console.log(wat);

// function factorial(x)
// {
// 	var fact = 1;
// 	for(var i = x; i > 0; i--)
// 		fact*=i;
	
// 	return fact;
// }

// var wat = factorial(0);
// console.log(wat);

// function kebabToSnake(str)
// {
// 	var change = str.replace(/-/g, "_");

// 	return change;
// }

// var wat = kebabToSnake("Hello-People");
// console.log(wat);

var todos = [];
window.setTimeout(function(){
	var input = "", newTodo = "";
	while(input !== "quit")
	{
		input = prompt("What would you like to do?");
		if(input === "new")
		{
			newTodo = prompt("What is your new Todo?");
			todos.push(newTodo);
		}
		else if(input === "list")
			console.log(todos);
			
	}
}, 50);
alert("You quitted the app.");

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

//----------------> T O D O  L I S T <----------------

// var todos = [];

// //Function used in the ForEach to print the Todo list.
// function printTodo(x, i)
// {
// 	console.log((i+1)+": "+x);
// }

// //Function used to print the actual Todos.
// function listTodos()
// {
// 	console.log("******************");
// 	todos.forEach(printTodo);
// 	console.log("******************");
// }

// //Function used to add a new todo to the Todo list.
// function addTodo()
// {
// 	var newTodo = "";
// 	newTodo = prompt("What is your new Todo?");
// 	todos.push(newTodo);
// 	alert(newTodo+" added to the Todo list.");
// }

// //Function used to delete a Todo from the Todo list.
// function deleteTodoFromArray()
// {
// 	var deleteTodo = "";
// 	deleteTodo = prompt("Please enter the index of the todo to delete.");
// 	var strDisplay = todos[deleteTodo-1];
// 	todos.splice(deleteTodo-1, 1);
// 	alert(strDisplay+" Todo deleted.");
// }

// window.setTimeout(function(){
// 	var input = "";
// 	while(input !== "quit")
// 	{
// 		input = prompt("What would you like to do?");
// 		if(input === "new")
// 			addTodo();
// 		else if(input === "list")
// 			listTodos();
// 		else if(input === "delete")
// 			deleteTodoFromArray();
// 	}
// 	alert("You quitted the app.");
// }, 50);

// ====== A R R A Y  P R O B L E M  S E T ======

function printReverse(x)
{
	for(var i = x.length-1; i >= 0; i--)
		console.log(x[i]);
	
}

var arr = ["Pablo", "Estas", "Como"];

printReverse(arr);
console.log("\n\n");

function isUniform(x)
{
	var cmpr = x[0];
	for(var i = 0; i < x.length; i++)
	{
		if(cmpr !== x[i])
			return false;
	}

	return true;

}

arr = ["Hola", "Hola", "Hola", "Hola", "Hola"];
console.log(isUniform(arr)+"\n\n");

function sumArray(x)
{
	var sum = 0;
	for(var i = 0; i < x.length; i++)
	{
		if(!Number.isInteger(x[i]))
			return -1;
		sum+=x[i];
	}
	
	return sum;
}

arr = [2, 3, 5, 20];
console.log(sumArray(arr)+"\n\n");

function max(x)
{
	var maxN = 0;
	for(var i = 0; i < x.length; i++)
	{
		if(!Number.isInteger(x[i]))
		if(x[i] > maxN)
			maxN = x[i];
	}

	return maxN;
}

arr = [2, 2, 10, 230, 43];
console.log(max(arr));


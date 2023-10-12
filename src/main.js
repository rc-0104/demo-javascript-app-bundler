import {sayHello} from "./sayHello";

document.getElementById('nameForm').addEventListener('submit', function(e) {
	e.preventDefault();
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const helloMessage = sayHello(firstName, lastName);
	alert(helloMessage);
});
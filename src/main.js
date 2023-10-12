import './styles/styles.scss';
import './styles/styles2.scss';
import './styles/styles.less';
import './styles/styles2.less';

import {sayHello} from "./sayHello";

document.getElementById('nameForm').addEventListener('submit', function(e) {
	e.preventDefault();
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const helloMessage = sayHello(firstName, lastName);
	alert(helloMessage);
});
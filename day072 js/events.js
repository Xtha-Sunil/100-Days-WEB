<!DOCTYPE html>
<html>
<head>
	<title>JavaScript Event Handlers Example</title>
</head>
<body>

	<button>Click me</button>

	<form>
		<input type="text" name="username">
		<button type="submit">Submit</button>
	</form>

	<a href="#">Hover over me</a>

	<script>
		// onclick event handler
		const buttonElement = document.querySelector('button');
		buttonElement.onclick = function() {
		    console.log('Button clicked');
		};

		// onsubmit event handler
		const formElement = document.querySelector('form');
		formElement.onsubmit = function(event) {
		    event.preventDefault(); // Prevent the form from submitting normally
		    console.log('Form submitted');
		};

		// onmouseover/onmouseout event handlers
		const linkElement = document.querySelector('a');
		linkElement.onmouseover = function() {
		    console.log('Mouse over link');
		};
		linkElement.onmouseout = function() {
		    console.log('Mouse out of link');
		};

		// onload event handler
		window.onload = function() {
		    console.log('Page loaded');
		};

		// onkeydown/onkeyup event handlers
		const inputElement = document.querySelector('input');
		inputElement.onkeydown = function(event) {
		    console.log('Key down');
		};
		inputElement.onkeyup = function(event) {
		    console.log('Key up');
		};
	</script>

</body>
</html>
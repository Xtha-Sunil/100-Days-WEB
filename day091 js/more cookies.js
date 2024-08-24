//You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
document.cookie = "name=sunil; expires=Mon, 20 Feb 2023 12:00:00 UTC";


//With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
document.cookie = "name=sunil; expires=Mon, 20 Feb 2023 12:00:00 UTC; path=/";


//Delete a Cookie with JavaScript
//Deleting a cookie is very simple.
//You don't have to specify a cookie value when you delete a cookie.
//Just set the expires parameter to a past date:
document.cookie = "username=; expires=Sun, 19 Feb 2023 00:00:00 UTC; path=/;";
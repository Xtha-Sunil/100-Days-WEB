<!DOCTYPE html>
<html>
<body>

<form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
  Name: <input type="text" name="name"><br>
  Email: <input type="text" name="email"><br>
  <input type="submit">
</form>

<?php
// Using $_POST to retrieve form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  echo "Welcome $name! Your email is $email";
}

// Using $_SESSION to store and retrieve data
session_start();
if (!isset($_SESSION['counter'])) {
  $_SESSION['counter'] = 0;
} else {
  $_SESSION['counter']++;
}
echo "Pageviews: " . $_SESSION['counter'];

// Using $_COOKIE to store and retrieve data
$cookie_name = "user";
$cookie_value = "John Doe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // set for 30 days
if(isset($_COOKIE[$cookie_name])) {
    echo "Welcome " . $_COOKIE[$cookie_name] . "!";
} else {
    echo "Welcome guest!";
}
?>

</body>
</html>

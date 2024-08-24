<b>Login as admin to edit data.</b><br>

<form action ="<?php $_PHP_SELF ?>" method="POST">
  Username  :  <input name="uname" required> <br> <br>
  Password  :&nbsp <input type="password" name="pass" required>
  <br> <br>
  <input type="submit" style="height:2%; width:20%; font-size:20px;">
</form> <br>


<?php
$name = $_POST["uname"];
$pass = $_POST["pass"];

if($_POST['uname']){
  if($name==='master' and $pass==='clickbait'){
    echo "Enter whose data you want to edit. <br>";
    echo "<form action ='update.php' method='POST'>";
    echo "Name : <input name=\"upname\" required> <input type=\"submit\">";
    echo "</form>";
  } else {
    echo "Incorrect username or password or you are not admin.";
  }
}
?>

<br> <br><a href="index.html">Go Back</a>
<?php
$host = "localhost";
$username = "root";
$pass = "";
$dbname = "mydb";

$conn = new mysqli($host, $username, $pass, $dbname);
if ($conn->connect_error) {
  //assuming database and table already created
  die("Connection Unsuccessful: ". $conn->connect_error);
} else {
  echo "Connection Successful";
}

if ($name = $_POST["uname"]) {
  $pass = $_POST["pass"];
  $id = $_POST["id"];
  $sql = "Insert into t1 values(\"$name\",\"$pass\",$id)";
  if ($conn->query($sql) === true) {
    echo "<br> Successfully inserted record.";
  } else {
    echo "<br> Failed to insert record.". $conn->query_error;
  }
}
exit(0);
?>


<html>
<body>
  <form action="connect.php" method="post">
    <center><h2>Log in</h2> <br>
      Username: <input name="uname" required> <br>
      Password: <input type="password" name="pass" required> <br>
      Id: <input name="number" type="number" required> <br>
      <input type="submit">
    </center>
  </form>
</body>
</html>

<html>
<head>
		<meta charset="UTF-8">
		<title>Check Detail</title>
</head>
<body>
<h3>Enter username and password to see details</h3>
<form action ="<?php $_PHP_SELF ?>" method="POST">
  Username  :  <input name="uname" required> <br> <br>
  Password  :&nbsp <input type="password" name="pass" required>
  <br> <br>
  <input type="submit" style="height:2%; width:20%; font-size:20px;">
</form>
</body>
</html>



<?php
if ($_POST["uname"]){
  $conn = new mysqli("localhost", "root", "", "mydb");
  $uname = $_POST["uname"];
  $pass = $_POST["pass"];
  
  $sql = "select * from user where Name=\"$uname\" and Pasword=\"$pass\"";
  $result = $conn->query($sql);
  
  $sql1 = "SELECT * FROM marks where `Std. ID` = (select id from user where Name=\"$uname\" and Pasword=\"$pass\")";
  $res1 = $conn->query($sql1);
  
  if ($result -> num_rows >0){
    echo "<b>Personal Details</b><br>";
   echo "<table border=\"2px\"> <tr><td>Std. ID</td> <td>Name</td><td>E-mail</td><td>Password</td> <td>Contact </td> </tr> ";
   while($row = $result->fetch_assoc())
      echo "<tr><td>" .$row["ID"]. "</td><td>" . $row["Name"] . "</td><td>" . $row["Email"]. "</td><td>".$row["Pasword"]."</td><td>". $row["Contact"]. "</td></tr>";
   echo "</table> <br><br> <b>Mark Sheet </b><br>";
   echo "<table border='2px'> <tr><td>Std. Id</td> <td>Physics</td> <td>Computer</td><td>English</td> <td>Nepali </td> <td> Chemistry </td><td> Maths </td></tr>";
    
    while($row1 = $res1->fetch_assoc())
      echo "<tr><td>". $row1['Std. ID']. "</td><td>".$row1['Physics'] . "</td><td>". $row1['Computer']. "</td><td>".$row1['English']."</td><td>". $row1['Nepali']."</td><td>". $row1['Chemistry']. "</td><td>".$row1['Maths']."</td></tr>";
    echo "</table>";
  } else {
    echo "<br>No data found.";
  }
}
?>




<br> <a href="index.html">Go Back</a>
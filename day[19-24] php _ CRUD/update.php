<?php
session_start();
if ($uname = $_POST['upname']) {
  $_SESSION['sesname'] = $uname;
  $conn = new mysqli("localhost", "root", "", "mydb");
  $sql = "select * from user where Name=\"$uname\"";
  $result = $conn->query($sql);

  $sql1 = "SELECT * FROM marks where `Std. ID` = (select id from user where Name=\"$uname\")";
  $res1 = $conn->query($sql1);

  echo "<b>Personal Details</b><br>";
  if ($result -> num_rows > 0) {
    echo "<table border=\"2px\"> <tr><td>Std. ID</td> <td>Name</td><td>E-mail</td><td>Password</td> <td>Contact </td> </tr> ";
    while ($row = $result->fetch_assoc())
      echo "<tr><td>" .$row["ID"]. "</td><td>" . $row["Name"] . "</td><td>" . $row["Email"]. "</td><td>".$row["Pasword"]."</td><td>". $row["Contact"]. "</td></tr>";
    echo "</table> <br><br> <b>Mark Sheet </b><br> <table border='2px'> <tr><td>Std. Id</td> <td>Physics</td> <td>Computer</td><td>English</td> <td>Nepali </td> <td> Chemistry </td><td> Maths </td></tr>";

    while ($row1 = $res1->fetch_assoc())
      echo "<tr><td>". $row1['Std. ID']. "</td><td>".$row1['Physics'] . "</td><td>". $row1['Computer']. "</td><td>".$row1['English']."</td><td>". $row1['Nepali']."</td><td>". $row1['Chemistry']. "</td><td>".$row1['Maths']."</td></tr>";

    echo "</table>";
  } else {
    echo "<br>No data found.";
  }
}
?>
<style>
  .subjects {
    display: flex;
  }
  p {
    display: inline-flex;
    width: 10%;
    line-height: 0;
  }
</style>

<body>
  <form action="edit.php" method="POST">

    <h4>Edit marks obtained</h4>
    <div class="subjects">
      <div>
        <input type="number" name="eng" placeholder="English" required> <br>
        <input type="number" name="nep" placeholder="Nepali" required>  <br>
        <input type="number" name="chem" placeholder="Chemistry" required><br>
      </div>
      <div>
        <input type="number" name="phy" placeholder="Physics" required>  <br>
        <input type="number" name="comp" placeholder="Computer" required> <br>
        <input type="number" name="math" placeholder="Maths" required>   <br>
      </div>
    </div>
    <!-- subjects -->
    <br>
    <input type="submit" value="Save Edit">
  </form>
  <form action="delete.php" method="post">
    <input type="submit" value="Delete" style="color:red">
  </form>

</body>
</html>

<br><br> <a href="index.html">Go Back</a><br><br>

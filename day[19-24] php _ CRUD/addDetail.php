<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sunil Academy | Add Data</title>

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

</head>

<body>
  <form action="addDetail.php" method="POST">
    <h3>Add Detail</h3>
    <div class="detail">
      <p>
        Student Id
      </p>
      <input maxlength="5" name="id" required> <br>
      <p>
        Name
      </p>
      <input maxlength="15" name="uname" required> <br>
      <p>
        Contact
      </p>
      <input type="number" name="cont" maxlength="10" required> <br>
      <p>
        E-mail
      </p>
      <input type="email" name="mail" maxlength="30" required> <br>
      <p>
        Password
      </p>
      <input type="password" name="pass" maxlength="20" required> <br>
    </div>
    <br>


    <h4>Enter marks obtained</h4>
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
    <input type="submit">

  </form>

  <br>
</body>
</html>



<?php
$id = $_POST['id'];
$uname = $_POST['uname'];
$cont = $_POST['cont'];
$mail = $_POST['mail'];
$pass = $_POST['pass'];
$eng = $_POST['eng'];
$nep = $_POST['nep'];
$math = $_POST['math'];
$comp = $_POST['comp'];
$chem = $_POST['chem'];
$phy = $_POST['phy'];

if ($_POST["id"]) {
$conn = new mysqli("localhost", "root", "", "mydb");
if ($conn->connect_error)
die("Connection failed due to ". $conn->connect_error);
else
echo ("Connection successfully established.");

$sql = "insert into marks values($id, $phy,$comp,$eng, $nep,$chem, $math)";
$a = $conn->query($sql);

$sql1 = "insert into user values($id, \"$uname\", \"$mail\",\"$pass\", $cont)";
$b = $conn->query($sql1);

if (1) {
echo "<br>Data recorded successfully.";
} else {
echo "<br>Failed to record data.". $conn->error;
}
#header("Location: {$_SERVER['HTTP_REFERER']}");
}
?>

<br> <br> <a href="index.html">Go Back</a>

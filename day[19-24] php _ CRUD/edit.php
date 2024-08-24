<?php
session_start();
$eng = $_POST["eng"];
$nep = $_POST['nep'];
$math = $_POST['math'];
$comp = $_POST['comp'];
$chem = $_POST['chem'];
$phy = $_POST['phy'];
$y = $_SESSION['sesname'];


$conn = new mysqli("localhost", "root", "", "mydb");
$sql = "UPDATE `marks` SET `Physics` = $phy, Computer= $comp, English=$eng,Nepali=$nep,Maths=$math,Chemistry=$chem WHERE `marks`.`Std. ID` = (Select ID from user Where Name='$y')";

if ($conn->query($sql)) {
  echo '<br> Data edited successfully.';
} else {
  echo '<br> Data edit unsuccessful due to '. $conn->error;
}
?>
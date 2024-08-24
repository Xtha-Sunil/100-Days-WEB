<?php
session_start();
$x = $_SESSION['sesname'];
$conn=new mysqli("localhost","root","","mydb");
$sql = "Delete from user where Name = '$x'";
$sql1 = "delete from marks where `Std. ID` = (select id from user where name =\"$x\")";

if($conn->query($sql1)===true){
  $conn->query($sql);
  echo "Data deleted successfully.";
} else {
  echo "Failed to delete data due to " . $conn->error;
}
?>
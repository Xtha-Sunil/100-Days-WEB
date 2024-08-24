<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db";
$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Connection Failed: ". $conn->connect_errror);
}else{
    echo "Connection Successful";
}

$sql = 'create table t1(roll int,name varchar(20), address varchar(20));';
if($conn->query($sql) === true){
    echo "<br> Table created successfully";
} else {
    echo "<br> Table creation unsuccessful";
}

$sql = 'Insert into t1 values(0,"sunil","Panchkhal"),(1,"koder","nepal");';

if($conn->query($sql) === true){
    echo "<br> Insert record into table successfully.";
} else {
    echo "<br> Insert record into table unsuccessful.";
}
?>

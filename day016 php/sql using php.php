<?php
//creating connection
$conn = new mysqli("locahost","root","","dbname");
if($conn->connect_error)
  die("Connection failed due to ".$conn->connect_error. "<br>");
else
  echo("Connection Successful.<br>");

//creating table
$table = "Create table table_name(
  id int;
  name varchar(20);
  book_id int;
)";
if($conn->query($table) === true)
  echo "Table created successfully. <br>";
else
  die "Failed to create table. <br>";


//insert into table
$insert = "insert into table_name 
	values(1, 'sunil' , 123)
  values(2, 'bibesh', 234)";

if($conn->query($insert) === true)
  echo "Insert values into table successfully. <br>";
else
  die "Failed to insert values into table. <br>";

// update values
$update = "UPDATE SET book_id = 777 where id = 1";
if($conn->query($update) === true)
  echo "Values updated successfully. <br>";
else
  die "Failed to update values. <br>";

//add column
$alter1 ="ALTER TABLE table_name ADD column_name int";//last is data type
//remove column
$alter2 = "ALTER TABLE table_name DROP COLUMN column_name";
//rename column
$alter3 = "ALTER TABLE table_name RENAME column_name TO contact";

//use if/try...catch to check
$conn->close();
?>

<?php
$name = $_POST['name'];
$age = $_POST['age'];
$class = $_POST['class'];
if ($name){
      echo "Welcome ". $name. "<br />";
      echo "You are ". $age. " years old. <br>";
      echo "You study in Class ". $class;
      exit();
}
//here $_PHP_SELF refers to name of file where this script is in
// GET method is insecure as it show value in URL 
// so POST method is widely used while submitting form
?>
<html>
   <body>

      <form action = "<?php $_PHP_SELF ?>" method = "POST">
         Name: <input name = "name" /> <br>
         Age: <input name = "age" /> <br>
         Class: <input name="class"> <br>
         <input type = "submit" />
      </form>

   </body>
</html>

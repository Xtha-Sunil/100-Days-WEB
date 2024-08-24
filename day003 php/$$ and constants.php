<?php
echo("day 3 | $$$ and constant <br>");

$var = 'abc';
$abc = 'nepal';
echo $$var.'<br>';  // this will print nepal
$nepal = 'var';
echo $$$var.'<br';   //this will print abc


echo "<br> constant variables <br>";
define('abc','demo',false);
//third parameter is optional and it is for case-insensitiveness
echo $abc;
?>

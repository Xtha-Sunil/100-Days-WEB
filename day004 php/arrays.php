<?php
echo("day 4 array<br>");
// indexed array
$cntry = array("nepal", "india", "japan");

// another way
$cptl[0] = "Kathmandu";
$cptl[1] = "delhi";
$cptl[2] = "tokyo";


// transversing the array
echo('transverse using foreach loop <br>');
foreach ($cntry as $i){
    echo ("country:  $i <br>");
}
echo('<br> transverse using for loop <br>');
for($j=0; $j<3;$j++){
    echo("capital of $cntry[$j] is $cptl[$j] <br>");
}

// to get length
echo("<br> array size: ".count($cptl). "<br>");


echo("<br>2) Associative array <br>");

$PM  =array("nepal"=>"sbd","india"=>"nm","china"=>"sjp");

echo "nepal PM: ".$PM["nepal"]."<br/>";  
echo "india PM: ".$PM["india"]."<br/>";  
echo "china PM: ".$PM["china"]."<br/>";


//but we may not name of key all time so foreach loop is used
echo "<br> using foreach loop <br>";
foreach($PM as $i => $j){
    echo "key is: ".$i." and value is: ". $j."<br>";
}
echo "<br> 3) multi dim array <br>";
$loop = array(
    array(1, "for","foreach"),
    array(2, "do","do..while"),
    array(3, "break", "continue")
);
for($i=0; $i<3;$i++){
    for($j=0;$j<3;$j++){
        echo $loop[$i][$j]." ";
    }
    echo "<br>";
}
?>

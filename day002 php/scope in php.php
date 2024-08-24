<?php
//code 1
    $name = "David";
    function getName1() {
        //echo $name;        //error
    }
    getName1();
    
    // code2
    $name = 'Sunil';
    function getName2() {
        global $name;
        echo $name;
    }
    getName2();
?>

<!--
first code is error because we cant use global
variable without making thim locally available

ALL VARIABLES ARE SCOPPED LOCALLY BY DEFAUULT
To make them global scopped we need to use superglobal variable i.e. global



-->

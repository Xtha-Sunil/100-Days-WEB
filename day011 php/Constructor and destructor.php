<?php
class Person {
    public function __construct() {
        echo "Object constructed <br>";
    }
    public function __destruct() {
        echo "Object destroyed<br>";
    }
}
$p = new Person();
echo 'hi <br>';

// 1]Class is like blueprint using class we can crete its multiple instances
// 2]This keyword is used to refrence the object callling the class
// 3]The __construct() method is often used for any initialization that the object may need before it is used.
// 4]Parameters can be included in __construct() to accept values when the object is created

?>

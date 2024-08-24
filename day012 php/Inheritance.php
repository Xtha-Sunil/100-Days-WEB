<?php
class Animal {
    public $name;
    public function hi() {
        echo "Hi from Animal";
    }
}
class Dog extends Animal {
}

$d = new Dog();
$d->hi();

/*
even though Dog class is empty as we inherit it from class
animal we can access hi function of class animal
from Dog class
*/
?>

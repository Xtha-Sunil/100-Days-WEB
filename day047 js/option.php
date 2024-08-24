<?php
$data = $_GET['datavalue'];
$a1 = array("Iphone", "Samsung", "Oppo", "Xiaomi");
$a2 = array("HP", "Apple", "Acer", "Dell");
$a3 = array("KTM", "Pulsar", "Honda", "220");

if ($data === "Mobile") {
  foreach ($a1 as $aone) {
    echo "<option> $aone </option>";
  }
} else if ($data === "Laptop") {
  foreach ($a2 as $atwo) {
    echo "<option> $atwo </option>";
  }
} else if ($data == "Bike") {
  foreach ($a3 as $athree) {
    echo "<option> $athree </option>";
  }
} else {
  echo "<option>Select the brand...</option>";
}
?>

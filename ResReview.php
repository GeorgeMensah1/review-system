<?php
echo "Review for ".$_POST["cus_name"] ."<br>" ."<br>";

echo "Hello ".$_POST["cus_name"] . "!" . " Kindly provide the answers to the following questions so we can 
work on your Resume." ."<br>" ."<br>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $p_details = isset($_POST['choose_one']) ? $_POST['choose_one'] : ''; 
    echo $p_details . "<br>" ."<br>";
}

echo $_POST["confirm"] . "<br>" ."<br>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $edu_details = isset($_POST['education']) ? $_POST['education'] : ''; 
    echo $edu_details . "<br>" ."<br>";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $work_details = isset($_POST['work']) ? $_POST['work'] : ''; 
    echo $work_details . "<br>" ."<br>";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $sem_details = isset($_POST['seminar']) ? $_POST['seminar'] : ''; 
    echo $sem_details . "<br>" ."<br>";
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $emp_details = isset($_POST['emp_name']) ? $_POST['emp_name'] : ''; 
    echo "Reviewed by " .$emp_details;
}
?>

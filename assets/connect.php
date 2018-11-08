<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "db_demographic_canada";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    echo 'no bug, awsome';
    exit;
}

$myquery = "SELECT * FROM db_gender";
$result = mysqli_query($conn, $myquery);
$rows = array();

while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}
echo json_encode($rows);

?>
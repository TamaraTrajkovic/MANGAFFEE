<?php

include "projekat.html";
require "connection.php";

$sql = "SELECT * FROM kontakt";
$result = $db->query($sql); 

if($result->num_rows>0) 
    while($row =  $result->fetch_assoc()) 

    echo "<br/>"."Ime:".$row["ime"]."<br/>"."Email:".$row["email"]."<br/>"."Komentar:".$row["komentar"]."<br/>";
    
?>
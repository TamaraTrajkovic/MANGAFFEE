<?php 

include "connection.php";

 if(isset($_POST["submit"]))
    {
    $ime = htmlspecialchars($_POST["ime"]);
    $email = htmlspecialchars($_POST["email"]);
    $komentar = htmlspecialchars($_POST["komentar"]);
    
    $stmt = $db->prepare("INSERT INTO kontakt(ime, email, komentar)VALUES(?,?,?)"); 
    $stmt->bind_param("sss", $ime, $email, $komentar); 
    $stmt->execute();
    $stmt->close();
    }
    
?>
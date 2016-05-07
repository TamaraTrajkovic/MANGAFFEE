<?php include "kontakt.html";
include "connection.php";
?>

<script type="text/javascript" src="kontakt.js"></script>

<div id = "kontakt">
    <h1>Kontakt</h1>
</div>

<form id = "kontakt" class = "form-horizontal col-md-2"  method="post" action="kkontakt.php">
    
    	<div class = "form-group" id = "divIme">
    <label for="ime">Ime</label>
    <input id="ime" name="ime" type="text" class = "form-control"/>
    	</div>
    	
		<div class = "form-group" id = "divEmail">
    <label for="email">Email</label>
    <input id="email" name="email" type="textarea" class = "form-control"/>
        </div>
        
		<div class = "form-group" id = "divKomentar">
    <label for="komentar">Komentar</label>
    <input id="komentar" name="komentar" type="textarea" class = "form-control"/>
        </div>
    
		<div class = "form-group">
    <input type="submit" name="submit" value="OK"  id = "dugme"  class = "form-control btn btn-primary"/>
    	</div>
    	
</form>

	
		
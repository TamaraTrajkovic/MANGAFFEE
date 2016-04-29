window.onload = init;

function init(){
	var dugme = document.getElementById("dugme");
	dugme.onclick = validacija;
	var email = document.getElementById("email").value;
	var divEmail = document.getElementById("divEmail");
	var inEmail = document.getElementById("email");
	inEmail.onchange = function()
	{
		validateEmail(divEmail,this.value);
	};
	
}

function validateEmail(div, val){
	if(val != "" && val.indexOf('@')>6)
	{
		div.setAttribute("class", "form-group has-feedback has-success");
		var span = document.createElement("span");
		span.setAttribute("class", "form-control-feedback");
		var img = document.createElement("img");
		img.setAttribute("src", "slike/ok.jpg");
		img.setAttribute("width", "15px");
		img.setAttribute("heigth", "15px");
		
		div.appendChild(span);
		span.appendChild(img);
	}
	else
    {
		div.setAttribute("class", "form-group has-feedback has-error");
		var span = document.createElement("span");
		span.setAttribute("class", "form-control-feedback");
		var img = document.createElement("img");
		img.setAttribute("src", "slike/delete.png");
		img.setAttribute("width", "15px");
		img.setAttribute("heigth", "15px");
		
		div.appendChild(span);
		span.appendChild(img);
        
        var nijedobro = document.createElement("span");
        nijedobro.innerHTML = "Email nije validan";
        
      	divEmail.appendChild(nijedobro);
       
	}
}




function validacija(){
	var ime = document.getElementById("ime").value;
	var komentar = document.getElementById("komentar").value;	
	
	var divIme = document.getElementById("divIme");
	var divKomentar = document.getElementById("divKomentar");	
	
	if(ime != "" && ime.length>2)
	{
		divIme.setAttribute("class", "form-group has-feedback has-success");
		var span = document.createElement("span");
		span.setAttribute("class", "form-control-feedback");
		var img = document.createElement("img");
		img.setAttribute("src", "slike/ok.jpg");
		img.setAttribute("width", "15px");
		img.setAttribute("heigth", "15px");
		
		divIme.appendChild(span);
		span.appendChild(img);
		
	}
	else{
		divIme.setAttribute("class", "form-group has-feedback has-error");
		var span = document.createElement("span");
		span.setAttribute("class", "form-control-feedback");
		var img = document.createElement("img");
		img.setAttribute("src", "slike/delete.png");
		img.setAttribute("width", "15px");
		img.setAttribute("heigth", "15px");
		
		divIme.appendChild(span);
		span.appendChild(img);
        
        var nijedobro = document.createElement("span");
        nijedobro.innerHTML = "Polje je obavezno";
        
        divIme.appendChild(nijedobro);
       
	}
	


	if(komentar != "" && komentar.length>2)
	{
		divKomentar.setAttribute("class", "form-group has-feedback has-success");
		var span = document.createElement("span");
		span.setAttribute("class", "form-control-feedback");
		var img = document.createElement("img");
		img.setAttribute("src", "slike/ok.jpg");
		img.setAttribute("width", "15px");
		img.setAttribute("heigth", "15px");
		
		divKomentar.appendChild(span);
		span.appendChild(img);
		
	}
	else{
		divKomentar.setAttribute("class", "form-group has-feedback has-error");
		var span = document.createElement("span");
		span.setAttribute("class", "form-control-feedback");
		var img = document.createElement("img");
		img.setAttribute("src", "slike/delete.png");
		img.setAttribute("width", "15px");
		img.setAttribute("heigth", "15px");
		
		divKomentar.appendChild(span);
		span.appendChild(img);
        
        var nijedobro = document.createElement("span");
        nijedobro.innerHTML = "Polje je obavezno";
        

        
        divKomentar.appendChild(nijedobro);
        
    
	}

}
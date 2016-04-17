window.onload = init;

function init(){
	var dugme = document.getElementById("dugme");
	dugme.onclick = validacija;
	
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
		img.setAttribute("src", "ok.jpg");
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
		img.setAttribute("src", "delete.png");
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
		img.setAttribute("src", "ok.jpg");
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
		img.setAttribute("src", "delete.png");
		img.setAttribute("width", "15px");
		img.setAttribute("heigth", "15px");
		
		divKomentar.appendChild(span);
		span.appendChild(img);
        
        var nijedobro = document.createElement("span");
        nijedobro.innerHTML = "Polje je obavezno";
        

        
        divKomentar.appendChild(nijedobro);
        
    
	}
	
}	

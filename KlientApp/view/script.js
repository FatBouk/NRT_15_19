function validateForma()
{
  flag=true;
  if(document.querySelector("#kat").value=="")
  { 
    document.getElementById("alert").innerHTML+="Niste popunili kategoriju!\n"
    flag=false;
  }
  if(document.querySelector("#dat").value=="")
  { 
    document.getElementById("alert").innerHTML+="Niste popunili datum!\n"
    flag=false;
  }
  if(document.querySelector("#cena").value=="")
  { 
    document.getElementById("alert").innerHTML+="Niste popunili cenu!\n"
    flag=false;
  }
  if(document.querySelector("#tekst").value=="" || document.querySelector("#tekst").value.lenght<10 || document.querySelector("#tekst").value.lenght>180)
  { 
    document.getElementById("alert").innerHTML+="Proverite tekst!\n"
    flag=false;
  }
  if(document.querySelector("#tag").value=="")
  { 
    document.getElementById("alert").innerHTML+="Niste popunili tagove!\n"
    flag=false;
  }
  if(document.querySelector("#mail").value=="")
  { 
    document.getElementById("alert").innerHTML+="Niste popunili mejl!\n"
    flag=false;
  }
  return flag;
}
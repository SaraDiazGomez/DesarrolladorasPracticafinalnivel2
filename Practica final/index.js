


// Función que valida el campo del nombre de usuario
function validarnombre() {
  const nombre = document.getElementById('nombre').value;
  if (nombre.length == 0) {
    document.getElementById("nombre").className = "entradasno";
    document.getElementById("vacionombre").style.display = "block";
  }
  if (nombre.length >= 1) {
    document.getElementById("nombre").className = "entradassi";
    document.getElementById("vacionombre").style.display = "none";
  }
  
}

// Función que valida el campo del correo electronico
function validarcorreo() {

  const email = document.getElementById("email").value;

  if (email.length == 0) {

    document.getElementById("email").className = "entradasno";
    document.getElementById("vacioemail").style.display = "block";
    document.getElementById("erroremail").style.display = "none";
  }
  if (email.length >= 1) {
    document.getElementById("vacioemail").style.display = "none";
    document.getElementById("erroremail").style.display = "none";

    if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)) { 
      document.getElementById("email").className = "entradassi";
      document.getElementById("vacioemail").style.display = "none";
      document.getElementById("erroremail").style.display = "none";
      
    }
    else { document.getElementById("email").className = "entradasno";
    document.getElementById("vacioemail").style.display = "none";
    document.getElementById("erroremail").style.display = "block";}

  }
  
}
// Función que valida el campo de la contraseña
function validarcontraseña1() {
  
  const password = document.getElementById("contraseña1").value;



  if (password.length == 0) {

    document.getElementById("contraseña1").className = "entradasno";
    document.getElementById("vaciopassword1").style.display = "block";
    document.getElementById("errortamaño").style.display = "none";
  }

  if (password.length > 0 && password.length < 8) {

    document.getElementById("contraseña1").className = "entradassi";
    document.getElementById("vaciopassword1").style.display = "none";
    document.getElementById("errortamaño").style.display = "none";
  }

  if (password.length > 8) {

    document.getElementById("contraseña1").className = "entradasno";
    document.getElementById("errortamaño").style.display = "block";
    document.getElementById("vaciopassword1").style.display = "none";
    
  }

}


// Función que valida el campo de la repetición de contraseña, comprueba que son iguales.

function validarcontraseña2() {

  const password = document.getElementById("contraseña1").value;

  const password2 = document.getElementById("contraseña2").value;

  if (password2.length == 0) {
    document.getElementById("contraseña2").className = "entradasno";
    document.getElementById("vaciopassword2").style.display = "block";
    document.getElementById("errorpassword").style.display = "none";

  }

  if (password2 != password && password2.length > 0 ) {

    document.getElementById("vaciopassword2").style.display = "none";
    document.getElementById("contraseña2").className = "entradasno";
    document.getElementById("errorpassword").style.display = "block";
  }
  if (password2 == password && password2.length > 0) {

    document.getElementById("vaciopassword2").style.display = "none";
    document.getElementById("contraseña2").className = "entradassi";
    document.getElementById("errorpassword").style.display = "none";
  }

}




// Resumen de todas las funciones para que se ejecuten cuando presionas el boton enviar

function validarFormulario() {

  validarnombre();
  validarcorreo();
  validarcontraseña1();
  validarcontraseña2();

}







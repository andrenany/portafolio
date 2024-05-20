document.addEventListener('DOMContentLoaded', function() {
    const multipleText = document.querySelector('.multiple-text');
    const professions = ['Administración ', 'Informática '];
    let index = 0, charIndex = 0, isDeleting = false;
  
    function type() {
        const currentProfession = professions[index];
        const displayText = isDeleting 
            ? currentProfession.substring(0, charIndex--) 
            : currentProfession.substring(0, charIndex++);
        
        multipleText.textContent = displayText;
  
        if (!isDeleting && charIndex === currentProfession.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % professions.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
  
    type();
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    let nombre = document.getElementById("nombre");
    let nombre = document.getElementById("apellido");
    let correo = document.getElementById("correo");
    let idea = document.getElementById("idea");
    let mensaje = document.getElementById("mensaje");
    let nombreError = document.getElementById("nombreError");
    let nombreError = document.getElementById("apellidoError");
    let correoError = document.getElementById("correoError");
    let ideaError = document.getElementById("ideaError");
    let mensajeError = document.getElementById("mensajeError");
    let form = document.getElementById("myForm");
  
    form.addEventListener("submit", function(event) {
      nombreError.textContent = "";
      apellidoError.textContent = "";
      correoError.textContent = "";
      ideaError.textContent = "";
      mensajeError.textContent = "";
  
      if (nombre.value === null || nombre.value.trim() === "") {
        nombreError.textContent = "Por favor, completa tu nombre";
        event.preventDefault();
      }
      if (apellido.value === null || apellido.value.trim() === "") {
        nombreError.textContent = "Por favor, completa tu apellido";
        event.preventDefault();
      }
  
      if (correo.value === null || correo.value.trim() === "") {
        correoError.textContent = "Por favor, ingresa tu correo";
        event.preventDefault();
      }
  
      if (idea.value === null || idea.value.trim() === "") {
        ideaError.textContent = "Por favor, ingresa tu idea principal";
        event.preventDefault();
      }
  
      if (mensaje.value === null || mensaje.value.trim() === "") {
        mensajeError.textContent = "Por favor, ingresa tu mensaje";
        event.preventDefault();
      }
    });
  });
  
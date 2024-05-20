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
  let form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    let isValid = true;

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let correo = document.getElementById("correo");
    let idea = document.getElementById("idea");
    let mensaje = document.getElementById("mensaje");

    let nombreError = document.getElementById("nombreError");
    let apellidoError = document.getElementById("apellidoError");
    let correoError = document.getElementById("correoError");
    let ideaError = document.getElementById("ideaError");
    let mensajeError = document.getElementById("mensajeError");

    nombreError.textContent = "";
    apellidoError.textContent = "";
    correoError.textContent = "";
    ideaError.textContent = "";
    mensajeError.textContent = "";

    if (nombre.value.trim() === "") {
      nombreError.textContent = "Por favor, completa tu nombre";
      isValid = false;
    }

    if (apellido.value.trim() === "") {
      apellidoError.textContent = "Por favor, completa tu apellido";
      isValid = false;
    }

    if (correo.value.trim() === "") {
      correoError.textContent = "Por favor, ingresa tu correo";
      isValid = false;
    }

    if (idea.value.trim() === "") {
      ideaError.textContent = "Por favor, ingresa tu idea principal";
      isValid = false;
    }

    if (mensaje.value.trim() === "") {
      mensajeError.textContent = "Por favor, ingresa tu mensaje";
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});

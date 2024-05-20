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
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let idea = document.getElementById("idea").value;
    let mensaje = document.getElementById("mensaje").value;

    // Valido los campos
    if (nombre.trim() === '') {
      alert('Por favor, ingrese su nombre completo.');
      event.preventDefault();
      return;
    }

    if (apellido.trim() === '') {
      alert('Por favor, ingrese su apellido.');
      event.preventDefault();
      return;
    }

    if (correo.trim() === '') {
      alert('Por favor, ingrese su correo electrónico.');
      event.preventDefault();
      return;
    }

    if (idea.trim() === '') {
      alert('Por favor, ingrese la idea principal.');
      event.preventDefault();
      return;
    }

    if (mensaje.trim() === '') {
      alert('Por favor, ingrese un mensaje.');
      event.preventDefault();
      return;
    }

    // Envío el formulario
    form.submit();
  });
});

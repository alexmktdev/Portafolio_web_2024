document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = -120; 

        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

 

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
});

sr.reveal('.names', { delay: 300, origin: 'top' });
sr.reveal('.redes-sociales', { delay: 400, origin: 'left' });
sr.reveal('.cv', { delay: 500, origin: 'right' });
sr.reveal('.img-tamaño', { delay: 350, origin: 'right' });
sr.reveal('.acerca-de-mi', { delay: 400, origin: 'left' });
sr.reveal('.educacion', { delay: 400, origin: 'left' });
sr.reveal('.habilidades-t', { delay: 400, origin: 'left' });
sr.reveal('.habilidades-b', { delay: 400, origin: 'left' });
sr.reveal('.proyectos-1', { delay: 400, origin: 'left' });
sr.reveal('.contactame', { delay: 400, origin: 'left' });






document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

 
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var country = document.getElementById('country').value;
    var contactType = document.getElementById('contactType').value;
    var message = document.getElementById('message').value.trim();
    var mensajeEstado = document.getElementById('mensaje-estado');

   
    if (name === "" || email === "" || phone === "" || country === "" || contactType === "" || message === "") {
      
        mensajeEstado.className = "mensaje error mt-3";
        mensajeEstado.innerHTML = "Por favor completa los campos correspondientes.";
        mensajeEstado.style.display = "block";
    } else {
        
        mensajeEstado.className = "mensaje exito mt-3";
        mensajeEstado.innerHTML = "¡Enviado satisfactoriamente!";
        mensajeEstado.style.display = "block";

        
    }
});
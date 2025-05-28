function enviar(){
    const nombre = document.getElementById("nombre").value.trim()
    const email = document.getElementById("email").value.trim()
    const asunto = document.getElementById("asunto").value.trim()
    const mensaje = document.getElementById("mensaje").value.trim()

    if(!nombre || !email|| !asunto || !mensaje){
        alert("COMPLETAR TODOS LOS CAMPOS")
        return;
    }
    else{
        const usuario = {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje
        };
        console.log(usuario)
    }
}


const btn = document.getElementById('button');

document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_b5w6i1d';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
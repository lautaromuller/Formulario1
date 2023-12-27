document.getElementById('formulario').addEventListener('submit', (event) =>{
    event.preventDefault()

    //Validar nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if(entradaNombre.value.trim() === ""){
        errorNombre.textContent = 'Por favor ingresa tu nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    //Validar correo
    let entradaEmail = document.getElementById('email')
    let errorEmail = document.getElementById('emailError')
    let patternEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    if(!patternEmail.test(entradaEmail.value)){
        errorEmail.textContent = 'Por favor ingresa tun mail válido'
        errorEmail.classList.add('error-message')
    }else{
        errorEmail.textContent = ''
        errorEmail.classList.remove('error-message')
    }

    //Validar contraseña
    let entradaContrasena = document.getElementById('password')
    let errorContrasena = document.getElementById('passwordError')
    let patternContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/
    if(!patternContrasena.test(entradaContrasena.value)){
        errorContrasena.textContent = 'La contraseña debe tener mas de 8 caracteres y contener Mayúsculas, Minusculas, Números y caracteres especiales'
        errorContrasena.classList.add('error-message')
    }else{
        errorContrasena.textContent = ''
        errorContrasena.classList.remove('error-message')
    }

    //Validar envio
    if(!errorNombre.textContent && !errorEmail.textContent && !errorContrasena.textContent){
        alert('El formulario se ha enviado con éxito')
        document.getElementById('formulario').reset();
    }
});
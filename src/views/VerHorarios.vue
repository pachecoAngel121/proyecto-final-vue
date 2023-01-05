<template>
    <main>
        <section class="container about">
            <h2 class="subtitle">Gestion de Horarios</h2>
            <div>
                <form id="Horario">
                    <div id="Nombre">
                        <h1>Nombre del usuario</h1>
                        <input class="controls" type="text" id="nombred" placeholder="Ingrese un nombre" name="nombres" required>
                        <span id="n-error" aria-live="assertive"></span>
                    </div>

                    <h1>Escoja la carrera</h1>
                    <div class="select">
                        <select name="carrera" id="carrera">
                            <option value="0" selected disabled>Elige una opción</option>
                            <option value="IES">Ing. en Sistemas</option>
                            <option value="ITI">Ing. en Tecnologías de la información</option>
                        </select>
                        
                        
                    </div>
                    <span id="c-error" aria-live="assertive"></span>

                    <h1>Escoja el Nivel</h1>
                    <div class="select">
                        <select name="nivel" id="nivel">
                            <option value="0" selected disabled>Elige una opción</option>
                            <option value="N1">Primer Nivel</option>
                            <option value="N2">Segundo Nivel</option>
                            <option value="N3">Tercer Nivel</option>
                            <option value="N4">Cuarto Nivel</option>
                            <option value="N5">Quinto Nivel</option>
                            <option value="N6">Sexto Nivel</option>
                            <option value="N7">Séptimo Nivel</option>
                            <option value="N8">Octavo Nivel</option>
                            <option value="N9">Noveno Nivel</option>
                            <option value="N10">Décimo Nivel</option>
                        </select>
                    </div>
                    <span id="nv-error" aria-live="assertive"></span>
                    <h1>Escoja el paralelo</h1>
                    <div class="select">
                        <select name="paralelo" id="paralelo">
                            <option value="0" selected disabled>Elige una opción</option>
                            <option value="A">Paralelo A</option>
                            <option value="B">Paralelo B</option>
                            <option value="C">Paralelo C</option>
                        </select>
                    </div>
                    <span id="p-error" aria-live="assertive"></span>
                    <h1>Escoja la asignatura</h1>
                    <div class="select">
                        <select name="asignatura" id="asignatura">
                            <option value="0" selected disabled>Elige una opción</option>
                            <option value="M1">Gestión de base de datos</option>
                            <option value="M2">Aplicaciones Web I</option>
                            <option value="M3">Ingeniería de Software</option>
                            <option value="M4">Redes del computador</option>
                            <option value="M5">Interfaces y multimedia</option>
                            <option value="M6">Lectura y escritura de textos académicos</option>
                        </select>
                    </div>
                    <span id="a-error" aria-live="assertive"></span>
                    <input type="submit" class="send-button" value="Siguiente">
                </form>
            </div>
        <br><br><center><img src="http://uleam-portafolioorganizacion.weebly.com/uploads/5/9/1/3/59139831/1507566_orig.png" width="320" height="80" ></center>
        </section>
    </main>
    <footer class="footer">
        <section class="footer__copy container">
            <div class="footer__social">
                <a href="https://www.facebook.com/Facci.Uleam/" class="footer__icons"><img src="../assets/facebook.svg" class="footer__img"></a>
                <a href="https://twitter.com/facciuleam" class="footer__icons"><img src="../assets/twitter.svg" class="footer__img"></a>
                <a href="https://www.youtube.com/channel/UCOferC0PjpEUegrVq8Re-TQ" class="footer__icons"><img src="../assets/youtube.svg" class="footer__img"></a>
            </div>
            <h3 class="footer__copyright">Derechos reservados 2022 &copy; HorariosFacci</h3>
        </section>
    </footer>
</template>
<script>
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Horario").addEventListener('submit', validarFormulario); 
  });
function validarFormulario(evento){
    evento.preventDefault();
    var nombre = document.getElementById('nombred').value;
    if (nombre.length > 20 || !nombre.trim("")) {
        document.getElementById("n-error").innerHTML = "Nombre no válido";
        return;
    }
    else{
        document.getElementById("n-error").innerHTML = "";
    }
    var carrera = document.getElementById('carrera').value;
    if (carrera==0) {
        document.getElementById("c-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("c-error").innerHTML = "";
    }
    var nivel = document.getElementById('nivel').value;
    if (nivel==0) {
        document.getElementById("nv-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("nv-error").innerHTML = "";
    }
    var paralelo = document.getElementById('paralelo').value;
    if (paralelo==0) {
        document.getElementById("p-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("p-error").innerHTML = "";
    }
    
    var asignatura = document.getElementById('asignatura').value;
    if (asignatura==0) {
        document.getElementById("a-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("a-error").innerHTML = "";
    }
    this.submit();
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
body {
    font-family: 'Times New Roman', Times, serif;
    background-color: rgb(134, 203, 246);
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--padding-container);
}
#Horario {
    width: 450px;
    background: #bbc0be85;
    padding: 30px;
    margin: auto;
    margin-top: 100px;
    border-radius: 4px;
    color: white;
}

select {
    background: white;
    flex: 1;
    padding: 0 .5em;
    color: #000000;
    cursor: pointer;
    font-size: 1em;
    font-family: 'Times New Roman', Times, serif;
}

h1 {
    padding: 3px;
    font-size: 15px;
    text-align: center;
}

.select {
    display: flex;
    width: 370px;
    height: 40px;
    line-height: 3;
    background: #000000;
    overflow: hidden;
    border-radius: .35em;
    margin: 10px;
    border: 1px solid #96badd;
}

#Nombre {
    margin: auto;
    border-radius: 4px;
    color: white;
    padding: 10px;
}

#Nombre h1 {
    padding: 10px;
}

.controls {
    width: 370px;
    height: 40px;
    background: #ffffffbb;
    padding: 10px;
    border-radius: .35em;
    border: 1px solid #96badd;
    font-size: 18px;
    color: rgb(0, 0, 0);
}

::placeholder {
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    color: #000000;
}

.send-button {
    padding: 15px 25px;
    margin: 20px;
    font-size: 16px;
    border: 2px solid #000000;
    color: white;
    cursor: pointer;
    background: linear-gradient(to right, transparent 50%, #778899 60%);
    background-size: 200%;
    background-position: left;
    transition: background-position 0.5s;
    display: inline-block;
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.send-button:hover {
    background-position: right;
    color: white;
    font-weight: 700;
}

.about {
    text-align: center;
}

.subtitle {
    text-align: center;
    font-size: 28px;
    margin-bottom: 22px;
    padding: 50px 50px 1px 20px;
    color: aliceblue;
    text-decoration: none;
    text-align:center;
    font-weight: 700;
    text-shadow: 2px  1px 2px gray,
                1px  1px 1px gray,
                -2px  1px 2px black,
                2px -1px 2px gray;
    }

.footer {
    background-color: #1D293F;
    margin-top: 185px;
}

.footer__copy {
    padding: 25px;
    text-align: center;
    color: #fff;
}

.footer__copyright {
    font-weight: 300px;
}

.footer__icons {
    margin-bottom: 10px;
}

.footer__img {
    width: 30px;
}
</style>
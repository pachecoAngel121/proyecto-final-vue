<template>
<div class="Principal">
<header class="hero">
        <nav class="nav container">          
            <div class="nav__logo">
            </div>
            
        </nav>
        <section class="hero__container container">
            <h1 class="hero__title">Aprende a crear tus horarios.</h1>
            <p class="hero__paragraph">Si deseas mantenerte organizado.</p>
            <router-link to="/verhorarios" class="cta">Diseña tu horario de clases ahora</router-link>
        </section>
    </header>
    <main>
        <section class="container about">
            <h4 class="subtitle">Beneficios de preferirnos</h4>
            <p> Con los HORARIOS FACCI, mantente organizado durante todo el semestre. Nuestras plantillas de horarios de 
                clases te harán olvidar esas típicas tablas aburridas. Hay opciones para cada estilo, así que es muy fácil encontrar justo 
                la plantilla que necesitas.
                A diferencia de otras herramientas, HORARIOS FACCI te ofrece plantillas totalmente personalizables. Eso significa que puedes
                modificar el texto, los colores y las imágenes hasta lograr el diseño que quieres.</p>
            <div class="about__main">
                <article class="about__icons">
                    <img src="../assets/guardar.png" class="about__icon">
                    <h3 class="about__title">Fácil de utilizar</h3>
                    <p class="about__paragrah">Descarga tu horario de clase y guárdalo como PDF, JPG o PNG. 
                        Compártelo en redes sociales o mándalo a imprimir en alta calidad con HORARIOS FACCI.</p>
                </article>

                <article class="about__icons">
                    <img src="../assets/notificacion.png" class="about__icon">
                    <h3 class="about__title">Notificaciones</h3>
                    <p class="about__paragrah">Te notificará las nuevas actualizaciones mediante correo
                        ofreciendo una variedad de plantillas de horarios de clases. </p>
                </article>

                <article class="about__icons">
                    <img src="../assets/calendario.png" class="about__icon">
                    <h3 class="about__title">Mejor planificacion</h3>
                    <p class="about__paragrah">Total flexibilidad para crear un horario de clases completamente
                         personalizado que se ajuste a tus necesidades.</p>
                </article>
                <br>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="contenedor">
            <h2 class="titulo-footer">Contactanos</h2>
            <h3 class="subtitulo-footer">Gracias por preferirnos</h3>
            <div class="footer">
                <form action="">
                    <input type="text" name="" id="" placeholder="Nombre" required>
                    <input type="email" name="" id="" placeholder="Email" required>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Ingrese su mensaje..."></textarea>
                    <input type="submit" value="Enviar">
                </form>
            </div>
        </div>
    </footer>
    <footer class="footer">
        <section class="footer__copy container">
            <div class="footer__social">
                <a href="https://www.facebook.com/Facci.Uleam/">
                <img src="../assets/facebook.svg" class="footer__img">
                </a>
                <a href="https://twitter.com/facciuleam">
                <img src="../assets/twitter.svg" class="footer__img">
                </a>
                <a href="https://www.youtube.com/channel/UCOferC0PjpEUegrVq8Re-TQ">
                <img src="../assets/youtube.svg" class="footer__img">
                </a>
            </div>
            <h3 class="footer__copyright">Derechos reservados 2022 &copy; HorariosFacci</h3>
        </section>
  </footer>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
:root {
    --padding-container: 100px 0;
    --color-title: #000;
}

body {
    background-color: #778899;
    font-family:'Times New Roman', Times, serif;
}


.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: var(--padding-container);
}

.hero {
    width: 100%;
    height: 100vh;
    min-height: 600px;
    max-height: 800px;
    position: relative;
    display: grid;
    grid-template-rows: 100px 1fr;
    color: #fff;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90%;
    background-image: linear-gradient(180deg, #0000008c 0%, #0000008c 100%), url('@/assets/Fondo1.jpg');
    background-size: cover;
    z-index: -1;
}
.hero__container {
    max-width: 800px;
    --padding-container: 0;
    display: grid;
    grid-auto-rows: max-content;
    align-content: center;
    gap: 2em;
    padding-bottom: 50px;
    text-align: center;
}

.hero__title {
    font-size: 3rem;
}

.hero__paragraph {
    margin-bottom: 5px;
    margin-top: 10px;
}

.cta {
    display: inline-block;
    background-color: #778899;
    justify-self: center;
    color: #fff;
    text-decoration: none;
    padding: 13px 30px;
    border-radius: 32px;
}


.about {
    text-align: center;
}

.subtitle {
    color: var(--color-title);
    font-size: 2rem;
    margin-bottom: 25px;
    margin: auto;
}

.about__main {
    padding-top: 80px;
    display: grid;
    width: 90%;
    margin: 0 auto;
    gap: 1em;
    overflow: hidden;
    grid-template-columns: repeat(auto-fit, minmax(260px, auto));
}

.about__icons {
    display: grid;
    gap: 1em;
    justify-items: center;
    width: 260px;
    overflow: hidden;
    margin: 0 auto;
}

.about__icon {
    width: 40px;
}



.footer {
    background-color: #1D293F;
}

.footer__copy {
    --padding-container: 30px 0;
    text-align: center;
    color: #fff;
}

.footer__copyright {
    font-weight: 300;
}

.footer__icons {
    margin-bottom: 10px;
}

.footer__img {
    width: 30px;
}

@media (max-width:800px) {
    .nav__menu {
        display: block;
    }
    .nav__link--menu {
        position: fixed;
        background-color: #000;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        z-index: 100;
        opacity: 0;
        pointer-events: none;
        transition: .7s opacity;
    }
    .nav__link--show {
        --show: block;
        opacity: 1;
        pointer-events: unset;
    }
    .nav__close {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 30px;
        cursor: pointer;
    }
    .contenedor {
        width: 90%;
        max-width: 1000px;
        margin: auto;
        overflow: hidden;
        padding: 52px 0;
    }
    
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
}

header .textos {
    margin-top: 152px;
}

header .titulo {
    font-size: 85px;
    
}

header .boton {
    display: inline-block;
    padding: 6px;
    width: 128px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 19px;
    text-align: center;
    text-decoration: none;
    border-radius: 16px;
}

.contenedor {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
    padding: 52px 0;
}

.acerca-de .boton {
    display: inline-block;
    padding: 6px;
    width: 128px;
    font-weight: 300;
    border: 1px solid rgba(24, 16, 16, .7);
    color: rgb(24, 16, 16);
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    border-radius: 16px;
    margin-top: 24px;
}

footer {
    background: #2c3e50;
    height: auto;
}

.titulo-footer,
.subtitulo-footer {
    color: #fff;
    text-align: center;
    font-weight: 400;
    font-size: 56px;
}

.subtitulo-footer {
    font-size: 16px;
    margin-bottom: 64px;
}

form {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
}

input[type="text"],
input[type="email"] {
    display: inline-block;
    width: 48%;
    padding: 13px;
    border: none;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    background: rgba(37, 37, 33, .7);
    margin-bottom: 16px;
    border-top: 5px solid rgba(37, 37, 33, .7);
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    border-top: 5px solid rgba(255, 255, 255, 0.7);
}

textarea {
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 200px;
    background: rgba(37, 37, 33, .7);
    padding: 13px;
    border: none;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 16px;
}

input[type="submit"] {
    display: inline-block;
    padding: 13px;
    border: none;
    color: #fff;
    background: rgba(37, 37, 33, .7);
    width: 96px;
}
</style>
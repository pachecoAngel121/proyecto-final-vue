<template>
    <main>
        <section class="container about">
            <h2 class="subtitle">Iniciar Sesión</h2>

            <div class="about__main">
                <form action="/about" method="get">
                    <div>
                        <input type="submit" class="boton" value="Sesión Docente">
                    </div>
                    <div>
                        <input type="submit" class="boton" value="Sesión Estudiante">
                    </div>
                </form>
            </div>
        <br><center><img src="http://uleam-portafolioorganizacion.weebly.com/uploads/5/9/1/3/59139831/1507566_orig.png" width="320" height="80" ></center>
        </section>
    </main>
    
    <footer class="footer">
        <section class="footer__copy container">
            <div class="footer__social">
                <a href="https://www.facebook.com/Facci.Uleam/" class="footer__icons"><img src="../assets/facebook.svg" class="footer__img"></a>
                <a href="https://twitter.com/facciuleam" class="footer__icons"><img src="../assets/twitter.svg" class="footer__img"></a>
                <a href="https://www.youtube.com/channel/UCOferC0PjpEUegrVq8Re-TQ" class="footer__icons"><img src="../assets/youtube.svg" class="footer__img"></a>
            </div>
            <h3 class="footer__copyright">Derechos reservados &copy; HorariosFacci</h3>
        </section>
    </footer>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
body {
    font-family: "Times New Roman", Times, serif;
    background-color: rgb(134, 203, 246);
}

.boton:hover {
    background-position: right;
    color: white;
    font-weight: 700;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--padding-container);
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

/* Main */

.about {
    text-align: center;
}

.subtitle {
    text-align: center;
    font-size: 22px;
    margin-bottom: 20px;
    padding: 50px 50px 1px 20px;
    color: aliceblue;
    padding: 0 auto;
    text-align:center;
    font-weight: 700;
    text-shadow: 2px  1px 2px gray,
                1px  1px 1px gray,
                -2px  1px 2px black,
                2px -1px 2px gray;
}

.about__main {
    width: 450px;
    background: #bbc0be85;
    padding: 30px;
    margin: auto;
    margin-top: 50px;
    border-radius: 4px;
    font-family: "Times New Roman", Times, serif;
    color: white;
    overflow: hidden;
}

.boton {
    padding: 15px 25px;
    margin: 20px;
    font-size: 16px;
    border: 2px solid rgb(52, 89, 124);
    color: white;
    cursor: pointer;
    background: linear-gradient(to right, transparent 50%, rgb(52, 89, 124) 50%);
    background-size: 200%;
    background-position: left;
    transition: background-position 0.5s;
    display: inline-block;
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
</style>
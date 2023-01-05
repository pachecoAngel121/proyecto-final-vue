<template>
  <div class="about">
    <form id="caja-login" action='/home' method="get" ref="login">
        <h4>Inicie sesión</h4>
        <input class="controls" type="email" name="correo" id="correo" placeholder="E-mail" required>
        <span id="c-error" aria-live="assertive"></span>

        <input class="controls" type="password" name="contrasena" id="contrasena" placeholder="Contraseña" required>
        <span id="p-error" aria-live="assertive"></span>

        <label> <p> ¿Eres nuevo por aquí? <a href="/registro"><span style="color:black;">Regístrate</span></a> </p></label>
        <input type="submit" class="send-button" value="Iniciar sesión">
    </form>
    
    <br><center><img src="http://uleam-portafolioorganizacion.weebly.com/uploads/5/9/1/3/59139831/1507566_orig.png" width="320" height="80" ></center>
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
  </div>
</template>
<script>
export default {
  data: () => ({
  login:{
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  },
  inputs: document.querySelectorAll('#caja-login'),
  validarFormulario: (e) => {
	switch (e.target.name) {
		case "contrasena":
			if(this.login.password.test(e.target.value)){
                document.getElementById("p-error").innerHTML = "";
            } else{
                document.getElementById("p-error").innerHTML = "Contraseña no valida";
            }
		break;
		case "correo":
			if(this.login.correo.test(e.target.value)){
                document.getElementById("c-error").innerHTML = "";
            } else{
                document.getElementById("c-error").innerHTML = "Correo no válido";
            }
		break;
	}
},
  }),
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
body {
  font-family: "Times New Roman", Times, serif;
  background-image: url('../assets/degradacion1.jpg');
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--padding-container);
}

.hero {
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 100px 1fr;
  color: #fff;
}

.hero::before {
  content: "";
  position: absolute;
  z-index: -1;
}

/* Menu de navegacion */

.nav {
  --padding-container: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav__title {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-align:center;
  font-weight: 700;
  text-shadow: 2px  1px 2px black,
             1px  1px 1px black,
            -2px  1px 2px black,
             2px -1px 2px black;
}

.nav__link {
  margin-left: auto;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 2em;
  font-size: 20px;
}

.nav__items {
  list-style: none;
}

.nav__links {
  color: #fff;
  text-decoration: none;
}

.nav__menu {
  margin-left: auto;
  cursor: pointer;
  display: none;
}

.nav__img {
  display: block;
  width: 30px;
}

.nav__close {
  display: var(--show, none);
}

/* Main */

#caja-login {
  width: 450px;
  background: #bbc0be85;
  padding: 30px;
  margin: auto;
  margin-top: 100px;
  border-radius: 4px;
  font-family: "Times New Roman", Times, serif;
  color: white;
}

#caja-login h4 {
  font-size: 22px;
  margin-bottom: 20px;
  text-align: center;
}

.controls {
  width: 100%;
  background: #ffffffbb;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid #96badd;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  color: rgb(0, 0, 0);
}

#caja-login p {
  height: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
}

#caja-login a {
  color: white;
  text-decoration: none;
}

#caja-login a:hover {
  color: white;
  text-decoration: underline;
}

.send-button {
  padding: 15px 25px;
  margin: 20px;
  font-size: 16px;
  border: 2px solid rgb(52, 89, 124);
  border-radius: 4px;
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

.send-button:hover {
  background-position: right;
  color: white;
  font-weight: 700;
}

/* Footer */

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
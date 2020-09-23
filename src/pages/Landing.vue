<template> 
<div>

<div class="body"></div>
    <div class="grad"></div>
    <div class="header">
      <div>Conatel<span>GSR</span></div>
    </div>
    <br>
    <div class="login">
        <input type="text" placeholder="username" name="user"><br>
        <input type="password" placeholder="password" name="password"><br>
        <input type="button" value="Login" class="success !important">
    </div>


	<!-- <h2 class="text-center p-5">Gerencia de Seguimiento Regulatorio</h2>
	<h3 class="text-center p1"> Aplicación Pasantía</h3>
	<form>
  <div class="form-group">
    <label for="exampleInputPassword1" class="">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">ingresar</label>
  </div>
  <button type="submit" class="btn btn-primary btn-block" @click="submit">Validar</button>
</form> -->

		

</div>
</template>

<script type="text/javascript">
import NotificationTemplate from './Notifications/NotificationTemplate';
import { BaseAlert } from '@/components';
  
  export default {

    components: {
      BaseAlert
    },

     data() {
      return {
        password: "",
         type: ["", "info", "success", "warning", "danger"],
        notifications: {
          topCenter: false
        }
      }
      },

    methods: {

      submit() {
        if (this.password == '' || this.password.length == 0) 
        {
        return this.notifyVue('Error', 'La contraseña esta en blanco')
        }
        else if (this.password === "GSRconatel") 
          { this.redirect() 
            return this.notifyVue('Bienvenido', '(Cargando Aplicacion)',3000)
          }

        else this.notifyVue("Ops...","Contraseña Inválida")
         
      },

      notifyVue(title, message, timeout=5000) {
        const color = Math.floor(Math.random() * 4 + 1);
        this.$notify({
          title: title,
          message: message,
          icon: "tim-icons icon-bell-55",
          horizontalAlign: "center",
          verticalAlign: "top",
          type: this.type[color],
          timeout: timeout
        });
      },

      redirect() {
        this.$router.push({path:'dashboard'})
      }
    }
  }
</script>

<style type="text/css">
  @import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);

body{
  margin: 0;
  padding: 0;
  background: #fff;

  color: #fff;
  font-family: Arial;
  font-size: 12px;
}

.body{
  position: absolute;
  top: -20px;
  left: -20px;
  right: -40px;
  bottom: -40px;
  width: auto;
  height: auto;
  background-image: url("/public/img/ConatelFachada.jpg");
  background-size: cover;
  -webkit-filter: blur(5px);
  z-index: 0;
}

.grad{
  position: absolute;
  top: -20px;
  left: -20px;
  right: -40px;
  bottom: -40px;
  width: auto;
  height: auto;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65))); /* Chrome,Safari4+ */
  z-index: 1;
  opacity: 0.7;
}

.header{
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 255px);
  z-index: 2;
}

.header div{
  float: left;
  color: #fff;
  font-family: 'Exo', sans-serif;
  font-size: 35px;
  font-weight: 200;
}

.header div span{
  color: #5379fa !important;
}

.login{
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 50px);
  height: 150px;
  width: 350px;
  padding: 10px;
  z-index: 2;
}

.login input[type=text]{
  width: 250px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 2px;
  color: #fff;
  font-family: 'Exo', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 4px;
}

.login input[type=password]{
  width: 250px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 2px;
  color: #fff;
  font-family: 'Exo', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 4px;
  margin-top: 10px;
}

.login input[type=button]{
  width: 260px;
  height: 35px;
  background: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  border-radius: 2px;
  color: #a18d6c;
  font-family: 'Exo', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 6px;
  margin-top: 10px;
}

.login input[type=button]:hover{
  opacity: 0.8;
}

.login input[type=button]:active{
  opacity: 0.6;
}

.login input[type=text]:focus{
  outline: none;
  border: 1px solid rgba(255,255,255,0.9);
}

.login input[type=password]:focus{
  outline: none;
  border: 1px solid rgba(255,255,255,0.9);
}

.login input[type=button]:focus{
  outline: none;
}

::-webkit-input-placeholder{
   color: rgba(255,255,255,0.6);
}

::-moz-input-placeholder{
   color: rgba(255,255,255,0.6);
}

</style>
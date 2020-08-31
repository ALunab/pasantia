<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="emisora">
      </edit-profile-form>
    </div>
    <div class="col-md-4">
  
      <user-card :user="user+$route.params.id"></user-card>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './Profile/EditEmisora';
  import UserCard from './Profile/EmisoraCard'
  export default {
    components: {

      EditProfileForm,
      UserCard
    },
    data() {
      return {
        emisora: {},
        user: {},


        model1: {
          company: 'Adulto Joven',
          email: 'emisora@email.com',
          frecD: '88.1',
          frecS:'No tiene',
          firstName: 'nombre',
          lastName: 'apellido',
          address: 'Coche',
          city: 'Caracas',
          country: 'Venezuela',
          about: 'emisora matriz del circuito adulto joven. Somos un circuito radioeléctrico que difundimos  programas recreativos, informativos y de opinión, para lo cual utilizamos tecnología de punta, recursos humanos, procesamos la información más actual para informar, educar y entretener a  un público principalmente comprendido entre los 25 y 45 años.'
        },
        model2: {
          company: 'Segundo registro Joven',
          email: 'notinenebb@email.com',
          frecD: '11.1',
          frecS:'No tiene',
          firstName: 'nombrasdase',
          lastName: 'adsad',
          address: 'Coche',
          city: 'Caracas',
          country: 'Venezuela',
          about: 'emisora matriz del circuito adulto joven. Somos un circuito radioeléctrico que difundimos  programas recreativos, informativos y de opinión, para lo cual utilizamos tecnología de punta, recursos humanos, procesamos la información más actual para informar, educar y entretener a  un público principalmente comprendido entre los 25 y 45 años.'
        },
        model3: {
          company: 'Tercer registro Joven',
          email: 'emisora@email.com',
          frecD: '88.1',
          frecS:'No tiene',
          firstName: 'nombre',
          lastName: 'apellido',
          address: 'Coche',
          city: 'Caracas',
          country: 'Venezuela',
          about: 'emisora matriz del circuito adulto joven. Somos un circuito radioeléctrico que difundimos  programas recreativos, informativos y de opinión, para lo cual utilizamos tecnología de punta, recursos humanos, procesamos la información más actual para informar, educar y entretener a  un público principalmente comprendido entre los 25 y 45 años.'
        },
         model4: {
          company: 'Tercer registro Joven',
          email: 'emisora@email.com',
          frecD: '100.1',
          frecS:'No tiene',
          firstName: 'nombre',
          lastName: 'apellido',
          address: 'Coche',
          city: 'Valencia',
          country: 'Venezuela',
          about: 'emisora matriz del circuito adulto joven. Somos un circuito radioeléctrico que difundimos  programas recreativos, informativos y de opinión, para lo cual utilizamos tecnología de punta, recursos humanos, procesamos la información más actual para informar, educar y entretener a  un público principalmente comprendido entre los 25 y 45 años.'
        },
        user1: {
          fullName: 'Adulto Joven321',
          frecuenciaD: '89.1 FM',
          description: `Emisora matriz del circuito adulto joven`,
        },
        user2: {
          fullName: 'La Romantica',
          frecuenciaD: '90.1 FM',
          description: `Emisora matriz del circuito adulto joven`,
        },
        user3: {
          fullName: 'Exitos',
          frecuenciaD: '09.1 FM',
          description: `Emisora matriz del circuito adulto joven`,
        },
        user4: {
          fullName: 'Lacreo',
          frecuenciaD: '92.1 FM',
          description: `Emisora matriz del circuito adulto joven`,
        },

        // mounted detectar el parametro dela ruta, ese parametro se buca en la base de datos y los datos que retorne seran rederizados dentro de las casillas 
      }
    },
    methods: {
      getEmisora(id) {
        if (id == 1) return this.model1;
        if (id == 2) return this.model2;
        if (id == 3) return  this.model3;
        if (id == 4) return  this.model4;

      },
      getUser(id) {
        if (id == 1) return this.userl;
        if (id == 2) return this.user2;
        if (id == 3) return  this.user3;
        if (id == 4) return  this.user4;

      },
    },
    mounted() {
      this.emisora = this.getEmisora(this.$route.params.id)
      this.user = this.getUser(this.$route.params.id)
    }
  }
</script>
<style>
</style>

<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './Profile/EditEmisora';
  import UserCard from './Profile/EmisoraCard2'
  export default {
    components: {

      EditProfileForm,
      UserCard
    },
    data() {
      return {
        model: {
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
        user: {
          fullName: 'Adulto Joven',
          frecuenciaD: '88.1 FM',
          description: `Emisora matriz del circuito adulto joven`,
        }
      }
    }
  }
</script>
<style>
</style>

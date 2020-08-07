<template>
  <card>
    <h5 slot="header" class="title">Editar Emisora</h5>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <base-input label="Emisora"
                  placeholder="Company"
                  v-model="model.company"
                  disabled>
        </base-input>
      </div>
      <div class="col-md-3 px-md-1">
        <base-input label="Frecuencia FM"
                  placeholder="88.1"
                  v-model="model.frecD">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="Frecuencia de Salto"
                  placeholder="200.1"
                  v-model="model.frecuenciaS">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="Nombre"
                  v-model="model.firstName"
                  placeholder="First Name">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Apellido"
                  v-model="model.lastName"
                  placeholder="Last Name">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Correo Electronico"
                  type="email"
                  placeholder="ejemplo@email.com">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input label="Direccion"
                  v-model="model.address"
                  placeholder="Home Address">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="Ciudad"
                  v-model="model.city"
                  placeholder="City">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="Municipio"
                  v-model="model.country"
                  placeholder="Municipio">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Codigo Postal"
                  placeholder="ZIP Code">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <base-input>
          <label>About Me</label>
          <textarea rows="4" cols="80"
                    class="form-control"
                    placeholder="Descripción de Emisora"
                    v-model="model.about">

              </textarea>
        </base-input>
      </div>
    </div>
    <base-button slot="footer" type="primary" fill>Save</base-button>
  </card>
</template>
<script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  }
</script>
<style>
</style>


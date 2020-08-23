<template>
  <card>
    <h5 slot="header" class="title">Editar Emisora</h5>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <base-input label="Nombre Comercial"
                  placeholder="Company"
                  v-model="model.company"
                  disabled>
        </base-input>
      </div>
      <div class="col-md-3 px-md-1">
        <base-input label="Frecuencia FM (MHz)"
                  placeholder="88.1"
                  v-model="model.frecD">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="Estatus"
                  placeholder="Habilitada/Clandestina"
 
                  v-model="model.frecuenciaS">
        </base-input>
      </div>
    </div>

    <!-- segunda linea -->
    <br>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="Fecha de Inspección"
                  v-model="model.firstName"
                  placeholder="30/11/1991">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Tipo de Medio"
                  v-model="model.lastName"
                  placeholder="Publico/Privada">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Titular de la Habilitacion/Oficio"
                  
                  placeholder="Nombre Legal">
        </base-input>
      </div>
    </div>

    <!-- tercera linea -->

    <br>
    <div class="row">
      <div class="col-md-12">
        <base-input label="Direccion de Estudios"
                  v-model="model.address"
                  placeholder="AV. LA ESTANCIA C.C.C.T. PISO 6, OFC. 626 PRIMERA ETAPA, CARACAS ESTADO MIRANDA
">
        </base-input>
      </div>
    </div>

    <!-- cualta linea -->
    
    <br>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="C.I./RIF Titular de la Habilitacion/oficio"
                  v-model="model.city"
                  placeholder="J-0000000">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="Fecha de Vencimiento habilitacion/Oficio"
                  v-model="model.country"
                  placeholder="30/11/1991">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Persona que Presta el Servicio Natural Jurídico"
                  placeholder="Nombre C.A.">
        </base-input>
      </div>
    </div>
<br>
    <!-- segunda fila -->

    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="Coordenadas de estudio"
                  v-model="model.city"
                  placeholder='LAT. 10° 30´ 57"" N LONG. 66°52´52""W'>
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="Coordenadas Planta Transmisora"
                  v-model="model.country"
                  placeholder='LAT. 10° 29´ 07"" N LONG. 66° 51´ 19'>
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Persona de Contacto"
                  placeholder="Nombre C.A.">
        </base-input>
      </div>
    </div>

<br>

    <div class="row">
      <div class="col-md-8">
        <base-input>
          <label>Observaciones</label>
          <textarea rows="4" cols="80"
                    class="form-control"
                    placeholder="Obervaciones"
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


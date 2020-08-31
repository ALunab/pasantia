<template> 
  <div class="container">

   
    <div class="">
      <div id="prueba" class="p-1">
        
          <h3 class=""> Recopilación de los manuales utilizados en la Gerencia de Seguimiento Regulatorio. </h3>
      </div>
      <div class="text-center mb-3">
        <button class="btn btn-success" style="blackgraund-color:">Agregar Nuevo Manual</button>
      </div>
    </div>



    <div class="row">
      <div class="col-6 p-1">
        <div class="card">
          <div class="card-body">
            <div class="text-center p-3">
              <i class="fas fa-broadcast-tower fa-10x"></i>
            </div>
            <h5 class="card-title">Manual FM original</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-block">Ver Manual PPDF</button>
          </div>
        </div>
      </div>

      <div class="col-6 p-1">
        <div class="card">
          <div class="card-body">
            <div class="text-center p-3 ">
              <i class="fas fa-tv fa-10x"></i>
            </div>
            <h5 class="card-title">Manual Roymon</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
           <button class="btn btn-primary btn-block">Ver Manual PPDF</button>
         </div>
       </div>
     </div> 

   </div>

    <div class="row">
       <div class="col 6 p-1">
        <div class="card">
          <div class="card-body">
            <div class="text-center p-3">
              <i class="fas fa-bolt fa-10x "></i>
            </div>
            <h5 class="card-title"> Manual Carlos </h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
           <button class="btn btn-success btn-block">Ver Manual PPDF</button>
         </div>
       </div>
     </div>

     <div class="col 6 p-1">
      <div class="card">
        <div class="text-center p-3">
          <i class="fas fa-car-side fa-10x"></i>
        </div>
        <div class="card-body">
          <h5 class="card-title">Manual Drive Test</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
         <button class="btn btn-success btn-block">Ver Manual PPDF</button>
       </div>
     </div>
    </div>
  </div>

<template>
Número de páginas: {{ numPages }}
  <pdf
      v-for="i in numPages"
      :key="i"
      :src="src"
      :page="i"></pdf>
</template>
</div>

</template>

<script>

import pdf from 'vue-pdf'
var pdfDocument = pdf.createLoadingTask('/pdf/procedimientoinspeccion.pdf');

  
  export default {
    components: {
        pdf
    },
    data () {
        return {
            src: pdfDocument,
            numPages: 0
        }
    },
    mounted() {
       this.src.promise.then(pdf => {
            this.numPages = pdf.numPages;
        });
    }
  }
  

</script>

<style>
  
  #prueba {
    padding: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    border: 1px solid #373860;
    /*border-left-width: .22rem;*/
    border-radius: .70rem;
   /* border-left-color: #3faf7c;*/
  }

  #prueba h3 {

    margin-bottom: 0px;
    padding: 0.5rem;

  }


</style>
<template> 
  <div class="container">

      
    <div class="">
      <div id="prueba" class="p-1">
        
          <h3 class="text-center"> Recopilación de los manuales utilizados en la Gerencia de Seguimiento Regulatorio. </h3>
      </div>
      <div class="text-center mb-3">
        <button class="btn btn-success" style="blackgraund-color:">Agregar Nuevo Manual</button>
      </div>
    </div>

  
        <!-- prueba <div class="card-footer">
            <button class="btn btn-primary btn-block">Ver Manual PPDF</button>
          </div> <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Button with data-target
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div> -->

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
            <p>
                <button class="btn btn-primary btn-block" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                  Leer Manual 
                </button>
            </p>
              <div class="collapse" id="collapse1">
                  <div class="card card-body">
                      <div class="row">
                      <div class="col-6">
                          <button class="btn btn-info" type="button" data-toggle="modal" data-target=".bd-example-modal-lg"> Visualizar PDF</button>
                          <div class="modal fade bd-example-modal-lg" tabindex="100" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <template>
                                    <div>
                                        Número de páginas: {{ numPages }}
                                          <pdf
                                              v-for="i in numPages"
                                              :key="i"
                                              :src="src"
                                              :page="i"
                                              >
                                             
                                          </pdf>
                                    </div>
                                  </template>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-6">
                         <a href="/pdf/procedimientoinspeccion.pdf" download="Reporte2Mayo2010"> <button class="btn btn-warning">Descargar PDF</button> </a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>

        </div>
      </div>

     <div class="col-6 p-1">
        <div class="card">
          <div class="card-body">
            <div class="text-center p-3">
              <i class="fas fa-tv fa-10x"></i>
            </div>
            <h5 class="card-title">Manual Monrroy</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>

          <div class="card-footer">
            <p>
                <button class="btn btn-primary btn-block" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  Leer Manual 
                </button>
            </p>
              <div class="collapse" id="collapse2">
                  <div class="card card-body">
                      <div class="row">
                      <div class="col-6">
                          <button class="btn btn-info" type="button" data-toggle="modal" data-target=".bd-example-modal-lg"> Visualizar PDF</button>
                          <div class="modal fade bd-example-modal-lg" tabindex="100" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <template>
                                    <div>
                                        Número de páginas: {{ numPages }}
                                          <pdf
                                              v-for="i in numPages"
                                              :key="i"
                                              :src="src"
                                              :page="i"
                                              >
                                             
                                          </pdf>
                                    </div>
                                  </template>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-6">
                         <a href="/pdf/procedimientoinspeccion.pdf" download="Reporte2Mayo2010"> <button class="btn btn-warning">Descargar PDF</button> </a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>

        </div>
      </div>
   </div>



    <div class="row">
       <div class="col 6 p-1">
        <div class="card">
          <div class="card-body">
            <div class="text-center p-3">
              <i class="fas fa-bolt fa-10x"></i>
            </div>
            <h5 class="card-title">Manual Carlos</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>

          <div class="card-footer">
            <p>
                <button class="btn btn-success btn-block" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  Leer Manual 
                </button>
            </p>
              <div class="collapse" id="collapse3">
                  <div class="card card-body">
                      <div class="row">
                      <div class="col-6">
                          <button class="btn btn-info" type="button" data-toggle="modal" data-target=".bd-example-modal-lg"> Visualizar PDF</button>
                          <div class="modal fade bd-example-modal-lg" tabindex="100" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <template>
                                    <div>
                                        Número de páginas: {{ numPages }}
                                          <pdf
                                              v-for="i in numPages"
                                              :key="i"
                                              :src="src"
                                              :page="i"
                                              >
                                             
                                          </pdf>
                                    </div>
                                  </template>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-6">
                         <a href="/pdf/procedimientoinspeccion.pdf" download="Reporte2Mayo2010"> <button class="btn btn-warning">Descargar PDF</button> </a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
     
      

     <div class="col 6 p-1">
      <div class="card">
      <div class="card-body">
            <div class="text-center p-3">
              <i class="fas fa-car-side fa-10x"></i>
            </div>
            <h5 class="card-title">Manual Drive Test</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>

          <div class="card-footer">
            <p>
                <button class="btn btn-success btn-block" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  Leer Manual 
                </button>
            </p>
              <div class="collapse" id="collapse4">
                  <div class="card card-body">
                      <div class="row">
                      <div class="col-6">
                          <button class="btn btn-info" type="button" data-toggle="modal" data-target=".bd-example-modal-lg"> Visualizar PDF</button>
                          <div class="modal fade bd-example-modal-lg" tabindex="100" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                  <template>
                                    <div>
                                        Número de páginas: {{ numPages }}
                                          <pdf
                                              v-for="i in numPages"
                                              :key="i"
                                              :src="src"
                                              :page="i"
                                              >
                                             
                                          </pdf>
                                    </div>
                                  </template>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="col-6">
                         <a href="/pdf/procedimientoinspeccion.pdf" download="Reporte2Mayo2010"> <button class="btn btn-warning">Descargar PDF</button> </a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>

        </div>
     </div>
  </div>
  

</div>
</template>

<script>

import pdf from 'vue-pdf'
var pdfDocument = pdf.createLoadingTask('/pdf/procedimientoinspeccion.pdf');
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
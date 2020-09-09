<template> 
<div>
	
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
                          <button class="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> Ver el PDF aquí</button>
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
</template>

<script>

import pdf from 'vue-pdf'
var pdfDocument = pdf.createLoadingTask('/pdf/procedimientoinspeccion.pdf');
  import NotificationTemplate from '../Notifications/Notification2';
  import { BaseAlert } from '@/components';

  
  export default {
    components: {
        pdf,
        BaseAlert
    },
    data () {
        return {
            src: pdfDocument,
            numPages: 0,
            type: ["", "info", "success", "warning", "danger"],
        notifications: {
          topCenter: false
        }
        };
    },
    mounted() {
       this.src.promise.then(pdf => {
            this.numPages = pdf.numPages;
        });
    },

    methods: {
      notifyVue(verticalAlign, horizontalAlign) {
        const color = Math.floor(Math.random() * 4 + 1);
        this.$notify({
          component: NotificationTemplate,
          icon: "tim-icons icon-bell-55",
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: this.type[color],
          timeout: 0
        });
      }
    }
  }
  

</script>
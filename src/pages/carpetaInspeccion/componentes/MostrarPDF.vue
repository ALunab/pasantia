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



<script>

import pdf from 'vue-pdf'  
export default {
    components: {
        pdf
    },
    props: ['srcPdf'],
    data () {
        return {
            numPages: 0
        }
    },
    computed: {
      src() {
        if (this.srcPdf.length > 0) 
          return pdf.createLoadingTask(this.srcPdf)
      }
    },
    mounted() {
       this.src.promise.then(pdf => {
            this.numPages = pdf.numPages;
        });
    }
}
  


	
// 	import pdf from 'vue-pdf'
// 	// var pdfDocument = pdf.createLoadingTask('/pdf/procedimientoinspeccion.pdf');

// 	export default {

// 			components: {
// 	        pdf
// 	    },
// 	    data () {
// 	        return {
// 	            // src: pdfDocument,
// 	            numPages: 0
// 	        }
// 	    },
// 	    computed: {
//       		src() {
      			 
//         if (this.srcPdf.length > 0) 
//           return pdf.createLoadingTask(this.srcPdf)
//       	}
      		
//     	},
// 	    mounted() {
// 	       this.src.promise.then(pdf => {
// 	            this.numPages = pdf.numPages;
// 	        });
// 	    },

// 		 props: ['srcPdf'],
		 
// 	}

</script>

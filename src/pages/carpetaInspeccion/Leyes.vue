<template>
<div> <!-- hacer que el cuadro sea del tamaño de la pantalla -->

<div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Constitucion 
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <div class="mt-3 mb-4 ml-1"> <!-- hacer un margen -->

		
		<h3 > Constitucion PDF </h3>
	<div  class="mt-3 mb-4 ml-1">

		<card type="tasks" class="table-full-width table-responsive"> 
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
		</card>

	</div>

	</div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
	

	<div class="mt-3 mb-4 ml-1"> <!-- hacer un margen -->

		
		<h3 > Recopilación de las leyes que se necesita entender para dominar el asunto </h3>

		<card type="tasks" class="table-full-width table-responsive"> 
		<h3 >Constitución</h3>
		<pre >
		Asamblea Nacional Constituyente
		PREÁMBULO
		El pueblo de Venezuela, en ejercicio de sus poderes creadores e invocando la protección de Dios, el ejemplo histórico de nuestro Libertador Simón Bolívar y el heroísmo y sacrificio de nuestros antepasados aborígenes y de los precursores y forjadores de una patria libre y	soberana; con el fin supremo de refundar la República para establecer una sociedad democrática, participativa y protagónica, multiétnica y pluricultural en un Estado de justicia, federal y descentralizado, que consolide los valores de la libertad, la independencia, la paz, la solidaridad, el bien común, la integridad territorial, la convivencia y el imperio de la ley
		para esta y las futuras generaciones; asegure el derecho a la vida, al trabajo, a la cultura, a la educación, a la justicia social y a la igualdad sin discriminación ni subordinación alguna;
		promueva la cooperación pacífica entre las naciones e impulse y consolide la integración
		latinoamericana de acuerdo con el principio de no intervención y autodeterminación de los
		pueblos, la garantía universal e indivisible de los derechos humanos, la democratización de la
		sociedad internacional, el desarme nuclear, el equilibrio ecológico y los bienes jurídicos
		ambientales como patrimonio común e irrenunciable de la humanidad; en ejercicio de su poder
		originario representado por la Asamblea Nacional Constituyente mediante el voto libre y en
		referendo democrático,
		decreta la siguiente
		CONSTITUCIÓN
		TÍTULO I
		PRINCIPIOS FUNDAMENTALES
		Artículo 1. La República Bolivariana de Venezuela es irrevocablemente libre e independiente y
		fundamenta su patrimonio moral y sus valores de libertad, igualdad, justicia y paz internacional
		en la doctrina de Simón Bolívar, el Libertador.
		Son derechos irrenunciables de la Nación la independencia, la libertad, la soberanía, la
		inmunidad, la integridad territorial y la autodeterminación nacional.
		Artículo 2. Venezuela se constituye en un Estado democrático y social de Derecho y de
		Justicia, que propugna como valores superiores de su ordenamiento jurídico y de su actuación,
		la vida, la libertad, la justicia, la igualdad, la solidaridad, la democracia, la responsabilidad
		social y en general, la preeminencia de los derechos humanos, la ética y el pluralismo político.
		Artículo 3. El Estado tiene como fines esenciales la defensa y el desarrollo de la persona y el
		respeto a su dignidad, el ejercicio democrático de la voluntad popular, la construcción de una
		sociedad justa y amante de la paz, la promoción de la prosperidad y bienestar del pueblo y la 
		</pre>
		</card>
	</div>

	<br>
<!-- 
			<div class="mt-3 mb-4 ml-1"> 

				
				<h3 > Constitucion PDF </h3>
				<div  class="mt-3 mb-4 ml-1">

					<card type="tasks" class="table-full-width table-responsive"> 
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
					</card>

				</div>

			</div> -->
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
pre {
  text-align: justify !important;
  text-justify: inter-word !important;
  font-family: 'Poppins', sans-serif;
  
}

</style>

<!-- <div id="horita" class="mt-3 mb-4 ml-1">

		<card> 
		<h1>Resorteme</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

		<p class="otra"></p>
		</card>

	</div>

	</div>
</div>
</template>

<script type="text/javascript">


</script>

<style>
pre {
  text-align: justify !important;
  text-justify: inter-word !important;
  
}

#horita p{} 
#horita p.otra{}

</style>

 -->
<template>
    <div class="row">
      <!-- <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        @row-clicked="irDetalle"
                        thead-classes="text-primary(tableData.id)">
                        <template slot="actions" scope="environment">
                        <b-btn size="sm" @click="log(environment.item)">Details</b-btn>
                        </template>
                         
            </base-table>
          </div>
        </card>
      </div> -->
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <table class="table tablesorter" :class="tableClass">
              <thead :class="theadClasses">
              <tr>
                <!--<slot name="columns">
                  <th v-for="column in columns" :key="column">{{column}}</th>
                </slot>-->
                <th>id</th>
                <th>empresa</th>
                <th>ubicacion</th>
                <th>frecuencia</th>
                <th>telefono</th>
                <th>Persona de Contacto</th>
                <th>fecha de inspeccion</th>
                <th>Estatus</th>
                <th>Título de la habilitacion u oficio</th>
                <th>Teléfono Fijo/Persona de Contacto</th>
              </tr>
              </thead>
              <tbody>
                
                <tr v-for="(item, index) in table1.data" :key="index" 
                  @click="irDetalle(item.id)" class="tl-hover">
                  <!-- <slot :row="item" @click="irEmisora" >
                    <td v-for="(column, index) in columns" 
                        :key="index"
                        v-if="hasValue(item, column)">
                      {{itemValue(item, column)}}

                    </td>
                  </slot> -->
                  
                  <td>{{item.id}}</td>
                  <td>{{item.empresa}}</td>
                  <td>{{item.ubicacion}}</td>
                  <td>{{item.frecuencia}}</td>
                  <td>{{item.telefono}}</td>
                  <td style="width:100px;">{{item.contacto}}</td>
                  <td>{{item.fecha}}</td>
                  <td style="width:100px;">{{item.estatus}}</td>
                  <td style="width:100px;">{{item.titulo}}</td>
                  <td style="width:100px;">{{item.telefono}}</td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </card>
      </div>

      

            </base-table>
          </div>
        </card>
      </div>

    </div>
</template>
<script>
import { BaseTable } from "@/components"; // como poner otro nombre en la tabla( frecuencia MGhz FM)
const tableColumns = ["empresa", "ubicacion", "frecuencia", "telefono","contacto","fecha","estatus","titulo","telefono"];
const tableData = [
  {
    id: 1,
    empresa: "Adulto Joven",
    telefono: "0412-xxxxxx",
    ubicacion: "Venezuela",
    frecuencia: "88.1 ",
    contacto: "Johnrique Guevara",
    titulo: "SUCESORES DE CÉSAR MESSORI, C.A.",
    imagenContact: "../",
    icon : "icon-alert-circle-exc",
    estatus : "habilitada HRCF-01058 CRDF-01058",
    telefono : "0212-9590137/959-0733 y 0424-2821792",
    fecha : "17 y 18/09/2019"
  },
  {
    id: 2,
    empresa: "La Romántica",
    telefono: "0212-xxxxxx",
    ubicacion: "Caracas",
    frecuencia: "107.9",
    contacto: "Angel Luna",
    titulo: "SUCESORES DE CÉSAR MESSORI, C.A.",
    estatus : "",
    telefono : "0212-9590137/959-0733 y 0424-2821792",
    fecha : "17 y 18/09/2019"
  },
  {
    id: 3,
    empresa: "Éxitos",
    telefono: "0212-xxxxxx",
    ubicacion: "Caracas",
    frecuencia: "107.9",
    contacto: "Angel Luna",
    titulo: "SUCESORES DE CÉSAR MESSORI, C.A.",
    estatus : "",
    telefono : "0212-9590137/959-0733 y 0424-2821792",
    fecha : "17 y 18/09/2019"
  },
  {
    id: 4,
    empresa: "Radiorama",
    telefono: "0212-xxxxxx",
    ubicacion: "Caracas",
    frecuencia: "107.9",
    contacto: "Angel Luna",
    titulo: "SUCESORES DE CÉSAR MESSORI, C.A.",
    estatus : "",
    telefono : "0212-9590137/959-0733 y 0424-2821792",
    fecha : "17 y 18/09/2019"
  },
  {
    id: 5,
    empresa: "Difusión Latina",
    telefono: "0212-xxxxxx",
    ubicacion: "Caracas",
    frecuencia: "107.9",
    contacto: "Angel Luna",
    titulo: "SUCESORES DE CÉSAR MESSORI, C.A.",
    estatus : "",
    telefono : "0212-9590137/959-0733 y 0424-2821792",
    fecha : "17 y 18/09/2019"
  },
  {
    id: 6,
    empresa: 'YVKE',
    telefono: '0212-xxxxxx',
    ubicacion: 'Caracas',
    frecuencia: '107.9',
    contacto: "Angel Luna",
    titulo: "SUCESORES DE CÉSAR MESSORI, C.A.",
    estatus : "",
    telefono : "0212-9590137/959-0733 y 0424-2821792",
    fecha : "17 y 18/09/2019"
  },
  {
    id: 7,
    empresa: 'Otra',
    telefono: '0212-xxxxxx',
    ubicacion: 'Caracas',
    frecuencia: '107.9',
    contacto: "Angel Luna",
    titulo: "SUCESORES DE CÉSAR MESSORI, C.A.",
    estatus : "",
    telefono : "0212-9590137/959-0733 y 0424-2821792",
    fecha : "17 y 18/09/2019"
  }
];

export default {
  components: {
    BaseTable
  },
  methods: {
        irDetalle(id) {
            this.$router.push({ name: 'DetalleEmisora', params: { id: id } }),
            console.log('clickentabla0',  id)
        }
  },
  data() {
    return {
      table1: {
        title: "Datos de los Prestadores de Servicio:",
        columns: [...tableColumns],
        data: [...tableData]
      },
    };
  }
};


</script>
<style>
.tl-hover:hover {
  cursor: pointer !important;
  background: red;
}
</style>

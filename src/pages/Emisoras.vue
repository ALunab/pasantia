<template>
    <div class="row">
      <div class="col-12">
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
      </div>

      

            </base-table>
          </div>
        </card>
      </div>

    </div>
</template>
<script>
import { BaseTable } from "@/components"; // como poner otro nombre en la tabla( frecuencia MGhz FM)
const tableColumns = ["empresa", "ubicacion", "frecuencia", "telefono","contacto"];
const tableData = [
  {
    id: 1,
    empresa: "Adulto Joven",
    telefono: "0412-xxxxxx",
    ubicacion: "Venezuela",
    frecuencia: "88.1 ",
    contacto: "Johnrique Guevara"
  },
  {
    id: 2,
    empresa: "La Romántica",
    telefono: "0212-xxxxxx",
    ubicacion: "Caracas",
    frecuencia: "107.9",
    contacto: "Angel Luna"
  },
  {
    id: 3,
    empresa: "Éxitos",
    telefono: "0212-xxxxxx",
    ubicacion: "Caracas",
    frecuencia: "107.9",
    contacto: "Angel Luna"
  },
  {
    id: 4,
    empresa: "Radiorama",
    telefono: "0212-xxxxxx",
    ubicacion: "Caracas",
    frecuencia: "107.9",
    contacto: "Angel Luna"
  },
  {
    id: 5,
    empresa: "Difusión Latina",
    telefono: "0212-xxxxxx",
    ubicacion: "Caracas",
    frecuencia: "107.9",
    contacto: "Angel Luna"
  },
  {
    id: 6,
    empresa: 'YVKE',
    telefono: '0212-xxxxxx',
    ubicacion: 'Caracas',
    frecuencia: '107.9',
    contacto: "Angel Luna"
  },
  {
    id: 7,
    empresa: 'Otra',
    telefono: '0212-xxxxxx',
    ubicacion: 'Caracas',
    frecuencia: '107.9',
    contacto: "Angel Luna"
  }
];

export default {
  components: {
    BaseTable
  },
  methods: {
        irDetalle() {
            this.$router.push({ path: '/DetalleEmisora'}),
            console.log('clickentabla')
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
</style>

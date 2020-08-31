<template>
  <div>

    <!-- Inspecciones por hacer -->
    <div class="row">

      <div class="col-lg-6 col-md-12">
        <card type="tasks" :header-classes="{'text-right': isRTL}">
          <template slot="header">
            <h6 class="title d-inline">{{$t('dashboard.tasks', {count: 5})}}</h6>
            <p class="card-category d-inline">{{$t('dashboard.today')}}</p>
            <base-dropdown menu-on-right=""
                           tag="div"
                           title-classes="btn btn-link btn-icon"
                           aria-label="Settings menu"
                           :class="{'float-left': isRTL}">
              <i slot="title" class="tim-icons icon-settings-gear-63"></i>
              <a class="dropdown-item" @click='consola' href="#pablo">{{$t('dashboard.dropdown.action')}}</a>
              <a class="dropdown-item" href="#pablo">{{$t('dashboard.dropdown.anotherAction')}}</a>
              <a class="dropdown-item" href="#pablo">{{$t('dashboard.dropdown.somethingElse')}}</a>
            </base-dropdown>
          </template>
          <div class="table-full-width table-responsive">
            <task-list></task-list>
          </div>
        </card>
      </div>

        <!-- nspecciones realizadas -->
        
      <div class="col-lg-6 col-md-12">
        <card type="tasks" :header-classes="{'text-right': isRTL}">
          <template slot="header">
            <h6 class="title d-inline">{{$t('dashboard.tasks', {count: 5})}}</h6>
            <p class="card-category d-inline">{{$t('dashboard.today')}}</p>
            <base-dropdown menu-on-right=""
                           tag="div"
                           title-classes="btn btn-link btn-icon"
                           aria-label="Settings menu"
                           :class="{'float-left': isRTL}">
              <i slot="title" class="tim-icons icon-settings-gear-63"></i>
              <a class="dropdown-item" @click='consola' href="#pablo">{{$t('dashboard.dropdown.action')}}</a>
              <a class="dropdown-item" href="#pablo">{{$t('dashboard.dropdown.anotherAction')}}</a>
              <a class="dropdown-item" href="#pablo">{{$t('dashboard.dropdown.somethingElse')}}</a>
            </base-dropdown>
          </template>
          <div class="table-full-width table-responsive">
            <task-list></task-list>
          </div>
        </card>
      </div>

    </div>




      <!-- spam azul -->
    
    
    <div class="row">
    <div class="col-md-12">
    
      <card>
        <h4 slot="header" class="text-center">Aprende a Hacer Inspeciones</h4>
       <!--  Nota de Leyes -->
        <router-link to="leyes" @click="consola">
          <base-alert type="info" with-icon>
            <span data-notify="icon" class="tim-icons icon-paper"></span>
            <span data-notify="message">Aprende sobre las leyes</span>
          </base-alert>
        </router-link>
        <!--  Nota de Inspeccion -->
        <router-link to="PasosInspeccion" @click="consola">
          <base-alert type="info" with-icon>
            <span data-notify="icon" class="tim-icons icon-bullet-list-67"></span>
            <span data-notify="message">Pasos para una buena inspeccion</span>
          </base-alert>
        </router-link>
        <!--  Manuales -->
        <router-link to="Manuales" @click="consola">
          <base-alert type="info" with-icon>
            <span data-notify="icon" class="tim-icons icon-book-bookmark"></span>
            <span data-notify="message"> Manuales de la Gerencia </span>
          </base-alert>
        </router-link>
        <!--  Nota de equipos -->
        <router-link to="Equipos" @click="consola">
          <base-alert type="info" with-icon>
            <span data-notify="icon" class="tim-icons icon-controller"></span>
            <span data-notify="message"> Equipos </span>
          </base-alert>
        </router-link>
      </card>
    
    </div>
    </div>

    <card> <!-- hacer un dropdown tipo carta -->

      <h3> La ley </h3>

      <p>
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

    </card>
  </div>

  

</template>
<script>


  import TaskList from './Dashboard/TaskList';
  import NotificationTemplate from './Notifications/NotificationTemplate';
  import { BaseAlert } from '@/components';
  
  

  export default {
    components: {
      TaskList,
      BaseAlert
      
    },

    data() {
      return {
        type: ["", "info", "success", "warning", "danger"],
        notifications: {
          topCenter: false
        }
      };
    },

    computed: {
    isRTL() {
      return this.$rtl.isRTL;
    }
    
  },

  methods: {
      consola() {
        console.log('clikeo')
      },

      irLeyes(){
        this.$router.push('/Leyes/')
      },

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
    },

    beforeDestroy() {
      if (this.$rtl.isRTL) {
        this.i18n.locale = 'en';
        this.$rtl.disableRTL();
      }
    }
  };
</script>
<style>
</style>

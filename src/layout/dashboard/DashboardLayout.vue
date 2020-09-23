<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" :name="$t('Inicio')" icon="tim-icons icon-atom"/>
        <sidebar-link to="/Emisoras" :name="$t('Emisoras')" icon="tim-icons icon-compass-05"/>
        <sidebar-link to="/Inspeccion" :name="$t('Inspección')" icon="tim-icons icon-badge"/>
       
        <sidebar-link to="/maps" :name="$t('Mapa')" icon="tim-icons icon-pin"/>
        
            
        
        <!-- <sidebar-link to="/dashboard?enableRTL=true" :name="$t('sidebar.rtlSupport')" icon="tim-icons icon-world"/> -->
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>

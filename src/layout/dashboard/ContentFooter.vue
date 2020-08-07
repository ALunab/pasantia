<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="http://www.creative-tim.com">
            Conatel
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://blog.creative-tim.com">
            Gerencia de Seguimiento Regulatorio
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://www.creative-tim.com/license">
            {{year}}
          </a>
        </li>
      </ul>
      <div class="copyright">
        hecho con <i class="tim-icons icon-heart-2"></i> por la
        <a href="https://#" target="_blank" rel="noopener">Gerencia de Seguimiento Regulatio</a>&nbsp;&
        <a href="https://#" target="_blank" rel="noopener">Angel Luna</a> para CONATEL y la UNEFA.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
</style>

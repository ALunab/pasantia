<template>
  <div class="sidebar"
       :data="backgroundColor">
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <a href="http://www.creative-tim.com"
           aria-label="sidebar mini logo"
           class="simple-text logo-mini">
          <div class="logo-img"
               :class="{'logo-img-rtl': $rtl.isRTL}">
            <img
              src="data:image/png;base64,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"
              alt="">
          </div>
        </a>
        <a href="#" class="simple-text logo-normal font-weight-bold text-dark">
          {{title}}
        </a>
      </div>
      <slot>

      </slot>
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot name="links">
          <sidebar-link v-for="(link,index) in sidebarLinks"
                        :key="index"
                        :to="link.path"
                        :name="link.name"
                        :icon="link.icon">
          </sidebar-link>
        </slot>
      </ul>
    </div>
  </div>
</template>
<script>
  import SidebarLink from "./SidebarLink";

  export default {
    props: {
      title: {
        type: String,
        default: "|Name Aplicación|"
      },
      backgroundColor: {
        type: String,
        default: "vue"
      },
      activeColor: {
        type: String,
        default: "success",
        validator: value => {
          let acceptedValues = [
            "primary",
            "info",
            "success",
            "warning",
            "danger"
          ];
          return acceptedValues.indexOf(value) !== -1;
        }
      },
      sidebarLinks: {
        type: Array,
        default: () => []
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        autoClose: this.autoClose,
        addLink: this.addLink,
        removeLink: this.removeLink
      };
    },
    components: {
      SidebarLink
    },
    computed: {
      /**
       * Styles to animate the arrow near the current active sidebar link
       * @returns {{transform: string}}
       */
      arrowMovePx() {
        return this.linkHeight * this.activeLinkIndex;
      },
      shortTitle() {
        return this.title.split(' ')
          .map(word => word.charAt(0))
          .join('').toUpperCase();
      }
    },
    data() {
      return {
        linkHeight: 65,
        activeLinkIndex: 0,
        windowWidth: 0,
        isWindows: false,
        hasAutoHeight: false,
        links: []
      };
    },
    methods: {
      findActiveLink() {
        this.links.forEach((link, index) => {
          if (link.isActive()) {
            this.activeLinkIndex = index;
          }
        });
      },
      addLink(link) {
        const index = this.$slots.links.indexOf(link.$vnode);
        this.links.splice(index, 0, link);
      },
      removeLink(link) {
        const index = this.links.indexOf(link);
        if (index > -1) {
          this.links.splice(index, 1);
        }
      }
    },
    mounted() {
      this.$watch("$route", this.findActiveLink, {
        immediate: true
      });
    }
  };
</script>

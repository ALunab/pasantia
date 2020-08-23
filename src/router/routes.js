import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const Emisoras = () => import(/* webpackChunkName: "common" */ "@/pages/Emisoras.vue");
const DetalleEmisora = () => import(/* webpackChunkName: "DetalleEmisora" */ "@/pages/DetalleEmisora.vue");
const DetalleEmisora2 = () => import(/* webpackChunkName: "DetalleEmisora2" */ "@/pages/DetalleEmisora2.vue");
const Inspeccion = () => import(/* webpackChunkName: "Inspeccion" */ "@/pages/Inspeccion.vue");
const Testdash = () => import(/* webpackChunkName: "Testdash" */ "@/pages/Testdash.vue");
const Leyes = () => import(/* webpackChunkName: "Leyes" */ "@/pages/Leyes.vue");


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "Leyes",
        name: "Leyes",
        component: Leyes
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "DetalleEmisora/:id",
        name: "DetalleEmisora",
        component: DetalleEmisora
      },
      {
        path: "DetalleEmisora2",
        name: "DetalleEmisora2",
        component: DetalleEmisora2
      },
      {
        path: "Inspeccion",
        name: "Inspeccion",
        component: Inspeccion
      },
      {
        path: "Emisoras",
        name: "Emisoras",
        component: Emisoras
      },
      {
        path: "Testdash",
        name: "Testdash",
        component: Testdash
      },


      
      
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;

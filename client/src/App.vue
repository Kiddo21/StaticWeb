<template>
  <v-app class="grey lighten-2">
    <navbar/>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
    }
  }
}
</script>

<style>
@import 'vuetify/dist/vuetify.min.css';
@import '@fortawesome/fontawesome-free/css/all.css';
@import 'material-design-icons-iconfont/dist/material-design-icons.css';
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

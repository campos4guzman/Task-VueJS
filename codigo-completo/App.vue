<template>
  <div id="app">
    <navegador></navegador>
    <router-view></router-view>
    <foter></foter>
  </div>
</template>

<script>
import Navegador from './components/navegador.vue'
import Foter from './components/footer.vue'

export default {
  name: 'app',
  components: {
    Navegador,
    Foter
  },
  data () {
      return{}
    },
    methods: {
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{

		background: #222222 !important;
	}

</style>

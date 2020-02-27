<template lang="html">

  <div class="noticias">
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <input type="text" placeholder='Buscar noticia por palabra clave' v-model='bus' @keyup.enter='buscar' class="form-control">
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="result in results" v-bind:key="result" class="card col-md-3 m-2">
          <div class="row text-center">
            <div class="col-12">
              <img v-bind:src="result.urlToImage" id="fnoticia">
            </div>
          </div>
          <div class="row">
            <div class="col-12  text-center">
              <strong>{{result.title}}</strong>
            </div>
          </div>
          <div class="row">
            <div class="col-12  text-center">
              {{result.content}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script lang="js">
import axios from 'axios';
  export default  {
    name: 'noticias',
    props: [],
    data () {
      return {
        bus:'',
        results: []
      }
    },
    mounted () {
      
    },
    computed: {
    },
    methods:{
      buscar:function(){
      axios.get("https://newsapi.org/v2/everything?q="+this.bus+"&language=es&sortBy=popularity&apiKey=2b06a2f181aa4bddb9b8e704a08673be")
      .then(response => {this.results = response.data.articles})
      }
    }
}


</script>

<style scoped>

  #fnoticia{
    object-fit: cover;
    width: 80%;
  }
</style>

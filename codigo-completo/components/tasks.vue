<template lang="html">

  <div class="tasks">

    <div class="container-fluid">

      <div class="row justify-content-center mt-3">
        <div class="col-md-9">
          <h2>Proyecto Vue.js - Francisco Campos Guzmán</h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-9">
          <input type="text" placeholder='Nueva tarea' v-model='tarea' @keyup.enter='add' class="form-control">
        </div>
      </div>

      <div class="dropdown-divider"></div>	

      <div class="row justify-content-center mt-3">
        <div class="col-md-9">
          <small> {{ tareas.length-comp() }} pending tasks of a total {{tareas.length}} | <b v-on:click="borrarTot" id="borrartot"> X Borrar todas completadas</b></small>
        </div>
      </div>

      <div class="dropdown-divider"></div>	
      
      <div class="row justify-content-center">
        <div class="col-md-9 pt-5 pr-5" id="contTar">
          <ul id="lista-tareas">
            <transition-group name="list">
            <li v-for="tarea in sortedJson" v-bind:key="tarea" class="mb-5 tar">
              <div class="row">
                <div class="col-sm-2">
                  <img class="completo" v-if="tarea.done == true" src="../assets/check2.png" v-on:click="cambiar(tarea)">
                  <img class="incomp" v-else src="../assets/check1.png" v-on:click="cambiar(tarea)">
                </div>
                <div class="col-sm-8">
                  <h4 v-bind:class="{'tachar':tarea.done}">{{tarea.titulo}}</h4>
                </div>
                <div class="col-sm-2">
                  <img class="borrar" src="../assets/borrar.png" v-on:click="borrar(tarea)">
                </div>
              </div>
              <div class="row mt-3">
								<div class="col-9">
									Prioridad:
									<button v-if="tarea.prioridad=='1'" v-on:click="prioridadLow(tarea)" class="pr low col-xs-12">Low</button>
                  <button v-else v-on:click="prioridadLow(tarea)" class="pr disable col-xs-12">Low</button>
                  <button v-if="tarea.prioridad == '2'" v-on:click="prioridadNormal(tarea)" class="pr normal col-xs-12">Normal</button>
                  <button v-else v-on:click="prioridadNormal(tarea)" class="pr disable col-xs-12">Normal</button>
                  <button v-if="tarea.prioridad == '3'" v-on:click="prioridadHigh(tarea)" class="pr high col-xs-12">High</button>
                  <button v-else v-on:click="prioridadHigh(tarea)" class="pr disable col-xs-12">High</button>
								</div>
                <div class="col-3">
                  Añadido: {{ tarea.creado }}
                </div>
              </div>	
            </li>
            </transition-group>
          </ul>
        </div>    
      </div>

	<br><br>

      <div class="row justify-content-center">
        <div class="col-md-9">
          <h2>Buscar</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-9">
          <input type="text" class="form-control" placeholder="Buscar Nota" v-model="busqueda">
        </div>
      </div>
    
    
		<div class="dropdown-divider"></div>
		

      <div class="row justify-content-center">
        <div class="col-md-9 pt-5 pr-5" id="contTar">
          <ul id="lista-tareas">
            <transition-group name="list">
            <li v-for="busco in buscar" v-bind:key="busco" class="mb-5 tar">
              <div class="row">
                <div class="col-sm-2">
                  <img class="completo" v-if="busco.done == true" src="../assets/check2.png" v-on:click="cambiar(busco)">
                  <img class="incomp" v-else src="../assets/check1.png" v-on:click="cambiar(busco)">
                </div>
                <div class="col-sm-8">
                  <h4 v-bind:class="{'tachar':busco.done}">{{busco.titulo}}</h4>
                </div>
                <div class="col-sm-2">
                  <img class="borrar" src="../assets/borrar.png" v-on:click="borrar(busco)">
                </div>
              </div>
              <div class="row mt-3">
								<div class="col-9">
									Prioridad:
									<button v-if="tarea.prioridad=='1'" v-on:click="prioridadLow(busco)" class="pr low col-xs-12">Low</button>
                  <button v-else v-on:click="prioridadLow(busco)" class="pr disable col-xs-12">Low</button>
                  <button v-if="tarea.prioridad == '2'" v-on:click="prioridadNormal(busco)" class="pr normal col-xs-12">Normal</button>
                  <button v-else v-on:click="prioridadNormal(busco)" class="pr disable col-xs-12">Normal</button>
                  <button v-if="tarea.prioridad == '3'" v-on:click="prioridadHigh(busco)" class="pr high col-xs-12">High</button>
                  <button v-else v-on:click="prioridadHigh(busco)" class="pr disable col-xs-12">High</button>
								</div>
                <div class="col-3">
                  Añadido: {{ busco.creado }}
                </div>
              </div>	
            </li>
            </transition-group>
          </ul>
        </div>    
      </div>

    </div>
  </div>

</template>

<script>
  export default  {
    name: 'tasks',
    props: [],
    data:function(){
      return{
      tarea: '',
      tareas:[
        {titulo: 'Tarea 1', done: false, prioridad:"1",creado:0},
      ],
      busqueda: ""
      }
    },
    mounted() {
      if (localStorage.getItem('tareas')) {
        try {
          this.tareas=JSON.parse(localStorage.getItem('tareas'));
        }catch(e){
          localStorage.removeItem('tareas');
        }
      }
    },
    updated:function () {
      this.guardar();
    },
    methods:{
      add: function() {
        var tareaObj = {
          titulo: this.tarea,
          done: false,
          prioridad:"1",
          creado:new Date().toLocaleString(),
          interval:null
        };
        this.tareas.push(tareaObj);
        this.tarea = '';
        this.guardar();
      },
      comp: function(){
        var result=0;
        for(let i=0;i<this.tareas.length;i++){
          if(this.tareas[i].done == true){
            result++;
          }
        }
        return result;
      },
      borrarTot: function(){
        for(let y=0;y<this.tareas.length;y++){
          if(this.tareas[y].done==true){
            this.tareas.splice(y,1);
            y--;
          }
        }
        this.guardar();
      },
      guardar:function() {
        const parsed=JSON.stringify(this.tareas);
        localStorage.setItem('tareas', parsed);
      },
      borrar: function(tarea){
        for(let j = 0; j < this.tareas.length; j++){
				if(this.tareas[j] == tarea){
					this.tareas.splice(j,1);
        }
        }
      },
      prioridadLow: function(tarea){
        tarea.prioridad="1";
      },
      prioridadNormal: function(tarea){
        tarea.prioridad="2";
      },
      prioridadHigh: function(tarea){
        tarea.prioridad="3";
      },
      cambiar:function(tarea){
        tarea.done=!tarea.done;
      }
    },
    computed:{
      sortedJson: function() {
        return this.tareas.slice().sort((t1,t2) => t1.prioridad < t2.prioridad ? 1 : -1);
      },
      buscar: function() {
        if(this.busqueda=="" || this.busqueda==" "){
          return null;
        }
        else{
          return this.tareas.filter(tarea => {return tarea.titulo.match(this.busqueda);})
        }		
      }
    }
    
}


</script>

<style scoped>
h2{
  color:white;
}
small{
  color:white;
}
  .tachar {
    text-decoration:line-through;
    color: #00bb8b;
  }
  button{
		margin: 0px 15px 0px 15px;
	}
	.pr.low,.pr.normal,.pr.high{
		-moz-border-radius:6px;
		-webkit-border-radius:6px;
		border-radius:6px;
		display:inline-block;
		cursor:pointer;
		color:black;
		font-size:10px;
		font-weight:bold;
		padding:6px 15px;
		text-decoration:none;
	}
	.disable{
		background-color:#dadada;
		-moz-border-radius:6px;
		-webkit-border-radius:6px;
		border-radius:6px;
		border:1px solid #464545;
		display:inline-block;
		cursor:pointer;
		color:white;
		font-family:Arial;
		font-size:10px;
		font-weight:bold;
		padding:6px 15px;
		text-decoration:none;
	}
	.pr.low{
		background-color:#17a2b8;
		border:1px solid #17a2b8;
	}
	.pr.normal{
		background-color:#375a7f;
		border:1px solid #375a7f;
	}
	.pr.high{
		background-color:#e74d3d;
		border:1px solid #e74d3d;
  }
  #contTar{
    background-color: #303030;
    border-radius: 20px;
  }
  .tar{
    list-style: none;
    padding: 3%;
    background-color: #303030 ;
    color:white;
    border-radius: 20px;
  }
  .completo,.incomp{
		width: 40px;
	}
  h4{
    color:white;
  }
  .borrar{
    width: 4vw;
  }
  #borrartot{
    color:orangered;
  }


  .list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>

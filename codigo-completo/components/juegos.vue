<template lang="html">

  <div class="juegos">
    <div class="row">
        <div class="col-md-12 hero-c">
          
          <div class="hero-i">
            <img class="img-fluid" src="../assets/hero.jpg" style="height: 100%; width: 100%; opacity: 0.7;">
          </div>
          <div class="hero-t text-center">
            <h2>发现明天</h2>
            <h2>Descubre el mañana</h2>
          </div>
          
        </div>
      </div>
      <div class="row justify-content-center mt-4" id="contenidotot">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-7">
              <h3>Atenas 1896</h3>
              <p>
                Durante el siglo XVIII, varios festivales deportivos a pequeña escala a lo largo de Europa se denominaron Juegos Olímpicos Antiguos. 
                El barón Pierre de Coubertin tuvo la idea de revivir los antiguos Juegos Olímpicos, pero en forma de un evento multideportivo 
                e internacional —los antiguos Juegos fueron en cierto modo internacionales, pues varias polis y colonias griegas tuvieron 
                representación, pero solo se les permitió participar a los hombres libres de origen griego—,inspirandose en los juegos 
                organizados por el hombre de negocios Evangelos Zappas en Grecia.El 18 de junio de 1894, Coubertin organizó un 
                congreso en la Universidad de la Sorbona, en París, para presentar sus planes a los representantes de sociedades 
                deportivas de once países. Después de la aprobación de la idea por parte del congreso, comenzó la elección de una 
                fecha y un lugar. Coubertin sugirió que los Juegos se desarrollasen en 1900, coincidiendo con la Exposición Universal 
                de París, pero como una espera de seis años podía hacer disminuir el interés del público, los miembros del congreso optaron 
                por llevar a cabo los Juegos inaugurales en 1896. El proceso de elección de la sede es todavía un misterio debido a las versiones 
                contradictorias que existen. El 23 de junio de 1894 Demetrius Vikelas propuso oficialmente Atenas y como Grecia fue el lugar donde 
                nacieron los Juegos Olímpicos, la propuesta fue aprobada unánimemente. Vikelas además fue elegido presidente del recién creado Comité 
                Olímpico Internacional.
              </p>
            </div>
            <div class="col-md-5">
              <img class="img-fluid" src="../assets/atenas1896.jpeg">
            </div>
            <div class="col-md-5 mt-3">
              <img class="img-fluid" src="../assets/paris1900.jpeg">
            </div>
            <div class="col-md-7 mt-3">
              <h3>París 1900</h3>
              <p>
                Los Juegos Olímpicos de París 1900, oficialmente Juegos de la II Olimpiada, son la segunda edición de las 
                olimpiadas modernas. Tuvieron lugar en París, Francia, del 14 de mayo al 28 de octubre de 1900, en el marco 
                de la Exposición Universal. La decisión de celebrar los Juegos de 1900 en París se tomó en la reunión del I 
                Congreso Olímpico celebrado en 1894.Tras los Juegos de 1896 Pierre de Coubertin, presidente del Comité Olímpico 
                Internacional (COI), quería organizar los Juegos de la II Olimpiada, pero Alfred Picard, comisario general de la 
                Exposición Universal quería organizar «competiciones internacionales de ejercicio físico y deportes» durante el 
                evento. El por entonces órgano rector del deporte en Francia, la Union des sociétés françaises de sports athlétiques 
                (USFSA), en noviembre de 1898 decidió finalmente celebrar las competiciones de la Exposición en lugar de los Juegos 
                de Coubertin que, en la primavera de 1899 se vio obligado a aceptar la propuesta de la USFSA: «Las competiciones de 
                la Exposición se celebran en lugar de los Juegos Olímpicos de 1900 y cuentan como equivalentes a la II Olimpiada.» 
                No hubo ceremonia de apertura ni de clausura, las pruebas se desarrollaron a lo largo de cinco meses y estos eventos 
                no se denominan «Juegos Olímpicos» en los documentos oficiales ni en los carteles promocionales, por lo que muchos 
                atletas ignorarían, algunos hasta su muerte, que habían competido en los Juegos Olímpicos.Las pruebas deportivas 
                atrajeron a 58 731 participantes, pero según el COI, solo 997 atletas de 24 países, entre ellos 22 mujeres, 
                compitieron en disciplinas que considera olímpicas. 
              </p>
            </div>
          </div>
        </div>
        
        <div class="col-md-2">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Grandes atletas de la historia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><a href="">Johnny Weissmuller</a></th>
              </tr>
              <tr>
                <th scope="row"><a href="">Emil Zatopek</a></th>
              </tr>
              <tr>
                <th scope="row"><a href="">Abebe Bikila</a></th>
              </tr>
              <tr>
                <th scope="row"><a href="">Bob Beamon</a></th>
              </tr>
              <tr>
                <th scope="row"><a href="">Carl Lewis</a></th>
              </tr>
              <tr>
                <th scope="row"><a href="">Jesse Owens</a></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <b-carousel
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#222222"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/07/18/15319351861907.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="https://okdiario.com/img/2016/12/21/datos-que-tienes-que-conocer-sobre-los-juegos-olimpicos-de-rio-de-janeiro-2016-655x368.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="https://lh4.googleusercontent.com/proxy/LjsWSHSRUuoVLo6l0_vnOBme7Dx4lJcITvODU06FAnszW-ECK0Rtsi1MScpYC6FcSb4nY9_3HPUkQf12QHoMAU_5vwDq_KzlzqislEbqAJrv_Ipr48Y4albf2fCn3BU5GfHUlBE"></b-carousel-slide>
    </b-carousel>

      
  </div>

</template>

<script lang="js">

  export default  {
    name: 'juegos',
    props: [],
    mounted () {

    },
    data () {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    },
    computed: {

    }
}


</script>

<style scoped>
.hero-c{
    position: relative;
    text-align: center;
    color: black;
}
.hero-t{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
h2{
    font-size: 5vw;
}
.juegos{
  background-color: white;
}

.img-fluid{
    object-fit: cover;
    width: 80%;
}

.fotoscar{
    width: 300px;
}
.container-fluid{
    padding:0;
    margin:0;
}
.row{
    padding:0;
    margin:0;
}
.col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, 
.col-md-7, .col-md-8, .col-md-9{
    padding:0;
    margin:0;
}
</style>

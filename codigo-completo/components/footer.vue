<template lang="html">

  <div class="foter">
    <div class="row mt-4">
        <footer class="site-footer footer-expand">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p class="copyright-text">&copy; 2020 Copyright <a href="#">Francisco Campos Guzman</a></p>
              </div>
              <div class="col-md-6">
                <ul class="social-icons">
                  <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a class="dribbble" href="#"><i class="fa fa-github"></i></a></li>
                  <li><a class="linkedin" href="#"><i class="fa fa-youtube"></i></a></li>   
                  <li><a class="linkedin" href="#"><i class="fa fa-instagram"></i></a></li>  
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'footer',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  .site-footer{
  background-color:#cfcfcf;
  padding:45px;
  width: 100%;
  text-align: center;
}
.social-icons {
    list-style: none;
}
.social-icons li {
    display: inline-block;
    width: 10vh;
    margin-left: -20px;
}
.social-icons a {
    font-size:4vh;
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

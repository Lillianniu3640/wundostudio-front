<template>
  <div id="services">
    <section id="title" class="title">
      <h1 class="text-center">Create something</h1>
      <h5 class="text-center title_style">Develop your passion project with eye catching branding,<br>web design & illustrations.</h5>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 d-flex flex-column text-center">
          <img src="../assets/images/tbg.png" class="icon_style icon01">
          <h4 style="color: #D8B281;">Branding & Illustrations</h4>
          <p class="text-left" style="color: #555760;">I can provide services from logo design, to a full identity system, which entails typography styles, colour palettes, brand elements, photography, etc. And have the skills to produce a series of illustrations that have a very stand out and permanent use.</p>
        </div>
        <div class="col-12 col-md-4 d-flex flex-column text-center">
          <img src="../assets/images/tbg.png" class="icon_style icon02">
          <h4 style="color: #D8B281;">Website Design</h4>
          <p class="text-left" style="color: #555760;">If you are looking for a new website with a brand roll out, or need a refresher for your current website, I could provide design and set up sites.</p>
        </div>
        <div class="col-12 col-md-4 d-flex flex-column text-center">
          <img src="../assets/images/tbg.png" class="icon_style icon03">
          <h4 style="color: #D8B281;">Social Media Content</h4>
          <p class="text-left" style="color: #555760;">With social media and branding it is always key to keep consistent engagement with your customers. Build your style by color,content,illustration...</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12"><h2 class="mt-4 text-center title_style2" style="color: #D8B281;">Design Process</h2></div>
        <div class="col-12 col-md-4 mt-3 d-flex flex-column text-center">
          <img src="../assets/images/flower01.png" class="icon_style">
          <h4 style="color: #D8B281;" class="mt-3">Concept</h4>
          <p class="text-center" style="color: #555760;">Understand the client’s goals and objectives of the project and develop 2-3 rough concepts.</p>
        </div>
        <div class="col-12 col-md-4 mt-3 d-flex flex-column text-center">
          <img src="../assets/images/flower02.png" class="icon_style">
          <h4 style="color: #D8B281;" class="mt-3">Design</h4>
          <p class="text-center" style="color: #555760;">Begin to designing and production phase, where all the assets are developed or prototyped to be reviewed by the client.</p>
        </div>
        <div class="col-12 col-md-4 mt-3 d-flex flex-column text-center">
          <img src="../assets/images/flower03.png" class="icon_style">
          <h4 style="color: #D8B281;" class="mt-3">Review</h4>
          <p class="text-center" style="color: #555760;">In order to verify the outcomes of previous activities and identify issues before committing to - and if need to be re-prioritise - further work. </p>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <p style="color: #555760; margin-top:5.5rem; font-size:12%;">&copy; 2021 wundo studio. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');

#services{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
section{
  font-family:  'Ubuntu', sans-serif;
  color: #D8B281;
  position: relative;
  width: 90%;
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.title_style{
  padding-bottom: 1rem;
  border-bottom: 2px solid #D8B281;
}
.title_style2{
  padding-bottom: 1rem;
  border-bottom: 2px dotted #D8B281;
}
.container{
  font-family:  'Ubuntu', sans-serif;
  height: 80vh;
}
.icon_style{
  align-self: center;
  width: 60%;
}
.icon01{
  background-image: url(../assets/images/icon01.png);
  background-size: cover;
}
.icon01:hover{
  background-image: url(../assets/images/icon01_b.png);
  background-size: cover;
}
.icon02{
  background-image: url(../assets/images/icon02.png);
  background-size: cover;
}
.icon02:hover{
  background-image: url(../assets/images/icon02_b.png);
  background-size: cover;
}
.icon03{
  background-image: url(../assets/images/icon03.png);
  background-size: cover;
}
.icon03:hover{
  background-image: url(../assets/images/icon03_b.png);
  background-size: cover;
}
@media (min-width: 768px) {
  .icon_style{
    width: 80%;
  }
}
@media (min-width: 992px) {
  .icon_style{
    width: 80%;
  }
}
</style>

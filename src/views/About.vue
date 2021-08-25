<template>
  <div id="about">
    <section id="title" class="title">
      <h1 class="text-center">Hello!</h1>
      <h5 class="text-center mb-0 title_style">Something about me.</h5>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h6 class="pl-4" style="color: #555760; line-height: 2rem;">Hello! I am an illustrator(among other things) with an independent studio based in Taiwan. When you think of illustration, your mind might go first to children’s storybooks, but in recent years illustration has become a huge trend in web、commersial、graphic... design.</h6>
          <br>
          <p class="pl-4" style="color: #555760; line-height: 2rem;">Growing up, I watched an endless amount of animations and was always in awe of beautifully illustrated books, which ended up paving my path to becoming a designer and illustrator.</p>
          <p class="pl-4" style="color: #C7CFE6; line-height: 2rem;">And now, I'm keeping learning front-end development to create more funny things.</p>
        </div>
        <div class="col-12 col-md-6">
          <img class="flower" src="../assets/images/flower.png">
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <p style="color: #555760; margin-top:5rem; font-size:12%;">&copy; 2021 wundo studio. All Rights Reserved</p>
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
#about{
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
.container{
  font-family:  'Ubuntu', sans-serif;
  height: 80vh;
}
.flower{
  width: 75%;
  margin-top: 2rem;
  margin-left: 6rem;
}
</style>

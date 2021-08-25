<template>
  <div id="indexcontainer">
    <section>
      <img src="../assets/images/home_bg_front.png" id="home_bg_front" ref="bgfront" class="bgfront">
      <img src="../assets/images/home_bg_back.png" id="home_bg_back">
    </section>
    <div id="worksection">
      <div class="container worksection">
        <div class="row">
          <div class="col-12">
            <h2 class="title text-center title_style">WORK</h2>
          </div>
          <div class="col">
            <carousel
              class="cardcarousel"
              :autoplay="true"
              :autoplayTimeout="2000"
              :nav="false"
              :responsive="{0:{items:2,nav:false,dots:false},768:{items:4,nav:false},992:{items:5,nav:false}}"
            >
              <img src="../assets/images/carousel_01.png">
              <img src="../assets/images/carousel_02.png">
              <img src="../assets/images/carousel_03.png">
              <img src="../assets/images/carousel_04.png">
              <img src="../assets/images/carousel_05.png">
              <img src="../assets/images/carousel-06.png">
              <img src="../assets/images/carousel-07.png">
              <img src="../assets/images/carousel-08.png">
            </carousel>
          </div>
          <div class="col-12 text-right"><b-button variant="outline-secondary" href="#/works">Read More</b-button></div>
        </div>
      </div>
    </div>
    <div id="aboutsection">
      <div class="container aboutsection">
        <div class="row">
          <div class="col-12">
            <h2 class="title2 text-center title_style">ABOUT</h2>
          </div>
          <div class="col-12 col-md-6" style="margin-top: 5rem; color: #342C2A;">
            <h4>Welcome!</h4>
            <br>
            <p style="color: #555760; line-height: 2rem;">Hello! I am an illustrator(among other things) with an independent studio based in Taiwan. When you think of illustration, your mind might go first to children’s storybooks, but in recent years illustration has become a huge trend in web、commersial、graphic... design.
              <br><span style="color: #C7CFE6">Might happen esaily<br>Might take a while<br>Might take years<br>Might be good to know...</span></p>
            <br>
            <div class="text-center"><b-button variant="outline-secondary" href="#/about">More Details</b-button></div>
          </div>
          <div class="col-12 col-md-6" style="margin-top: 4rem;">
            <img src="../assets/images/about.gif" style="width: 90%;margin-left: 1rem;">
          </div>
        </div>
      </div>
    </div>
    <section id="servicessection">
      <div class="container servicessection">
        <div class="row">
          <div class="col-md-6">
            <h3 class="title3 text-center text-md-left">DO SOMETHING INTERESTING_</h3>
            <div class="row" style="margin-top: 1rem;">
              <div class="col-5 col-md-6 col-lg-5">
                <img src="../assets/images/se_icon01.png">
              </div>
              <div class="col-7 col-md-6 col-lg-7" style="margin-top: 1rem;">
                <h5>Branding & Illustrations</h5>
                <p>• Logo & identity<br>• Packaging<br>• Character Design<br>• Infographics</p>
              </div>
            </div>
            <div class="row">
              <div class="col-5 col-md-6 col-lg-5">
                <img src="../assets/images/se_icon02.png">
              </div>
              <div class="col-7 col-md-6 col-lg-7" style="margin-top: 2rem;">
                <h5>Website Design</h5>
                <p>• UI & UX Design<br>• Prototyping<br>• Development</p>
              </div>
            </div>
            <div class="row">
              <div class="col-5 col-md-6 col-lg-5">
                <img src="../assets/images/se_icon03.png">
              </div>
              <div class="col-7 col-md-6 col-lg-7" style="margin-top: 2rem;">
                <h5>Social Media Content</h5>
                <p>• Product Photography<br>• Retouch Photo Editing<br>• Social Campaign Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contactsection">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center title_style" style="color: #D8B281;">LETS WORK TOGETHER</h2>
          </div>
          <div class="col-12">
            <p class="text-center mt-4" style="color: #555760;">Feel free to leave me a message via the form, Lets create something beautiful and impactful.</p>
          </div>
          <div class="col-2 col-md-3"></div>
          <div class="col-8 col-md-6 mt-5" style="color: #555760;">
            <b-form @submit="onSubmit">
              <b-form-group
                id="input_name"
                label="Name"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="message.name"
                  style="padding-left:1rem"
                  autocomplete="off"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input_emaill"
                label="E-mail"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="message.email"
                  style="padding-left:1rem"
                  autocomplete="off"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input_text"
                label="Message"
                label-for="textarea"
              >
                <b-form-textarea
                id="textarea"
                v-model="message.text"
                style="padding-left:1rem"
                autocomplete="off"
                rows="8"
                max-rows="6"
              ></b-form-textarea>
              </b-form-group>
              <div class="text-center mt-3"><b-button type="submit" variant="primary" size="lg" pill>Send Message</b-button></div>
            </b-form>
          </div>
          <div class="col-2 col-md-3"></div>
        </div>
      </div>
    </section>
    <div class="container footer">
      <div class="row footer_style">
        <div class="col">
          <div class="copyright text-center">
            <span style="color: #555760; font-size:12%;">&copy; 2021 wundo studio. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Back, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import carousel from 'vue-owl-carousel'

export default {
  data () {
    return {
      message: {
        name: '',
        email: '',
        text: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      this.$swal({
        icon: 'success',
        title: 'Success',
        text: 'Thank you, I would reply soon.'
      })
      this.message = {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  components: {
    carousel
  },
  async mounted () {
    gsap.registerPlugin(ScrollTrigger)
    const { bgfront } = this.$refs
    const tl = new TimelineLite()
    tl.to(bgfront, 1, { y: -200, ease: Back.easeInOut })
    const tl2 = gsap.timeline()
    tl2.from('.title', { y: 20, duration: 1, opacity: 0 })
    ScrollTrigger.create({
      animation: tl2,
      trigger: '.worksection',
      start: 'top 75%',
      end: 'bottom 50%',
      toggleActions: 'play none reverse none',
      scrub: true,
      yoyo: true
    })
    tl2.from('.title2', { y: 30, duration: 1, opacity: 0 })
    ScrollTrigger.create({
      animation: tl2,
      trigger: '.aboutsection',
      start: 'top 100%',
      end: '+=85%',
      toggleActions: 'play none reverse none',
      scrub: true,
      yoyo: true
    })
    window.dispatchEvent(new Event('resize'))
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  'Ubuntu', sans-serif;
}
#indexcontainer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 70vh;
}
section{
  margin-top: 2rem;
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
}
section img#home_bg_back{
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
}
section img#home_bg_front{
  position: absolute;
  bottom: -50%;
  top: initial;
  width: 100%;
  z-index: 1000;
}
.worksection{
  color: #D8B281;
  /* height: 65vh; */
}
.aboutsection{
  color: #D8B281;
  /* height: 100vh; */
}
.title_style{
  padding-bottom: 1rem;
  border-bottom: 2px solid #D8B281;
}
.btn{
  margin: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.cardcarousel{
  margin-top: 4rem;
}
.title3{
  margin-top: 1rem;
}
#servicessection{
  color: whitesmoke;
  height: 90vh;
  margin-top: 4rem;
  background-image: url(../assets/images/services_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.footer_style{
  margin-top: 15rem;
  padding-top: 5rem;
}
@media (min-width: 768px) {
  section {
  height: 95vh;
}
  section img#home_bg_front{
  bottom: -30%;
}
  .container{
    margin-top: 1rem;
  }
  #servicessection{
  height: 100vh;
  }
  .footer{
  height: 0;
  }
  .footer_style{
  margin-top: 0rem;
  padding: 1rem;
  }
}
@media (min-width: 992px) {
  section {
  height: 95vh;
}
  section img#home_bg_front{
  bottom: -30%;
}
  .container{
    margin-top: 4rem;
  }
  #servicessection{
    height: 100vh;
  }
  .footer{
    height: 0;
  }
  .footer_style{
    margin-top: 0rem;
    padding: 1rem;
  }
}
</style>

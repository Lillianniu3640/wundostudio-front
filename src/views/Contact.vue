<template>
  <div id="contact">
    <section id="title" class="title">
      <h1 class="text-center">Contact</h1>
      <h5 class="text-center title_style">Feel free to leave me a message.</h5>
    </section>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-7 pl-3">
              <p class="pl-2" style="color: #555760;">Lets create something beautiful and impactful_</p>
              <b-form @submit="onSubmit">
                <b-form-group
                  id="input_name"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="message.name"
                    style="padding-left:1rem"
                    placeholder="Name"
                    autocomplete="off"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input_emaill"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="message.email"
                    style="padding-left:1rem"
                    placeholder="E-mail"
                    autocomplete="off"
                    required
                  ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input_text"
                label-for="textarea"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="message.text"
                  style="padding-left:1rem"
                  placeholder="Message"
                  autocomplete="off"
                  rows="8"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
              <div class="text-center mt-3"><b-button type="submit" variant="primary" size="lg" pill>Send Message</b-button></div>
              </b-form>
            </div>
            <div class="col-12 col-md-5">
              <img class="typewriter" src="../assets/images/typewriter.png">
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
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');
#contact{
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
.typewriter{
  width: 100%;
  margin-top: 1rem;
  margin-left: 3rem;
}
</style>

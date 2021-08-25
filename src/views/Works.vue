<template>
    <div id="workcontent">
        <section id="title" class="title">
          <h1 class="text-center">Illustrations</h1>
          <h5 class="text-center title_style">A selection of my illustration and design work.</h5>
        </section>
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-4 col-lg-3" v-for="work in works" :key="work._id">
              <WorkCard :work="work"></WorkCard>
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
import WorkCard from '../components/WorkCard.vue'

export default {
  data () {
    return {
      works: []
    }
  },
  components: {
    WorkCard
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/works')
      this.works = data.result.map(work => {
        work.image = `${process.env.VUE_APP_API}/files/${work.image}`
        return work
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: 'Wrong',
        text: '取得作品失敗'
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');

#workcontent{
  font-family:  'Ubuntu', sans-serif;
  color: #D8B281;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
section{
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
  color: #333;
  margin-top: -5rem;
  height: 100vh;
}
.card-img-top:hover{
  transform: scale(110%);
}
</style>

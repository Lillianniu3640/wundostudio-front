<template lang="pug">
b-container#adminworks
  b-row
    b-col(cols="12")
      h4.text-center 作品管理
    b-col(cols="12")
      b-img(src='../assets/images/line.png' style='width:100%')
    b-col(cols="10")
    b-col(cols="2")
      b-btn(variant="dark" @click="$bvModal.show('modal-work')") Add New
      b-modal#modal-work(
        :title="form._id.length > 0 ? '編輯作品' : '新增作品'"
        ok-variant="warning"
        ok-title="OK"
        cancel-variant="secondary"
        cancel-title="Cancel"
        @ok="submitModal"
        @hidden="resetForm"
        )
        b-form-group(
          label="作品名:"
          label-for="input-name"
          :state="state.name"
          description=""
          invalid-feedback="格式不正確"
        )
          b-form-input#input-name(
            v-model="form.name"
            type="text"
            required
            placeholder="請輸入名稱"
            :state="state.name"
            autocomplete="off"
          )
        b-form-group(
          label="作品類型:"
          label-for="input-subject"
        )
          b-form-input#input-subject(
            v-model="form.subject"
            type="text"
            placeholder="請輸入類型"
            autocomplete="off"
          )
        b-form-group(
          label="描述:"
          label-for="input-description"
        )
          b-form-textarea#input-description(
            v-model="form.description"
            type="text"
            placeholder="請輸入說明文字"
          )
        //- b-form-group(label='使用工具:' label-for="input-tools")
        //-   b-form-checkbox-group#input-tools(v-model='selected' :options='options')
        b-form-group(
          label="顯示"
          label-for="input-sell"
        )
          b-form-radio(v-model="form.sell" :value="true") 顯示
          b-form-radio(v-model="form.sell" :value="false") 不顯示
        img-inputer(v-model="form.image" theme="dark" size="large" placeholder="點擊或拖曳選擇圖片" bottom-text="點擊或拖曳以修改")
    b-col.mt-5.ml-4(cols="12")
      b-table(:items="works" :fields="fields" ref="workTable")
        template(#cell(image)="data")
          img(v-if="data.item" :src="data.item.image" style="height: 50px")
        template(#cell(sell)="data")
          | {{ data.item.sell ? 'v' : 'x' }}
        template(#cell(action)="data")
          b-btn.mr-2(variant="faded" @click="editWork(data.index)")
            font-awesome-icon(:icon='["fas", "pen-nib"]')
          b-btn(variant="faded" v-on:click="deleteWork(data.index)")
            font-awesome-icon(:icon='["fas", "trash"]')
</template>

<script>
export default {
  data () {
    return {
      works: [],
      fields: [
        {
          key: 'image',
          label: '圖片'
        },
        {
          key: 'name',
          label: '作品名'
        },
        {
          key: 'subject',
          label: '類別'
        },
        // {
        //   key: 'tools',
        //   label: '工具'
        // },
        {
          key: 'description',
          label: '描述'
        },
        {
          key: 'sell',
          label: '顯示'
        },
        {
          key: 'action',
          label: '操作'
        }
      ],
      selected: [],
      options: ['Illustrator', 'Photoshop', 'Premiere', 'Figma', 'Html', 'Css', 'Sass', 'Vue.js', 'Bootstrap', 'jQuery'],
      form: {
        name: '',
        subject: '',
        tools: '',
        description: '',
        sell: true,
        image: null,
        _id: ''
      }
    }
  },
  computed: {
    state () {
      return {
        // 欄位輸入打勾
        name: this.form.name.length === 0 ? null : true
      }
    }
  },
  methods: {
    editWork (index) {
      this.form = {
        name: this.works[index].name,
        subject: this.works[index].subject,
        tools: this.works[index].tools,
        description: this.works[index].description,
        sell: this.works[index].sell,
        image: this.works[index].image,
        _id: this.works[index]._id,
        index
      }
      this.$bvModal.show('modal-work')
    },
    resetForm () {
      this.form = {
        name: '',
        subject: '',
        tools: '',
        description: '',
        sell: true,
        image: null,
        _id: ''
      }
    },
    deleteWork: function (index) {
      this.works.splice(index, 1)
      this.$swal({
        icon: 'warning',
        title: 'Are you sure?',
        text: 'Delete the work?'
      })
    },
    async submitModal () {
      try {
        const fd = new FormData()
        for (const key in this.form) {
          fd.append(key, this.form[key])
        }
        if (this.form._id.length === 0) {
          await this.axios.post('/works', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
        } else {
          const { data } = await this.axios.patch('/works/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.works[this.form.index] = {
            name: this.form.name,
            subject: this.form.subject,
            tools: this.form.tools,
            description: this.form.description,
            sell: this.form.sell,
            image: `${process.env.VUE_APP_API}/files/${data.result.image}`,
            _id: this.form._id
          }
          this.$refs.workTable.refresh()
        }
        this.$bvModal.hide('modal-work')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: 'Wrong',
          text: error.response.data.message
        })
      }
    }
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

<style lang="stylus" scoped>
#adminworks
  position relative
.row
  color #333
  position absolute
  top 0
  left 0
  transform translate(0%,5%)
h4
  display flex
  padding-left 2rem
</style>

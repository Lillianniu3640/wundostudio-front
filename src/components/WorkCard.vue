<template lang="pug">
  b-card-group
    b-card.work-card.mt-5.mr-2.text-dark(
      overlay
      img-top
      :img-src="work.image"
      bg-variant="default"
    )
</template>

<script>
export default {
  name: 'WorkCard',
  props: {
    work: {
      type: Object,
      required: true
    }
  }
}
</script>

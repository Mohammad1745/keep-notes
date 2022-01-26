<template>
  <div v-if="currentNote">
    <div>{{currentNote.title}}</div>
    <div>{{currentNote.description}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Details",
  computed: {
    ...mapGetters(['currentNote'])
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <v-textarea
        v-model="content"
        label="Note Content"
        @change="updateContent(content)"
    ></v-textarea>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "ScratchPad",
  data(){
    return {
      content: ''
    }
  },
  mounted() {
    this.content = this.padContent
  },
  computed: {
    ...mapGetters(['padContent'])
  },
  methods: {
    ...mapActions(['updateContent'])
  }
}
</script>

<style scoped>

</style>
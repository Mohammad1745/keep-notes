<template>
  <v-form @submit="handleSubmission">
    <v-text-field
        v-model="title"
        :counter="10"
        label="Note Title"
        required
    ></v-text-field>
    <v-textarea
        v-model="description"
        :counter="10"
        label="Note Content"
        required
    ></v-textarea>

    <v-btn
      class="mr-4"
      type="submit"
    >
      submit
    </v-btn>
  </v-form>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "AddEdit",
  data: () => ({
    title: '',
    description: '',
    errors: {}
  }),
  computed: {
    ...mapGetters(['noteToUpdate'])
  },
  mounted() {
    if (this.noteToUpdate){
      this.title = this.noteToUpdate.title
      this.description = this.noteToUpdate.description
    }
  },
  methods: {
    async handleSubmission () {
      if (this.noteToUpdate)
        this.errors = await this.$store.dispatch('updateNote', {
          id: this.noteToUpdate.id,
          title: this.title,
          description: this.description
        })
      else
        this.errors = await this.$store.dispatch('addNote', {
          title: this.title,
          description: this.description
        })
      if (!this.errors.length) this.reset()
      else await this.$store.dispatch('clearEditableNote')
    },
    reset() {
      this.title = ''
      this.description = ''
    }
  },
}
</script>

<style scoped>

</style>
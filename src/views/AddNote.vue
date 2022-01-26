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
export default {
  name: "AddNote",
  data: () => ({
    title: '',
    description: '',
    errors: {}
  }),
  methods: {
    async handleSubmission () {
      this.errors = await this.$store.dispatch('addNote', {
        title: this.title,
        description: this.description
      })
      if (!this.errors.length) this.reset()
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
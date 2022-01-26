<template>
  <v-container>
    <v-row >
      <v-col
          cols="12"
          sm="6"
          md="3"
      >
        <List />
      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="9"
      >
        <Details />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from "../components/notes/List";
import Details from "../components/notes/Details";

export default {
  name: 'Home',
  components: {
    List, Details
  },
  created() {
    this.$store.dispatch('showAllNotes')
  }
};
</script>

<style scoped>
</style>
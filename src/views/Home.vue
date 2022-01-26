<template>
  <AddEdit v-if="noteToUpdate" />
  <v-row v-else >
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
</template>

<script>
import {mapGetters} from 'vuex'
import List from "../components/notes/List";
import Details from "../components/notes/Details";
import AddEdit from "../components/notes/AddEdit";

export default {
  name: 'Home',
  components: {
    List, Details, AddEdit
  },
  computed: {
    ...mapGetters(['noteToUpdate'])
  }
};
</script>

<style scoped>
</style>
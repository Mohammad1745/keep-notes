<template>
  <v-container>
    <v-row >
      <v-col
          cols="12"
          sm="6"
          md="3"
      >
        <List type="trash"/>
      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="9"
      >
        <Details type="trash" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from "../components/notes/List";
import Details from "../components/notes/Details";

export default {
  name: 'Trash',
  components: {
    List, Details
  }
};
</script>

<style scoped>
</style>
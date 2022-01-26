<template>
  <v-container>
    <v-row >
      <v-col
          cols="12"
          sm="6"
          md="3"
          class="list"
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
};
</script>

<style scoped>
.list {
  border-right: 1px solid black;
}
</style>
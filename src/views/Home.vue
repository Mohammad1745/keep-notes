<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="3"
    >
      <List />
    </v-col>
  </v-row>
</template>

<script>
import List from "../components/notes/List";

export default {
  name: 'Home',
  components: {
    List
  },
};
</script>

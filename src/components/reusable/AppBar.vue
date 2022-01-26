<template>
  <v-app-bar app>

    <v-app-bar-nav-icon @click="$emit('nav-click')"></v-app-bar-nav-icon>

    <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>

export default {
  name: "AppBar",
}
</script>

<style scoped>

</style>
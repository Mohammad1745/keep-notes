<template>
  <v-app-bar app>

    <v-app-bar-nav-icon @click="$emit('nav-click')"></v-app-bar-nav-icon>

    <v-app-bar-title>{{ username }}</v-app-bar-title>

    <v-spacer></v-spacer>
    <v-app-bar-subtitle class="mr-2">
      <img :src="avatar" alt="" width="35" class="rounded-circle" >
    </v-app-bar-subtitle>
  </v-app-bar>
</template>

<script>

import {mapGetters} from "vuex"

export default {
  name: "AppBar",
  data(){
    return {
      username: '',
      avatar: '',
    }
  },
  mounted(){
    setTimeout(()=>{
      let token = sessionStorage.getItem('token')
      token = JSON.parse(token)
      this.username = token ? token.user.name : ''
      this.avatar = token ? token.user.avatar : ''
    }, 1000)
  }
}
</script>

<style scoped>

</style>
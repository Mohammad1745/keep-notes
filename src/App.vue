<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        v-if="loggedIn"
    >
      <Navigator @nav-click="drawer = !drawer"/>
    </v-navigation-drawer>

    <AppBar v-if="loggedIn" :drawer="drawer" @nav-click="drawer = !drawer"></AppBar>

    <v-main>
      <router-view
          class="pa-4"
          @loggedIn="loggedIn=true"
          @loggedOut="loggedIn=false"
      ></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navigator from "./components/reusable/Navigator";
import AppBar from "./components/reusable/AppBar";
export default {
  components: {Navigator, AppBar},
  data: () => ({ drawer: null, loggedIn:true}),
}
</script>
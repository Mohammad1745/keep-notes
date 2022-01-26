<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <Navigator @nav-click="drawer = !drawer"/>
    </v-navigation-drawer>

    <AppBar :drawer="drawer" @nav-click="drawer = !drawer"></AppBar>

    <v-main>
      <router-view class="pa-4"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navigator from "./components/reusable/Navigator";
import AppBar from "./components/reusable/AppBar";
export default {
  components: {Navigator, AppBar},
  data: () => ({ drawer: null }),
}
</script>
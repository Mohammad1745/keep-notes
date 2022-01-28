<template>
  <v-container>
    <v-card
        class="login-card pa-2"
        min-width="374"
    >
      <v-card-title class="d-block text-center">Keep Notes</v-card-title>
      <v-card-text class="d-block text-center">Open Source Note App</v-card-text>
      <v-card-text class="d-block text-center">
        <v-icon color="warning"  style="font-size:3rem">mdi-google</v-icon>
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="warning"
            :href="url+'/auth/google/redirect'"
            class="mx-auto"
        >
          Login with Google
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import {API_BASE_URL} from "../helpers/core_constants";

export default {
  name: 'Login',
  data(){
    return {
      url: API_BASE_URL
    }
  },
  mounted() {
    let token = this.$route.query.token
    if (token){
      sessionStorage.setItem('token', token)
      this.$emit('loggedIn')
      this.$router.push('/')
    } else {
      this.$emit('loggedOut')
    }
  },
};
</script>

<style scoped>
.login-card{
  position:absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
  z-index: 10;
}
</style>
<template>
  <v-container>
    <a href="http://127.0.0.1:3333/auth/google/redirect"
       class="btn btn-block btn-google btn-social">
      <i class="fa fa-google-plus"></i>Login with Google
    </a>
  </v-container>
</template>

<script>

export default {
  name: 'Login',
  mounted() {
    let token = this.$route.query.token
    if (token){
      sessionStorage.setItem('token', token)
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>
</style>
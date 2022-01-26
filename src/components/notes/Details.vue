<template>
  <v-card height='100%'
    class="mx-auto"
    v-if="currentNote"
  >
    <v-card-title>
      {{currentNote.title}}
      <v-spacer></v-spacer>
      <v-btn dark icon class="ml-2" @click="toggleFavorite(currentNote.id)"
             :title="(currentNote.isFavourite? 'Remove From' :'Add To')+' Favourites'">
        <v-icon v-if="currentNote.isFavourite">mdi-star-check</v-icon>
        <v-icon v-else>mdi-star-plus-outline</v-icon>
      </v-btn>
      <v-btn dark icon class="ml-2" title="Edit">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn dark icon class="ml-2" title="Move To Trash">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text>
      {{currentNote.description}}
    </v-card-text>
  </v-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "Details",
  data() {
    return {
      showMenus: false,
    }
  },
  computed: {
    ...mapGetters(['currentNote'])
  },
  methods: {
    ...mapActions(['toggleFavorite'])
  }
}
</script>

<style scoped>

</style>
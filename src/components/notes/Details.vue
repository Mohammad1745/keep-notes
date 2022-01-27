<template>
  <v-card height='100%'
    class="mx-auto"
    v-if="currentNote"
  >
    <v-card-title>
      {{currentNote.title}}

      <v-spacer></v-spacer>

      <v-btn dark icon
         class="ml-2"
         v-if="type!=='trash'"
         @click="toggleFavorite(currentNote.id)"
         :title="(currentNote.is_favourite? 'Remove From' :'Add To')+' Favourites'"
      >
        <v-icon v-if="currentNote.is_favourite">mdi-star-check</v-icon>
        <v-icon v-else>mdi-star-plus-outline</v-icon>
      </v-btn>

      <v-btn dark icon class="ml-2" title="Edit"
         @click="editNote(currentNote.id)"
         v-if="type!=='trash'"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn dark icon class="ml-2"
             @click="toggleTrashed(currentNote.id)"
             :title="(type==='trash'? 'Restore' :'Move to Trash')"
      >
        <v-icon v-if="type==='trash'">mdi-archive-arrow-up</v-icon>
        <v-icon v-else>mdi-delete</v-icon>
      </v-btn>

      <v-btn dark icon class="ml-2"
         @click="deleteNote(currentNote.id)"
         title="Delete Permanently"
         v-if="type==='trash'"
      >
        <v-icon color="red">mdi-delete</v-icon>
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
  props: ['type'],
  data() {
    return {
      showMenus: false,
    }
  },
  computed: {
    ...mapGetters(['currentNote'])
  },
  methods: {
    ...mapActions(['toggleFavorite', 'toggleTrashed', 'editNote', 'deleteNote'])
  }
}
</script>

<style scoped>

</style>
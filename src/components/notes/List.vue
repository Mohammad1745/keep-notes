<template>
  <v-text-field
    v-model="searchInput"
    label="Search"
    placeholder="Search by title"
    solo
    clearable
    @keyup="handleSearchInput"
  ></v-text-field>

  <v-list dense>
    <div
        v-for="(note, index) in filteredNotes"
        :key="note.id"
    >
      <v-divider v-if="index"></v-divider>

      <v-list-item link @click="handleClick(note.id)">
        <v-list-item-content>
          <v-list-item-title v-text="note.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "List",
  props: ['type'],
  data(){
    return {
      searchInput: '',
      notes: []
    }
  },
  computed: {
    ...mapGetters(['filteredNotes'])
  },
  methods: {
    handleSearchInput () {
      this.$store.dispatch('updateSearchKeyword', this.searchInput)
    },
    async handleClick (id) {
      await this.$store.dispatch('updateCurrentNoteId', id)
    }
  },
  async mounted() {
    await this.$store.dispatch('getNotes')
    if (this.type==="favourite")
      await this.$store.dispatch('showFavouriteNotes')
    else if (this.type==="trash")
      await this.$store.dispatch('showTrashedNotes')
    else
      await this.$store.dispatch('showAllNotes')
  }
}
</script>

<style scoped>

</style>
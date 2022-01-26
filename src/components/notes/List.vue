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
  data(){
    return {
      searchInput: ''
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
  }
}
</script>

<style scoped>

</style>
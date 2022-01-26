<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title class="text-h6">
        Keep Notes
      </v-list-item-title>
      <v-list-item-subtitle>
        Notes app for the web.
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-spacer></v-spacer>
    <v-icon class="cursor-pointer" @click="$emit('nav-click')">mdi-close</v-icon>
  </v-list-item>

  <v-divider></v-divider>

  <v-list
      dense
      nav
  >
    <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
    >
      <v-list-item-icon>
        <v-icon class="pr-3">{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "Navigator",
  data () {
    return {
      items: [
        { title: 'Add Note', icon: 'mdi-plus-box', to:"/add-note" },
        { title: 'Scratch Pad', icon: 'mdi-file-edit-outline', to:"/scratchpad" },
        { title: 'Notes', icon: 'mdi-calendar-text', to:"/" },
        { title: 'Favourites', icon: 'mdi-star-circle', to:"/favourites" },
        { title: 'Trash', icon: 'mdi-delete' , to:"/trash" },
      ],
      right: null,
    }
  },
}
</script>

<style scoped>

</style>
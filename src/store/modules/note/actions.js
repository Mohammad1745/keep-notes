export default {
    updateSearchKeyword (context, searchKeyword) {
        context.commit('UPDATE_SEARCH_KEYWORD', searchKeyword)
    },
    updateCurrentNoteId (context, id) {
        context.commit('UPDATE_CURRENT_NOTE_ID', id)
    },
    toggleFavorite (context, id){
        let note = context.state.notes.find(item => item.id === id)
        if (note) {
            context.commit('TOGGLE_FAVORITE', note)
        }
    }
}
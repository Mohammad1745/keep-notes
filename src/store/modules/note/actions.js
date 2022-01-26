export default {
    updateSearchKeyword (context, searchKeyword) {
        context.commit('UPDATE_SEARCH_KEYWORD', searchKeyword)
    },
    updateCurrentNoteId (context, id) {
        context.commit('UPDATE_CURRENT_NOTE_ID', id)
    },
    showAllNotes (context) {
        context.commit('SET_FAVORITE_ONLY', false)
    },
    showFavouriteNotes (context) {
        context.commit('SET_FAVORITE_ONLY', true)
        if(context.state.currentNoteId && !context.getters.currentNote.isFavourite) {
            context.commit('UPDATE_CURRENT_NOTE_ID', null)
        }
    },
    toggleFavorite (context, id){
        let note = context.state.notes.find(item => item.id === id)
        if (note) {
            context.commit('TOGGLE_FAVORITE', note)
            if (!context.getters.currentNote.isFavourite && context.state.showOnlyFavorites) {
                context.commit('UPDATE_CURRENT_NOTE_ID', null)
            }
        }
    }
}
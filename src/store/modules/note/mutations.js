export default {
    UPDATE_SEARCH_KEYWORD (state, searchKeyword) {
        state.searchKeyword = searchKeyword
    },
    UPDATE_CURRENT_NOTE_ID (state, id) {
        state.currentNoteId = id
    },
    SET_FAVORITE_ONLY (state, value) {
        state.showOnlyFavorites = value
    },
    TOGGLE_FAVORITE (state, note) {
        note.isFavourite = !note.isFavourite
    }
}
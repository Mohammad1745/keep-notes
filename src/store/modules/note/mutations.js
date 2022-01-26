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
    SET_TRASHED_ONLY (state, value) {
        state.showTrashed = value
    },
    TOGGLE_FAVORITE (state, note) {
        note.isFavourite = !note.isFavourite
    },
    TOGGLE_TRASHED (state, note) {
        note.isTrashed = !note.isTrashed
    },
    DELETE_NOTE (state, index) {
        state.notes.splice(index, 1)
    },
}
export default {
    UPDATE_SEARCH_KEYWORD (state, searchKeyword) {
        state.searchKeyword = searchKeyword
    },
    UPDATE_CURRENT_NOTE_ID (state, id) {
        state.currentNoteId = id
    },
    TOGGLE_FAVORITE (state, note) {
        note.isFavourite = !note.isFavourite
    }
}
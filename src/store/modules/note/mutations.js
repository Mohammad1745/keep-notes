export default {
    UPDATE_SEARCH_KEYWORD (state, searchKeyword) {
        state.searchKeyword = searchKeyword
    },
    UPDATE_CURRENT_NOTE_ID (state, id) {
        state.currentNoteId = id
    },
    UPDATE_NOTES (state, data) {
        state.notes = data
    },
    ADD_NOTE (state, data) {
        state.notes.push(data)
    },
    UPDATE_NOTE (state, data) {
        let note = state.notes.find(item => item.id === data.id)
        note.title = data.title
        note.description = data.description
    },
    SET_FAVORITE_ONLY (state, value) {
        state.showOnlyFavorites = value
    },
    SET_TRASHED_ONLY (state, value) {
        state.showTrashed = value
    },
    SET_EDIT_NOTE_ID (state, id) {
        state.updateNoteId = id
    },
    TOGGLE_FAVORITE (state, note) {
        note.is_favourite = !note.is_favourite
    },
    TOGGLE_TRASHED (state, note) {
        note.is_trashed = !note.is_trashed
    },
    DELETE_NOTE (state, index) {
        state.notes.splice(index, 1)
    },
}
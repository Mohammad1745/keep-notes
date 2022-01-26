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
        console.log(note, data)
        note.title = data.title
        note.description = data.description
        note.title = data.title
        note.updatedAt = data.updatedAt
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
        note.isFavourite = !note.isFavourite
    },
    TOGGLE_TRASHED (state, note) {
        note.isTrashed = !note.isTrashed
    },
    DELETE_NOTE (state, index) {
        state.notes.splice(index, 1)
    },
}
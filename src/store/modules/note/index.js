import actions from "./actions";
import mutations from "./mutations";

export default {
    state: {
        searchKeyword: '',
        currentNoteId: null,
        updateNoteId: null,
        showOnlyFavorites: false,
        showTrashed: false,
        notes: [],
        alerts: ''
    },
    getters: {
        filteredNotes (state) {
            let filtered =  state.notes.filter(note =>
                note.title.toLowerCase().includes(state.searchKeyword.toLowerCase()))
            if (state.showTrashed===true)
                return filtered.filter(note => note.is_trashed)
            else
                return filtered.filter(note => !note.is_trashed
                    && (note.is_favourite || !state.showOnlyFavorites))
        },
        currentNote (state) {
            return state.notes.find(notes => notes.id===state.currentNoteId)
        },
        noteToUpdate (state) {
            return state.notes.find(notes => notes.id===state.updateNoteId)
        }
    },
    mutations: {...mutations},
    actions: {...actions},
}

import actions from "./actions";
import mutations from "./mutations";

export default {
    state: {
        searchKeyword: '',
        currentNoteId: null,
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
                return filtered.filter(note => note.isTrashed)
            else
                return filtered.filter(note => !note.isTrashed
                    && (note.isFavourite || !state.showOnlyFavorites))
        },
        currentNote (state) {
            return state.notes.find(notes => notes.id===state.currentNoteId)
        }
    },
    mutations: {...mutations},
    actions: {...actions},
}

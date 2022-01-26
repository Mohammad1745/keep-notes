import actions from "./actions";
import mutations from "./mutations";

export default {
    state: {
        searchKeyword: '',
        currentNoteId: null,
        showOnlyFavorites: false,
        notes: [
            {id: 1, title: 'Note 1', description: 'Note 1 description', isFavourite: false, created_at: '2022-01-26T11:26:22', updated_at: '2022-01-26T11:26:22'},
            {id: 2, title: 'Note 2', description: 'Note 2 description', isFavourite: true, created_at: '2022-01-26T12:06:22', updated_at: '2022-01-26T12:06:22'},
            {id: 3, title: 'Note 3', description: 'Note 3 description', isFavourite: true, created_at: '2022-01-26T12:26:22', updated_at: '2022-01-26T12:26:22'}
        ]
    },
    getters: {
        filteredNotes (state) {
            return state.notes.filter(note =>
                note.title.toLowerCase().includes(state.searchKeyword.toLowerCase())
                && (note.isFavourite || !state.showOnlyFavorites))
        },
        currentNote (state) {
            return state.notes.find(notes => notes.id===state.currentNoteId)
        }
    },
    mutations: {...mutations},
    actions: {...actions},
}

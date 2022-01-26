import { createStore } from 'vuex'

export default createStore({
    state: {
        notes: [
            {id: 1, title: 'Note 1', description: 'Note 1 description', created_at: '2022-01-26T11:26:22', updated_at: '2022-01-26T11:26:22'},
            {id: 1, title: 'Note 2', description: 'Note 2 description', created_at: '2022-01-26T12:06:22', updated_at: '2022-01-26T12:06:22'},
            {id: 1, title: 'Note 3', description: 'Note 3 description', created_at: '2022-01-26T12:26:22', updated_at: '2022-01-26T12:26:22'}
        ]
    },
    getters: {
        filteredNotes: (state) => () => state.notes
    },
    mutations: {
    },
    actions: {
    },
})

export default {
    state: {
        content: '',
    },
    getters: {
        padContent (state) {
            return state.content
        }
    },
    mutations: {
        UPDATE_CONTENT (state, content) {
            state.content = content
        }
    },
    actions: {
        updateContent (context, content) {
            context.commit('UPDATE_CONTENT', content)
        }
    },
}

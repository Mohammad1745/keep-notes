import service from '../../../services/note_service'

export default {
    updateSearchKeyword (context, searchKeyword) {
        context.commit('UPDATE_SEARCH_KEYWORD', searchKeyword)
    },
    updateCurrentNoteId (context, id) {
        context.commit('UPDATE_CURRENT_NOTE_ID', id)
    },
    getNotes (context) {
        let response = service.getNotes()
        if (response.success) {
            context.commit('UPDATE_NOTES', response.data)
        } else {
            context.commit('SET_ALERT', response.message)
        }
    },
    addNote (context, data) {
        let errors = service.validate(data)
        if (!errors.length) {
            let response = service.addNote(data)
            if (response.success) {
                context.commit('ADD_NOTE', data)
            } else {
                context.commit('SET_ALERT', response.message)
            }
        }
        return errors
    },
    showAllNotes (context) {
        context.commit('SET_FAVORITE_ONLY', false)
        context.commit('SET_TRASHED_ONLY', false)
    },
    showFavouriteNotes (context) {
        context.commit('SET_FAVORITE_ONLY', true)
        context.commit('SET_TRASHED_ONLY', false)
        if(context.state.currentNoteId && !context.getters.currentNote.isFavourite) {
            context.commit('UPDATE_CURRENT_NOTE_ID', null)
        }
    },
    showTrashedNotes (context) {
        context.commit('SET_TRASHED_ONLY', true)
        context.commit('UPDATE_CURRENT_NOTE_ID', null)
    },
    toggleFavorite (context, id){
        let note = context.state.notes.find(item => item.id === id)
        if (note) {
            let response = service.toggleFavourite(id)
            if (response.success) {
                context.commit('TOGGLE_FAVORITE', note)
                if (!context.getters.currentNote.isFavourite && context.state.showOnlyFavorites) {
                    context.commit('UPDATE_CURRENT_NOTE_ID', null)
                }
            } else {
                context.commit('SET_ALERT', response.message)
            }
        }
    },
    toggleTrashed (context, id){
        let note = context.state.notes.find(item => item.id === id)
        if (note) {
            let response = service.toggleTrashed(id)
            if (response.success) {
                context.commit('TOGGLE_TRASHED', note)
                context.commit('UPDATE_CURRENT_NOTE_ID', null)
            } else {
                context.commit('SET_ALERT', response.message)
            }
        }
    },
    deleteNote (context, id){
        let index = context.state.notes.findIndex(item => item.id === id)
        if (index !== -1) {
            let response = service.deleteNote(id)
            if (response.success) {
                context.commit('DELETE_NOTE', index)
                context.commit('UPDATE_CURRENT_NOTE_ID', null)
            } else {
                context.commit('SET_ALERT', response.message)
            }
        }
    }
}
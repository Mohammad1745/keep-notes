import service from '../../../services/note_service'

export default {
    updateSearchKeyword (context, searchKeyword) {
        context.commit('UPDATE_SEARCH_KEYWORD', searchKeyword)
    },
    updateCurrentNoteId (context, id) {
        context.commit('UPDATE_CURRENT_NOTE_ID', id)
    },
    async getNotes (context) {
        let response = await service.getNotes()
        if (response.success) {
            context.commit('UPDATE_NOTES', response.data)
        } else {
            console.log(response)
            // context.commit('SET_ALERT', response.message)
        }
    },
    async addNote (context, data) {
        let errors = service.validate(data)
        if (!errors.length) {
            let response = await service.addNote(data)
            if (response.success) {
                context.commit('ADD_NOTE', data)
            } else {
                console.log(response)
                // context.commit('SET_ALERT', response.message)
            }
        }
        return errors
    },
    editNote (context, id){
        let note = context.state.notes.find(item => item.id === id)
        if (note) {
            context.commit('SET_EDIT_NOTE_ID', id)
        }
    },
    clearEditableNote (context){
        context.commit('SET_EDIT_NOTE_ID', null)
    },
    async updateNote (context, data) {
        let errors = service.validate(data)
        if (!errors.length) {
            let note = context.state.notes.find(item => item.id === data.id)
            let response = await service.updateNote(note.id, data)
            if (response.success) {
                context.commit('UPDATE_NOTE', note)
                context.commit('SET_EDIT_NOTE_ID', null)
            } else {
                console.log(response)
                // context.commit('SET_ALERT', response.message)
            }
        }
        return errors
    },
    showAllNotes (context) {
        context.commit('SET_FAVORITE_ONLY', false)
        context.commit('SET_TRASHED_ONLY', false)
        context.commit('SET_EDIT_NOTE_ID', null)
    },
    showFavouriteNotes (context) {
        context.commit('SET_FAVORITE_ONLY', true)
        context.commit('SET_TRASHED_ONLY', false)
        context.commit('SET_EDIT_NOTE_ID', null)
        if(context.state.currentNoteId && !context.getters.currentNote.isFavourite) {
            context.commit('UPDATE_CURRENT_NOTE_ID', null)
        }
    },
    showTrashedNotes (context) {
        context.commit('SET_TRASHED_ONLY', true)
        context.commit('UPDATE_CURRENT_NOTE_ID', null)
        context.commit('SET_EDIT_NOTE_ID', null)
    },
    async toggleFavorite (context, id){
        let note = context.state.notes.find(item => item.id === id)
        if (note) {
            let response = await service.toggleFavourite(id)
            if (response.success) {
                context.commit('TOGGLE_FAVORITE', note)
                if (!context.getters.currentNote.isFavourite && context.state.showOnlyFavorites) {
                    context.commit('UPDATE_CURRENT_NOTE_ID', null)
                }
            } else {
                console.log(response)
                // context.commit('SET_ALERT', response.message)
            }
        }
    },
    async toggleTrashed (context, id){
        let note = context.state.notes.find(item => item.id === id)
        if (note) {
            let response = await service.toggleTrashed(id)
            if (response.success) {
                context.commit('TOGGLE_TRASHED', note)
                context.commit('UPDATE_CURRENT_NOTE_ID', null)
            } else {
                console.log(response)
                // context.commit('SET_ALERT', response.message)
            }
        }
    },
    async deleteNote (context, id){
        let index = context.state.notes.findIndex(item => item.id === id)
        if (index !== -1) {
            let response = await service.deleteNote(id)
            if (response.success) {
                context.commit('DELETE_NOTE', index)
                context.commit('UPDATE_CURRENT_NOTE_ID', null)
            } else {
                console.log(response)
                // context.commit('SET_ALERT', response.message)
            }
        }
    }
}
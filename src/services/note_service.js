export default {
    validate: (data) => {
        let errors = {length:0, title: [], description: []}
        if (data.title === '') {
            errors.title.push('Title is required.')
            errors.length++
        }
        if (data.title.length > 100) {
            errors.title.push('Title must be at least 100 characters.')
            errors.length++
        }
        if (data.description === '') {
            errors.description.push('Description is required.')
            errors.length++
        }
        if (data.description.length < 10) {
            errors.description.push('Description must be more than 10 characters.')
            errors.length++
        }
        return errors
    },
    addNote: (data) => {
        try {
            let note = {
                id: Date.now(),
                title: data.title,
                description: data.description,
                isFavourite: false,
                isTrashed: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            let notes = localStorage.getItem('notes')
            notes = notes ? JSON.parse(notes) : []
            notes.push(note)
            localStorage.setItem('notes', JSON.stringify(notes))
            return {
                success: true,
                data: note
            }
        } catch (e) {
            return {
                success: false,
                data: null,
                message: e.message
            }
        }

    },
    updateNote: (id, data) => {
        try {
            let notes = localStorage.getItem('notes')
            if (notes) {
                notes = JSON.parse(notes)
                let note = notes.find(item => item.id === id)
                note.title = data.title
                note.description = data.description
                note.updatedAt = new Date()
                localStorage.setItem('notes', JSON.stringify(notes))
                return {
                    success: true,
                    data: note
                }
            }
            return {success: false, message: 'Note not Found'}
        } catch (e) {
            return {
                success: false,
                data: null,
                message: e.message
            }
        }

    },
    getNotes: () => {
        let notes = localStorage.getItem('notes')
        notes = notes ? JSON.parse(notes) : []
        return {success: true, data: notes}
    },
    toggleFavourite: (id) => {
       try {
           let notes = localStorage.getItem('notes')
           if (notes) {
               notes = JSON.parse(notes)
               let note = notes.find(item => item.id === id)
               note.isFavourite = !note.isFavourite
               localStorage.setItem('notes', JSON.stringify(notes))
               return {
                   success: true,
                   data: note
               }
           }
           return {success: false, message: 'Note not Found'}
       }catch (e) {
           return {success: false, message: e.message}
       }
    },
    toggleTrashed: (id) => {
       try {
           let notes = localStorage.getItem('notes')
           if (notes) {
               notes = JSON.parse(notes)
               let note = notes.find(item => item.id === id)
               note.isTrashed = !note.isTrashed
               localStorage.setItem('notes', JSON.stringify(notes))
               return {
                   success: true,
                   data: note
               }
           }
           return {success: false, message: 'Note not Found'}
       }catch (e) {
           return {success: false, message: e.message}
       }
    },
    deleteNote: (id) => {
       try {
           let notes = localStorage.getItem('notes')
           if (notes) {
               notes = JSON.parse(notes)
               let index = notes.findIndex(item => item.id === id)
               if (index !== -1) {
                   notes.splice(index, 1)
               }
               localStorage.setItem('notes', JSON.stringify(notes))
           }
           return {
               success: true,
           }
       }catch (e) {
           return {success: false, message: e.message}
       }
    }
}
export default {
    validate: (data) => {
        let errors = {length:0, title: [], description: []}
        if (data.title === '') {
            errors.title.push('Title is required.')
            errors.length++
        }
        if (data.title.length > 20) {
            errors.title.push('Title must be at least 20 characters.')
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
    getNotes: () => {
        let notes = localStorage.getItem('notes')
        notes = notes ? JSON.parse(notes) : []
        return {success: true, data: notes}
    }
}
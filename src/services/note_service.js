import axios from 'axios'

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
    addNote: async (data) => {
        try {
            let note = {
                title: data.title,
                description: data.description,
            }
            let response = await axios.post('http://127.0.0.1:3333/api/note', note)
            return response.data
        }
         catch (e) {
            return {success: false, message: e.message}
        }

    },
    updateNote: async (id, data) => {
        try {
            let note = {
                title: data.title,
                description: data.description,
            }
            let response = await axios.post('http://127.0.0.1:3333/api/note/'+id, note)
            return response.data
        } catch (e) {
            return {success: false, message: e.message}
        }

    },
    getNotes: async () => {
        try {
            let response = await axios.get('http://127.0.0.1:3333/api/note')
            return response.data
        }catch (e){
            return {success: false, message: e.message}
        }
    },
    toggleFavourite: async (id) => {
       try {
           let response = await axios.post('http://127.0.0.1:3333/api/note/'+id+'/toggle-favourite')
           return response.data
       }catch (e) {
           return {success: false, message: e.message}
       }
    },
    toggleTrashed: async (id) => {
       try {
           let response = await axios.post('http://127.0.0.1:3333/api/note/'+id+'/toggle-trashed')
           return response.data
       }catch (e) {
           return {success: false, message: e.message}
       }
    },

    deleteNote: async (id) => {
        try {
            let response = await axios.get('http://127.0.0.1:3333/api/note/'+id+'/delete')
            return response.data
        }catch (e) {
            return {success: false, message: e.message}
        }
    }
}
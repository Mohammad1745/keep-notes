import axios from 'axios'
import helper from "../helpers/helper";
import {API_BASE_URL} from "../helpers/core_constants"

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
            const headers = await helper.headers()
            let response = await axios.post(API_BASE_URL+'/api/note', note, {headers})
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
            const headers = await helper.headers()
            let response = await axios.post(API_BASE_URL+'/api/note/'+id, note, {headers})
            return response.data
        } catch (e) {
            return {success: false, message: e.message}
        }

    },
    getNotes: async () => {
        try {
            const headers = await helper.headers()
            let response = await axios.get(API_BASE_URL+'/api/note',{headers})
            return response.data
        }catch (e){
            return {success: false, message: e.message}
        }
    },
    toggleFavourite: async (id) => {
       try {
           const headers = await helper.headers()
           let response = await axios.post(API_BASE_URL+'/api/note/'+id+'/toggle-favourite', {},{headers})
           return response.data
       }catch (e) {
           return {success: false, message: e.message}
       }
    },
    toggleTrashed: async (id) => {
       try {
           const headers = await helper.headers()
           let response = await axios.post(API_BASE_URL+'/api/note/'+id+'/toggle-trashed', {},{headers})
           return response.data
       }catch (e) {
           return {success: false, message: e.message}
       }
    },

    deleteNote: async (id) => {
        try {
            const headers = await helper.headers()
            let response = await axios.get(API_BASE_URL+'/api/note/'+id+'/delete',{headers})
            return response.data
        }catch (e) {
            return {success: false, message: e.message}
        }
    }
}
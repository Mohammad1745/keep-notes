export default {
    headers () {
        const tokenString = sessionStorage.getItem('token')
        const token = JSON.parse(tokenString)
        return {
            Authorization: token.type+" "+token.token
        }
    }
}
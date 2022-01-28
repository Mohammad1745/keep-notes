export default function auth( to, from, next ) {
    if (to.name !== 'Login' && !sessionStorage.getItem('token') )
        next({ name: 'Login' })
    next()
}
const baseEndpoint = "https://librarymanagement-6vma.onrender.com/"
const endpoints = {
    users: baseEndpoint + "users",
    books: baseEndpoint + "books",
    login: baseEndpoint + "auth/login",
    genres: baseEndpoint + "genres",
    me: baseEndpoint + "/users/me"
}
export default endpoints
const baseEndpoint = "https://librarymanagement-6vma.onrender.com/"
const endpoints = {
    users: baseEndpoint + "users",
    books: baseEndpoint + "books",
    login: baseEndpoint + "auth/login",
    resetPassword: baseEndpoint + "/users/password_reset",
    genres: baseEndpoint + "genres",
    rules: baseEndpoint + "rules",
    bookshelf: baseEndpoint + "book_shelf",
    fineReceipts: baseEndpoint + "fine_receipts",
    me: baseEndpoint + "/users/me"
}
export default endpoints
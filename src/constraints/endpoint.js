const baseEndpoint = "https://librarymanagement-6vma.onrender.com/"
const endpoints = {
    users: baseEndpoint + "users/",
    user: baseEndpoint + "users/user/",
    user_borrow_book: baseEndpoint + "users/borrow_book/",
    user_password: baseEndpoint + "users/password/",
    book_borrow_sessions: baseEndpoint + "book_borrow_sessions/",
    book_borrow_records: baseEndpoint + "book_borrow_records/",
    book_return_records: baseEndpoint + "book_return_records/",
    books: baseEndpoint + "books/",
    book: baseEndpoint + "books/book/",
    user_admin: baseEndpoint + "users/for_admin/",
    book_reserve: baseEndpoint + "books/reserve/",
    login: baseEndpoint + "auth/login/",
    resetPassword: baseEndpoint + "users/password_reset/",
    genres: baseEndpoint + "genres/",
    rules: baseEndpoint + "rules/",
    bookshelf: baseEndpoint + "book_shelf/",
    fineReceipts: baseEndpoint + "fine_receipts/",
    me: baseEndpoint + "users/me/",
    max_borrow: baseEndpoint + "rules/max_borrow/",
    borrow_interval: baseEndpoint + "rules/borrow_interval/",
    max_publish_year: baseEndpoint + "rules/max_publish_year/",
    fine_per_day: baseEndpoint + "rules/fine_per_day/",
    borrow_due: baseEndpoint + "rules/borrow_due/",
    reserver_day:baseEndpoint + "rules/reserve_day/",
    max_age:baseEndpoint + "rules/max_age/",
    min_age:baseEndpoint +  "rules/min_age/",
    valid_period_of_user:baseEndpoint +  "rules/valid_period_of_user/",
    book_borrow_return_session:baseEndpoint + "book_borrow_return_histories/return_session/",
    book_borrow_return_user: baseEndpoint + "book_borrow_return_histories/user/",
    report_borrow_by_genres:baseEndpoint +  "reports/borrow_by_genres",
    report_pass_due: baseEndpoint + "reports/pass_due",
    
}
export default endpoints
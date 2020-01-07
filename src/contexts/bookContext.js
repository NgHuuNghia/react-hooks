import React, { createContext, useEffect, useReducer } from 'react';
import { BookReducer } from '../reducers/bookReducer';
export const BookContext = createContext();
// dùng reducer để gom hàm lại khai báo cho gọn ( ví dụ hàm add 1 bôk, hàm add 2 bôk, hàm ađd n bôk thì => gom lại vì quá nhiều)
const BookContextProvider = (props) => {
    
    const [books,dispatch] = useReducer(BookReducer,JSON.parse(localStorage.getItem('books')) ? JSON.parse(localStorage.getItem('books')) : []); 

    useEffect(() => {
        localStorage.setItem('books',JSON.stringify(books));
    }, [books])

    return (
        <BookContext.Provider value={{ books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
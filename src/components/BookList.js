import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { BookContext } from '../contexts/bookContext';
import AddBook from './AddBook';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import  NotiAnimation from '../components/shared/NotiAnimation';
import '../booklist.css';
const BookList = () => {

    const { theme } = useContext(ThemeContext);
    const { books, dispatch } = useContext(BookContext);
    const typeTheme = theme.isLightTheme ? theme.light : theme.dark;
    const [idHover, setHover] = useState(null);

    const inputRef = useRef(null);
    
    useEffect(() => {
        // console.log(inputRef.current);
        inputRef.current.focus();
    }, [books])

    return (
        <div className="book-list" style={{ background: typeTheme.bg, color: typeTheme.syntax }}>
            <ul>
                <TransitionGroup className="book-list">
                    {books.map(book => {
                        return (
                            <CSSTransition
                                key={book.id}
                                in={true}
                                timeout={300}
                                classNames="book"
                            >
                                <li onMouseLeave={(e) => setHover(null)} onMouseOver={(e) => setHover(book.id)} key={book.id} onClick={() => {
                                     dispatch({ type: 'REMOVE_BOOK', id: book.id});
                                     NotiAnimation('error',`Book : ${book.title}`, 'Xóa thành công', 'red', { 
                                        borderLeft: '5px solid red',
                                    });
                                     }} style={{ backgroundColor: idHover === book.id ? 'red' : typeTheme.ui }}>{book.title}</li>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
                <AddBook ref= { inputRef } />
            </ul>
        </div>
    );
}

export default BookList;

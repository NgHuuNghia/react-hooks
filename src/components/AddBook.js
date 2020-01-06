import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/bookContext';
import { Form,Input } from 'antd';

const AddBook = () => {
    const { dispatch } = useContext(BookContext);
    const [title,setTitle] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: {
            title: title // truyền parameter type và title cho reducer book
        }});
        setTitle('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
        </Form>
    );
}
 
export default AddBook;
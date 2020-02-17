import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/bookContext';
import { Form, Input } from 'antd';
import NotiAnimation from '../components/shared/NotiAnimation';

// eslint-disable-next-line no-empty-pattern
const AddBook = ({},ref) => {
    const { dispatch } = useContext(BookContext);
    const [title,setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: {
            title: title // truyền parameter type và title cho reducer book
        }});

        NotiAnimation('success',`Book : ${title}`, 'Thêm thành công', 'green', { 
            borderLeft: '5px solid green',
        });
        setTitle('');
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Input data-cy="input" ref={ ref } value={title} onChange={(e) => setTitle(e.target.value)}></Input>
        </Form>
    );
}
 
const forWaredInput = React.forwardRef(AddBook);

export default forWaredInput;
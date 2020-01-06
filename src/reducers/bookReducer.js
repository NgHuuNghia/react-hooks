import uuid from "uuid";

export const BookReducer = (state, action) => {

    switch(action.type){// type parameter từ component truyền vào
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title, // book parameter từ component truyền vào
                id: uuid.v1()
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id) //// id parameter từ component truyền vào
        default:
            return state
    }

}
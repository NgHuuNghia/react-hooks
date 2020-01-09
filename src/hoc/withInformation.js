import React from 'react';

const WithInformation = (WrappedComponent,props) => {
    console.log(props);
    return function () { // component
        // xử lí prop
        const newProps = {
            ...props,
            titlePopover: props.title 
        }
        return <WrappedComponent {...newProps}/>;
    
    }
}
 
export default WithInformation;
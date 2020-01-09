import React, { useState } from 'react';
import { Button, Popover } from 'antd';

const Contact = (props) => {

    const [visible,setVisible] = useState(false);
 

    const hide = () => {
        setVisible(false);
    };

    const handleVisibleChange = visible => {
        setVisible(visible);
    };

    return (
        <Popover
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            content={<a onClick={hide}>Close</a>}
            title={props.title}
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
        >
            <Button type="primary">Contact</Button>
        </Popover>
    );
}

export default Contact;
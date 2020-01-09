import React, { useState } from 'react';
import { Button, Popover, Input } from 'antd';

const About = (props) => {

    const [visible,setVisible] = useState(false);
    const [title,setTitle] = useState(props.titlePopover);

    const handleVisibleChange = visible => {
        setVisible(visible);
    };

    return (
        <Popover
            
            content= { 
                <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
            }
            title={title}
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
        >
            <Button style={{margin: "10px"}} type="primary">About</Button>
        </Popover>
    );
}

export default About;
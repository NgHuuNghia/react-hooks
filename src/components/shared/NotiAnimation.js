import React from 'react';
import { notification } from 'antd';

export default function NotiAnimation (type,description, message, messageColor, style) {
    
    notification[type]({
        className: 'notiAnimation',
        message: <span style={{color:`${messageColor}`}}>{message}</span>,
        description: description,
        duration: 2.5,  
        placement: 'topRight',
        style: style
      });
}
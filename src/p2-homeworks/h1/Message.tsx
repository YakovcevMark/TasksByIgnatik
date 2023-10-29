import React from 'react'
import s from './Message.module.css'
type PropsType ={
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            <div className={s.messageBody}>
                <div className={s.authorName}>{props.name}</div>
                <div className={s.messageText}>{props.message}</div>
                <div className={s.messageTime}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message

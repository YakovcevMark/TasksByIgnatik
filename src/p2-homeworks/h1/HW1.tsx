import React, {useState} from 'react'
import Message from "./Message";

type MessageType={
    avatar: string
    name: string
    message: string
    time: string
}


function HW1() {
    const [messages,setMessages] = useState<MessageType[]>([
        {
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Mark',
            message: 'I fell in love with typescript',
            time: '22:00',
        }
    ])
    const [newMessageText,setNewMessageText] = useState<string>("")

    function addNewMessage() {
        const today = new Date();
        const currentTime =`${today.getHours()}:${today.getMinutes()}`;
        setMessages(messages.concat({
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Mark',
            message: newMessageText,
            time: currentTime,
        }))
        setNewMessageText("");
    }
    const updateNewMessageText = (e: any) => {
        setNewMessageText(e.target.value);
    }
    return (
        <div>
            <hr/>
            {messages.map((m,i) => <Message
                key={i}
                avatar={m.avatar}
                name={m.name}
                message={m.message}
                time={m.time}
            />)}
            <textarea value={newMessageText} onChange={updateNewMessageText}/>
            <button onClick={addNewMessage}>Send Message</button>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1

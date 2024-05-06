import { messages } from "./data";
import Message from "./Message";


function MessageList() {
    return ( 
        <>
            {messages.map((message) => (
                <Message key={message.id}{...message} />
            ))}
        </>
     );
}

export default MessageList;
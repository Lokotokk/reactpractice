import '../message.css';

function Message(props) {
    return ( 
        <div className="message__box">
            <p className="message__text">{props.text}</p>
        </div>
     );
}

export default Message;
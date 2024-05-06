import { PropTypes } from "prop-types";

function Message({text, time, author}) {
    return ( 
        <div>
            <h4>Author {author}</h4>
            <p>{text}</p>
            <p>Post time: {time}</p>
        </div>
     );
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    author: PropTypes.number.isRequired,
};

export default Message;




import "./Message.styles.css";

const MessageComponent = (props) => {
  const { text } = props;

  return (
    <div className="message-component-container">
      <label className="message-component-value">{text}</label>
    </div>
  );
};

export default MessageComponent;

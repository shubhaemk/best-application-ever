import "./Button.styles.css";

const ButtonComponent = (props) => {
  const { handleClick, buttonText } = props;
  return (
    <button onClick={handleClick} className="button-element">
      {buttonText}
    </button>
  );
};

export default ButtonComponent;

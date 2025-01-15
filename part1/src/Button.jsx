const Button = (props) => {
    return (
      <button hidden={props.hidden ? props.hidden : ""} onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

  export default Button
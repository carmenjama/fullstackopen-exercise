import Button from "./Button";

const ButtonsUnicafe = (props) =>{
    const content = props.options.map((element) =>
        <div> 
            <Button id={"btn_add_"+element.name} onClick={element.click.addNewComment(element.name)} text={element.icon + " " + element.name} />
        </div>
      );
    return (content)
}

export default ButtonsUnicafe